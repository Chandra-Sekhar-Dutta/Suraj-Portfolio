import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/5 backdrop-blur-sm px-6 py-6 fixed top-0 left-0 w-full z-50 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold hover:text-yellow-300 transition">
          Pinni Suraj
        </h1>

        <div className="flex flex-wrap justify-center md:justify-end gap-6 mt-3 md:mt-0 text-sm md:text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-200 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-200 transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/works"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-200 transition"
            }
          >
            Works
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-300 font-semibold"
                : "hover:text-yellow-200 transition"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
