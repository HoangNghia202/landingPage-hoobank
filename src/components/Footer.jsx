import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  console.log(footerLinks);
  return (
    <section
      id="footer"
      className={`${styles.flexCenter} ${styles.paddingX} flex-col`}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div>
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} max-w-[400px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex flex-row flex-1 justify-between w-full flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <div key={link.id} className="flex flex-col flex-1 ">
              <h2 className="font-poppins font-semibold text-[20px]">
                {link.title}
              </h2>
              <ul className="font-poppins font-normal text-[16px]">
                {link.links.map((item) => (
                  <li
                    key={item.name}
                    className={`text-dimWhite leading-[24px] hover:text-secondary cursor-pointer`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <br className="" />

      <div className="flex justify-between items-center w-full my-4 border-t-[1px] pt-6 border-top-[#3F3E45]">
        <p>Copyright 2021 HooBank. All Rights Reserved.</p>
        <div className="flex flex-1 flex-row justify-end">
          {socialMedia.map((item, index) => {
            return (
              <div className="ml-5" key={index}>
                <img src={item.icon} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
