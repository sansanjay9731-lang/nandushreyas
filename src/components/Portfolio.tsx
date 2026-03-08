import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = ['All', 'Destination Weddings', 'Traditional Weddings', 'Couple Portraits', 'Emotional Moments'] as const;

const allImages = [
    { src: '/images/couple-water.jpg', alt: 'Cinematic couple portrait on water', category: 'Destination Weddings' },
    { src: '/images/temple-mandap.jpg', alt: 'Grand traditional temple mandap decoration', category: 'Traditional Weddings' },
    { src: '/images/bride-bouquet.jpg', alt: 'Beautiful bride with bouquet in luxury car', category: 'Emotional Moments' },
    { src: '/images/couple-dancing.jpg', alt: 'Couple dancing with traditional drums', category: 'Emotional Moments' },
    { src: '/images/red-gateway.jpg', alt: 'Stunning red wedding entrance gateway', category: 'Destination Weddings' },
    { src: '/images/couple-yellow-haldi.jpg', alt: 'Couple at haldi ceremony with yellow smoke', category: 'Traditional Weddings' },
    { src: '/images/couple-white.jpg', alt: 'Couple in elegant white traditional attire', category: 'Couple Portraits' },
    { src: '/images/bride-running-mist.jpg', alt: 'Bride running at misty temple at dawn', category: 'Couple Portraits' },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const filtered = activeCategory === 'All'
        ? allImages
        : allImages.filter(img => img.category === activeCategory);

    return (
        <section className="py-28 md:py-36 bg-n-bg">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-n-gold text-[10px] uppercase tracking-[0.5em] font-sans block mb-6">Signature Portfolio</span>
                    <h2 className="font-display text-4xl md:text-6xl text-n-white">
                        Wedding <span className="italic text-n-gold">Stories</span>
                    </h2>
                </motion.div>

                {/* Category filter tabs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16"
                >
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-[10px] md:text-xs uppercase tracking-[0.25em] font-sans px-4 py-2 transition-all duration-500 ${activeCategory === cat
                                    ? 'text-n-gold border-b border-n-gold'
                                    : 'text-n-muted hover:text-n-white border-b border-transparent'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Cinematic image grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
                >
                    {filtered.map((img, i) => (
                        <motion.div
                            key={img.src}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, delay: i * 0.06 }}
                            className={`relative overflow-hidden group cursor-pointer ${i === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'
                                }`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-n-bg/0 group-hover:bg-n-bg/50 transition-all duration-700" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-n-gold text-[10px] uppercase tracking-[0.4em] font-sans mb-2">{img.category}</span>
                                <span className="text-n-white font-display text-2xl italic">View Story</span>
                            </div>
                            {/* Bottom gradient */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-n-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <a
                        href="#"
                        className="inline-block border border-n-gold/30 text-n-gold px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-sans font-medium hover:bg-n-gold hover:text-n-bg transition-all duration-500"
                    >
                        View Wedding Stories
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
