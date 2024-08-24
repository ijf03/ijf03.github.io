import {CONTACT} from '../constants';
import {motion} from 'framer-motion'
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y:-100}}
                transition={{duration: 0.5}}
                className="my-10 text-center text-4xl">Get in Touch</motion.h1>
            <motion.div
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration: 0.5}}
                className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <div className="m-4 sm:m-8 flex items-center justify-center gap-3 sm:gap-8 text-xl sm:text-4xl text-mauve">
                <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/ijf03" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="https://github.com/ijf03" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </motion.a>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;