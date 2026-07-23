export function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="text-white font-black text-xl tracking-tighter uppercase mb-4">GU-HA <span className="text-brand">GRILL</span></h3>
            <p className="text-white/50 text-xs uppercase tracking-widest leading-relaxed max-w-xs">
              Le meilleur kebab de Golbey. Une qualité irréprochable.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-[10px] uppercase tracking-widest text-white/50">
              <li><a href="#" className="hover:text-brand transition-colors">Accueil</a></li>
              <li><a href="#menu" className="hover:text-brand transition-colors">La Carte</a></li>
              <li><a href="#about" className="hover:text-brand transition-colors">À Propos</a></li>
              <li><a href="#contact" className="hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Légal</h4>
            <ul className="space-y-2 text-[10px] uppercase tracking-widest text-white/50">
              <li><a href="#" className="hover:text-brand transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">CGV</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase opacity-40">
          <div>
            &copy; {new Date().getFullYear()} GU-HA GRILL - TOUS DROITS RÉSERVÉS
          </div>
          <div className="flex gap-8">
            <span>Hygiène & Sécurité Certifiée</span>
            <span>Paiement Sécurisé</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
