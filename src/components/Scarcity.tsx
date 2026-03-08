import { motion } from 'framer-motion';

export default function Scarcity() {
    return (
        <section className="py-28 md:py-36 bg-n-bg">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="gold-line w-20 mx-auto mb-14" />

                    <span className="text-n-gold text-[10px] uppercase tracking-[0.5em] font-sans block mb-10">Exclusivity</span>

                    <h2 className="font-display text-3xl md:text-6xl text-n-white mb-8 italic leading-snug">
                        Only 20 weddings are accepted <br className="hidden md:block" />per year.
                    </h2>

                    <p className="text-n-muted font-sans text-sm font-light leading-relaxed max-w-md mx-auto mb-12">
                        To maintain creative quality and give every couple our undivided attention, we limit our bookings to twenty carefully selected weddings each year.
                    </p>

                    <a
                        href="#form"
                        className="inline-block border border-n-gold/30 text-n-gold px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-sans font-medium hover:bg-n-gold hover:text-n-bg transition-all duration-500"
                    >
                        Book a Consultation
                    </a>

                    <div className="gold-line w-20 mx-auto mt-14" />
                </motion.div>
            </div>
        </section>
    );
}
