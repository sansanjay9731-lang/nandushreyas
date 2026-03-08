import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import SplitText from './SplitText';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
    { value: 200, suffix: '+', label: 'Weddings Captured' },
    { value: 25, suffix: '+', label: 'Destination Cities' },
    { value: 100, suffix: '%', label: 'Satisfied Couples' },
];

const highlights = [
    { src: '/images/bride-bouquet.jpg', label: 'Bridal Elegance', bgPosition: 'object-[center_20%]' }, // Bias towards top to keep face
    { src: '/images/couple-yellow-haldi.jpg', label: 'Haldi Ceremonies', bgPosition: 'object-[center_30%]' },
    { src: '/images/couple-traditional.jpg', label: 'Classic Portraits', bgPosition: 'object-[center_25%]' }, // Bias towards faces for the wide shot
    { src: '/images/engagement-ceremony.jpg', label: 'Ring Exchanges', bgPosition: 'object-[center_25%]' },
    { src: '/images/couple-embrace.jpg', label: 'Intimate Moments', bgPosition: 'object-[center_15%]' }, // Bias strongly to top for embrace
];

export default function Authority() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Subtle parallax shifts
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

    return (
        <section ref={containerRef} className="py-24 md:py-40 bg-n-bg relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-n-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-n-gold/[0.02] rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Left Sticky Content */}
                    <div className="lg:w-5/12 relative">
                        <div className="lg:sticky lg:top-40">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-n-gold text-[10px] md:text-xs uppercase tracking-[0.5em] font-sans block mb-8"
                            >
                                Trusted Nationwide
                            </motion.span>

                            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-n-white leading-[1.05] mb-16">
                                <SplitText text="Capturing Love" delay={0.1} />
                                <br />
                                <span className="italic text-n-gold inline-block pr-3">
                                    <SplitText text="Stories" delay={0.3} />
                                </span>
                                <SplitText text="Across India" delay={0.5} />
                            </h2>

                            {/* Stats Flexbox */}
                            <div className="flex flex-col sm:flex-row lg:flex-col gap-10 md:gap-16">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                                        className="relative pl-6 border-l border-n-gold/20"
                                    >
                                        <span className="text-n-gold font-serif text-5xl md:text-6xl block mb-2 leading-none">
                                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                        </span>
                                        <span className="text-n-muted text-[10px] md:text-xs uppercase tracking-[0.3em] font-sans block mt-3">
                                            {stat.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Editorial Imagery / Asymmetric Masonry */}
                    <div className="lg:w-7/12 grid grid-cols-2 gap-4 md:gap-8 pt-10 lg:pt-0">
                        {/* Image 0: Arch shape, left column */}
                        <motion.div style={{ y: y1 }} className="col-span-1 pt-0 lg:pt-12">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1 }}
                                className="relative overflow-hidden group cursor-pointer aspect-[3/4] rounded-t-full rounded-b-sm"
                            >
                                <img src={highlights[0].src} alt={highlights[0].label} className={`w-full h-full object-cover ${highlights[0].bgPosition} group-hover:scale-110 transition-transform duration-[2s] ease-out brightness-90 group-hover:brightness-110`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-n-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-center">
                                    <span className="text-n-gold font-sans text-[9px] uppercase tracking-[0.3em] block mb-1">Portfolio</span>
                                    <span className="text-n-white font-serif italic text-xl">{highlights[0].label}</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Image 1: Leaf shape, right column */}
                        <motion.div style={{ y: y2 }} className="col-span-1 pt-16 lg:pt-32">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative overflow-hidden group cursor-pointer aspect-[4/5] rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-sm rounded-bl-sm"
                            >
                                <img src={highlights[1].src} alt={highlights[1].label} className={`w-full h-full object-cover ${highlights[1].bgPosition} group-hover:scale-110 transition-transform duration-[2s] ease-out brightness-90 group-hover:brightness-110`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-n-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-center">
                                    <span className="text-n-gold font-sans text-[9px] uppercase tracking-[0.3em] block mb-1">Portfolio</span>
                                    <span className="text-n-white font-serif italic text-xl">{highlights[1].label}</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Image 2: Cinematic Wide, spans 2 columns */}
                        <motion.div style={{ y: y3 }} className="col-span-2 pt-8 lg:pt-16">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="relative overflow-hidden group cursor-pointer aspect-[16/9] md:aspect-[21/9] rounded-sm glass-card border-none"
                            >
                                <img src={highlights[2].src} alt={highlights[2].label} className={`w-full h-full object-cover ${highlights[2].bgPosition} group-hover:scale-110 transition-transform duration-[3s] ease-out brightness-90 group-hover:brightness-110`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-n-bg/90 via-n-bg/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-n-gold font-sans text-[10px] uppercase tracking-[0.4em] block mb-2">Featured Gallery</span>
                                    <span className="text-n-white font-serif italic text-2xl md:text-3xl">{highlights[2].label}</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Image 3: Circle, Left column */}
                        <motion.div style={{ y: y1 }} className="col-span-1 pt-8 lg:pt-16 px-4 md:px-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.1 }}
                                className="relative overflow-hidden group cursor-pointer aspect-square rounded-full border border-n-gold/20 p-2"
                            >
                                <div className="w-full h-full rounded-full overflow-hidden relative">
                                    <img src={highlights[3].src} alt={highlights[3].label} className={`w-full h-full object-cover ${highlights[3].bgPosition} group-hover:scale-110 transition-transform duration-[2s] ease-out grayscale-[30%] group-hover:grayscale-0`} />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Image 4: Tall portrait, Right column overlapping upwards */}
                        <motion.div style={{ y: y2 }} className="col-span-1 -mt-12 lg:-mt-24 pb-12">
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="relative overflow-hidden group cursor-pointer aspect-[3/4] rounded-t-sm rounded-br-sm rounded-bl-[5rem]"
                            >
                                <img src={highlights[4].src} alt={highlights[4].label} className={`w-full h-full object-cover ${highlights[4].bgPosition} group-hover:scale-105 transition-transform duration-[2s] ease-out brightness-90 group-hover:brightness-110`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-n-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-center">
                                    <span className="text-n-gold font-sans text-[9px] uppercase tracking-[0.3em] block mb-1">Portfolio</span>
                                    <span className="text-n-white font-serif italic text-xl">{highlights[4].label}</span>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
