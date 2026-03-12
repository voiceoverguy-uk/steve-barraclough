import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import AreasCovered from "@/components/AreasCovered";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCallButton from "@/components/MobileCallButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <About />
      <Services />
      <WhyChooseUs />
      <AreasCovered />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCallButton />
    </main>
  );
}
