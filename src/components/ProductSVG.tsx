/**
 * ProductSVG — Illustrations SVG fidèles aux vrais emballages Niger-Lait S.A
 * Basées sur les photos des produits réels (packaging photos)
 */

/* ─── KOSSAM Yaourt Liquide poche 200ml ─────────────────────────────── */
export function KossamSVG({ size = 200 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Poche plastique forme */}
      <path d="M40 30 Q38 10 60 8 L140 8 Q162 10 160 30 L165 200 Q165 230 100 235 Q35 230 35 200 Z"
        fill="url(#kossamBg)" stroke="#1565C0" strokeWidth="2"/>
      {/* Bande top bleue */}
      <rect x="38" y="8" width="124" height="40" rx="8" fill="#1565C0"/>
      {/* Nom KOSSAM en blanc */}
      <text x="100" y="32" textAnchor="middle" fill="white" fontSize="20" fontWeight="900"
        fontFamily="Arial Black, sans-serif" letterSpacing="2">KOSSAM</text>
      {/* Silhouette carte du Niger + footballeur */}
      <ellipse cx="100" cy="100" rx="55" ry="65" fill="#1E88E5" opacity="0.3"/>
      {/* Carte du Niger stylisée */}
      <path d="M65 70 Q75 60 90 65 Q105 58 120 68 Q135 72 130 90 Q125 108 115 118 Q100 128 85 120 Q70 110 65 90 Z"
        fill="#1565C0" opacity="0.5"/>
      {/* Footballeur silhouette */}
      <circle cx="95" cy="88" r="8" fill="white" opacity="0.9"/>
      <path d="M95 96 L90 115 L85 128 M95 96 L100 115 L105 128 M88 105 L102 105"
        stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9"/>
      {/* Tagline */}
      <text x="100" y="155" textAnchor="middle" fill="#1565C0" fontSize="9" fontWeight="700"
        fontFamily="Inter, sans-serif">Saveur du Sahel</text>
      <text x="100" y="167" textAnchor="middle" fill="#333" fontSize="8" fontFamily="Inter, sans-serif">
        Yaourt Liquide
      </text>
      {/* Volume */}
      <rect x="60" y="178" width="80" height="20" rx="4" fill="#1565C0"/>
      <text x="100" y="192" textAnchor="middle" fill="white" fontSize="12" fontWeight="700"
        fontFamily="Arial, sans-serif">200 ML</text>
      {/* Bas poche */}
      <path d="M35 200 Q35 230 100 235 Q165 230 165 200" fill="#1565C0" opacity="0.2"/>
      <defs>
        <linearGradient id="kossamBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E3F2FD"/>
          <stop offset="50%" stopColor="#BBDEFB"/>
          <stop offset="100%" stopColor="#90CAF9"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── DJALA Lait fermenté bouteille ──────────────────────────────────── */
export function DjalaSVG({ size = 200 }: { size?: number }) {
  return (
    <svg width={size * 0.6} height={size * 1.5} viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bouchon rouge */}
      <rect x="42" y="4" width="36" height="18" rx="6" fill="#D32F2F"/>
      {/* Col bouteille */}
      <path d="M48 22 L44 50 L34 70 L34 265 Q34 280 60 280 Q86 280 86 265 L86 70 L76 50 L72 22 Z"
        fill="url(#djalaBottle)" stroke="#B71C1C" strokeWidth="1.5"/>
      {/* Étiquette fond crème */}
      <rect x="36" y="90" width="48" height="140" rx="6" fill="#FFF8E1"/>
      <rect x="36" y="90" width="48" height="4" fill="#D32F2F"/>
      <rect x="36" y="226" width="48" height="4" fill="#D32F2F"/>
      {/* Vache illustration */}
      <ellipse cx="60" cy="148" rx="18" ry="14" fill="white" stroke="#5C2010" strokeWidth="1.5"/>
      <circle cx="60" cy="135" r="9" fill="white" stroke="#5C2010" strokeWidth="1.5"/>
      <path d="M53 128 Q56 123 60 124 Q64 123 67 128" fill="#5C2010"/>
      {/* Taches vache */}
      <ellipse cx="57" cy="146" rx="5" ry="6" fill="#5C2010" opacity="0.6"/>
      <ellipse cx="65" cy="152" rx="4" ry="5" fill="#5C2010" opacity="0.4"/>
      {/* Nom DJALA */}
      <text x="60" y="106" textAnchor="middle" fill="#D32F2F" fontSize="15" fontWeight="900"
        fontFamily="Arial Black, sans-serif" letterSpacing="1">DJALA</text>
      {/* Vanille */}
      <text x="60" y="175" textAnchor="middle" fill="#5C2010" fontSize="8" fontWeight="600"
        fontFamily="Inter, sans-serif">Vanille</text>
      <text x="60" y="186" textAnchor="middle" fill="#777" fontSize="7" fontFamily="Inter, sans-serif">
        Lait fermenté
      </text>
      {/* Bas étiquette */}
      <text x="60" y="215" textAnchor="middle" fill="#D32F2F" fontSize="7" fontWeight="700"
        fontFamily="Inter, sans-serif">NIGER-LAIT S.A</text>
      <text x="60" y="224" textAnchor="middle" fill="#999" fontSize="6" fontFamily="Inter, sans-serif">
        Conserver au frais
      </text>
      {/* Reflet bouteille */}
      <path d="M44 75 L46 240" stroke="rgba(255,255,255,0.4)" strokeWidth="4" strokeLinecap="round"/>
      <defs>
        <linearGradient id="djalaBottle" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFCDD2"/>
          <stop offset="30%" stopColor="#FFEBEE"/>
          <stop offset="70%" stopColor="#FFEBEE"/>
          <stop offset="100%" stopColor="#EF9A9A"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── LEBEN FRAIS Carton 1L ───────────────────────────────────────────── */
export function LebenFraisSVG({ size = 200 }: { size?: number }) {
  return (
    <svg width={size * 0.75} height={size * 1.3} viewBox="0 0 150 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Carton principal */}
      <rect x="20" y="30" width="110" height="210" rx="4" fill="url(#lebenGreen)"/>
      {/* Toit carton */}
      <path d="M20 30 L75 8 L130 30 Z" fill="#2E7D32"/>
      {/* Partie haute verte */}
      <rect x="20" y="30" width="110" height="70" fill="#2E7D32"/>
      {/* Logo Niger-Lait zone */}
      <rect x="25" y="35" width="100" height="30" rx="3" fill="white" opacity="0.15"/>
      <text x="75" y="46" textAnchor="middle" fill="white" fontSize="7" fontWeight="700"
        fontFamily="Arial, sans-serif" letterSpacing="1">NIGER-LAIT S.A.</text>
      {/* Vache logo */}
      <circle cx="35" cy="43" r="8" fill="white" opacity="0.9"/>
      <text x="35" y="47" textAnchor="middle" fontSize="9">🐄</text>
      {/* LEBEN FRAIS gros */}
      <text x="75" y="74" textAnchor="middle" fill="white" fontSize="16" fontWeight="900"
        fontFamily="Arial Black, sans-serif" letterSpacing="0.5">LEBEN FRAIS</text>
      {/* Séparateur */}
      <rect x="20" y="100" width="110" height="2" fill="#1B5E20"/>
      {/* Zone centrale crémeuse */}
      <rect x="20" y="102" width="110" height="110" fill="#F9FBE7"/>
      {/* Illustration nature / vache */}
      <ellipse cx="75" cy="152" rx="45" ry="35" fill="#DCEDC8" opacity="0.6"/>
      <text x="75" y="160" textAnchor="middle" fontSize="36">🌿</text>
      {/* Taglines */}
      <text x="75" y="192" textAnchor="middle" fill="#2E7D32" fontSize="8" fontWeight="700"
        fontFamily="Inter, sans-serif">LAIT FERMENTÉ</text>
      <text x="75" y="202" textAnchor="middle" fill="#555" fontSize="7" fontFamily="Inter, sans-serif">
        Taux de Matière Grasse Réduit
      </text>
      {/* Bande inférieure verte */}
      <rect x="20" y="212" width="110" height="28" fill="#2E7D32"/>
      <text x="75" y="222" textAnchor="middle" fill="white" fontSize="8" fontWeight="700"
        fontFamily="Inter, sans-serif">CONSOMMER FRAIS · 6°C max</text>
      {/* Slogan bas */}
      <text x="75" y="233" textAnchor="middle" fill="#A5D6A7" fontSize="7" fontStyle="italic"
        fontFamily="serif">Le goût de la nature</text>
      {/* Volume */}
      <rect x="20" y="240" width="110" height="0" fill="none"/>
      <text x="130" y="236" textAnchor="end" fill="white" fontSize="12" fontWeight="900"
        fontFamily="Arial Black, sans-serif">1litre</text>
      {/* Tableau nutrition mini */}
      <rect x="85" y="108" width="42" height="56" rx="2" fill="white" stroke="#C8E6C9" strokeWidth="0.5"/>
      <text x="106" y="117" textAnchor="middle" fill="#2E7D32" fontSize="5" fontWeight="700">COMPOSITION</text>
      <text x="106" y="125" textAnchor="middle" fill="#555" fontSize="4.5">pour 100 ml</text>
      {[
        ["Valeur éner.", "50 kcal"],
        ["Lipides", "1.4g"],
        ["Protéines", "4.1g"],
        ["Glucides", "4.9g"],
        ["Calcium", "100mg"],
      ].map(([k, v], i) => (
        <g key={k}>
          <text x="88" y={134 + i * 8} fill="#555" fontSize="4">{k}</text>
          <text x="125" y={134 + i * 8} textAnchor="end" fill="#333" fontSize="4" fontWeight="600">{v}</text>
        </g>
      ))}
      {/* Riche en calcium badge */}
      <circle cx="42" cy="140" r="16" fill="#2E7D32" opacity="0.9"/>
      <text x="42" y="136" textAnchor="middle" fill="white" fontSize="5" fontWeight="700">riche en</text>
      <text x="42" y="144" textAnchor="middle" fill="#F9A825" fontSize="6" fontWeight="900">calcium</text>
      <defs>
        <linearGradient id="lebenGreen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#388E3C"/>
          <stop offset="40%" stopColor="#43A047"/>
          <stop offset="100%" stopColor="#2E7D32"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Lait Entier Pasteurisé Sachet 500ml ─────────────────────────────── */
export function LaitSachetSVG({ size = 200 }: { size?: number }) {
  return (
    <svg width={size * 0.85} height={size * 1.1} viewBox="0 0 170 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sachet plastique souple */}
      <path d="M30 20 Q28 4 85 4 Q142 4 140 20 L145 170 Q145 200 85 205 Q25 200 25 170 Z"
        fill="url(#sachetBg)" stroke="#1B5E20" strokeWidth="1.5"/>
      {/* Joint haut */}
      <path d="M28 20 Q85 10 142 20" stroke="#1B5E20" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Zone logo haut */}
      <path d="M32 26 Q85 18 138 26 L136 65 Q85 58 34 65 Z" fill="#1565C0"/>
      <text x="85" y="38" textAnchor="middle" fill="white" fontSize="9" fontWeight="700"
        fontFamily="Arial, sans-serif" letterSpacing="1">NIGER-LAIT SA</text>
      <text x="85" y="50" textAnchor="middle" fill="white" fontSize="7"
        fontFamily="Inter, sans-serif">Tenir au frais</text>
      {/* Marguerites / herbe illustration */}
      <ellipse cx="85" cy="120" rx="48" ry="38" fill="#E8F5E9" opacity="0.8"/>
      {/* Fleurs stylisées */}
      {[55, 75, 95, 115].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={110 + (i % 2) * 8} r="3" fill="white"/>
          <circle cx={x} cy={110 + (i % 2) * 8} r="1.5" fill="#FDD835"/>
          {[0,60,120,180,240,300].map((angle, j) => (
            <ellipse key={j} cx={x + Math.cos(angle*Math.PI/180)*4.5}
              cy={110 + (i%2)*8 + Math.sin(angle*Math.PI/180)*4.5}
              rx="1.5" ry="2.5"
              transform={`rotate(${angle}, ${x + Math.cos(angle*Math.PI/180)*4.5}, ${110 + (i%2)*8 + Math.sin(angle*Math.PI/180)*4.5})`}
              fill="white" opacity="0.7"/>
          ))}
        </g>
      ))}
      {/* Verre de lait SVG */}
      <path d="M72 78 L68 105 Q68 112 85 112 Q102 112 102 105 L98 78 Z" fill="white" opacity="0.9"/>
      <path d="M72 78 L98 78" stroke="#BBDEFB" strokeWidth="1"/>
      <ellipse cx="85" cy="78" rx="13" ry="3" fill="white"/>
      {/* Lait liquide */}
      <path d="M70 95 Q85 98 100 95 L102 105 Q102 112 85 112 Q68 112 68 105 Z" fill="#E3F2FD" opacity="0.6"/>
      {/* Texte produit */}
      <text x="85" y="148" textAnchor="middle" fill="#1B5E20" fontSize="13" fontWeight="900"
        fontFamily="Arial Black, sans-serif">Lait Entier</text>
      <text x="85" y="162" textAnchor="middle" fill="#1565C0" fontSize="10" fontWeight="700"
        fontFamily="Arial, sans-serif">Pasteurisé</text>
      {/* Volume + bandeau bas */}
      <path d="M25 172 Q25 200 85 205 Q145 200 145 172 L143 158 Q85 165 27 158 Z"
        fill="#1B5E20" opacity="0.85"/>
      <text x="85" y="185" textAnchor="middle" fill="white" fontSize="14" fontWeight="900"
        fontFamily="Arial Black, sans-serif">500 ML</text>
      {/* Reflet */}
      <path d="M35 30 L38 160" stroke="rgba(255,255,255,0.35)" strokeWidth="5" strokeLinecap="round"/>
      <defs>
        <linearGradient id="sachetBg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C8E6C9"/>
          <stop offset="30%" stopColor="#F1F8E9"/>
          <stop offset="70%" stopColor="#F1F8E9"/>
          <stop offset="100%" stopColor="#A5D6A7"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── ZAM-ZAM Pôt 250ml ──────────────────────────────────────────────── */
export function ZamZamPotSVG({ size = 200 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Corps du pôt transparent */}
      <path d="M40 60 L36 175 Q36 195 100 198 Q164 195 164 175 L160 60 Z"
        fill="url(#potWater)" stroke="#BBDEFB" strokeWidth="1.5"/>
      {/* Eau à l'intérieur */}
      <path d="M40 130 L36 175 Q36 195 100 198 Q164 195 164 175 L160 130 Q100 125 40 130 Z"
        fill="#90CAF9" opacity="0.4"/>
      {/* Couvercle bleu */}
      <ellipse cx="100" cy="60" rx="64" ry="16" fill="url(#lidBlue)"/>
      <ellipse cx="100" cy="56" rx="62" ry="14" fill="#1565C0"/>
      {/* ZAM-ZAM sur couvercle */}
      <ellipse cx="100" cy="44" rx="46" ry="24" fill="#1565C0"/>
      <ellipse cx="100" cy="42" rx="44" ry="22" fill="url(#lidGrad)" stroke="white" strokeWidth="1.5"/>
      {/* Nom ZAM-ZAM stylisé */}
      <text x="100" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="900"
        fontFamily="Arial Black, sans-serif" letterSpacing="1" style={{ fontStyle: "italic" }}>ZAM-ZAM</text>
      <text x="100" y="50" textAnchor="middle" fill="#BBDEFB" fontSize="7" fontWeight="600"
        fontFamily="Inter, sans-serif" letterSpacing="2">DE TABLE</text>
      {/* Eau de table sur couvercle */}
      <text x="100" y="66" textAnchor="middle" fill="white" fontSize="18" fontWeight="900"
        fontFamily="Arial Black, sans-serif" style={{ fontStyle: "italic" }}>Eau</text>
      {/* Éclaboussures glaçons sur pot */}
      <path d="M55 80 Q70 68 100 72 Q130 68 145 80" stroke="#E3F2FD" strokeWidth="2" fill="none"/>
      {/* Glaçon 1 */}
      <path d="M60 100 Q55 92 65 88 Q72 86 75 95 Q78 104 68 106 Z" fill="white" opacity="0.6"/>
      {/* Glaçon 2 */}
      <path d="M118 105 Q115 95 125 90 Q134 88 136 98 Q138 108 126 110 Z" fill="white" opacity="0.5"/>
      {/* Bulles d'eau */}
      <circle cx="80" cy="145" r="4" fill="white" opacity="0.3"/>
      <circle cx="120" cy="155" r="3" fill="white" opacity="0.25"/>
      <circle cx="100" cy="165" r="5" fill="white" opacity="0.2"/>
      {/* Volume */}
      <text x="100" y="188" textAnchor="middle" fill="#1565C0" fontSize="11" fontWeight="700"
        fontFamily="Arial, sans-serif">250ml</text>
      {/* Reflet pot */}
      <path d="M46 65 L42 170" stroke="rgba(255,255,255,0.4)" strokeWidth="6" strokeLinecap="round"/>
      <defs>
        <linearGradient id="potWater" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E3F2FD" stopOpacity="0.7"/>
          <stop offset="40%" stopColor="#F5FDFF" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#BBDEFB" stopOpacity="0.6"/>
        </linearGradient>
        <linearGradient id="lidBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1E88E5"/>
          <stop offset="100%" stopColor="#0D47A1"/>
        </linearGradient>
        <linearGradient id="lidGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1976D2"/>
          <stop offset="100%" stopColor="#0D47A1"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── ZAM-ZAM Sachet 500ml ───────────────────────────────────────────── */
export function ZamZamSachetSVG({ size = 200 }: { size?: number }) {
  return (
    <svg width={size * 0.9} height={size * 1.1} viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sachet souple */}
      <path d="M25 15 Q23 4 90 4 Q157 4 155 15 L158 180 Q158 205 90 210 Q22 205 22 180 Z"
        fill="url(#zamSachetBg)" stroke="#1565C0" strokeWidth="1.5"/>
      {/* Joint soudé haut */}
      <path d="M25 15 Q90 8 155 15" stroke="#1565C0" strokeWidth="3" fill="none"/>
      {/* Fond bleu haut */}
      <rect x="25" y="18" width="130" height="55" rx="0" fill="#1565C0" opacity="0.9"/>
      {/* Paysage oasis / cascade */}
      <rect x="25" y="73" width="130" height="90" fill="#E3F2FD" opacity="0.8"/>
      <path d="M25 100 Q50 88 75 95 Q100 88 125 95 Q145 88 155 95 L155 163 L25 163 Z"
        fill="#BBDEFB" opacity="0.5"/>
      {/* Palmier */}
      <rect x="86" y="90" width="5" height="40" fill="#795548"/>
      <path d="M88 90 Q75 78 60 82 M88 90 Q88 75 75 70 M88 90 Q102 76 118 80 M88 90 Q95 74 110 76"
        stroke="#388E3C" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Rocher / source */}
      <path d="M55 140 Q60 128 70 130 Q80 125 90 130 Q100 126 110 130 Q120 128 125 140 Z"
        fill="#90A4AE"/>
      {/* Cascade eau */}
      <path d="M90 130 Q92 138 90 148 Q88 158 90 163" stroke="#90CAF9" strokeWidth="3"
        strokeLinecap="round" fill="none"/>
      {/* ZAM-ZAM top */}
      <text x="90" y="36" textAnchor="middle" fill="white" fontSize="20" fontWeight="900"
        fontFamily="Arial Black, sans-serif" letterSpacing="1" style={{ fontStyle: "italic" }}>ZAM-ZAM</text>
      <text x="90" y="50" textAnchor="middle" fill="#BBDEFB" fontSize="8" fontFamily="Inter, sans-serif"
        letterSpacing="3">DE TABLE</text>
      <text x="90" y="64" textAnchor="middle" fill="white" fontSize="8" fontStyle="italic"
        fontFamily="serif">"L'eau pure et naturelle c'est la vie"</text>
      {/* ZAM-ZAM bas */}
      <text x="90" y="185" textAnchor="middle" fill="#1565C0" fontSize="16" fontWeight="900"
        fontFamily="Arial Black, sans-serif" style={{ fontStyle: "italic" }}>ZAM-ZAM</text>
      {/* Volume */}
      <rect x="110" y="190" width="40" height="14" rx="3" fill="#1565C0"/>
      <text x="130" y="201" textAnchor="middle" fill="white" fontSize="9" fontWeight="700"
        fontFamily="Arial, sans-serif">500 ML</text>
      {/* Reflet */}
      <path d="M32 20 L30 175" stroke="rgba(255,255,255,0.3)" strokeWidth="6" strokeLinecap="round"/>
      <defs>
        <linearGradient id="zamSachetBg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#BBDEFB"/>
          <stop offset="35%" stopColor="#E3F2FD"/>
          <stop offset="65%" stopColor="#E3F2FD"/>
          <stop offset="100%" stopColor="#90CAF9"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Yaourt Coupelle générique ──────────────────────────────────────── */
export function YaourtCoupelleSVG({
  flavor = "nature",
  size = 160,
}: {
  flavor?: "nature" | "fraise" | "peche" | "coco" | "orange" | "ananas" | "framboises" | "fruits-exotiques";
  size?: number;
}) {
  const config: Record<string, { lidColor: string; lidColor2: string; fruitEmoji: string; textColor: string; bg: string }> = {
    nature:          { lidColor: "#90CAF9", lidColor2: "#1565C0", fruitEmoji: "",   textColor: "#1565C0", bg: "#E3F2FD" },
    fraise:          { lidColor: "#E91E63", lidColor2: "#880E4F", fruitEmoji: "🍓", textColor: "#880E4F", bg: "#FCE4EC" },
    peche:           { lidColor: "#FF9800", lidColor2: "#E65100", fruitEmoji: "🍑", textColor: "#E65100", bg: "#FFF3E0" },
    coco:            { lidColor: "#795548", lidColor2: "#3E2723", fruitEmoji: "🥥", textColor: "#3E2723", bg: "#EFEBE9" },
    orange:          { lidColor: "#FF6F00", lidColor2: "#E65100", fruitEmoji: "🍊", textColor: "#E65100", bg: "#FFF8E1" },
    ananas:          { lidColor: "#FDD835", lidColor2: "#F57F17", fruitEmoji: "🍍", textColor: "#F57F17", bg: "#FFFDE7" },
    framboises:      { lidColor: "#C62828", lidColor2: "#B71C1C", fruitEmoji: "🫐", textColor: "#B71C1C", bg: "#FFEBEE" },
    "fruits-exotiques": { lidColor: "#8BC34A", lidColor2: "#33691E", fruitEmoji: "🌺", textColor: "#33691E", bg: "#F1F8E9" },
  };
  const c = config[flavor] || config.nature;
  const flavorLabel: Record<string, string> = {
    nature: "Nature", fraise: "Fraise", peche: "Pêche", coco: "Noix de Coco",
    orange: "Orange", ananas: "Ananas", framboises: "Framboises", "fruits-exotiques": "Fruits Exotiques",
  };

  return (
    <svg width={size} height={size * 0.95} viewBox="0 0 160 152" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Corps coupelle */}
      <path d="M20 55 L25 130 Q25 145 80 147 Q135 145 135 130 L140 55 Z"
        fill={c.bg} stroke={c.lidColor2} strokeWidth="1.5"/>
      {/* Couvercle aluminium */}
      <ellipse cx="80" cy="55" rx="60" ry="15" fill={c.lidColor}/>
      <ellipse cx="80" cy="52" rx="58" ry="13" fill={`url(#lid_${flavor})`}/>
      {/* Reflet couvercle */}
      <path d="M30 48 Q60 42 110 48" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Languette d'ouverture */}
      <path d="M125 52 Q138 48 142 54 Q138 60 130 58 Z" fill={c.lidColor2}/>
      {/* Zone étiquette */}
      <rect x="24" y="60" width="112" height="78" rx="0" fill={c.bg} opacity="0.0"/>
      {/* NIGER-LAIT SA petit */}
      <text x="80" y="73" textAnchor="middle" fill={c.lidColor2} fontSize="7" fontWeight="700"
        fontFamily="Arial, sans-serif" letterSpacing="0.5">NIGER-LAIT S.A.</text>
      {/* Yaourt Aromatisé */}
      <text x="80" y="84" textAnchor="middle" fill={c.textColor} fontSize="7.5"
        fontFamily="Inter, sans-serif">Yaourt Aromatisé</text>
      {/* Fruit emoji / illustration */}
      {c.fruitEmoji && (
        <text x="80" y="110" textAnchor="middle" fontSize="26">{c.fruitEmoji}</text>
      )}
      {!c.fruitEmoji && (
        <text x="80" y="112" textAnchor="middle" fontSize="24">🥛</text>
      )}
      {/* Saveur */}
      <text x="80" y="126" textAnchor="middle" fill={c.textColor} fontSize="9" fontWeight="800"
        fontFamily="Arial Black, sans-serif">{flavorLabel[flavor]}</text>
      {/* Trait déco bas */}
      <path d="M35 135 L125 135" stroke={c.lidColor} strokeWidth="1.5"/>
      {/* Poids */}
      <text x="80" y="144" textAnchor="middle" fill="#999" fontSize="6"
        fontFamily="Inter, sans-serif">125g</text>
      <defs>
        <linearGradient id={`lid_${flavor}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.lidColor} stopOpacity="0.9"/>
          <stop offset="100%" stopColor={c.lidColor2}/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Dispatcher principal par slug — utilise les vraies photos ─────── */
import { ProductPhoto } from "./ProductImage";

export function ProductIllustration({ slug, size = 180 }: { slug: string; size?: number }) {
  return (
    <ProductPhoto
      slug={slug}
      size={size}
      className="drop-shadow-lg"
    />
  );
}
