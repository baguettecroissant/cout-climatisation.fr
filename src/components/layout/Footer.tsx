import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-50 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Brand & Description */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Cout-Climatisation<span className="text-cyan-400">.fr</span>
                    </h3>
                    <p className="text-slate-300 text-base leading-relaxed max-w-sm">
                        Le guide de référence pour estimer le prix de votre climatisation et pompe à chaleur air-air en France. Comparez, économisez et gagnez en confort thermique.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Informations</h4>
                    <ul className="space-y-3">
                        <li><Link href="/" className="text-slate-300 hover:text-white transition-colors text-base">Accueil</Link></li>
                        <li><Link href="/guides" className="text-slate-300 hover:text-white transition-colors text-base">Guides & Conseils</Link></li>
                        <li><Link href="/outils" className="text-slate-300 hover:text-white transition-colors text-base">Outils Gratuits</Link></li>
                        <li><Link href="/marques" className="text-slate-300 hover:text-white transition-colors text-base">Marques PAC</Link></li>
                        <li><Link href="/annuaire" className="text-slate-300 hover:text-white transition-colors text-base">Annuaire Installateurs</Link></li>
                        <li><Link href="/faq" className="text-slate-300 hover:text-white transition-colors text-base">Questions Fréquentes</Link></li>
                    </ul>
                </div>

                {/* Top Villes SEO */}
                <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Top Villes</h4>
                    <ul className="space-y-3">
                        <li><Link href="/prix-climatisation/paris-75001" className="text-slate-300 hover:text-white transition-colors text-base">Climatisation Paris</Link></li>
                        <li><Link href="/prix-climatisation/marseille-13001" className="text-slate-300 hover:text-white transition-colors text-base">Climatisation Marseille</Link></li>
                        <li><Link href="/prix-climatisation/lyon-69001" className="text-slate-300 hover:text-white transition-colors text-base">Climatisation Lyon</Link></li>
                        <li><Link href="/prix-climatisation/toulouse-31000" className="text-slate-300 hover:text-white transition-colors text-base">Climatisation Toulouse</Link></li>
                        <li><Link href="/prix-climatisation/nice-06000" className="text-slate-300 hover:text-white transition-colors text-base">Climatisation Nice</Link></li>
                        <li><Link href="/prix-climatisation/nantes-44000" className="text-slate-300 hover:text-white transition-colors text-base">Climatisation Nantes</Link></li>
                        <li><Link href="/annuaire" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm mt-2 block">Voir toutes les villes →</Link></li>
                    </ul>
                </div>

                {/* Contact / CTA */}
                <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Un projet ?</h4>
                    <p className="text-slate-300 mb-6 text-base">
                        Obtenez 3 devis gratuits d'installateurs RGE près de chez vous.
                    </p>
                    <Link
                        href="/devis"
                        className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg text-base transition-colors w-full text-center"
                    >
                        Comparer les prix
                    </Link>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
                <p>© 2026 Cout-Climatisation.fr - Tous droits réservés.</p>
            </div>
        </footer>
    );
}
