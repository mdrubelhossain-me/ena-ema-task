import React from "react";
import style from "./CaseStudies.module.css";
import CaseStudiesCards from "./CaseStudiesCards";
import Image from "next/image";
import ArroRight from "../../../../public/assets/images/ArrowRight.svg";
import Link from "next/link";

const CaseStudies = () => {
  return (
    <section className={style.caseStudiesContainer}>
      <div className={style.headingSection}>
        <h2 className={style.heading}>Case Studies</h2>
        <h6 className={style.subheading}>
          See the designs that delivered results
        </h6>
      </div>
      <div>
        <CaseStudiesCards />
      </div>
      {/* Submit Button */}
      <Link href="/" className={style.ctaButton}>
        I want similar results
        <Image
          src={ArroRight}
          width={16}
          height={16}
          alt="Arrow Right"
          style={{ marginTop: "3px" }}
        />
      </Link>
    </section>
  );
};

export default CaseStudies;
