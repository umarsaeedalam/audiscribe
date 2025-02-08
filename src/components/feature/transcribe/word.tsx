import { Dispatch, SetStateAction, RefObject } from "react";
import { motion } from "motion/react";

type Props = {
    text: string;
    start: number;
    end: number;
    currentTime: number;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    audioRef: RefObject<HTMLAudioElement>
}

const BUFFER = 100

function Word({ text, start, end, currentTime, setCurrentTime, audioRef }: Props) {
    const highlight = (currentTime >= start / 1000) && (currentTime <= (end + BUFFER) / 1000)

    function handleOnClick() {
        if (audioRef.current) {
            audioRef.current.currentTime = start / 1000;
            setCurrentTime(start / 1000);
        }
    }

    return (
        <span onClick={handleOnClick} className={`py-[3px] relative text-md max-[1000px]:text-17 max-[700px]:text-base ${(highlight) ? 'text-accent-600' : 'text-secondary-500 hover:underline underline-offset-4 hover:cursor-pointer hover:text-secondary-300 transition-colors duration-100 ease-in-out'}`}>
            {`${text} `}
            {highlight && <motion.div layoutId='word' className="absolute inset-0 border-b-1 border-accent-600 -z-30" />}
        </span>
    )
}

export default Word;