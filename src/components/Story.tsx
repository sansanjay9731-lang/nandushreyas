import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Story() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <section ref={sectionRef} className="py-28 md:py-40 bg-n-bg overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Left — Large emotional image with parallax */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative aspect-[3/4] overflow-hidden">
                            <motion.img
                                style={{ y: imageY }}
                                src="/images/couple-embrace.jpg"
                                alt="Intimate couple portrait by Nandushreyas Photography"
                                className="w-full h-[120%] object-cover"
                            />
                            {/* Gold accent corner */}
                            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-n-gold/40" />
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-n-gold/40" />
                        </div>
                    </motion.div>

                    {/* Right — Editorial narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-n-gold text-[10px] uppercase tracking-[0.5em] font-sans block mb-10">Our Philosophy</span>

                        <div className="w-12 h-[1px] bg-n-gold/40 mb-10" />

                        <h2 className="font-display text-3xl md:text-5xl text-n-white leading-[1.2] mb-10 italic">
                            Every love story deserves to be told with the emotion it was lived.
                        </h2>

                        <p className="text-n-muted font-sans text-sm md:text-base font-light leading-[1.9] mb-8">
                            We don't just photograph weddings — we preserve the raw, unscripted beauty of your most cherished moments. Every glance, every tear of joy, every whispered vow becomes a part of your timeless visual legacy.
                        </p>

                        <p className="text-n-muted font-sans text-sm md:text-base font-light leading-[1.9] mb-12">
                            Through cinematic storytelling and an eye for the extraordinary in the ordinary, we create photographs that let you relive the emotions of your wedding day — not just remember them.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-[1px] bg-n-gold/40" />
                            <span className="text-n-gold font-display text-lg italic">Nandushreyas</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
