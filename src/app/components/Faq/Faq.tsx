import React from "react";
import styles from "./Faq.module.css";
import Image from "next/image";
import Ellipse from "../../../../public/assets/images/ellipse.svg";

const Faq = () => {
  // FAQ data dynamic array
  const faqData = [
    {
      question: "How long does it take?",
      answer:
        "5 days from start to finish - design, development, and deployment included.",
    },
    {
      question: "Do you provide revisions?",
      answer:
        "Yes, unlimited revisions until you&#39;re 100% satisfied with the final result.",
    },
    {
      question: "What&#39;s the payment process?",
      answer:
        "50% upfront to get started, 50% after final delivery and your approval.",
    },
    {
      question: "Can you deploy on my hosting?",
      answer:
        "Absolutely! Deployment is included in every package, on your hosting or ours.",
    },
    {
      question: "Why are your prices so affordable compared to agencies?",
      answer:
        "We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.",
    },
  ];

  return (
    <section className={styles.faqContainer}>
      <h2 data-aos="fade-up">
        Got Questions<span>?</span> We&#39;ve Got The Answers
      </h2>
      <div className={styles.faqItemContainer} >
        {faqData.map((faq, index) => (
          <div key={index} className={styles.faqItem} data-aos="fade-up" >
            <Image src={Ellipse} alt="Ellipse" width={12} height={12} />
            <h4>{faq.question}</h4>
            <h5 dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
