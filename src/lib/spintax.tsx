import React from 'react';
import { City } from '@/types';

// Helper pour hacher le slug d'une ville (pour avoir toujours le même texte pour la même ville)
const getCityHash = (slug: string): number => {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        const char = slug.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
};

export type ClimateZone = 'H1' | 'H2' | 'H3';

// Zones climatiques françaises (H3 = chaud, H2 = tempéré, H1 = froid)
export const getClimateZone = (deptCode: string): ClimateZone => {
    const h3 = ['06', '11', '13', '2A', '2B', '30', '34', '83'];
    const h2 = ['09', '12', '16', '17', '22', '24', '29', '31', '32', '33', '35', '40', '44', '47', '49', '56', '64', '65', '79', '81', '82', '85'];

    if (h3.includes(deptCode)) return 'H3';
    if (h2.includes(deptCode)) return 'H2';
    return 'H1';
};

// Spintax dynamique selon la thématique (prestation) et la ville
export const generateSpintaxContent = (city: City, prestation?: string): React.ReactElement => {
    const hash = getCityHash(city.slug);
    const zone = getClimateZone(city.department_code);

    // Pickers based on hash
    const pick = <T,>(arr: T[], offset: number = 0): T => arr[(hash + offset) % arr.length];

    // Variables pour l'injection JSON
    const cityName = city.name;
    const dept = city.department_name;
    const region = city.region;

    // Contexte Géographique & Climatique (Très fort pour le SEO)
    const getClimateContext = () => {
        if (zone === 'H3') {
            return pick([
                `Dans le département ${dept} (zone climatique méditerranéenne), les étés caniculaires rendent la climatisation indispensable. À ${cityName}, l'enjeu principal est le rafraîchissement performant.`,
                `Soumise aux fortes chaleurs estivales de la région ${region}, la commune de ${cityName} nécessite des équipements frigorifiques très performants (TRÈS bon taux SEER).`,
                `À ${cityName}, comme dans tout le département ${dept}, une pompe à chaleur air-air s'utilise principalement pour combattre les périodes de canicule de plus en plus fréquentes.`
            ], 1);
        } else if (zone === 'H2') {
            return pick([
                `Sous l'influence du climat tempéré/océanique de la région ${region}, les habitants de ${cityName} utilisent leur PAC air-air de manière très équilibrée entre chauffage doux l'hiver et rafraîchissement l'été.`,
                `Dans le département ${dept}, l'installation d'une climatisation réversible est le compromis parfait : elle permet de déshumidifier l'air humide de mi-saison et de rafraîchir en été à ${cityName}.`,
                `À ${cityName}, le climat clément de la zone côtière ou de plaine permet d'optimiser les coefficients de performance (SCOP et SEER) de votre pompe à chaleur tout au long de l'année.`
            ], 2);
        } else {
            return pick([
                `La rigueur des hivers dans la région ${region} (Zone climatique H1) implique de choisir du matériel adapté. À ${cityName}, il est fortement conseillé de s'orienter vers une PAC avec technologie Hyper Heating.`,
                `À ${cityName} et dans tout le département ${dept}, le mode chauffage de votre climatisation réversible sera fortement sollicité. Un compresseur capable de maintenir sa puissance jusqu'à -15°C est idéal.`,
                `Face aux hivers froids caractéristiques du département ${dept}, l'installation d'une PAC air-air à ${cityName} demande un dimensionnement minutieux pour ne pas surconsommer en période de gel.`
            ], 3);
        }
    };

    // Paragraphe d'Intro: Prestation Spécifique
    const getPrestationIntro = () => {
        switch (prestation) {
            case 'installation':
                return pick([
                    `L'installation d'une climatisation réversible à ${cityName} permet de réguler au degré près la température de votre logement. Nos installateurs certifiés RGE interviennent sur l'ensemble du Code Postal ${city.zip} pour dimensionner votre projet.`,
                    `Vous envisagez de poser une pompe à chaleur air-air à ${cityName} ? Une bonne installation commence toujours par un bilan thermique précis de vos pièces de vie, qu'il s'agisse d'une maison ancienne ou d'un appartement récent.`,
                    `L'expertise de la pose frigorifique est indispensable. Faire appel à un artisan local basé près de ${cityName} (${city.zip}) vous assure le respect des normes d'étanchéité et l'accès garanti aux primes CEE.`
                ], 4);
            case 'entretien':
                return pick([
                    `L'entretien régulier de votre climatisation à ${cityName} est non seulement une obligation légale pour les installations contenant plus de 2kg de fluide, mais c'est surtout la clé de sa longévité.`,
                    `Un filtre encrassé peut augmenter votre consommation électrique de 30% ! Les climaticiens intervenant sur ${cityName} proposent des contrats de maintenance annuels incluant le nettoyage bactéricide et le contrôle d'étanchéité.`,
                    `Ne négligez pas la révision de votre PAC air-air. Que vous soyez dans le centre de ${cityName} ou en périphérie (${dept}), un entretien professionnel garantit un air sain et évite les pannes en pleine saison.`
                ], 5);
            case 'gainable':
                return pick([
                    `La climatisation gainable est la solution ultime pour un confort invisible à ${cityName}. Dissimulée dans vos combles ou faux-plafonds, elle distribue l'air frais ou chaud via de discrètes grilles de ventilation.`,
                    `Très prisée lors de rénovations globales dans la région ${region}, l'installation d'un système gainable à ${cityName} valorise considérablement votre bien immobilier tout en garantissant un silence de fonctionnement absolu.`,
                    `Opter pour un gainable à ${cityName} (${city.zip}) demande une étude aéraulique poussée pour garantir un débit d'air homogène. Nos artisans partenaires excellent dans ce type de configuration haut de gamme.`
                ], 6);
            case 'daikin':
                return pick([
                    `Daikin est le leader incontesté des pompes à chaleur air-air. L'installation d'un modèle Daikin (Perfera, Ururu Sarara...) à ${cityName} est un gage de fiabilité absolue et de très haute performance énergétique.`,
                    `Faire le choix de la marque Daikin pour votre logement à ${cityName}, c'est s'assurer d'un matériel ultra-silencieux, doté de technologies innovantes (Flash Streamer, capteur thermique intelligent) et d'un SAV réactif sur le secteur ${dept}.`,
                    `Nos installateurs agréés sur le secteur de ${cityName} (${city.zip}) recommandent particulièrement la gamme Daikin pour sa capacité à filtrer l'air et sa durabilité esthétique exceptionnelle.`
                ], 7);
            case 'mono-split':
                return pick([
                    `Idéal pour équiper une pièce de vie unique (comme un grand salon) à ${cityName}, le mono-split est rapide à installer et représente l'investissement le plus abordable pour passer au confort réversible.`,
                    `Pour un appartement ou une extension de maison à ${cityName}, l'installation d'un mono-split nécessite seulement un carottage mural et une demi-journée de travail par un professionnel certifié QualiPAC.`,
                    `Le système mono-split est la porte d'entrée vers les économies d'énergie. En remplaçant vos vieux radiateurs électriques à ${cityName} par un split mural ultra-performant, vous divisez vos factures par trois.`
                ], 8);
            case 'multi-split':
                return pick([
                    `Vous devez gérer la température de plusieurs chambres ou salons à ${cityName} ? Le multi-split permet de relier jusqu'à 5 unités intérieures (muraux, consoles, cassettes) à un seul groupe extérieur.`,
                    `C'est la solution polyvalente par excellence. En installant un système multi-split à ${cityName} (${dept}), chaque membre de la famille peut régler la température de sa pièce de manière indépendante.`,
                    `L'installation d'un système multi-split préserve l'esthétique des façades à ${cityName} en limitant le nombre de compresseurs extérieurs, tout en offrant une flexibilité totale dans le choix des émetteurs intérieurs.`
                ], 9);
            default:
                // Texte générique (Page de la ville principale /prix-climatisation/[ville])
                return pick([
                    `Vous prévoyez d'équiper votre logement d'une pompe à chaleur air-air à ${cityName} ? Que ce soit pour remplacer des convecteurs énergivores ou affronter la période estivale, l'accompagnement par un véritable professionnel est essentiel.`,
                    `Notre réseau regroupe les meilleurs climaticiens intervenant sur ${cityName} et l'ensemble de la région ${region}. Ils vous guident du choix de la puissance (BTU/kW) jusqu'à la mise en service.`,
                    `Installer une clim réversible à ${cityName} (${city.zip}) est un projet technique nécessitant une attestation de capacité frigorifique pour la manipulation des fluides.`
                ], 10);
        }
    };

    // Paragraphe Marché et Tarifs
    const getMarketContext = () => {
        return pick([
            `Le marché de la pompe à chaleur est très dynamique dans le département ${dept}. Les devis peuvent varier du simple au double en fonction de la complexité du passage des liaisons frigorifiques et des contraintes d'urbanisme liées à la façade de votre habitation à ${cityName}.`,
            `Sachez que les modèles très haute efficacité énergétique (A+++ / A+++) ouvrent la voie à d'importantes Primes CEE. Un artisan RGE situé aux alentours de ${cityName} saura déduire ces montants directement de votre facture finale.`,
            `Avec environ ${city.population?.toLocaleString('fr-FR') || "plusieurs milliers d'"} habitants, la commune de ${cityName} voit émerger de multiples entreprises de CVC (Chauffage, Ventilation, Climatisation). Prenez grand soin de comparer les prix, mais surtout la qualité du service après-vente et la disponibilité des pièces.`
        ], 11);
    };

    return (
        <div className="prose prose-lg text-slate-600">
            <p><strong>{getClimateContext()}</strong></p>
            <p>{getPrestationIntro()}</p>
            <p>{getMarketContext()}</p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Critères de variation de prix à {cityName}</h3>
            <ul>
                <li><strong>Configuration du logement :</strong> Plain-pied vs Maison à étages, type d'isolation existante, possibilité de cacher le groupe extérieur sans enfreindre le PLU de {cityName}.</li>
                <li><strong>Le type de technologie :</strong> {prestation === 'gainable' ? 'Le gainable nécessite d\'intervenir dans les combles.' : 'Les systèmes mural classique vs les consoles basse esthétiques.'}</li>
                <li><strong>Marques Premium vs Orientales :</strong> Un équipement ultra-fiable (comme Daikin, Mitsubishi, Panasonic) sera naturellement chiffré plus cher qu'une marque d'entrée de gamme, mais offrira une durabilité et un rendement bien supérieurs face au climat de la région {region}.</li>
            </ul>
        </div>
    );
};
