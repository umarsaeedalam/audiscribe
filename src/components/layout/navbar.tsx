'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { motion } from "motion/react";
import localFont from 'next/font/local';
import MobileNavBar from "./mobile-navbar";

const local = localFont({
    src: '../../fonts/hefton/Hefton-FreeDemo.otf',
    display: 'swap',
})

const navVariants = {
    hidden: {
        opacity: 0,
        y: -70
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 2.2
        }
    }
}

function NavBar() {
    const pathname = usePathname()

    return (
        <motion.header variants={navVariants} initial={pathname === '/' && 'hidden'} animate={pathname === '/' && 'visible'} className="top-0 rounded-lg pt-4 max-[1000px]:pt-3 z-50">
            <nav className="flex mx-10 max-[1000px]:mx-8 max-[700px]:mx-6 py-2 px-4 max-[1000px]:px-3 max-[1000px]:text-15 justify-start max-[700px]:justify-between items-center rounded-md bg-white backdrop-filter backdrop-blur-sm bg-opacity-40 border border-white/40">
                <Link href="/" aria-label="Home" className={`${local.className} text-center mt-1 max-[700px]:mt-0  max-[700px]:mb-1 antialiased text-2xl max-[1000px]:text-23 max-[700px]:justify-between tracking-wide text-accent-600 rounded-md outline-none focus-visible:outline-secondary-500`}>Audiscribe</Link>
        
                <ul className="flex gap-8 max-[1000px]:gap-6 max-[700px]:hidden  absolute left-1/2 -translate-x-1/2">
                    <li className="relative">
                        <Link href="/transcribe" className={`${(pathname === '/transcribe') ? 'text-accent-600 hover:text-accent-600 focus-visible:outline-secondary-500': 'focus-visible:outline-accent-600 hover:text-accent-400'} transition-colors ease-in-out duration-200 rounded-md outline-none`}>Transcribe</Link>

                        {pathname === '/transcribe' && <motion.div layoutId="nav" className="absolute inset-0 -z-50 border-b-1 border-accent-600" />}
                    </li>

                    <li className="relative">
                        <Link href="/features" className={`${(pathname === '/features') ? 'text-accent-600 hover:text-accent-600 focus-visible:outline-secondary-500': 'focus-visible:outline-accent-600 hover:text-accent-400'} underline-offset-4 transition-colors ease-in-out duration-200 rounded-md outline-none`}>Features</Link>
                    
                        {pathname === '/features' && <motion.div layoutId="nav" className="absolute inset-0 -z-50 border-b-1 border-accent-600" />}
                    </li>
                    
                    <li className="relative">
                        <Link href="/faq" className={`${(pathname === '/faq') ? 'text-accent-600 focus-visible:outline-secondary-500': 'focus-visible:outline-accent-600 hover:text-accent-400'} underline-offset-4 transition-colors ease-in-out duration-200 rounded-md outline-none`}>FAQs</Link>
                    
                        {pathname === '/faq' && <motion.div layoutId="nav" className="absolute inset-0 -z-50 border-b-1 border-accent-600" />}
                    </li>
                </ul>

                <div className='min-[700px]:hidden'>
                    <MobileNavBar />
                </div>
            </nav>
        </motion.header>
    )
}

export default NavBar;