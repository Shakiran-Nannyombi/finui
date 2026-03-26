import { HeroSection } from '../components/landing/HeroSection';
import { FeaturesGrid } from '../components/landing/FeaturesGrid';
import { HowItWorks } from '../components/landing/HowItWorks';
import { SmartAISection } from '../components/landing/SmartAISection';
import { CTASection } from '../components/landing/CTASection';

interface LandingPageProps {
    onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
    return (
        <div className="flex flex-col gap-24 pb-12 overflow-hidden">
            <HeroSection onGetStarted={onGetStarted} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <FeaturesGrid />
            </div>
            <HowItWorks onGetStarted={onGetStarted} />
            <SmartAISection />
            <CTASection />
        </div>
    );
}
