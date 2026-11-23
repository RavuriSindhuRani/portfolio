import { useEffect, useRef } from "react";
import "./ParticleField.css";

/**
 * Fixed full-page canvas background: soft dots that drift and draw a
 * connecting line to nearby dots (and to the pointer). Reads live theme
 * colors from CSS variables so it adapts to light/dark mode automatically.
 */
export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles = [];
    let animationId = null;
    let running = true;

    const pointer = { x: -9999, y: -9999, active: false };

    const getColors = () => {
      const styles = getComputedStyle(document.documentElement);
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      return {
        dot: styles.getPropertyValue("--accent").trim() || "#C89B3C",
        dot2: styles.getPropertyValue("--accent-2").trim() || "#4C8577",
        // In light theme, lines drawn from --text-faint read as washed-out
        // grey against the parchment background — use the accent colors
        // instead so the connecting lines stay clearly visible.
        line: isLight
          ? styles.getPropertyValue("--accent").trim() || "#A8791E"
          : styles.getPropertyValue("--text-faint").trim() || "#786E60",
        isLight,
      };
    };

    const hexToRgb = (hex) => {
      const clean = hex.replace("#", "");
      const bigint = parseInt(
        clean.length === 3
          ? clean.split("").map((c) => c + c).join("")
          : clean,
        16
      );
      if (Number.isNaN(bigint)) return { r: 200, g: 155, b: 60 };
      return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
    };

    const density = () => {
      const area = width * height;
      const base = width < 640 ? 16000 : 9000;
      return Math.min(70, Math.max(18, Math.round(area / base)));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = density();
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.8,
        hueA: Math.random() > 0.5,
      }));
    };

    const linkDist = () => (width < 640 ? 100 : 140);

    const draw = () => {
      const { dot, dot2, line, isLight } = getColors();
      const dotRgb = hexToRgb(dot);
      const dot2Rgb = hexToRgb(dot2);
      const lineRgb = hexToRgb(line);
      const lineAlphaBase = isLight ? 0.5 : 0.32;
      const dotAlphaBase = isLight ? 0.8 : 0.55;
      const pointerAlphaBase = isLight ? 0.65 : 0.5;

      ctx.clearRect(0, 0, width, height);

      // move
      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
      }

      const maxDist = linkDist();

      // connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        // link to pointer for an interactive "combining" feel
        if (pointer.active) {
          const dx = a.x - pointer.x;
          const dy = a.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist * 1.3) {
            const alpha = (1 - dist / (maxDist * 1.3)) * pointerAlphaBase;
            ctx.strokeStyle = `rgba(${dotRgb.r},${dotRgb.g},${dotRgb.b},${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * lineAlphaBase;
            ctx.strokeStyle = `rgba(${lineRgb.r},${lineRgb.g},${lineRgb.b},${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // dots
      for (const p of particles) {
        const c = p.hueA ? dotRgb : dot2Rgb;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${dotAlphaBase})`;
        ctx.arc(p.x, p.y, isLight ? p.r * 1.15 : p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (running) animationId = requestAnimationFrame(draw);
    };

    const onPointerMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };
    const onVisibility = () => {
      running = document.visibilityState === "visible";
      if (running && !animationId) draw();
      else if (!running && animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
