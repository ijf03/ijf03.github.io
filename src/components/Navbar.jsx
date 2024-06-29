import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav className="mb-10 sm:mb-20 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
            <a className="text-mauve text-xl sm:text-4xl font-extrabold mx-2 sm:mx-5 px-2 sm:px-5 py-2">IJF Projects</a>
        </div>
        <div className="m-4 sm:m-8 flex items-center justify-center gap-3 sm:gap-8 text-xl sm:text-4xl text-mauve">
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
            <FaDiscord/>
            <FaSquareXTwitter/>
        </div>

    </nav>
  )
}

export default Navbar;