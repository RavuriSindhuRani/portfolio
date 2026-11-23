import { motion } from "framer-motion";
import { TbArrowUpRight, TbCircleFilled, TbDownload } from "react-icons/tb";
import Typewriter from "./Typewriter";
import { useContact } from "../context/ContactContext";
import profileImg from "../assets/profile.jpg";
import "./Hero.css";

const particles = Array.from({ length: 14 }, (_, i) => i);

const roles = [
  "MERN Stack Developer",
  "Full Stack Web Developer",
  "Java & Spring Boot Developer",
  "AI-Assisted Engineer",
];

export default function Hero() {
  const { openContact } = useContact();

  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="hero__particles" aria-hidden="true">
        {particles.map((i) => (
          <span
            key={i}
            className="hero__particle"
            style={{
              left: `${(i * 37) % 100}%`,
              animationDelay: `${(i * 1.7) % 10}s`,
              animationDuration: `${14 + (i % 5) * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__intro">
            <div className="hero__avatar">
              <img src={profileImg} alt="Ravuri Sindhurani" />
              <span className="hero__wave" role="img" aria-label="waving hand">
                👋
              </span>
            </div>
            <div>
              <p className="hero__greeting">Hi there, I'm</p>
              <h1 className="hero__name text-gradient-animated">
                <Typewriter words={["Ravuri Sindhurani"]} loop={false} typingSpeed={75} />
              </h1>
            </div>
          </div>
          <h2 className="hero__role">
            <span className="text-gradient">
              <Typewriter words={roles} loop typingSpeed={70} deletingSpeed={35} pauseTime={1500} />
            </span>
          </h2>
          <p className="hero__desc">
            Aspiring <strong>MERN Stack Developer</strong> with hands-on experience in full-stack
            development using <strong>React.js</strong>, <strong>Node.js</strong>,{" "}
            <strong>Express.js</strong>, and <strong>MongoDB</strong> — building enterprise Real Estate CRM
            platforms, responsive desktop &amp; mobile interfaces, and interactive 3D layouts.
          </p>

          <div className="hero__actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work <TbArrowUpRight />
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                openContact();
              }}
            >
              Contact Me
            </a>
            <a
              href="/Ravuri_Sindhurani_Resume.pdf"
              className="btn btn-secondary"
              download="Ravuri_Sindhurani_Resume.pdf"
            >
              Download Resume <TbDownload />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="code-panel">
            <div className="code-panel__bar">
              <span className="dot dot--red" />
              <span className="dot dot--yellow" />
              <span className="dot dot--green" />
              <span className="code-panel__title">developer.js</span>
            </div>
            <div className="code-panel__body">
              <p><span className="tok-key">const</span> <span className="tok-var">developer</span> = {"{"}</p>
              <p className="indent"><span className="tok-prop">name</span>: <span className="tok-str">"Ravuri Sindhurani"</span>,</p>
              <p className="indent"><span className="tok-prop">role</span>: <span className="tok-str">"MERN Stack Developer"</span>,</p>
              <p className="indent"><span className="tok-prop">location</span>: <span className="tok-str">"Hyderabad, Telangana"</span>,</p>
              <p className="indent"><span className="tok-prop">stack</span>: [<span className="tok-str">"React"</span>, <span className="tok-str">"Node"</span>, <span className="tok-str">"Express"</span>, <span className="tok-str">"MongoDB"</span>],</p>
              <p className="indent"><span className="tok-prop">status</span>: <span className="tok-str">"open to work"</span>,</p>
              <p>{"}"};</p>
              <p className="code-panel__line-empty">&nbsp;</p>
              <p><span className="tok-key">function</span> <span className="tok-fn">deploy</span>() {"{"}</p>
              <p className="indent"><span className="tok-key">return</span> <span className="tok-str">"shipping quality code"</span>;</p>
              <p>{"}"}</p>
              <span className="code-panel__caret" />
            </div>
            <div className="code-panel__footer">
              <span><TbCircleFilled className="status-dot" /> building</span>
              <span>UTF-8</span>
              <span>JavaScript</span>
            </div>
          </div>
          <div className="code-panel__shadow" aria-hidden="true" />
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span />
      </motion.div>
    </section>
  );
}
