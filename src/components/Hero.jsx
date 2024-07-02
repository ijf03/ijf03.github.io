import {HERO_CONTENT} from '../constants/index.js';
import profilePic from '../assets/Profile.png'
import {motion} from 'framer-motion';

const container = (delay) => ({
    hidden: {x: -100, opacity: 0 },
    visible: {
        x:0,
        opacity: 1,
        transition: {duration:0.5, delay: delay}
    },
});

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-2 sm:pb-8 text-4xl sm:text-8xl tracking-tight lg:mt-16 text-lavender_blush font-medium">
                            Isabelle Fernan
                        </motion.h1>
                        <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.2}}  
                        whileTap={{ scale: 1.1 }}
                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }}
                        className="bg-gradient-to-r from-light_tiffany_blue from-30% via-mauve via-50% to-apricot to-70% bg-clip-text text-xl sm:text-4xl tracking-tight text-transparent font-bold ">
                            Full-Stack Developer
                        </motion.span>
                        <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.2}}  
                        whileTap={{ scale: 1.1 }}
                        drag="x"
                        dragConstraints={{ left: -100, right: 100 }}
                        className="bg-gradient-to-r from-apricot from-30% via-mauve via-50% to-light_tiffany_blue  to-70% bg-clip-text text-xl sm:text-4xl tracking-tight text-transparent font-bold ">
                            Programmer
                        </motion.span>
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter text-lavender_blush">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <motion.div
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration:1, delay: 1.3}}
                    className="flex justify-center bg-apricot rounded-3xl">
                    <img src={profilePic} alt='Picture of Isabelle Fernan'/>

                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Hero;