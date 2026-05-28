import Link from "next/link";

export default function MentionsLegalesPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="py-16" style={{ background: "linear-gradient(135deg, #1A0800, #5C2010)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="section-overline mb-3">Informations légales</p>
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "Playfair Display, serif" }}>
            Mentions Légales
          </h1>
        </div>
      </section>
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 space-y-10" style={{ fontFamily: "Inter, sans-serif" }}>
          {[
            {
              title: "Éditeur du site",
              content: [
                "Niger-Lait S.A — Société Anonyme",
                "Zone industrielle Route Kalmaharo",
                "BP: 13324 Niamey — République du Niger",
                "Tel : +227 20 74 32 12 / 20 74 29 56",
                "Fax : +227 20 74 29 66",
                "Email : nigerlai@intnet.ne",
                "Site web : www.niger-lait.com",
                "Service Clientèle : +227 20 74 40 17",
              ],
            },
            {
              title: "Activité",
              content: [
                "Fabrication et commercialisation de produits laitiers (yaourts, laits frais, eau de table).",
                "Certifiée ISO depuis 2006.",
              ],
            },
            {
              title: "Hébergement",
              content: ["Ce site est hébergé chez un prestataire tiers. Les données sont traitées conformément à la législation nigérienne en vigueur."],
            },
            {
              title: "Propriété intellectuelle",
              content: ["L'ensemble du contenu de ce site (textes, images, illustrations, logos) est la propriété exclusive de Niger-Lait S.A. Toute reproduction sans autorisation est interdite."],
            },
          ].map(section => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                {section.title}
              </h2>
              <div className="section-separator mb-4"/>
              <div className="space-y-1.5">
                {section.content.map((line, i) => (
                  <p key={i} className="text-gray-600 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-6 border-t border-gray-200">
            <Link href="/" className="text-[#5C2010] font-semibold text-sm hover:underline no-underline">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
