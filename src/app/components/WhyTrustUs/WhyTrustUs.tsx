import React from "react";
import style from "./WhyTrustUs.module.css";
import TrustCards from "./TrustCards";

const WhyTrustUs = () => {
  return (
    <section className={style.whyTrustUsContainer}>
      <div className={style.headingContainer}>
        <h2 className={style.title}>
          Why Businesses <span>Trust Us</span> With Their Designs
        </h2>
        <p className={style.subTitle}>
          We combine proven conversion frameworks with agency-level design to
          deliver results that matter.
        </p>
      </div>
      {/* Trust Cards */}
      <div>
        <TrustCards />
      </div>
    </section>
  );
};

export default WhyTrustUs;
