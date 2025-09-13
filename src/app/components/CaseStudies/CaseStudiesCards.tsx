import React from "react";
import style from "./CaseStudies.module.css";
import Image from "next/image";

// Import images
import caseStudies1 from "../../../../public/assets/images/cs1.png";
import caseStudies2 from "../../../../public/assets/images/cs2.png";
import caseStudies3 from "../../../../public/assets/images/cs3.png";
import Check from "../../../../public/assets/images/Check2.svg";

const CaseStudiesCards = () => {
  // Card data (6 cards)
  const caseStudies = [
    {
      id: 1,
      image: caseStudies1,
      title: "Flowpilot",
      points: [
        "20% higher conversion than average in first week",
        "Clean and modern design with clear CTA",
      ],
    },
    {
      id: 2,
      image: caseStudies2,
      title: "DesignHive",
      points: [
        "Improved user engagement by 30%",
        "Streamlined navigation and visual consistency",
      ],
    },
    {
      id: 3,
      image: caseStudies3,
      title: "GrowthSummit",
      points: [
        "50% increase in sign-ups within a month",
        "Optimized for speed and performance",
      ],
    },
    {
      id: 4,
      image: caseStudies1,
      title: "BrandBoost",
      points: [
        "Enhanced brand presence with sleek UI",
        "Easy-to-use layouts for better retention",
      ],
    },
    {
      id: 5,
      image: caseStudies2,
      title: "MarketMinds",
      points: [
        "Generated 25% more qualified leads",
        "Eye-catching hero sections for impact",
      ],
    },
    {
      id: 6,
      image: caseStudies3,
      title: "ClickWave",
      points: [
        "Increased landing page CTR by 18%",
        "Conversion-focused layouts and typography",
      ],
    },
  ];

  return (
    <div className={style.cardContainer}>
      {caseStudies.map((study) => (
        <div key={study.id} className={style.card}>
          {/* Image Section */}
          <div className={style.cardImageContainer}>
            <Image
              src={study.image}
              alt={study.title}
              className={style.cardImage}
            />
          </div>

          {/* Content Section */}
          <div className={style.cardContent}>
            <h4 className={style.cardTitle}>{study.title}</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                alignItems: "end",
                justifyContent: "flex-end",
              }}
            >
              {study.points.map((point, index) => (
                <div key={index} className={style.checkList}>
                  <Image src={Check} width={16} height={16} alt="Check Icon" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudiesCards;
