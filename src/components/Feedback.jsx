import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import { quotes } from "../assets";
const Feedback = ({ id, content, name, title, img }) => {
  return (
    <div className={`p-5 rounded-xl my-10 feedback-card max-w-[400px]`}>
      <img src={quotes} alt="" className="w-[32px] h-[32px]" />

      <p className="my-4 min-h-[100px]">{content}</p>
      <div className="flex flex-row">
        <img src={img} alt="" className="w-[60px] h-[60px] rounded-full" />
        <div className="ml-4">
          <h2 className="font-poppins font-semibold text-[20px]">{name}</h2>
          <p className="font-poppins font-normal text-[16px]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
