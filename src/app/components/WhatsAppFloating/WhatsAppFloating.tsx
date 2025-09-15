"use client";

import React from "react";
import Link from "next/link";
import styles from "./WhatsAppFloating.module.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloating = () => {
  return (
    <div>
      <Link
        href="https://web.whatsapp.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp"
        className={styles.whatsappButton}
      >
        <FaWhatsapp size={30} color="white" className={styles.icon} />
      </Link>
    </div>
  );
};

export default WhatsAppFloating;
