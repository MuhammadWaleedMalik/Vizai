import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import FutureSection from '../components/FutureSection';
import ClinicalValidationSection from '../components/ClinicalValidationSection';
import TherapeuticAreasSection from '../components/TherapeuticAreasSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DemoSection from '../components/DemoSection';

export default function HomePage() {
    return (
        <div className="w-full overflow-x-hidden">
            <HeroSection />
            <WelcomeSection />
            <FutureSection />
            <ClinicalValidationSection />
            <TherapeuticAreasSection />
            <TestimonialsSection />
            <DemoSection />
            <Footer />
        </div>
    );
}
