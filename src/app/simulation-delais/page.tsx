import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, FileText, ArrowRight, Truck, CheckCircle, PenTool } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Délais Installation Climatisation 2026 | Combien de Temps ?",
    description: "Combien de temps faut-il pour installer une climatisation réversible ? Découvrez les délais moyens allant de la visite technique à la mise en service de votre PAC air-air.",
};

export default function DelaisPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 py-8">
                    <Link href="/" className="inline-flex items-center text-slate-500 hover:text-cyan-600 transition-colors mb-6 font-medium">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Retour à l'accueil
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                        Délais d'installation Climatisation : <span className="text-cyan-600">À quoi s'attendre ?</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl">
                        De la demande de devis à l'air frais dans votre salon, découvrez le calendrier typique d'un projet de pompe à chaleur air-air.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Summary Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Calendar className="h-6 w-6 text-cyan-500" />
                                Délais d'intervention (Moyennes 2026)
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-100 bg-slate-50">
                                            <th className="py-4 px-4 font-semibold text-slate-900 rounded-tl-lg">Type d'installation</th>
                                            <th className="py-4 px-4 font-semibold text-slate-900">Programmation chantier</th>
                                            <th className="py-4 px-4 font-semibold text-slate-900 rounded-tr-lg">Durée de Pose</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="py-4 px-4 text-slate-800 font-medium">Climatisation Mono-split<br /><span className="text-sm text-slate-500 font-normal">1 pièce (ex: chambre, salon)</span></td>
                                            <td className="py-4 px-4 text-slate-600 font-medium">2 à 3 semaines</td>
                                            <td className="py-4 px-4 text-green-600 font-bold">1/2 à 1 journée</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="py-4 px-4 text-slate-800 font-medium">Climatisation Multi-split<br /><span className="text-sm text-slate-500 font-normal">2 à 5 pièces</span></td>
                                            <td className="py-4 px-4 text-slate-600 font-medium">3 à 4 semaines</td>
                                            <td className="py-4 px-4 text-cyan-600 font-bold">1 à 2 jours</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="py-4 px-4 text-slate-800 font-medium">Climatisation Gainable<br /><span className="text-sm text-slate-500 font-normal">Intégrée aux combles / faux-plafonds</span></td>
                                            <td className="py-4 px-4 text-slate-600 font-medium">4 à 6 semaines</td>
                                            <td className="py-4 px-4 text-blue-600 font-bold">3 à 5 jours</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 bg-orange-50 p-5 rounded-xl border border-orange-100 flex items-start gap-4">
                                <Calendar className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                                <div className="text-sm text-orange-900">
                                    <strong className="block mb-1 text-base">La saisonnalité est cruciale !</strong>
                                    Si vous validez votre devis entre mai et juillet (pleine saison), les délais de planification des chantiers peuvent doubler (jusqu'à 2 mois d'attente) à cause de la très forte demande estivale. <strong>L'idéal est de planifier ses travaux entre septembre et avril.</strong>
                                </div>
                            </div>
                        </div>

                        {/* Process Steps */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-8">Les 4 étapes clés de votre projet</h3>

                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-cyan-100 text-cyan-600 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <FileText className="w-4 h-4" />
                                    </div>
                                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 shadow-sm bg-white">
                                        <div className="text-xs font-bold text-cyan-600 uppercase tracking-wide mb-1">Semaine 1</div>
                                        <h4 className="font-bold text-slate-900 mb-2">Visite technique & Devis</h4>
                                        <p className="text-slate-600 text-sm">L'installateur se déplace pour réaliser le bilan thermique, dimensionner l'installation (kW) et repérer les futurs passages de goulottes et de câbles.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-cyan-100 text-cyan-600 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 shadow-sm bg-white">
                                        <div className="text-xs font-bold text-cyan-600 uppercase tracking-wide mb-1">Semaines 2-3</div>
                                        <h4 className="font-bold text-slate-900 mb-2">Validation & Dossiers d'aides</h4>
                                        <p className="text-slate-600 text-sm">Vous validez le devis et créez immédiatement votre dossier de Prime CEE <strong>avant</strong> de verser l'acompte. Commande du matériel (Daikin, Mitsubishi...).</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-cyan-100 text-cyan-600 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <PenTool className="w-4 h-4" />
                                    </div>
                                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-200 shadow-sm bg-white">
                                        <div className="text-xs font-bold text-cyan-600 uppercase tracking-wide mb-1">Semaine 4-5</div>
                                        <h4 className="font-bold text-slate-900 mb-2">Perçage, fixation & tirage au vide</h4>
                                        <p className="text-slate-600 text-sm">Le jour J, l'artisan perce les murs (carottage), installe les unités intérieures, fixe le compresseur extérieur et passe les liaisons frigorifiques en cuivre.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-green-100 text-green-600 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <Truck className="w-4 h-4" />
                                    </div>
                                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border-2 border-green-200 shadow-sm bg-green-50">
                                        <div className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">Fin du chantier</div>
                                        <h4 className="font-bold text-slate-900 mb-2">Mise en service frigorifique</h4>
                                        <p className="text-slate-800 text-sm">Une fois le circuit étanche vérifié, le technicien libère le gaz réfrigérant. La climatisation est prête, l'artisan vous explique le fonctionnement de la télécommande.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl text-center">
                                <h3 className="text-2xl font-bold mb-4">Urgence Canicule ?</h3>
                                <p className="text-slate-300 mb-8 leading-relaxed">
                                    Vérifiez les plannings et les stocks (Daikin, Atlantic...) des dépanneurs et installateurs locaux RGE proches de chez vous.
                                </p>

                                <div className="space-y-4 mb-8 text-left bg-white/10 p-5 rounded-xl border border-white/10">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
                                        <span className="text-sm font-medium">Recherche d'artisans libres</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
                                        <span className="text-sm font-medium">Créneaux d'interventions rapides</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
                                        <span className="text-sm font-medium">Visite technique sous 48h/72h</span>
                                    </div>
                                </div>

                                <Link href="/devis" className="block">
                                    <Button size="lg" className="w-full bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/30 text-white font-bold h-14 rounded-xl transition-all hover:scale-105">
                                        Comparer les disponibilités <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <p className="mt-5 text-xs text-slate-400 font-medium uppercase tracking-wider">
                                    Service gratuit • Réponse rapide
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
