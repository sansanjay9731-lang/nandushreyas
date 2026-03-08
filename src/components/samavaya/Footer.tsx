export default function Footer() {
    return (
        <footer className="bg-white border-t border-s-rose/10">
            {/* Scarcity */}
            <div className="py-20 text-center border-b border-s-rose/10">
                <div className="container mx-auto px-6 max-w-2xl">
                    <div className="w-12 h-[1px] bg-s-rose/30 mx-auto mb-10" />
                    <p className="font-display text-2xl md:text-4xl text-s-dark italic mb-4">
                        Only 12 maternity sessions <br />available per month.
                    </p>
                    <p className="text-s-rose text-sm uppercase tracking-[0.3em] font-sans font-medium">
                        Reserve your date early.
                    </p>
                    <div className="w-12 h-[1px] bg-s-rose/30 mx-auto mt-10" />
                </div>
            </div>

            {/* Contact */}
            <div className="container mx-auto px-6 max-w-5xl py-16">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                    <div>
                        <h3 className="font-display text-3xl text-s-rose mb-4">Samavaya Studio</h3>
                        <p className="text-s-dark/40 text-sm font-sans font-light">Fine art maternity portraits.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 text-sm font-sans text-s-dark/50 font-light">
                        <div>
                            <p className="text-s-rose text-xs uppercase tracking-[0.2em] mb-4 font-medium">Contact</p>
                            <p>hello@samavayastudio.com</p>
                            <p>+91 98765 43211</p>
                        </div>
                        <div>
                            <p className="text-s-rose text-xs uppercase tracking-[0.2em] mb-4 font-medium">Follow</p>
                            <p><a href="#" className="hover:text-s-rose transition-colors">Instagram</a></p>
                            <p><a href="#" className="hover:text-s-rose transition-colors">Facebook</a></p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-s-rose/10 text-s-dark/25 text-xs font-sans text-center">
                    © {new Date().getFullYear()} Samavaya Studio. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
