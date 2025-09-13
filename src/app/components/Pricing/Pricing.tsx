import React from "react";
import style from "./Pricing.module.css";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className={style.pricingContainer}>
      <div className={style.headingSection}>
        <h2 className={style.heading}>
          Simple, Transparent Pricing — <span>Choose Your Plan</span>
        </h2>
        <h6 className={style.subHeading}>
          No hidden fees, no surprises. Just premium landing pages at unbeatable
          prices.
        </h6>
      </div>
      <div>
        <PricingCard />
      </div>
    </section>
  );
};

export default Pricing;
