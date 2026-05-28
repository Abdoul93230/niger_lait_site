"use client";
import { useRef, MouseEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  intensity?: number; // degrees max tilt (default 12)
  glare?: boolean;
}

export default function TiltCard({ children, className = "", intensity = 12, glare = true }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const rotX = -dy * intensity;
    const rotY =  dx * intensity;
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03,1.03,1.03)`;
    if (glareRef.current) {
      const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      glareRef.current.style.opacity = "1";
      glareRef.current.style.transform = `rotate(${angle}deg)`;
    }
  }

  function handleLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    if (glareRef.current) glareRef.current.style.opacity = "0";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.18s cubic-bezier(0.22,1,0.36,1)",
        willChange: "transform",
        position: "relative",
      }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            overflow: "hidden",
            pointerEvents: "none",
            opacity: 0,
            transition: "opacity 0.2s ease",
            zIndex: 20,
          }}
        >
          <div style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)",
            transformOrigin: "center",
          }} />
        </div>
      )}
    </div>
  );
}
