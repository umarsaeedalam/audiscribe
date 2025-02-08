'use client'

import Link from 'next/link';
import { motion } from "motion/react"
import NavBar from "@/components/layout/navbar";

const titleVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 0.4
        }
    }
}

const subtitleVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 1.0
        }
    }
}

const buttonsVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 1.6
        }
    }
}

function LandingPage() {
    return (
        <>
            <NavBar />
            
            <section className="h-screenA max-[1000px]:h-screenB flex justify-center items-center px-6">
                <div className="mx-10 max-[1000px]:mx-8 max-[700px]:mx-6 w-2/3 max-[1000px]:w-full flex flex-col gap-6 -translate-y-35 max-[1000px]:-translate-y-33">
                    <motion.h1 variants={titleVariants} initial='hidden' animate='visible' className="text-center text-accent-600 text-10xl max-[1000px]:text-9xl max-[700px]:text-6xl font-semibold">Pro Features, Zero Cost</motion.h1>
                    
                    <motion.p variants={subtitleVariants} initial='hidden' animate='visible' className="text-center text-22 max-[1000px]:text-lg max-[700px]:text-base text-secondary-400">
                        Powered by AssemblyAI with enhanced navigation, instant playback, and smart features. Professional transcription made free and friendly.
                    </motion.p>
            
                    <motion.div variants={buttonsVariants} initial='hidden' animate='visible' className="flex justify-center items-center gap-3 mt-2">
                        <Link href='/transcribe' className="outline-none focus-visible:outline-secondary-500 rounded-md">
                            <button className="text-19 max-[1000px]:text-md max-[700px]:text-base w-32 max-[1000px]:w-30 max-[700px]:w-28 py-2 text-center bg-accent-600 hover:bg-accent-700 rounded-md text-primary-50 outline-none transition-all ease-in-out duration-200 transform active:scale-90">Transcribe</button>
                        </Link>

                        <Link href='/features' className="outline-none focus-visible:outline-accent-600 rounded-md">
                            <button className="text-19 max-[1000px]:text-md max-[700px]:text-base w-32 max-[1000px]:w-30 max-[700px]:w-28 py-2 text-center bg-secondary-400 hover:bg-secondary-300 rounded-md text-primary-50 outline-none transition-all ease-in-out duration-200 transform active:scale-90">Features</button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default LandingPage;