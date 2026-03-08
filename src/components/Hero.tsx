import { motion } from 'framer-motion';
import { OceanCanvas } from './OceanWaves';
import OceanWaves from './OceanWaves';
import SplitText from './SplitText';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-n-bg">
            {/* Cinematic Image Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/couple-water.png"
                    alt="Cinematic wedding photography by Nandushreyas"
                    className="w-full h-full object-cover"
                />
                {/* Cinematic gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-n-bg/80 via-n-bg/30 to-n-bg z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-n-bg/40 via-transparent to-n-bg/40 z-10" />
                {/* Vignette */}
                <div className="absolute inset-0 z-10" style={{ boxShadow: 'inset 0 0 200px rgba(13,13,13,0.8)' }} />
            </div>

            {/* Ocean wave canvas overlay */}
            <div className="absolute inset-0 z-[11]">
                <OceanCanvas />
            </div>

            {/* Ambient gold glow orbs */}
            <div className="absolute inset-0 z-[12] overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-n-gold/[0.03] blur-[100px] ocean-glow" />
                <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-n-gold/[0.02] blur-[80px] ocean-glow" style={{ animationDelay: '3s' }} />
            </div>

            {/* Absolute Top Brand Logo */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="absolute top-8 md:top-12 left-0 w-full flex justify-center z-50 px-6"
            >
                <img
                    src="/images/nandushreyas-logo-transparent.png"
                    alt="Nandushreyas Photography"
                    className="w-[240px] md:w-[320px] max-w-full h-auto object-contain select-none pointer-events-none"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-20">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-n-white leading-[1.1] mb-6 md:mb-8">
                    <SplitText text="Your Wedding Is Not" delay={0.4} />
                    <br className="hidden md:block" />
                    <SplitText text="an Event." delay={0.6} />{' '}
                    <span className="text-editorial text-n-gold inline-block">
                        <SplitText text="It's a Story." delay={0.8} />
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 1.2 }}
                    className="text-n-muted font-sans text-sm md:text-base font-light max-w-xl mx-auto mb-10 leading-relaxed"
                >
                    Luxury wedding photography capturing emotions, moments, and timeless memories.
                </motion.p>

                {/* Glassmorphism CTA */}
                <motion.a
                    href="#form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="inline-block glass-gold px-12 py-5 text-[11px] md:text-xs font-sans font-semibold uppercase tracking-[0.3em] text-n-gold hover:bg-n-gold/20 hover:text-n-white transition-all duration-500 rounded-sm"
                >
                    Check Date Availability
                </motion.a>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
            >
                <span className="text-n-muted/50 text-[9px] uppercase tracking-[0.4em] font-sans">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="w-[1px] h-10 bg-gradient-to-b from-n-gold/80 to-transparent"
                />
            </motion.div>

            {/* Ocean waves at bottom */}
            <OceanWaves position="bottom" variant="full" />
        </section>
    );
}
