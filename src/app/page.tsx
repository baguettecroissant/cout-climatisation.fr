import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Star, MapPin, Euro, Clock, HeartHandshake, BookOpen, Truck, Award } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getAllGuides } from "@/data/guides-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.cout-climatisation.fr',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 border-b border-slate-200 py-20 lg:py-0 lg:h-[600px] flex items-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-senior.png"
            alt="Couple senior heureux utilisant un climatisation moderne"
            fill
            className="object-cover opacity-30 sm:opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 fill-cyan-400 text-cyan-400" />
              <span>Comparateur N°1 en France (2026)</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Le Prix Juste pour votre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Climatisation</span>
            </h1>

            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Ne payez pas trop cher votre autonomie. Comparez gratuitement les devis d'artisans certifiés RGE près de chez vous.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/devis">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white text-lg px-8 h-14 rounded-xl shadow-lg shadow-cyan-900/20 w-full sm:w-auto transition-all transform hover:scale-105">
                  Comparer les prix gratuitement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <div className="flex items-center gap-3 text-slate-300 px-4">
                <div className="text-sm">
                  <span className="font-bold text-white block">1 500+</span>
                  familles accompagnées
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-slate-500 text-sm font-medium uppercase tracking-wider">
            <div className="flex items-center gap-2"><Award className="h-5 w-5 text-cyan-600" /> Artisans RGE Vérifiés</div>
            <div className="flex items-center gap-2"><Euro className="h-5 w-5 text-cyan-600" /> Devis Gratuits sans engagement</div>
            <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-cyan-600" /> Réponse sous 48h</div>
            <div className="flex items-center gap-2"><Shield className="h-5 w-5 text-cyan-600" /> Éligible MaPrimeRénov'</div>
          </div>
        </div>
      </section>

      {/* Value Stack Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi comparer avant d'installer ?</h2>
            <p className="text-slate-600 text-lg">
              Le marché du climatisation est complexe. Les écarts de prix peuvent aller du simple au triple pour un même modèle. Notre mission est de vous redonner le pouvoir.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Euro className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Économisez jusqu'à 30%</h3>
              <p className="text-slate-600">
                En mettant en concurrence les installateurs locaux, vous obtenez mécaniquement le meilleur tarif pour votre équipement.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fiabilité Garantie</h3>
              <p className="text-slate-600">
                Nous ne référençons que des artisans assurés (décennale) et certifiés, sélectionnés pour leur sérieux et leur proximité.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aides déduites</h3>
              <p className="text-slate-600">
                MaPrimeRénov', Crédit d'Impôt, APA... Nos partenaires intègrent directement les aides auxquelles vous avez droit dans leurs devis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block - Rich Text */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 prose prose-lg prose-slate">
            <h2 className="text-3xl font-extrabold text-slate-900 not-prose mb-8">
              Quel est le prix moyen d'un climatisation en 2026 ?
            </h2>
            <p>
              L'installation d'un climatisation est un investissement stratégique pour le maintien à domicile. Contrairement aux idées reçues, c'est une solution souvent bien plus économique qu'un déménagement ou qu'une place en résidence senior.
            </p>
            <p>
              Le coût varie principalement selon la configuration de votre escalier :
            </p>
            <ul className="not-prose grid gap-4 my-8">
              <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 min-w-[120px]">Escalier Droit</span>
                <span className="text-slate-600">Entre <strong>2 500 € et 5 000 €</strong> pose comprise. C'est le modèle le plus simple et rapide à installer.</span>
              </li>
              <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 min-w-[120px]">Escalier Tournant</span>
                <span className="text-slate-600">Entre <strong>6 000 € et 12 000 €</strong>. Nécessite une fabrication sur-mesure du rail pour épouser les courbes.</span>
              </li>
              <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 min-w-[120px]">Extérieur</span>
                <span className="text-slate-600">Entre <strong>4 000 € et 10 000 €</strong>. Traitement anti-intempéries et étanchéité renforcée.</span>
              </li>
            </ul>
            <p>
              <strong>Attention :</strong> Ces prix sont donnés avant déduction des aides. Avec <span className="text-cyan-600 font-bold">MaPrimeRénov'</span>, vous pouvez obtenir jusqu'à 70% de financement sur ces montants !
              Pour en savoir plus sur les fabricants, consultez notre <Link href="/marques" className="text-cyan-600 font-medium underline">comparatif des marques de climatisation</Link>.
            </p>
          </div>

          <div className="lg:w-1/3 space-y-8">
            {/* Sidebar Widget 1 */}
            <div className="bg-cyan-50 border border-cyan-100 p-6 rounded-2xl">
              <h3 className="font-bold text-cyan-900 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" /> Installation Rapide
              </h3>
              <p className="text-sm text-cyan-800 mb-4">
                Une fois le devis signé, l'installation se fait généralement en <strong>une demi-journée</strong> pour un escalier droit. Aucune dégradation de vos murs n'est à prévoir.
              </p>
              <Link href="/simulation-delais" className="block w-full">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  Vérifier les délais
                </Button>
              </Link>
            </div>

            {/* Sidebar Widget 2 - Guides */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 bg-slate-50">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-cyan-600" /> Guides Récents
                </h3>
              </div>
              <div className="divide-y divide-slate-100">
                {getAllGuides().slice(0, 3).map((guide) => (
                  <Link key={guide.slug} href={`/guides/${guide.slug}`} className="flex gap-4 p-4 hover:bg-slate-50 transition-colors group">
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                      {guide.image ? (
                        <Image
                          src={guide.image}
                          alt={guide.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                          <BookOpen className="h-8 w-8" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-cyan-600 transition-colors line-clamp-2 mb-1">
                        {guide.title}
                      </h4>
                      <p className="text-xs text-slate-500">{guide.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-slate-50 text-center">
                <Link href="/guides" className="text-sm font-medium text-cyan-600 hover:text-cyan-700">
                  Voir tous les articles →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking - Departments Grid */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Trouvez un installateur près de chez vous</h2>
              <p className="text-slate-400">
                Notre réseau couvre 100% du territoire français. Sélectionnez votre département pour accéder à l'annuaire des professionnels agréés.
              </p>
            </div>
            <Link href="/annuaire" className="hidden md:inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium mt-4 md:mt-0">
              Voir tout l'annuaire <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link href="/annuaire/paris-75" className="dept-card">Paris (75)</Link>
            <Link href="/annuaire/seine-et-marne-77" className="dept-card">Seine-et-Marne (77)</Link>
            <Link href="/annuaire/yvelines-78" className="dept-card">Yvelines (78)</Link>
            <Link href="/annuaire/essonne-91" className="dept-card">Essonne (91)</Link>
            <Link href="/annuaire/hauts-de-seine-92" className="dept-card">Hauts-de-Seine (92)</Link>
            <Link href="/annuaire/seine-saint-denis-93" className="dept-card">Seine-St-Denis (93)</Link>
            <Link href="/annuaire/val-de-marne-94" className="dept-card">Val-de-Marne (94)</Link>
            <Link href="/annuaire/val-d-oise-95" className="dept-card">Val-d'Oise (95)</Link>

            <Link href="/annuaire/rhone-69" className="dept-card">Rhône (69)</Link>
            <Link href="/annuaire/nord-59" className="dept-card">Nord (59)</Link>
            <Link href="/annuaire/gironde-33" className="dept-card">Gironde (33)</Link>
            <Link href="/annuaire/bouches-du-rhone-13" className="dept-card">Bouches-du-Rhône (13)</Link>
            <Link href="/annuaire/haute-garonne-31" className="dept-card">Haute-Garonne (31)</Link>
            <Link href="/annuaire/loire-atlantique-44" className="dept-card">Loire-Atlantique (44)</Link>
            <Link href="/annuaire/seine-maritime-76" className="dept-card">Seine-Maritime (76)</Link>
            <Link href="/annuaire/herault-34" className="dept-card">Hérault (34)</Link>
            <Link href="/annuaire/isere-38" className="dept-card">Isère (38)</Link>
            <Link href="/annuaire/var-83" className="dept-card">Var (83)</Link>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/annuaire" className="text-cyan-400 font-medium">Voir tous les départements →</Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Questions Fréquentes</h2>

          {/* FAQPage Schema.org */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Quelles sont les aides disponibles en 2026 ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "L'aide principale est MaPrimeRénov', qui finance jusqu'à 50% ou 70% des travaux selon vos revenus. Vous pouvez également bénéficier d'un crédit d'impôt de 25% si vous n'êtes pas éligible à MaPrimeRénov', ainsi que d'une TVA réduite à 5,5%."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Le climatisation abîme-t-il les murs ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Non, dans 99% des cas, le rail est fixé directement sur les marches de l'escalier, pas au mur. Cela garantit une solidité maximale et évite de percer vos cloisons. L'installation est propre et sans gros travaux."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Peut-on installer un climatisation dehors ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Tout à fait. Il existe des modèles Outdoor spécialement conçus pour résister à la pluie, au gel et aux UV. Ils sont livrés avec une housse de protection et une clé de verrouillage pour la sécurité."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quelle est la durée de vie de l'appareil ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Un climatisation de marque reconnue (Stannah, Otolift, Handicare...) a une durée de vie moyenne de 15 à 20 ans avec un entretien annuel régulier. Les batteries se changent généralement tous les 3 à 5 ans."
                    }
                  }
                ]
              })
            }}
          />

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">Quelles sont les aides disponibles en 2026 ?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                L'aide principale est <strong>MaPrimeRénov'</strong>, qui finance jusqu'à 50% ou 70% des travaux selon vos revenus. Vous pouvez également bénéficier d'un crédit d'impôt de 25% si vous n'êtes pas éligible à MaPrimeRénov', ainsi que d'une TVA réduite à 5,5%.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">Le climatisation abîme-t-il les murs ?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Non, dans 99% des cas, le rail est fixé directement sur les marches de l'escalier, pas au mur. Cela garantit une solidité maximale et évite de percer vos cloisons. L'installation est propre et sans gros travaux.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">Peut-on installer un climatisation dehors ?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Tout à fait. Il existe des modèles "Outdoor" spécialement conçus pour résister à la pluie, au gel et aux UV. Ils sont livrés avec une housse de protection et une clé de verrouillage pour la sécurité.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">Quelle est la durée de vie de l'appareil ?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Un climatisation de marque reconnue (Stannah, Otolift, Handicare...) a une durée de vie moyenne de 15 à 20 ans avec un entretien annuel régulier. Les batteries se changent généralement tous les 3 à 5 ans.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-8 text-center">
            <Link href="/faq" className="inline-flex items-center text-cyan-600 font-medium hover:underline">
              Consulter notre FAQ complète <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-cyan-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Prêt à retrouver votre liberté ?</h2>
          <p className="text-xl text-cyan-100 mb-10">
            Ne laissez plus vos escaliers décider pour vous. Comparez les solutions dès aujourd'hui.
          </p>
          <Link href="/devis">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100 text-xl px-12 h-16 rounded-full shadow-2xl transition-transform hover:scale-105">
              Lancer ma demande de devis
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
          <p className="mt-6 text-sm text-cyan-200 opacity-80">
            Gratuit • Sans engagement • 3 devis maximum
          </p>
        </div>
      </section>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
