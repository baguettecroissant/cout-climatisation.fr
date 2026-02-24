import Link from "next/link";
import { Metadata } from "next";
import { HelpCircle, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
    title: "FAQ Climatisation & Pompe à Chaleur Air-Air : 25 Questions-Réponses (2026)",
    description: "Toutes les réponses à vos questions sur la climatisation réversible et la pompe à chaleur air-air : prix, aides MaPrimeRénov', installation, entretien, marques, consommation. FAQ complète 2026.",
    alternates: {
        canonical: "https://www.cout-climatisation.fr/faq",
    },
    openGraph: {
        title: "FAQ Climatisation : Prix, Aides, Installation | 25 Questions",
        description: "Prix d'un climatiseur, aides financières, installation, entretien : toutes vos questions sur la climatisation réversible en 2026.",
        url: "https://www.cout-climatisation.fr/faq",
    },
};

interface FAQItem {
    question: string;
    answer: string;
    links?: { text: string; href: string }[];
}

interface FAQCategory {
    title: string;
    icon: string;
    items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
    {
        title: "Prix & Budget",
        icon: "💰",
        items: [
            {
                question: "Quel est le prix d'une climatisation réversible en 2026 ?",
                answer: "Le prix varie selon le type d'installation : comptez 1 200 € à 3 500 € pour un mono-split (1 pièce), 3 000 € à 9 000 € pour un multi-split (2 à 5 pièces), et 5 000 € à 12 000 € pour un système gainable. Ces prix incluent la fourniture et la pose par un installateur RGE.",
                links: [
                    { text: "Simuler mon prix", href: "/simulateur-prix" },
                    { text: "Comparer les marques", href: "/marques" },
                ],
            },
            {
                question: "Quelles sont les aides financières pour installer une climatisation ?",
                answer: "L'installation d'une PAC air-air donne droit aux CEE (Certificats d'Économies d'Énergie) de 300 € à 900 €, à la TVA réduite à 5,5% pour les logements de plus de 2 ans, et parfois aux aides locales. MaPrimeRénov' n'est pas directement disponible pour la PAC air-air, sauf dans le cadre d'une rénovation globale (Sérénité).",
                links: [
                    { text: "Calculer mes aides", href: "/calculateur-aides" },
                ],
            },
            {
                question: "Combien coûte la consommation électrique d'une climatisation ?",
                answer: "Un climatiseur mono-split de 2,5 kW utilisé 8h/jour pendant 4 mois d'été consomme environ 400-600 kWh, soit 80 € à 130 € par an. En mode chauffage (hiver), comptez 300 € à 600 €/an. Un appareil avec un bon SEER (> 6,5) consommera jusqu'à 30% de moins qu'un modèle basique.",
            },
            {
                question: "Combien coûte l'entretien annuel d'une climatisation ?",
                answer: "L'entretien obligatoire (pour les systèmes > 2 kg de fluide frigorigène) coûte entre 100 € et 200 € par visite. Un contrat d'entretien annuel complet revient entre 150 € et 300 €, incluant la vérification du fluide, le nettoyage des filtres et le contrôle des performances.",
                links: [{ text: "Guide entretien", href: "/guides" }],
            },
            {
                question: "Peut-on payer une climatisation en plusieurs fois ?",
                answer: "Oui, la plupart des installateurs proposent un paiement en 3 ou 4 fois sans frais, ou un crédit affecté sur 12 à 60 mois. Certains organismes comme Sofinco ou Cofidis proposent des prêts travaux dédiés à des taux préférentiels pour les équipements de rénovation énergétique.",
            },
        ],
    },
    {
        title: "Installation",
        icon: "🔧",
        items: [
            {
                question: "Combien de temps dure l'installation d'une climatisation ?",
                answer: "L'installation d'un mono-split prend une demi-journée (3 à 4 heures). Un multi-split (2-3 unités) nécessite 1 journée complète. Un système gainable peut prendre 2 à 3 jours selon la complexité du réseau de gaines. Les travaux incluent le percement d'un trou de 6 cm dans le mur pour le passage des liaisons frigorifiques.",
            },
            {
                question: "Faut-il un permis ou une autorisation pour installer une climatisation ?",
                answer: "Pas de permis de construire requis, mais des règles existent : en copropriété, l'accord du syndic est obligatoire pour l'unité extérieure. En maison individuelle, le PLU (Plan Local d'Urbanisme) peut imposer des contraintes esthétiques. Le niveau sonore de l'unité extérieure doit respecter la réglementation (< 5 dB au-dessus du bruit ambiant de nuit).",
            },
            {
                question: "Où placer l'unité extérieure de la climatisation ?",
                answer: "L'unité extérieure doit être installée dans un endroit ventilé, à l'abri du soleil direct, sur un support stable (sol, mur, toiture plate). Elle doit respecter les distances réglementaires avec les voisins et ne pas obstruer le flux d'air. Évitez les emplacements proches des chambres (bruit) et des fenêtres des voisins.",
            },
            {
                question: "Faut-il obligatoirement passer par un installateur RGE ?",
                answer: "Techniquement non, mais c'est fortement recommandé. Un installateur RGE (Reconnu Garant de l'Environnement) est obligatoire pour bénéficier des aides financières (CEE, TVA 5,5%). De plus, la manipulation du fluide frigorigène R-32 est réglementée et nécessite une attestation de capacité.",
                links: [{ text: "Trouver un installateur RGE", href: "/annuaire" }],
            },
            {
                question: "Quelle puissance de climatisation choisir pour mon logement ?",
                answer: "La règle de base est 100 W/m² pour une pièce bien isolée (classe B-C), 130 W/m² pour une isolation moyenne (D-E). Exemple : un salon de 30 m² bien isolé nécessite 3 kW (≈ 10 000 BTU). Un bilan thermique professionnel est recommandé pour un dimensionnement précis, surtout pour les multi-split et gainables.",
                links: [{ text: "Simuler mon prix", href: "/simulateur-prix" }],
            },
        ],
    },
    {
        title: "Fonctionnement & Performance",
        icon: "❄️",
        items: [
            {
                question: "Comment fonctionne une climatisation réversible ?",
                answer: "La climatisation réversible (ou PAC air-air) capte les calories de l'air extérieur grâce à un fluide frigorigène. En mode froid, elle extrait la chaleur intérieure et la rejette dehors. En mode chaud (hiver), le cycle s'inverse. Grâce à la technologie Inverter, le compresseur module sa vitesse pour maintenir une température stable sans à-coups.",
                links: [{ text: "Glossaire technique", href: "/glossaire" }],
            },
            {
                question: "Une climatisation réversible chauffe-t-elle vraiment en hiver ?",
                answer: "Oui, et très efficacement. Une PAC air-air de qualité (Daikin, Mitsubishi) produit 3 à 5 kWh de chaleur pour 1 kWh d'électricité consommé (COP 3 à 5). Les modèles Hyper Heating de Mitsubishi Electric fonctionnent jusqu'à -25°C. C'est jusqu'à 3 fois moins cher qu'un radiateur électrique.",
                links: [
                    { text: "Fiche Daikin", href: "/marques/daikin" },
                    { text: "Fiche Mitsubishi", href: "/marques/mitsubishi-electric" },
                ],
            },
            {
                question: "Une climatisation est-elle bruyante ?",
                answer: "Les climatiseurs modernes sont très silencieux. L'unité intérieure fonctionne entre 18 et 25 dB(A) en mode silencieux — soit le niveau d'un murmure. L'unité extérieure émet 45 à 55 dB(A). Les modèles les plus silencieux : Toshiba Shorai Edge (18 dB) et Daikin Perfera (19 dB).",
                links: [
                    { text: "Fiche Toshiba", href: "/marques/toshiba" },
                ],
            },
            {
                question: "Qu'est-ce que le SEER et le SCOP ?",
                answer: "Le SEER (Seasonal Energy Efficiency Ratio) mesure l'efficacité en mode froid sur une saison. Le SCOP (Seasonal COP) mesure l'efficacité en mode chauffage. Plus ces valeurs sont élevées, moins l'appareil consomme. Classe A+++ : SEER ≥ 8,5 / SCOP ≥ 5,1. Le Daikin Perfera atteint un SEER record de 8,75.",
                links: [{ text: "Voir le glossaire", href: "/glossaire" }],
            },
            {
                question: "Quelle est la durée de vie d'une climatisation ?",
                answer: "Un climatiseur bien entretenu (entretien annuel recommandé) dure 15 à 20 ans. Les compresseurs sont garantis 5 à 10 ans selon les marques (10 ans chez LG). Le fluide frigorigène et les filtres doivent être vérifiés chaque année. Les modèles Inverter durent plus longtemps car le compresseur s'use moins.",
                links: [{ text: "Garantie par marque", href: "/marques" }],
            },
        ],
    },
    {
        title: "Marques & Comparatif",
        icon: "🏭",
        items: [
            {
                question: "Quelle est la meilleure marque de climatisation en 2026 ?",
                answer: "Daikin est le n°1 mondial en fiabilité et performance (SEER 8.75). Mitsubishi Electric excelle en chauffage par grand froid (Hyper Heating -25°C). Atlantic offre le meilleur rapport qualité/prix avec une fabrication française. Toshiba propose le meilleur prix d'entrée. LG se distingue par son design (Artcool) et sa garantie compresseur 10 ans.",
                links: [
                    { text: "Comparatif complet", href: "/marques" },
                ],
            },
            {
                question: "Daikin ou Mitsubishi Electric : lequel choisir ?",
                answer: "Les deux sont d'excellente facture japonaise. Daikin offre un SEER plus élevé (8.75), un réseau SAV denser en France et une purification d'air brevetée (Flash Streamer). Mitsubishi Electric excelle en performance par grand froid (Hyper Heating) et en systèmes gainables. Le choix dépend de votre projet.",
                links: [
                    { text: "Fiche Daikin", href: "/marques/daikin" },
                    { text: "Fiche Mitsubishi", href: "/marques/mitsubishi-electric" },
                ],
            },
            {
                question: "Atlantic ou Daikin : quelle marque choisir ?",
                answer: "Atlantic est français (usines dans le Nord), 15 à 20% moins cher que Daikin, avec un SAV de proximité et la certification NF PAC. Daikin offre une technologie plus avancée (SEER supérieur, Flash Streamer) et une gamme plus large. Pour un budget serré, Atlantic est un excellent choix patriotique.",
                links: [
                    { text: "Fiche Atlantic", href: "/marques/atlantic" },
                ],
            },
            {
                question: "Mono-split, multi-split ou gainable : comment choisir ?",
                answer: "Mono-split (1 200-3 500 €) : idéal pour climatiser 1 pièce. Multi-split (3 000-9 000 €) : 2 à 5 pièces avec une seule unité extérieure, chaque pièce indépendante. Gainable (5 000-12 000 €) : air distribué par des gaines dans un faux-plafond, la solution la plus discrète et esthétique.",
                links: [
                    { text: "Prix mono-split", href: "/prix-climatisation/paris/mono-split" },
                    { text: "Prix multi-split", href: "/prix-climatisation/paris/multi-split" },
                    { text: "Prix gainable", href: "/prix-climatisation/paris/gainable" },
                ],
            },
        ],
    },
    {
        title: "Entretien & Réglementation",
        icon: "📋",
        items: [
            {
                question: "L'entretien d'une climatisation est-il obligatoire ?",
                answer: "Oui, depuis le décret n°2020-912, les systèmes contenant plus de 2 kg de fluide frigorigène (la plupart des multi-split et gainables) doivent être contrôlés par un professionnel certifié tous les 2 ans. Pour les mono-split, c'est recommandé mais pas obligatoire. Un nettoyage des filtres tous les 2-3 mois est conseillé pour tous.",
            },
            {
                question: "La climatisation assèche-t-elle l'air ?",
                answer: "Le mode froid déshumidifie naturellement l'air (effet secondaire du refroidissement). Cela peut assécher l'atmosphère dans les régions déjà peu humides. Solution : utiliser le mode « Dry » (déshumidification douce) plutôt que le mode froid, ou installer un humidificateur si nécessaire.",
            },
            {
                question: "Que faire si ma climatisation tombe en panne ?",
                answer: "Vérifiez d'abord les filtres (encrassement), la télécommande (piles), et le disjoncteur. Si le problème persiste, contactez votre installateur ou le SAV de la marque. Avec un contrat d'entretien, le dépannage est souvent inclus. Sans contrat, comptez 80 € à 180 € pour une intervention.",
                links: [{ text: "Comparer les SAV par marque", href: "/marques" }],
            },
            {
                question: "Le fluide frigorigène R-32 est-il dangereux ?",
                answer: "Le R-32 est classé A2L (légèrement inflammable) mais les quantités utilisées dans les climatiseurs résidentiels sont bien en dessous des seuils de dangerosité. Il est nettement plus écologique que le R-410A (GWP 3 fois inférieur). Sa manipulation reste réservée aux professionnels certifiés (attestation de capacité).",
                links: [{ text: "En savoir plus", href: "/glossaire" }],
            },
            {
                question: "Peut-on déplacer ou démonter une climatisation soi-même ?",
                answer: "Non, le démontage d'une climatisation nécessite un professionnel certifié pour la récupération du fluide frigorigène (obligation légale). Le déplacement d'un système complet coûte 500 € à 1 500 € selon la complexité. Il est interdit de relâcher le fluide frigorigène dans l'atmosphère (amende jusqu'à 75 000 €).",
            },
        ],
    },
];

// Flatten all FAQs for Schema
const allFaqs = faqCategories.flatMap((cat) => cat.items);

export default function FAQPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": allFaqs.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
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
                    <Breadcrumbs items={[{ label: "FAQ" }]} />
                    <div className="max-w-3xl mx-auto text-center mt-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-6">
                            <HelpCircle className="h-8 w-8 text-cyan-400" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                            FAQ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Climatisation</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            <strong className="text-white">{allFaqs.length} questions-réponses</strong> pour tout savoir sur la climatisation réversible, les pompes à chaleur air-air, les prix, les aides et l&apos;installation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Nav */}
            <section className="py-4 bg-white border-b border-slate-200 sticky top-16 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2">
                        {faqCategories.map((cat) => (
                            <a
                                key={cat.title}
                                href={`#${cat.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                                className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-cyan-100 rounded-full text-sm font-medium text-slate-700 hover:text-cyan-700 transition-colors"
                            >
                                <span>{cat.icon}</span>
                                {cat.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    {faqCategories.map((category) => (
                        <div
                            key={category.title}
                            id={category.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}
                            className="mb-12 scroll-mt-32"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="text-3xl">{category.icon}</span>
                                {category.title}
                            </h2>
                            <div className="space-y-4">
                                {category.items.map((item, index) => (
                                    <details
                                        key={index}
                                        className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                                    >
                                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                                            <h3 className="font-medium text-slate-900 pr-4">{item.question}</h3>
                                            <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
                                        </summary>
                                        <div className="px-5 pb-5 pt-0">
                                            <p className="text-slate-600 mb-3">{item.answer}</p>
                                            {item.links && (
                                                <div className="flex flex-wrap gap-3 pt-2">
                                                    {item.links.map((link, i) => (
                                                        <Link
                                                            key={i}
                                                            href={link.href}
                                                            className="inline-flex items-center gap-1 text-sm text-cyan-600 hover:text-cyan-700 font-medium"
                                                        >
                                                            {link.text}
                                                            <ArrowRight className="h-3 w-3" />
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-cyan-600 to-sky-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Vous n&apos;avez pas trouvé votre réponse ?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Demandez un devis gratuit et un installateur RGE qualifié répondra à toutes vos questions sur votre projet de climatisation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/devis">
                            <Button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100 text-lg px-10 h-14 rounded-full shadow-lg transition-transform hover:scale-105">
                                Demander un devis gratuit
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/annuaire">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 h-14 rounded-full">
                                Trouver un installateur RGE
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Maillage Interne */}
            <section className="py-12 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Ressources complémentaires</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { href: "/simulateur-prix", title: "🧮 Simulateur de Prix", desc: "Estimez votre budget" },
                            { href: "/calculateur-aides", title: "💰 Calculateur d'Aides", desc: "CEE, TVA 5,5%" },
                            { href: "/glossaire", title: "📖 Glossaire Technique", desc: "35 définitions clés" },
                            { href: "/marques", title: "🏭 Comparatif Marques", desc: "Daikin, Mitsubishi, Atlantic..." },
                            { href: "/guides", title: "📗 Guides Expert", desc: "Conseils & prix détaillés" },
                            { href: "/annuaire", title: "📍 Annuaire RGE", desc: "Installateurs certifiés" },
                        ].map((tool) => (
                            <Link
                                key={tool.href}
                                href={tool.href}
                                className="flex flex-col p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-500 hover:shadow-md transition-all text-center"
                            >
                                <span className="font-bold text-slate-900">{tool.title}</span>
                                <span className="text-sm text-slate-500">{tool.desc}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
