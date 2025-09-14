"use client";

import React from "react";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import StarFill from "../../../../public/assets/images/Star-fill.svg";
import ImageOne from "../../../../public/assets/images/sarah.png";
import ImageTwo from "../../../../public/assets/images/mike.png";
import ImageThree from "../../../../public/assets/images/amanda.png";
import ImageFour from "../../../../public/assets/images/david.png";

import styles from "./Testimonial.module.css";

const TestimonialCard = () => {
  const testimonials = [
    // testimonial data
    {
      id: 1,
      speech:
        "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
      name: "Sarah Johnson",
      role: "SaaS Founder",
      image: ImageOne,
      rating: 5,
    },
    {
      id: 2,
      speech:
        "Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.",
      name: "Mike Chen",
      role: "Fitness Coach",
      image: ImageTwo,
      rating: 5,
    },
    {
      id: 3,
      speech:
        "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
      name: "Jon Johnson",
      role: "SaaS Founder",
      image: ImageFour,
      rating: 5,
    },
    {
      id: 4,
      speech:
        "Best investment for my business. The ROI was immediate and substantial. Will definitely order again.",
      name: "Amanda Rodriguez",
      role: "E-Commerce Owner",
      image: ImageThree,
      rating: 5,
    },
    {
      id: 5,
      speech:
        "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
      name: "Jon Doe",
      role: "SaaS Founder",
      image: ImageFour,
      rating: 5,
    },
    {
      id: 6,
      speech:
        "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
      name: "David Lee",
      role: "Saas Founder",
      image: ImageThree,
      rating: 5,
    },
  ];

  // Calculate stars based on rating
  const getStars = (rating: number) => (rating >= 4 ? 5 : rating >= 3 ? 4 : 3);

  return (
    <div className={styles.cardWrapper}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={4}
        loop={true}
        autoplay={false}
        breakpoints={{
          1191: { slidesPerView: 4, spaceBetween: 24 },
          992: { slidesPerView: 3, spaceBetween: 24 },
          768: { slidesPerView: 2, spaceBetween: 5 },
          320: { slidesPerView: 1.2, spaceBetween: 24 },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className={styles.card}>
              {/* Stars */}
              <div className={styles.ratting}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < getStars(t.rating) ? (
                      <Image src={StarFill} alt="star" width={16} height={16} />
                    ) : (
                      <FaRegStar size={16} className={styles.emptyStar} />
                    )}
                  </span>
                ))}
              </div>

              {/* Testimonial text */}
              <h6 className={styles.speech}>&quot;{t.speech}&quot;</h6>

              {/* Client info */}
              <div className={styles.client}>
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className={styles.avatar}
                />
                <div>
                  <h6 className={styles.name}>{t.name}</h6>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCard;
