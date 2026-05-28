import Link from "next/link";
import { ArrowLeft, Clock, Users, ChevronRight } from "lucide-react";
import { recipes } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
          <Link href="/" className="text-gray-400 hover:text-[#5C2010] no-underline">Accueil</Link>
          <ChevronRight size={14} className="text-gray-300" />
          <Link href="/nutrition" className="text-gray-400 hover:text-[#5C2010] no-underline">Nutrition & Recettes</Link>
          <ChevronRight size={14} className="text-gray-300" />
          <span className="text-[#5C2010] font-medium truncate">{recipe.title}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2">
            {/* Hero recette */}
            <div className="rounded-3xl h-64 flex items-center justify-center mb-8"
              style={{ background: "linear-gradient(135deg, #F5EDD8, #C8932830)" }}>
              <span className="text-9xl">
                {recipe.category === "Boissons" ? "🥤" : recipe.category === "Desserts" ? "🍮" : "🍚"}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#5C2010", fontFamily: "Inter, sans-serif" }}>
                {recipe.category}
              </span>
              <div className="flex gap-3 text-sm text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="flex items-center gap-1"><Clock size={13} /> {recipe.prepTime} min</span>
                <span className="flex items-center gap-1"><Users size={13} /> {recipe.servings} personnes</span>
                <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs">{recipe.difficulty}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              {recipe.title}
            </h1>

            {/* Ingrédients */}
            <div className="bg-[#F5EDD8] rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                🛒 Ingrédients
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ing) => (
                  <li key={ing} className="flex items-center gap-2 text-sm text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#5C2010" }} />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            {/* Étapes */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
                👨‍🍳 Préparation
              </h2>
              <div className="space-y-4">
                {recipe.steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm text-white"
                      style={{ backgroundColor: "#5C2010", fontFamily: "Inter, sans-serif" }}>
                      {i + 1}
                    </div>
                    <div className="bg-white rounded-xl p-4 flex-1 shadow-sm">
                      <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Valeurs nutritionnelles */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-base text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                Valeurs nutritionnelles
              </h3>
              <div className="space-y-2">
                {Object.entries(recipe.nutrition).map(([key, val]) => (
                  <div key={key} className="flex justify-between py-1.5 border-b border-gray-50">
                    <span className="text-sm text-gray-500 capitalize" style={{ fontFamily: "Inter, sans-serif" }}>{key}</span>
                    <span className="text-sm font-semibold text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-[#F5EDD8] rounded-2xl p-5">
              <h3 className="font-bold text-sm text-[#1A1A1A] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Tags</h3>
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#5C2010", fontFamily: "Inter, sans-serif" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Produit utilisé */}
            <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg, #5C2010, #3A1208)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif" }}>
                Produit utilisé
              </p>
              <Link href={`/produits/${recipe.productUsed}`} className="text-white font-bold no-underline hover:underline" style={{ fontFamily: "Inter, sans-serif" }}>
                Voir le produit →
              </Link>
            </div>

            <Link href="/nutrition" className="flex items-center gap-2 text-sm font-medium no-underline" style={{ color: "#5C2010", fontFamily: "Inter, sans-serif" }}>
              <ArrowLeft size={14} /> Retour aux recettes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
