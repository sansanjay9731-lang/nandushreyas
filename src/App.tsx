import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NandushreyasPage from './pages/nandushreyas/Index';
import SamavayaPage from './pages/samavaya/Index';

function Home() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* Nandushreyas — Dark Cinematic */}
      <Link
        to="/nandushreyas"
        className="group relative flex-1 h-1/2 md:h-full overflow-hidden"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[#0B0B0B]/60 group-hover:bg-[#0B0B0B]/40 transition-colors duration-700 z-10" />
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Wedding"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-[#C8A76A] uppercase tracking-[0.5em] text-[10px] mb-6 block font-sans font-medium">Luxury Wedding Photography</span>
            <h2 className="text-5xl md:text-7xl font-display text-[#F5F5F5] mb-8">Nandushreyas</h2>
            <div className="w-12 h-[1px] bg-[#C8A76A] mx-auto group-hover:w-24 transition-all duration-700" />
            <p className="mt-8 text-[#8E8E8E] font-sans text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">View Collection →</p>
          </motion.div>
        </div>
      </Link>

      {/* Samavaya — Soft Feminine */}
      <Link
        to="/samavaya"
        className="group relative flex-1 h-1/2 md:h-full overflow-hidden border-l border-white/5"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[#FFF8F6]/30 group-hover:bg-[#FFF8F6]/10 transition-colors duration-700 z-10" />
          <img
            src="https://images.unsplash.com/photo-1579737119420-91a5e181d11b?auto=format&fit=crop&q=80&w=2000"
            alt="Maternity Portraits"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-[#E8B4B8] uppercase tracking-[0.5em] text-[10px] mb-6 block font-sans font-medium">Fine Art Maternity</span>
            <h2 className="text-5xl md:text-7xl font-display text-white mb-8">Samavaya</h2>
            <div className="w-12 h-[1px] bg-[#E8B4B8] mx-auto group-hover:w-24 transition-all duration-700" />
            <p className="mt-8 text-white/50 font-sans text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">View Experience →</p>
          </motion.div>
        </div>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nandushreyas" element={<NandushreyasPage />} />
        <Route path="/samavaya" element={<SamavayaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
