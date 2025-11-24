import { MobileHeader } from '@/components/layout/MobileHeader';
import { HeroMobile } from '@/components/sections/HeroMobile';
import { AboutMobile } from '@/components/sections/AboutMobile';
import { ServicesMobile } from '@/components/sections/ServicesMobile';
import { WhyHabicon } from '@/components/sections/WhyHabicon';
import { ContactMobile } from '@/components/sections/ContactMobile';
import { ScrollProgress } from '@/components/effects/ScrollProgress';

const Index = () => {
  return (
    <div className="relative bg-background">
      <ScrollProgress />
      <MobileHeader />
      <main className="pt-16">
        <HeroMobile />
        <AboutMobile />
        <ServicesMobile />
        <WhyHabicon />
        <ContactMobile />
      </main>
    </div>
  );
};

export default Index;
