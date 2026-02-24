import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
    title: "Glossaire Climatisation & Pompe à Chaleur : 35 Définitions Techniques (2026)",
    description: "Comprendre le vocabulaire de la climatisation et de la pompe à chaleur air-air : SEER, SCOP, R-32, Inverter, gainable, mono-split, multi-split. Définitions claires et accessibles.",
    alternates: {
        canonical: "https://www.cout-climatisation.fr/glossaire",
    },
    openGraph: {
        title: "Glossaire Climatisation & PAC Air-Air : Termes Techniques",
        description: "Toutes les définitions clés pour comprendre la climatisation : COP, SEER, R-32, Inverter, gainable, mono-split...",
        url: "https://www.cout-climatisation.fr/glossaire",
    },
};

interface GlossaryTerm {
    term: string;
    definition: string;
    relatedLinks?: { text: string; href: string }[];
}

const glossaryTerms: GlossaryTerm[] = [
    {
        term: "ANAH",
        definition: "Agence Nationale de l'Habitat. Organisme public qui gère MaPrimeRénov' et finance les travaux de rénovation énergétique, y compris l'installation de pompes à chaleur air-air.",
        relatedLinks: [{ text: "Calculer mes aides", href: "/calculateur-aides" }],
    },
    {
        term: "Bi-split",
        definition: "Système de climatisation composé d'une unité extérieure reliée à deux unités intérieures. Permet de climatiser deux pièces indépendamment à partir d'un seul groupe extérieur.",
        relatedLinks: [{ text: "Simuler le prix", href: "/simulateur-prix" }],
    },
    {
        term: "BTU (British Thermal Unit)",
        definition: "Unité de mesure anglo-saxonne de la puissance de climatisation. 1 BTU/h ≈ 0,293 W. Un climatiseur de 9 000 BTU (≈ 2,6 kW) convient pour une pièce de 25 m². Plus le BTU est élevé, plus l'appareil est puissant.",
    },
    {
        term: "CEE (Certificats d'Économies d'Énergie)",
        definition: "Dispositif obligeant les fournisseurs d'énergie à financer des travaux d'économies d'énergie chez les particuliers. L'installation d'une PAC air-air performante peut donner droit à une prime CEE de 300 € à 900 €.",
        relatedLinks: [{ text: "Calculer mes aides", href: "/calculateur-aides" }],
    },
    {
        term: "Charge frigorifique",
        definition: "Quantité de réfrigérant (R-32, R-410A) présente dans le circuit de la climatisation. Une charge correcte est essentielle au bon fonctionnement. Toute manipulation nécessite un technicien certifié (attestation de capacité).",
    },
    {
        term: "Climatisation réversible",
        definition: "Appareil capable de produire du froid en été et du chaud en hiver grâce à l'inversion du cycle thermodynamique. Synonyme de pompe à chaleur air-air. Permet des économies de 30 à 60% par rapport au chauffage électrique.",
        relatedLinks: [
            { text: "Comparer les marques", href: "/marques" },
            { text: "Devis gratuit", href: "/devis" },
        ],
    },
    {
        term: "Compresseur",
        definition: "Cœur de la pompe à chaleur situé dans l'unité extérieure. Il comprime le fluide frigorigène pour élever sa température. La technologie Inverter permet de moduler sa vitesse pour un confort optimal et des économies d'énergie.",
        relatedLinks: [{ text: "Marques et compresseurs", href: "/marques" }],
    },
    {
        term: "COP (Coefficient de Performance)",
        definition: "Ratio entre l'énergie thermique produite et l'énergie électrique consommée en mode chauffage. Un COP de 4 signifie que pour 1 kWh d'électricité consommé, la PAC restitue 4 kWh de chaleur. Plus le COP est élevé, plus l'appareil est performant.",
    },
    {
        term: "Daikin",
        definition: "N°1 mondial de la climatisation, fondé au Japon en 1924. Fabrique ses propres compresseurs et réfrigérants (R-32). Reconnu pour sa fiabilité, son efficacité énergétique (SEER jusqu'à 8.75) et son réseau SAV dense en France.",
        relatedLinks: [{ text: "Fiche Daikin", href: "/marques/daikin" }],
    },
    {
        term: "Déshumidification (mode Dry)",
        definition: "Fonction de la climatisation qui extrait l'humidité de l'air ambiant sans forcément refroidir la pièce. Utile dans les régions humides ou en mi-saison pour améliorer le confort sans surconsommer.",
    },
    {
        term: "EER (Energy Efficiency Ratio)",
        definition: "Ancien indicateur d'efficacité en mode froid, remplacé par le SEER. L'EER mesure la performance à pleine charge uniquement, tandis que le SEER est plus représentatif de l'usage réel.",
    },
    {
        term: "Fluide frigorigène",
        definition: "Substance qui circule dans le circuit de la PAC et transporte la chaleur. Le R-32 (GWP 675) remplace progressivement le R-410A (GWP 2088), plus polluant. La manipulation du fluide est réglementée et réservée aux professionnels certifiés.",
    },
    {
        term: "Gainable",
        definition: "Type de climatisation dont l'unité intérieure est cachée dans un faux-plafond. L'air est distribué via des gaines et des bouches de soufflage. Solution la plus discrète et esthétique, idéale pour les maisons neuves ou en rénovation. Prix : 5 000 € à 12 000 € pose incluse.",
        relatedLinks: [
            { text: "Prix gainable", href: "/prix-climatisation/paris/gainable" },
            { text: "Simuler le prix", href: "/simulateur-prix" },
        ],
    },
    {
        term: "GWP (Global Warming Potential)",
        definition: "Pouvoir de réchauffement global d'un fluide frigorigène, exprimé par rapport au CO₂ (GWP = 1). Le R-32 a un GWP de 675, soit 3 fois moins que le R-410A (2 088). La réglementation européenne F-Gas impose une réduction progressive des fluides à fort GWP.",
    },
    {
        term: "Inverter",
        definition: "Technologie de régulation du compresseur qui ajuste sa vitesse en continu au lieu de fonctionner en tout-ou-rien. Avantages : économies d'énergie de 20 à 30%, moindre usure, confort thermique stable et fonctionnement plus silencieux. Standard sur tous les climatiseurs modernes.",
    },
    {
        term: "MaPrimeRénov'",
        definition: "Aide financière de l'État gérée par l'ANAH pour les travaux de rénovation énergétique. Les pompes à chaleur air-air ne sont pas directement éligibles à MaPrimeRénov', mais un bonus peut s'appliquer dans le cadre d'une rénovation globale (Sérénité). Les CEE restent accessibles.",
        relatedLinks: [
            { text: "Calculer mon éligibilité", href: "/calculateur-aides" },
        ],
    },
    {
        term: "Mitsubishi Electric",
        definition: "Géant japonais de la climatisation fondé en 1921. Reconnu pour sa technologie Hyper Heating (fonctionnement jusqu'à -25°C), ses systèmes gainables haut de gamme et son capteur 3D i-See Sensor.",
        relatedLinks: [{ text: "Fiche Mitsubishi", href: "/marques/mitsubishi-electric" }],
    },
    {
        term: "Mono-split",
        definition: "Système de climatisation le plus simple : une unité extérieure reliée à une seule unité intérieure. Idéal pour climatiser une pièce (salon, chambre). Prix : 1 200 € à 3 500 € pose incluse selon la marque et la puissance.",
        relatedLinks: [
            { text: "Prix mono-split", href: "/prix-climatisation/paris/mono-split" },
            { text: "Devis gratuit", href: "/devis" },
        ],
    },
    {
        term: "Multi-split",
        definition: "Système composé d'une unité extérieure reliée à plusieurs unités intérieures (2 à 5). Permet de climatiser plusieurs pièces avec un seul groupe extérieur. Chaque unité est indépendante en température. Prix : 3 000 € à 9 000 € pose incluse.",
        relatedLinks: [
            { text: "Prix multi-split", href: "/prix-climatisation/paris/multi-split" },
            { text: "Simuler le prix", href: "/simulateur-prix" },
        ],
    },
    {
        term: "PAC Air-Air",
        definition: "Pompe à Chaleur Air-Air, aussi appelée climatisation réversible. Elle capte les calories présentes dans l'air extérieur pour chauffer l'intérieur (et inversement en été). C'est le système le plus répandu en France pour le confort thermique résidentiel.",
        relatedLinks: [{ text: "Comparer les prix", href: "/devis" }],
    },
    {
        term: "Puissance frigorifique",
        definition: "Capacité de refroidissement d'un climatiseur, exprimée en kW ou BTU/h. Règle de base : 100 W/m² pour une pièce bien isolée, 130 W/m² pour une isolation moyenne. Un bilan thermique professionnel est recommandé pour un dimensionnement précis.",
    },
    {
        term: "R-32",
        definition: "Fluide frigorigène de nouvelle génération utilisé par les climatiseurs modernes. Son GWP (675) est 3 fois inférieur au R-410A. Il offre de meilleures performances thermiques avec une charge réduite de 20%. Toutes les grandes marques (Daikin, Mitsubishi, Toshiba) l'ont adopté.",
    },
    {
        term: "R-410A",
        definition: "Fluide frigorigène « ancienne génération » progressivement remplacé par le R-32. Son GWP élevé (2 088) le rend moins respectueux de l'environnement. Encore présent sur certains appareils installés avant 2020.",
    },
    {
        term: "RGE (Reconnu Garant de l'Environnement)",
        definition: "Label qualité des artisans spécialisés en travaux d'efficacité énergétique. Obligatoire pour que le client puisse bénéficier des aides financières (CEE, MaPrimeRénov'). Vérifiez toujours la certification RGE de votre installateur.",
        relatedLinks: [{ text: "Trouver un installateur RGE", href: "/annuaire" }],
    },
    {
        term: "SAV (Service Après-Vente)",
        definition: "Service d'assistance et de dépannage de la climatisation. Daikin dispose du réseau SAV le plus dense en France (Daikin Home Comfort Expert). Atlantic bénéficie d'un SAV français réactif. Temps d'intervention : 24h à 72h selon les marques.",
        relatedLinks: [{ text: "Comparer les SAV", href: "/marques" }],
    },
    {
        term: "SCOP (Seasonal COP)",
        definition: "COP saisonnier : mesure l'efficacité énergétique en mode chauffage sur une saison complète, plus représentatif que le COP instantané. Un SCOP de 4,5 signifie que la PAC produit 4,5 kWh de chaleur pour 1 kWh d'électricité en moyenne annuelle. Classe A+++ à partir de SCOP ≥ 5,1.",
    },
    {
        term: "SEER (Seasonal Energy Efficiency Ratio)",
        definition: "Indicateur d'efficacité en mode froid sur une saison complète. Plus le SEER est élevé, moins le climatiseur consomme. Classe A+++ à partir de SEER ≥ 8,5. Le Daikin Perfera atteint un SEER de 8,75, parmi les meilleurs du marché.",
        relatedLinks: [{ text: "Comparer les performances", href: "/marques" }],
    },
    {
        term: "Split",
        definition: "Terme anglais signifiant « séparé ». Désigne un système de climatisation composé de deux éléments distincts : une unité extérieure (compresseur + condenseur) et une ou plusieurs unités intérieures (évaporateur + ventilateur).",
    },
    {
        term: "Toshiba",
        definition: "Fabricant japonais pionnier du split résidentiel (1969). Reconnu pour son excellent rapport qualité/prix, le Shorai Edge (silence 18 dB) et la filtration DAISEIKAI brevetée.",
        relatedLinks: [{ text: "Fiche Toshiba", href: "/marques/toshiba" }],
    },
    {
        term: "TVA réduite (5,5%)",
        definition: "Les travaux d'amélioration de la performance énergétique bénéficient d'une TVA à 5,5% (au lieu de 20%) pour les logements de plus de 2 ans. S'applique à la climatisation réversible (PAC air-air) installée par un professionnel RGE.",
        relatedLinks: [{ text: "Calculer mes économies", href: "/calculateur-aides" }],
    },
    {
        term: "Unité extérieure (UE)",
        definition: "Boîtier installé à l'extérieur du logement contenant le compresseur, le condenseur et le ventilateur. Elle capte (ou rejette) les calories de l'air. Son positionnement doit respecter les règles de voisinage (niveau sonore < 5 dB au-dessus du bruit ambiant).",
    },
    {
        term: "Unité intérieure (UI)",
        definition: "Appareil installé à l'intérieur de la pièce à climatiser. Existe en version murale (la plus courante), console (au sol), cassette (plafond) ou gainable (faux-plafond). Diffuse l'air frais ou chaud dans la pièce.",
    },
    {
        term: "VRV / VRF",
        definition: "Volume Réfrigérant Variable : système de climatisation centralisé pour les grands bâtiments (tertiaire, hôtels). Permet de connecter jusqu'à 64 unités intérieures à un seul système extérieur. Équivalent du multi-split mais à une échelle industrielle. Principaux fabricants : Daikin (inventeur du VRV), Mitsubishi Electric.",
    },
    {
        term: "Wi-Fi / Connectivité",
        definition: "Fonctionnalité permettant de piloter la climatisation à distance via une application mobile (Daikin Onecta, Mitsubishi MELCloud, LG ThinQ, Atlantic Cozytouch). Permet de programmer les plages horaires, ajuster la température et suivre la consommation en temps réel.",
    },
    {
        term: "Zone morte",
        definition: "Espace non couvert par la diffusion d'air du climatiseur. Un mauvais positionnement de l'unité intérieure peut créer des zones mortes avec des écarts de température. L'option « flux d'air 3D » (Daikin, Mitsubishi) permet de réduire ce phénomène.",
    },
];

// Sort alphabetically
const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term, "fr"));

// Group by first letter
const groupedTerms = sortedTerms.reduce((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
}, {} as Record<string, GlossaryTerm[]>);

const letters = Object.keys(groupedTerms).sort();

// DefinedTermSet Schema.org
const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Glossaire Climatisation & Pompe à Chaleur Air-Air",
    "description": "Définitions des termes techniques liés à la climatisation réversible, aux pompes à chaleur air-air, et à l'efficacité énergétique.",
    "url": "https://www.cout-climatisation.fr/glossaire",
    "hasDefinedTerm": sortedTerms.map(t => ({
        "@type": "DefinedTerm",
        "name": t.term,
        "description": t.definition,
    })),
};

export default function GlossairePage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Glossaire" }]} />
                    <div className="max-w-3xl mx-auto text-center mt-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-6">
                            <BookOpen className="h-8 w-8 text-cyan-400" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                            Glossaire <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Climatisation</span> &amp; PAC
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            <strong className="text-white">{glossaryTerms.length} définitions</strong> pour maîtriser le vocabulaire de la climatisation réversible, de la pompe à chaleur air-air et de l&apos;efficacité énergétique.
                        </p>
                    </div>
                </div>
            </section>

            {/* Alphabet Nav */}
            <section className="py-4 bg-white border-b border-slate-200 sticky top-16 z-40">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-1">
                        {letters.map((letter) => (
                            <a
                                key={letter}
                                href={`#lettre-${letter}`}
                                className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-cyan-500 hover:text-white rounded font-bold text-sm text-slate-700 transition-colors"
                            >
                                {letter}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Terms */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    {letters.map((letter) => (
                        <div key={letter} id={`lettre-${letter}`} className="mb-12 scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-12 flex items-center justify-center bg-cyan-500 text-white rounded-xl text-2xl font-bold">
                                    {letter}
                                </span>
                                <div className="h-px flex-1 bg-slate-200" />
                            </div>

                            <div className="space-y-4">
                                {groupedTerms[letter].map((item) => (
                                    <div
                                        key={item.term}
                                        className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                                    >
                                        <h3 className="font-bold text-lg text-slate-900 mb-2">{item.term}</h3>
                                        <p className="text-slate-600 mb-3">{item.definition}</p>
                                        {item.relatedLinks && (
                                            <div className="flex flex-wrap gap-3">
                                                {item.relatedLinks.map((link, i) => (
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
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-cyan-600 to-sky-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Prêt à passer à l&apos;action ?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Maintenant que vous maîtrisez le vocabulaire, obtenez des devis personnalisés d&apos;installateurs RGE.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/devis">
                            <Button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100 text-lg px-8 h-14 rounded-full shadow-lg transition-transform hover:scale-105">
                                Demander des devis gratuits
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/simulateur-prix">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 h-14 rounded-full">
                                Simuler mon prix
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
                            { href: "/faq", title: "❓ FAQ Complète", desc: "Questions fréquentes" },
                            { href: "/guides", title: "📗 Guides Expert", desc: "Conseils & prix détaillés" },
                            { href: "/marques", title: "🏭 Comparatif Marques", desc: "Daikin, Mitsubishi, Atlantic..." },
                            { href: "/annuaire", title: "📍 Annuaire RGE", desc: "Installateurs certifiés" },
                            { href: "/calculateur-aides", title: "💰 Calculateur Aides", desc: "MaPrimeRénov', CEE" },
                            { href: "/outils", title: "🧮 Outils Gratuits", desc: "Simulateurs & calculateurs" },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex flex-col p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-500 hover:shadow-md transition-all text-center"
                            >
                                <span className="font-bold text-slate-900">{item.title}</span>
                                <span className="text-sm text-slate-500">{item.desc}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
