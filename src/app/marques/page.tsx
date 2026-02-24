import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Star, CheckCircle, Thermometer, Zap, Wind, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BRANDS } from "@/data/brands";

export const metadata: Metadata = {
    title: "Meilleures Marques Climatisation 2026 : Comparatif Daikin, Mitsubishi, Atlantic, Toshiba, LG",
    description: "Comparatif des 6 meilleures marques de climatisation et pompe à chaleur air-air en 2026 : Daikin, Mitsubishi Electric, Atlantic, Toshiba, LG, Fujitsu. Prix, avis, garantie et devis gratuits.",
    alternates: {
        canonical: "https://www.cout-climatisation.fr/marques",
    },
    openGraph: {
        title: "Comparatif Marques Climatisation 2026 — Top 6 Fabricants",
        description: "Daikin, Mitsubishi, Atlantic, Toshiba, LG ou Fujitsu ? Comparez les prix, la qualité et le SAV des meilleures marques de clim réversible.",
        url: "https://www.cout-climatisation.fr/marques",
    },
};

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`h-4 w-4 ${star <= rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`}
                />
            ))}
        </div>
    );
}

export default function MarquesPage() {
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Quelle est la meilleure marque de climatisation en 2026 ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Daikin est considéré comme le leader mondial en termes de fiabilité et de performances. Mitsubishi Electric excelle par grand froid. Atlantic offre le meilleur rapport qualité/prix avec une fabrication française. Le choix dépend de vos priorités : budget, performance, SAV local."
                }
            },
            {
                "@type": "Question",
                "name": "Quelle marque de climatisation a le meilleur rapport qualité/prix ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Atlantic (fabrication française) et Toshiba offrent le meilleur rapport qualité/prix en 2026. Atlantic propose des mono-split dès 1 400 € et Toshiba dès 1 300 € pose incluse, avec des performances et une fiabilité proches des marques premium."
                }
            },
            {
                "@type": "Question",
                "name": "Daikin ou Mitsubishi Electric : lequel choisir ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Les deux sont d'excellente qualité japonaise. Daikin dispose d'un meilleur réseau SAV en France et d'un SEER plus élevé. Mitsubishi Electric excelle en performance par grand froid (Hyper Heating jusqu'à -25°C) et en systèmes gainables."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Marques" }]} />
                    <div className="max-w-3xl mt-6">
                        <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <Star className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                            <span>Comparatif mis à jour — Février 2026</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                            Meilleures Marques de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Climatisation</span> en 2026
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Daikin, Mitsubishi Electric, Atlantic, Toshiba, LG ou Fujitsu ? Comparez les <strong className="text-white">prix</strong>, la <strong className="text-white">fiabilité</strong>, le <strong className="text-white">SAV</strong> et la <strong className="text-white">garantie</strong> des 6 fabricants leaders du marché français de la climatisation réversible et pompe à chaleur air-air.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Criteria */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Thermometer className="h-6 w-6 text-cyan-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm">Performance SEER</h3>
                            <p className="text-xs text-slate-500 mt-1">Efficacité énergétique testée</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Shield className="h-6 w-6 text-cyan-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm">Garantie fabricant</h3>
                            <p className="text-xs text-slate-500 mt-1">De 3 à 10 ans compresseur</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Wind className="h-6 w-6 text-cyan-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm">Niveau sonore</h3>
                            <p className="text-xs text-slate-500 mt-1">De 18 à 22 dB(A)</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Zap className="h-6 w-6 text-cyan-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-sm">Technologie</h3>
                            <p className="text-xs text-slate-500 mt-1">Inverter, Wi-Fi, purification</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Les 6 marques de climatisation à comparer</h2>
                    <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">Sélectionnées par nos experts pour leur fiabilité, leur réseau SAV en France et leur rapport qualité/prix.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BRANDS.map((brand) => (
                            <div
                                key={brand.slug}
                                className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow group"
                            >
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-4xl">{brand.countryFlag}</span>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900">{brand.name}</h3>
                                            <p className="text-sm text-slate-500">Depuis {brand.founded}</p>
                                        </div>
                                    </div>

                                    <p className="text-cyan-600 font-medium mb-4 text-sm">{brand.tagline}</p>

                                    {/* Ratings */}
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-600">Qualité</span>
                                            <StarRating rating={brand.qualityRating} />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-600">SAV France</span>
                                            <StarRating rating={brand.savRating} />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-600">Prix</span>
                                            <StarRating rating={brand.priceRating} />
                                        </div>
                                    </div>

                                    {/* Price Range */}
                                    <div className="bg-slate-50 rounded-xl p-4 mb-6">
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-slate-600">Mono-split</span>
                                            <span className="font-bold text-slate-900">{brand.priceRange.monoSplit}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">Multi-split</span>
                                            <span className="font-bold text-slate-900">{brand.priceRange.multiSplit}</span>
                                        </div>
                                        {brand.priceRange.gainable && (
                                            <div className="flex justify-between text-sm mt-2">
                                                <span className="text-slate-600">Gainable</span>
                                                <span className="font-bold text-slate-900">{brand.priceRange.gainable}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Top Pros */}
                                    <ul className="space-y-1 mb-6">
                                        {brand.pros.slice(0, 3).map((pro, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                                                {pro}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={`/marques/${brand.slug}`}>
                                        <Button className="w-full bg-slate-900 hover:bg-cyan-700 text-white rounded-xl group-hover:bg-cyan-600 transition-colors">
                                            Voir {brand.name} en détail
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
                        Tableau comparatif des marques de climatisation
                    </h2>
                    <p className="text-slate-500 text-center mb-8">Prix indicatifs pose incluse — installateur RGE certifié</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse min-w-[700px]">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="border border-slate-200 p-4 text-left">Marque</th>
                                    <th className="border border-slate-200 p-4 text-left">Mono-split</th>
                                    <th className="border border-slate-200 p-4 text-left">Multi-split</th>
                                    <th className="border border-slate-200 p-4 text-left">Garantie</th>
                                    <th className="border border-slate-200 p-4 text-left">Point fort n°1</th>
                                </tr>
                            </thead>
                            <tbody>
                                {BRANDS.map((brand) => (
                                    <tr key={brand.slug} className="hover:bg-cyan-50 transition-colors">
                                        <td className="border border-slate-200 p-4">
                                            <Link href={`/marques/${brand.slug}`} className="font-bold text-cyan-600 hover:underline">
                                                {brand.countryFlag} {brand.name}
                                            </Link>
                                        </td>
                                        <td className="border border-slate-200 p-4 text-sm">{brand.priceRange.monoSplit}</td>
                                        <td className="border border-slate-200 p-4 text-sm">{brand.priceRange.multiSplit}</td>
                                        <td className="border border-slate-200 p-4 text-sm">{brand.warranty}</td>
                                        <td className="border border-slate-200 p-4 text-sm">{brand.pros[0]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-cyan-600 to-sky-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Quelle marque pour votre logement ?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Recevez 3 devis personnalisés d&apos;installateurs certifiés RGE pour comparer les marques sur votre configuration exacte.
                    </p>
                    <Link href="/devis">
                        <Button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100 text-lg px-10 h-14 rounded-full shadow-lg transition-transform hover:scale-105">
                            Comparer les devis gratuits
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <p className="mt-4 text-sm text-cyan-100 opacity-80">Gratuit • Sans engagement • Réponse sous 48h</p>
                </div>
            </section>

            {/* SEO Content + Maillage Interne */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-3xl prose prose-slate prose-a:text-cyan-600">
                    <h2>Comment choisir la meilleure marque de climatisation ?</h2>
                    <p>
                        Le choix de la <strong>marque de climatisation</strong> est un critère important, mais pas le seul à considérer pour votre projet d&apos;installation. Voici les points essentiels à évaluer :
                    </p>
                    <ul>
                        <li><strong>Le réseau SAV local</strong> : un installateur réactif proche de chez vous est essentiel pour l&apos;entretien et les dépannages. <Link href="/annuaire">Consultez notre annuaire</Link> pour trouver un professionnel RGE dans votre département.</li>
                        <li><strong>Le type d&apos;installation</strong> : <Link href="/prix-climatisation/paris/mono-split">mono-split</Link> pour une pièce, <Link href="/prix-climatisation/paris/multi-split">multi-split</Link> pour plusieurs pièces, ou <Link href="/prix-climatisation/paris/gainable">gainable</Link> pour une intégration discrète. Chaque marque a ses forces.</li>
                        <li><strong>Votre budget</strong> : avec les <Link href="/calculateur-aides">aides MaPrimeRénov&apos;</Link> et les CEE, même les marques premium comme <Link href="/marques/daikin">Daikin</Link> deviennent accessibles.</li>
                        <li><strong>L&apos;efficacité énergétique (SEER/SCOP)</strong> : un SEER élevé garantit des <strong>économies d&apos;énergie</strong> substantielles sur la durée. Privilégiez les appareils classés A++ ou A+++.</li>
                        <li><strong>Le niveau sonore</strong> : pour une chambre, visez un appareil en dessous de 20 dB(A). Les modèles <Link href="/marques/toshiba">Toshiba Shorai Edge</Link> (18 dB) et <Link href="/marques/daikin">Daikin Perfera</Link> (19 dB) sont les plus silencieux.</li>
                    </ul>

                    <h3>Tableau récapitulatif par usage</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Votre besoin</th>
                                <th>Marque recommandée</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Fiabilité maximale</td><td><Link href="/marques/daikin">Daikin</Link></td></tr>
                            <tr><td>Usage par grand froid</td><td><Link href="/marques/mitsubishi-electric">Mitsubishi Electric</Link></td></tr>
                            <tr><td>Made in France / SAV</td><td><Link href="/marques/atlantic">Atlantic</Link></td></tr>
                            <tr><td>Meilleur rapport qualité/prix</td><td><Link href="/marques/toshiba">Toshiba</Link></td></tr>
                            <tr><td>Design & connectivité</td><td><Link href="/marques/lg">LG</Link></td></tr>
                            <tr><td>Pro & gainable</td><td><Link href="/marques/fujitsu">Fujitsu General</Link></td></tr>
                        </tbody>
                    </table>

                    <h3>Questions fréquentes</h3>
                    <h4>Quelle est la meilleure marque de climatisation en 2026 ?</h4>
                    <p>
                        <Link href="/marques/daikin">Daikin</Link> est considéré comme le leader mondial en termes de fiabilité et de performances (SEER 8.75). <Link href="/marques/mitsubishi-electric">Mitsubishi Electric</Link> excelle par grand froid grâce à sa technologie Hyper Heating. <Link href="/marques/atlantic">Atlantic</Link> offre le meilleur rapport qualité/prix avec une fabrication française.
                    </p>

                    <h4>Combien coûte une climatisation en 2026 ?</h4>
                    <p>
                        Les prix varient de <strong>1 200 € à 12 000 €</strong> selon le type d&apos;installation et la marque. Un mono-split entrée de gamme démarre à 1 200 € (<Link href="/marques/lg">LG Standard Plus</Link>), tandis qu&apos;un système gainable haut de gamme <Link href="/marques/daikin">Daikin</Link> peut atteindre 12 000 €. <Link href="/devis">Demandez vos devis gratuits</Link> pour un prix adapté à votre logement.
                    </p>

                    <h4>Faut-il choisir un installateur agréé par la marque ?</h4>
                    <p>
                        C&apos;est fortement recommandé. Un installateur RGE agréé par la marque (ex: <Link href="/marques/daikin">Daikin Home Comfort Expert</Link>) vous assure une mise en service conforme, une garantie constructeur complète et l&apos;accès aux <Link href="/calculateur-aides">aides financières MaPrimeRénov&apos;</Link>. <Link href="/annuaire">Trouvez un installateur dans votre département</Link>.
                    </p>

                    <div className="not-prose mt-12 grid sm:grid-cols-2 gap-4">
                        {[
                            { href: "/guides", label: "📗 Tous nos guides climatisation" },
                            { href: "/faq", label: "❓ FAQ complète" },
                            { href: "/simulateur-prix", label: "🧮 Simulateur de prix" },
                            { href: "/annuaire", label: "📍 Annuaire des installateurs RGE" },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-cyan-500 hover:shadow-md transition-all group no-underline"
                            >
                                <span className="font-medium text-slate-700 group-hover:text-cyan-700">{link.label}</span>
                                <ArrowRight className="h-4 w-4 text-cyan-600 ml-auto" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
