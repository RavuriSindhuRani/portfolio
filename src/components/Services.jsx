import { motion } from "framer-motion";
import { TbCode, TbPalette, TbFeather, TbBrush, TbArrowUpRight } from "react-icons/tb";
import { SiFirebase, SiVercel } from "react-icons/si";
import { services } from "../data/services";
import { useContact } from "../context/ContactContext";
import "./Services.css";

const iconLookup = { TbCode, TbPalette, TbFeather, TbBrush, SiFirebase, SiVercel };

export default function Services() {
  const { openContact } = useContact();

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Services</p>
          <h2 className="section-title">What I can help you build</h2>
          <p className="section-subtitle">
            Beyond my own projects, I take on freelance and collaborative
            work — from a full website to a single deploy.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = iconLookup[service.icon];
            return (
              <motion.div
                className="service-card"
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="service-card__icon">
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="services__cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>Have a project in mind?</p>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              openContact();
            }}
          >
            Let's talk <TbArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
