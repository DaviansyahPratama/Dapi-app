import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800 bg-[#070B1A] sticky top-0 z-50">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-orange-400">
        Foodies
      </h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-gray-300">

        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-orange-400 font-bold border-b-2 border-orange-400 pb-1"
            className="cursor-pointer hover:text-orange-400 transition"
          >
            Home
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="menu"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-orange-400 font-bold border-b-2 border-orange-400 pb-1"
            className="cursor-pointer hover:text-orange-400 transition"
          >
            Menu
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-orange-400 font-bold border-b-2 border-orange-400 pb-1"
            className="cursor-pointer hover:text-orange-400 transition"
          >
            Tentang
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="review"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            activeClass="text-orange-400 font-bold border-b-2 border-orange-400 pb-1"
            className="cursor-pointer hover:text-orange-400 transition"
          >
            Review
          </ScrollLink>
        </li>

      </ul>

      {/* Auth */}
      <div className="flex gap-3">

        <Link to="/login">
          <button className="px-5 py-2 border border-orange-400 rounded-lg hover:bg-orange-400 hover:text-black transition">
            Sign In
          </button>
        </Link>

        <Link to="/register">
          <button className="px-5 py-2 bg-orange-400 text-black rounded-lg font-semibold hover:bg-orange-300 transition">
            Sign Up
          </button>
        </Link>

      </div>
    </nav>
  );
}