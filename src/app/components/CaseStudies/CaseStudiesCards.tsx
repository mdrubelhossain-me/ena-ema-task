import React from "react";
import style from "./CaseStudies.module.css";
import Image from "next/image";

// Import images
import caseStudies1 from "../../../../public/assets/images/cs1.png";
import caseStudies2 from "../../../../public/assets/images/cs2.png";
import caseStudies3 from "../../../../public/assets/images/cs3.png";
import Check from "../../../../public/assets/images/Check2.svg";

// CaseStudiesCards Component
const CaseStudiesCards: React.FC = () => {
  // Card data (6 cards)
  const caseStudies = [
    {
      id: 1,
      image: caseStudies1,
      title: "Flowpilot",
      list: [
        "20% higher conversion than average in first week",
        "Clean and modern design with clear CTA",
      ],
    },
    {
      id: 2,
      image: caseStudies2,
      title: "GrowthSummit",
      list: [
        "50% increase in sign-ups within a month",
        "Optimized for speed and performance",
      ],
    },
    {
      id: 3,
      image: caseStudies3,
      title: "Flowpilot",
      list: [
        "20% higher conversion than average in first week",
        "Clean and modern design with clear CTA",
      ],
    },
    {
      id: 4,
      image: caseStudies1,
      title: "GrowthSummit",
      list: [
        "50% increase in sign-ups within a month",
        "Optimized for speed and performance",
      ],
    },
    {
      id: 5,
      image: caseStudies2,
      title: "Flowpilot",
      list: [
        "20% higher conversion than average in first week",
        "Clean and modern design with clear CTA",
      ],
    },
    {
      id: 6,
      image: caseStudies3,
      title: "GrowthSummit",
      list: [
        "50% increase in sign-ups within a month",
        "Optimized for speed and performance",
      ],
    },
  ];

  return (
    <div className={style.cardContainer}>
      {caseStudies.map(({ id, image, title, list }) => (
        <div key={id} className={style.card}>
          {/* Card Image */}
          <div className={style.cardImageContainer}>
            <Image src={image} alt={title} className={style.cardImage} />
          </div>

          {/* Card Content */}
          <div className={style.cardContent}>
            <h4 className={style.cardTitle}>{title}</h4>

            <div className={style.checkList}>
              {list.map((item, index) => (
                <div key={index} className={style.checkListItem}>
                  <Image src={Check} width={16} height={16} alt="Check Icon" />
                  <span>{item}</span>
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
