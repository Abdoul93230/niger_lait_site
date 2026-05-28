import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#240E05" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Identité */}
          <div>
            <div className="mb-2 flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden"
                style={{ boxShadow: "0 0 0 2px #C89328" }}>
                <Image
                  src="/images/logo.jpg"
                  alt="Niger-Lait S.A."
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-bold text-white tracking-wide" style={{ fontFamily: "Playfair Display, serif" }}>NIGER-LAIT S.A</div>
                <div className="text-[9px] font-medium tracking-widest uppercase" style={{ color: "#C89328", fontFamily: "Inter, sans-serif" }}>Fabrique de produits laitiers</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-3 mt-3" style={{ color: "rgba(255,255,255,0.65)" }}>
              Producteur laitier nigérien depuis 1990. Certifié ISO depuis 2006.
            </p>
            <p className="text-xs italic mb-6" style={{ color: "#C89328", fontFamily: "Playfair Display, serif" }}>
              "Nous accompagnons la vie."
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="https://facebook.com/nigerlaitsa" target="_blank" rel="noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:brightness-110"
                style={{ background: "#1877F2" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:brightness-110"
                style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" target="_blank" rel="noreferrer" aria-label="YouTube"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:brightness-110"
                style={{ background: "#FF0000" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FF0000"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/22720743212" target="_blank" rel="noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:brightness-110"
                style={{ background: "#25D366" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.849L.057 23.571a.75.75 0 0 0 .921.921l5.733-1.474A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.516-5.21-1.416l-.374-.216-3.857.991.998-3.842-.234-.384A9.961 9.961 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Produits */}
          <div>
            <h4 className="font-semibold text-base mb-5" style={{ fontFamily: "Inter" }}>Nos Produits</h4>
            <ul className="space-y-3">
              {[
                ["Yaourt Nature", "/produits/yaourt-nature"],
                ["Yaourt Fraise", "/produits/yaourt-fraise"],
                ["Yaourt Coco", "/produits/yaourt-coco"],
                ["Lait Frais Pasteurisé", "/produits/lait-frais-pasteurise"],
                ["Lait Diététique", "/produits/lait-dietetique"],
                ["Eau Zamzam", "/produits/eau-zamzam-50cl"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm no-underline transition-colors hover:text-[#C89328]"
                    style={{ color: "rgba(255,255,255,0.65)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Informations */}
          <div>
            <h4 className="font-semibold text-base mb-5" style={{ fontFamily: "Inter" }}>Informations</h4>
            <ul className="space-y-3">
              {[
                ["Notre Histoire", "/notre-histoire"],
                ["Certifications Qualité", "/notre-histoire#qualite"],
                ["Devenir Distributeur", "/contact#distributeur"],
                ["Nutrition & Recettes", "/nutrition"],
                ["Actualités", "/actualites"],
                ["Politique de Confidentialité", "/politique-confidentialite"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm no-underline transition-colors hover:text-[#C89328]"
                    style={{ color: "rgba(255,255,255,0.65)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-semibold text-base mb-5" style={{ fontFamily: "Inter" }}>Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#C89328" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Zone industrielle Route Kalmaharo<br />BP: 13324 Niamey-Niger
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} style={{ color: "#C89328" }} />
                <a href="tel:+22720743212" className="text-sm no-underline hover:text-[#C89328] transition-colors"
                  style={{ color: "rgba(255,255,255,0.65)" }}>
                  +227 20 74 32 12 / 20 74 29 56
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} style={{ color: "#C89328" }} />
                <a href="mailto:nigerlai@intnet.ne" className="text-sm no-underline hover:text-[#C89328] transition-colors"
                  style={{ color: "rgba(255,255,255,0.65)" }}>
                  nigerlai@intnet.ne
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} style={{ color: "#C89328" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Service Clientèle : +227 20 74 40 17
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            © 2025 Niger-Lait SA — Tous droits réservés
          </p>
          <div className="flex gap-6">
            {[["Mentions légales", "/mentions-legales"], ["Confidentialité", "/politique-confidentialite"], ["Plan du site", "/plan-du-site"]].map(([label, href]) => (
              <Link key={label} href={href} className="text-xs no-underline hover:text-[#C89328] transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}>
                {label}
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            <button className="text-xs px-3 py-1 rounded-full border font-medium hover:bg-white/10 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.65)" }}>FR</button>
            <button className="text-xs px-3 py-1 rounded-full border font-medium hover:bg-white/10 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.45)" }}>HA</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
