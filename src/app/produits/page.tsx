"use client";
import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { products, categories } from "@/lib/data";
import { ProductPhoto } from "@/components/ProductImage";
import TiltCard from "@/components/TiltCard";

function ProduitsContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(() => {
    const cat = searchParams.get("cat");
    return cat && categories.some(c => c.id === cat) ? cat : "tous";
  });
  const [searchQuery, setSearchQuery] = useState("");

  // Sync si l'URL change (navigation header)
  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat && categories.some(c => c.id === cat)) {
      setActiveCategory(cat);
    } else if (!cat) {
      setActiveCategory("tous");
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = activeCategory === "tous" ? products : products.filter(p => p.category === activeCategory);
    if (searchQuery.trim())
      list = list.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    return list;
  }, [activeCategory, searchQuery]);

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #1A0800 0%, #2E0E04 50%, #5C2010 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 30%, #C89328 0%, transparent 55%)" }}/>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-overline mb-4">Fabrique de produits laitiers</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
            Nos <em className="not-italic" style={{ color: "#C89328" }}>Produits</em>
          </h1>
          <div className="section-separator-center mb-6"/>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}>
            Yaourts, laits frais et eau Zam-Zam — fabriqués à Niamey selon les normes ISO depuis 1990.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 48, maxWidth: "none" }}>
            <path d="M0,32 C480,52 960,12 1440,32 L1440,48 L0,48 Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* Filtres sticky */}
      <div className="sticky top-[72px] z-30 bg-[#FAFAF8]"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: activeCategory === cat.id ? "#5C2010" : "white",
                  color: activeCategory === cat.id ? "white" : "#4A4A4A",
                  border: `1.5px solid ${activeCategory === cat.id ? "#5C2010" : "#E0D8D0"}`,
                  fontFamily: "Inter, sans-serif",
                  boxShadow: activeCategory === cat.id ? "0 2px 8px rgba(92,32,16,0.25)" : "none",
                }}>
                {cat.label}
                <span className="ml-1.5 text-[10px] font-bold opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>
          <div className="relative flex-shrink-0 sm:ml-auto">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
            <input type="search" placeholder="Rechercher un produit…"
              value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              className="pl-9 pr-8 h-10 rounded-full text-sm outline-none w-56 transition-all"
              style={{ border: "1.5px solid #E0D8D0", fontFamily: "Inter, sans-serif", background: "white" }}/>
            {searchQuery && (
              <button onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X size={13}/>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grille produits */}
      <section className="py-14 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                Aucun produit trouvé
              </h3>
              <p className="text-gray-500 mb-6">Essayez d'autres mots-clés ou réinitialisez les filtres.</p>
              <button onClick={() => { setActiveCategory("tous"); setSearchQuery(""); }} className="btn-primary">
                Voir tous les produits
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filtered.map(product => {
                const bgMap: Record<string,string> = {
                  yaourts: "linear-gradient(145deg, #FFFDE7, #FFF8E1)",
                  laits:   "linear-gradient(145deg, #F1F8E9, #E8F5E9)",
                  eau:     "linear-gradient(145deg, #E3F2FD, #E1F5FE)",
                };
                const bg = bgMap[product.category] ?? "linear-gradient(145deg, #F5EDD8, #FBF7EF)";
                return (
                  <TiltCard key={product.id} className="product-card" intensity={8}>
                  <Link href={`/produits/${product.slug}`}
                    className="no-underline group block">

                    {/* Zone image */}
                    <div className="product-card-img" style={{ background: bg }}>
                      {product.badge && (
                        <span className="absolute top-3 left-3 z-20 badge badge-brun text-[9px]">
                          {product.badge}
                        </span>
                      )}
                      {product.isNew && (
                        <span className="absolute top-3 right-3 z-20 badge badge-new text-[9px]">Nouveau</span>
                      )}
                      <div className="product-card-img-inner">
                        <ProductPhoto
                          slug={product.slug}
                          fill
                          className="object-contain p-2 drop-shadow-xl"
                        />
                      </div>
                    </div>

                    {/* Infos */}
                    <div className="px-4 pt-3 pb-4">
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-1"
                        style={{ color: "#C89328" }}>
                        {product.category}
                      </p>
                      <h3 className="font-bold text-sm text-[#1A1A1A] mb-1 leading-tight line-clamp-2"
                        style={{ fontFamily: "Playfair Display, serif" }}>
                        {product.name}
                      </h3>
                      <p className="text-[11px] text-gray-400 line-clamp-1 mb-3 leading-relaxed">
                        {product.shortDesc}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1 flex-wrap">
                          {product.formats.slice(0, 2).map(f => (
                            <span key={f} className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                              style={{ background: "#F5EDD8", color: "#5C2010" }}>
                              {f}
                            </span>
                          ))}
                        </div>
                        <span className="flex items-center gap-1 text-[11px] font-bold text-[#5C2010] group-hover:gap-1.5 transition-all">
                          Voir <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform"/>
                        </span>
                      </div>
                    </div>
                  </Link>
                  </TiltCard>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA distributeur */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #1A0800, #3A1208, #5C2010)" }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🤝</div>
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
            Devenez Partenaire Distributeur
          </h2>
          <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}>
            Rejoignez notre réseau. Produits certifiés ISO, marges attractives, support marketing fourni.
          </p>
          <a href="https://wa.me/22720743212?text=Bonjour%20Niger-Lait%20S.A,%20je%20souhaite%20devenir%20distributeur."
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold no-underline transition-all hover:opacity-90"
            style={{ backgroundColor: "#25D366", fontFamily: "Inter, sans-serif" }}>
            💬 Nous contacter sur WhatsApp <ArrowRight size={16}/>
          </a>
        </div>
      </section>
    </div>
  );
}

export default function ProduitsPage() {
  return (
    <Suspense fallback={<div style={{ paddingTop: 72, minHeight: "60vh" }} />}>
      <ProduitsContent />
    </Suspense>
  );
}
