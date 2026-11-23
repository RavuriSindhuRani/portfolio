import { motion } from "framer-motion";
import { education } from "../data/education";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Education</p>
          <h2 className="section-title">The academic path</h2>
          <p className="section-subtitle">
            From secondary school to a B.Tech in Electronics &amp;
            Communication Engineering, with software development woven in
            along the way.
          </p>
        </div>

        <div className="timeline">
          <motion.div
            className="timeline__line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
          {education.map((item, i) => (
            <motion.div
              className="timeline__item"
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="timeline__dot" />
              <div className="timeline__card">
                <span className="timeline__year">{item.year}</span>
                <h3 className="timeline__institution">{item.institution}</h3>
                <p className="timeline__program">{item.program}</p>
                <p className="timeline__result">{item.result}</p>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
