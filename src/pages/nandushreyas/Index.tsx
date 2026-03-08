import Hero from '../../components/Hero';
import Authority from '../../components/SocialProof';
import Portfolio from '../../components/Portfolio';
import Story from '../../components/Story';
import Experience from '../../components/SignatureExperience';
import WeddingStories from '../../components/WeddingStories';
import Testimonials from '../../components/Testimonials';
import PriceFilter from '../../components/PricingFilter';
import QualificationForm from '../../components/QualificationForm';
import Scarcity from '../../components/Scarcity';
import Footer from '../../components/Footer';
import MobileOverlays from '../../components/MobileOverlays';

import OceanWaves from '../../components/OceanWaves';
import CustomCursor from '../../components/CustomCursor';
import FilmGrain from '../../components/FilmGrain';

export default function NandushreyasPage() {
    return (
        <div className="min-h-screen bg-n-bg relative">
            <CustomCursor />
            <FilmGrain />
            <Hero />
            <Authority />
            <Portfolio />
            <div className="relative">
                <OceanWaves position="top" variant="subtle" />
                <Story />
                <OceanWaves position="bottom" variant="full" />
            </div>
            <Experience />
            <div className="relative overflow-hidden">
                <OceanWaves position="top" variant="subtle" className="opacity-50" />
                <WeddingStories />
                <div className="absolute top-1/2 left-0 w-full h-[500px] bg-n-gold/[0.02] blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
            </div>
            <div className="relative">
                <OceanWaves position="top" variant="subtle" />
                <Testimonials />
                <OceanWaves position="bottom" variant="full" />
            </div>
            <PriceFilter />
            <div className="relative">
                <OceanWaves position="top" variant="subtle" className="opacity-50" />
                <QualificationForm />
            </div>
            <div className="relative">
                <OceanWaves position="top" variant="subtle" />
                <Scarcity />
            </div>
            <Footer />
            <MobileOverlays />
        </div>
    );
}
