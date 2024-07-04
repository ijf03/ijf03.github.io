import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <nav className="mb-10 sm:mb-20 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
            <span className="text-mauve text-xl sm:text-4xl font-extrabold mx-2 sm:mx-5 px-2 sm:px-5 py-2">IJF Projects</span>
        </div>
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
    </nav>
  )
}

export default Navbar;