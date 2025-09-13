import React from "react";
import style from "./WhyTrustUs.module.css";
import Image from "next/image";

// Icon Imports
import RocketLaunch from "../../../../public/assets/images/RocketLaunch.svg";
import Palette from "../../../../public/assets/images/Palette.svg";
import Lightning from "../../../../public/assets/images/Lightning.svg";
import CurrencyDollar from "../../../../public/assets/images/CurrencyDollar.svg";
import ArrowsClockwise from "../../../../public/assets/images/ArrowsClockwise.svg";
import Trophy from "../../../../public/assets/images/Trophy.svg";

const cards = [
  {
    id: 1,
    image: RocketLaunch,
    title: "Proven Conversion Framework",
    description:
      "Designs based on 100+ tested layouts that actually convert visitors into customers.",
  },
  {
    id: 2,
    image: Palette,
    title: "Agency Level Design",
    description:
      "Modern, premium, and tailored for your brand - without the agency price tag..",
  },
  {
    id: 3,
    image: Lightning,
    title: "5-day Guaranteed Delivery",
    description:
      "With a highly professional team, we deliver on time, everytime.",
  },
  {
    id: 4,
    image: CurrencyDollar,
    title: "Affordable Pricing",
    description:
      "Premium quality designs at prices that fit your business budget.",
  },
  {
    id: 5,
    image: ArrowsClockwise,
    title: "Revisions Until You're Happy",
    description:
      "We keep working until it's right. Your satisfaction is guaranteed.",
  },
  {
    id: 6,
    image: Trophy,
    title: "Results That Speak",
    description:
      "Our pages consistently outperform industry averages for conversions.",
  },
];

const TrustCards: React.FC = () => {
  return (
    <div className={style.trustCardsContainer}>
      {cards.map((card) => (
        <div key={card.id} className={style.card}>
          {/* Card Icon */}
          <Image src={card.image} width={48} height={48} alt={card.title} />

          {/* Card Title */}
          <h6 className={style.cardTitle}>{card.title}</h6>

          {/* Card Description */}
          <p className={style.cardDescription}>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustCards;
