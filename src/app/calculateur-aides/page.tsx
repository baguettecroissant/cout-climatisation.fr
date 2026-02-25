"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, CheckCircle, Info, Euro, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

type Surface = "petite" | "moyenne" | "grande";
type AgeLogement = "ancien" | "neuf";
type Revenus = "modestes" | "classiques";

interface AidesResult {
    primeCEE: number;
    tvaEconomie: number;
    totalAides: number;
    resteACharge: number;
}

export default function CalculateurAides() {
    const [step, setStep] = useState(1);
    const [prixTravaux, setPrixTravaux] = useState<number>(6000);
    const [surface, setSurface] = useState<Surface | null>(null);
    const [ageLogement, setAgeLogement] = useState<AgeLogement | null>(null);
    const [revenus, setRevenus] = useState<Revenus | null>(null);
    const [showResult, setShowResult] = useState(false);

    const calculateAides = (): AidesResult | null => {
        if (!surface || !ageLogement || !revenus) return null;

        // Calcul Prime CEE (estimations 2026)
        let primeCEE = 0;
        if (surface === "petite") primeCEE = revenus === "modestes" ? 400 : 200;
        if (surface === "moyenne") primeCEE = revenus === "modestes" ? 700 : 400;
        if (surface === "grande") primeCEE = revenus === "modestes" ? 900 : 600;

        // Calcul économie TVA (20% vs 5.5% ou 10% - souvent 10% sur matériel, 5.5% sur énergie)
        // Pour simplifier l'impact global (TVA 20% totale si neuf vs mix 20/10/5.5 si ancien)
        // On estime l'économie moyenne globale à environ 8% du montant TTC
        let tvaEconomie = 0;
        if (ageLogement === "ancien") {
            tvaEconomie = Math.round(prixTravaux * 0.08);
        }

        const totalAides = primeCEE + tvaEconomie;
        const resteACharge = Math.max(0, prixTravaux - totalAides);

        return {
            primeCEE,
            tvaEconomie,
            totalAides,
            resteACharge,
        };
    };

    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleSubmit = () => {
        if (surface && ageLogement && revenus) {
            setShowResult(true);
        }
    };

    const result = calculateAides();

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Calculateur d'Aides Climatisation" }]} />
                    <div className="max-w-3xl mx-auto text-center mt-4">
                        <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <Calculator className="h-4 w-4" />
                            Simulation Aides 2026
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Calculez vos Aides Climatisation
                        </h1>
                        <p className="text-xl text-slate-300">
                            Primes CEE &amp; TVA à taux réduit : découvrez le montant de vos aides pour l'installation d'une PAC air-air.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-3xl">
                    {!showResult ? (
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                            <div className="p-6 md:p-8">
                                {/* Step 1: Prix des travaux */}
                                {step === 1 && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                            Quel est le montant de votre devis (TTC) ?
                                        </h2>
                                        <div className="mb-8">
                                            <div className="flex items-center gap-4 mb-4">
                                                <input
                                                    type="range"
                                                    min="1000"
                                                    max="20000"
                                                    step="500"
                                                    value={prixTravaux}
                                                    onChange={(e) => setPrixTravaux(Number(e.target.value))}
                                                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                                                />
                                            </div>
                                            <div className="text-center">
                                                <span className="text-4xl font-bold text-cyan-600">{formatPrice(prixTravaux)}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-500 mb-6 flex items-start gap-2">
                                            <HelpCircle className="h-4 w-4 shrink-0 mt-0.5 text-cyan-500" />
                                            <span>Pas encore de devis ? <Link href="/simulateur-prix" className="text-cyan-600 underline font-medium">Estimez d'abord le prix de votre installation</Link></span>
                                        </p>
                                        <Button
                                            onClick={() => setStep(2)}
                                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white h-14 text-lg rounded-xl shadow-md"
                                        >
                                            Continuer
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </div>
                                )}

                                {/* Step 2: Surface */}
                                {step === 2 && (
                                    <div>
                                        <button onClick={() => setStep(1)} className="text-sm text-slate-500 hover:text-cyan-600 mb-4 font-medium flex items-center">
                                            &larr; Retour
                                        </button>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                            Quelle surface souhaitez-vous climatiser / chauffer ?
                                        </h2>
                                        <div className="grid gap-4 mb-8">
                                            {[
                                                { value: "petite", label: "Moins de 50 m²", desc: "La prime CEE dépend en partie de la puissance installée." },
                                                { value: "moyenne", label: "De 50 à 100 m²", desc: "Pour un appartement standard ou grande pièce de vie." },
                                                { value: "grande", label: "Plus de 100 m²", desc: "Pour une maison entière (multi-split ou gainable)." },
                                            ].map((s) => (
                                                <button
                                                    key={s.value}
                                                    onClick={() => {
                                                        setSurface(s.value as Surface);
                                                        setStep(3);
                                                    }}
                                                    className={`p-4 border-2 rounded-xl text-left transition-all ${surface === s.value
                                                        ? 'border-cyan-500 bg-cyan-50 shadow-sm'
                                                        : 'border-slate-200 hover:border-cyan-300'
                                                        }`}
                                                >
                                                    <div className="font-bold text-slate-900 text-lg">{s.label}</div>
                                                    <div className="text-sm text-slate-500 mt-1">{s.desc}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Age du logement */}
                                {step === 3 && (
                                    <div>
                                        <button onClick={() => setStep(2)} className="text-sm text-slate-500 hover:text-cyan-600 mb-4 font-medium flex items-center">
                                            &larr; Retour
                                        </button>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                            Quel est l'âge de votre logement ?
                                        </h2>
                                        <div className="grid gap-4 mb-8">
                                            {[
                                                { value: "ancien", label: "Plus de 2 ans", desc: "Vous permet de bénéficier de taux de TVA réduits (5.5% ou 10%)." },
                                                { value: "neuf", label: "Moins de 2 ans", desc: "Logement neuf ou en construction (TVA 20% applicable)." },
                                            ].map((a) => (
                                                <button
                                                    key={a.value}
                                                    onClick={() => {
                                                        setAgeLogement(a.value as AgeLogement);
                                                        setStep(4);
                                                    }}
                                                    className={`p-4 border-2 rounded-xl text-left transition-all ${ageLogement === a.value
                                                        ? 'border-cyan-500 bg-cyan-50 shadow-sm'
                                                        : 'border-slate-200 hover:border-cyan-300'
                                                        }`}
                                                >
                                                    <div className="font-bold text-slate-900 text-lg">{a.label}</div>
                                                    <div className="text-sm text-slate-500 mt-1">{a.desc}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Revenus */}
                                {step === 4 && (
                                    <div>
                                        <button onClick={() => setStep(3)} className="text-sm text-slate-500 hover:text-cyan-600 mb-4 font-medium flex items-center">
                                            &larr; Retour
                                        </button>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                            Vos revenus sont-ils considérés comme modestes ?
                                        </h2>
                                        <div className="bg-slate-50 p-4 rounded-xl mb-6 text-sm text-slate-600 border border-slate-200">
                                            <strong>À titre indicatif (Barèmes ANAH hors IdF) :</strong><br />
                                            Moins de 21 805 € pour 1 personne.<br />
                                            Moins de 31 889 € pour 2 personnes.
                                        </div>

                                        <div className="grid gap-4 mb-8">
                                            {[
                                                { value: "modestes", label: "Oui, revenus modestes ou très modestes", desc: "Vos primes CEE seront bonifiées." },
                                                { value: "classiques", label: "Non, revenus classiques ou supérieurs", desc: "Vous avez droit aux primes CEE standards." },
                                            ].map((r) => (
                                                <button
                                                    key={r.value}
                                                    onClick={() => setRevenus(r.value as Revenus)}
                                                    className={`p-4 border-2 rounded-xl text-left transition-all ${revenus === r.value
                                                        ? 'border-cyan-500 bg-cyan-50 shadow-sm'
                                                        : 'border-slate-200 hover:border-cyan-300'
                                                        }`}
                                                >
                                                    <div className="font-bold text-slate-900 text-lg">{r.label}</div>
                                                    <div className="text-sm text-slate-500 mt-1">{r.desc}</div>
                                                </button>
                                            ))}
                                        </div>

                                        <Button
                                            onClick={handleSubmit}
                                            disabled={!revenus}
                                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white h-14 text-lg rounded-xl disabled:opacity-50 shadow-md"
                                        >
                                            Calculer mes aides
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        /* Results */
                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8">
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                        <CheckCircle className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Vos aides estimées</h2>
                                    <p className="text-slate-500">Pour l'installation d'une pompe à chaleur air-air de {formatPrice(prixTravaux)}</p>
                                </div>

                                {result && (
                                    <>
                                        {/* Main Result */}
                                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border border-green-200 shadow-sm">
                                                <div className="text-sm text-green-700 font-semibold mb-2 uppercase tracking-wide">Total des aides & économies</div>
                                                <div className="text-3xl md:text-4xl font-extrabold text-green-600">
                                                    {formatPrice(result.totalAides)}
                                                </div>
                                            </div>
                                            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 text-center border border-cyan-200 shadow-sm">
                                                <div className="text-sm text-cyan-700 font-semibold mb-2 uppercase tracking-wide">Votre reste à charge</div>
                                                <div className="text-3xl md:text-4xl font-extrabold text-cyan-600">
                                                    {formatPrice(result.resteACharge)}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Breakdown */}
                                        <div className="bg-slate-50 rounded-xl p-5 mb-6 border border-slate-100">
                                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                                                <Euro className="h-5 w-5 text-green-600" />
                                                Détail des subventions
                                            </h3>
                                            <ul className="space-y-3">
                                                {/* CEE */}
                                                <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                                                    <div>
                                                        <span className="font-bold text-slate-900 block mb-1">Primes CEE (Énergie)</span>
                                                        <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-md">
                                                            Versées directement par un fournisseur
                                                        </span>
                                                    </div>
                                                    <span className="font-bold text-green-600 text-lg">-{formatPrice(result.primeCEE)}</span>
                                                </li>

                                                {/* TVA */}
                                                {result.tvaEconomie > 0 ? (
                                                    <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                                                        <div>
                                                            <span className="font-bold text-slate-900 block mb-1">Économie TVA</span>
                                                            <span className="text-xs font-medium bg-purple-100 text-purple-700 px-2 py-1 rounded-md">
                                                                Facturation à 5,5% et/ou 10%
                                                            </span>
                                                        </div>
                                                        <span className="font-bold text-green-600 text-lg text-right">
                                                            ≈ -{formatPrice(result.tvaEconomie)}<br />
                                                            <span className="text-[10px] text-slate-400 font-normal uppercase">(économie estimée)</span>
                                                        </span>
                                                    </li>
                                                ) : (
                                                    <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm opacity-60">
                                                        <div>
                                                            <span className="font-medium text-slate-900 block">Économie TVA</span>
                                                            <span className="text-xs text-slate-500">Logement {"<"} 2 ans (TVA 20%)</span>
                                                        </div>
                                                        <span className="font-bold text-slate-400">Non éligible</span>
                                                    </li>
                                                )}

                                                {/* MaPrimeRénov Warning */}
                                                <li className="flex justify-between items-center p-4 bg-red-50/50 rounded-lg shadow-sm border border-red-100">
                                                    <div>
                                                        <span className="font-medium text-slate-900 block mb-1" style={{ textDecoration: "line-through" }}>MaPrimeRénov'</span>
                                                        <span className="text-[11px] leading-tight text-red-600/80 block max-w-[200px]">
                                                            Les pompes à chaleur air-air ne sont pas éligibles à MaPrimeRénov', uniquement les PAC air-eau.
                                                        </span>
                                                    </div>
                                                    <span className="font-bold text-slate-400">0 €</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Info Box */}
                                        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl mb-8">
                                            <div className="flex gap-4">
                                                <Info className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                                                <div className="text-sm text-blue-900 leading-relaxed">
                                                    <strong>Important :</strong> Ce simulateur donne une estimation. Pour bénéficier des Primes CEE et de la TVA réduite, votre installation <strong>doit impérativement être réalisée par un artisan certifié RGE</strong> (Reconnu Garant de l'Environnement).
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Button
                                        onClick={() => {
                                            setShowResult(false);
                                            setStep(1);
                                            setSurface(null);
                                            setAgeLogement(null);
                                            setRevenus(null);
                                        }}
                                        variant="outline"
                                        className="h-14 font-medium"
                                    >
                                        Refaire une simulation
                                    </Button>
                                    <Link href="/devis" className="block w-full">
                                        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white h-14 font-bold text-lg">
                                            Trouver un artisan RGE
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* SEO Content */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl prose prose-slate">
                    <h2>Quelles aides pour l'installation d'une climatisation réversible en 2026 ?</h2>
                    <p>
                        L'installation d'une pompe à chaleur (PAC) air-air permet de réaliser d'importantes économies d'énergie, mais l'investissement initial peut être conséquent. Heureusement, plusieurs aides existent pour faire baisser la facture de votre <strong>climatisation réversible</strong>.
                    </p>

                    <div className="bg-red-50 p-4 border-l-4 border-red-500 rounded-r-lg mb-8 not-prose">
                        <h3 className="text-red-800 font-bold mb-2">Attention : Fin de MaPrimeRénov' pour la PAC air-air</h3>
                        <p className="text-sm text-red-900">
                            Contrairement aux pompes à chaleur air-eau ou géothermiques, les <strong>PAC air-air n'ouvrent pas droit à MaPrimeRénov'</strong>. Soyez très vigilants si un installateur vous garantit le contraire lors d'un devis.
                        </p>
                    </div>

                    <h3>1. La Prime Énergie (CEE - Certificats d'Économie d'Énergie)</h3>
                    <p>
                        C'est l'aide principale pour l'installation d'une climatisation réversible. Versée par les fournisseurs d'énergie (EDF, TotalEnergies, grandes surfaces...), cette prime est accessible à tous, sans condition de revenus stricte (bien que les montants soient bonifiés pour les revenus modestes).
                    </p>
                    <ul>
                        <li><strong>Condition obligatoire :</strong> Le matériel installé doit avoir un coefficient de performance saisonnier (SCOP) supérieur ou égal à 3,9.</li>
                        <li><strong>Artisan :</strong> L'installateur doit obligatoirement disposer du label <strong>RGE QualiPAC</strong>.</li>
                        <li><strong>Montant :</strong> De quelques centaines à plus de 900€ selon la taille de votre logement et vos revenus.</li>
                    </ul>

                    <h3>2. La TVA réduite à 5,5% et 10%</h3>
                    <p>
                        Si votre logement est achevé depuis plus de 2 ans, vous bénéficiez d'une baisse de TVA conséquente par rapport aux 20% habituels :
                    </p>
                    <ul>
                        <li><strong>TVA 5,5% :</strong> Appliquée sur la main d'œuvre de l'installation et les travaux induits.</li>
                        <li><strong>TVA 10% ou 20% :</strong> Appliquée sur le matériel lui-même, selon ses caractéristiques techniques. De nombreuses PAC air-air récentes permettent de facturer le groupe extérieur et les unités intérieures avec des réductions.</li>
                    </ul>
                    <p>Au final, cette taxation allégée représente souvent l'économie financière la plus immédiate en bas de votre devis.</p>

                    <h3>Comment sécuriser vos primes ?</h3>
                    <p>
                        Il est crucial de <strong>ne signer aucun devis avant d'avoir formellement demandé votre prime CEE</strong>. C'est l'erreur la plus commune : une fois le devis signé, le dossier CEE ne peut plus être créé rétroactivement.
                    </p>
                    <p>
                        Pour tout comprendre sur les délais et la constitution de votre dossier de financement, consultez notre <Link href="/guides/remboursement-climatisation-securite-sociale" className="text-cyan-600 font-bold hover:underline">Guide des aides et subventions climatisation 2026</Link> ou comparez immédiatement les prix via notre service de <Link href="/devis" className="text-cyan-600 font-bold hover:underline">devis gratuit en ligne</Link>.
                    </p>
                </div>
            </section>
        </div>
    );
}
