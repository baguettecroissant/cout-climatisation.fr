import Link from "next/link";
import { Calculator, Euro, Clock, ArrowRight, CheckCircle, Sparkles, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Outils Gratuits Climatisation 2026 | Simulateur Prix, Calculateur Aides",
    description: "Outils gratuits pour préparer votre projet de climatisation réversible : simulateur de prix mono-split/multi-split/gainable, calculateur d'aides CEE & TVA 5,5%, estimation délais. Sans engagement.",
    alternates: {
        canonical: "https://www.cout-climatisation.fr/outils",
    },
    openGraph: {
        title: "Outils Gratuits Climatisation | Simulateur Prix & Calculateur Aides",
        description: "Simulateur de prix, calculateur d'aides, estimation délais. Outils 100% gratuits pour préparer votre projet de climatisation.",
        url: "https://www.cout-climatisation.fr/outils",
    },
};

const tools = [
    {
        slug: "simulateur-prix",
        title: "Simulateur de Prix",
        description: "Estimez le coût de votre climatisation réversible en 30 secondes selon le type d'installation et la surface à climatiser.",
        icon: Euro,
        color: "cyan" as const,
        features: ["Mono-split, multi-split, gainable", "Prix pose comprise par marque", "Surface et puissance adaptée"],
        cta: "Estimer mon prix",
    },
    {
        slug: "calculateur-aides",
        title: "Calculateur d'Aides",
        description: "Simulez vos aides financières pour l'installation d'une PAC air-air : CEE, TVA réduite à 5,5%, éco-PTZ et aides locales.",
        icon: Calculator,
        color: "green" as const,
        features: ["Prime CEE 300–900 €", "TVA 5,5% (logement > 2 ans)", "Reste à charge personnalisé"],
        cta: "Calculer mes aides",
    },
    {
        slug: "simulation-delais",
        title: "Estimation des Délais",
        description: "Découvrez combien de temps prend un projet de climatisation réversible, de la demande de devis à la mise en service.",
        icon: Clock,
        color: "blue" as const,
        features: ["Timeline complète du projet", "Étapes devis → pose → mise en service", "Conseils meilleure période"],
        cta: "Voir les délais",
    },
];

const colorClasses = {
    cyan: {
        bg: "bg-cyan-50",
        border: "border-cyan-200",
        iconBg: "bg-cyan-100",
        iconColor: "text-cyan-600",
        button: "bg-cyan-600 hover:bg-cyan-700",
    },
    green: {
        bg: "bg-green-50",
        border: "border-green-200",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        button: "bg-green-600 hover:bg-green-700",
    },
    blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
    },
};

export default function OutilsPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Outils Gratuits" }]} />
                    <div className="max-w-3xl mx-auto text-center mt-6">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-sky-500/20 border border-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <Sparkles className="h-4 w-4" />
                            100% Gratuit • Sans Engagement
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Outils <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Gratuits</span> pour votre Projet Climatisation
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Simulateur de prix, calculateur d&apos;aides et estimation des délais : préparez votre projet de <strong className="text-white">climatisation réversible</strong> en toute sérénité.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="py-16 -mt-8">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {tools.map((tool) => {
                            const colors = colorClasses[tool.color];
                            const Icon = tool.icon;

                            return (
                                <div
                                    key={tool.slug}
                                    className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 flex flex-col hover:shadow-xl transition-shadow`}
                                >
                                    <div className={`${colors.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                                        <Icon className={`h-7 w-7 ${colors.iconColor}`} />
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-2">{tool.title}</h2>
                                    <p className="text-slate-600 mb-4 flex-grow">{tool.description}</p>

                                    <ul className="space-y-2 mb-6">
                                        {tool.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                                <CheckCircle className={`h-4 w-4 ${colors.iconColor}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={`/${tool.slug}`}>
                                        <Button className={`w-full ${colors.button} text-white h-12 rounded-xl`}>
                                            {tool.cta}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-cyan-600 to-sky-500 text-white">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Prêt à passer à l&apos;action ?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Après avoir utilisé nos outils, obtenez des devis personnalisés d&apos;installateurs RGE certifiés dans votre département.
                    </p>
                    <Link href="/devis">
                        <Button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100 text-lg px-10 h-14 rounded-full shadow-lg transition-transform hover:scale-105">
                            Demander mes 3 devis gratuits
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* SEO Content + Internal Links */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-slate max-w-none">
                        <h2>Pourquoi utiliser nos outils gratuits ?</h2>
                        <p>
                            Préparer un projet de <strong>climatisation réversible</strong> demande de
                            <strong> comparer les prix</strong> entre mono-split, multi-split et gainable, de
                            <strong> connaître les aides financières</strong> disponibles (CEE, TVA 5,5%, éco-PTZ) et d&apos;
                            <strong>anticiper les délais</strong> d&apos;installation. Nos outils gratuits vous donnent
                            toutes ces informations en quelques clics avant de contacter un professionnel.
                        </p>

                        <h3>Le simulateur de prix : estimez votre budget climatisation</h3>
                        <p>
                            Notre <Link href="/simulateur-prix" className="text-cyan-600">simulateur de prix</Link> vous donne une fourchette réaliste en fonction de votre type d&apos;installation (mono-split pour une pièce, multi-split pour 2-5 pièces, gainable pour une maison entière) et de la surface à climatiser. Les prix incluent la fourniture et la pose par un installateur RGE. Pour aller plus loin, consultez notre <Link href="/guides/prix-climatisation-2026" className="text-cyan-600">guide complet des prix 2026</Link> avec les tarifs détaillés par <Link href="/marques" className="text-cyan-600">marque</Link>.
                        </p>

                        <h3>Le calculateur d&apos;aides : réduisez votre reste à charge</h3>
                        <p>
                            Grâce au <Link href="/calculateur-aides" className="text-cyan-600">calculateur d&apos;aides</Link>, découvrez si vous êtes éligible aux <strong>CEE</strong> (prime de 300 à 900 €), à la <strong>TVA réduite à 5,5%</strong> pour les logements de plus de 2 ans, ou à l&apos;<strong>éco-PTZ</strong> pour financer sans intérêts. Notre article détaillé sur les <Link href="/guides/remboursement-climatisation-securite-sociale" className="text-cyan-600">aides et remboursements climatisation 2026</Link> explique tous les dispositifs et comment les cumuler.
                        </p>

                        <h3>Besoin d&apos;un chiffrage précis ?</h3>
                        <p>
                            Nos outils donnent des estimations basées sur les prix du marché. Pour un <strong>chiffrage exact adapté à votre logement</strong>, seule une visite technique à domicile (gratuite) permet d&apos;obtenir un devis définitif incluant le dimensionnement exact, la longueur des liaisons frigorifiques et les éventuels travaux complémentaires. Que vous soyez à <Link href="/annuaire/paris-75" className="text-cyan-600">Paris</Link>, en <Link href="/annuaire/bouches-du-rhone-13" className="text-cyan-600">Bouches-du-Rhône</Link>, dans le <Link href="/annuaire/rhone-69" className="text-cyan-600">Rhône</Link> ou ailleurs, nos <Link href="/annuaire" className="text-cyan-600">installateurs RGE partenaires</Link> interviennent dans toute la France.
                        </p>

                        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-lg not-prose">
                            <h3 className="text-cyan-900 font-bold mb-2">💡 Conseil d&apos;expert</h3>
                            <p className="text-cyan-800 text-sm">
                                Avant de signer un devis, lisez notre <Link href="/guides/devis-climatisation-pieges" className="text-cyan-600 underline">guide des 7 pièges à éviter</Link>. Vérifiez systématiquement que la marque et le modèle exact sont précisés, que la mise en service est incluse, et que l&apos;installateur est bien certifié RGE.
                            </p>
                        </div>
                    </div>

                    {/* Related Links Grid */}
                    <div className="mt-12 pt-12 border-t border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Ressources complémentaires</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { href: "/guides/prix-climatisation-2026", icon: "💰", title: "Guide des Prix Climatisation 2026" },
                                { href: "/guides/devis-climatisation-pieges", icon: "⚠️", title: "7 Pièges à Éviter sur un Devis" },
                                { href: "/guides/comparatif-marques-climatisation", icon: "🏭", title: "Comparatif Daikin vs Mitsubishi vs Atlantic" },
                                { href: "/guides/entretien-climatisation", icon: "🔧", title: "Entretien Climatisation : Coût & Obligations" },
                                { href: "/marques", icon: "📊", title: "Toutes les Marques de Climatisation" },
                                { href: "/glossaire", icon: "📖", title: "Glossaire Technique (SEER, SCOP, COP…)" },
                            ].map((guide) => (
                                <Link
                                    key={guide.href}
                                    href={guide.href}
                                    className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all group"
                                >
                                    <span className="text-xl">{guide.icon}</span>
                                    <span className="font-medium text-slate-700 group-hover:text-cyan-700 text-sm">{guide.title}</span>
                                    <ArrowRight className="h-4 w-4 text-cyan-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
