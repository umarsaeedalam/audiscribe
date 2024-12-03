'use client'

import localFont from 'next/font/local'

type Props = {
    error: Error & { digest?: string }
    reset: () => void
}

const local = localFont({
    src: '../fonts/hefton/Hefton-FreeDemo.otf',
    display: 'swap',
})

function Error({ error, reset }: Props) {
    return(
        <main className='h-screenA max-[1000px]:h-screenB flex flex-col items-center justify-center font-semibold'>
            <h1 className={`${local.className} text-secondary-500 text-9xl max-[400px]:text-8xl tracking-wide`}>Error</h1>

            <div className='flex flex-col items-center justify-center gap-5 max-[400px]:gap-4'>
                <p className='text-secondary-400 text-xl max-[400px]:text-lg'>{error.message}</p>
                
                <button onClick={reset} className='text-primary-50 text-base max-[400px]:text-sm bg-accent-600 hover:bg-accent-700 py-2 px-10 max-[400px]:px-8 rounded-lg outline-none focus-visible:outline-secondary-500 transition-all ease-in-out duration-200 transform active:scale-90'>Try again</button>
            </div>
        </main>
    )
}

export default Error;