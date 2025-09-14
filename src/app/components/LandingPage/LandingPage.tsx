import React from "react";
import styles from "./LandingPage.module.css";
import PageCards from "./PageCards";

const LandingPage = () => {
  return (
    <section className={styles.landingPageContainer}>
      <div className={styles.content}>
        <h2>
          From Idea to Live Landing Page in <span>Just 5 Days</span>
        </h2>
        <h6>
          Our streamlined process ensures fast delivery without compromising
          quality.
        </h6>

        <div>
          <PageCards />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
