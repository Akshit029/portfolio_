import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4 md:px-8">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-4xl font-bold font-serif cursor-pointer">AKSHIT</h1>
      </div>
      
      {/* Social Icons */}
      <div className="flex items-center justify-center gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/akshit-chadgal-b706a7294" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://github.com/akshit029" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/akshit0_8" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
