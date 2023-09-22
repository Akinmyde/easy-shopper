import React from "react";

import logo from "../images/logo.png";

const footerItems = [
  {
    columns: ["Home", "Pricing", "About us", "Contact"],
  },
  {
    columns: ["Facebook", "Instagram", "Twitter", "Linkedin"],
  },
  {
    columns: ["Privacy Policy", "Terms of Service"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-300 pt-8 pb-24">
      <div className="container flex justify-between items-start flex-wrap">
        <div>
          <div>
            <img src={logo} alt="Logo" width={70} height={"auto"} />
          </div>
          <p className="text-black-900">2023 &copy; Easy Shopr</p>
          <p className="text-black-900">All rights reserved.</p>
        </div>

        {footerItems.map((item, index) => (
          <ul
            key={String(index)}
            className="font-semibold text-black-100 grid gap-4"
          >
            {item.columns.map((column) => (
              <li>{column}</li>
            ))}
          </ul>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
