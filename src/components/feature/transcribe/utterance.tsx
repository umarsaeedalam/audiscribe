import localFont from 'next/font/local';
import { Dispatch, RefObject, SetStateAction } from "react";
import { IoPlay } from "react-icons/io5";
import { formatTime } from "@/lib/functions";
import { Status } from "@/utils/types";
import { Transcript, TranscriptWord } from "assemblyai";
import EditSpeaker from "./edit-speaker";
import Word from "./word";


type Props = {
    transcript: Transcript;
    start: number;
    speaker: string;
    words: TranscriptWord[];
    currentTime: number;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    audioRef: RefObject<HTMLAudioElement>;
    isPlaying: boolean;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
    setStatus: Dispatch<SetStateAction<Status>>
}

const local = localFont({
    src: '../../../fonts/amasis mt/Amasis MT Std Light.ttf',
    display: 'swap',
})

function Utterance({ transcript, start, speaker, words, currentTime, setCurrentTime, audioRef, isPlaying, setIsPlaying, setStatus }: Props) {
    function handlePlay() {
        if (audioRef.current) {
            audioRef.current.currentTime = start / 1000;
            setCurrentTime(start / 1000);

            if (!isPlaying) {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    }

    return (
        <div className='flex flex-col gap-2 max-[1000px]:gap-[6px] max-[700px]:gap-1'>
            <div className="flex items-center gap-4">
                <div className={`${local.className} flex items-center gap-2`}>
                    <span className="text-md max-[1000px]:text-17 max-[700px]:text-base font-semibold">{speaker}</span>
                    
                    <span className="text-secondary-300 text-sm max-[700px]:text-13">[{formatTime(start)}]</span>
                </div>

                <div className="flex gap-2 items-center">
                    <button type="button" onClick={handlePlay} aria-label="Play segment" className="bg-accent-600 hover:bg-accent-800 text-primary-50 rounded p-1 max-[700px]:p-[3px] transition-all ease-in-out duration-200 transform active:scale-90">
                        <IoPlay />
                    </button>

                    <EditSpeaker 
                        transcript={transcript}
                        speaker={speaker}
                        setStatus={setStatus} 
                    />
                </div>
            </div>

            <div>
                <p className={`${local.className}`}>
                    {words.map((word, index) => 
                        <Word 
                            key={index} 
                            text={word.text} 
                            start={word.start}
                            end={word.end}
                            currentTime={currentTime}
                            setCurrentTime={setCurrentTime}
                            audioRef={audioRef} 
                        />
                    )}
                </p>
            </div>
        </div>
    )
}

export default Utterance;