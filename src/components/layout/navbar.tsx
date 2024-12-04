'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import localFont from 'next/font/local';
import MobileNavBar from "./mobile-navbar";

const local = localFont({
    src: '../../fonts/hefton/Hefton-FreeDemo.otf',
    display: 'swap',
})

function NavBar() {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 rounded-lg pt-4 max-[1000px]:pt-3 z-50">
            <nav className="flex mx-10 max-[1000px]:mx-8 max-[700px]:mx-6 py-2 px-4 max-[1000px]:px-3 max-[1000px]:text-15 justify-start max-[700px]:justify-between items-center rounded-md bg-white backdrop-filter backdrop-blur-sm bg-opacity-40 border border-white/40">
                <Link href="/" aria-label="Home" className={`${local.className} text-center mt-1 antialiased text-2xl max-[1000px]:text-23 max-[700px]:justify-between max-[700px]:self-start tracking-wide text-accent-600 rounded-md outline-none focus-visible:outline-secondary-500`}>Audiscribe</Link>
        
                <ul className="flex gap-8 max-[1000px]:gap-6 max-[700px]:hidden  absolute left-1/2 -translate-x-1/2">
                    <li><Link href="/transcribe" className={`${(pathname === '/transcribe') ? 'underline text-accent-600 focus-visible:outline-secondary-500': 'focus-visible:outline-accent-600'} hover:underline underline-offset-4 transition-colors ease-in-out duration-200 rounded-md outline-none`}>Transcribe</Link></li>

                    <li><Link href="/features" className={`${(pathname === '/features') ? 'underline text-accent-600 focus-visible:outline-secondary-500': 'focus-visible:outline-accent-600'} hover:underline underline-offset-4 transition-colors ease-in-out duration-200 rounded-md outline-none`}>Features</Link></li>
                    
                    <li><Link href="/faq" className={`${(pathname === '/faq') ? 'underline text-accent-600 focus-visible:outline-secondary-500': 'focus-visible:outline-accent-600'} hover:underline underline-offset-4 transition-colors ease-in-out duration-200 rounded-md outline-none`}>FAQs</Link></li>
                </ul>

                <div className='min-[700px]:hidden'>
                    <MobileNavBar />
                </div>
            </nav>
        </header>
    )
}

export default NavBar;