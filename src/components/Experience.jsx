import { motion } from "framer-motion";
import {
  TbBriefcase,
  TbCalendar,
  TbBuildingSkyscraper,
  TbDeviceDesktop,
  TbDeviceMobile,
  TbSparkles,
  TbCube,
  TbPalette,
  TbBuildingEstate,
  TbDashboard,
  TbCloudUpload,
  TbCheck,
} from "react-icons/tb";
import { experiences } from "../data/experience";
import "./Experience.css";

const iconMap = {
  TbDeviceDesktop,
  TbDeviceMobile,
  TbSparkles,
  TbCube,
  TbPalette,
  TbBuildingEstate,
  TbDashboard,
  TbCloudUpload,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" className="section experience mesh-animated">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Hands-on industry experience</h2>
          <p className="section-subtitle">
            Real-world development contributing to client and enterprise projects — from CRM
            desktop systems and mobile applications to website design and AI-assisted workflows.
          </p>
        </div>

        <div className="experience__list">
          {experiences.map((exp, index) => (
            <motion.article
              className="experience-card"
              key={exp.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="experience-card__top">
                <div className="experience-card__main">
                  <div className="experience-card__role-row">
                    <span className="experience-card__icon-badge">
                      <TbBriefcase size={22} />
                    </span>
                    <div>
                      <h3 className="experience-card__role">{exp.role}</h3>
                      <div className="experience-card__company-line">
                        <TbBuildingSkyscraper size={16} />
                        <span className="experience-card__company">{exp.company}</span>
                        <span className="experience-card__pill experience-card__pill--type">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="experience-card__meta">
                  <span className="experience-card__pill experience-card__pill--date">
                    <TbCalendar size={15} />
                    {exp.period}
                  </span>
                  <span className="experience-card__pill experience-card__pill--duration">
                    {exp.duration}
                  </span>
                </div>
              </div>

              <p className="experience-card__summary">{exp.summary}</p>

              <div className="experience-card__highlights-title">
                <span>Key Responsibilities & Deliverables</span>
              </div>

              <div className="experience-card__grid">
                {exp.highlights.map((item) => {
                  const Icon = iconMap[item.icon] || TbCheck;
                  return (
                    <motion.div
                      className="experience-card__item"
                      key={item.title}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="experience-card__item-header">
                        <span className="experience-card__item-icon">
                          <Icon size={20} />
                        </span>
                        <h4 className="experience-card__item-title">{item.title}</h4>
                      </div>
                      <p className="experience-card__item-desc">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="experience-card__tech">
                <span className="experience-card__tech-label">Core Competencies:</span>
                <div className="experience-card__tech-tags">
                  {exp.tech.map((t) => (
                    <span className="experience-card__tech-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
