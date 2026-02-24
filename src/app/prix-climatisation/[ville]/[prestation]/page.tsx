import { notFound } from "next/navigation";
import { getCityFromSlug } from "@/lib/seo-utils";
import { CityHero } from "@/components/features/CityHero";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { DepartmentBreadcrumb } from "@/components/psea/DepartmentBreadcrumb";
import { NearbyCitiesModule } from "@/components/psea/NearbyCitiesModule";
import { Metadata } from "next";
import Link from "next/link";

// Next.js 15 params
type Props = {
    params: Promise<{ ville: string; prestation: string }>;
};

// Map prestation slugs to display info
const PRESTATION_MAP: Record<string, { title: string; description: string; h1Prefix: string }> = {
    "installation": {
        title: "Installation Climatisation",
        description: "installation d'une climatisation",
        h1Prefix: "Installation Climatisation",
    },
    "entretien": {
        title: "Entretien Climatisation",
        description: "entretien de climatisation",
        h1Prefix: "Entretien Climatisation",
    },
    "gainable": {
        title: "Climatisation Gainable",
        description: "installation d'une climatisation gainable",
        h1Prefix: "Climatisation Gainable",
    },
    "daikin": {
        title: "Climatisation Daikin",
        description: "installation d'une climatisation Daikin",
        h1Prefix: "Climatisation Daikin",
    },
    "mono-split": {
        title: "Climatisation Mono-Split",
        description: "installation d'un mono-split",
        h1Prefix: "Climatisation Mono-Split",
    },
    "multi-split": {
        title: "Climatisation Multi-Split",
        description: "installation d'un multi-split",
        h1Prefix: "Climatisation Multi-Split",
    },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { ville, prestation } = await params;
    const city = getCityFromSlug(ville);
    const prestationInfo = PRESTATION_MAP[prestation];

    if (!city || !prestationInfo) return {};

    return {
        title: `${prestationInfo.title} à ${city.name} (${city.zip}) - Prix & Devis 2026`,
        description: `Comparez les prix pour l'${prestationInfo.description} à ${city.name}. Devis gratuits d'installateurs RGE dans le ${city.department_name}.`,
        alternates: {
            canonical: `https://www.cout-climatisation.fr/prix-climatisation/${city.slug}/${prestation}`,
        },
    };
}

export default async function PrestationPage({ params }: Props) {
    const { ville, prestation } = await params;
    const city = getCityFromSlug(ville);
    const prestationInfo = PRESTATION_MAP[prestation];

    if (!city || !prestationInfo) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": `${prestationInfo.title} à ${city.name}`,
                        "description": `Service d'${prestationInfo.description} à ${city.name} (${city.zip}), ${city.department_name}.`,
                        "areaServed": {
                            "@type": "City",
                            "name": city.name,
                            "containedInPlace": {
                                "@type": "AdministrativeArea",
                                "name": city.department_name
                            }
                        },
                        "provider": {
                            "@type": "Organization",
                            "name": "Cout-Climatisation.fr"
                        }
                    })
                }}
            />

            <div className="bg-slate-50 pt-4 pb-0">
                <div className="container mx-auto px-4 max-w-4xl">
                    <DepartmentBreadcrumb city={city} />
                    {/* Additional breadcrumb for prestation */}
                    <nav className="text-sm text-slate-500 mt-1 mb-4">
                        <Link href={`/prix-climatisation/${ville}`} className="hover:text-cyan-600 transition-colors">
                            Climatisation à {city.name}
                        </Link>
                        <span className="mx-2">›</span>
                        <span className="text-slate-700 font-medium">{prestationInfo.title}</span>
                    </nav>
                </div>
            </div>

            {/* Hero */}
            <section className="bg-gradient-to-br from-cyan-50 to-sky-50 border-b border-cyan-100 py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        {prestationInfo.h1Prefix} à <span className="text-cyan-600">{city.name}</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        Comparez les tarifs pour l&apos;{prestationInfo.description} à {city.name} ({city.zip}).
                        Obtenez jusqu&apos;à 3 devis gratuits d&apos;installateurs RGE dans le {city.department_name}.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Content placeholder — to be enriched with specific prestation data */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Prix {prestationInfo.title} à {city.name} en 2026
                    </h2>
                    <div className="prose prose-lg text-slate-600">
                        <p>
                            Le coût d&apos;une {prestationInfo.description.replace("installation d'une ", "").replace("installation d'un ", "").replace("entretien de ", "")} à <strong>{city.name}</strong> varie en fonction de la surface à climatiser, de la configuration de votre logement et du type d&apos;équipement choisi.
                            Nos installateurs partenaires certifiés RGE interviennent dans tout le département {city.department_name} pour vous proposer les meilleures solutions.
                        </p>
                    </div>
                </section>

                {/* Devis CTA */}
                <section className="mb-16" id="devis">
                    <div className="bg-cyan-50 p-6 md:p-8 rounded-2xl border border-cyan-100">
                        <div className="max-w-2xl mx-auto text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                Devis {prestationInfo.title} à {city.name}
                            </h2>
                            <p className="text-slate-600 font-medium">
                                Comparez les offres des meilleurs installateurs RGE près de chez vous.
                                <br />
                                <span className="text-sm text-slate-500 font-normal">Réponse sous 48h • Sans engagement</span>
                            </p>
                        </div>
                        <ViteUnDevisWidget />
                    </div>
                </section>

                {/* Back to city page */}
                <div className="text-center">
                    <Link
                        href={`/prix-climatisation/${ville}`}
                        className="inline-block text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
                    >
                        ← Tous les services climatisation à {city.name}
                    </Link>
                </div>
            </div>

            <NearbyCitiesModule city={city} />
        </div>
    );
}
