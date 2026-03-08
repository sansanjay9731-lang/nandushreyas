import { motion } from 'framer-motion';

export default function EmotionalStory() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Image — Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1517726469614-72de2a106e23?q=80&w=1000"
                                alt="Maternity moment"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                            />
                        </div>
                    </motion.div>

                    {/* Emotional text — Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-s-rose text-xs uppercase tracking-[0.4em] font-sans block mb-8 font-medium">Your Story</span>
                        <h2 className="font-display text-3xl md:text-5xl text-s-dark leading-snug mb-8 italic">
                            Pregnancy is one of life's most beautiful chapters.
                        </h2>
                        <p className="text-s-dark/60 font-sans text-base font-light leading-relaxed mb-6">
                            This fleeting, magical phase deserves to be preserved with the same love and tenderness that you feel. Our portraits aren't just photographs — they are emotional heirlooms that tell the story of anticipation, love, and the beginning of something extraordinary.
                        </p>
                        <p className="text-s-dark/60 font-sans text-base font-light leading-relaxed">
                            Let us capture the glow, the grace, and the quiet strength that makes this moment uniquely yours.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
