import React from "react";
import style from "./Pricing.module.css";
import Image from "next/image";
import Lightning from "../../../../public/assets/images/Lightning2.svg";
import ArroRight from "../../../../public/assets/images/ArrowRight.svg";
import Link from "next/link";

const PricingOffer = () => {
  return (
    <div className={style.pricingOffer}>
      <div className={style.offerHeading}>
        <div>
          <Image
            src={Lightning}
            width={36}
            height={36}
            alt="User Icon"
            style={{ display: "block", marginTop: "15px" }}
          />
        </div>
        <div>
          <h4 className={style.title}>Limited Availability</h4>
          <p className={style.subTitle}>
            Get 10% OFF + Free Hosting Setup when you book this week.
          </p>
        </div>
      </div>
      <div className={style.offerContainer}>
        <div className={style.content}>
          <h2>Special Offer For Early Clients</h2>
          <h6>Get 10% OFF + Free Hosting Setup when you book this week.</h6>
          {/*  Button */}
          <Link href="/" className={style.ctaButton}>
            Claim my 10% discount
            <Image
              src={ArroRight}
              width={16}
              height={16}
              alt="Arrow Right"
              style={{ marginTop: "3px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingOffer;
