"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, CheckCircle, Info, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

type InstallationType = "monosplit" | "multisplit" | "gainable";
type SurfaceArea = "petite" | "moyenne" | "grande";

interface PriceRange {
    min: number;
    max: number;
}

// Price matrix based on AC type and surface area
const PRICE_MATRIX: Record<InstallationType, Record<SurfaceArea, PriceRange>> = {
    monosplit: {
        petite: { min: 1200, max: 2000 },
        moyenne: { min: 2000, max: 3000 },
        grande: { min: 2500, max: 4000 },
    },
    multisplit: {
        petite: { min: 3000, max: 4500 },
        moyenne: { min: 4500, max: 6500 },
        grande: { min: 6500, max: 9000 },
    },
    gainable: {
        petite: { min: 5000, max: 7500 },
        moyenne: { min: 7500, max: 10000 },
        grande: { min: 10000, max: 14000 },
    },
};

// Options costs
const OPTIONS = {
    wifi: { label: "Module Wi-Fi (Contrôle smartphone)", cost: 150 },
    purification: { label: "Filtre purificateur d'air avancé", cost: 250 },
    design: { label: "Unités murales design (Couleur/Miroir)", cost: 500 },
    entretien: { label: "Contrat d'entretien 1ère année", cost: 150 },
};

export default function SimulateurPrix() {
    const [step, setStep] = useState(1);
    const [installType, setInstallType] = useState<InstallationType | null>(null);
    const [surface, setSurface] = useState<SurfaceArea | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);

    const toggleOption = (option: string) => {
        setSelectedOptions(prev =>
            prev.includes(option)
                ? prev.filter(o => o !== option)
                : [...prev, option]
        );
    };

    const calculatePrice = (): PriceRange | null => {
        if (!installType || !surface) return null;

        const basePrice = PRICE_MATRIX[installType][surface];
        const optionsCost = selectedOptions.reduce(
            (sum, opt) => sum + (OPTIONS[opt as keyof typeof OPTIONS]?.cost || 0),
            0
        );

        return {
            min: basePrice.min + optionsCost,
            max: basePrice.max + optionsCost,
        };
    };

    const handleSubmit = () => {
        if (installType && surface) {
            setShowResult(true);
        }
    };

    const price = calculatePrice();

    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs items={[{ label: "Simulateur de Prix" }]} />
                    <div className="max-w-3xl mx-auto text-center mt-4">
                        <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <Calculator className="h-4 w-4" />
                            Outil Gratuit
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Simulateur de Prix Climatisation
                        </h1>
                        <p className="text-xl text-slate-300">
                            Estimez le coût de votre PAC air-air pose comprise en 30 secondes
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-3xl">
                    {!showResult ? (
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                            {/* Progress Bar */}
                            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                                <div className="flex items-center gap-4">
                                    <div className={`flex items-center gap-2 ${step >= 1 ? 'text-cyan-600' : 'text-slate-400'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-cyan-600 text-white' : 'bg-slate-200'}`}>1</div>
                                        <span className="hidden sm:inline font-medium">Type</span>
                                    </div>
                                    <div className="flex-1 h-1 bg-slate-200 rounded">
                                        <div className={`h-full bg-cyan-600 rounded transition-all ${step >= 2 ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                    <div className={`flex items-center gap-2 ${step >= 2 ? 'text-cyan-600' : 'text-slate-400'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-cyan-600 text-white' : 'bg-slate-200'}`}>2</div>
                                        <span className="hidden sm:inline font-medium">Surface</span>
                                    </div>
                                    <div className="flex-1 h-1 bg-slate-200 rounded">
                                        <div className={`h-full bg-cyan-600 rounded transition-all ${step >= 3 ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                    <div className={`flex items-center gap-2 ${step >= 3 ? 'text-cyan-600' : 'text-slate-400'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 3 ? 'bg-cyan-600 text-white' : 'bg-slate-200'}`}>3</div>
                                        <span className="hidden sm:inline font-medium">Options</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                {/* Step 1: Type */}
                                {step === 1 && (
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                            Quel type d'installation souhaitez-vous ?
                                        </h2>
                                        <div className="grid gap-4">
                                            {[
                                                { value: "monosplit", label: "Mono-split (1 pièce)", desc: "1 unité intérieure raccordée à 1 groupe extérieur. Idéal pour un salon ou une chambre seule." },
                                                { value: "multisplit", label: "Multi-split (2 à 5 pièces)", desc: "Plusieurs unités intérieures raccordées à un seul groupe extérieur. Idéal pour équiper toute la maison." },
                                                { value: "gainable", label: "Gainable (Invisible)", desc: "Diffusion de l'air par des grilles au plafond, système caché dans les combles. Esthétique Premium." },
                                            ].map((type) => (
                                                <button
                                                    key={type.value}
                                                    onClick={() => {
                                                        setInstallType(type.value as InstallationType);
                                                        setStep(2);
                                                    }}
                                                    className={`p-4 border-2 rounded-xl text-left transition-all ${installType === type.value
                                                        ? 'border-cyan-500 bg-cyan-50'
                                                        : 'border-slate-200 hover:border-cyan-300'
                                                        }`}
                                                >
                                                    <div className="font-bold text-slate-900">{type.label}</div>
                                                    <div className="text-sm text-slate-500 mt-1">{type.desc}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Surface */}
                                {step === 2 && (
                                    <div>
                                        <button onClick={() => setStep(1)} className="text-sm text-slate-500 hover:text-cyan-600 mb-4">
                                            ← Retour
                                        </button>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                                            Quelle est la surface totale à climatiser ?
                                        </h2>
                                        <div className="grid gap-4">
                                            {[
                                                { value: "petite", label: "Moins de 40 m²", desc: "Studio, petit appartement ou pièce unique." },
                                                { value: "moyenne", label: "De 40 à 80 m²", desc: "Appartement standard ou partie de maison." },
                                                { value: "grande", label: "Plus de 80 m²", desc: "Grande maison nécessitant une puissance importante." },
                                            ].map((s) => (
                                                <button
                                                    key={s.value}
                                                    onClick={() => {
                                                        setSurface(s.value as SurfaceArea);
                                                        setStep(3);
                                                    }}
                                                    className={`p-4 border-2 rounded-xl text-left transition-all ${surface === s.value
                                                        ? 'border-cyan-500 bg-cyan-50'
                                                        : 'border-slate-200 hover:border-cyan-300'
                                                        }`}
                                                >
                                                    <div className="font-bold text-slate-900">{s.label}</div>
                                                    <div className="text-sm text-slate-500 mt-1">{s.desc}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Options */}
                                {step === 3 && (
                                    <div>
                                        <button onClick={() => setStep(2)} className="text-sm text-slate-500 hover:text-cyan-600 mb-4">
                                            ← Retour
                                        </button>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-2">
                                            Options de confort supplémentaires
                                        </h2>
                                        <p className="text-slate-500 mb-6">(Facultatif, vous pouvez passer cette étape)</p>
                                        <div className="grid gap-3 mb-8">
                                            {Object.entries(OPTIONS).map(([key, opt]) => (
                                                <label
                                                    key={key}
                                                    className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${selectedOptions.includes(key)
                                                        ? 'border-cyan-500 bg-cyan-50'
                                                        : 'border-slate-200 hover:border-cyan-300'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedOptions.includes(key)}
                                                            onChange={() => toggleOption(key)}
                                                            className="w-5 h-5 text-cyan-600 rounded border-slate-300 focus:ring-cyan-500"
                                                        />
                                                        <span className="font-medium text-slate-900">{opt.label}</span>
                                                    </div>
                                                    <span className="text-cyan-600 font-bold">+{opt.cost}€</span>
                                                </label>
                                            ))}
                                        </div>

                                        <Button
                                            onClick={handleSubmit}
                                            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white h-14 text-lg rounded-xl"
                                        >
                                            Voir mon estimation
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
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                        <CheckCircle className="h-8 w-8 text-green-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Votre estimation budgétaire</h2>
                                    <p className="text-slate-500 capitalize">Installation {installType} • Surface {surface}</p>
                                </div>

                                {price && (
                                    <div className="bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-2xl p-6 text-center mb-8">
                                        <div className="text-sm uppercase tracking-wider mb-2 opacity-90">Estimation Matériel & Pose</div>
                                        <div className="text-4xl md:text-5xl font-bold">
                                            {formatPrice(price.min)} - {formatPrice(price.max)}
                                        </div>
                                    </div>
                                )}

                                {/* Breakdown */}
                                <div className="bg-slate-50 rounded-xl p-4 mb-6">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Euro className="h-5 w-5 text-cyan-600" />
                                        Détail du calcul
                                    </h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between">
                                            <span className="text-slate-600 capitalize">Système {installType} ({surface})</span>
                                            <span className="font-medium">{formatPrice(PRICE_MATRIX[installType!][surface!].min)} - {formatPrice(PRICE_MATRIX[installType!][surface!].max)}</span>
                                        </li>
                                        {selectedOptions.map(opt => (
                                            <li key={opt} className="flex justify-between border-t border-slate-200 pt-2 mt-2">
                                                <span className="text-slate-600">{OPTIONS[opt as keyof typeof OPTIONS].label}</span>
                                                <span className="font-medium text-cyan-700">+{formatPrice(OPTIONS[opt as keyof typeof OPTIONS].cost)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Info Box */}
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                                    <div className="flex gap-3">
                                        <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                                        <div className="text-sm text-blue-800">
                                            <span className="block mb-2">
                                                <strong>Aides financières :</strong> Le coût réel de votre installation peut être réduit grâce aux subventions de l'État (Primes CEE) et à la TVA réduite à 5,5%.
                                            </span>
                                            <Link href="/calculateur-aides" className="inline-flex items-center text-blue-700 font-bold hover:underline">
                                                Calculer mes aides climatisation <ArrowRight className="ml-1 w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Button
                                        onClick={() => {
                                            setShowResult(false);
                                            setStep(1);
                                            setInstallType(null);
                                            setSurface(null);
                                            setSelectedOptions([]);
                                        }}
                                        variant="outline"
                                        className="h-14 font-medium"
                                    >
                                        Refaire une simulation
                                    </Button>
                                    <Link href="/devis" className="block w-full">
                                        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white h-14 font-bold text-lg">
                                            Recevoir 3 devis précis
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Trust signals */}
                            <div className="bg-white rounded-xl border border-slate-200 p-6 flex items-start gap-4">
                                <div className="bg-slate-100 p-2 rounded-full shrink-0">
                                    <Info className="w-5 h-5 text-slate-500" />
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    <strong>Pourquoi demander des devis ?</strong> Cette estimation est indicative. Seule une visite technique à domicile (100% gratuite) par un installateur RGE permet un dimensionnement précis des puissances en kW de vos unités intérieures et extérieures, et un chiffrage de l'installation frigorifique au réel.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* SEO Content */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl prose prose-slate">
                    <h2>Comment fonctionne le simulateur de prix climatisation ?</h2>
                    <p>
                        Notre outil de simulation vous permet d'obtenir une <strong>estimation réaliste du budget de votre future PAC air-air (climatisation réversible)</strong>. Les prix affichés sont basés sur les tarifs moyens constatés en France en 2026, incluant le matériel de grandes marques (Daikin, Mitsubishi, Atlantic) et l'installation par un professionnel RGE.
                    </p>

                    <h3>Les facteurs qui influencent le tarif :</h3>
                    <ul>
                        <li><strong>Le type de technologie :</strong> Une unité murale mono-split est la solution la plus économique, tandis qu'un système <Link href="/glossaire" className="text-cyan-600">gainable</Link> (intégré dans les combles) sera plus onéreux en raison des travaux de plafonds nécessaires.</li>
                        <li><strong>La configuration du logement :</strong> La complexité pour passer les liaisons frigorifiques entre le groupe extérieur et les splits intérieurs impacte directement le temps de main-d'œuvre de l'installateur.</li>
                        <li><strong>La puissance nécessaire :</strong> Plus la surface à chauffer et à rafraîchir est grande, plus l'équipement doit être puissant (calcul en kW) et performant (voir les taux <Link href="/glossaire" className="text-cyan-600">SEER et SCOP</Link>).</li>
                        <li><strong>Les options de confort :</strong> Les filtres purificateurs d'air avancés, le pilotage à distance via Wi-Fi ou des designs spécifiques peuvent ajouter un surcoût.</li>
                    </ul>

                    <p>
                        Pour découvrir le détail étape par étape des coûts de matériel et de main d'œuvre, nous vous invitons à consulter notre <Link href="/guides/prix-climatisation-2026" className="text-cyan-600 font-bold hover:underline">Guide Complet des Prix Climatisation 2026</Link>.
                    </p>
                </div>
            </section>
        </div>
    );
}
