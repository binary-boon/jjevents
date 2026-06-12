import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import { Marquee, Stats } from "@/components/sections/MarqueeAndStats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Packages from "@/components/sections/Packages";
import Blog from "@/components/sections/Blog";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/ui/BackToTop";

export default function HomePage() {
  return (
    <>
      {/* Grain texture overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Packages />
        <Blog />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <BackToTop />
    </>
  );
}
