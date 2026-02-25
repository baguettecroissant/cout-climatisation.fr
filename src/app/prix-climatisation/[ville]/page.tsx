import { notFound } from "next/navigation";
import { getCityFromSlug, getAllCitySlugs, generateCityMetadata } from "@/lib/seo-utils";
import { getCityIntro } from "@/lib/text-utils";
import { CityHero } from "@/components/features/CityHero";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { DepartmentBreadcrumb } from "@/components/psea/DepartmentBreadcrumb";
import { NearbyCitiesModule } from "@/components/psea/NearbyCitiesModule";
import { Metadata } from "next";
import { LocalAidsModule } from "@/components/psea/LocalAidsModule";
import { StepsModule } from "@/components/psea/StepsModule";
import { GuidesWidget } from "@/components/seo/GuidesWidget";
import Link from "next/link";
import { generateSpintaxContent } from "@/lib/spintax";

// Next.js 15 params
type Props = {
    params: Promise<{ ville: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { ville } = await params;
    const city = getCityFromSlug(ville);
    if (!city) return {};
    return generateCityMetadata(city);
}

// Prestations disponibles (à enrichir plus tard)
const PRESTATIONS = [
    { slug: "installation", label: "Installation" },
    { slug: "entretien", label: "Entretien" },
    { slug: "gainable", label: "Gainable" },
    { slug: "daikin", label: "Daikin" },
    { slug: "mono-split", label: "Mono-Split" },
    { slug: "multi-split", label: "Multi-Split" },
];

export default async function CityPage({ params }: Props) {
    const { ville } = await params;
    const city = getCityFromSlug(ville);

    if (!city) {
        notFound();
    }

    // Dynamic Text Logic
    const introText = getCityIntro(city);

    return (
        <div className="min-h-screen bg-white">
            <SchemaOrg city={city} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": `Quel est le prix moyen d'une climatisation à ${city.name} ?`,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": `Le prix dépend du type de système choisi. À ${city.name}, pour un mono-split, comptez entre 1 500 € et 3 000 €. Pour un multi-split, le budget se situe généralement entre 4 000 € et 8 000 €, pose incluse.`
                                }
                            },
                            {
                                "@type": "Question",
                                "name": `Existe-t-il des aides à ${city.name} (${city.department_code}) ?`,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": `Oui, pour une pompe à chaleur air-air réversible, vous pouvez prétendre à MaPrimeRénov' et au crédit d'impôt transition énergétique. Le département ${city.department_name} peut également proposer des aides locales spécifiques.`
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Combien de temps pour l'installation ?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "L'installation d'un mono-split prend généralement une demi-journée. Pour un système multi-split ou gainable, comptez 1 à 3 jours selon la complexité du chantier."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": `Où trouver un installateur de climatisation à ${city.name} ?`,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": `Nos partenaires installateurs certifiés RGE assurent l'installation et l'entretien de votre climatisation. En passant par notre comparateur, vous êtes mis en relation avec des professionnels locaux qui garantissent une intervention rapide dans le ${city.department_code}.`
                                }
                            }
                        ]
                    })
                }}
            />

            <div className="bg-slate-50 pt-4 pb-0">
                <div className="container mx-auto px-4 max-w-4xl">
                    <DepartmentBreadcrumb city={city} />
                </div>
            </div>

            <CityHero city={city} />

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Intro Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        La climatisation à {city.name}
                    </h2>
                    {generateSpintaxContent(city)}
                </section>

                {/* Prestations Links — SEO 2D */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Nos services climatisation à {city.name}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {PRESTATIONS.map((prestation) => (
                            <Link
                                key={prestation.slug}
                                href={`/prix-climatisation/${ville}/${prestation.slug}`}
                                className="block bg-cyan-50 hover:bg-cyan-100 text-cyan-800 hover:text-cyan-900 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center border border-cyan-200 hover:border-cyan-300"
                            >
                                {prestation.label}
                            </Link>
                        ))}
                    </div>
                </section>

                <StepsModule city={city} />

                {/* Quote Widget Section */}
                <section className="mb-16" id="devis">
                    <div className="bg-cyan-50 p-6 md:p-8 rounded-2xl border border-cyan-100">
                        <div className="max-w-2xl mx-auto text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                Comparez les tarifs à {city.name}
                            </h2>
                            <p className="text-slate-600 font-medium">
                                Obtenez jusqu&apos;à 3 devis gratuits d&apos;installateurs certifiés RGE à {city.name} ({city.zip}).
                                <br />
                                <span className="text-sm text-slate-500 font-normal">Réponse sous 48h • Sans engagement</span>
                            </p>
                        </div>

                        <ViteUnDevisWidget />
                    </div>
                </section>

                <LocalAidsModule city={city} />

                <GuidesWidget />

                {/* FAQ Section */}
                <section className="mb-16 mt-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Questions fréquentes à {city.name}</h2>
                    <div className="space-y-6">
                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Quel est le prix moyen d&apos;une climatisation à {city.name} ?</h3>
                            <p className="text-slate-600">
                                Le prix dépend du type de système choisi. À {city.name}, pour un mono-split, comptez entre 1 500 € et 3 000 €. Pour un multi-split, le budget se situe généralement entre 4 000 € et 8 000 €, pose incluse.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Existe-t-il des aides à {city.name} ({city.department_code}) ?</h3>
                            <p className="text-slate-600">
                                Oui, pour une pompe à chaleur air-air réversible, vous pouvez prétendre à MaPrimeRénov&apos; et aux CEE (Certificats d&apos;Économies d&apos;Énergie). Le département {city.department_name} peut également proposer des aides locales spécifiques.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Combien de temps pour l&apos;installation ?</h3>
                            <p className="text-slate-600">
                                Les installateurs du secteur {city.zip} interviennent généralement rapidement. Comptez une demi-journée pour un mono-split, et 1 à 3 jours pour un système multi-split ou gainable selon la complexité du chantier.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Quelle puissance de climatisation pour mon logement à {city.name} ?</h3>
                            <p className="text-slate-600">
                                La puissance nécessaire dépend de la surface, de l&apos;isolation et de l&apos;exposition de votre logement. En règle générale, comptez 100W par m² pour une pièce bien isolée. Un bilan thermique réalisé par un professionnel RGE vous donnera la réponse exacte.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <NearbyCitiesModule city={city} />
        </div>
    );
}
