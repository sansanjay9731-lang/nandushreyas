import { motion } from 'framer-motion';

export default function QualificationForm() {
    return (
        <section id="form" className="py-28 md:py-36 bg-n-bg">
            <div className="container mx-auto px-6 max-w-3xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-n-gold text-[10px] uppercase tracking-[0.5em] font-sans block mb-6">Begin Your Story</span>
                    <h2 className="font-display text-4xl md:text-5xl text-n-white mb-4">Check Availability</h2>
                    <p className="text-n-muted font-sans text-sm font-light max-w-md mx-auto">
                        Share your wedding details and we'll confirm availability within 24 hours.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-card p-8 md:p-12 rounded-lg space-y-8 relative overflow-hidden"
                >
                    {/* Ambient glow inside form */}
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-n-gold/[0.03] rounded-full blur-[80px] pointer-events-none" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="text-n-muted text-[10px] uppercase tracking-[0.25em] font-sans block mb-3">Wedding Date</label>
                            <input
                                type="date"
                                className="w-full bg-transparent border border-n-gold/15 text-n-white font-sans text-sm px-5 py-4 focus:outline-none focus:border-n-gold/60 transition-colors duration-500"
                            />
                        </div>
                        <div>
                            <label className="text-n-muted text-[10px] uppercase tracking-[0.25em] font-sans block mb-3">Wedding Location</label>
                            <input
                                type="text"
                                placeholder="City / Venue"
                                className="w-full bg-transparent border border-n-gold/15 text-n-white font-sans text-sm px-5 py-4 focus:outline-none focus:border-n-gold/60 transition-colors duration-500 placeholder:text-n-muted/25"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="text-n-muted text-[10px] uppercase tracking-[0.25em] font-sans block mb-3">Number of Events</label>
                            <select className="w-full bg-transparent border border-n-gold/15 text-n-white font-sans text-sm px-5 py-4 focus:outline-none focus:border-n-gold/60 transition-colors duration-500 appearance-none cursor-pointer">
                                <option className="bg-n-bg" value="">Select</option>
                                <option className="bg-n-bg" value="1-2">1–2 Functions</option>
                                <option className="bg-n-bg" value="3-4">3–4 Functions</option>
                                <option className="bg-n-bg" value="5+">5+ Functions</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-n-muted text-[10px] uppercase tracking-[0.25em] font-sans block mb-3">Estimated Budget</label>
                            <select className="w-full bg-transparent border border-n-gold/15 text-n-white font-sans text-sm px-5 py-4 focus:outline-none focus:border-n-gold/60 transition-colors duration-500 appearance-none cursor-pointer">
                                <option className="bg-n-bg" value="">Select</option>
                                <option className="bg-n-bg" value="1-2.5L">₹1L – ₹2.5L</option>
                                <option className="bg-n-bg" value="2.5-5L">₹2.5L – ₹5L</option>
                                <option className="bg-n-bg" value="5L+">Above ₹5L</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="text-n-muted text-[10px] uppercase tracking-[0.25em] font-sans block mb-3">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="+91"
                            className="w-full bg-transparent border border-n-gold/15 text-n-white font-sans text-sm px-5 py-4 focus:outline-none focus:border-n-gold/60 transition-colors duration-500 placeholder:text-n-muted/25"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-n-gold text-n-bg py-5 text-[11px] font-sans font-semibold uppercase tracking-[0.3em] hover:bg-n-white transition-colors duration-500"
                    >
                        Check Availability
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
