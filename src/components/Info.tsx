import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Truck, ShieldCheck } from 'lucide-react';

export function Info() {
  return (
    <section id="contact" className="py-24 bg-transparent border-t border-white/5 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter">
              Venir chez <span className="text-brand">Gu-Ha Grill</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="text-brand" size={24} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white mb-1 uppercase tracking-widest">Adresse</h3>
                  <p className="text-white/50 text-sm">16 Rue du Général Leclerc<br/>88190 Golbey, France</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="text-brand" size={24} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white mb-1 uppercase tracking-widest">Téléphone</h3>
                  <a href="tel:0613343328" className="text-white/80 hover:text-brand transition-colors text-xl font-bold font-mono block">
                    06 13 34 33 28
                  </a>
                  <p className="text-white/40 text-[10px] mt-1 uppercase tracking-wider">Commandes par téléphone acceptées</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Clock className="text-brand" size={24} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white mb-1 uppercase tracking-widest">Horaires</h3>
                  <ul className="text-white/50 space-y-1 text-sm">
                    <li className="flex justify-between w-48"><span>Lundi - Jeudi:</span> <span>11h - 22h</span></li>
                    <li className="flex justify-between w-48"><span>Ven - Sam:</span> <span>11h - 23h</span></li>
                    <li className="flex justify-between w-48"><span>Dimanche:</span> <span>18h - 22h</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Delivery & Security Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-none shadow-[20px_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden float-3d"
            >
              
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black text-white italic serif tracking-tight">Service de Livraison</h3>
                <span className="bg-brand text-black px-3 py-1 text-[11px] font-extrabold rounded-full tracking-widest uppercase">
                  En Attente
                </span>
              </div>
              
              <p className="text-white/50 leading-relaxed mb-6 text-sm">
                Nous préparons actuellement notre propre service de livraison pour vous apporter la qualité Gu-Ha Grill directement chez vous, encore bien chaud.
              </p>
              
              <div className="w-full bg-white/10 rounded-none h-2 mb-2 overflow-hidden">
                <div className="bg-brand h-2 w-2/3" />
              </div>
              <p className="text-[10px] text-white/30 text-right uppercase tracking-widest">Construction en cours...</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-none shadow-[20px_20px_60px_rgba(0,0,0,0.5)] flex items-center gap-4 float-3d"
            >
              <div className="w-12 h-12 rounded-none bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <ShieldCheck className="text-brand" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs uppercase tracking-widest">Sécurité & Hygiène</h4>
                <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">Normes sanitaires strictes respectées à 100%.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
