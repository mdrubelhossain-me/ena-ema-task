import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import logo from "../../../../public/assets/images/Logo.svg";
import Sparkle from "../../../../public/assets/images/Sparkle.svg";
import CTAForm from "../CTAForm/CTAForm";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src={logo} alt="Logo" className={styles.logo} />
        </Link>
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
        <h1 className={styles.title} data-aos="fade-up">
          Strategic Landing Pages That Convert From Just <span>$200</span>
        </h1>
        <h5 className={styles.subtitle} data-aos="fade-up">
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
