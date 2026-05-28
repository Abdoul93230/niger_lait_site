import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Initiative Sociale": { bg: "#5C2010", text: "white" },
  "Événement":          { bg: "#C89328", text: "white" },
  "Challenge":          { bg: "#1565C0", text: "white" },
};

export default function ActualitesPage() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── Hero ── */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1A0800, #5C2010)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-overline mb-3">Restez informé</p>
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Actualités
          </h1>
          <div className="section-separator-center mb-5"/>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "Inter, sans-serif" }}>
            Initiatives sociales, événements, challenges — toute l'actualité de Niger-Lait S.A.
          </p>
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {blogPosts.map((post, idx) => {
            const cat = categoryColors[post.category] ?? { bg: "#5C2010", text: "white" };
            const isReverse = idx % 2 !== 0;

            return (
              <ScrollReveal key={post.id} variant={isReverse ? "right" : "left"}>
                <article className="bg-white rounded-3xl overflow-hidden shadow-sm"
                  style={{ border: "1px solid rgba(0,0,0,0.06)" }}>

                  <div className={`grid lg:grid-cols-2 ${isReverse ? "lg:grid-flow-dense" : ""}`}>

                    {/* Bloc image(s) */}
                    <div className={`relative ${isReverse ? "lg:col-start-2" : ""}`}>
                      {post.images.length === 1 ? (
                        <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                          <Image
                            src={post.images[0]}
                            alt={post.title}
                            fill
                            sizes="(max-width:1024px) 100vw, 50vw"
                            className="object-cover"
                          />
                          {/* Overlay badge */}
                          <div className="absolute top-4 left-4">
                            <span className="badge text-[10px] font-bold px-3 py-1.5 rounded-full"
                              style={{ backgroundColor: cat.bg, color: cat.text }}>
                              {post.category}
                            </span>
                          </div>
                        </div>
                      ) : (
                        /* Grille 3 images */
                        <div className="grid grid-cols-3 h-full min-h-[280px]">
                          {post.images.map((img, i) => (
                            <div key={i} className="relative">
                              <Image
                                src={img}
                                alt={`${post.title} — ${i + 1}`}
                                fill
                                sizes="33vw"
                                className="object-cover"
                              />
                            </div>
                          ))}
                          <div className="absolute top-4 left-4 col-span-3">
                            <span className="badge text-[10px] font-bold px-3 py-1.5 rounded-full"
                              style={{ backgroundColor: cat.bg, color: cat.text }}>
                              {post.category}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bloc texte */}
                    <div className={`p-8 lg:p-10 flex flex-col justify-center ${isReverse ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className="flex items-center gap-1.5 text-xs text-gray-400"
                          style={{ fontFamily: "Inter, sans-serif" }}>
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: `${cat.bg}18`, color: cat.bg, fontFamily: "Inter, sans-serif" }}>
                          {post.category}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3 leading-tight"
                        style={{ fontFamily: "Playfair Display, serif" }}>
                        {post.title}
                      </h2>

                      <div className="w-10 h-0.5 mb-5"
                        style={{ background: "linear-gradient(90deg, #5C2010, #C89328)" }}/>

                      {/* Texte complet */}
                      <div className="text-sm text-gray-600 leading-relaxed space-y-3 mb-6"
                        style={{ fontFamily: "Inter, sans-serif" }}>
                        {post.fullText.split("\n\n").map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>

                      {/* Tags hashtags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map(tag => (
                          <span key={tag}
                            className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                            style={{ backgroundColor: "#F5EDD8", color: "#5C2010", fontFamily: "Inter, sans-serif" }}>
                            <Tag size={9} />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA map si disponible */}
                      {post.mapsEmbed && (
                        <a
                          href="https://urlr.me/tVqp9K"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm no-underline transition-all hover:opacity-90 self-start"
                          style={{ backgroundColor: "#5C2010", color: "white", fontFamily: "Inter, sans-serif" }}>
                          📍 Voir tous les kiosques sur la carte
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Carte Google Maps embed (actu 1 uniquement) */}
                  {post.mapsEmbed && (
                    <div className="border-t border-gray-100">
                      <div className="px-8 pt-6 pb-2">
                        <p className="text-sm font-semibold text-[#1A1A1A] mb-3 flex items-center gap-2"
                          style={{ fontFamily: "Inter, sans-serif" }}>
                          📍 Carte des kiosques INCIN KANMU à Niamey
                        </p>
                      </div>
                      <div className="w-full overflow-hidden" style={{ height: 420 }}>
                        <iframe
                          src={post.mapsEmbed}
                          width="100%"
                          height="420"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          title="Points de vente INCIN KANMU"
                        />
                      </div>
                    </div>
                  )}
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ── CTA réseaux sociaux ── */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #1A0800, #3A1208, #5C2010)" }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
            Suivez-nous pour plus d'actualités
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}>
            Restez connectés à l'actualité Niger-Lait S.A — nouveaux produits, promotions et initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.facebook.com/nigerlaitsa/"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm no-underline transition-all hover:opacity-90"
              style={{ backgroundColor: "#1877F2", color: "white", fontFamily: "Inter, sans-serif" }}>
              <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Niger-Lait SA
            </a>
            <a href="https://wa.me/22782001414?text=Bonjour%20Niger-Lait%2C%20je%20veux%20participer%20au%20challenge%20Incin%20Kanmu"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm no-underline transition-all hover:opacity-90"
              style={{ backgroundColor: "#25D366", color: "white", fontFamily: "Inter, sans-serif" }}>
              💬 Contacter sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
