import React from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => {
  return (
    <>
      <section
        className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} rounded-[20px] flex-col sm:flex-row bg-black-gradient`}
      >
        <div className="flex-1 flex flex-col">
          <h2 className={styles.heading2}>Let’s try our service now!</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className={`${styles.flexCenter}  sm:ml-10 ml-0 sm:mt-10 mt-10`}>
          <Button />
        </div>
      </section>
    </>
  );
};

export default CTA;
