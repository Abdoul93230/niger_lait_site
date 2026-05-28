export const products = [
  // ── YAOURTS COUPELLES ─────────────────────────────────
  {
    id: 1,
    slug: "yaourt-nature",
    name: "Yaourt Nature",
    category: "yaourts",
    shortDesc: "Le fondamental de la table nigérienne.",
    description:
      "Notre yaourt nature en coupelle est fabriqué chaque matin à partir de lait frais nigérien. Sans additifs, sans conservateurs, riche en calcium et en probiotiques naturels — la base d'une alimentation saine.",
    image: "/images/enssemble.jpg",
    badge: "Bestseller",
    formats: ["125g", "500g"],
    tags: ["Sans additifs", "Probiotiques naturels", "DLC 7 jours"],
    nutrition: { energie: 89, proteines: 3.8, glucides: 13.2, lipides: 2.6, calcium: 120 },
    isNew: false,
    isFeatured: true,
  },
  {
    id: 2,
    slug: "yaourt-fraise",
    name: "Yaourt Fruité Fraise",
    category: "yaourts",
    shortDesc: "La saveur fraise adorée des enfants.",
    description:
      "Un yaourt onctueux en coupelle aux arômes naturels de fraise, sans colorants artificiels. Idéal pour les goûters et petits-déjeuners en famille.",
    image: "/images/fraise.png",
    badge: "Enfants",
    formats: ["125g", "500g"],
    tags: ["Arôme naturel", "Sans colorants", "DLC 10 jours"],
    nutrition: { energie: 95, proteines: 3.5, glucides: 15.2, lipides: 2.4, calcium: 110 },
    isNew: false,
    isFeatured: true,
  },
  {
    id: 3,
    slug: "yaourt-framboise",
    name: "Yaourt Fruité Framboise",
    category: "yaourts",
    shortDesc: "L'acidulé fruité qui réveille les papilles.",
    description:
      "Yaourt en coupelle à la framboise, onctueux et parfumé. Une saveur fruitée et légèrement acidulée qui plaît à toute la famille.",
    image: "/images/framboise.png",
    badge: null,
    formats: ["125g", "500g"],
    tags: ["Arôme naturel", "Sans colorants", "DLC 10 jours"],
    nutrition: { energie: 94, proteines: 3.5, glucides: 15.0, lipides: 2.4, calcium: 110 },
    isNew: false,
    isFeatured: true,
  },
  {
    id: 4,
    slug: "yaourt-peche",
    name: "Yaourt Fruité Pêche",
    category: "yaourts",
    shortDesc: "La douceur veloutée de la pêche.",
    description:
      "Yaourt en coupelle aux arômes de pêche mûre, doux et velouté. Un classique qui rappelle les saveurs d'été.",
    image: "/images/Pêche.png",
    badge: null,
    formats: ["125g", "500g"],
    tags: ["Arôme naturel", "Sans conservateur", "DLC 10 jours"],
    nutrition: { energie: 97, proteines: 3.4, glucides: 15.8, lipides: 2.3, calcium: 108 },
    isNew: false,
    isFeatured: false,
  },
  {
    id: 5,
    slug: "yaourt-abricot",
    name: "Yaourt Fruité Abricot",
    category: "yaourts",
    shortDesc: "La richesse sucrée de l'abricot.",
    description:
      "Yaourt en coupelle à l'abricot, riche et savoureux. Une explosion de saveur fruitée dans chaque cuillerée.",
    image: "/images/abricot.png",
    badge: null,
    formats: ["125g", "500g"],
    tags: ["Arôme naturel", "Sans colorants", "DLC 10 jours"],
    nutrition: { energie: 96, proteines: 3.5, glucides: 15.5, lipides: 2.3, calcium: 109 },
    isNew: false,
    isFeatured: false,
  },
  {
    id: 6,
    slug: "yaourt-coco",
    name: "Yaourt Noix de Coco",
    category: "yaourts",
    shortDesc: "Une touche de paradis tropical.",
    description:
      "L'alliance parfaite entre le yaourt frais Niger-Lait et la douceur exotique de la noix de coco. Une saveur unique qui rappelle les tropiques d'Afrique.",
    image: "/images/coco.png",
    badge: "Exotique",
    formats: ["125g", "500g"],
    tags: ["Arôme naturel coco", "Sans conservateur", "DLC 10 jours"],
    nutrition: { energie: 102, proteines: 3.3, glucides: 16.5, lipides: 3.1, calcium: 105 },
    isNew: false,
    isFeatured: false,
  },
  {
    id: 7,
    slug: "yaourt-ananas",
    name: "Yaourt Aromatisé Ananas",
    category: "yaourts",
    shortDesc: "La fraîcheur tropicale en toute saison.",
    description:
      "Un yaourt vitaminé aux arômes d'ananas, riche en énergie. La collation idéale pour les sportifs et les enfants actifs.",
    image: "/images/ananas.png",
    badge: "Vitaminé",
    formats: ["125g", "500g"],
    tags: ["Riche en vitamines", "Arôme naturel", "DLC 10 jours"],
    nutrition: { energie: 97, proteines: 3.4, glucides: 15.8, lipides: 2.3, calcium: 108 },
    isNew: false,
    isFeatured: false,
  },
  {
    id: 8,
    slug: "yaourt-fruits-exotiques",
    name: "Yaourt Fruits Exotiques",
    category: "yaourts",
    shortDesc: "Le mélange tropical multi-fruits.",
    description:
      "Un yaourt aux saveurs de fruits exotiques mêlés — mangue, fruit de la passion, ananas. Une explosion de goût dans chaque coupelle.",
    image: "/images/exotique.png",
    badge: "Nouveau",
    formats: ["125g", "500g"],
    tags: ["Multi-fruits", "Arôme naturel", "DLC 10 jours"],
    nutrition: { energie: 98, proteines: 3.4, glucides: 16.0, lipides: 2.3, calcium: 107 },
    isNew: true,
    isFeatured: true,
  },
  // ── FORMAT FAMILIAL 500g ───────────────────────────────
  {
    id: 9,
    slug: "yaourt-familial",
    name: "Yaourt Format Familial 500g",
    category: "yaourts",
    shortDesc: "Nature, Fraise, Coco, Vanille — pour toute la famille.",
    description:
      "Lancé en mars 2024, le nouveau format familial 500g est disponible en Nature Sucré, Nature, Vanille, Coco et Fraise. Passez vos commandes au 82001414.",
    image: "/images/492666095_1236357971832699_4501630288635939577_n.jpg",
    badge: "Format familial",
    formats: ["500g"],
    tags: ["Format familial", "5 saveurs", "Disponible depuis mars 2024"],
    nutrition: { energie: 89, proteines: 3.8, glucides: 13.2, lipides: 2.6, calcium: 120 },
    isNew: true,
    isFeatured: true,
  },
  // ── KOSSAM ────────────────────────────────────────────
  {
    id: 10,
    slug: "kossam",
    name: "KOSSAM — Yaourt Liquide",
    category: "yaourts",
    shortDesc: "Saveur du Sahel — à boire fraîchement.",
    description:
      "KOSSAM est le yaourt à boire emblématique de Niger-Lait, lancé pour honorer la tradition laitière du Sahel. Un yaourt liquide onctueux en poche de 200ml, pratique pour toute la journée. Prix : 125 FCFA.",
    image: "/images/kossam.png",
    badge: "Icône Niger-Lait",
    formats: ["200ml"],
    tags: ["Yaourt à boire", "Format poche", "125 FCFA"],
    nutrition: { energie: 72, proteines: 3.0, glucides: 11.0, lipides: 2.1, calcium: 100 },
    isNew: false,
    isFeatured: true,
  },
  // ── LAITS ─────────────────────────────────────────────
  {
    id: 11,
    slug: "djala",
    name: "DJALA — Lait Fermenté",
    category: "laits",
    shortDesc: "Le lait fermenté en bouteille — doux et vanillé.",
    description:
      "DJALA est un lait fermenté en bouteille, au goût doux et légèrement vanillé. Riche en probiotiques naturels, il se consomme directement ou en accompagnement de vos repas. Disponible en bouteille 500ml ou en format restauration 5 litres.",
    image: "/images/djala.png",
    badge: "Probiotiques",
    formats: ["500ml", "5L"],
    tags: ["Lait fermenté", "Riche en probiotiques", "DLC 10 jours"],
    nutrition: { energie: 68, proteines: 3.1, glucides: 9.5, lipides: 2.8, calcium: 112 },
    isNew: false,
    isFeatured: true,
  },
  {
    id: 12,
    slug: "leben-frais",
    name: "LEBEN FRAIS — Lait Fermenté",
    category: "laits",
    shortDesc: "Le goût de la nature — taux MG réduit.",
    description:
      "LEBEN FRAIS est un lait fermenté à taux de matière grasse réduit, conditionné en carton 1 litre. Source de calcium, il convient à tous les profils, notamment ceux qui font attention à leur ligne.",
    image: "/images/leben_1l.png",
    badge: "MG Réduite",
    formats: ["½L", "1L"],
    tags: ["MG réduit", "Source de calcium", "Consommer frais"],
    nutrition: { energie: 50, proteines: 3.4, glucides: 4.2, lipides: 1.2, calcium: 100 },
    isNew: false,
    isFeatured: true,
  },
  {
    id: 13,
    slug: "lait-frais-pasteurise",
    name: "Lait Entier Pasteurisé",
    category: "laits",
    shortDesc: "La pureté du lait nigérien, préservée.",
    description:
      "Notre lait entier est collecté chaque matin et pasteurisé à 72°C selon les normes ISO. Conditionné en sachet 500ml, toute la richesse nutritionnelle du lait frais avec une sécurité alimentaire garantie.",
    image: "/images/lait_cahier.png",
    badge: "100% Nigérien",
    formats: ["500ml"],
    tags: ["Pasteurisé à 72°C", "Sans additifs", "DLC 7 jours"],
    nutrition: { energie: 65, proteines: 3.1, glucides: 4.7, lipides: 3.8, calcium: 118 },
    isNew: false,
    isFeatured: true,
  },
  // ── EAU ZAM-ZAM ───────────────────────────────────────
  {
    id: 14,
    slug: "eau-zamzam-25cl",
    name: "Eau Zam-Zam — Pôt 250ml",
    category: "eau",
    shortDesc: "Une pure fraîcheur — format pratique.",
    description:
      "Eau de table Zam-Zam en pôt de 250ml, produite par Niger-Lait SA. Légère et rafraîchissante, idéale pour les sorties, les enfants et les petits repas.",
    image: "/images/509000350_3479673065502459_1258093926589356224_n.jpg",
    badge: "Fraîcheur",
    formats: ["250ml"],
    tags: ["Eau de table", "Format pratique", "Idéal enfants"],
    nutrition: { energie: 0, proteines: 0, glucides: 0, lipides: 0, calcium: 32 },
    isNew: false,
    isFeatured: true,
  },
  {
    id: 15,
    slug: "eau-zamzam-50cl",
    name: "Eau Zam-Zam — Sachet 500ml",
    category: "eau",
    shortDesc: "L'hydratation quotidienne essentielle.",
    description:
      "Eau de table Zam-Zam en sachet 500ml. \"L'eau pure et naturelle c'est la vie\" — le format préféré des nigériens pour s'hydrater toute la journée.",
    image: "/images/488485340_1214652250669938_4582371166801414313_n.jpg",
    badge: "Bestseller",
    formats: ["500ml"],
    tags: ["Format journalier", "Légère", "Fraîche"],
    nutrition: { energie: 0, proteines: 0, glucides: 0, lipides: 0, calcium: 32 },
    isNew: false,
    isFeatured: false,
  },
];

export const categories = [
  { id: "tous", label: "Tous les produits", count: products.length },
  { id: "yaourts", label: "Yaourts", count: products.filter((p) => p.category === "yaourts").length },
  { id: "laits", label: "Laits", count: products.filter((p) => p.category === "laits").length },
  { id: "eau", label: "Eau Zam-Zam", count: products.filter((p) => p.category === "eau").length },
];

export const storeLocations = [
  { id: 1, name: "Supermarché Score Niamey", address: "Avenue de l'Afrique, Plateau", city: "Niamey", phone: "+227 20 73 XX XX", type: "supermarche", lat: 13.512, lng: 2.112 },
  { id: 2, name: "Alimentation Générale Koira Kano", address: "Quartier Koira Kano", city: "Niamey", phone: "+227 20 74 XX XX", type: "epicerie", lat: 13.52, lng: 2.095 },
  { id: 3, name: "Dépôt Zone Industrielle (Usine)", address: "Route Kalmaharo, Zone Industrielle", city: "Niamey", phone: "+227 20 74 40 17", type: "grossiste", lat: 13.508, lng: 2.118 },
  { id: 4, name: "Dépôt Grossiste Ibrahim", address: "Route Kalmaharo, km 5", city: "Niamey", phone: "+227 90 XX XX XX", type: "grossiste", lat: 13.535, lng: 2.082 },
  { id: 5, name: "Alimentation Moderne Zinder", address: "Centre-ville Zinder", city: "Zinder", phone: "+227 20 51 XX XX", type: "supermarche", lat: 13.805, lng: 8.988 },
  { id: 6, name: "Épicerie Centrale Tahoua", address: "Marché Central Tahoua", city: "Tahoua", phone: "+227 20 61 XX XX", type: "epicerie", lat: 14.888, lng: 5.265 },
];

export const recipes = [
  {
    id: 1,
    slug: "smoothie-mangue-yaourt-nature",
    title: "Smoothie Mangue & Yaourt Nature",
    category: "Boissons",
    image: "/images/enssemble.jpg",
    prepTime: 5,
    difficulty: "Facile",
    servings: 2,
    productUsed: "yaourt-nature",
    ingredients: ["2 pots de Yaourt Nature Niger-Lait (250g)", "1 mangue mûre", "2 c. à soupe de miel", "Quelques glaçons"],
    steps: [
      "Éplucher et couper la mangue en morceaux.",
      "Mettre tous les ingrédients dans un blender.",
      "Mixer pendant 30 secondes jusqu'à obtenir une texture lisse.",
      "Servir immédiatement dans des grands verres.",
    ],
    tags: ["Petit-déjeuner", "Sport", "Enfants"],
    nutrition: { kcal: 180, proteines: "6g", glucides: "32g", lipides: "4g" },
  },
  {
    id: 2,
    slug: "thiakry-nigerien",
    title: "Thiakry Nigérien au LEBEN FRAIS",
    category: "Desserts",
    image: "/images/leben_1l.png",
    prepTime: 15,
    difficulty: "Facile",
    servings: 4,
    productUsed: "leben-frais",
    ingredients: ["500ml de LEBEN FRAIS Niger-Lait", "200g de couscous mil cuit", "4 c. à soupe de sucre", "1 c. à café de vanille", "Raisins secs (optionnel)"],
    steps: [
      "Cuire le couscous de mil et laisser refroidir complètement.",
      "Mélanger le couscous refroidi avec le LEBEN FRAIS Niger-Lait.",
      "Ajouter le sucre et la vanille, bien mélanger.",
      "Réfrigérer 30 minutes avant de servir.",
    ],
    tags: ["Traditionnel", "Dessert", "Ramadan"],
    nutrition: { kcal: 220, proteines: "8g", glucides: "38g", lipides: "5g" },
  },
  {
    id: 3,
    slug: "bouillie-mil-lait-frais",
    title: "Bouillie de Mil au Lait Pasteurisé",
    category: "Petit-déjeuner",
    image: "/images/lait_cahier.png",
    prepTime: 20,
    difficulty: "Facile",
    servings: 4,
    productUsed: "lait-frais-pasteurise",
    ingredients: ["500ml de Lait Entier Pasteurisé Niger-Lait", "200g de farine de mil", "2 c. à soupe de sucre", "1 pincée de sel", "Eau selon consistance souhaitée"],
    steps: [
      "Délayer la farine de mil dans un peu d'eau froide.",
      "Porter le Lait Pasteurisé Niger-Lait à ébullition avec l'eau.",
      "Verser le mélange farine en remuant constamment.",
      "Cuire 10 minutes à feu doux, ajouter sucre et sel.",
    ],
    tags: ["Traditionnel", "Petit-déjeuner", "Enfants"],
    nutrition: { kcal: 195, proteines: "7g", glucides: "35g", lipides: "4g" },
  },
];

export const blogPosts = [
  {
    id: 1,
    slug: "incin-kanmu-points-de-vente-niamey",
    title: "Points de vente INCIN KANMU à Niamey — Trouvez le kiosque le plus proche",
    category: "Initiative Sociale",
    excerpt: "Découvrez les points de vente de nos bénéficiaires INCIN KANMU à Niamey. Nos kiosques sont désormais répartis dans plusieurs quartiers de la capitale afin de rapprocher les produits Niger-Lait des familles et soutenir l'autonomisation économique des femmes et des jeunes.",
    fullText: `Découvrez les points de vente de nos bénéficiaires INCIN KANMU à Niamey 📍

Nos kiosques sont désormais répartis dans plusieurs quartiers de la capitale afin de rapprocher les produits Niger-Lait des familles et soutenir l'autonomisation économique des femmes et des jeunes 🚀❤️.

Retrouvez le point de vente le plus proche de chez vous grâce à la géolocalisation ci-dessous.

Une initiative de NIGER-LAIT S.A sous le haut parrainage du Gouvernorat de Niamey.`,
    date: "Mai 2026",
    readTime: 2,
    images: ["/images/actualite1.jpg"],
    mapsEmbed: "https://www.google.com/maps/d/embed?mid=1ghFahKf91Zf4SXSVazz8-VRtnlZ3bzg&ehbc=2E312F&ll=13.525779691653776%2C2.117405550628799&z=12",
    tags: ["#NigerLait", "#IncinKanmu"],
    highlight: true,
  },
  {
    id: 2,
    slug: "visite-ministre-commerce-consommons-local",
    title: "Le Ministre du Commerce visite Niger-Lait S.A — Semaine \"Consommons Local\"",
    category: "Événement",
    excerpt: "Niger-Lait S.A. a eu l'honneur d'accueillir le Ministre du Commerce et de l'Industrie, M. Abdoulaye Seydou, dans le cadre de la Semaine du \"Consommons local\". Une visite placée sous le signe de la souveraineté alimentaire et de la promotion de la production locale.",
    fullText: `Aujourd'hui, Niger-Lait S.A. a eu l'honneur d'accueillir le Ministre du Commerce et de l'Industrie, M. Abdoulaye Seydou, dans le cadre de la Semaine du "Consommons local".

Une visite placée sous le signe de la souveraineté alimentaire et de la promotion de la production locale — des valeurs que Niger-Lait défend et incarne depuis plus de 30 ans.

En partageant la vision d'un Niger plus autonome et résilient, nous réaffirmons notre engagement à transformer le lait local en moteur de développement national. 🥛🇳🇪`,
    date: "Avril 2026",
    readTime: 3,
    images: ["/images/actualite2.jpg"],
    mapsEmbed: null,
    tags: ["#NigerLait", "#ConsommonsLocal", "#SouverainetéAlimentaire", "#MadeInNiger"],
    highlight: true,
  },
  {
    id: 3,
    slug: "challenge-incin-kanmu-gagnants",
    title: "Challenge INCIN KANMU — Félicitations à nos 3 derniers gagnants !",
    category: "Challenge",
    excerpt: "Félicitations à nos trois derniers gagnants ! Bravo à ces trois participants qui repartent chacun avec 5.000 FCFA. Le challenge continue — les prochains gagnants remporteront 2.000 FCFA. Merci à tous pour votre participation et votre amour pour les produits Niger-Lait.",
    fullText: `Félicitations à nos trois (3) derniers gagnants ! 🎉

Bravo à ces trois participants qui repartent chacun avec 5.000 FCFA 💰👏

Le challenge continue toujours, mais tous les prochains gagnants remporteront désormais 2.000 FCFA, comme indiqué dans les règles du jeu.

Merci à tous pour votre participation, votre engagement et votre amour pour les produits Niger-Lait !`,
    date: "Décembre 2025",
    readTime: 2,
    images: ["/images/actualite3.jpg", "/images/actualite4.jpg", "/images/actualite5.jpg"],
    mapsEmbed: null,
    tags: ["#NigerLait", "#IncinKanmu", "#Challenge"],
    highlight: false,
  },
];

export const timeline = [
  { year: "1990", title: "Fondation de Niger-Lait SA", desc: "Niger-Lait SA est créée à Niamey, Zone industrielle Route Kalmaharo, avec la vision de fournir du lait local de qualité à toutes les familles nigériennes." },
  { year: "1995", title: "Lancement KOSSAM & Yaourts", desc: "Lancement du yaourt liquide KOSSAM «Saveur du Sahel» et de la gamme de yaourts aromatisés en coupelles, accueillis avec enthousiasme par les consommateurs." },
  { year: "2003", title: "Eau Zam-Zam", desc: "Extension de la gamme avec le lancement de l'eau de table Zam-Zam en pôt de 250ml — «Une pure fraîcheur» pour toutes les familles du Niger." },
  { year: "2006", title: "Certification ISO", desc: "Niger-Lait SA obtient la certification ISO, récompensant son engagement envers la qualité, la sécurité alimentaire et le respect des normes internationales." },
  { year: "2015", title: "Expansion Nationale", desc: "Niger-Lait distribue ses produits dans toutes les grandes villes du Niger : Zinder, Maradi, Tahoua, Agadez — avec plus de 500 000 familles servies." },
  { year: "2024", title: "Modernisation & Format Familial", desc: "Nouvelle ligne de production modernisée, lancement du format familial 500g et de nouvelles saveurs — renforçant la gamme la plus complète du Niger." },
];

export const values = [
  { icon: "🏅", title: "Qualité ISO depuis 2006", desc: "Chaque produit est contrôlé selon les normes ISO. Pasteurisation à 72°C, chaîne du froid maîtrisée, DLC garantie — «Dites OUI aux produits de qualité»." },
  { icon: "🤝", title: "Proximité Locale", desc: "Nous travaillons avec des éleveurs nigériens pour garantir un approvisionnement local et soutenir l'économie du Niger. «Nous accompagnons la vie.»" },
  { icon: "🌍", title: "Engagement Durable", desc: "Emballages recyclables, gestion économe de l'eau et réduction de notre empreinte carbone : l'avenir est notre priorité, depuis la Zone industrielle de Niamey." },
];
