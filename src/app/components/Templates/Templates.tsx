import React from "react";
import styles from "./Templates.module.css";
import Image from "next/image";

import imageOne from "../../../../public/assets/images/s-img-7.png";
import imageTwo from "../../../../public/assets/images/s-img6.png";
import imageThree from "../../../../public/assets/images/s-img5.png";
import imageFour from "../../../../public/assets/images/s-img4.png";
import imageFive from "../../../../public/assets/images/s-img3.png";

const templates = [
  { id: 1, image: imageOne },
  { id: 2, image: imageTwo },
  { id: 3, image: imageThree },
  { id: 4, image: imageFour },
  { id: 5, image: imageFive },
  { id: 6, image: imageThree },
  { id: 7, image: imageFour },
  { id: 8, image: imageFive },
];

const Templates: React.FC = () => {
  return (
    <section className={styles.templatesContainer}>
      <div className={styles.templatesWrapper}>
        {templates.concat(templates).map((template) => (
          <div
            className={styles.templateImageContainer}
            key={template.id + Math.random()}
          >
            <Image
              src={template.image}
              alt={`Template Image ${template.id}`}
              className={styles.templateImage}
              width={748}
              height={470}
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Templates;
