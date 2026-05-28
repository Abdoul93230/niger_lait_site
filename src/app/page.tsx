import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { products, values, blogPosts } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { ProductPhoto } from "@/components/ProductImage";

const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 6);

export default function HomePage() {
  return (
    <div>
      {/* ══════════════════════════════════════════
          HERO — Cinématique plein écran
          ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(145deg, #1A0800 0%, #2E0E04 45%, #5C2010 100%)" }}>

        {/* Grain texture */}
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")", backgroundSize: "256px" }}/>

        {/* Halos */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-10 animate-floatSlow"
          style={{ background: "radial-gradient(circle, #C89328 0%, transparent 70%)" }}/>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">

            {/* Texte hero */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-7 animate-fadeIn"
                style={{ background: "rgba(200,147,40,0.14)", border: "1px solid rgba(200,147,40,0.35)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89328] animate-pulse"/>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "#C89328" }}>
                  ISO certifié · Niamey, Niger · depuis 1990
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-5 animate-fadeInUp delay-100"
                style={{ fontFamily: "Playfair Display, serif" }}>
                Nous<br />
                <em className="not-italic" style={{ color: "#C89328" }}>accompagnons</em><br />
                la vie
              </h1>

              <p className="text-base mb-3 leading-relaxed animate-fadeInUp delay-200 max-w-[480px]"
                style={{ color: "rgba(255,255,255,0.75)" }}>
                Depuis Niamey, Niger-Lait S.A nourrit les familles nigériennes avec des produits laitiers
                frais certifiés ISO — <strong style={{ color: "rgba(255,255,255,0.95)" }}>KOSSAM, DJALA,
                LEBEN FRAIS</strong> et l'Eau <strong style={{ color: "rgba(255,255,255,0.95)" }}>ZAM-ZAM</strong>.
              </p>
              <p className="text-sm mb-9 animate-fadeInUp delay-300 italic"
                style={{ color: "#C89328", fontFamily: "Playfair Display, serif" }}>
                "Dites OUI aux produits de qualité"
              </p>

              <div className="flex flex-wrap gap-4 animate-fadeInUp delay-400">
                <Link href="/produits" className="btn-primary text-base py-3.5 px-7">
                  Découvrir nos produits <ArrowRight size={17} />
                </Link>
                <Link href="/notre-histoire" className="btn-ghost-white text-base py-3.5 px-7">
                  Notre histoire
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 flex items-center gap-8 animate-fadeInUp delay-500">
                {[
                  { val: "35+", label: "ans d'expérience" },
                  { val: "ISO", label: "certifié 2006" },
                  { val: "100%", label: "made in Niger" },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-center gap-3">
                    {i > 0 && <div className="w-px h-8 bg-white/15"/>}
                    <div>
                      <div className="text-2xl font-bold leading-none" style={{ color: "#C89328", fontFamily: "Playfair Display, serif" }}>
                        {s.val}
                      </div>
                      <div className="text-[11px] mt-1 leading-none" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {s.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Showcase produits côté droit — vraies photos */}
            <div className="hidden lg:flex items-center justify-center relative animate-fadeInRight delay-300">
              {/* Cercle décoratif */}
              <div className="absolute w-80 h-80 rounded-full opacity-10 animate-spin-slow"
                style={{ border: "2px dashed #C89328" }}/>

              <div className="relative w-96 h-96">
                {/* KOSSAM centré grand */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float product-showcase z-10">
                  <ProductPhoto slug="kossam" size={170} className="drop-shadow-2xl" priority />
                </div>
                {/* Coupelle fraise haut droite */}
                <div className="absolute top-0 right-0 animate-floatSlow" style={{ animationDelay: "1s" }}>
                  <ProductPhoto slug="yaourt-fraise" size={105} className="drop-shadow-xl" />
                </div>
                {/* Eau ZAM-ZAM bas gauche */}
                <div className="absolute bottom-4 left-0 animate-float" style={{ animationDelay: "2s" }}>
                  <ProductPhoto slug="eau-zamzam-25cl" size={100} className="drop-shadow-xl" />
                </div>
                {/* Coupelle ananas haut gauche */}
                <div className="absolute top-8 left-4 animate-floatSlow" style={{ animationDelay: "0.5s" }}>
                  <ProductPhoto slug="yaourt-ananas" size={85} className="drop-shadow-xl" />
                </div>

                {/* Badge ISO */}
                <div className="absolute bottom-0 right-4 glass rounded-xl px-3 py-2 text-center animate-scaleIn delay-700 z-20">
                  <div className="text-[10px] font-bold text-[#C89328] tracking-widest uppercase">certifié</div>
                  <div className="text-lg font-black text-white">ISO</div>
                  <div className="text-[9px] text-[#C89328]">depuis 2006</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: "block", height: 60 }}>
            <path d="M0,40 C360,70 1080,10 1440,40 L1440,60 L0,60 Z" fill="#FAFAF8"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BANDE CONFIANCE
          ══════════════════════════════════════════ */}
      <section className="py-8" style={{ background: "linear-gradient(90deg, #3A1208, #5C2010, #7D3018, #5C2010, #3A1208)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {[
              { icon: "🏭", label: "Fabrication locale", sub: "Zone industrielle Niamey" },
              { icon: "🌡️", label: "Pasteurisation 72°C", sub: "Standard international" },
              { icon: "🏅", label: "Certification ISO", sub: "Depuis 2006" },
              { icon: "❄️", label: "Chaîne du froid", sub: "2°C — 6°C garantis" },
            ].map((item, i) => (
              <div key={item.label}
                className="flex items-center gap-3 px-6 py-3 lg:border-r last:border-r-0"
                style={{ borderColor: "rgba(200,147,40,0.2)" }}>
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="text-white font-semibold text-sm leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.label}
                  </div>
                  <div className="text-[11px] mt-0.5" style={{ color: "rgba(200,147,40,0.8)" }}>
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION NOS GAMMES
          ══════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="section-overline mb-3">Notre gamme complète</p>
            <h2 className="text-5xl font-bold text-[#1A1A1A]" style={{ fontFamily: "Playfair Display, serif" }}>
              Trois familles,<br /><em className="not-italic" style={{ color: "#5C2010" }}>une passion</em>
            </h2>
            <div className="section-separator-center mt-5" />
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Yaourts */}
            <ScrollReveal variant="up" delay={0}>
              <Link href="/produits?cat=yaourts" className="group block relative overflow-hidden rounded-2xl no-underline" style={{ minHeight: 420 }}>
                <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #FFF8E1 0%, #FFECB3 60%, #FFD54F 100%)" }}/>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(160deg, #FFD54F 0%, #FFCA28 100%)" }}/>
                <div className="relative p-8 h-full flex flex-col">
                  <div className="mb-auto">
                    <span className="section-overline text-[#5C2010]">GAMME</span>
                    <h3 className="text-4xl font-bold text-[#3A1208] mt-2 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                      Yaourts
                    </h3>
                    <p className="text-sm text-[#5C2010]/70 leading-relaxed">
                      8 saveurs en coupelles, format familial 500g, et le légendaire KOSSAM en poche 200ml.
                    </p>
                  </div>
                  {/* Vraies photos des coupelles */}
                  <div className="flex gap-2 my-6 justify-center items-end">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <ProductPhoto slug="yaourt-fraise" size={80} />
                    </div>
                    <div className="group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: "60ms", marginBottom: 8 }}>
                      <ProductPhoto slug="yaourt-nature" size={90} />
                    </div>
                    <div className="group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: "120ms" }}>
                      <ProductPhoto slug="yaourt-ananas" size={80} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#5C2010] group-hover:gap-3 transition-all">
                    Voir la gamme <ArrowRight size={14}/>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Laits */}
            <ScrollReveal variant="up" delay={80}>
              <Link href="/produits?cat=laits" className="group block relative overflow-hidden rounded-2xl no-underline" style={{ minHeight: 420 }}>
                <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #F3E5F5 0%, #E1BEE7 60%, #CE93D8 100%)" }}/>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(160deg, #BA68C8 0%, #AB47BC 100%)" }}/>
                <div className="relative p-8 h-full flex flex-col">
                  <div className="mb-auto">
                    <span className="section-overline text-[#5C2010]">GAMME</span>
                    <h3 className="text-4xl font-bold text-[#3A1208] mt-2 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                      Laits
                    </h3>
                    <p className="text-sm text-[#5C2010]/70 leading-relaxed">
                      DJALA fermenté vanille, LEBEN FRAIS MG réduit, Lait Entier Pasteurisé sachet.
                    </p>
                  </div>
                  <div className="flex gap-3 my-6 justify-center items-end">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <ProductPhoto slug="djala" size={80} />
                    </div>
                    <div className="group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: "60ms" }}>
                      <ProductPhoto slug="leben-frais" size={90} />
                    </div>
                    <div className="group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: "120ms" }}>
                      <ProductPhoto slug="lait-frais-pasteurise" size={80} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-sm text-[#5C2010] group-hover:gap-3 transition-all">
                    Voir la gamme <ArrowRight size={14}/>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Eau ZAM-ZAM */}
            <ScrollReveal variant="up" delay={160}>
              <Link href="/produits?cat=eau" className="group block relative overflow-hidden rounded-2xl no-underline" style={{ minHeight: 420 }}>
                <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #E3F2FD 0%, #BBDEFB 60%, #90CAF9 100%)" }}/>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(160deg, #42A5F5 0%, #1E88E5 100%)" }}/>
                <div className="relative p-8 h-full flex flex-col">
                  <div className="mb-auto">
                    <span className="section-overline" style={{ color: "#1565C0" }}>EAU DE TABLE</span>
                    <h3 className="text-4xl font-bold text-[#0D47A1] mt-2 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                      ZAM-ZAM
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#1565C0" }}>
                      "L'eau pure et naturelle c'est la vie" — pôt 250ml et sachet 500ml.
                    </p>
                  </div>
                  <div className="flex gap-4 my-6 justify-center items-end">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <ProductPhoto slug="eau-zamzam-25cl" size={100} />
                    </div>
                    <div className="group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: "60ms" }}>
                      <ProductPhoto slug="eau-zamzam-50cl" size={100} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all" style={{ color: "#1565C0" }}>
                    Voir la gamme <ArrowRight size={14}/>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PUBLICITÉ "AVEC NIGER-LAIT, LA VIE VOUS SOURIT"
          ══════════════════════════════════════════ */}
      <section className="py-0 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[480px]">
          {/* Photo pub bébé */}
          <div className="relative min-h-[320px] lg:min-h-[480px]">
            <Image
              src="/images/506905169_3477398555729910_4995764297472963903_n.jpg"
              alt="Avec Niger-Lait, la vie vous sourit"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
          {/* Texte éditorial */}
          <ScrollReveal variant="right">
            <div className="flex flex-col justify-center h-full px-10 py-16 lg:py-24"
              style={{ background: "linear-gradient(145deg, #1A0800, #3A1208)" }}>
              <p className="section-overline mb-4">Notre promesse</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}>
                Avec Niger-Lait S.A,<br />
                <em className="not-italic" style={{ color: "#C89328" }}>la vie vous sourit</em>
              </h2>
              <div className="section-separator-gold mb-6"/>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
                Certifiée ISO depuis 2006, Niger-Lait S.A s'engage à fournir aux familles nigériennes
                des produits laitiers frais, sains et de qualité internationale — fabriqués ici,
                pour vous, chaque matin à Niamey.
              </p>
              {/* Badge ISO stamp */}
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ border: "3px solid #C89328", background: "rgba(200,147,40,0.1)" }}>
                  <div className="text-center">
                    <div className="text-[8px] text-[#C89328] font-bold italic leading-none">certifié</div>
                    <div className="text-[#C89328] text-xl font-black leading-tight">ISO</div>
                    <div className="text-[7px] text-[#C89328] leading-none">depuis 2006</div>
                  </div>
                </div>
                <Link href="/notre-histoire" className="btn-gold text-sm">
                  Notre histoire <ArrowRight size={15}/>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODUITS VEDETTES — Grille magazine
          ══════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "#F5EDD8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
            <ScrollReveal>
              <p className="section-overline mb-3">Nos incontournables</p>
              <h2 className="text-5xl font-bold text-[#1A1A1A]" style={{ fontFamily: "Playfair Display, serif" }}>
                Produits <em className="not-italic" style={{ color: "#5C2010" }}>phares</em>
              </h2>
              <div className="section-separator mt-4"/>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <Link href="/produits" className="btn-secondary text-sm py-2.5">
                Voir tout <ChevronRight size={14}/>
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {featuredProducts.map((product, i) => {
              const bgMap: Record<string,string> = {
                yaourts: "linear-gradient(145deg, #FFFDE7, #FFF8E1)",
                laits:   "linear-gradient(145deg, #F1F8E9, #E8F5E9)",
                eau:     "linear-gradient(145deg, #E3F2FD, #E1F5FE)",
              };
              const bg = bgMap[product.category] ?? "linear-gradient(145deg, #F5EDD8, #FBF7EF)";
              return (
              <ScrollReveal key={product.id} variant="scale" delay={i * 60}>
                <Link href={`/produits/${product.slug}`} className="product-card no-underline group block">

                  {/* Zone image */}
                  <div className="product-card-img" style={{ background: bg }}>
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-20 badge badge-brun text-[10px]">
                        {product.badge}
                      </span>
                    )}
                    {product.isNew && (
                      <span className="absolute top-3 right-3 z-20 badge badge-new text-[10px]">Nouveau</span>
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
                  <div className="px-5 pt-3 pb-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-1"
                      style={{ color: "#C89328" }}>
                      {product.category}
                    </p>
                    <h3 className="font-bold text-sm text-[#1A1A1A] mb-1.5 leading-tight"
                      style={{ fontFamily: "Playfair Display, serif" }}>
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400 mb-3 line-clamp-1 leading-relaxed">
                      {product.shortDesc}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {product.formats.slice(0, 2).map(f => (
                          <span key={f} className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                            style={{ background: "#F5EDD8", color: "#5C2010" }}>
                            {f}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-xs font-bold text-[#5C2010] group-hover:gap-1.5 transition-all">
                        Voir <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform"/>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ZAM-ZAM — Pub plein écran
          ══════════════════════════════════════════ */}
      <section className="py-0 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[420px]">
          {/* Texte gauche */}
          <ScrollReveal variant="left">
            <div className="flex flex-col justify-center h-full px-10 py-16 lg:py-20"
              style={{ background: "linear-gradient(145deg, #0D47A1, #1565C0, #1976D2)" }}>
              <p className="section-overline mb-4" style={{ color: "#90CAF9" }}>EAU DE TABLE</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}>
                Eau <em className="not-italic" style={{ color: "#90CAF9" }}>ZAM-ZAM</em><br />
                Une pure fraîcheur
              </h2>
              <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                "L'eau pure et naturelle c'est la vie." Disponible en pôt 250ml et sachet 500ml,
                ZAM-ZAM accompagne chaque moment de la journée des familles nigériennes.
              </p>
              <Link href="/produits?cat=eau" className="btn-white text-sm self-start">
                Découvrir ZAM-ZAM <ArrowRight size={15}/>
              </Link>
            </div>
          </ScrollReveal>
          {/* Photo famille ZAM-ZAM */}
          <div className="relative min-h-[300px] lg:min-h-[420px]">
            <Image
              src="/images/509000350_3479673065502459_1258093926589356224_n.jpg"
              alt="Eau ZAM-ZAM - Une pure fraîcheur"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NOTRE HISTOIRE — Éditorial cinématique
          ══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #1A0800 0%, #2E0E04 50%, #3A1208 100%)" }}>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #C89328 0%, transparent 60%)" }}/>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats visuels */}
            <ScrollReveal variant="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "1990", label: "Année de fondation", sub: "Niamey, Zone industrielle" },
                  { num: "ISO", label: "Certifié depuis 2006", sub: "Normes internationales" },
                  { num: "35+", label: "Années d'expertise", sub: "Produits laitiers" },
                  { num: "500K+", label: "Familles nigériennes", sub: "Servies chaque jour" },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-2xl p-5 hover:bg-white/10 transition-colors duration-300">
                    <div className="text-3xl font-bold mb-1" style={{ color: "#C89328", fontFamily: "Playfair Display, serif" }}>
                      {item.num}
                    </div>
                    <div className="text-white text-sm font-semibold mb-0.5 leading-tight">{item.label}</div>
                    <div className="text-xs" style={{ color: "rgba(200,147,40,0.7)" }}>{item.sub}</div>
                  </div>
                ))}
              </div>
              {/* Pub médaille "leader du marché" */}
              <div className="mt-6 rounded-xl overflow-hidden relative" style={{ height: 140 }}>
                <Image
                  src="/images/506899475_3477398795729886_2868937471688400822_n.jpg"
                  alt="Niger-Lait SA, leader sur le marché"
                  fill
                  sizes="600px"
                  className="object-cover object-center"
                />
              </div>
            </ScrollReveal>

            {/* Texte narratif */}
            <ScrollReveal variant="right">
              <p className="section-overline mb-4">Depuis 1990</p>
              <h2 className="text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                Une vision née au<br />
                <em className="not-italic" style={{ color: "#C89328" }}>cœur du Sahel</em>
              </h2>
              <div className="section-separator-gold mb-6"/>
              <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.75)" }}>
                Fondée à Niamey par des entrepreneurs nigériens passionnés, Niger-Lait S.A a grandi avec l'ambition
                de fournir des produits laitiers frais à chaque foyer nigérien — de Niamey à Zinder, de Maradi à Agadez.
              </p>
              <blockquote className="border-l-2 pl-5 py-1 mb-8" style={{ borderColor: "#C89328" }}>
                <p className="text-lg text-white/90 italic" style={{ fontFamily: "Playfair Display, serif" }}>
                  "Chaque litre que vous consommez, c'est un éleveur nigérien que vous soutenez."
                </p>
                <footer className="text-xs mt-2" style={{ color: "rgba(200,147,40,0.7)" }}>
                  — Fondateur, Niger-Lait S.A
                </footer>
              </blockquote>
              <Link href="/notre-histoire" className="btn-gold text-sm">
                Notre histoire complète <ArrowRight size={15}/>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GAMME COMPLÈTE — Photo ensemble
          ══════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: "#FAFAF8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal variant="left">
              <p className="section-overline mb-3">La gamme complète</p>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
                Toutes les saveurs,<br /><em className="not-italic" style={{ color: "#5C2010" }}>une seule marque</em>
              </h2>
              <div className="section-separator mb-6"/>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                8 saveurs de yaourts en coupelles, KOSSAM en poche, DJALA et LEBEN FRAIS en bouteille,
                Lait Entier Pasteurisé en sachet, Eau ZAM-ZAM — Niger-Lait S.A, votre partenaire laitier au quotidien.
              </p>
              <Link href="/produits" className="btn-primary text-sm">
                Voir toute la gamme <ArrowRight size={15}/>
              </Link>
            </ScrollReveal>
            {/* Photo pub catalogue complet */}
            <ScrollReveal variant="right">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/509183801_3478988012237631_5846688285902167296_n.jpg"
                  alt="Gamme complète Niger-Lait S.A"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VALEURS — Cards éditoriales
          ══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="section-overline mb-3">Ce qui nous anime</p>
            <h2 className="text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: "Playfair Display, serif" }}>
              Nos valeurs &amp; engagements
            </h2>
            <div className="section-separator-center mt-4"/>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-7">
            {values.map((val, idx) => (
              <ScrollReveal key={val.title} variant="up" delay={idx * 100}>
                <div className="group relative rounded-2xl p-8 overflow-hidden cursor-default"
                  style={{
                    background: idx === 0 ? "linear-gradient(145deg, #3A1208, #5C2010)" : idx === 1 ? "#FAFAF8" : "#F5EDD8",
                    border: idx === 0 ? "none" : "1px solid rgba(0,0,0,0.06)"
                  }}>
                  {idx === 0 && <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
                    style={{ background: "#C89328" }}/>}
                  <div className="text-4xl mb-5">{val.icon}</div>
                  <h3 className="text-xl font-bold mb-3 leading-tight"
                    style={{ fontFamily: "Playfair Display, serif", color: idx === 0 ? "white" : "#1A1A1A" }}>
                    {val.title}
                  </h3>
                  <p className="text-sm leading-relaxed"
                    style={{ color: idx === 0 ? "rgba(255,255,255,0.75)" : "#5A5A5A" }}>
                    {val.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TÉMOIGNAGES — Style premium
          ══════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: "#F5EDD8" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="section-overline mb-3">Ils nous font confiance</p>
            <h2 className="text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: "Playfair Display, serif" }}>
              La parole des familles nigériennes
            </h2>
            <div className="section-separator-center mt-4"/>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Aminata K.", role: "Mère de famille, Niamey", text: "Le KOSSAM de mes enfants le matin — c'est un rituel depuis des années. Frais, naturel, et mes enfants adorent.", avatar: "AK", color: "#5C2010" },
              { name: "Ibrahim M.", role: "Gérant épicerie, Zinder", text: "Niger-Lait est la marque la plus demandée par mes clients. La qualité ISO se sent vraiment dans les produits.", avatar: "IM", color: "#C89328" },
              { name: "Dr. Fatouma S.", role: "Nutritionniste, Niamey", text: "Je recommande régulièrement le LEBEN FRAIS à mes patients. Le rapport qualité-nutrition est excellent pour une alimentation équilibrée.", avatar: "FS", color: "#1565C0" },
            ].map((t, i) => (
              <ScrollReveal key={t.name} variant="up" delay={i * 100}>
                <div className="rounded-2xl p-7 h-full flex flex-col bg-white"
                  style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 20px rgba(0,0,0,0.04)" }}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 20 20" fill="#C89328">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1 italic mb-5"
                    style={{ fontFamily: "Playfair Display, serif" }}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ backgroundColor: t.color }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#1A1A1A]">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ACTUALITÉS — 3 cartes éditoriales
          ══════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <ScrollReveal>
              <p className="section-overline mb-3">Niger-Lait en action</p>
              <h2 className="text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: "Playfair Display, serif" }}>
                Nos <em className="not-italic" style={{ color: "#5C2010" }}>actualités</em>
              </h2>
              <div className="section-separator mt-4"/>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <Link href="/actualites" className="btn-secondary text-sm py-2.5">
                Toutes les actualités <ChevronRight size={14}/>
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => {
              const catColor = post.category === "Initiative Sociale" ? "#5C2010"
                : post.category === "Événement" ? "#C89328" : "#1565C0";
              return (
                <ScrollReveal key={post.id} variant="scale" delay={i * 80}>
                  <Link href="/actualites" className="group block rounded-2xl overflow-hidden no-underline bg-white"
                    style={{ border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 16px rgba(0,0,0,0.05)", transition: "box-shadow 0.3s, transform 0.3s" }}>
                    {/* Image */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      <Image
                        src={post.images[0]}
                        alt={post.title}
                        fill
                        sizes="(max-width:768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"/>
                      <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                        style={{ backgroundColor: catColor }}>
                        {post.category}
                      </span>
                      {post.images.length > 1 && (
                        <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-1 rounded-full bg-black/40 text-white">
                          +{post.images.length} photos
                        </span>
                      )}
                    </div>
                    {/* Contenu */}
                    <div className="p-5">
                      <p className="text-[11px] text-gray-400 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                        {post.date}
                      </p>
                      <h3 className="font-bold text-base text-[#1A1A1A] mb-2 leading-tight line-clamp-2"
                        style={{ fontFamily: "Playfair Display, serif" }}>
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-4"
                        style={{ fontFamily: "Inter, sans-serif" }}>
                        {post.excerpt}
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                            style={{ backgroundColor: "#F5EDD8", color: "#5C2010" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-xs font-semibold text-[#5C2010] group-hover:gap-2 transition-all">
                        Lire la suite <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform"/>
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Carte Map INCIN KANMU inline */}
          <ScrollReveal className="mt-10">
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <div className="px-6 py-4 flex items-center justify-between"
                style={{ background: "linear-gradient(90deg, #5C2010, #7D3018)" }}>
                <div>
                  <p className="text-white font-bold text-base" style={{ fontFamily: "Playfair Display, serif" }}>
                    📍 Kiosques INCIN KANMU — Points de vente à Niamey
                  </p>
                  <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}>
                    Une initiative Niger-Lait S.A pour l'autonomisation des femmes et des jeunes
                  </p>
                </div>
                <a href="https://urlr.me/tVqp9K" target="_blank" rel="noreferrer"
                  className="flex-shrink-0 ml-4 px-4 py-2 rounded-lg text-xs font-bold no-underline transition-all hover:opacity-90"
                  style={{ backgroundColor: "#C89328", color: "white", fontFamily: "Inter, sans-serif" }}>
                  Ouvrir dans Maps
                </a>
              </div>
              <div style={{ height: 380 }}>
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1ghFahKf91Zf4SXSVazz8-VRtnlZ3bzg&ehbc=2E312F&ll=13.525779691653776%2C2.117405550628799&z=12"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  title="Kiosques INCIN KANMU Niamey"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA NEWSLETTER — Cinématique final
          ══════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A0800, #3A1208, #5C2010)" }}>
        <div className="absolute inset-0 opacity-8"
          style={{ backgroundImage: "radial-gradient(ellipse at 30% 50%, rgba(200,147,40,0.2) 0%, transparent 60%)" }}/>
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
              Ne manquez aucune actualité
            </h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif" }}>
              Inscrivez-vous à notre newsletter pour recevoir nos nouvelles recettes, promotions et actualités Niger-Lait.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Votre adresse email"
                className="flex-1 h-12 rounded-lg px-4 text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "white" }}/>
              <button type="submit" className="btn-gold h-12 px-6 text-sm whitespace-nowrap">
                S'inscrire
              </button>
            </form>
            <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              Données protégées · Désabonnement possible à tout moment
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
