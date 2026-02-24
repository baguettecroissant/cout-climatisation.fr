
import { City } from '@/types';

/**
 * Returns a random string from the provided options.
 */
export function getRandomSpintax(options: string[]): string {
    return options[Math.floor(Math.random() * options.length)];
}

/**
 * Generates an SEO-optimized intro based on city population for climatisation/PAC context.
 */
export function getCityIntro(city: City): string {
    const pop = city.population || 0;

    // Tier 1: Major Cities (> 50k)
    if (pop > 50000) {
        const options = [
            `Grande métropole du département ${city.department_name}, ${city.name} dispose d'un large réseau d'installateurs RGE pour votre projet de climatisation.`,
            `Grâce à son réseau de professionnels certifiés, l'agglomération de ${city.name} offre un large choix de solutions de confort thermique.`,
            `Au cœur de ${city.name}, améliorez votre confort été comme hiver grâce aux spécialistes de la pompe à chaleur air-air en région ${city.region}.`,
            `Résider dans une grande ville comme ${city.name} vous assure un accès rapide aux meilleurs techniciens RGE pour l'installation de votre climatisation.`
        ];
        return getRandomSpintax(options);
    }

    // Tier 2: Cities (> 10k)
    if (pop > 10000) {
        const options = [
            `Ville active du ${city.department_name}, ${city.name} bénéficie d'une excellente couverture par les installateurs de climatisation de la région.`,
            `À ${city.name}, ville en mouvement, climatiser son logement est simple grâce à la proximité de nombreux artisans certifiés RGE.`,
            `Commune importante de la région ${city.region}, ${city.name} propose diverses options pour l'installation rapide d'une pompe à chaleur air-air.`,
            `Que vous soyez en centre-ville ou en périphérie de ${city.name}, nos partenaires interviennent rapidement pour votre devis climatisation.`
        ];
        return getRandomSpintax(options);
    }

    // Tier 3: Towns (> 2k)
    if (pop > 2000) {
        const options = [
            `Cadre de vie agréable à ${city.name}, où le confort thermique est assuré par l'intervention d'artisans locaux qualifiés RGE.`,
            `Située en ${city.region}, la commune de ${city.name} est bien desservie par les experts en climatisation et pompe à chaleur.`,
            `Profitez du calme de ${city.name} tout en gardant votre intérieur frais grâce aux solutions de climatisation disponibles dans le ${city.department_code}.`,
            `À ${city.name}, commune à taille humaine, bénéficiez d'un accompagnement personnalisé pour votre projet de climatisation réversible.`
        ];
        return getRandomSpintax(options);
    }

    // Tier 4: Villages (> 0)
    if (pop > 0) {
        const options = [
            `Village paisible, ${city.name} est parfaitement couvert par les techniciens RGE de la région ${city.region}, habitués à intervenir en zone rurale.`,
            `Au calme à ${city.name}, améliorez votre confort thermique avec une installation sur-mesure réalisée par des professionnels locaux.`,
            `Vivre à ${city.name} offre une tranquillité appréciable. Nos artisans se déplacent même dans les plus petites communes du ${city.department_name}.`,
            `Charmante localité rurale, ${city.name} bénéficie des mêmes aides (MaPrimeRénov') que les grandes villes pour vos travaux de climatisation.`
        ];
        return getRandomSpintax(options);
    }

    // Tier 5: Fallback / Unknown Population (0 or undefined)
    const options = [
        `Dans le département ${city.department_name}, ${city.name} est desservi par notre réseau d'installateurs RGE agréés.`,
        `Habiter à ${city.name} vous permet de bénéficier de devis gratuits pour l'installation de votre climatisation.`,
        `La commune de ${city.name} fait partie de notre zone d'intervention prioritaire en région ${city.region}.`,
        `Pour votre projet à ${city.name}, faites confiance aux artisans partenaires intervenant régulièrement dans le ${city.department_code}.`
    ];
    return getRandomSpintax(options);
}
