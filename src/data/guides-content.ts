
export interface GuideArticle {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    content: string; // HTML content
    image?: string;
    imagePrompt?: string;
    metaTitle: string;
    metaDescription: string;
}

export const GUIDES: GuideArticle[] = [
    {
        slug: "prix-climatisation-2026",
        title: "Prix Climatisation 2026 : Tarifs Mono-Split, Multi-Split et Gainable",
        excerpt: "Combien coûte une climatisation réversible en 2026 ? Découvrez les prix actualisés par type d'installation (mono-split, multi-split, gainable), par marque et par surface. Guide complet avec tableaux comparatifs.",
        date: "2026-02-20",
        author: "Rédaction Cout-Climatisation.fr",
        image: "/images/blog/prix-climatisation-2026.png",
        metaTitle: "Prix Climatisation 2026 : Tarifs Mono-Split, Multi-Split, Gainable (Pose Incluse)",
        metaDescription: "Combien coûte une climatisation en 2026 ? Mono-split dès 1 200 €, multi-split dès 3 000 €, gainable dès 5 000 €. Tarifs par marque, par surface et aides déduites.",
        content: `
<p>Vous envisagez d'installer une <strong>climatisation réversible</strong> ou une <strong>pompe à chaleur air-air</strong> en 2026 ? Le budget varie considérablement selon le type d'installation, la marque choisie et la surface à climatiser. Ce guide détaille les <strong>prix actualisés</strong> pour vous aider à budgétiser votre projet avec précision.</p>

<h2>Prix d'une climatisation par type d'installation</h2>

<p>Le coût d'une climatisation dépend avant tout du <strong>type de système</strong> choisi. Voici les fourchettes de prix constatées en 2026, <strong>fourniture et pose par un installateur RGE incluses</strong> :</p>

<table>
<thead><tr><th>Type d'installation</th><th>Prix pose incluse</th><th>Idéal pour</th></tr></thead>
<tbody>
<tr><td><strong>Mono-split</strong></td><td>1 200 € – 3 500 €</td><td>1 pièce (salon, chambre)</td></tr>
<tr><td><strong>Bi-split</strong></td><td>2 500 € – 5 500 €</td><td>2 pièces</td></tr>
<tr><td><strong>Tri-split</strong></td><td>3 500 € – 7 500 €</td><td>3 pièces</td></tr>
<tr><td><strong>Multi-split (4-5)</strong></td><td>5 000 € – 9 000 €</td><td>4 à 5 pièces</td></tr>
<tr><td><strong>Gainable</strong></td><td>5 000 € – 12 000 €</td><td>Maison entière (discret)</td></tr>
</tbody>
</table>

<h2>Prix par marque de climatisation</h2>

<p>Les écarts de prix entre marques peuvent atteindre 30 à 40%. Voici un comparatif des prix moyens pour un <strong>mono-split de 2,5 kW</strong> (pièce de 25 m²) :</p>

<table>
<thead><tr><th>Marque</th><th>Prix mono-split</th><th>Positionnement</th></tr></thead>
<tbody>
<tr><td><strong><a href="/marques/daikin">Daikin</a></strong></td><td>1 800 – 3 500 €</td><td>Premium / Leader mondial</td></tr>
<tr><td><strong><a href="/marques/mitsubishi-electric">Mitsubishi Electric</a></strong></td><td>1 600 – 3 200 €</td><td>Premium / Grand froid</td></tr>
<tr><td><strong><a href="/marques/atlantic">Atlantic</a></strong></td><td>1 400 – 2 800 €</td><td>Made in France / Qualité-prix</td></tr>
<tr><td><strong><a href="/marques/toshiba">Toshiba</a></strong></td><td>1 300 – 2 600 €</td><td>Rapport qualité-prix</td></tr>
<tr><td><strong><a href="/marques/lg">LG</a></strong></td><td>1 200 – 2 500 €</td><td>Design / Connecté</td></tr>
<tr><td><strong><a href="/marques/fujitsu">Fujitsu General</a></strong></td><td>1 300 – 2 400 €</td><td>Pro / Fournisseur Atlantic</td></tr>
</tbody>
</table>

<h2>Prix par surface à climatiser</h2>

<p>La <strong>puissance nécessaire</strong> dépend de la surface. Comptez environ 100 W/m² pour une pièce bien isolée (DPE B-C) et 130 W/m² pour une isolation moyenne (DPE D-E) :</p>

<table>
<thead><tr><th>Surface</th><th>Puissance recommandée</th><th>Budget indicatif</th></tr></thead>
<tbody>
<tr><td>15 – 20 m²</td><td>1,5 – 2 kW</td><td>1 200 – 2 000 €</td></tr>
<tr><td>25 – 35 m²</td><td>2,5 – 3,5 kW</td><td>1 500 – 2 800 €</td></tr>
<tr><td>40 – 60 m²</td><td>4 – 6 kW (multi-split)</td><td>3 000 – 5 500 €</td></tr>
<tr><td>80 – 120 m²</td><td>8 – 12 kW (multi/gainable)</td><td>5 000 – 9 000 €</td></tr>
<tr><td>120 m² +</td><td>12 kW + (gainable)</td><td>8 000 – 12 000 €</td></tr>
</tbody>
</table>

<h2>Ce qui influence le prix d'une climatisation</h2>

<ul>
<li><strong>Le type de système</strong> : mono-split &lt; multi-split &lt; gainable</li>
<li><strong>La marque</strong> : <a href="/marques/daikin">Daikin</a> et <a href="/marques/mitsubishi-electric">Mitsubishi</a> sont 15-25% plus chers que <a href="/marques/toshiba">Toshiba</a> ou <a href="/marques/lg">LG</a></li>
<li><strong>La puissance (kW)</strong> : plus la surface est grande, plus le coût augmente</li>
<li><strong>La longueur des liaisons frigorifiques</strong> : au-delà de 5 mètres, un supplément de 40-80 €/mètre s'applique</li>
<li><strong>La complexité de l'installation</strong> : passage en faux-plafond, percements multiples, accès difficile</li>
<li><strong>Les options</strong> : Wi-Fi intégré, purification d'air, détection 3D</li>
</ul>

<h2>Aides financières pour réduire le coût</h2>

<p>Plusieurs dispositifs permettent de réduire la facture de votre climatisation réversible :</p>

<ul>
<li><strong>CEE (Certificats d'Économies d'Énergie)</strong> : prime de 300 € à 900 € selon vos revenus</li>
<li><strong>TVA réduite à 5,5%</strong> : pour les logements de plus de 2 ans (économie de ~15%)</li>
<li><strong>Aides locales</strong> : certaines régions et communes proposent des subventions complémentaires</li>
</ul>

<p>👉 <a href="/calculateur-aides">Calculez vos aides en 2 minutes</a> avec notre simulateur gratuit.</p>

<h2>Nos conseils pour payer le juste prix</h2>

<ol>
<li><strong>Demandez minimum 3 devis</strong> à des <a href="/annuaire">installateurs RGE certifiés</a> pour comparer</li>
<li><strong>Vérifiez le SEER/SCOP</strong> : un appareil plus efficace coûte plus cher à l'achat mais moins à l'usage</li>
<li><strong>Méfiez-vous des prix trop bas</strong> : une installation bâclée coûte cher en SAV. <a href="/guides/devis-climatisation-pieges">Lisez notre guide des pièges à éviter</a></li>
<li><strong>Privilégiez la qualité du SAV</strong> : <a href="/marques">comparez les garanties par marque</a></li>
</ol>

<p>👉 <a href="/devis">Obtenez 3 devis gratuits</a> d'installateurs RGE près de chez vous.</p>
`,
    },
    {
        slug: "remboursement-climatisation-securite-sociale",
        title: "Aides & Remboursement Climatisation 2026 : MaPrimeRénov', CEE et Crédit d'Impôt",
        excerpt: "Quelles aides pour financer votre climatisation réversible ? MaPrimeRénov', CEE, TVA 5,5%, crédit d'impôt, aides locales : le guide complet des dispositifs 2026 avec conditions et montants.",
        date: "2026-02-18",
        author: "Rédaction Cout-Climatisation.fr",
        image: "/images/blog/prix-climatisation-2026.png",
        metaTitle: "Aides Climatisation 2026 : MaPrimeRénov', CEE, TVA 5,5% | Guide Complet",
        metaDescription: "Toutes les aides pour financer votre climatisation réversible en 2026 : CEE jusqu'à 900 €, TVA 5,5%, MaPrimeRénov' (rénovation globale). Conditions et montants détaillés.",
        content: `
<p>L'installation d'une <strong>climatisation réversible</strong> (pompe à chaleur air-air) représente un investissement de 1 200 € à 12 000 €. Heureusement, plusieurs <strong>aides financières</strong> permettent de réduire significativement la facture. Ce guide recense tous les dispositifs disponibles en 2026, leurs conditions et leurs montants.</p>

<h2>1. Les CEE (Certificats d'Économies d'Énergie)</h2>

<p>Les <strong>CEE</strong> constituent l'aide principale pour l'installation d'une PAC air-air. Les fournisseurs d'énergie (EDF, Engie, TotalÉnergies) financent directement une partie de vos travaux :</p>

<table>
<thead><tr><th>Revenus du ménage</th><th>Prime CEE indicative</th></tr></thead>
<tbody>
<tr><td>Ménages très modestes</td><td>700 € – 900 €</td></tr>
<tr><td>Ménages modestes</td><td>500 € – 700 €</td></tr>
<tr><td>Ménages intermédiaires</td><td>300 € – 500 €</td></tr>
<tr><td>Ménages aisés</td><td>200 € – 300 €</td></tr>
</tbody>
</table>

<p><strong>Conditions</strong> : logement de plus de 2 ans, installation par un professionnel <a href="/annuaire">RGE</a>, appareil de classe A+ minimum.</p>

<h2>2. TVA réduite à 5,5%</h2>

<p>Les travaux d'amélioration de la performance énergétique bénéficient d'une <strong>TVA à 5,5%</strong> au lieu de 20%. Cette réduction s'applique automatiquement sur le devis de l'installateur RGE.</p>

<ul>
<li><strong>Économie</strong> : environ 15% sur la facture totale</li>
<li><strong>Condition</strong> : logement construit depuis plus de 2 ans (résidence principale ou secondaire)</li>
<li><strong>Applicable sur</strong> : la fourniture ET la main-d'œuvre</li>
</ul>

<p>Exemple : sur un multi-split à 5 000 € TTC, l'économie de TVA est d'environ <strong>630 €</strong>.</p>

<h2>3. MaPrimeRénov' et la PAC air-air</h2>

<p>⚠️ <strong>Attention</strong> : la PAC air-air (climatisation réversible) n'est <strong>pas directement éligible</strong> à MaPrimeRénov' en tant que geste isolé. Seules les PAC air-eau et géothermiques bénéficient de l'aide directe.</p>

<p>Cependant, la PAC air-air peut être intégrée dans un <strong>parcours MaPrimeRénov' Sérénité</strong> (rénovation globale) si vous réalisez un ensemble de travaux atteignant au moins 35% de gain énergétique.</p>

<table>
<thead><tr><th>Profil</th><th>Aide MaPrimeRénov' Sérénité</th></tr></thead>
<tbody>
<tr><td>Ménages très modestes</td><td>Jusqu'à 50% du coût (plafond 35 000 €)</td></tr>
<tr><td>Ménages modestes</td><td>Jusqu'à 35% du coût (plafond 35 000 €)</td></tr>
</tbody>
</table>

<p>👉 <a href="/calculateur-aides">Testez votre éligibilité</a> avec notre calculateur en ligne.</p>

<h2>4. Crédit d'impôt pour la transition énergétique</h2>

<p>Le <strong>crédit d'impôt</strong> (CITE) a été largement intégré à MaPrimeRénov'. Toutefois, un crédit d'impôt de <strong>25%</strong> reste disponible pour l'adaptation du logement au handicap ou à la perte d'autonomie (plafond 5 000 € personne seule, 10 000 € couple).</p>

<h2>5. Aides locales et complémentaires</h2>

<ul>
<li><strong>Aides régionales</strong> : certaines régions (Île-de-France, Occitanie, PACA) proposent des compléments de 200 € à 1 000 €</li>
<li><strong>Éco-PTZ</strong> : prêt à taux zéro jusqu'à 15 000 € pour la PAC air-air dans le cadre d'un bouquet de travaux</li>
<li><strong>Chèque énergie</strong> : utilisable pour le paiement des travaux (entre 48 € et 277 €)</li>
<li><strong>Aides des caisses de retraite</strong> : CARSAT, MSA — jusqu'à 3 500 € pour les retraités</li>
</ul>

<h2>Exemple concret : combien reste-t-il à payer ?</h2>

<table>
<thead><tr><th></th><th>Ménage modeste</th><th>Ménage intermédiaire</th></tr></thead>
<tbody>
<tr><td>Multi-split 3 pièces (<a href="/marques/atlantic">Atlantic</a>)</td><td>5 500 €</td><td>5 500 €</td></tr>
<tr><td>Prime CEE</td><td>- 700 €</td><td>- 400 €</td></tr>
<tr><td>TVA 5,5% (vs 20%)</td><td>- 630 €</td><td>- 630 €</td></tr>
<tr><td><strong>Reste à charge</strong></td><td><strong>4 170 €</strong></td><td><strong>4 470 €</strong></td></tr>
</tbody>
</table>

<p>👉 <a href="/devis">Demandez vos 3 devis gratuits</a> pour connaître le prix exact adapté à votre logement et vos aides.</p>

<h2>Comment cumuler les aides ?</h2>

<ol>
<li><strong>CEE + TVA 5,5%</strong> : cumulables sans restriction</li>
<li><strong>CEE + MaPrimeRénov' Sérénité</strong> : cumulables dans le cadre d'une rénovation globale</li>
<li><strong>Éco-PTZ + CEE + TVA 5,5%</strong> : cumulables si les travaux sont réalisés par un <a href="/annuaire">artisan RGE</a></li>
</ol>

<p>💡 <strong>Conseil</strong> : faites établir votre dossier CEE AVANT de signer le devis. La prime doit être demandée en amont des travaux pour être valide.</p>
`,
    },
    {
        slug: "entretien-climatisation",
        title: "Entretien Climatisation : Guide Complet, Coûts et Obligations 2026",
        excerpt: "Tout savoir sur l'entretien de votre climatisation : fréquence obligatoire, coût d'un contrat annuel, gestes à faire soi-même, et quand appeler un professionnel. Guide pratique 2026.",
        date: "2026-02-15",
        author: "Rédaction Cout-Climatisation.fr",
        image: "/images/blog/prix-climatisation-2026.png",
        metaTitle: "Entretien Climatisation 2026 : Coût, Fréquence et Obligations | Guide Complet",
        metaDescription: "Entretien obligatoire de votre climatisation : coût de 100 à 300 €/an, fréquence, gestes DIY et quand appeler un pro RGE. Guide complet avec checklist.",
        content: `
<p>Un <strong>entretien régulier</strong> de votre climatisation réversible est essentiel pour maintenir ses performances, sa longévité et sa qualité d'air. Depuis le décret n°2020-912, certaines obligations réglementaires s'appliquent. Ce guide vous explique tout : ce qui est obligatoire, ce que vous pouvez faire vous-même, et combien ça coûte.</p>

<h2>L'entretien est-il obligatoire ?</h2>

<p>Depuis juillet 2020, la réglementation impose un <strong>contrôle obligatoire</strong> pour les équipements contenant plus de 2 kg de fluide frigorigène (la plupart des multi-split et gainables) :</p>

<table>
<thead><tr><th>Type de système</th><th>Charge fluide typique</th><th>Contrôle obligatoire</th></tr></thead>
<tbody>
<tr><td>Mono-split</td><td>0,5 – 1,5 kg</td><td>Non obligatoire (recommandé)</td></tr>
<tr><td>Multi-split (2-3 UI)</td><td>1,5 – 3 kg</td><td>Selon la charge (&gt; 2 kg = oui)</td></tr>
<tr><td>Multi-split (4-5 UI)</td><td>3 – 5 kg</td><td><strong>Oui, tous les 2 ans</strong></td></tr>
<tr><td>Gainable</td><td>3 – 8 kg</td><td><strong>Oui, tous les 2 ans</strong></td></tr>
</tbody>
</table>

<p>Ce contrôle doit être réalisé par un technicien détenteur d'une <strong>attestation de capacité</strong> pour la manipulation des fluides frigorigènes.</p>

<h2>Ce que vous pouvez faire vous-même</h2>

<p>Certains gestes simples prolongent la durée de vie de votre appareil et maintiennent la qualité de l'air :</p>

<h3>Tous les 2-3 mois</h3>
<ul>
<li><strong>Nettoyer les filtres</strong> de l'unité intérieure : retirez-les, passez-les à l'eau tiède savonneuse, laissez sécher complètement</li>
<li><strong>Dépoussiérer</strong> les entrées et sorties d'air de l'unité intérieure</li>
<li><strong>Vérifier le bon écoulement</strong> du condensat (tuyau d'évacuation non bouché)</li>
</ul>

<h3>Deux fois par an (printemps/automne)</h3>
<ul>
<li><strong>Nettoyer l'unité extérieure</strong> : retirer feuilles, poussière, débris à l'aspirateur ou au jet d'eau basse pression</li>
<li><strong>Vérifier les fixations</strong> et supports de l'unité extérieure</li>
<li><strong>Contrôler le fonctionnement</strong> dans les deux modes (chaud et froid)</li>
</ul>

<h2>Ce que fait le professionnel</h2>

<p>Un technicien RGE effectue un <strong>entretien complet</strong> qui inclut :</p>

<ul>
<li>Contrôle de la pression du fluide frigorigène (R-32 ou R-410A)</li>
<li>Vérification de l'étanchéité du circuit frigorifique</li>
<li>Nettoyage en profondeur de l'échangeur et du ventilateur</li>
<li>Contrôle des connexions électriques</li>
<li>Mesure des performances (températures d'air soufflé, COP réel)</li>
<li>Vérification du bon fonctionnement de la commande et des sécurités</li>
<li>Désinfection antibactérienne de l'unité intérieure</li>
</ul>

<h2>Combien coûte l'entretien ?</h2>

<table>
<thead><tr><th>Type de prestation</th><th>Prix moyen</th></tr></thead>
<tbody>
<tr><td>Visite d'entretien ponctuelle</td><td>100 € – 200 €</td></tr>
<tr><td>Contrat annuel (1 visite)</td><td>150 € – 250 €</td></tr>
<tr><td>Contrat annuel (2 visites + dépannage)</td><td>200 € – 350 €</td></tr>
<tr><td>Dépannage hors contrat</td><td>80 € – 180 € (+ pièces)</td></tr>
<tr><td>Recharge fluide frigorigène</td><td>150 € – 400 €</td></tr>
</tbody>
</table>

<p>💡 <strong>Conseil</strong> : un contrat d'entretien est plus économique à long terme et vous assure une intervention prioritaire en cas de panne. <a href="/marques/daikin">Daikin</a> et <a href="/marques/atlantic">Atlantic</a> proposent des contrats via leur réseau d'installateurs agréés.</p>

<h2>Quand faut-il s'inquiéter ?</h2>

<p>Appelez un professionnel si vous constatez :</p>

<ul>
<li>❄️ <strong>Baisse de performance</strong> : l'appareil refroidit ou chauffe moins bien qu'avant</li>
<li>💧 <strong>Fuites d'eau</strong> à l'intérieur ou givrage anormal de l'unité extérieure</li>
<li>🔊 <strong>Bruits inhabituels</strong> : cliquetis, vibrations, sifflements</li>
<li>👃 <strong>Mauvaises odeurs</strong> : signe de moisissures dans l'échangeur</li>
<li>⚡ <strong>Codes erreur</strong> sur l'écran de la télécommande ou de l'unité</li>
</ul>

<p>👉 <a href="/annuaire">Trouvez un installateur RGE</a> dans votre département pour votre entretien annuel.</p>

<p>📖 Voir aussi : <a href="/glossaire">Glossaire technique</a> | <a href="/faq">FAQ Climatisation</a> | <a href="/marques">Comparatif des marques et SAV</a></p>
`,
    },
    {
        slug: "comparatif-marques-climatisation",
        title: "Comparatif des Marques de Climatisation 2026 : Daikin vs Mitsubishi vs Atlantic",
        excerpt: "Daikin, Mitsubishi Electric, Atlantic, Toshiba, LG ou Fujitsu : quelle marque choisir pour votre climatisation ? Comparatif complet avec avis d'experts : performances, prix, SAV et garantie.",
        date: "2026-02-12",
        author: "Rédaction Cout-Climatisation.fr",
        image: "/images/blog/prix-climatisation-2026.png",
        metaTitle: "Comparatif Marques Climatisation 2026 : Daikin vs Mitsubishi vs Atlantic vs Toshiba",
        metaDescription: "Quelle marque de climatisation choisir en 2026 ? Comparatif Daikin, Mitsubishi, Atlantic, Toshiba, LG, Fujitsu : prix, SEER, SAV, garantie. Avis d'experts.",
        content: `
<p>Le choix de la <strong>marque de climatisation</strong> est déterminant pour la fiabilité, les performances et le confort au quotidien. Ce comparatif analyse en détail les <strong>6 marques leaders</strong> du marché français en 2026 sur des critères objectifs : efficacité énergétique, niveau sonore, SAV, garantie et prix.</p>

<h2>Tableau comparatif global</h2>

<table>
<thead><tr><th>Critère</th><th><a href="/marques/daikin">Daikin</a></th><th><a href="/marques/mitsubishi-electric">Mitsubishi</a></th><th><a href="/marques/atlantic">Atlantic</a></th><th><a href="/marques/toshiba">Toshiba</a></th><th><a href="/marques/lg">LG</a></th><th><a href="/marques/fujitsu">Fujitsu</a></th></tr></thead>
<tbody>
<tr><td><strong>Pays</strong></td><td>🇯🇵 Japon</td><td>🇯🇵 Japon</td><td>🇫🇷 France</td><td>🇯🇵 Japon</td><td>🇰🇷 Corée</td><td>🇯🇵 Japon</td></tr>
<tr><td><strong>SEER max</strong></td><td>8.75</td><td>8.5</td><td>8.0</td><td>8.5</td><td>8.5</td><td>7.7</td></tr>
<tr><td><strong>Silence (dB)</strong></td><td>19 dB</td><td>19 dB</td><td>20 dB</td><td>18 dB</td><td>19 dB</td><td>21 dB</td></tr>
<tr><td><strong>Mono-split</strong></td><td>1 800–3 500 €</td><td>1 600–3 200 €</td><td>1 400–2 800 €</td><td>1 300–2 600 €</td><td>1 200–2 500 €</td><td>1 300–2 400 €</td></tr>
<tr><td><strong>Garantie</strong></td><td>5+5 ans</td><td>5+3 ans</td><td>5+5 ans</td><td>5+5 ans</td><td>10+3 ans</td><td>5+5 ans</td></tr>
<tr><td><strong>SAV France</strong></td><td>★★★★★</td><td>★★★★☆</td><td>★★★★★</td><td>★★★★☆</td><td>★★★☆☆</td><td>★★★★☆</td></tr>
<tr><td><strong>Qualité</strong></td><td>★★★★★</td><td>★★★★★</td><td>★★★★☆</td><td>★★★★☆</td><td>★★★★☆</td><td>★★★★☆</td></tr>
</tbody>
</table>

<h2>Daikin : le leader incontesté</h2>

<p><a href="/marques/daikin">Daikin</a> est le <strong>n°1 mondial</strong> de la climatisation depuis plus de 20 ans. La marque japonaise fabrique ses propres compresseurs et réfrigérants, garantissant un contrôle total sur la qualité. Son SEER record de 8,75 (Perfera) en fait l'appareil le plus économe du marché.</p>

<p><strong>Points forts</strong> : fiabilité exceptionnelle, purification Flash Streamer, réseau DHCE très dense en France.<br/>
<strong>Points faibles</strong> : prix premium (15-25% au-dessus), application Onecta perfectible.</p>

<h2>Mitsubishi Electric : le roi du grand froid</h2>

<p><a href="/marques/mitsubishi-electric">Mitsubishi Electric</a> se distingue par sa technologie exclusive <strong>Hyper Heating</strong> qui maintient 100% de la puissance de chauffage jusqu'à -15°C et fonctionne jusqu'à -25°C. C'est le choix de référence pour les régions froides et montagneuses.</p>

<p><strong>Points forts</strong> : performances par grand froid, gamme gainable premium, capteur 3D i-See.<br/>
<strong>Points faibles</strong> : réseau SAV moins dense que Daikin, gamme entrée de gamme peu différenciante.</p>

<h2>Atlantic : le champion français</h2>

<p><a href="/marques/atlantic">Atlantic</a>, fabricant français (usines à Merville et Billy-Berclau), offre le <strong>meilleur rapport qualité/prix</strong> du marché avec une fabrication locale et un SAV de proximité. Certifié NF PAC et Origine France Garantie.</p>

<p><strong>Points forts</strong> : fabrication française, prix 15-20% sous Daikin, SAV réactif, application Cozytouch.<br/>
<strong>Points faibles</strong> : peu de modèles design, compresseurs Fujitsu (pas de fabrication interne).</p>

<h2>Toshiba : le meilleur rapport qualité-prix</h2>

<p><a href="/marques/toshiba">Toshiba</a>, inventeur du premier split résidentiel en 1969, propose le <strong>Shorai Edge à 18 dB</strong> — le climatiseur le plus silencieux du marché. Son positionnement prix est 10-15% sous Daikin.</p>

<p><strong>Points forts</strong> : silence exceptionnel (18 dB), prix compétitif, design Haori original.<br/>
<strong>Points faibles</strong> : notoriété moindre, distribution via Carrier.</p>

<h2>LG : le design et la connectivité</h2>

<p><a href="/marques/lg">LG</a> se distingue par sa gamme <strong>Artcool</strong> au design miroir ou personnalisable, et sa garantie compresseur de <strong>10 ans</strong> — la meilleure du marché. L'intégration smart home (ThinQ, Google Home, Alexa) est très aboutie.</p>

<p><strong>Points forts</strong> : design exceptionnel, garantie 10 ans compresseur, prix agressif, AirCare.<br/>
<strong>Points faibles</strong> : pas de gainable résidentiel en France, SAV moins structuré.</p>

<h2>Fujitsu General : le choix des pros</h2>

<p><a href="/marques/fujitsu">Fujitsu General</a> est le <strong>fournisseur OEM d'Atlantic</strong> — acheter du Fujitsu, c'est accéder directement au fabricant d'origine. Unités extérieures parmi les plus robustes du marché.</p>

<p><strong>Points forts</strong> : fiabilité pro, fournisseur d'Atlantic, bon rapport qualité/prix, gamme gainable complète.<br/>
<strong>Points faibles</strong> : notoriété grand public faible, design fonctionnel.</p>

<h2>Notre recommandation par usage</h2>

<table>
<thead><tr><th>Votre besoin</th><th>Marque recommandée</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr><td>Fiabilité maximale</td><td><a href="/marques/daikin">Daikin</a></td><td>Compresseurs maison, SEER record</td></tr>
<tr><td>Grand froid / montagne</td><td><a href="/marques/mitsubishi-electric">Mitsubishi Electric</a></td><td>Hyper Heating jusqu'à -25°C</td></tr>
<tr><td>Made in France / budget</td><td><a href="/marques/atlantic">Atlantic</a></td><td>Fabrication française, -20% vs Daikin</td></tr>
<tr><td>Petit budget / silence</td><td><a href="/marques/toshiba">Toshiba</a></td><td>Shorai Edge 18 dB, prix compétitif</td></tr>
<tr><td>Design / smart home</td><td><a href="/marques/lg">LG</a></td><td>Artcool, ThinQ, garantie 10 ans</td></tr>
<tr><td>Pro / gainable</td><td><a href="/marques/fujitsu">Fujitsu General</a></td><td>Robustesse OEM, gamme complète</td></tr>
</tbody>
</table>

<p>👉 <a href="/devis">Comparez les prix</a> des 6 marques avec 3 devis gratuits d'installateurs RGE.</p>
`,
    },
    {
        slug: "climatisation-occasion",
        title: "Climatisation d'Occasion & Reconditionnée : Bonne Affaire ou Piège ?",
        excerpt: "Acheter une climatisation d'occasion ou reconditionnée permet d'économiser 30 à 50%. Mais quels sont les risques ? Fluide frigorigène, garantie, compatibilité : notre analyse complète.",
        date: "2026-02-08",
        author: "Rédaction Cout-Climatisation.fr",
        image: "/images/blog/prix-climatisation-2026.png",
        metaTitle: "Climatisation Occasion & Reconditionnée 2026 : Prix, Risques et Conseils",
        metaDescription: "Climatisation d'occasion ou reconditionnée : économie de 30-50% mais attention aux pièges. Fluide périmé, garantie, installation : notre guide pour éviter les arnaques.",
        content: `
<p>Acheter une <strong>climatisation d'occasion</strong> ou reconditionnée peut sembler tentant pour réduire le budget. Mais est-ce vraiment une bonne idée ? Entre les risques techniques, les contraintes réglementaires et l'absence de garantie, ce guide vous aide à prendre une décision éclairée.</p>

<h2>Prix d'une climatisation d'occasion vs neuf</h2>

<table>
<thead><tr><th>Type</th><th>Prix neuf (pose incluse)</th><th>Prix occasion</th><th>Économie</th></tr></thead>
<tbody>
<tr><td>Mono-split</td><td>1 200 – 3 500 €</td><td>400 – 1 200 €</td><td>30 – 50%</td></tr>
<tr><td>Multi-split</td><td>3 000 – 9 000 €</td><td>1 500 – 4 000 €</td><td>30 – 55%</td></tr>
<tr><td>Gainable</td><td>5 000 – 12 000 €</td><td>Rare sur le marché</td><td>---</td></tr>
</tbody>
</table>

<p>⚠️ <strong>Attention</strong> : ces prix n'incluent pas la pose. L'installation par un professionnel certifié coûte 500 € à 1 500 € supplémentaires, et elle est <strong>indispensable</strong> pour les manipulations de fluide frigorigène.</p>

<h2>Les risques de l'occasion</h2>

<h3>1. Le fluide frigorigène</h3>
<p>Un climatiseur d'occasion peut contenir du <strong>R-410A</strong> (ancien fluide à fort GWP), dont l'approvisionnement devient de plus en plus coûteux en raison de la réglementation F-Gas européenne. Une recharge de R-410A coûte désormais 300 à 600 €, contre 150 € pour du <a href="/glossaire">R-32</a>.</p>

<h3>2. L'absence de garantie</h3>
<p>Aucune garantie constructeur ne s'applique sur un appareil revendu par un particulier. En cas de panne du compresseur (réparation : 800 – 1 500 €), tout est à votre charge. Comparez avec un appareil neuf sous garantie <a href="/marques/lg">10 ans (LG)</a> ou <a href="/marques/daikin">5+5 ans (Daikin)</a>.</p>

<h3>3. La compatibilité technique</h3>
<p>Les liaisons frigorifiques (tubes cuivre) sont dimensionnées spécifiquement. Un appareil d'occasion ne sera pas forcément compatible avec votre installation existante. Le remplacement des liaisons coûte 40-80 €/mètre.</p>

<h3>4. L'efficacité énergétique dégradée</h3>
<p>Un compresseur usé consomme davantage d'électricité. Un appareil de 5 ans peut avoir perdu 10 à 20% de son efficacité (SEER/SCOP), annulant une partie des économies à l'achat.</p>

<h2>Quand l'occasion peut être intéressante</h2>

<ul>
<li><strong>Appareil récent (&lt; 3 ans)</strong> avec facture d'achat et historique d'entretien</li>
<li><strong>Fluide R-32</strong> (pas de R-410A ou R-22 obsolète)</li>
<li><strong>Déstockage professionnel</strong> : certains installateurs vendent des fins de série neuves à prix réduit</li>
<li><strong>Reconditionné certifié</strong> par un professionnel avec garantie de 6-12 mois</li>
</ul>

<h2>Alternative : le déstockage neuf</h2>

<p>Plutôt que l'occasion, cherchez les <strong>fins de série</strong> et <strong>déstockages</strong> chez les distributeurs professionnels. Vous pouvez trouver des appareils neufs avec garantie constructeur à 20-30% de réduction. Les marques comme <a href="/marques/toshiba">Toshiba</a> ou <a href="/marques/fujitsu">Fujitsu</a> proposent déjà des prix très compétitifs en neuf.</p>

<h2>Notre verdict</h2>

<p>Pour la majorité des projets, nous recommandons d'<strong>investir dans du neuf</strong> avec une marque fiable et un installateur RGE. L'économie apparente de l'occasion est souvent gommée par les coûts cachés (recharge fluide, absence de garantie, surconsommation).</p>

<p>👉 <a href="/devis">Demandez 3 devis gratuits</a> pour connaître le vrai prix d'une installation neuve. Avec les <a href="/calculateur-aides">aides disponibles</a> (CEE, TVA 5,5%), l'écart avec l'occasion devient souvent négligeable.</p>
`,
    },
    {
        slug: "devis-climatisation-pieges",
        title: "7 Pièges à Éviter sur un Devis Climatisation (Guide 2026)",
        excerpt: "Comment lire et comparer un devis de climatisation ? Découvrez les 7 pièges les plus fréquents et nos conseils pour ne pas surpayer votre installation.",
        date: "2026-02-05",
        author: "Rédaction Cout-Climatisation.fr",
        image: "/images/blog/prix-climatisation-2026.png",
        metaTitle: "7 Pièges à Éviter sur un Devis Climatisation | Guide Expert 2026",
        metaDescription: "Comment lire un devis de climatisation ? Les 7 pièges les plus courants : prix gonflés, marque absente, mise en service non incluse. Guide pour comparer et négocier.",
        content: `
<p>Recevoir un devis de climatisation peut être déroutant : entre les termes techniques, les marques, les options et les petites lignes, il est facile de se faire piéger. Ce guide vous révèle les <strong>7 erreurs les plus fréquentes</strong> et vous donne les clés pour comparer intelligemment.</p>

<h2>Piège n°1 : La marque et le modèle ne sont pas précisés</h2>

<p>Un devis mentionnant « climatiseur réversible 2,5 kW » sans préciser la marque ni le modèle exact est un <strong>signal d'alarme</strong>. L'installateur peut poser un appareil premier prix à marge maximale.</p>

<p><strong>✅ Ce qu'il faut exiger</strong> : la marque, le modèle exact, la référence fabricant (ex : « Daikin Perfera FTXM25R + RXM25R ») et la classe énergétique SEER/SCOP.</p>

<h2>Piège n°2 : La mise en service n'est pas incluse</h2>

<p>La <strong>mise en service</strong> (test du circuit frigorifique, vérification des pressions, paramétrage) est une étape cruciale. Certains devis la facturent en supplément (200-400 €) ou ne la mentionnent pas du tout.</p>

<p><strong>✅ Vérifiez</strong> que le devis inclut explicitement « Mise en service avec certificat de conformité ». Sans mise en service officielle, la garantie constructeur peut être invalidée chez certaines marques comme <a href="/marques/daikin">Daikin</a>.</p>

<h2>Piège n°3 : Les liaisons frigorifiques sont sous-estimées</h2>

<p>Le devis type prévoit souvent 3 à 5 mètres de liaisons. Au-delà, chaque mètre supplémentaire coûte <strong>40 à 80 €</strong>. Si l'unité extérieure est loin de l'intérieure (balcon en façade opposée, combles...), la facture peut grimper de 300 à 600 €.</p>

<p><strong>✅ Conseil</strong> : demandez une visite technique avant le devis définitif. Un professionnel sérieux viendra toujours sur place mesurer les distances.</p>

<h2>Piège n°4 : L'installateur n'est pas RGE</h2>

<p>Un installateur non <a href="/annuaire">RGE (Reconnu Garant de l'Environnement)</a> ne vous donne pas accès aux <a href="/calculateur-aides">aides financières</a> (CEE, TVA 5,5%). La différence peut représenter <strong>700 à 1 500 € d'économies perdues</strong>.</p>

<p><strong>✅ Vérifiez</strong> : demandez le numéro de qualification RGE et vérifiez-le sur <a href="https://www.faire.gouv.fr" target="_blank" rel="noopener">France Rénov'</a>.</p>

<h2>Piège n°5 : La TVA est à 20% au lieu de 5,5%</h2>

<p>Pour les logements de plus de 2 ans, les travaux de performance énergétique bénéficient d'une <strong>TVA à 5,5%</strong>. Certains devis appliquent la TVA normale à 20%, soit un surcoût de ~15%. Sur un devis de 5 000 €, c'est <strong>630 € de trop</strong>.</p>

<p><strong>✅ Vérifiez</strong> le taux de TVA en bas du devis. Si votre logement a plus de 2 ans et que l'installateur est RGE, la TVA doit être à 5,5%.</p>

<h2>Piège n°6 : Le support mural ou la dalle ne sont pas inclus</h2>

<p>L'unité extérieure nécessite un support : <strong>équerre murale</strong> (80-150 €), <strong>dalle anti-vibrations</strong> (50-100 €), ou <strong>support au sol</strong> (60-120 €). Ces accessoires sont parfois facturés en supplément.</p>

<p><strong>✅ Vérifiez</strong> que le devis mentionne explicitement le support et la visserie. Le percement du mur pour les liaisons doit aussi être inclus.</p>

<h2>Piège n°7 : Pas de mention de la garantie</h2>

<p>Un devis sérieux doit préciser : la <strong>garantie constructeur</strong> (pièces + compresseur), la <strong>garantie de pose</strong> (2 ans minimum), et les conditions de SAV. Comparez : <a href="/marques/lg">LG garantit le compresseur 10 ans</a>, <a href="/marques/daikin">Daikin 5+5 ans</a>.</p>

<p><strong>✅ Exigez</strong> par écrit les durées de garantie et les modalités de SAV (délai d'intervention, pièces incluses ou non).</p>

<h2>Checklist pour comparer vos devis</h2>

<table>
<thead><tr><th>Point à vérifier</th><th>✅ OK</th><th>⚠️ Attention</th></tr></thead>
<tbody>
<tr><td>Marque + modèle exact</td><td>Référence complète</td><td>« Climatiseur 2,5 kW » sans marque</td></tr>
<tr><td>SEER / SCOP</td><td>Classe A++ ou A+++</td><td>Non mentionné</td></tr>
<tr><td>Mise en service incluse</td><td>Oui + certificat</td><td>Non mentionnée ou en supplément</td></tr>
<tr><td>Liaisons frigorifiques</td><td>Longueur précisée</td><td>« Liaison standard 3m »</td></tr>
<tr><td>Qualification RGE</td><td>N° et date de validité</td><td>Non mentionnée</td></tr>
<tr><td>TVA</td><td>5,5% (logement &gt; 2 ans)</td><td>20%</td></tr>
<tr><td>Garantie</td><td>Pièces + compresseur + pose</td><td>Non précisée</td></tr>
</tbody>
</table>

<p>👉 <a href="/devis">Recevez 3 devis gratuits</a> d'installateurs RGE vérifiés pour comparer en toute sérénité.</p>

<p>📖 À lire aussi : <a href="/guides/prix-climatisation-2026">Prix Climatisation 2026</a> | <a href="/marques">Comparatif des Marques</a> | <a href="/calculateur-aides">Calculer mes Aides</a></p>
`,
    },
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
    return GUIDES.find(g => g.slug === slug);
}

export function getAllGuides(): GuideArticle[] {
    return GUIDES;
}
