export interface BrandModel {
    name: string;
    type: "mono-split" | "multi-split" | "gainable" | "console";
    priceRange: string;
    features: string[];
}

export interface BrandFAQ {
    question: string;
    answer: string;
}

export interface Brand {
    slug: string;
    name: string;
    logo?: string;
    tagline: string;
    description: string;
    country: string;
    countryFlag: string;
    founded: string;
    specialties: string[];
    priceRange: {
        monoSplit: string;
        multiSplit: string;
        gainable?: string;
    };
    models: BrandModel[];
    qualityRating: number;
    savRating: number;
    priceRating: number;
    warranty: string;
    pros: string[];
    cons: string[];
    faq: BrandFAQ[];
    seoTitle: string;
    seoDescription: string;
}

export const BRANDS: Brand[] = [
    {
        slug: "daikin",
        name: "Daikin",
        tagline: "Le leader mondial de la climatisation réversible",
        description: "Fondé au Japon en 1924, Daikin est le numéro 1 mondial de la climatisation. La marque est reconnue pour la fiabilité exceptionnelle de ses compresseurs, son efficacité énergétique de pointe (SEER jusqu'à 8.75) et son système de purification d'air breveté Flash Streamer.\n\nDaikin fabrique ses propres compresseurs et réfrigérants, ce qui lui confère un contrôle total sur la qualité. Leur technologie Inverter est considérée comme la référence du marché, garantissant un fonctionnement silencieux et des économies d'énergie substantielles.\n\nAvec une usine à Ostende (Belgique), Daikin assure un approvisionnement rapide en Europe et un SAV réactif grâce à un réseau dense d'installateurs agréés Daikin Home Comfort Expert (DHCE).",
        country: "Japon",
        countryFlag: "🇯🇵",
        founded: "1924",
        specialties: ["Climatisation réversible", "Pompe à chaleur air-air", "Purification d'air", "Technologie Inverter"],
        priceRange: {
            monoSplit: "1 800 € – 3 500 €",
            multiSplit: "4 500 € – 9 000 €",
            gainable: "6 000 € – 12 000 €",
        },
        models: [
            { name: "Daikin Perfera FTXM", type: "mono-split", priceRange: "1 800 – 2 800 €", features: ["SEER 8.75", "Silence 19 dB(A)", "Wi-Fi intégré", "Flash Streamer"] },
            { name: "Daikin Stylish FTXA", type: "mono-split", priceRange: "2 200 – 3 500 €", features: ["Design épuré", "Effet Coanda", "Détection 3D", "R-32"] },
            { name: "Daikin Multi 2MXM", type: "multi-split", priceRange: "4 500 – 7 000 €", features: ["2 à 5 unités", "Inverter", "Gestion zone par zone", "Classe A+++"] },
            { name: "Daikin Gainable FDXM", type: "gainable", priceRange: "6 000 – 12 000 €", features: ["Discrétion totale", "Régulation par pièce", "Silencieux", "Haut rendement"] },
        ],
        qualityRating: 5,
        savRating: 5,
        priceRating: 3,
        warranty: "5 ans pièces + 5 ans compresseur",
        pros: [
            "Fiabilité légendaire — compresseurs fabriqués en interne",
            "Efficacité énergétique parmi les meilleures du marché (SEER 8.75)",
            "Réseau SAV très dense en France (installateurs DHCE)",
            "Technologie de purification d'air Flash Streamer brevetée",
            "Large gamme du mono-split au gainable professionnel",
        ],
        cons: [
            "Prix plus élevé que la concurrence (15 à 25% au-dessus)",
            "Design des unités intérieures parfois jugé classique",
            "Application Onecta perfectible sur certains points",
        ],
        faq: [
            { question: "Quel est le prix d'une climatisation Daikin en 2026 ?", answer: "Le prix d'un mono-split Daikin varie de 1 800 € à 3 500 € pose incluse selon le modèle (Perfera, Stylish, Emura). Un multi-split pour 3 pièces coûte entre 5 500 € et 9 000 €. Le gainable démarre à 6 000 €." },
            { question: "Daikin est-il vraiment le meilleur en climatisation ?", answer: "Daikin est le n°1 mondial de la climatisation depuis plus de 20 ans. Sa fiabilité, son COP élevé et son réseau SAV en font un choix premium. Il est souvent recommandé par les installateurs professionnels RGE." },
            { question: "Quelle est la durée de vie d'une climatisation Daikin ?", answer: "Un système Daikin correctement entretenu (entretien annuel recommandé) a une durée de vie moyenne de 15 à 20 ans. Les compresseurs sont garantis 5 ans." },
            { question: "Une climatisation Daikin est-elle silencieuse ?", answer: "Oui, la gamme Perfera descend jusqu'à 19 dB(A) en mode silencieux, soit le niveau sonore d'un murmure. C'est l'une des climatisations les plus silencieuses du marché." },
        ],
        seoTitle: "Climatisation Daikin : Prix, Avis & Modèles 2026 | Comparatif",
        seoDescription: "Découvrez les prix de la climatisation Daikin en 2026 : Perfera, Stylish, Multi-Split. Avis, avantages, inconvénients et comparatif complet des modèles.",
    },
    {
        slug: "mitsubishi-electric",
        name: "Mitsubishi Electric",
        tagline: "La technologie japonaise au service du confort thermique",
        description: "Mitsubishi Electric, géant industriel japonais fondé en 1921, est l'un des acteurs majeurs de la climatisation résidentielle et tertiaire mondiale. La marque est particulièrement appréciée pour ses systèmes multi-split MSZ et son gainable haut de gamme SEZ/PEAD.\n\nLa technologie Hyper Heating de Mitsubishi Electric permet un fonctionnement optimal même par températures extérieures très basses (-25°C), ce qui en fait un choix de référence dans les régions froides. Le compresseur scroll DC Inverter développé en interne garantit fiabilité et performances.\n\nMitsubishi Electric dispose d'un réseau solide de distributeurs en France et propose une application MELCloud pour le pilotage à distance de ses équipements.",
        country: "Japon",
        countryFlag: "🇯🇵",
        founded: "1921",
        specialties: ["Multi-split", "Gainable", "Hyper Heating", "Technologie Inverter DC"],
        priceRange: {
            monoSplit: "1 600 € – 3 200 €",
            multiSplit: "4 000 € – 8 500 €",
            gainable: "5 500 € – 11 000 €",
        },
        models: [
            { name: "MSZ-AP", type: "mono-split", priceRange: "1 600 – 2 200 €", features: ["Entrée de gamme fiable", "R-32", "Classe A++", "Filtres anti-allergènes"] },
            { name: "MSZ-LN (Kirigamine Style)", type: "mono-split", priceRange: "2 500 – 3 200 €", features: ["Design premium", "3D i-See Sensor", "Plasma Quad", "Silence 19 dB(A)"] },
            { name: "MXZ Multi-Split", type: "multi-split", priceRange: "4 000 – 8 500 €", features: ["2 à 6 unités", "Hyper Heating", "Power Inverter", "Gestion individuelle"] },
            { name: "SEZ-M Gainable", type: "gainable", priceRange: "5 500 – 11 000 €", features: ["Ultra-plat 200mm", "Pression statique ajustable", "Silencieux", "Classe A++"] },
        ],
        qualityRating: 5,
        savRating: 4,
        priceRating: 3,
        warranty: "5 ans compresseur + 3 ans pièces",
        pros: [
            "Technologie Hyper Heating unique — fonctionne jusqu'à -25°C",
            "Fiabilité éprouvée — compresseur scroll DC Inverter maison",
            "Gamme gainable parmi les meilleures du marché",
            "Capteur 3D i-See pour confort personnalisé (Kirigamine)",
            "Application MELCloud intuitive pour pilotage à distance",
        ],
        cons: [
            "Réseau SAV moins dense que Daikin en France",
            "Gamme d'entrée (AP) moins différenciante que la concurrence",
            "Tarifs proches du premium sur les modèles haut de gamme",
        ],
        faq: [
            { question: "Quel est le prix d'une climatisation Mitsubishi Electric ?", answer: "Un mono-split MSZ-AP démarre à 1 600 € pose incluse. Le modèle haut de gamme Kirigamine Style coûte entre 2 500 € et 3 200 €. Un multi-split pour 3 pièces revient entre 5 000 € et 8 500 €." },
            { question: "Mitsubishi Electric vs Daikin : lequel choisir ?", answer: "Les deux marques sont d'excellente qualité. Daikin dispose d'un meilleur réseau SAV en France, tandis que Mitsubishi Electric excelle en performance par grand froid (Hyper Heating) et en gainable. Le choix dépend de votre projet et de votre localisation." },
            { question: "La technologie Hyper Heating, c'est quoi ?", answer: "Le Hyper Heating est une technologie exclusive Mitsubishi Electric qui permet à la pompe à chaleur de maintenir 100% de sa capacité de chauffage jusqu'à -15°C extérieur, et de continuer à fonctionner jusqu'à -25°C. Idéal pour les régions montagneuses ou le nord de la France." },
        ],
        seoTitle: "Climatisation Mitsubishi Electric : Prix, Avis & Modèles 2026",
        seoDescription: "Prix climatisation Mitsubishi Electric 2026 : MSZ-AP, Kirigamine, Multi-Split, Gainable. Comparatif, avis d'experts et devis gratuits installateurs RGE.",
    },
    {
        slug: "atlantic",
        name: "Atlantic",
        tagline: "Le spécialiste français du confort thermique",
        description: "Atlantic est le champion français de la climatisation et du chauffage, fondé à La Roche-sur-Yon en 1968. La marque propose une gamme complète de climatiseurs réversibles et de PAC air-air, fabriqués en France (usines de Merville et Billy-Berclau dans le Nord).\n\nAtlantic se distingue par un excellent rapport qualité/prix et un réseau SAV très structuré sur le territoire national. La marque a fortement investi dans le développement de ses propres unités extérieures (compresseurs Fujitsu General) et propose des solutions connectées via l'application Cozytouch.\n\nCertifiée NF PAC et Origine France Garantie, Atlantic est le choix patriotique pour une climatisation fiable fabriquée dans l'Hexagone.",
        country: "France",
        countryFlag: "🇫🇷",
        founded: "1968",
        specialties: ["Fabrication française", "Pompe à chaleur air-air", "Connectivité Cozytouch", "Certification NF PAC"],
        priceRange: {
            monoSplit: "1 400 € – 2 800 €",
            multiSplit: "3 500 € – 7 500 €",
            gainable: "5 000 € – 10 000 €",
        },
        models: [
            { name: "Atlantic Takao M2", type: "mono-split", priceRange: "1 400 – 1 900 €", features: ["Made in France", "NF PAC", "A++", "Cozytouch compatible"] },
            { name: "Atlantic Fujitsu ASYG-KMCC", type: "mono-split", priceRange: "1 800 – 2 800 €", features: ["Haut rendement", "Silence 20 dB(A)", "Détection de mouvement", "R-32"] },
            { name: "Atlantic Multi-Split", type: "multi-split", priceRange: "3 500 – 7 500 €", features: ["2 à 5 unités", "Gestion centralisée", "Cozytouch", "Fabrication française"] },
            { name: "Atlantic Gainable Aryg", type: "gainable", priceRange: "5 000 – 10 000 €", features: ["Intégration discrète", "Haute pression", "Régulation zone", "A++"] },
        ],
        qualityRating: 4,
        savRating: 5,
        priceRating: 4,
        warranty: "5 ans pièces + 5 ans compresseur (garantie étendue)",
        pros: [
            "Fabrication française — usines dans le Nord de la France",
            "Excellent rapport qualité/prix, 15 à 20% moins cher que Daikin",
            "SAV français très réactif et réseau d'installateurs dense",
            "Application Cozytouch pour pilotage et programmation à distance",
            "Certification NF PAC et Origine France Garantie",
        ],
        cons: [
            "Notoriété internationale moindre que Daikin ou Mitsubishi",
            "Design des unités intérieures sobre (peu de modèles design)",
            "Compresseurs fournis par Fujitsu General (pas de fabrication interne)",
        ],
        faq: [
            { question: "Quel est le prix d'une climatisation Atlantic ?", answer: "Le mono-split Atlantic Takao démarre à 1 400 € pose incluse. C'est l'une des marques les plus compétitives du marché avec une fabrication française. Un multi-split 3 pièces coûte entre 4 500 € et 7 500 €." },
            { question: "Atlantic est-il fiable en climatisation ?", answer: "Oui, Atlantic est une marque française reconnue avec plus de 55 ans d'expérience. Ses produits sont certifiés NF PAC et bénéficient d'un SAV français réactif. Les retours clients sont très positifs sur la fiabilité." },
            { question: "Climatisation Atlantic vs Daikin : que choisir ?", answer: "Atlantic offre un meilleur rapport qualité/prix et un SAV français de proximité. Daikin propose une technologie légèrement plus avancée et un SEER plus élevé. Pour un budget serré, Atlantic est un excellent choix patriotique." },
        ],
        seoTitle: "Climatisation Atlantic : Prix, Avis & Modèles 2026 | Made in France",
        seoDescription: "Prix climatisation Atlantic 2026 : Takao, Fujitsu-Atlantic, Multi-Split. Marque française, fabrication locale. Avis, comparatif et devis gratuits.",
    },
    {
        slug: "toshiba",
        name: "Toshiba",
        tagline: "L'innovation japonaise à prix maîtrisé",
        description: "Toshiba, pionnier de la climatisation depuis 1969, est reconnu pour avoir inventé le premier système de climatisation résidentiel split au monde. La marque japonaise allie innovation technologique et tarifs maîtrisés.\n\nLa gamme Shorai Edge représente le fer de lance de Toshiba avec une technologie Inverter ultra-performante et un design compact. Le système unique de filtration DAISEIKAI purifie l'air grâce à un filtre plasma et un filtre Ultra Pure.\n\nDistribué en France par Carrier (groupe UTC), Toshiba bénéficie d'un bon réseau de distribution et d'un positionnement prix attractif, souvent 10 à 15% en dessous de Daikin à performances comparables.",
        country: "Japon",
        countryFlag: "🇯🇵",
        founded: "1969",
        specialties: ["Technologie Inverter pionnière", "Filtration DAISEIKAI", "Split compact", "PAC résidentielle"],
        priceRange: {
            monoSplit: "1 300 € – 2 600 €",
            multiSplit: "3 200 € – 7 000 €",
            gainable: "4 500 € – 9 500 €",
        },
        models: [
            { name: "Toshiba Shorai Edge", type: "mono-split", priceRange: "1 300 – 2 000 €", features: ["Design compact", "A+++", "Silence 18 dB(A)", "Filtre Ultra Pure"] },
            { name: "Toshiba Haori", type: "mono-split", priceRange: "2 000 – 2 600 €", features: ["Façade textile amovible", "Design unique", "Wi-Fi intégré", "R-32"] },
            { name: "Toshiba Multi-Split RAS", type: "multi-split", priceRange: "3 200 – 7 000 €", features: ["2 à 5 unités", "Inverter", "Gestion individuelle", "Compact"] },
            { name: "Toshiba Gainable RAV", type: "gainable", priceRange: "4 500 – 9 500 €", features: ["Série professionnelle", "Haute pression statique", "Silencieux", "COP élevé"] },
        ],
        qualityRating: 4,
        savRating: 4,
        priceRating: 5,
        warranty: "5 ans pièces + 5 ans compresseur",
        pros: [
            "Excellent rapport qualité/prix — 10 à 15% moins cher que Daikin",
            "Silence exceptionnel — 18 dB(A) sur Shorai Edge",
            "Design original avec le modèle Haori (façade textile)",
            "Inventeur historique du split résidentiel (1969)",
            "Filtration DAISEIKAI à plasma pour qualité d'air",
        ],
        cons: [
            "Notoriété moindre que Daikin ou Mitsubishi auprès du grand public",
            "Gamme gainable moins étendue que Mitsubishi Electric",
            "Distribution via Carrier — SAV moins direct que Daikin",
        ],
        faq: [
            { question: "Quel est le prix d'une climatisation Toshiba ?", answer: "Le mono-split Toshiba Shorai Edge commence à 1 300 € pose incluse, ce qui en fait l'un des meilleurs rapports qualité/prix du marché. Le modèle design Haori coûte entre 2 000 € et 2 600 €. Un multi-split 3 pièces revient entre 4 000 € et 7 000 €." },
            { question: "Toshiba est-il fiable en climatisation ?", answer: "Oui, Toshiba est un fabricant historique qui a inventé le premier split résidentiel. La fiabilité de ses compresseurs DC Inverter est reconnue par les professionnels. La marque offre une garantie de 5 ans compresseur." },
            { question: "Toshiba vs Daikin : lequel est le mieux ?", answer: "Toshiba offre un rapport qualité/prix supérieur avec des performances proches de Daikin. Si votre budget est limité, Toshiba est un excellent choix. Si vous recherchez le summum de la fiabilité et un réseau SAV très dense, Daikin reste la référence premium." },
        ],
        seoTitle: "Climatisation Toshiba : Prix, Avis & Modèles 2026 | Comparatif",
        seoDescription: "Prix climatisation Toshiba 2026 : Shorai Edge, Haori, Multi-Split. Avis, rapport qualité/prix et comparatif complet. Devis gratuits installateurs RGE.",
    },
    {
        slug: "lg",
        name: "LG",
        tagline: "Le design et la connectivité au service du confort",
        description: "LG Electronics, géant sud-coréen de l'électronique, a su s'imposer dans le marché de la climatisation résidentielle grâce à un positionnement axé sur le design et la connectivité smart home. La marque est un acteur majeur sur le marché mondial.\n\nLa technologie DUAL Inverter de LG avec compresseur 10 ans garanti offre des performances énergétiques élevées (SEER jusqu'à 8.5) et un fonctionnement ultra-silencieux. L'application LG ThinQ permet un contrôle vocal via Google Home et Amazon Alexa.\n\nLG se distingue aussi par ses climatiseurs avec purification AirCare Complete (ioniseur + filtre PM1.0), un argument de poids pour les foyers sensibles à la qualité de l'air intérieur.",
        country: "Corée du Sud",
        countryFlag: "🇰🇷",
        founded: "1958",
        specialties: ["DUAL Inverter", "Smart Home / ThinQ", "Purification AirCare", "Design premium"],
        priceRange: {
            monoSplit: "1 200 € – 2 500 €",
            multiSplit: "3 000 € – 6 500 €",
        },
        models: [
            { name: "LG Artcool Mirror", type: "mono-split", priceRange: "1 800 – 2 500 €", features: ["Design miroir", "DUAL Inverter", "ThinQ Wi-Fi", "AirCare Complete"] },
            { name: "LG Artcool Color", type: "mono-split", priceRange: "1 500 – 2 000 €", features: ["Façade personnalisable", "A+++", "Silence 19 dB(A)", "R-32"] },
            { name: "LG Standard Plus", type: "mono-split", priceRange: "1 200 – 1 600 €", features: ["Entrée de gamme", "DUAL Inverter", "Wi-Fi", "Classe A++"] },
            { name: "LG Multi F", type: "multi-split", priceRange: "3 000 – 6 500 €", features: ["2 à 5 unités", "DUAL Inverter", "ThinQ", "Compresseur garanti 10 ans"] },
        ],
        qualityRating: 4,
        savRating: 3,
        priceRating: 5,
        warranty: "10 ans compresseur + 3 ans pièces",
        pros: [
            "Design exceptionnel — gamme Artcool (miroir, couleurs personnalisables)",
            "Compresseur DUAL Inverter garanti 10 ans — confiance totale",
            "Connectivité ThinQ / Google Home / Alexa très aboutie",
            "Purification d'air AirCare avec filtre PM1.0",
            "Prix agressif — parmi les plus compétitifs du marché",
        ],
        cons: [
            "Réseau SAV en France moins structuré que Daikin ou Atlantic",
            "Pas de gamme gainable résidentielle en France",
            "Perception « électronique grand public » vs spécialiste clim",
        ],
        faq: [
            { question: "Quel est le prix d'une climatisation LG ?", answer: "LG propose des tarifs très compétitifs : le Standard Plus démarre à 1 200 € pose incluse. Le modèle design Artcool Mirror coûte entre 1 800 € et 2 500 €. Un multi-split pour 3 pièces revient entre 3 800 € et 6 500 €." },
            { question: "La garantie 10 ans compresseur LG est-elle fiable ?", answer: "Oui, LG garantit le compresseur DUAL Inverter pendant 10 ans, ce qui est la meilleure garantie compresseur du marché résidentiel. C'est un gage de confiance sur la durabilité de l'appareil." },
            { question: "LG vs Daikin : quel climatiseur choisir ?", answer: "LG excelle en design (Artcool) et en connectivité smart home (ThinQ), avec un prix plus bas. Daikin offre une fiabilité plus éprouvée, un meilleur réseau SAV et des performances SEER légèrement supérieures. LG est idéal si le design et le budget comptent." },
        ],
        seoTitle: "Climatisation LG : Prix, Avis & Modèles Artcool 2026 | Comparatif",
        seoDescription: "Prix climatisation LG 2026 : Artcool Mirror, Standard Plus, Multi F. Design, connectivité ThinQ, garantie 10 ans compresseur. Avis et devis gratuits.",
    },
    {
        slug: "fujitsu",
        name: "Fujitsu General",
        tagline: "La fiabilité japonaise pour les professionnels et particuliers",
        description: "Fujitsu General, division climatisation du groupe Fujitsu fondé en 1936, est un fabricant de référence chez les professionnels du froid. Moins connu du grand public que Daikin, Fujitsu est pourtant le fournisseur OEM de nombreuses marques, dont Atlantic.\n\nLa gamme ASYG-KMTB (désormais en R-32) offre d'excellentes performances avec un rapport qualité/prix remarquable. Fujitsu se distingue par des unités extérieures particulièrement robustes et un fonctionnement fiable même par températures extrêmes.\n\nEn France, Fujitsu General est distribué par Atlantic (qui utilise les compresseurs Fujitsu dans ses propres produits), ce qui assure un bon maillage SAV sur le territoire.",
        country: "Japon",
        countryFlag: "🇯🇵",
        founded: "1936",
        specialties: ["OEM pour Atlantic", "Compresseurs haute fiabilité", "PAC air-air résidentielle", "Solutions professionnelles"],
        priceRange: {
            monoSplit: "1 300 € – 2 400 €",
            multiSplit: "3 200 € – 7 000 €",
            gainable: "5 000 € – 10 000 €",
        },
        models: [
            { name: "Fujitsu ASYG-KMTB", type: "mono-split", priceRange: "1 300 – 1 800 €", features: ["R-32", "A++", "Compact", "Filtres longue durée"] },
            { name: "Fujitsu ASYG-KGTB", type: "mono-split", priceRange: "1 800 – 2 400 €", features: ["Haut de gamme", "3D Airflow", "Human Sensor", "A+++"] },
            { name: "Fujitsu Multi-Split AOYG", type: "multi-split", priceRange: "3 200 – 7 000 €", features: ["2 à 5 unités", "Inverter DC", "Gestion zone", "Robuste"] },
            { name: "Fujitsu Gainable ARYG", type: "gainable", priceRange: "5 000 – 10 000 €", features: ["Haute pression", "Régulation précise", "Ultra-silencieux", "Pro"] },
        ],
        qualityRating: 4,
        savRating: 4,
        priceRating: 4,
        warranty: "5 ans pièces + 5 ans compresseur",
        pros: [
            "Fiabilité professionnelle — choisi par Atlantic comme fournisseur premium",
            "Excellent rapport qualité/prix sur toute la gamme",
            "Unités extérieures parmi les plus robustes du marché",
            "SAV assuré par le réseau Atlantic en France",
            "Gamme gainable très complète pour le résidentiel",
        ],
        cons: [
            "Notoriété grand public faible — marque \"pro\" avant tout",
            "Design des unités intérieures fonctionnel mais basique",
            "Application de pilotage moins aboutie que Daikin ou LG",
        ],
        faq: [
            { question: "Quel est le prix d'une climatisation Fujitsu ?", answer: "Un mono-split Fujitsu ASYG-KMTB commence à 1 300 € pose incluse. La gamme haute KGTB coûte entre 1 800 € et 2 400 €. Un multi-split 3 pièces revient entre 4 000 € et 7 000 €." },
            { question: "Fujitsu ou Atlantic : quelle différence ?", answer: "Atlantic utilise les compresseurs et unités extérieures Fujitsu General dans ses propres produits. Acheter du Fujitsu, c'est accéder directement au fabricant d'origine, souvent à un prix légèrement inférieur. Le SAV est assuré dans les deux cas par le réseau Atlantic." },
            { question: "Fujitsu est-il fiable pour la climatisation ?", answer: "Très fiable. Fujitsu General fabrique des climatiseurs depuis plus de 85 ans. C'est le fournisseur OEM de choix pour de grandes marques françaises. La robustesse des unités extérieures est particulièrement reconnue par les installateurs." },
        ],
        seoTitle: "Climatisation Fujitsu General : Prix, Avis & Modèles 2026",
        seoDescription: "Prix climatisation Fujitsu General 2026 : ASYG, Multi-Split, Gainable. Fournisseur d'Atlantic. Fiabilité pro, rapport qualité/prix. Devis gratuits.",
    },
];

export function getBrandBySlug(slug: string): Brand | undefined {
    return BRANDS.find(b => b.slug === slug);
}

export function getAllBrandSlugs(): string[] {
    return BRANDS.map(b => b.slug);
}
