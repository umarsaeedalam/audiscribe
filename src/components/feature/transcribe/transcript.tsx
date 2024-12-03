import { Transcript } from "assemblyai";
import Utterance from "./utterance";
import { FilePondFile } from 'filepond';
import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import AudioPlayer from "./audio-player";
import { Status } from "@/utils/types";
import { GrPowerReset } from "react-icons/gr";
import ExportTranscript from "./export-button";

type Props = {
    transcript: Transcript;
    audioFile: FilePondFile;
    setFiles: Dispatch<SetStateAction<FilePondFile[]>>
    setStatus: Dispatch<SetStateAction<Status>>
}

function TranscriptPage({ transcript, audioFile, setFiles, setStatus }: Props) {
    const [audioURL, setAudioURL] = useState<string>('');
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    if (!transcript.utterances) {
        throw new Error('No utterances found in the transcript. The transcript may still be processing.');
    }

    if (transcript.utterances === null || transcript.utterances.length === 0) {
        throw new Error('Transcript contains no speech segments. The audio might be silent or unclear.');
    }

    useEffect(() => {
        const url = URL.createObjectURL(audioFile.file);
        setAudioURL(url);

        return () => {
            if (url) URL.revokeObjectURL(url);
        };
    }, [audioFile]);

    function handleOnReTranscribe() {
        setStatus({ status: 'Idle', transcript: null });
        setFiles([]);
    }

    return (
            <section className="flex flex-col items-center mt-8 max-[1000px]:mt-6 max-[700px]:mt-4 pb-48 px-10 max-[1000px]:px-8 max-[700px]:px-6">
                <div className="max-w-xxl w-full flex items-center justify-end gap-2">
                    <ExportTranscript utterances={transcript.utterances} />

                    <button onClick={handleOnReTranscribe} className="p-2 max-[1000px]:p-[7px] max-[700px]:p-[6px] rounded-md bg-accent-600 hover:bg-accent-700 text-primary-50 transition-all ease-in-out duration-200 transform active:scale-90">
                        <GrPowerReset className="text-xl max-[1000px]:text-md max-[700px]:text-17" />
                    </button>
                </div>

                <div className="max-w-xxl flex flex-col gap-6 max-[1000px]:gap-5 max-[700px]:gap-4">
                    {transcript.utterances.map((utterance, index) => 
                        <Utterance 
                            key={index}
                            transcript={transcript} 
                            start={utterance.start} 
                            speaker={utterance.speaker} 
                            words={utterance.words}
                            currentTime={currentTime}
                            setCurrentTime={setCurrentTime}
                            audioRef={audioRef}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            setStatus={setStatus} 
                        />
                    )}

                    {audioURL && (<AudioPlayer 
                        audioURL={audioURL}
                        audioRef={audioRef}
                        currentTime={currentTime}
                        setCurrentTime={setCurrentTime}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying} 
                    />)}
                </div>
            </section>
    )
}

export default TranscriptPage;