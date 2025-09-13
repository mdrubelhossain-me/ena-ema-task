import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section>
      <h1 className={styles.h1}>Welcome to the Hero Section</h1>
      <p className={styles.p}>This is a placeholder for your hero content.</p>
    </section>
  );
};

export default Hero;
