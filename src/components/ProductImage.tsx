import Image from "next/image";

/* Maps product slug → real photo path in /public/images/ */
const PRODUCT_PHOTOS: Record<string, string> = {
  "kossam":               "/images/kossam.png",
  "djala":                "/images/djala.png",
  "leben-frais":          "/images/leben_1l.png",
  "lait-frais-pasteurise":"/images/lait_cahier.png",
  "eau-zamzam-25cl":      "/images/509000350_3479673065502459_1258093926589356224_n.jpg",
  "eau-zamzam-50cl":      "/images/488485340_1214652250669938_4582371166801414313_n.jpg",
  "yaourt-nature":        "/images/enssemble.jpg",
  "yaourt-fraise":        "/images/fraise.png",
  "yaourt-framboise":     "/images/framboise.png",
  "yaourt-peche":         "/images/Pêche.png",
  "yaourt-abricot":       "/images/abricot.png",
  "yaourt-coco":          "/images/coco.png",
  "yaourt-ananas":        "/images/ananas.png",
  "yaourt-fruits-exotiques": "/images/exotique.png",
  "yaourt-familial":      "/images/492666095_1236357971832699_4501630288635939577_n.jpg",
};

interface Props {
  slug: string;
  size?: number;
  className?: string;
  /** If true renders as fill inside a positioned container — caller must set relative+sized wrapper */
  fill?: boolean;
  priority?: boolean;
}

export function ProductPhoto({ slug, size = 180, className = "", fill = false, priority = false }: Props) {
  const src = PRODUCT_PHOTOS[slug] ?? "/images/enssemble.jpg";

  if (fill) {
    return (
      <Image
        src={src}
        alt={slug}
        fill
        sizes="(max-width:768px) 50vw, 300px"
        className={`object-contain ${className}`}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={slug}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority={priority}
    />
  );
}

export function hasRealPhoto(slug: string): boolean {
  return slug in PRODUCT_PHOTOS;
}
