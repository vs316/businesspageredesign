import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../images/logo.jpg";
import { links } from "../data";
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the navigation menu
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavShowing(false);
      }
    };

    // Add event listener when the navigation menu is shown
    if (isNavShowing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the navigation menu is hidden
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavShowing]);

  return (
    <nav>
      <div className="container nav__container" ref={navRef}>
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
