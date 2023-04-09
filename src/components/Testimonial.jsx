import React from "react";
import styles, { layout } from "../style";
import { feedback } from "../constants";
import Feedback from "./Feedback";
import Client from "./Client";
const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center">
        <div className="flex-1">
          <h2 className={`${styles.heading2} font-poppins `}>
            What people are <br className=" md:block hidden" /> saying about us
          </h2>
        </div>
        <div className="flex-1">
          <p className="font-poppins font-normal text-[20px] leading-[26px] text-white md:mt-0 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut
            incidunt inventore quod nostrum fuga fugit. Sed cum libero ut
            expedita repellat animi laboriosam sapiente aperiam? Mollitia,
            perspiciatis nostrum. Ducimus.
          </p>
        </div>
      </div>

      <div
        id="feedback"
        className="grid grid-cols-1 gap-4  md:grid-cols-3 justify-start content-start"
      >
        {feedback.map((feedback, index) => {
          return <Feedback {...feedback} key={feedback.id} />;
        })}
      </div>
      <div>
        <Client />
      </div>

      {/* <div className="absolute w-[700px] h-[700px] z-[3] rounded-full white__gradient -right-60"></div> */}
      <div className="absolute w-[60%] h-[60px] ] rounded-full blue__gradient -right-[50%] bottom-40 z-[1]"></div>
    </section>
  );
};

export default Testimonial;
