import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Camera, Film } from 'lucide-react';

const steps = [
    {
        icon: <MessageCircle className="w-6 h-6" />,
        number: '01',
        title: 'Consultation',
        desc: 'A personal conversation to understand your vision, your love story, and the emotions you want preserved forever.'
    },
    {
        icon: <MapPin className="w-6 h-6" />,
        number: '02',
        title: 'Story Planning',
        desc: 'Curating locations, visual mood boards, timelines, and a detailed creative strategy tailored to your celebration.'
    },
    {
        icon: <Camera className="w-6 h-6" />,
        number: '03',
        title: 'Wedding Coverage',
        desc: 'Capturing every authentic, unscripted emotion — from the nervous laughter to the tears of joy.'
    },
    {
        icon: <Film className="w-6 h-6" />,
        number: '04',
        title: 'Cinematic Film Delivery',
        desc: 'Artfully edited photographs and a cinematic wedding film, delivered as your timeless heirloom.'
    },
];

export default function Experience() {
    return (
        <section className="py-28 md:py-40 bg-n-bg">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <span className="text-n-gold text-[10px] uppercase tracking-[0.5em] font-sans block mb-6">The Experience</span>
                    <h2 className="font-display text-4xl md:text-6xl text-n-white">
                        Your Journey <span className="italic text-n-gold">With Us</span>
                    </h2>
                </motion.div>

                {/* Vertical timeline */}
                <div className="relative">
                    {/* Connecting gold line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-n-gold/5 via-n-gold/30 to-n-gold/5 md:-translate-x-[0.5px]" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15, duration: 0.7 }}
                            className={`relative flex items-start gap-8 md:gap-16 mb-20 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-n-gold rounded-full -translate-x-1/2 mt-2 z-10 shadow-[0_0_20px_rgba(201,169,110,0.3)]" />

                            {/* Content card */}
                            <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                                <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    <div className="w-12 h-12 border border-n-gold/20 rounded-full flex items-center justify-center text-n-gold">
                                        {step.icon}
                                    </div>
                                    <span className="text-n-gold/40 font-display text-3xl">{step.number}</span>
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl text-n-white mb-4 italic">{step.title}</h3>
                                <p className="text-n-muted text-sm font-sans font-light leading-relaxed">{step.desc}</p>
                            </div>

                            {/* Spacer for the other side */}
                            <div className="hidden md:block md:w-5/12" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
