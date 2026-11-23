import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbCertificate, TbX, TbZoomIn } from "react-icons/tb";
import { certifications } from "../data/certifications";
import "./Certifications.css";

export default function Certifications() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="certifications" className="section certifications mesh-animated">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Certifications</p>
          <h2 className="section-title">Learning, made official</h2>
          <p className="section-subtitle">
            Structured training and assessments that back up the hands-on
            work — click any certificate for a closer look.
          </p>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, i) => (
            <motion.button
              type="button"
              key={cert.id}
              className="cert-card"
              onClick={() => setActive(cert)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
            >
              <div className="cert-card__thumb">
                <img src={cert.image} alt={`${cert.title} certificate`} loading="lazy" />
                <span className="cert-card__zoom" aria-hidden="true">
                  <TbZoomIn size={20} />
                </span>
              </div>
              <div className="cert-card__body">
                <span className="cert-card__icon">
                  <TbCertificate size={18} />
                </span>
                <div>
                  <h3 className="cert-card__title">{cert.title}</h3>
                  <p className="cert-card__issuer">{cert.issuer}</p>
                  <p className="cert-card__date">{cert.date}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="cert-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} certificate, enlarged`}
          >
            <motion.div
              className="cert-lightbox__panel"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="cert-lightbox__close"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                <TbX size={20} />
              </button>
              <img src={active.image} alt={`${active.title} certificate`} />
              <div className="cert-lightbox__caption">
                <h3>{active.title}</h3>
                <p>
                  {active.issuer} · {active.date}
                  {active.credentialId ? ` · ID: ${active.credentialId}` : ""}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
