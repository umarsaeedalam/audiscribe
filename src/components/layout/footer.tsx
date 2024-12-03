import localFont from 'next/font/local';
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";


const local = localFont({
    src: '../../fonts/hefton/Hefton-FreeDemo.otf',
    display: 'swap',
})

function Footer() {
    return (
        <footer className="relative mx-10 max-[1000px]:mx-8 max-[700px]:mx-6 pb-8">
            <div className="flex justify-between items-center mb-4 px-10 max-[1000px]:px-8 max-[700px]:px-6">
                <h2 className={`${local.className} text-center mt-1 antialiased text-2xl max-[700px]:text-xl tracking-wide text-accent-600`}>Audiscribe</h2>
    
                <nav>
                    <ul className="flex gap-4 max-[700px]:gap-2 items-center">
                        <li>
                            <a href="https://github.com/umarsaeedalam/audiscribe" target="_blank" rel="noopener noreferrer" className="text-3xl max-[640px]:text-2xl text-[#181717] hover:text-[#181717]/70 transition-colors ease-in-out duration-200">
                                <FaGithub />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/umarsaeedalam" target="_blank" rel="noopener noreferrer" className="text-4xl max-[640px]:text-3xl text-[#0A66C2] hover:text-[#0A66C2]/70 transition-colors ease-in-out duration-200">
                                <IoLogoLinkedin />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="relative h-4 mb-2">
                <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-secondary-500" />
                    
                <div className="absolute left-0 right-0 top-0 h-[1px] bg-secondary-500" />
                    
                <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-secondary-500" />
            </div>
    
            <p className="text-center max-[700px]:text-15">© 2024 | Made by Umar Saeed</p>
        </footer>
    )
}

export default Footer;