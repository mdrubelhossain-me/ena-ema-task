import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import logo from "../../../../public/assets/images/Logo.svg";
import Sparkle from "../../../../public/assets/images/Sparkle.svg";
import CTAForm from "../CTAForm/CTAForm";

const Hero: React.FC = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.content}>
        <div className={styles.trustedBy}>
          <Image
            src={Sparkle}
            width={16}
            height={16}
            alt="Sparkle"
            className={styles.sparkle}
          />
          <span>Trusted by 30+ startups & entrepreneurs worldwide</span>
        </div>
        <h1 className={styles.title}>
          Strategic Landing Pages That Convert From Just <span>$200</span>
        </h1>
        <h5 className={styles.subtitle}>
          Stop wasting traffic on generic pages. We deliver premium,
          conversion-focused landing pages designed, developed, and launched in
          just 5 days.
        </h5>
      </div>
      {/* Call to Action Form */}
      <div>
        <CTAForm />
      </div>
    </section>
  );
};

export default Hero;
