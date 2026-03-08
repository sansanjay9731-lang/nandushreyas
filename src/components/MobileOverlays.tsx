import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function MobileOverlays() {
    const [showStickyCTA, setShowStickyCTA] = useState(false);
    const [whatsappTooltip, setWhatsappTooltip] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show sticky CTA after scrolling past the hero (100vh)
            setShowStickyCTA(window.scrollY > window.innerHeight);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Show WhatsApp tooltip after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => setWhatsappTooltip(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Sticky CTA — Mobile only */}
            <AnimatePresence>
                {showStickyCTA && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-n-bg/95 backdrop-blur-md border-t border-n-gold/15 px-4 py-3 safe-area-pb"
                    >
                        <a
                            href="#form"
                            className="block bg-n-gold text-n-bg text-center py-4 text-[11px] font-sans font-semibold uppercase tracking-[0.3em]"
                        >
                            Check Availability
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8 flex flex-col items-end gap-3">
                {/* Tooltip */}
                <AnimatePresence>
                    {whatsappTooltip && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="bg-n-white text-n-bg px-4 py-2.5 rounded-lg shadow-2xl text-xs font-sans relative max-w-[200px]"
                        >
                            <button
                                onClick={() => setWhatsappTooltip(false)}
                                className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-n-bg text-n-white rounded-full flex items-center justify-center"
                            >
                                <X className="w-3 h-3" />
                            </button>
                            <p className="font-medium">Need help?</p>
                            <p className="text-n-muted text-[10px] mt-0.5">Chat with us on WhatsApp</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* WhatsApp button */}
                <motion.a
                    href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20wedding%20photography"
                    target="_blank"
                    rel="noopener"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transition-shadow duration-300"
                    style={{ marginBottom: showStickyCTA ? '64px' : '0' }}
                >
                    <MessageCircle className="w-6 h-6 text-white" />
                </motion.a>
            </div>
        </>
    );
}
