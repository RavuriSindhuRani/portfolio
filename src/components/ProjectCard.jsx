import { motion } from "framer-motion";
import { TbBrandGithub, TbExternalLink, TbArrowUpRight } from "react-icons/tb";
import "./ProjectCard.css";

export default function ProjectCard({ project, onViewDetails, index }) {
  return (
    <motion.article
      className="project-card"
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-card__image-wrap">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-card__overlay">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onViewDetails(project)}
          >
            View Details <TbArrowUpRight />
          </button>
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__tags">
          {project.category.map((c) => (
            <span key={c} className="project-card__tag">
              {c}
            </span>
          ))}
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>

        <ul className="project-card__tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <TbBrandGithub /> GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <TbExternalLink /> Live Demo
            </a>
          )}
          <button className="btn btn-secondary btn-sm" onClick={() => onViewDetails(project)}>
            Details
          </button>
        </div>
      </div>
    </motion.article>
  );
}
