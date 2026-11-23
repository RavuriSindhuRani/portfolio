import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiOpenjdk,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiClaude,
  SiVercel,
  SiFirebase,
  SiGodaddy,
  SiHostinger,
  SiTypescript,
  SiSpringboot,
  SiHibernate,
  SiIntellijidea,
  SiEclipseide,
  SiGithubcopilot,
} from "react-icons/si";
import {
  TbApi,
  TbChartBar,
  TbFileSpreadsheet,
  TbSparkles,
  TbRocket,
  TbHeart,
  TbBrandVscode,
  TbDeviceDesktop,
  TbDatabase,
  TbShieldCheck,
  TbDashboard,
  TbLayersIntersect,
} from "react-icons/tb";
import { skillCategories } from "../data/skills";
import "./Skills.css";

const iconLookup = {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiOpenjdk,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiClaude,
  SiVercel,
  SiFirebase,
  SiGodaddy,
  SiHostinger,
  SiTypescript,
  SiSpringboot,
  SiHibernate,
  SiIntellijidea,
  SiEclipseide,
  SiGithubcopilot,
  TbApi,
  TbChartBar,
  TbFileSpreadsheet,
  TbSparkles,
  TbRocket,
  TbHeart,
  TbBrandVscode,
  TbDeviceDesktop,
  TbDatabase,
  TbShieldCheck,
  TbDashboard,
  TbLayersIntersect,
};

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId);

  return (
    <section id="skills" className="section skills mesh-animated">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">A practical toolkit</h2>
          <p className="section-subtitle">
            Technologies I reach for across the stack — from interface to
            infrastructure.
          </p>
        </div>

        <div className="skills__tabs" role="tablist">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeId === cat.id}
              className={`skills__tab ${activeId === cat.id ? "is-active" : ""}`}
              onClick={() => setActiveId(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            className="skills__panel"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="skills__panel-desc">{active.description}</p>
            <div className="skills__grid">
              {active.skills.map((skill, i) => {
                const Icon = iconLookup[skill.icon];
                return (
                  <motion.div
                    className="skill-chip"
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4 }}
                  >
                    <span className="skill-chip__icon">
                      {Icon && <Icon size={22} />}
                    </span>
                    <span className="skill-chip__name">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
