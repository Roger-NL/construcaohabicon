import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { MobileHeader } from '@/components/layout/MobileHeader';
import { HeroMobile } from '@/components/sections/HeroMobile';
import { AboutMobile } from '@/components/sections/AboutMobile';
import { ServicesMobile } from '@/components/sections/ServicesMobile';
import { ContactMobile } from '@/components/sections/ContactMobile';
import { ScrollProgress } from '@/components/effects/ScrollProgress';

const Index = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative bg-background">
      <ScrollProgress />
      <MobileHeader />
      <main className="pt-16">
        <HeroMobile />
        <AboutMobile />
        <ServicesMobile />
        <ContactMobile />
      </main>
    </div>
  );
};

export default Index;
