import { motion } from 'framer-motion';

const weddings = [
    {
        image: '/images/couple-dancing.jpg',
        focalPoint: 'center 15%',
        couple: 'A Celebration of Joy',
        location: 'Traditional Wedding, Bangalore',
        excerpt: 'A vibrant celebration filled with pure joy, traditional drums, and the infectious energy of two souls dancing into their forever — every frame radiates happiness.',
        gallery: [
            '/images/temple-mandap.jpg',
            '/images/red-gateway.jpg',
            '/images/couple-traditional.jpg',
        ]
    },
    {
        image: '/images/couple-collage.jpg',
        focalPoint: 'center 20%',
        couple: 'Our Story 2026',
        location: 'Garden Wedding, Bangalore',
        excerpt: 'An enchanting garden celebration where vibrant colors met tender moments — from the first touch of hands to stolen glances amidst tropical greenery.',
        gallery: [
            '/images/couple-yellow-haldi.jpg',
            '/images/engagement-ceremony.jpg',
            '/images/bride-running-mist.jpg',
        ]
    },
    {
        image: '/images/couple-white.jpg',
        focalPoint: 'center 20%',
        couple: 'Timeless Elegance',
        location: 'South Indian Wedding, Kerala',
        excerpt: 'A dreamy South Indian celebration wrapped in pristine whites and golden hues, where every tradition was honored and every emotion was felt deeply.',
        gallery: [
            '/images/bridesmaids.jpg',
            '/images/bride-bouquet.jpg',
            '/images/couple-embrace.jpg',
        ]
    },
];

export default function WeddingStories() {
    return (
        <section className="py-28 md:py-36 bg-n-bg">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-n-gold text-[10px] uppercase tracking-[0.5em] font-sans block mb-6">Featured</span>
                    <h2 className="font-display text-4xl md:text-6xl text-n-white">
                        Real Wedding <span className="italic text-n-gold">Stories</span>
                    </h2>
                </motion.div>

                {/* Wedding cards */}
                <div className="space-y-24">
                    {weddings.map((wedding, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col gap-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Hero image */}
                            <div className="w-full md:w-7/12 relative overflow-hidden group cursor-pointer">
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={wedding.image}
                                        alt={wedding.couple}
                                        loading="lazy"
                                        style={{ objectPosition: wedding.focalPoint }}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                                    />
                                </div>
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-n-bg/0 group-hover:bg-n-bg/40 transition-colors duration-700 flex items-center justify-center">
                                    <span className="text-n-white font-display text-xl italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        View Full Story
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full md:w-5/12 flex flex-col justify-center">
                                <span className="text-n-gold text-[10px] uppercase tracking-[0.4em] font-sans block mb-4">{wedding.location}</span>
                                <h3 className="font-display text-3xl md:text-4xl text-n-white italic mb-6">{wedding.couple}</h3>
                                <div className="w-10 h-[1px] bg-n-gold/30 mb-6" />
                                <p className="text-n-muted font-sans text-sm font-light leading-relaxed mb-8">{wedding.excerpt}</p>

                                {/* Gallery preview */}
                                <div className="flex gap-2">
                                    {wedding.gallery.map((thumb, j) => (
                                        <div key={j} className="w-16 h-16 md:w-20 md:h-20 overflow-hidden opacity-60 hover:opacity-100 transition-opacity duration-500">
                                            <img src={thumb} alt="Gallery preview" loading="lazy" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
