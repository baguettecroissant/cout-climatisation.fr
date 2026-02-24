import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ShieldCheck, Zap, Users, Target, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
    title: "Qui Sommes-Nous ? | Cout-Climatisation.fr – Votre Guide Indépendant",
    description: "Cout-Climatisation.fr est le guide indépendant de la climatisation réversible et de la pompe à chaleur air-air en France. Notre mission : transparence des prix, objectivité des comparatifs, et mise en relation avec des installateurs RGE certifiés.",
    alternates: {
        canonical: "https://www.cout-climatisation.fr/qui-sommes-nous",
    },
    openGraph: {
        title: "Qui Sommes-Nous ? | Cout-Climatisation.fr",
        description: "Guide indépendant de la climatisation réversible en France. Prix transparents, comparatifs objectifs, installateurs RGE.",
        url: "https://www.cout-climatisation.fr/qui-sommes-nous",
    },
};

export default function QuiSommesNousPage() {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Cout-Climatisation.fr",
        "url": "https://www.cout-climatisation.fr",
        "description": "Guide indépendant de la climatisation réversible et de la pompe à chaleur air-air en France.",
        "foundingDate": "2024",
        "sameAs": [],
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Qui sommes-nous ?" }]} />
                    <div className="max-w-3xl mx-auto text-center mt-8">
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
                            Le guide <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">indépendant</span> de la climatisation en France
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            <strong className="text-white">Cout-Climatisation.fr</strong> aide chaque année des milliers de particuliers à comprendre les prix, comparer les marques et trouver des installateurs RGE de confiance pour leur projet de climatisation réversible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Notre mission</h2>

                    <div className="prose prose-lg prose-slate mx-auto mb-12">
                        <p>
                            Le marché de la climatisation et des pompes à chaleur air-air peut sembler opaque :
                            des dizaines de marques, des prix qui varient du simple au triple selon l&apos;installateur,
                            des aides financières complexes à décrypter. C&apos;est exactement ce problème que
                            <strong> Cout-Climatisation.fr</strong> résout depuis 2024.
                        </p>
                        <p>
                            Notre équipe éditoriale analyse en continu le marché français de la climatisation
                            pour vous fournir des <strong>informations fiables, actualisées et objectives</strong> :
                            prix réels constatés, comparatifs techniques des marques leaders
                            (<Link href="/marques/daikin" className="text-cyan-600">Daikin</Link>,
                            <Link href="/marques/mitsubishi-electric" className="text-cyan-600"> Mitsubishi Electric</Link>,
                            <Link href="/marques/atlantic" className="text-cyan-600"> Atlantic</Link>,
                            <Link href="/marques/toshiba" className="text-cyan-600"> Toshiba</Link>),
                            et décryptage des <Link href="/calculateur-aides" className="text-cyan-600">aides financières</Link> disponibles.
                        </p>
                    </div>

                    {/* Values */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <ShieldCheck className="h-8 w-8 text-cyan-500" />,
                                title: "100% Indépendant",
                                description: "Aucun lien commercial avec les fabricants. Nos comparatifs et guides sont rédigés en toute objectivité, sans placement de produit ni partenariat éditorial.",
                            },
                            {
                                icon: <Target className="h-8 w-8 text-cyan-500" />,
                                title: "Prix Transparents",
                                description: "Nos fourchettes de prix sont issues de relevés réels auprès d'installateurs en France. Nous actualisons nos données chaque trimestre pour refléter le marché.",
                            },
                            {
                                icon: <Award className="h-8 w-8 text-cyan-500" />,
                                title: "Installateurs RGE Vérifiés",
                                description: "Nous ne référençons que des professionnels certifiés RGE (Reconnu Garant de l'Environnement), dont la qualification est vérifiée sur France Rénov'.",
                            },
                        ].map((value) => (
                            <div key={value.title} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{value.title}</h3>
                                <p className="text-slate-600 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What we offer */}
            <section className="py-16 bg-white border-y border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Ce que nous proposons</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: <BookOpen className="h-6 w-6 text-cyan-500" />,
                                title: "Guides & Dossiers Experts",
                                description: "Des articles de fond rédigés par des experts HVAC : prix détaillés, aides financières, entretien obligatoire, pièges à éviter sur un devis.",
                                link: { href: "/guides", label: "Lire nos guides" },
                            },
                            {
                                icon: <Zap className="h-6 w-6 text-cyan-500" />,
                                title: "Comparatifs Objectifs",
                                description: "Analyses techniques des 6 marques leaders du marché français : Daikin, Mitsubishi Electric, Atlantic, Toshiba, LG et Fujitsu General.",
                                link: { href: "/marques", label: "Voir le comparatif" },
                            },
                            {
                                icon: <Users className="h-6 w-6 text-cyan-500" />,
                                title: "Mise en Relation RGE",
                                description: "Notre réseau d'installateurs certifiés RGE couvre toute la France. Recevez jusqu'à 3 devis gratuits et sans engagement en 48h.",
                                link: { href: "/devis", label: "Demander un devis" },
                            },
                            {
                                icon: <Target className="h-6 w-6 text-cyan-500" />,
                                title: "Outils Interactifs",
                                description: "Simulateur de prix, calculateur d'aides financières, annuaire départemental : des outils gratuits pour préparer votre projet.",
                                link: { href: "/outils", label: "Découvrir nos outils" },
                            },
                        ].map((service) => (
                            <div key={service.title} className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-cyan-300 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    {service.icon}
                                    <h3 className="font-bold text-slate-900">{service.title}</h3>
                                </div>
                                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                                <Link href={service.link.href} className="inline-flex items-center text-sm text-cyan-600 font-medium hover:text-cyan-700">
                                    {service.link.label} <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">L&apos;équipe éditoriale</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
                        Nos contenus sont rédigés et vérifiés par des professionnels du génie climatique
                        et des spécialistes de la rénovation énergétique.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                emoji: "👨‍🔧",
                                name: "Thomas Durand",
                                role: "Expert Génie Climatique",
                                bio: "Ingénieur thermicien avec 12 ans d'expérience en dimensionnement de systèmes CVC. Thomas vérifie l'exactitude technique de nos comparatifs et guides.",
                            },
                            {
                                emoji: "👩‍💼",
                                name: "Claire Morel",
                                role: "Spécialiste Aides & Rénovation",
                                bio: "Ancienne conseillère France Rénov', Claire décrypte les dispositifs d'aide (CEE, MaPrimeRénov', éco-PTZ) et leur application concrète à vos projets.",
                            },
                            {
                                emoji: "👨‍💻",
                                name: "Julien Fabre",
                                role: "Rédacteur en Chef",
                                bio: "Journaliste spécialisé dans la rénovation énergétique depuis 8 ans, Julien pilote la ligne éditoriale et garantit la clarté de nos contenus.",
                            },
                        ].map((member) => (
                            <div key={member.name} className="flex flex-col items-center p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                                <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center text-4xl mb-4">
                                    {member.emoji}
                                </div>
                                <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
                                <p className="text-cyan-600 text-sm font-medium mb-3">{member.role}</p>
                                <p className="text-slate-500 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-16 bg-white border-y border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Notre méthodologie</h2>

                    <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-8">
                        <div className="space-y-6">
                            {[
                                {
                                    step: "1",
                                    title: "Recherche & Analyse",
                                    description: "Nous collectons les données de prix auprès de dizaines d'installateurs RGE en France, les fiches techniques des fabricants, et les retours d'utilisateurs.",
                                },
                                {
                                    step: "2",
                                    title: "Rédaction Experte",
                                    description: "Nos articles sont rédigés par des spécialistes du secteur, puis relus par un ingénieur thermicien pour garantir l'exactitude des informations techniques (SEER, SCOP, COP, puissances).",
                                },
                                {
                                    step: "3",
                                    title: "Mise à Jour Continue",
                                    description: "Les prix, les aides financières et les gammes des fabricants évoluent. Nos contenus sont révisés chaque trimestre pour refléter les données les plus récentes du marché.",
                                },
                                {
                                    step: "4",
                                    title: "Vérification RGE",
                                    description: "Chaque professionnel de notre annuaire est vérifié : certification RGE active, assurance décennale, avis clients. Nous retirons immédiatement tout installateur dont la qualification expire.",
                                },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-4">
                                    <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-cyan-600 to-sky-500 text-white">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold mb-4">Prêt à lancer votre projet ?</h2>
                    <p className="text-xl text-white/90 mb-8">
                        Profitez de nos outils gratuits et de notre réseau d&apos;installateurs RGE pour concrétiser votre projet de climatisation au meilleur prix.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/devis">
                            <Button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100 text-lg px-8 h-14 rounded-full shadow-lg transition-transform hover:scale-105">
                                Demander 3 devis gratuits
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/guides">
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 h-14 rounded-full">
                                Lire nos guides
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-12 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 mb-4">Nous contacter</h2>
                            <p className="text-slate-600 mb-4">
                                Vous avez une question sur l&apos;un de nos articles ? Vous souhaitez signaler une erreur ou
                                suggérer un sujet de guide ? Notre rédaction vous répond en 48h.
                            </p>
                            <p className="font-medium text-slate-900 text-lg">
                                📧 contact@cout-climatisation.fr
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { href: "/faq", label: "❓ FAQ" },
                                { href: "/glossaire", label: "📖 Glossaire" },
                                { href: "/annuaire", label: "📍 Annuaire RGE" },
                                { href: "/marques", label: "🏭 Comparatif" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center justify-center p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:border-cyan-400 hover:text-cyan-700 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
