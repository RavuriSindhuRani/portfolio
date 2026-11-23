import { motion } from "framer-motion";
import { TbAward, TbMedal, TbTrophy } from "react-icons/tb";
import { achievements } from "../data/achievements";
import "./Achievements.css";

const TbIcons = { TbAward, TbMedal, TbTrophy };

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements mesh-animated">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Achievements</p>
          <h2 className="section-title">Recognition along the way</h2>
          <p className="section-subtitle">
            Milestones that reflect consistent effort — academically and
            technically.
          </p>
        </div>

        <div className="achievements__grid">
          {achievements.map((item, i) => {
            const Icon = TbIcons[item.icon];
            return (
              <motion.div
                className="achievement-card"
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="achievement-card__icon">
                  {Icon && <Icon size={26} />}
                </div>
                <h3 className="achievement-card__title">{item.title}</h3>
                <p className="achievement-card__issuer">{item.issuer}</p>
                <p className="achievement-card__desc">{item.description}</p>
                {item.image && (
                  <img
                    className="achievement-card__badge"
                    src={item.image}
                    alt={`${item.title} badge`}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
