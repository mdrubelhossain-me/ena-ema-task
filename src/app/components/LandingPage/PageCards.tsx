// components/PageCards.tsx
import React from "react";
import styles from "./LandingPage.module.css";
import Image, { StaticImageData } from "next/image";
import UserCircle from "../../../../public/assets/images/user-circle.svg";
import PlateCircle from "../../../../public/assets/images/plateCircle.svg";
import RocketCircle from "../../../../public/assets/images/rocketCircle.svg";

// Card data type
interface CardData {
  id: number;
  day: string;
  title: string;
  description: string;
  icon: StaticImageData;
}

// Card data array
const cards: CardData[] = [
  {
    id: 1,
    day: "Day 1",
    title: "Book Your Projects",
    description:
      "Fill out a short form and we&apos;ll get started immediately.",
    icon: UserCircle,
  },
  {
    id: 2,
    day: "Day 2-4",
    title: "Design & Development",
    description:
      "Unlimited revisions until perfect. You&apos;re involved every step.",
    icon: PlateCircle,
  },
  {
    id: 3,
    day: "Day 5",
    title: "Launch",
    description:
      "Fully deployed on your hosting and ready to convert visitors.",
    icon: RocketCircle,
  },
];

const PageCards: React.FC = () => {
  return (
    <div className={styles.cardWrapper}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <div className={styles.cardContent}>
            <span>{card.day}</span>
            <div className={styles.icon}>
              <Image src={card.icon} width={84} height={84} alt={card.title} />
            </div>
            <h4 className={styles.cardTitle}>{card.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: card.description }}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageCards;
