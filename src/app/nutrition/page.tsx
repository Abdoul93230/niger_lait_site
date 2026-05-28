import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Users, ChevronRight } from "lucide-react";
import { recipes } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { ProductPhoto } from "@/components/ProductImage";
import TiltCard from "@/components/TiltCard";

const benefits = [
  { icon: "💪", title: "Protéines", val: "3.8g / 100ml", desc: "Pour la croissance musculaire, la satiété et la récupération." },
  { icon: "🦴", title: "Calcium", val: "120mg / 100ml", desc: "Essentiel pour des os solides chez l'enfant comme chez l'adulte." },
  { icon: "⚡", title: "Énergie", val: "89 kcal / 100g", desc: "Un apport équilibré pour bien commencer la journée." },
  { icon: "🦠", title: "Probiotiques", val: "Millions d'UFC", desc: "Nos yaourts et laits fermentés sont riches en bonnes bactéries." },
];

const categoryColors: Record<string, string> = {
  "Boissons":        "linear-gradient(135deg, #E3F2FD, #BBDEFB)",
  "Desserts":        "linear-gradient(135deg, #FFF8E1, #FFECB3)",
  "Petit-déjeuner":  "linear-gradient(135deg, #F1F8E9, #DCEDC8)",
};

export default function NutritionPage() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── Hero ── */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #1A0800 0%, #2E0E04 50%, #5C2010 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 30%, #C89328 0%, transparent 55%)" }}/>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-overline mb-4">Cuisine & Bien-être</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}>
            Recettes <em className="not-italic" style={{ color: "#C89328" }}>Niger-Lait</em>
          </h1>
          <div className="section-separator-center mb-6"/>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}>
            Des recettes nigériennes simples et savoureuses avec nos produits laitiers frais —
            de la bouillie du matin au thiakry du soir.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 48, maxWidth: "none" }}>
            <path d="M0,32 C480,52 960,12 1440,32 L1440,48 L0,48 Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* ── Recettes ── */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="section-overline mb-3">Cuisine africaine</p>
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}>
              Nos Recettes du Moment
            </h2>
            <div className="section-separator-center"/>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recipes.map((recipe, i) => (
              <ScrollReveal key={recipe.id} variant="up" delay={i * 80}>
                <TiltCard className="bg-white rounded-2xl overflow-hidden shadow-sm" intensity={10}>
                <Link href={`/nutrition/recettes/${recipe.slug}`}
                  className="no-underline group block">

                  {/* Image produit utilisé */}
                  <div className="relative overflow-hidden" style={{ height: 220, background: categoryColors[recipe.category] ?? "linear-gradient(135deg, #F5EDD8, #FBF7EF)" }}>
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="relative w-full h-full">
                        <ProductPhoto
                          slug={recipe.productUsed}
                          fill
                          className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full text-white z-10"
                      style={{ backgroundColor: "#5C2010", fontFamily: "Inter, sans-serif" }}>
                      {recipe.category}
                    </span>
                    {/* Wave bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-white"
                      style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}/>
                  </div>

                  <div className="px-6 pt-3 pb-6">
                    <h3 className="font-bold text-lg text-[#1A1A1A] mb-3"
                      style={{ fontFamily: "Playfair Display, serif" }}>
                      {recipe.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400"
                      style={{ fontFamily: "Inter, sans-serif" }}>
                      <span className="flex items-center gap-1"><Clock size={13} /> {recipe.prepTime} min</span>
                      <span className="flex items-center gap-1"><Users size={13} /> {recipe.servings} pers.</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{ background: "#F0FDF4", color: "#166534" }}>
                        {recipe.difficulty}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {recipe.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: "#F5EDD8", color: "#5C2010", fontFamily: "Inter, sans-serif" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="flex items-center gap-1 font-semibold text-sm group-hover:gap-2 transition-all"
                      style={{ color: "#5C2010", fontFamily: "Inter, sans-serif" }}>
                      Voir la recette <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform"/>
                    </span>
                  </div>
                </Link>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bienfaits ── */}
      <section className="py-20" style={{ backgroundColor: "#F5EDD8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="section-overline mb-3">Science & Santé</p>
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}>
              Les Bienfaits du Lait Niger-Lait
            </h2>
            <div className="section-separator-center"/>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} variant="up" delay={i * 70}>
                <TiltCard className="bg-white rounded-2xl shadow-sm" intensity={14}>
                <div className="p-6 text-center">
                  <span className="text-4xl mb-4 block">{b.icon}</span>
                  <h3 className="font-bold text-[#1A1A1A] mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
                    {b.title}
                  </h3>
                  <p className="text-sm font-bold mb-2" style={{ color: "#5C2010", fontFamily: "Inter, sans-serif" }}>
                    {b.val}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {b.desc}
                  </p>
                </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA produits ── */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}>
              Trouvez le produit de votre recette
            </h2>
            <p className="text-gray-500 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Yaourts, laits frais, LEBEN FRAIS — disponibles dans les kiosques INCIN KANMU et supermarchés de Niamey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/produits" className="btn-primary">
                Nos produits <ArrowRight size={16}/>
              </Link>
              <Link href="/contact" className="btn-secondary">
                Trouver un distributeur
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
