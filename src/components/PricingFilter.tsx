import { motion } from 'framer-motion';

export default function PriceFilter() {
    return (
        <section className="py-28 md:py-36 bg-n-bg">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center glass-card py-24 px-8 md:px-20 rounded-lg relative overflow-hidden"
                >
                    {/* Ambient glow inside card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-n-gold/[0.03] rounded-full blur-[80px] pointer-events-none" />

                    <span className="text-n-gold text-[10px] uppercase tracking-[0.5em] font-sans block mb-10 relative z-10">Investment</span>

                    <h2 className="font-display text-3xl md:text-5xl text-n-white mb-4 leading-snug">
                        Wedding photography collections
                    </h2>
                    <h2 className="font-display text-3xl md:text-5xl text-n-gold italic mb-10">
                        begin from ₹1,00,000
                    </h2>

                    <div className="gold-line w-20 mx-auto mb-10" />

                    <p className="text-n-muted font-sans text-sm font-light leading-relaxed max-w-md mx-auto mb-4">
                        Every commission is unique. We accept only a limited number of weddings each season to ensure every couple receives our complete creative devotion.
                    </p>
                    <p className="text-n-muted/60 font-sans text-xs font-light">
                        Each project is personally reviewed by our studio director.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
