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
  return (
    <div>
      <Hero />
      <Templates />
      <WhyTrustUs />
      <CaseStudies />
      <Pricing/>
      <LandingPage/>
      <Testimonial/>
      <Faq/>
      <RealCustomers/>
      <Footer/>
    </div>
  );
}
