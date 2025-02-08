'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import localFont from 'next/font/local';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/shadcn/sheet";

const local = localFont({
    src: '../../fonts/hefton/Hefton-FreeDemo.otf',
    display: 'swap',
})

function MobileNavBar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname()

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button className="p-2 hover:text-accent-600 rounded-md transition-all ease-in-out duration-200 transform active:scale-90 !outline-none !ring-0 focus-visible:!outline-secondary-500">
                    <RxHamburgerMenu />
                </button>
            </SheetTrigger>

            <SheetContent side='top' className="w-svw rounded-lg bg-white backdrop-filter backdrop-blur-sm bg-opacity-30 border border-white/40">
                <SheetHeader className="mb-5">
                    <SheetTitle className="text-center">
                        <Link onClick={() => setOpen(false)} href="/" aria-label="Home" className={`${local.className} text-center antialiased text-23 tracking-wide text-accent-600 rounded-md outline-none focus-visible:outline-secondary-500`}>Audiscribe</Link>
                    </SheetTitle>
                </SheetHeader>
                <nav>                
                    <ul className="flex flex-col gap-4 justify-center items-stretch w-full text-primary-900 text-15">
                        <li className="flex justify-center" onClick={() => setOpen(false)}>
                            <Link href="/transcribe" className={`${(pathname === '/transcribe') ? 'underline text-accent-600': ''}  hover:underline underline-offset-4 transition-colors ease-in-out duration-200 rounded-md outline-none focus-visible:outline-accent-600`}>Transcribe</Link>
                        </li>

                        <li className="flex justify-center" onClick={() => setOpen(false)}>
                            <Link href="/faq" className={`${(pathname === '/faq') ? 'underline text-accent-600': ''}  hover:underline underline-offset-4 transition-colors ease-in-out duration-200 rounded-md outline-none focus-visible:outline-accent-600`}>FAQs</Link>
                        </li>

                        <li className="flex justify-center" onClick={() => setOpen(false)}>
                            <Link href="/features" className={`${(pathname === '/features') ? 'underline text-accent-600': ''}  hover:underline underline-offset-4 transition-colors ease-in-out duration-200 rounded-md outline-none focus-visible:outline-accent-600`}>Features</Link>
                        </li>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavBar;
