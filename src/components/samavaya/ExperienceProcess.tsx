import { motion } from 'framer-motion';
import { MessageCircle, Shirt, Camera, Palette } from 'lucide-react';

const steps = [
    { icon: <MessageCircle className="w-6 h-6" />, title: 'Consultation', desc: 'Vision & styling discussion.' },
    { icon: <Shirt className="w-6 h-6" />, title: 'Styling', desc: 'Gown selection & fitting.' },
    { icon: <Camera className="w-6 h-6" />, title: 'Photoshoot', desc: 'Relaxed, guided session.' },
    { icon: <Palette className="w-6 h-6" />, title: 'Editing', desc: 'Cinematic retouching & delivery.' },
];

export default function ExperienceFlow() {
    return (
        <section className="py-32 bg-white border-y border-s-rose/10">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-s-rose text-xs uppercase tracking-[0.4em] font-sans block mb-6 font-medium">The Process</span>
                    <h2 className="font-display text-4xl md:text-5xl text-s-dark">Your Experience</h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-s-rose/20 flex items-center justify-center text-s-rose group-hover:bg-s-rose group-hover:text-white transition-all duration-500">
                                {step.icon}
                            </div>
                            <h3 className="font-display text-xl text-s-dark mb-3">{step.title}</h3>
                            <p className="text-sm font-sans text-s-dark/50 font-light">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
