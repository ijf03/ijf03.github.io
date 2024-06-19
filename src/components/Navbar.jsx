
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav className="bg-purpureus lmb-20 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
            <a className="text-white text-4xl font-extrabold mx-5 px-5 py-2">IJF</a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
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