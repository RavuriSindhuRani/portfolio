import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, filterOptions } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            A few projects that show how I approach building — from frontend
            polish to full-stack data handling.
          </p>
          <div className="projects__node-divider" aria-hidden="true">
            <span className="projects__node" />
            <span className="projects__node-line" />
            <span className="projects__node" />
            <span className="projects__node-line" />
            <span className="projects__node" />
          </div>
        </div>

        <div className="projects__filters">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              className={`skills__tab ${filter === opt ? "is-active" : ""}`}
              onClick={() => setFilter(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        <motion.div layout className="projects__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onViewDetails={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="projects__empty">No projects in this category yet.</p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
