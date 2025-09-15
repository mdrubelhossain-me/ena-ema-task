import React from "react";
import style from "./Pricing.module.css";
import PricingCard from "./PricingCard";
import PricingOffer from "./PricingOffer";

const Pricing = () => {
  return (
    <section className={style.pricingContainer}>
      <div className={style.headingSection} data-aos="fade-up">
        <h2 className={style.heading}>
          Simple, Transparent Pricing — <span>Choose Your Plan</span>
        </h2>
        <h6 className={style.subHeading}>
          No hidden fees, no surprises. Just premium landing pages at unbeatable
          prices.
        </h6>
      </div>
      <div data-aos="fade-up">
        <PricingCard />
      </div>
      <div data-aos="fade-up">
        <PricingOffer />
      </div>
    </section>
  );
};

export default Pricing;
