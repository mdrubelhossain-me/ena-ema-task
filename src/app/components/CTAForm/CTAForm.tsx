import React from "react";
import styles from "./CTAForm.module.css";
import Image from "next/image";

// SVG assets
import User from "../../../../public/assets/images/User.svg";
import Envelope from "../../../../public/assets/images/EnvelopeSimpleOpen.svg";
import Phone from "../../../../public/assets/images/Phone.svg";
import ArroRight from "../../../../public/assets/images/ArrowRight.svg";
import Lock from "../../../../public/assets/images/Lock.svg";
import Check from "../../../../public/assets/images/Check.svg";
import Star from "../../../../public/assets/images/Star.svg";

const CTAForm: React.FC = () => {
  return (
    <section>
      <form className={styles.ctaFormContainer}>
        <div className={styles.inputRow}>
          {/* Name Input */}
          <div className={styles.inputBox}>
            <span className={styles.inputIcon}>
              <Image src={User} width={16} height={16} alt="User Icon" />
            </span>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div className={styles.inputBox}>
            <span className={styles.inputIcon}>
              <Image
                src={Envelope}
                width={16}
                height={16}
                alt="Envelope Icon"
              />
            </span>
            <input
              className={styles.inputField}
              type="email"
              placeholder="Email Address"
            />
          </div>

          {/* Phone Input */}
          <div className={styles.inputBox}>
            <span className={styles.inputIcon}>
              <Image src={Phone} width={16} height={16} alt="Phone Icon" />
            </span>
            <input
              className={styles.inputField}
              type="tel"
              placeholder="Phone Number"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.ctaButton}>
          Get my high-converting landing page
          <Image
            src={ArroRight}
            width={16}
            height={16}
            alt="Arrow Right"
            style={{ marginTop: "3px" }}
          />
        </button>
      </form>

      {/*  guarantees */}
      <div className={styles.ctaGuarantees}>
        <div className={styles.guaranteeItem}>
          <Image src={Lock} width={16} height={16} alt="SSL secure" />
          <span>SSL secure</span>
        </div>
        <div className={styles.guaranteeItem}>
          <Image
            src={Check}
            width={16}
            height={16}
            alt="Money-back guaranteed"
          />
          <span>Money-back guaranteed</span>
        </div>
        <div className={styles.guaranteeItem}>
          <Image
            src={Star}
            width={16}
            height={16}
            alt="Satisfaction guaranteed"
          />
          <span>Satisfaction guaranteed</span>
        </div>
      </div>
    </section>
  );
};

export default CTAForm;
