import Link from "next/link";

export default function PolitiqueConfidentialitePage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section className="py-16" style={{ background: "linear-gradient(135deg, #1A0800, #5C2010)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="section-overline mb-3">Vos données</p>
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "Playfair Display, serif" }}>
            Politique de Confidentialité
          </h1>
        </div>
      </section>
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 space-y-10" style={{ fontFamily: "Inter, sans-serif" }}>
          {[
            {
              title: "Collecte des données",
              content: ["Niger-Lait S.A collecte uniquement les données nécessaires au traitement de vos demandes via le formulaire de contact (nom, email ou téléphone, message). Ces données ne sont jamais revendues à des tiers."],
            },
            {
              title: "Utilisation des données",
              content: ["Vos données sont utilisées exclusivement pour répondre à vos demandes de contact, de partenariat ou de réclamation. Elles sont conservées pour une durée maximale de 12 mois."],
            },
            {
              title: "Cookies",
              content: ["Ce site utilise des cookies de performance anonymisés pour améliorer l'expérience utilisateur. Aucune donnée personnelle n'est transmise via les cookies."],
            },
            {
              title: "Vos droits",
              content: ["Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à : nigerlai@intnet.ne"],
            },
            {
              title: "Contact",
              content: [
                "Niger-Lait S.A",
                "Zone industrielle Route Kalmaharo, BP: 13324 Niamey",
                "Email : nigerlai@intnet.ne",
                "Tel : +227 20 74 32 12",
              ],
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
