import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
    metadataBase: new URL('https://audiscribe.vercel.app'),
    title: { 
        template: '%s | Audiscribe', 
        default: 'Audiscribe' 
    },
    description: 'Free AssemblyAI-powered transcription tool with speaker recognition, time-synced navigation, and polished document exports. Intuitive, fast, and private.',
    icons: {
        icon: [
            { url: '../app/favicon.ico', sizes: '48x48' }, 
            { url: '../../public/favicon/android-chrome-192x192.png', sizes: '192x192' }
        ],
        apple: [
            { url: '../../public/favicon/apple-touch-icon.png', sizes: '180x180' }
        ],
    },
    openGraph: {
        title: 'Audiscribe',
        description: 'Free AssemblyAI-powered transcription tool with speaker recognition, time-synced navigation, and polished document exports. Intuitive, fast, and private.',
        url: 'https://audiscribe.vercel.app',
        siteName: 'Audiscribe',
        images: [
            {
                url: '../../public/og-image.png', 
                width: 1900,
                height: 1036,          
                alt: 'Audisccribe Transcription Preview'
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Audiscribe',
        description: 'Free AssemblyAI-powered transcription tool with speaker recognition, time-synced navigation, and polished document exports. Intuitive, fast, and private.',
        images: ['../../public/og-image.png'], 
    },
    robots: {
        index: true,
        follow: true,
    },
    manifest: '../../public/favicon/site.webmanifest'
};

const local = localFont({
    src: '../fonts/gonzaga/GonzagaVariable-Roman-BF66cfe9019b825.ttf',
    display: 'swap',
})

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body className={`${local.className} antialiased text-secondary-500`}>
                <Providers>
                    <div className="bg-flasko-gradient relative">
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,245,238,1))]" />
                        
                        <div className="relative z-10">
                            {children}
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
