import { motion, useMotionValue, useTransform } from 'motion/react';
import type { MouseEvent } from 'react';
import heroImg from '../assets/images/kebab_hero_1784824587066.jpg';

export function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-block mb-6 uppercase tracking-[0.3em] opacity-60 text-sm font-bold">
              L'art du feu à Golbey
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-[110px] font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase">
              L'Art du <br/><span className="text-brand">Véritable</span><br/> Kebab
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
              Découvrez l'authenticité d'un kebab grillé à la flamme, préparé avec passion. Qualité supérieure, saveurs uniques.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a href="#menu" className="w-full sm:w-auto px-8 py-4 bg-brand text-black font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity">
                Découvrir le Menu
              </a>
              <div className="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-1">
                Sur place & à emporter
              </div>
            </div>
          </motion.div>

          <div 
            className="relative lg:h-[600px] flex items-center justify-center perspective-[1000px]"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-lg mx-auto"
            >
              <div className="absolute inset-0 bg-brand/10 rounded-full blur-3xl transform -translate-z-12" />
              <motion.img
                src={heroImg}
                alt="Delicious Kebab"
                className="w-full h-auto rounded-none shadow-[20px_20px_60px_rgba(0,0,0,0.5)] object-cover border border-white/10"
                style={{ transform: "translateZ(50px)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              
              {/* Floating elements for 3D effect */}
              <motion.div 
                className="absolute -right-6 top-1/4 glass-card p-4 rounded-none shadow-[20px_20px_60px_rgba(0,0,0,0.5)]"
                style={{ transform: "translateZ(100px)" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-brand font-black text-2xl">01</div>
                  <div>
                    <div className="text-white font-bold text-xs uppercase tracking-widest">Qualité Premium</div>
                    <div className="text-white/50 text-[10px] uppercase tracking-wider">100% Viande Fraîche</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -left-8 bottom-1/4 glass-card p-4 rounded-none shadow-[20px_20px_60px_rgba(0,0,0,0.5)]"
                style={{ transform: "translateZ(80px)" }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-brand font-black text-2xl">02</div>
                  <div>
                    <div className="text-white font-bold text-xs uppercase tracking-widest">Fait Maison</div>
                    <div className="text-white/50 text-[10px] uppercase tracking-wider">Sauces Artisanales</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
