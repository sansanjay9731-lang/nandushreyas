import { motion } from 'framer-motion';

export default function Testimonials() {
    return (
        <section className="py-32 bg-s-bg">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Mother portrait */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-5/12"
                    >
                        <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1517726469614-72de2a106e23?q=80&w=800"
                                alt="Happy Mother"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Quote */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full md:w-7/12"
                    >
                        <span className="text-s-rose text-xs uppercase tracking-[0.4em] font-sans block mb-10 font-medium">Client Love</span>
                        <p className="font-display text-2xl md:text-4xl text-s-dark leading-snug mb-10 italic">
                            "Samavaya captured the most beautiful chapter of my life. I felt like a goddess the entire time. The photos bring tears of joy every time I see them."
                        </p>
                        <p className="text-s-dark font-sans text-sm font-medium">— Priya Sharma</p>
                        <p className="text-s-dark/40 text-xs uppercase tracking-[0.2em] font-sans mt-1">Studio Session, 7th Month</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
