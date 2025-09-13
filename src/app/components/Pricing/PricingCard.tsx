import React from "react";
import styles from "./Pricing.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// Import arrow and bullet icons
import ArrowRightOne from "../../../../public/assets/images/ArrowRight.svg";
import ArrowRightTwo from "../../../../public/assets/images/ArrowRight2.svg";
import Circle from "../../../../public/assets/images/Circle.svg";

// Define plan structure (TypeScript interface)
interface Plan {
  id: number;
  title: string;
  description: string;
  price: number;
  services: string[];
  ctaText: string;
  ctaImage?: StaticImageData;
  isActive?: boolean;
  tag?: string;
}

// Plan data array)
const plans: Plan[] = [
  {
    id: 1,
    title: "Basic",
    description: "Perfect for solopreneurs",
    price: 200,
    services: [
      "1 Landing Page (Design + Development)",
      "Hosting Deployment",
      "5-Day Delivery",
      "Basic Support",
    ],
    ctaText: "Start my project",
    ctaImage: ArrowRightTwo,
  },
  {
    id: 2,
    title: "Standard",
    description: "Best balance of value & features",
    price: 300,
    services: [
      "Everything in Basic",
      "Extra Custom Section",
      "Free Consultation Call",
      "Priority Support",
    ],
    ctaText: "Start my project",
    ctaImage: ArrowRightOne,
    isActive: true, // Highlight this plan
    tag: "Most popular", // Display tag label
  },
  {
    id: 3,
    title: "Premium",
    description: "For brands & agencies",
    price: 500,
    services: [
      "Everything in Standard",
      "Advanced Animations",
      "6 Months Free Support",
      "Performance Optimization",
    ],
    ctaText: "Start my project",
    ctaImage: ArrowRightTwo,
  },
];

const PricingCard: React.FC = () => {
  return (
    // Wrapper grid for all pricing cards
    <div className={styles.cardWrapper}>
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`${styles.card} ${plan.isActive ? styles.activeCard : ""}`}
        >
          {/* Optional tag for highlighted plan */}
          {plan.tag && (
            <div className={styles.cardTag}>
              <span>{plan.tag}</span>
            </div>
          )}

          {/* Top section: plan name, description, and price */}
          <div className={styles.contentTop}>
            <div>
              <h4 className={styles.planName}>{plan.title}</h4>
              <p className={styles.planAbout}>{plan.description}</p>
            </div>
            <h4 className={styles.price}>${plan.price}</h4>
          </div>

          {/* Services/features list */}
          <div className={styles.services}>
            <ul>
              {plan.services.map((service, idx) => (
                <li key={idx}>
                  <Image src={Circle} width={6} height={6} alt="Circle" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Call-to-action button */}
          <Link
            href="/"
            className={`${styles.ctaButton} ${
              plan.isActive ? styles.activeCtaButton : ""
            }`}
          >
            {plan.ctaText}
            {plan.ctaImage && (
              <Image
                src={plan.ctaImage}
                width={16}
                height={16}
                alt="Arrow"
                style={{ marginTop: "3px" }}
              />
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PricingCard;
