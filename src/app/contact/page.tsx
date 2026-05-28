"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { storeLocations } from "@/lib/data";
import TiltCard from "@/components/TiltCard";

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "produit", message: "" });
  const [sent, setSent] = useState(false);
  const [activeCity, setActiveCity] = useState("Niamey");

  const cities = [...new Set(storeLocations.map((s) => s.city))];
  const filteredStores = storeLocations.filter((s) => s.city === activeCity);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #240E05, #5C2010)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#C89328", fontFamily: "Inter, sans-serif" }}>
            Parlons-nous
          </p>
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Contactez-Nous
          </h1>
          <div className="w-14 h-0.5 mx-auto mb-5" style={{ background: "linear-gradient(90deg, #5C2010, #C89328)" }} />
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "Inter, sans-serif" }}>
            Une question, un partenariat, une réclamation ? Notre équipe vous répond sous 48h.
          </p>
        </div>
      </section>

      {/* Contact + Formulaire */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14">
          {/* Coordonnées */}
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
              Nos coordonnées
            </h2>
            <div className="space-y-6 mb-10">
              {[
                { icon: <MapPin size={20} />, title: "Siège social", content: "Zone industrielle Route Kalmaharo\nBP: 13324 Niamey-Niger" },
                { icon: <Phone size={20} />, title: "Téléphone", content: "+227 20 74 32 12 / 20 74 29 56\nFax: +227 20 74 29 66" },
                { icon: <Mail size={20} />, title: "Email", content: "nigerlai@intnet.ne" },
                { icon: <Phone size={20} />, title: "Service Clientèle", content: "+227 20 74 40 17" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ backgroundColor: "#5C2010" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1A1A1A] mb-1" style={{ fontFamily: "Inter, sans-serif" }}>{item.title}</p>
                    <p className="text-sm text-gray-500 whitespace-pre-line" style={{ fontFamily: "Inter, sans-serif" }}>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, #25D36620, #25D36605)", border: "1px solid #25D36630" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💬</span>
                <h3 className="font-bold text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>WhatsApp Business</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                Réponse rapide via WhatsApp Business. Envoyez-nous un message, nous répondons en moins d'une heure en jours ouvrables.
              </p>
              <a href="https://wa.me/22700000000?text=Bonjour%20Niger-Lait,%20je%20souhaite..."
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm no-underline transition-all hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: "#25D366", fontFamily: "Inter, sans-serif" }}>
                Ouvrir WhatsApp <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
              Envoyez-nous un message
            </h2>
            {sent ? (
              <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "#F5EDD8" }}>
                <CheckCircle2 size={56} className="mx-auto mb-4" style={{ color: "#5C2010" }} />
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                  Message envoyé !
                </h3>
                <p className="text-gray-500 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  Merci de nous avoir contacté. Notre équipe vous répondra sous 48h ouvrables.
                </p>
                <button onClick={() => setSent(false)} className="mt-6 btn-primary">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl p-8 shadow-sm">
                {/* Sujet */}
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    Objet de votre message *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { val: "produit", label: "Question produit" },
                      { val: "distribution", label: "Devenir distributeur" },
                      { val: "qualite", label: "Réclamation qualité" },
                      { val: "autre", label: "Autre" },
                    ].map((opt) => (
                      <button key={opt.val} type="button"
                        onClick={() => setForm({ ...form, sujet: opt.val })}
                        className="py-2.5 px-3 rounded-lg text-sm font-medium transition-all text-left"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          backgroundColor: form.sujet === opt.val ? "#5C2010" : "#F5EDD8",
                          color: form.sujet === opt.val ? "white" : "#4A4A4A",
                          border: "none",
                        }}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    Nom complet *
                  </label>
                  <input type="text" required placeholder="Votre nom"
                    value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className="input-field" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    Email ou téléphone *
                  </label>
                  <input type="text" required placeholder="email@exemple.com ou +227..."
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-field" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    Message *
                  </label>
                  <textarea required placeholder="Décrivez votre demande..."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="textarea-field" rows={5} />
                </div>

                {/* Honeypot */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                <button type="submit" className="btn-primary w-full justify-center">
                  Envoyer mon message <ArrowRight size={16} />
                </button>
                <p className="text-xs text-center text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                  Réponse sous 48h ouvrables · Données protégées
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Store Locator */}
      <section id="distributeur" className="py-16" style={{ backgroundColor: "#F5EDD8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#5C2010", fontFamily: "Inter, sans-serif" }}>
              Points de vente
            </p>
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
              Trouver Niger-Lait près de vous
            </h2>
            <div className="w-14 h-0.5 mx-auto mb-5" style={{ background: "linear-gradient(90deg, #5C2010, #C89328)" }} />
          </div>

          {/* Filtre villes */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {cities.map((city) => (
              <button key={city} onClick={() => setActiveCity(city)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeCity === city ? "#5C2010" : "white",
                  color: activeCity === city ? "white" : "#4A4A4A",
                  fontFamily: "Inter, sans-serif",
                  border: "none",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                }}>
                📍 {city}
              </button>
            ))}
          </div>

          {/* Liste distributeurs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredStores.map((store) => (
              <TiltCard key={store.id} className="bg-white rounded-2xl shadow-sm" intensity={10}>
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm"
                    style={{ backgroundColor: "#5C2010" }}>
                    {store.type === "supermarche" ? "🏪" : store.type === "grossiste" ? "📦" : "🛒"}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>{store.name}</h3>
                    <p className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>{store.type}</p>
                  </div>
                </div>
                <div className="space-y-1.5 text-sm text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>
                  <p className="flex items-center gap-1.5">
                    <MapPin size={13} style={{ color: "#5C2010" }} /> {store.address}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone size={13} style={{ color: "#5C2010" }} />
                    <a href={`tel:${store.phone}`} className="no-underline hover:underline" style={{ color: "#5C2010" }}>
                      {store.phone}
                    </a>
                  </p>
                </div>
                <a href={`https://www.openstreetmap.org/?mlat=${store.lat}&mlon=${store.lng}#map=16/${store.lat}/${store.lng}`}
                  target="_blank" rel="noreferrer"
                  className="mt-4 flex items-center gap-1.5 text-xs font-medium no-underline hover:underline"
                  style={{ color: "#5C2010", fontFamily: "Inter, sans-serif" }}>
                  <MapPin size={12} /> Voir l'itinéraire →
                </a>
              </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Devenir distributeur CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #5C2010, #3A1208)" }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <span className="text-4xl mb-4 block">🤝</span>
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
            Devenez Partenaire Distributeur
          </h2>
          <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "Inter, sans-serif" }}>
            Rejoignez notre réseau de distributeurs. Marges attractives, produits à forte demande, support marketing fourni.
          </p>
          <a href="https://wa.me/22700000000?text=Bonjour%20Niger-Lait,%20je%20souhaite%20devenir%20distributeur%20dans%20ma%20région."
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold no-underline transition-all hover:opacity-90"
            style={{ backgroundColor: "#25D366", fontFamily: "Inter, sans-serif" }}>
            💬 Nous contacter sur WhatsApp <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
