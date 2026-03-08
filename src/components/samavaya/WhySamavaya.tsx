import { motion } from 'framer-motion';
import { Shirt, Sparkles, Camera, HeartHandshake } from 'lucide-react';

const benefits = [
    { icon: <Shirt className="w-6 h-6" />, title: 'Premium Gowns Provided', desc: 'Designer maternity gowns tailored to your form.' },
    { icon: <Sparkles className="w-6 h-6" />, title: 'Professional Makeup', desc: 'In-house hair and makeup artists for your glow.' },
    { icon: <Camera className="w-6 h-6" />, title: 'Elegant Studio Sets', desc: 'Curated sets designed for stunning silhouettes.' },
    { icon: <HeartHandshake className="w-6 h-6" />, title: 'Expert Posing Guidance', desc: 'Gentle direction so you feel confident and beautiful.' },
];

export default function Benefits() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-s-rose text-xs uppercase tracking-[0.4em] font-sans block mb-6 font-medium">The Samavaya Standard</span>
                    <h2 className="font-display text-4xl md:text-5xl text-s-dark">A Pampered Experience</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-s-bg border border-s-rose/20 flex items-center justify-center text-s-rose group-hover:bg-s-rose group-hover:text-white transition-all duration-500">
                                {b.icon}
                            </div>
                            <h3 className="font-display text-xl text-s-dark mb-3">{b.title}</h3>
                            <p className="text-sm font-sans text-s-dark/50 font-light leading-relaxed">{b.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
