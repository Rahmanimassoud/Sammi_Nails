import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const nav = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Services",
      route: "/Services",
    },
    {
      name: "Gallery",
      route: "/Gallery",
    },
    {
      name: "About",
      route: "/About",
    },
    {
      name: "Contact",
      route: "/Contact",
    },
  ];

  const handleClick = () => {
    navigate("/contact");
  };

  
  return (
    <nav id="navbar">
      <h1 className="siteName" onClick={() => navigate("/")}>
        Sammi Nails Spa
      </h1>
      <ul className="navItems">
        {nav.map((link) => {
          return (
            <li key={link.name} className="navLink">
              <Link to={link.route}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
      <button className="contactUs" onClick={handleClick}>
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;