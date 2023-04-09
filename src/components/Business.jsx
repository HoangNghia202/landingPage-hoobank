import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, id, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index != features.length - 1 ? "mb-6" : "mb-0"
      } feature-card `}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}  bg-dimBlue`}
      >
        <img src={icon} alt="" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[23px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business <br className="sm:hidden" /> we'll handle the
          money
        </h2>
        <p className="max-w-[470px] mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          excepturi, provident et nostrum unde laborum molestias nam reiciendis
          optio rem, quas nesciunt deleniti atque. Dolore quas inventore
          consequatur sequi laboriosam.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;
