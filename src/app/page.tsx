import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/sections/Hero';
import { Marquee, Stats } from '@/components/sections/MarqueeAndStats';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Packages from '@/components/sections/Packages';
import Blog from '@/components/sections/Blog';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import BackToTop from '@/components/ui/BackToTop';

/**
 * Sections currently read their content from `@/data`. To drive any section
 * from Payload instead, this can become an async component, e.g.:
 *
 *   import { getPayload } from 'payload';
 *   import config from '@/payload/payload.config';
 *   export default async function HomePage() {
 *     const payload = await getPayload({ config });
 *     const { docs: services } = await payload.find({ collection: 'services', sort: 'order' });
 *     return ( ... <Services items={services} /> ... );
 *   }
 *
 * The data shapes already match the collection fields, so only the import
 * and the prop change — the components stay the same.
 */
export default function HomePage() {
  return (
    <>
      <div className="grain" />
      <Navbar />

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

      <Footer />
      <BackToTop />
    </>
  );
}
