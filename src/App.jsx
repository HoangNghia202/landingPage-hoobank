import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  Button,
  CardDeal,
  Client,
  CTA,
  Feedback,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonial,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} text-white`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} `}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth} text-white`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
