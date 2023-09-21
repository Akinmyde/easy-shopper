import * as React from "react";

import logo from "../images/logo.png";
import { Link } from "gatsby";
import Button from "./button";

const navItems = [
  { name: "Home", url: "/" },
  { name: "Pricing", url: "/pricing" },
  { name: "About us", url: "/about" },
  { name: "Contact", url: "/contact" },
];

const NavBar = () => {
  return (
    <nav className="absolute left-[50%] -translate-x-[50%] w-full top-8">
      <div className="flex items-center container ">
        <img src={logo} alt="Logo" width={70} height={70} className="mr-12" />
        <ul className="flex items-center text-center gap-8 font-semibold">
          {navItems.map((item) => (
            <Link to={item.url} className="" activeStyle={{ color: "#3164f4" }}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="tertiary">Login</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
