import React from "react";
import styles from "../style";
import { stats } from "../constants";
const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat, index) => {
        return (
          <div
            key={stat.id}
            className=" flex flex-1 justify-start items-center"
          >
            <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
              {stat.value}
            </h4>
            <p className="font-poppins font-normal text-[20px] xs:leading-[26px] leading-[21px] text-white text-gradient">
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
