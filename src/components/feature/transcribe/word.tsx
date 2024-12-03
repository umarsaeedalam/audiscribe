import { Dispatch, SetStateAction, RefObject } from "react";

type Props = {
    text: string;
    start: number;
    end: number;
    currentTime: number;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    audioRef: RefObject<HTMLAudioElement>
}

function Word({ text, start, end, currentTime, setCurrentTime, audioRef }: Props) {
    const highlight = (currentTime >= start / 1000) && (currentTime <= end / 1000)
    
    function handleOnClick() {
        if (audioRef.current) {
            audioRef.current.currentTime = start / 1000;
            setCurrentTime(start / 1000);
        }
    }

    return (
        <span onClick={handleOnClick} className={`py-[3px] text-md max-[1000px]:text-17 max-[700px]:text-base ${(highlight) ? 'text-accent-600 underline underline-offset-4' : 'hover:underline underline-offset-4 hover:cursor-pointer hover:text-secondary-300 transition-colors duration-100 ease-in-out'}`}>{text} </span>
    )
}

export default Word;