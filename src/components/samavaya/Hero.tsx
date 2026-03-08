import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-s-bg">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-s-bg via-s-bg/50 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1579737119420-91a5e181d11b?q=80&w=2000"
                    alt="Maternity Portrait"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content — left aligned */}
            <div className="relative z-20 container mx-auto px-6 max-w-6xl">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-s-rose text-xs uppercase tracking-[0.4em] font-sans block mb-8 font-medium">Fine Art Maternity</span>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-s-dark leading-tight mb-8">
                            Celebrate the Beginning <br />
                            <span className="italic text-s-rose">of Your Journey</span>
                        </h1>
                        <p className="text-s-dark/60 font-sans text-base font-light max-w-md mb-12 leading-relaxed">
                            Luxury maternity portraits capturing the beauty of motherhood.
                        </p>
                        <a
                            href="#booking"
                            className="inline-block bg-s-rose text-white px-10 py-5 text-sm font-sans font-semibold uppercase tracking-[0.25em] hover:bg-s-rose/90 transition-colors duration-300 rounded-full"
                        >
                            Book Your Session
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
