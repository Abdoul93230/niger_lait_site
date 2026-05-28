import Link from "next/link";
import { ArrowLeft, CheckCircle2, MapPin, ChevronRight } from "lucide-react";
import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import { ProductPhoto } from "@/components/ProductImage";
import TiltCard from "@/components/TiltCard";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const bgClass =
    product.category === "yaourts" ? "bg-[#FFFDE7]" :
    product.category === "laits"   ? "bg-[#F1F8E9]" : "bg-[#E3F2FD]";

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
          <Link href="/" className="text-gray-400 hover:text-[#5C2010] no-underline transition-colors">Accueil</Link>
          <ChevronRight size={14} className="text-gray-300" />
          <Link href="/produits" className="text-gray-400 hover:text-[#5C2010] no-underline transition-colors">Produits</Link>
          <ChevronRight size={14} className="text-gray-300" />
          <span className="text-[#5C2010] font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product detail */}
      <section className="py-12 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left — Photo produit réelle */}
            <div>
              <div className={`rounded-3xl h-80 sm:h-96 flex items-center justify-center relative overflow-hidden ${bgClass}`}
                style={{ boxShadow: "inset 0 0 80px rgba(0,0,0,0.04)" }}>
                {product.badge && (
                  <span className="absolute top-5 left-5 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10"
                    style={{ backgroundColor: product.isNew ? "#C1440E" : "#5C2010", fontFamily: "Inter, sans-serif" }}>
                    {product.badge}
                  </span>
                )}
                {product.isNew && !product.badge && (
                  <span className="absolute top-5 right-5 badge badge-new z-10">Nouveau</span>
                )}
                <div className="animate-depth-float">
                  <ProductPhoto slug={product.slug} size={280} priority className="max-h-72 object-contain" />
                </div>
              </div>
              {/* Tags qualité */}
              <div className="mt-6 flex flex-wrap gap-3">
                {product.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm">
                    <CheckCircle2 size={14} style={{ color: "#5C2010" }} />
                    <span className="text-sm text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Info */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#9E9E9E", fontFamily: "Inter, sans-serif" }}>
                {product.category}
              </p>
              <h1 className="text-4xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                {product.name}
              </h1>
              <p className="text-lg text-gray-500 mb-6 italic" style={{ fontFamily: "Playfair Display, serif" }}>
                "{product.shortDesc}"
              </p>
              <div className="w-12 h-0.5 mb-6" style={{ background: "linear-gradient(90deg, #5C2010, #C89328)" }} />
              <p className="text-gray-600 leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
                {product.description}
              </p>

              {/* Formats */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-[#1A1A1A] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                  Formats disponibles
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.formats.map((f) => (
                    <span key={f} className="px-4 py-2 rounded-full border-2 font-medium text-sm cursor-pointer transition-all hover:border-[#5C2010] hover:text-[#5C2010]"
                      style={{ borderColor: "#E0E0E0", color: "#4A4A4A", fontFamily: "Inter, sans-serif" }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/contact" className="btn-primary">
                  <MapPin size={16} /> Trouver près de chez moi
                </Link>
                <a
                  href={`https://wa.me/22782001414?text=Bonjour%20Niger-Lait%2C%20je%20souhaite%20commander%20${encodeURIComponent(product.name)}`}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white font-semibold text-sm no-underline transition-all hover:opacity-90"
                  style={{ backgroundColor: "#25D366", fontFamily: "Inter, sans-serif" }}>
                  💬 Commander sur WhatsApp
                </a>
              </div>

              {/* Nutrition */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-[#1A1A1A] mb-4 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
                  Valeurs nutritionnelles pour 100g
                </h3>
                <div className="space-y-2">
                  {[
                    ["Énergie", `${product.nutrition.energie} kcal`],
                    ["Protéines", `${product.nutrition.proteines} g`],
                    ["Glucides", `${product.nutrition.glucides} g`],
                    ["Lipides", `${product.nutrition.lipides} g`],
                    ["Calcium", `${product.nutrition.calcium} mg`],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                      <span className="text-sm text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>{label}</span>
                      <span className="text-sm font-semibold text-[#1A1A1A]">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produits similaires */}
      {related.length > 0 && (
        <section className="py-14" style={{ backgroundColor: "#F5EDD8" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
              Vous aimerez aussi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <TiltCard key={p.id} className="product-card" intensity={10}>
                  <Link href={`/produits/${p.slug}`} className="no-underline group block">
                    <div className="relative h-44 overflow-hidden bg-white">
                      <ProductPhoto
                        slug={p.slug}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#C89328] mb-1">{p.category}</p>
                      <h3 className="font-bold text-base text-[#1A1A1A] mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{p.name}</h3>
                      <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>{p.shortDesc}</p>
                      <span className="text-sm font-semibold flex items-center gap-1" style={{ color: "#5C2010", fontFamily: "Inter, sans-serif" }}>
                        Voir <ArrowLeft size={13} className="rotate-180" />
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
