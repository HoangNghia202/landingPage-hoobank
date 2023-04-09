import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex lg:hover:flex-row  md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px]n px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20% </span>
            Discount for <span className="text-white">1 Month </span>
            Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full text-white">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            {" "}
            The Next
            <br />
            <span className="text-gradient">Generation</span>
            <br />
          </h1>
          <div className="ss:flex hidden md:mr-4 ">
            <GetStarted />
          </div>
        </div>

        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-white">
          Payment Method
        </h1>
        <p
          className={`${styles.paragraph}  text-white max-w-[500px] text-justify`}
        >
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sequi
          nesciunt rem earum, delectus ullam consequatur omnis numquam quam
          corrupti. Reiciendis, eos delectus? Tenetur dignissimos reiciendis
          omnis voluptatum nobis facilis!
        </p>
      </div>

      <div>
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] "
        />
        <div className=" absolute z-[0] w-[50%] h-[35%] top-0 pink__gradient"></div>
        <div className=" absolute z-[1] w-[80%] h-[80%] rounded-full top-0 bottom-40 white__gradient"></div>
        <div className=" absolute z-[0] w-[80%] h-[80%] rounded-full right-20 bottom-20 blue"></div>
      </div>
    </section>
  );
};

export default Hero;
