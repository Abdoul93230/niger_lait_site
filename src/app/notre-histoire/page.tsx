import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Leaf, Users, Shield } from "lucide-react";
import { timeline, values } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export default function NotreHistoirePage() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── Hero ── */}
      <section className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A0800 0%, #3A1208 50%, #5C2010 100%)" }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 30% 70%, #C89328 0%, transparent 60%)" }}/>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-overline mb-4">Depuis 1990</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Notre Histoire
          </h1>
          <div className="section-separator-center mb-6"/>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.8)", fontFamily: "Inter, sans-serif" }}>
            Une histoire nigérienne de passion, de qualité et d'engagement envers les familles de notre pays.
          </p>
        </div>
      </section>

      {/* ── Fondation narrative ── */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="left">
            <p className="section-overline mb-4">Notre origine</p>
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Une vision née au cœur du Sahel
            </h2>
            <div className="section-separator mb-6"/>
            <p className="text-lg text-gray-600 leading-relaxed mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
              Niger-Lait SA est née en 1990 d'une conviction simple mais profonde : le Niger, pays d'élevage ancestral
              et troisième cheptel bovin d'Afrique de l'Ouest, mérite une industrie laitière à la hauteur de ses
              troupeaux et de ses familles.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Fondée à Niamey par des entrepreneurs nigériens passionnés, Niger-Lait a grandi avec l'ambition de
              fournir du lait local de qualité à chaque foyer nigérien — yaourts, laits frais et eau minérale Zam-Zam.
            </p>
            <blockquote className="border-l-4 pl-5 py-2 mb-8 italic" style={{ borderColor: "#C89328" }}>
              <p className="text-xl text-[#1A1A1A]" style={{ fontFamily: "Playfair Display, serif" }}>
                "Chaque litre de Niger-Lait que vous consommez, c'est un éleveur nigérien que vous soutenez."
              </p>
              <footer className="text-sm text-gray-400 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
                — Fondateur, Niger-Lait SA
              </footer>
            </blockquote>
            <Link href="/contact" className="btn-primary">
              Nous contacter <ArrowRight size={16} />
            </Link>
          </ScrollReveal>

          {/* Stats avec vraie photo en fond */}
          <ScrollReveal variant="right">
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "1990", label: "Fondation", sub: "Niamey, Niger" },
                { num: "ISO", label: "Certifié depuis", sub: "2006" },
                { num: "35+", label: "Années", sub: "d'expertise" },
                { num: "500K+", label: "Familles", sub: "servies chaque jour" },
              ].map((item, i) => (
                <TiltCard key={item.label} intensity={16}>
                <div
                  className="rounded-2xl p-6 text-center"
                  style={{
                    background: i % 2 === 0
                      ? "linear-gradient(145deg, #3A1208, #5C2010)"
                      : "white",
                    border: i % 2 !== 0 ? "1px solid rgba(0,0,0,0.06)" : "none",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.07)"
                  }}>
                  <div className="text-3xl font-bold mb-1"
                    style={{ color: i % 2 === 0 ? "#C89328" : "#5C2010", fontFamily: "Playfair Display, serif" }}>
                    {item.num}
                  </div>
                  <div className="text-sm font-semibold mb-0.5"
                    style={{ color: i % 2 === 0 ? "white" : "#1A1A1A" }}>
                    {item.label}
                  </div>
                  <div className="text-xs"
                    style={{ color: i % 2 === 0 ? "rgba(200,147,40,0.8)" : "#9E9E9E" }}>
                    {item.sub}
                  </div>
                </div>
                </TiltCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mot de la Directrice ── */}
      <section className="py-20" style={{ background: "linear-gradient(145deg, #F5EDD8 0%, #FBF7EF 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="section-overline mb-3">Édito</p>
            <h2 className="text-4xl font-bold text-[#1A1A1A]" style={{ fontFamily: "Playfair Display, serif" }}>
              Mot de la <em className="not-italic" style={{ color: "#5C2010" }}>Directrice</em>
            </h2>
            <div className="section-separator-center mt-4"/>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <ScrollReveal variant="left">
              <div className="relative mx-auto max-w-sm">
                <div className="rounded-3xl overflow-hidden shadow-2xl"
                  style={{ aspectRatio: "3/4", position: "relative" }}>
                  <Image
                    src="/images/directrice.jpg"
                    alt="La Directrice de Niger-Lait S.A"
                    fill
                    sizes="(max-width:1024px) 80vw, 40vw"
                    className="object-cover object-top"
                  />
                  {/* Overlay subtil en bas */}
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(92,32,16,0.6) 0%, transparent 50%)" }}/>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-bold text-white text-lg leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                      Directrice Générale
                    </p>
                    <p className="text-[#C89328] text-sm font-medium mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                      Niger-Lait S.A
                    </p>
                  </div>
                </div>
                {/* Décoration dorée */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full -z-10"
                  style={{ background: "radial-gradient(circle, #C89328 0%, transparent 70%)", opacity: 0.25 }}/>
              </div>
            </ScrollReveal>

            {/* Citation */}
            <ScrollReveal variant="right">
              <div className="flex flex-col justify-center">
                <div className="text-7xl leading-none mb-4" style={{ color: "#C89328", fontFamily: "Georgia, serif", opacity: 0.6 }}>
                  "
                </div>
                <blockquote className="mb-8">
                  <p className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] leading-snug mb-4"
                    style={{ fontFamily: "Playfair Display, serif" }}>
                    Niger-Lait, c'est bien plus qu'une entreprise. C'est une promesse faite
                    aux familles nigériennes — celle de leur offrir chaque jour le meilleur
                    du lait local.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                    Depuis 35 ans, nous avons su grandir avec le Niger, adapter nos produits
                    aux goûts de nos consommateurs, tout en maintenant des standards de qualité
                    reconnus à l'international. Chaque yaourt, chaque litre de lait frais,
                    chaque bouteille d'eau Zam-Zam porte en elle l'ambition de notre pays.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    Notre force, c'est vous — nos clients, nos éleveurs partenaires, nos équipes.
                    Ensemble, nous écrivons chaque jour une nouvelle page de l'histoire de
                    Niger-Lait S.A.
                  </p>
                </blockquote>

                <div className="flex items-center gap-4 pt-4"
                  style={{ borderTop: "2px solid rgba(200,147,40,0.3)" }}>
                  <div className="w-12 h-12 rounded-full overflow-hidden relative flex-shrink-0"
                    style={{ outline: "2px solid #C89328" }}>
                    <Image
                      src="/images/directrice.jpg"
                      alt="Directrice Niger-Lait"
                      fill
                      sizes="48px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A1A] text-sm" style={{ fontFamily: "Playfair Display, serif" }}>
                      Directrice Générale
                    </p>
                    <p className="text-[#C89328] text-xs font-semibold tracking-wide uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
                      Niger-Lait S.A — Niamey, Niger
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Notre Usine ── */}
      <section className="py-0 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Photo visite ministre devant l'usine */}
          <div className="relative min-h-[360px] lg:min-h-[500px]">
            <Image
              src="/images/actualite2.jpg"
              alt="Niger-Lait S.A — Zone industrielle Kalmaharo, Niamey"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to right, transparent 60%, rgba(26,8,0,0.3))" }}/>
            {/* Caption */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{ background: "rgba(26,8,0,0.65)", backdropFilter: "blur(8px)" }}>
                <span className="text-[10px] font-bold text-[#C89328] uppercase tracking-widest">
                  Zone industrielle Route Kalmaharo, Niamey
                </span>
              </div>
            </div>
          </div>

          {/* Texte usine */}
          <ScrollReveal variant="right">
            <div className="flex flex-col justify-center h-full px-10 py-16 lg:py-20 bg-white">
              <p className="section-overline mb-4">Notre site de production</p>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}>
                L'usine qui nourrit<br />
                <em className="not-italic" style={{ color: "#5C2010" }}>tout le Niger</em>
              </h2>
              <div className="section-separator mb-6"/>
              <p className="text-base text-gray-600 leading-relaxed mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
                Située Zone industrielle Route Kalmaharo à Niamey, notre usine est le cœur battant
                de Niger-Lait S.A. Chaque matin, nos équipes collectent le lait frais des éleveurs
                partenaires et le transforment selon les normes ISO les plus strictes.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: "🌡️", label: "Pasteurisation à 72°C", sub: "Standard OMS" },
                  { icon: "❄️", label: "Chaîne du froid", sub: "2°C — 6°C garantis" },
                  { icon: "🔬", label: "Contrôle qualité", sub: "Tests quotidiens" },
                  { icon: "🏅", label: "Certification ISO", sub: "Depuis 2006" },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ background: "#F5EDD8" }}>
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-[#1A1A1A] leading-tight">{item.label}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Visite ministre mention */}
              <div className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: "linear-gradient(90deg, #F5EDD8, #FBF7EF)", border: "1px solid rgba(92,32,16,0.1)" }}>
                <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src="/images/logo.jpg"
                    alt="Niger-Lait"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed italic" style={{ fontFamily: "Playfair Display, serif" }}>
                  En 2024, le Ministre du Commerce M. Abdoulaye Seydou a visité notre usine
                  dans le cadre de la Semaine "Consommons Local" — réaffirmant notre rôle
                  dans la souveraineté alimentaire du Niger.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Ambassadeurs ── */}
      <section className="py-20" style={{ background: "linear-gradient(145deg, #1A0800, #3A1208)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="section-overline mb-3">Les visages de Niger-Lait</p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "Playfair Display, serif" }}>
              Nos <em className="not-italic" style={{ color: "#C89328" }}>ambassadeurs</em>
            </h2>
            <div className="section-separator-center mt-4"/>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: "/images/45163760_1377252442411209_295500291199991808_n.jpg", caption: "Yaourt en coupelle — une pause savoureuse", product: "Yaourts" },
              { img: "/images/45006894_1376496245820162_581483321419104256_n.jpg", caption: "Lait Entier Pasteurisé — la pureté du lait nigérien", product: "Laits" },
              { img: "/images/45166286_1377949979008122_1362309964969803776_n.jpg", caption: "Eau Zam-Zam — une pure fraîcheur", product: "Eau Zam-Zam" },
              { img: "/images/45099212_1377657959037324_6867838068502560768_n.jpg", caption: "Toute la gamme Niger-Lait S.A", product: "Gamme complète" },
            ].map((item, i) => (
              <ScrollReveal key={i} variant="scale" delay={i * 80}>
                <div className="group relative rounded-2xl overflow-hidden"
                  style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={item.img}
                    alt={item.caption}
                    fill
                    sizes="(max-width:768px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay gradient bas */}
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(26,8,0,0.85) 0%, transparent 55%)" }}/>
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#C89328] block mb-1">
                      {item.product}
                    </span>
                    <p className="text-white text-xs leading-snug" style={{ fontFamily: "Playfair Display, serif" }}>
                      {item.caption}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20" style={{ backgroundColor: "#F5EDD8" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="section-overline mb-3">Notre parcours</p>
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              35 Ans d'Histoire
            </h2>
            <div className="section-separator-center"/>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5"
              style={{ background: "linear-gradient(to bottom, #5C2010, #C89328)" }}/>
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} variant="left" delay={i * 60}>
                  <div className="flex gap-6 items-start">
                    <div className="relative flex-shrink-0 z-10">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg"
                        style={{ backgroundColor: i % 2 === 0 ? "#5C2010" : "#C89328", fontFamily: "Inter, sans-serif" }}>
                        {item.year}
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-5 shadow-sm flex-1 mt-1 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg text-[#1A1A1A] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section id="valeurs" className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="section-overline mb-3">Ce qui nous anime</p>
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
              Nos Valeurs &amp; Engagements
            </h2>
            <div className="section-separator-center"/>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Award size={28} />, title: "Qualité Sans Compromis", desc: "Pasteurisation à 72°C, contrôles qualité quotidiens, chaîne du froid maîtrisée. Chaque produit Niger-Lait répond aux normes ISO internationales.", color: "#5C2010" },
              { icon: <Users size={28} />, title: "Ancrage Local", desc: "Nous travaillons exclusivement avec des éleveurs nigériens. Chaque achat Niger-Lait maintient des revenus dans l'économie du Niger.", color: "#C89328" },
              { icon: <Leaf size={28} />, title: "Durabilité", desc: "Emballages recyclables, gestion économe de l'eau, énergie renouvelable. Nous construisons l'avenir avec responsabilité.", color: "#C1440E" },
              { icon: <Shield size={28} />, title: "Transparence", desc: "Nos ingrédients, nos processus, nos certifications : tout est visible. La confiance se gagne par la transparence.", color: "#1565C0" },
              { icon: "🤝", title: "Partenariat Éleveurs", desc: "Contrats équitables, prix stables, formation technique : nos éleveurs partenaires sont au cœur de notre modèle.", color: "#5C2010", isEmoji: true },
              { icon: "🌟", title: "Innovation Continue", desc: "Nouveaux parfums, nouveaux formats, nouvelles recettes : Niger-Lait innove chaque année pour surprendre et satisfaire.", color: "#C89328", isEmoji: true },
            ].map((val) => (
              <ScrollReveal key={val.title} variant="up">
                <TiltCard className="bg-white rounded-2xl shadow-sm" intensity={12}>
                <div className="p-7">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white"
                    style={{ backgroundColor: val.color, fontSize: (val as any).isEmoji ? 24 : undefined }}>
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                    {val.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {val.desc}
                  </p>
                </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="qualite" className="py-16"
        style={{ background: "linear-gradient(135deg, #1A0800, #5C2010)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
              Certifications &amp; Qualité
            </h2>
            <p className="mb-10" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}>
              Niger-Lait respecte les normes les plus strictes de l'industrie alimentaire.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🏅", label: "Normes HACCP", sub: "Sécurité alimentaire" },
                { icon: "✅", label: "Pasteurisation 72°C", sub: "Standard OMS" },
                { icon: "🌡️", label: "Chaîne du froid", sub: "2°C — 6°C garantis" },
                { icon: "🔬", label: "Contrôle qualité", sub: "Tests quotidiens" },
              ].map((cert) => (
                <div key={cert.label} className="rounded-2xl p-5 text-center glass">
                  <span className="text-3xl mb-3 block">{cert.icon}</span>
                  <p className="font-semibold text-white text-sm mb-1">{cert.label}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{cert.sub}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Découvrez notre gamme
          </h2>
          <p className="text-gray-500 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            35 ans de passion, une gamme complète fabriquée avec soin, chaque jour à Niamey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/produits" className="btn-primary">Nos produits <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn-secondary">Nous contacter</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
