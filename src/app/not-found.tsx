import Link from 'next/link'
import localFont from 'next/font/local'

const local = localFont({
    src: '../fonts/hefton/Hefton-FreeDemo.otf',
    display: 'swap',
})

function NotFound() {
    return(
        <main className='h-screenA max-[1000px]:h-screenB flex flex-col items-center justify-center font-semibold'>
            <h1 className={`${local.className} text-secondary-500 text-9xl max-[400px]:text-8xl tracking-wide`}>404</h1>

            <div className='flex flex-col items-center justify-center gap-5 max-[400px]:gap-4'>
                <p className='text-secondary-400 text-xl max-[400px]:text-lg'>Sorry<span>!</span> There is nothing here...</p>
                
                <Link href="/" className='text-primary-50 text-base max-[400px]:text-sm bg-accent-600 hover:bg-accent-700 py-2 px-10 max-[400px]:px-8 rounded-lg outline-none focus-visible:outline-secondary-500 transition-all ease-in-out duration-200 transform active:scale-90'>Home</Link>
            </div>
        </main>
    )
}

export default NotFound;