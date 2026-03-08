import { motion } from 'framer-motion';

export default function PriceFilter() {
    return (
        <section className="py-32 bg-s-bg">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="text-s-rose text-xs uppercase tracking-[0.4em] font-sans block mb-10 font-medium">Investment</span>
                    <h2 className="font-display text-3xl md:text-5xl text-s-dark mb-8">
                        Luxury maternity sessions <br />
                        <span className="text-s-rose italic">begin from ₹25,000</span>
                    </h2>
                    <div className="w-16 h-[1px] bg-s-rose/30 mx-auto mb-8" />
                    <p className="text-s-dark/50 font-sans text-sm font-light max-w-md mx-auto leading-relaxed">
                        Including designer gown access, professional styling, and cinematic retouching.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
