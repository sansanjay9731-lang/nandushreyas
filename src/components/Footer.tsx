import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const instaImages = [
    '/images/bride-bouquet.jpg',
    '/images/couple-traditional.jpg',
    '/images/temple-mandap.jpg',
    '/images/couple-dancing.jpg',
    '/images/couple-white.jpg',
    '/images/bride-running-mist.jpg',
    '/images/couple-yellow-haldi.jpg',
    '/images/couple-embrace.jpg',
];

export default function Footer() {
    return (
        <footer className="bg-n-bg border-t border-n-gold/10">
            {/* Instagram Gallery */}
            <div className="grid grid-cols-4 md:grid-cols-8">
                {instaImages.map((src, i) => (
                    <a key={i} href="#" target="_blank" rel="noopener" className="aspect-square overflow-hidden group">
                        <img
                            src={src}
                            alt="Instagram"
                            loading="lazy"
                            className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        />
                    </a>
                ))}
            </div>

            {/* Main footer content */}
            <div className="container mx-auto px-6 max-w-6xl py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* Brand */}
                    <div>
                        <h3 className="font-display text-3xl text-n-gold mb-4 italic">Nandushreyas</h3>
                        <p className="text-n-muted text-sm font-sans font-light leading-relaxed mb-6">
                            Luxury wedding photography studio based in Bangalore. Capturing love stories across India.
                        </p>
                        {/* Social links */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-9 h-9 border border-n-gold/15 rounded-full flex items-center justify-center text-n-muted hover:text-n-gold hover:border-n-gold/40 transition-all duration-300">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 border border-n-gold/15 rounded-full flex items-center justify-center text-n-muted hover:text-n-gold hover:border-n-gold/40 transition-all duration-300">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 border border-n-gold/15 rounded-full flex items-center justify-center text-n-muted hover:text-n-gold hover:border-n-gold/40 transition-all duration-300">
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-n-gold text-[10px] uppercase tracking-[0.3em] font-sans font-medium mb-6">Contact</p>
                        <div className="space-y-4 text-sm font-sans text-n-muted font-light">
                            <a href="mailto:hello@nandushreyas.com" className="flex items-center gap-3 hover:text-n-gold transition-colors duration-300">
                                <Mail className="w-4 h-4 text-n-gold/50" />
                                hello@nandushreyas.com
                            </a>
                            <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-n-gold transition-colors duration-300">
                                <Phone className="w-4 h-4 text-n-gold/50" />
                                +91 98765 43210
                            </a>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-n-gold/50 mt-0.5 shrink-0" />
                                <span>Bangalore, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <p className="text-n-gold text-[10px] uppercase tracking-[0.3em] font-sans font-medium mb-6">Explore</p>
                        <div className="space-y-3 text-sm font-sans text-n-muted font-light">
                            <a href="#" className="block hover:text-n-gold transition-colors duration-300">Portfolio</a>
                            <a href="#" className="block hover:text-n-gold transition-colors duration-300">Wedding Stories</a>
                            <a href="#" className="block hover:text-n-gold transition-colors duration-300">Investment</a>
                            <a href="#form" className="block hover:text-n-gold transition-colors duration-300">Check Availability</a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-20 pt-8 border-t border-n-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-n-muted/40 text-xs font-sans">
                        © {new Date().getFullYear()} Nandushreyas Photography. All rights reserved.
                    </p>
                    <p className="text-n-muted/30 text-[10px] font-sans">
                        Crafted with love in Bangalore
                    </p>
                </div>
            </div>
        </footer>
    );
}
