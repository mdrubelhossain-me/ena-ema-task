import React from "react";
import styles from "./Testimonial.module.css";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className={styles.testimonialContainer}>
      <div className={styles.headingSection}>
        <h2>
          What Our Clients Are Saying <span>About Us</span>
        </h2>
        <h6>
          Real feedback from real businesses who&apos;ve seen real results.
        </h6>
      </div>
      <div>
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonial;
