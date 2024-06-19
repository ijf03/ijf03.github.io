import {HERO_CONTENT} from '../constants/index.js';
import profilePic from '../assets/Profile.png'

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-2 sm:pb-8 text-4xl sm:text-8xl tracking-tight lg:mt-16 font-thin text-lavender_blush">Isabelle Fernan</h1>
                        <span className="bg-gradient-to-r from-bright_pink_(crayola) from-30% via-lavender_blush via-50% to-tiffany_blue to-70% bg-clip-text text-xl sm:text-4xl tracking-tight text-transparent font-bold ">
                            Full-Stack Developer
                        </span>
                        <span className="bg-gradient-to-r from-tiffany_blue from-30% via-lavender_blush via-50% to-bright_pink_(crayola)  to-70% bg-clip-text text-xl sm:text-4xl tracking-tight text-transparent font-bold ">
                            Programmer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-lavender_blush">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className="flex justify-center bg-lavender_blush rounded-3xl">
                    <img src={profilePic} alt='Picture of Isabelle Fernan'/>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero;