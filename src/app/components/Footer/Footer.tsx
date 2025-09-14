import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

// SVG assets
import Logo from "../../../../public/assets/images/footer-logo.svg";
import Linkedin from "../../../../public/assets/images/linkedin.svg";
import Facebook from "../../../../public/assets/images/facebook.svg";
import Instagram from "../../../../public/assets/images/instagram.svg";
import Behance from "../../../../public/assets/images/behance.svg";
import Dribble from "../../../../public/assets/images/dribble.svg";

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerContent}>
        <div className={styles.leftSide}>
          <Link href="/">
            <Image src={Logo} width={160} height={36} alt="Logo" />
          </Link>
        </div>

        <div className={styles.copryright}>
          <span>&copy; All rights reserved to Ena Ema Technologies</span>
        </div>

        <div className={styles.soicalIcon}>
          <Link href="/">
            <Image
              src={Linkedin}
              width={24}
              height={24}
              alt="Linkedin"
              className={styles.icon}
            />
          </Link>
          <Link href="/">
            <Image
              src={Facebook}
              width={24}
              height={24}
              alt="Facebook"
              className={styles.icon}
            />
          </Link>
          <Link href="/">
            <Image
              src={Instagram}
              width={24}
              height={24}
              alt="Instagram"
              className={styles.icon}
            />
          </Link>
          <Link href="/">
            <Image
              src={Behance}
              width={24}
              height={24}
              alt="Behance"
              className={styles.icon}
            />
          </Link>
          <Link href="/">
            <Image
              src={Dribble}
              width={24}
              height={24}
              alt="Dribble"
              className={styles.icon}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
