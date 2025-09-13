import CaseStudies from "./components/CaseStudies/CaseStudies";
import Hero from "./components/Hero/Hero";
import Templates from "./components/Templates/Templates";
import WhyTrustUs from "./components/WhyTrustUs/WhyTrustUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Templates />
      <WhyTrustUs />
      <CaseStudies />
    </div>
  );
}
