import React from "react";
import styles from "./RealCustomers.module.css";
import CTAForm from "../CTAForm/CTAForm";

const RealCustomers = () => {
  return (
    <section className={styles.realCustomersContaier}>
      <div className="realCustomersContaier">
        <div className="rc-inner">
          <div className={styles.heading} data-aos="fade-up">
            <h1>
              Ready to Turn Visitors Into <span>Real Customers?</span>
            </h1>
            <h5>
              Don&#39;t settle for an average page. Get a premium,
              conversion-focused landing page that pays for itself
            </h5>
          </div>
          <div data-aos="fade-up">
            <CTAForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealCustomers;
