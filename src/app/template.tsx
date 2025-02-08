'use client'

import NavBar from "@/components/layout/navbar";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const pageVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

function Template({ children }: { children: React.ReactNode }) {
    const path = usePathname()

    return (
        <>
            {path !== '/' && <NavBar />}

            <AnimatePresence mode="wait">
                <motion.div variants={pageVariants} initial={path !== '/' && 'hidden'} animate={path !== '/' && 'visible'} >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )        
}

export default Template;