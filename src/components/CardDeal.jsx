import React from "react";
import styles from "../style";
import { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";
const CardDeal = () => {
  return (
    <section id="card-deal" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:hidden" /> in few easy
          steps.
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
        <img src={card} alt="" />
      </div>
    </section>
  );
};

export default CardDeal;
