import { motion } from 'framer-motion';

const images = [
    { src: 'https://images.unsplash.com/photo-1517726469614-72de2a106e23?q=80&w=800', alt: 'Studio Portrait' },
    { src: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c7e0?q=80&w=800', alt: 'Gown Session' },
    { src: 'https://images.unsplash.com/photo-1579737119420-91a5e181d11b?q=80&w=800', alt: 'Couple Portrait' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800', alt: 'Silhouette' },
    { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800', alt: 'Outdoor Session' },
    { src: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800', alt: 'Close Up' },
];

export default function Portfolio() {
    return (
        <section className="py-32 bg-s-bg">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-s-rose text-xs uppercase tracking-[0.4em] font-sans block mb-6 font-medium">Gallery</span>
                    <h2 className="font-display text-4xl md:text-6xl text-s-dark">Ethereal Portraits</h2>
                </motion.div>

                {/* Soft grid — large images */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: i * 0.08 }}
                            className="aspect-[3/4] overflow-hidden rounded-xl group cursor-pointer"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
