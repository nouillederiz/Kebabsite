import { motion } from 'motion/react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-4">
            <motion.div 
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: -5, opacity: 1 }}
              transition={{ duration: 1 }}
              className="monogram"
            >
              GH
            </motion.div>
            <div className="leading-tight">
              <div className="text-white font-bold text-lg">GU-HA GRILL</div>
              <div className="text-[10px] uppercase tracking-widest opacity-50">Kebab Restaurant</div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
              <a href="#menu" className="text-white hover:text-brand transition-colors">La Carte</a>
              <a href="#about" className="text-white hover:text-brand transition-colors">Notre Histoire</a>
              <a href="#contact" className="text-white hover:text-brand transition-colors">Contact</a>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand"></div>
                <span className="text-[10px] opacity-70">Ouvert 11h-23h</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="text-right mr-4">
              <div className="text-[10px] opacity-50 uppercase tracking-widest">Réservations</div>
              <a href="tel:0613343328" className="text-sm font-bold tracking-tighter hover:text-brand transition-colors">
                06 13 34 33 28
              </a>
            </div>
            <button className="glass-card hover:bg-white/10 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors">
              Commander
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#menu" className="text-white hover:text-brand block px-3 py-2 text-sm font-bold uppercase tracking-widest">La Carte</a>
            <a href="#about" className="text-white hover:text-brand block px-3 py-2 text-sm font-bold uppercase tracking-widest">Notre Histoire</a>
            <a href="#contact" className="text-white hover:text-brand block px-3 py-2 text-sm font-bold uppercase tracking-widest">Contact</a>
            <div className="pt-4 flex flex-col gap-3 px-3">
              <a href="tel:0613343328" className="flex items-center justify-center gap-2 text-brand font-bold py-2 border border-brand/30 rounded-none">
                <PhoneCall size={20} />
                <span className="tracking-tighter">06 13 34 33 28</span>
              </a>
              <button className="bg-brand text-black w-full py-3 font-bold uppercase tracking-widest text-xs">
                Commander
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
