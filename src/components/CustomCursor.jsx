import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const canHover = window.matchMedia("(pointer: fine)").matches;
    if (!canHover) return;
    setEnabled(true);

    const pos = { x: 0, y: 0 };
    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setHidden(false);
      render();
    };

    const onOver = (e) => {
      const interactive = e.target.closest(
        "a, button, input, textarea, [role='button'], .skills__tab, .project-card, .service-card"
      );
      setHovering(!!interactive);
    };

    const onLeave = () => setHidden(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className={`custom-cursor ${hovering ? "is-hovering" : ""} ${hidden ? "is-hidden" : ""}`}
      aria-hidden="true"
    />
  );
}
