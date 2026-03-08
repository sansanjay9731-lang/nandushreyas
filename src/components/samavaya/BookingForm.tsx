import { motion } from 'framer-motion';

export default function BookingForm() {
    return (
        <section id="booking" className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-s-rose text-xs uppercase tracking-[0.4em] font-sans block mb-6 font-medium">Reserve</span>
                    <h2 className="font-display text-4xl md:text-5xl text-s-dark">Book Your Session</h2>
                </motion.div>

                <form className="space-y-8">
                    <div>
                        <label className="text-s-dark/50 text-xs uppercase tracking-[0.2em] font-sans block mb-3">Name</label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            className="w-full bg-s-bg border border-s-rose/20 px-5 py-4 font-sans text-s-dark focus:outline-none focus:border-s-rose transition-colors rounded-lg placeholder:text-s-dark/25"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="text-s-dark/50 text-xs uppercase tracking-[0.2em] font-sans block mb-3">Pregnancy Month</label>
                            <select className="w-full bg-s-bg border border-s-rose/20 px-5 py-4 font-sans text-s-dark focus:outline-none focus:border-s-rose transition-colors appearance-none cursor-pointer rounded-lg">
                                <option value="">Select</option>
                                <option value="5-6">5–6 Months</option>
                                <option value="7">7th Month (Ideal)</option>
                                <option value="8">8th Month</option>
                                <option value="9">9th Month</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-s-dark/50 text-xs uppercase tracking-[0.2em] font-sans block mb-3">Preferred Date</label>
                            <input
                                type="date"
                                className="w-full bg-s-bg border border-s-rose/20 px-5 py-4 font-sans text-s-dark focus:outline-none focus:border-s-rose transition-colors rounded-lg"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-s-dark/50 text-xs uppercase tracking-[0.2em] font-sans block mb-3">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="+91"
                            className="w-full bg-s-bg border border-s-rose/20 px-5 py-4 font-sans text-s-dark focus:outline-none focus:border-s-rose transition-colors rounded-lg placeholder:text-s-dark/25"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-s-rose text-white py-5 text-sm font-sans font-semibold uppercase tracking-[0.25em] hover:bg-s-rose/90 transition-colors duration-300 rounded-full"
                    >
                        Check Availability
                    </button>
                </form>
            </div>
        </section>
    );
}
