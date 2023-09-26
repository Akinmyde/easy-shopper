import React, { useState } from "react";

import logo from "../images/logo.png";
import { Link } from "gatsby";
import Button from "./button";

const navItems = [
  { name: "Home", url: "/" },
  { name: "Pricing", url: "/pricing" },
  { name: "About us", url: "/about" },
  { name: "Contact", url: "/contact" },
];

const menuClass = "w-6 h-1 bg-black-normal mb-1 transition-all duration-500";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute left-[50%] z-10 -translate-x-[50%] w-full top-8">
      <div className="flex items-center container ">
        <img src={logo} alt="Logo" width={70} height={70} className="mr-12" />
        <ul
          className={`hidden items-center text-center gap-8 font-semibold md:flex`}
        >
          {navItems.map((item) => (
            <Link
              to={item.url}
              key={item.name}
              className=""
              activeStyle={{ color: "#3164f4" }}
            >
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="tertiary">Login</Button>
          <Button>Sign up</Button>
          <div
            className="block lg:hidden cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <div
              className={`${menuClass} mb-1 ${
                isMobileMenuOpen ? "rotate-menu" : ""
              }`}
            ></div>
            <div
              className={`${menuClass} mb-1 ${
                isMobileMenuOpen ? "hidden" : ""
              }`}
            ></div>
            <div
              className={`${menuClass} ${
                isMobileMenuOpen ? "-rotate-menu" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <ul
          className={`flex flex-col items-center text-center gap-8 font-semibold lg:hidden shadow-lg pb-6  bg-[#ededed]`}
        >
          {navItems.map((item) => (
            <Link
              to={item.url}
              key={item.name}
              className=""
              activeStyle={{ color: "#3164f4" }}
            >
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
