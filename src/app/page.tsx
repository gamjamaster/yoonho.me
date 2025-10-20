import { Navigation } from '@/components/layout/navigation';
import { HeroSection } from '@/components/sections/hero';
import { OverviewAbout } from '@/components/sections/overview-about';
import { FeaturedSkills } from '@/components/sections/featured-skills';
import { FeaturedProject } from '@/components/sections/featured-project';
import { SummarySection } from '@/components/sections/summary-section';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <main>
        <HeroSection />
        <OverviewAbout />
        <FeaturedSkills />
        <FeaturedProject />
        <SummarySection />
        <ContactSection />
      </main>
    </div>
  );
}
