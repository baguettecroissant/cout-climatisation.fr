import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { Star, CheckCircle, XCircle, Shield, ArrowRight, HelpCircle, Thermometer, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BRANDS, getBrandBySlug, getAllBrandSlugs } from "@/data/brands";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllBrandSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const brand = getBrandBySlug(slug);

    if (!brand) {
        return { title: "Marque non trouvée" };
    }

    return {
        title: brand.seoTitle,
        description: brand.seoDescription,
        alternates: {
            canonical: `https://www.cout-climatisation.fr/marques/${slug}`,
        },
        openGraph: {
            title: brand.seoTitle,
            description: brand.seoDescription,
            url: `https://www.cout-climatisation.fr/marques/${slug}`,
            siteName: "Cout-Climatisation.fr",
        },
    };
}

function StarRating({ rating, label }: { rating: number; label: string }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-slate-300 w-20">{label}</span>
            <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`h-4 w-4 ${star <= rating ? "fill-amber-400 text-amber-400" : "fill-slate-500 text-slate-500"}`}
                    />
                ))}
            </div>
        </div>
    );
}

const TYPE_LABELS: Record<string, string> = {
    "mono-split": "Mono-Split",
    "multi-split": "Multi-Split",
    "gainable": "Gainable",
    "console": "Console",
};

export default async function BrandPage({ params }: PageProps) {
    const { slug } = await params;
    const brand = getBrandBySlug(slug);

    if (!brand) {
        notFound();
    }

    const otherBrands = BRANDS.filter((b) => b.slug !== slug);

    // FAQPage Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": brand.faq.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
    };

    // Product Schema
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `Climatisation ${brand.name}`,
        "brand": {
            "@type": "Brand",
            "name": brand.name,
        },
        "description": brand.tagline,
        "review": {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": brand.qualityRating,
                "bestRating": 5,
            },
            "author": {
                "@type": "Organization",
                "name": "Cout-Climatisation.fr",
            },
        },
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <Breadcrumbs
                        items={[
                            { label: "Marques", href: "/marques" },
                            { label: brand.name },
                        ]}
                    />
                    <div className="mt-6 max-w-4xl">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-5xl">{brand.countryFlag}</span>
                            <div>
                                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Climatisation {brand.name}</h1>
                                <p className="text-slate-400 mt-1">Fondée en {brand.founded} • {brand.country}</p>
                            </div>
                        </div>
                        <p className="text-xl text-cyan-300 font-medium mb-6">{brand.tagline}</p>

                        {/* Ratings */}
                        <div className="flex flex-wrap gap-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                            <StarRating rating={brand.qualityRating} label="Qualité" />
                            <StarRating rating={brand.savRating} label="SAV" />
                            <StarRating rating={brand.priceRating} label="Prix" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Description + Prices */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">À propos de {brand.name}</h2>
                                <div className="prose prose-slate max-w-none prose-a:text-cyan-600">
                                    {brand.description.split("\n\n").map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Models */}
                            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Thermometer className="h-6 w-6 text-cyan-500" />
                                    Modèles &amp; Prix {brand.name} 2026
                                </h2>
                                <div className="space-y-4">
                                    {brand.models.map((model) => (
                                        <div
                                            key={model.name}
                                            className="border border-slate-200 rounded-xl p-4 hover:border-cyan-300 transition-colors"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                                <h3 className="font-bold text-slate-900">{model.name}</h3>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full capitalize">
                                                        {TYPE_LABELS[model.type] || model.type}
                                                    </span>
                                                    <span className="font-bold text-cyan-600">{model.priceRange}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {model.features.map((feature, i) => (
                                                    <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pros & Cons */}
                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5" />
                                        Points forts de {brand.name}
                                    </h3>
                                    <ul className="space-y-2">
                                        {brand.pros.map((pro, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                                                <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" />
                                                {pro}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <XCircle className="h-5 w-5" />
                                        Points faibles
                                    </h3>
                                    <ul className="space-y-2">
                                        {brand.cons.map((con, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                                                <XCircle className="h-4 w-4 shrink-0 mt-0.5" />
                                                {con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <HelpCircle className="h-6 w-6 text-cyan-500" />
                                    Questions fréquentes sur {brand.name}
                                </h2>
                                <div className="space-y-4">
                                    {brand.faq.map((item, i) => (
                                        <div key={i} className="border-b border-slate-100 pb-4 last:border-0">
                                            <h3 className="font-bold text-slate-900 mb-2">{item.question}</h3>
                                            <p className="text-slate-600">{item.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Price Summary */}
                            <div className="bg-white rounded-2xl shadow-md p-6 mb-6 sticky top-24">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Wind className="h-5 w-5 text-cyan-500" />
                                    Prix {brand.name} 2026
                                </h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                        <span className="text-slate-600">Mono-split</span>
                                        <span className="font-bold text-slate-900">{brand.priceRange.monoSplit}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                                        <span className="text-slate-600">Multi-split</span>
                                        <span className="font-bold text-slate-900">{brand.priceRange.multiSplit}</span>
                                    </div>
                                    {brand.priceRange.gainable && (
                                        <div className="flex justify-between items-center p-3 bg-cyan-50 rounded-lg border border-cyan-100">
                                            <span className="text-cyan-700">Gainable</span>
                                            <span className="font-bold text-cyan-800">{brand.priceRange.gainable}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                                    <Shield className="h-4 w-4" />
                                    Garantie : {brand.warranty}
                                </div>

                                <Link href="/devis">
                                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white h-12 rounded-xl">
                                        Devis gratuit {brand.name}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>

                                <Link href="/calculateur-aides" className="block mt-3">
                                    <Button variant="outline" className="w-full h-10 rounded-xl">
                                        Calculer mes aides MaPrimeRénov&apos;
                                    </Button>
                                </Link>

                                <Link href="/annuaire" className="block mt-3 text-center text-sm text-cyan-600 hover:underline">
                                    📍 Trouver un installateur {brand.name} près de chez moi
                                </Link>
                            </div>

                            {/* Other Brands */}
                            <div className="bg-slate-100 rounded-2xl p-6">
                                <h3 className="font-bold text-slate-900 mb-4">Comparer avec</h3>
                                <div className="space-y-2">
                                    {otherBrands.map((other) => (
                                        <Link
                                            key={other.slug}
                                            href={`/marques/${other.slug}`}
                                            className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                                        >
                                            <span className="text-2xl">{other.countryFlag}</span>
                                            <div>
                                                <div className="font-medium text-slate-900">{other.name}</div>
                                                <div className="text-xs text-slate-500">{other.priceRange.monoSplit}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                <Link
                                    href="/marques"
                                    className="block mt-4 text-center text-sm text-cyan-600 hover:underline"
                                >
                                    Voir le comparatif complet →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Links / Maillage Interne */}
            <section className="py-12 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">À lire aussi</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { href: "/guides", label: "📗 Guides Climatisation" },
                            { href: "/simulateur-prix", label: "🧮 Simulateur de prix" },
                            { href: "/faq", label: "❓ FAQ Climatisation" },
                            { href: "/annuaire", label: "📍 Annuaire installateurs RGE" },
                        ].map((guide) => (
                            <Link
                                key={guide.href}
                                href={guide.href}
                                className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-500 hover:shadow-md transition-all group"
                            >
                                <span className="font-medium text-slate-700 group-hover:text-cyan-700">{guide.label}</span>
                                <ArrowRight className="h-4 w-4 text-cyan-600 ml-auto" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
