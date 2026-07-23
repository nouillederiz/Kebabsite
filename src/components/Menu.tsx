import { motion } from 'motion/react';
import plateImg from '../assets/images/kebab_plate_1784824599235.jpg';

const menuItems = [
  {
    title: "Le Classique",
    desc: "Pain artisanal, viande kebab grillée, salade, tomate, oignon, sauce au choix.",
    price: "7.50€",
    image: plateImg,
    badge: "Populaire"
  },
  {
    title: "L'Assiette Royale",
    desc: "Double portion de viande, frites croustillantes, salade composée, blé, double sauce.",
    price: "14.50€",
    image: plateImg
  },
  {
    title: "Menu Étudiant",
    desc: "Kebab classique + portion de frites + boisson 33cl. Sur présentation de la carte.",
    price: "9.50€",
    image: plateImg
  },
  {
    title: "Le Galette",
    desc: "Galette durum roulée, viande généreuse, crudités fraîches et sauce.",
    price: "8.00€",
    image: plateImg
  },
  {
    title: "Tacos 2 Viandes",
    desc: "Galette XL, sauce fromagère maison, frites, choix de 2 viandes.",
    price: "11.00€",
    image: plateImg
  },
  {
    title: "Barquette Frites",
    desc: "Frites dorées et croustillantes, sel fin. Portion généreuse.",
    price: "3.50€",
    image: plateImg
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-transparent relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 uppercase tracking-[0.3em] opacity-60 text-sm font-bold">
            Nos Incontournables
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-4 uppercase tracking-tighter"
          >
            Notre <span className="text-brand">Carte</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            Des recettes authentiques préparées à la commande avec des ingrédients sélectionnés pour leur fraîcheur.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card float-3d rounded-none overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                {item.badge && (
                  <div className="absolute top-4 right-4 z-20 bg-brand text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {item.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <span className="font-mono font-bold text-lg text-brand">{item.price}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <button className="w-full py-3 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                  Voir Détails
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
