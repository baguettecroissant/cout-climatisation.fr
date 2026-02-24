
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { CheckCircle, Shield, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
    title: "Devis Climatisation Gratuit 2026 : Comparez 3 Installateurs RGE",
    description: "Recevez 3 devis gratuits pour votre climatisation réversible ou pompe à chaleur air-air. Installateurs RGE certifiés, sans engagement. Comparez et économisez jusqu'à 30%.",
    alternates: {
        canonical: "https://www.cout-climatisation.fr/devis",
    },
    openGraph: {
        title: "Devis Climatisation Gratuit | 3 Offres d'Installateurs RGE",
        description: "Comparez 3 devis gratuits d'installateurs RGE pour votre climatisation réversible. Mono-split, multi-split, gainable. Sans engagement.",
        url: "https://www.cout-climatisation.fr/devis",
    },
};

export default function DevisPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "La demande de devis est-elle payante ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Non, notre service de mise en relation est 100% gratuit pour vous. Nous sommes rémunérés par les installateurs partenaires, ce qui n'impacte pas votre devis final.",
                },
            },
            {
                "@type": "Question",
                "name": "Suis-je engagé si je demande un devis ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolument pas. Vous recevez vos devis en toute liberté. Si aucune proposition ne vous convient, vous n'avez aucune obligation de signer.",
                },
            },
            {
                "@type": "Question",
                "name": "Combien de temps pour recevoir mes devis ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vous recevez en moyenne vos 3 devis sous 48h. Les installateurs RGE prennent ensuite rendez-vous pour une visite technique gratuite à votre domicile.",
                },
            },
        ],
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
                    <Breadcrumbs items={[{ label: "Devis Gratuit" }]} />
                    <div className="text-center mt-6 max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                            Recevez <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">3 Devis Gratuits</span>
                            <br />pour votre Climatisation
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Comparez les installateurs <strong className="text-white">RGE certifiés</strong> de votre région et économisez jusqu&apos;à 30% sur votre installation de climatisation réversible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Widget + Sidebar */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        {/* Main Widget Area */}
                        <div className="md:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                            <div className="p-1 md:p-4">
                                <ViteUnDevisWidget />
                            </div>
                            <div className="bg-slate-50 p-4 text-center border-t border-slate-100 text-sm text-slate-500">
                                🔒 Vos données sont sécurisées et transmises uniquement aux installateurs RGE sélectionnés.
                            </div>
                        </div>

                        {/* Sidebar Trust Signals */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-4 text-lg">Pourquoi comparer ?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5">
                                            <CheckCircle className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <span className="font-bold block text-slate-900">100% Gratuit</span>
                                            <span className="text-sm text-slate-600">Aucun frais, aucun engagement.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-1.5 rounded-full shrink-0 mt-0.5">
                                            <Shield className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <span className="font-bold block text-slate-900">Installateurs RGE Vérifiés</span>
                                            <span className="text-sm text-slate-600">Certification RGE, Qualibat et décennale à jour.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-cyan-100 p-1.5 rounded-full shrink-0 mt-0.5">
                                            <Clock className="h-5 w-5 text-cyan-600" />
                                        </div>
                                        <div>
                                            <span className="font-bold block text-slate-900">Réponse en 48h</span>
                                            <span className="text-sm text-slate-600">3 devis comparatifs sous 48h max.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Quick price reference */}
                            <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-900 mb-3">💰 Prix indicatifs 2026</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Mono-split</span>
                                        <span className="font-bold text-slate-900">1 200 – 3 500 €</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Multi-split</span>
                                        <span className="font-bold text-slate-900">3 000 – 9 000 €</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-600">Gainable</span>
                                        <span className="font-bold text-slate-900">5 000 – 12 000 €</span>
                                    </div>
                                </div>
                                <Link href="/guides/prix-climatisation-2026" className="inline-flex items-center gap-1 text-sm text-cyan-600 font-medium mt-3 hover:text-cyan-700">
                                    Guide prix complet <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>

                            <div className="bg-slate-900 p-6 rounded-xl text-center text-white">
                                <div className="text-4xl font-bold text-cyan-400 mb-2">2 500+</div>
                                <div className="text-slate-300">Projets accompagnés en 2026</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <article className="prose prose-slate max-w-none">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Pourquoi comparer plusieurs devis de climatisation ?</h2>
                                <p>
                                    Le prix d&apos;une <strong>climatisation réversible</strong> varie considérablement d&apos;un installateur à l&apos;autre.
                                    En moyenne, nos utilisateurs constatent des <strong>écarts de prix allant jusqu&apos;à 30%</strong> pour une installation
                                    identique (même marque, même puissance). Comparer 3 devis est le meilleur moyen de payer le juste prix.
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Ce que vous pouvez comparer :</h3>
                                <ul className="space-y-4 mb-8 list-none pl-0">
                                    <li className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <strong className="text-slate-900 block mb-1">La marque et le modèle proposé</strong>
                                        <span className="text-slate-600 text-sm">
                                            <Link href="/marques/daikin" className="text-cyan-600">Daikin Perfera</Link>,{" "}
                                            <Link href="/marques/mitsubishi-electric" className="text-cyan-600">Mitsubishi MSZ-LN</Link>,{" "}
                                            <Link href="/marques/atlantic" className="text-cyan-600">Atlantic Fujitsu</Link>... Le choix de la marque impacte 15-30% du prix.
                                        </span>
                                    </li>
                                    <li className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <strong className="text-slate-900 block mb-1">Le type d&apos;installation</strong>
                                        <span className="text-slate-600 text-sm">
                                            Mono-split pour une pièce, multi-split pour 2 à 5 pièces, ou <Link href="/glossaire" className="text-cyan-600">gainable</Link> pour une diffusion discrète via faux-plafond.
                                        </span>
                                    </li>
                                    <li className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <strong className="text-slate-900 block mb-1">La performance énergétique</strong>
                                        <span className="text-slate-600 text-sm">
                                            SEER en mode froid, SCOP en mode chaud : plus ils sont élevés, moins vous consommez. Un SEER de 8+ (classe A+++) vs 6 (classe A+) fait une réelle différence sur la facture.
                                        </span>
                                    </li>
                                    <li className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <strong className="text-slate-900 block mb-1">La garantie et le SAV</strong>
                                        <span className="text-slate-600 text-sm">
                                            De 2 à <Link href="/marques/lg" className="text-cyan-600">10 ans (LG)</Link>. Vérifiez que la mise en service est incluse — sans elle, la garantie constructeur peut être invalidée.{" "}
                                            <Link href="/guides/devis-climatisation-pieges" className="text-cyan-600">Voir les pièges à éviter</Link>.
                                        </span>
                                    </li>
                                </ul>

                                <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-lg not-prose">
                                    <h3 className="text-cyan-900 font-bold mb-2">💡 Bon à savoir : Aides financières</h3>
                                    <p className="text-cyan-800 text-sm">
                                        L&apos;installation d&apos;une PAC air-air donne droit aux <strong>CEE</strong> (300-900 €) et à la <strong>TVA réduite à 5,5%</strong> pour
                                        les logements de plus de 2 ans.{" "}
                                        <Link href="/calculateur-aides" className="underline font-medium hover:text-cyan-600">Calculez vos aides</Link> ou consultez notre{" "}
                                        <Link href="/guides/remboursement-climatisation-securite-sociale" className="underline font-medium hover:text-cyan-600">guide complet des aides 2026</Link>.
                                    </p>
                                </div>
                            </article>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Questions fréquentes</h3>
                                <div className="space-y-4">
                                    <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                        <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 group-hover:bg-slate-50 transition-colors">
                                            La demande est-elle payante ?
                                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                                        </summary>
                                        <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed">
                                            Non, notre service est <strong>100% gratuit</strong>. Nous sommes rémunérés par les installateurs partenaires, sans impact sur votre devis.
                                        </div>
                                    </details>

                                    <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                        <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 group-hover:bg-slate-50 transition-colors">
                                            Suis-je engagé ?
                                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                                        </summary>
                                        <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed">
                                            Absolument pas. Vous comparez librement et n&apos;avez aucune obligation de signer. Les devis sont sans engagement.
                                        </div>
                                    </details>

                                    <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                        <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 group-hover:bg-slate-50 transition-colors">
                                            Les installateurs sont-ils RGE ?
                                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                                        </summary>
                                        <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed">
                                            Oui, tous nos installateurs sont <strong>certifiés RGE</strong> avec assurance décennale vérifiée. C&apos;est indispensable pour accéder aux{" "}
                                            <Link href="/calculateur-aides" className="text-cyan-600 hover:underline">aides financières</Link>.
                                        </div>
                                    </details>

                                    <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                        <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 group-hover:bg-slate-50 transition-colors">
                                            Quel délai pour les devis ?
                                            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                                        </summary>
                                        <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed">
                                            Vous recevez vos <strong>3 devis sous 48h</strong>. Une visite technique gratuite est ensuite programmée pour le dimensionnement exact de votre installation.
                                        </div>
                                    </details>
                                </div>

                                {/* Maillage Interne */}
                                <div className="mt-8 space-y-2">
                                    <h4 className="font-bold text-slate-900 text-sm mb-3">À lire aussi</h4>
                                    {[
                                        { href: "/guides/prix-climatisation-2026", label: "💰 Guide des prix 2026" },
                                        { href: "/guides/devis-climatisation-pieges", label: "⚠️ 7 pièges sur un devis" },
                                        { href: "/marques", label: "🏭 Comparatif des marques" },
                                        { href: "/annuaire", label: "📍 Annuaire installateurs RGE" },
                                    ].map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="flex items-center gap-2 p-3 text-sm text-slate-700 bg-slate-50 rounded-lg border border-slate-200 hover:border-cyan-400 hover:text-cyan-700 transition-colors"
                                        >
                                            {link.label}
                                            <ArrowRight className="h-3 w-3 ml-auto text-cyan-500" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
