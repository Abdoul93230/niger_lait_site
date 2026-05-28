"use client";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);

  const variantClass =
    variant === "left" ? "reveal-left" :
    variant === "right" ? "reveal-right" :
    variant === "scale" ? "reveal-scale" : "reveal";

  return (
    <div ref={ref} className={`${variantClass} ${className}`}>
      {children}
    </div>
  );
}
