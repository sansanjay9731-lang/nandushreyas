import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const testimonials = [
    {
        quote: "Every emotion from our wedding day was captured beautifully. Looking at our photos feels like reliving the most magical day of our lives.",
        name: "Priya & Arjun",
        location: "Traditional Wedding, Bangalore",
        image: "/images/couple-traditional.jpg"
    },
    {
        quote: "We couldn't have asked for a more brilliant team. The photos are pure art — cinematic, deeply emotional, and breathtakingly beautiful.",
        name: "Meera & Rohan",
        location: "South Indian Wedding, Kerala",
        image: "/images/couple-white.jpg"
    },
    {
        quote: "From the very first meeting, they understood our vision completely. Every single frame tells a part of our love story.",
        name: "Sneha & Vikram",
        location: "Destination Wedding, Hampi",
        image: "/images/bride-running-mist.jpg"
    },
    {
        quote: "The attention to detail is extraordinary. They captured moments we didn't even know were happening — and those turned out to be the most precious.",
        name: "Ananya & Karthik",
        location: "Grand Celebration, Bangalore",
        image: "/images/couple-dancing.jpg"
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
    }, []);

    const prev = useCallback(() => {
        setCurrent(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
    }, []);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    const t = testimonials[current];

    return (
        <section className="py-28 md:py-36 bg-n-bg">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-n-gold text-[10px] uppercase tracking-[0.5em] font-sans block mb-6">Testimonials</span>
                    <h2 className="font-display text-4xl md:text-5xl text-n-white">
                        Words From <span className="italic text-n-gold">Our Couples</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Couple photo */}
                    <div className="w-full md:w-5/12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.6 }}
                                className="aspect-[3/4] overflow-hidden relative"
                            >
                                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                {/* Gold corner accents */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-n-gold/40" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-n-gold/40" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Quote */}
                    <div className="w-full md:w-7/12">
                        {/* Decorative quote mark */}
                        <span className="text-n-gold/20 font-display text-8xl leading-none block mb-6">"</span>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`quote-${current}`}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="font-display text-xl md:text-3xl text-n-white leading-snug mb-10 italic">
                                    {t.quote}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="w-10 h-[1px] bg-n-gold/40 mb-6" />
                        <p className="text-n-white font-sans text-sm font-medium mb-1">— {t.name}</p>
                        <p className="text-n-muted text-[10px] uppercase tracking-[0.25em] font-sans mb-14">{t.location}</p>

                        {/* Controls */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={prev}
                                className="w-11 h-11 border border-n-gold/20 flex items-center justify-center text-n-gold hover:bg-n-gold hover:text-n-bg transition-all duration-300"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={next}
                                className="w-11 h-11 border border-n-gold/20 flex items-center justify-center text-n-gold hover:bg-n-gold hover:text-n-bg transition-all duration-300"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>

                            {/* Dot indicators */}
                            <div className="flex items-center gap-2 ml-4">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`transition-all duration-500 rounded-full ${i === current
                                                ? 'w-6 h-1.5 bg-n-gold'
                                                : 'w-1.5 h-1.5 bg-n-gold/25 hover:bg-n-gold/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
