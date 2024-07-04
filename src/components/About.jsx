import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import {motion} from 'framer-motion'


const About = () => {
  return (
    <div className='pb-24'>
        <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration: 0.5}}
            className="my-20 text-center text-4xl">About <span className="text-mauve">Me</span></motion.h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <motion.div
                whileInView={{opacity: 1, x:0, }}
                initial={{opacity: 0, x: -100}}
                transition={{duration:0.5}}
                className="flex intems-center justify-center">
                    <img src={aboutImg} alt="about" className="rounded-2xl" />
                </motion.div>
            </div>
                <motion.div 
                whileInView={{opacity: 1, x:0, }}
                initial={{opacity: 0, x: 100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2">
                    <div className="flexjustify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>

                    </div>
                </motion.div>
            </div>
        </div>
  )
}

export default About