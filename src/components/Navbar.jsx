import React from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toogle, setToogle] = React.useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden flex-1 justify-end items-center">
        {navLinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } `}
            >
              <a
                href={`#${nav.id}`}
                className={"cursor-pointer  hover:text-secondary "}
              >
                {nav.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toogle ? close : menu}
          alt="menu"
          onClick={() => setToogle(!toogle)}
          className="cursor-pointer w-[28px] h[28px] object-contain"
        />

        <div
          className={`${
            toogle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex  flex-col justify-end items-center">
            {navLinks.map((nav, index) => {
              return (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } `}
                >
                  <a href={`#${nav.id}`} className={` hover:text-secondary`}>
                    {nav.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
