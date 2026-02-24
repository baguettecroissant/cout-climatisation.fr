import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";

const FEATURED_GUIDES = [
    { slug: "prix-climatisation-2026", title: "Prix Climatisation 2026 : Guide Complet" },
    { slug: "devis-climatisation-pieges", title: "7 Pièges à Éviter sur un Devis" },
    { slug: "climatisation-occasion", title: "Climatisation d'Occasion : Bonne Idée ?" },
    { slug: "cout-entretien-climatisation", title: "Coût Entretien Climatisation" },
];

export function GuidesWidget() {
    return (
        <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-cyan-500" />
                Guides utiles pour votre projet
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
                {FEATURED_GUIDES.map((guide) => (
                    <Link
                        key={guide.slug}
                        href={`/guides/${guide.slug}`}
                        className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-cyan-500 hover:shadow-md transition-all group"
                    >
                        <div className="bg-cyan-100 p-2 rounded-lg group-hover:bg-cyan-200 transition-colors shrink-0">
                            <ArrowRight className="h-4 w-4 text-cyan-600" />
                        </div>
                        <span className="font-medium text-slate-700 group-hover:text-cyan-700 text-sm line-clamp-2">
                            {guide.title}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
