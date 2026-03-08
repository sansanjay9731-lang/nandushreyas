import Hero from '../../components/samavaya/Hero';
import EmotionalStory from '../../components/samavaya/EmotionalStory';
import Portfolio from '../../components/samavaya/Portfolio';
import Benefits from '../../components/samavaya/WhySamavaya';
import Testimonials from '../../components/samavaya/Testimonials';
import ExperienceFlow from '../../components/samavaya/ExperienceProcess';
import PriceFilter from '../../components/samavaya/PricingFilter';
import BookingForm from '../../components/samavaya/BookingForm';
import Footer from '../../components/samavaya/Footer';

export default function SamavayaPage() {
    return (
        <div className="min-h-screen bg-s-bg">
            <Hero />
            <EmotionalStory />
            <Portfolio />
            <Benefits />
            <Testimonials />
            <ExperienceFlow />
            <PriceFilter />
            <BookingForm />
            <Footer />
        </div>
    );
}
