"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CaseStudies from "./components/CaseStudies/CaseStudies";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import LandingPage from "./components/LandingPage/LandingPage";
import Pricing from "./components/Pricing/Pricing";
import RealCustomers from "./components/RealCustomers/RealCustomers";
import Templates from "./components/Templates/Templates";
import Testimonial from "./components/Testimonial/Testimonial";
import WhyTrustUs from "./components/WhyTrustUs/WhyTrustUs";

export default function Home() {
  // AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Hero />
      <Templates />
      <WhyTrustUs />
      <CaseStudies />
      <Pricing />
      <LandingPage />
      <Testimonial />
      <Faq />
      <RealCustomers />
      <Footer />
    </div>
  );
}
