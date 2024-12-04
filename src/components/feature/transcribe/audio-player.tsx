import { formatAudioPlayerTime } from '@/lib/functions';
import { useState, Dispatch, SetStateAction, RefObject } from 'react';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";
import { Slider } from "@/components/ui/shadcn/slider"
import { SlSpeedometer } from "react-icons/sl";
import { Slider2 } from '../../ui/shadcn/slider-2';

type Props = {
    audioURL: string;
    audioRef: RefObject<HTMLAudioElement>;
    currentTime: number;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    isPlaying: boolean;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
}

function AudioPlayer({ audioURL, currentTime, setCurrentTime, audioRef, isPlaying, setIsPlaying }: Props) {
    const [duration, setDuration] = useState(0);
    const [speed, setSpeed] = useState(1.0);

    function togglePlay() {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    function handleTimeUpdate() {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    function handleLoadedMetadata() {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    function handleSeek(value: number[]) {
        if (audioRef.current && Array.isArray(value)) {  // Type guard to check if it's an array
            audioRef.current.currentTime = value[0];
            setCurrentTime(value[0]);
        }
    };

    function handleSpeedChange(newSpeed: number) {
        if (audioRef.current) {
            audioRef.current.playbackRate = newSpeed;
            setSpeed(newSpeed);
        }
    };

    function skip(seconds: number) {
        if (audioRef.current) {
            audioRef.current.currentTime = currentTime + seconds;
        }
    };

    return (
        <div className="fixed bottom-10 max-[1000px]:bottom-8 max-[700px]:bottom-6 -left-2 max-[1300px]:left-0 right-0 w-full px-10 max-[1000px]:px-8 max-[700px]:px-6">
            <div className='max-w-xxl w-full mx-auto'>
                <div className='bg-white rounded-md p-6 backdrop-filter backdrop-blur-sm bg-opacity-40 border border-white/40'>
                    <audio ref={audioRef} src={audioURL} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} />
                    
                    <div className="flex flex-col gap-5 max-[1000px]:gap-4">
                        <div className="flex items-center text-15 max-[700px]:text-sm">
                            <span className='w-10 mr-[10px] text-left font-semibold'>{formatAudioPlayerTime(currentTime)}</span>

                            <Slider 
                                min={0}
                                value={[currentTime]}
                                max={duration} 
                                step={0.1} 
                                onValueChange={handleSeek} 
                                className="w-full rounded" 
                            />

                            <span className='w-10 ml-4 font-semibold'>{formatAudioPlayerTime(duration)}</span>
                        </div>

                        <div className="relative flex items-center justify-end max-[700px]:justify-between w-full">
                            <div className="min-[700px]:absolute min-[700px]:left-1/2 min-[700px]:-translate-x-1/2">
                                <div className="flex gap-5 max-[1000px]:gap-4 max-[700px]:gap-3">
                                    <button onClick={() => skip(-10)}>
                                        <TbRewindBackward10 className='text-lg max-[700px]:text-md hover:text-secondary-400 transition-all ease-in-out duration-200 transform active:scale-90' />
                                    </button>

                                    <button onClick={togglePlay} className='p-2 max-[700px]:p-[7px] bg-accent-600 hover:bg-accent-800 rounded-md transition-all ease-in-out duration-200 transform active:scale-90'>
                                        {isPlaying ? <FaPause className='text-xl max-[700px]:text-lg text-primary-50' /> : <FaPlay className='text-xl text-primary-50' />}
                                    </button>

                                    <button onClick={() => skip(10)}>
                                        <TbRewindForward10 className='text-lg max-[700px]:text-md hover:text-secondary-400 transition-all ease-in-out duration-200 transform active:scale-90' />
                                    </button>
                                </div>
                            </div>

                            <div className='flex items-center gap-3 max-[700px]:gap-2'>
                                <SlSpeedometer className='text-22 max-[1000px]:text-md max-[700px]:text-17' />

                                <Slider2
                                    defaultValue={[1.0]}
                                    min={0.5}
                                    max={2}
                                    step={0.1}
                                    className='w-24'
                                    onValueChange={(value) => handleSpeedChange(value[0])}
                                />

                                <div className='font-semibold max-[700px]:text-sm w-8'>{(speed === 1 ? '1.0x' : `${speed}x` )}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AudioPlayer;