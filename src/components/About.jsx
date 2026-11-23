import { motion } from "framer-motion";
import { TbFeather, TbBooks, TbBrush, TbLeaf } from "react-icons/tb";
import profileImg from "../assets/profile.jpg";
import "./About.css";

const stats = [
  { value: "B.Tech", label: "Graduate" },
  { value: "Intern", label: "Qwik Digital" },
  { value: "3+", label: "Full Stack Projects" },
  { value: "Gold", label: "SQL Badge" },
];

const interests = [
  { icon: TbFeather, label: "Poetry Writing" },
  { icon: TbBooks, label: "Reading Books" },
  { icon: TbBrush, label: "Drawing" },
  { icon: TbLeaf, label: "Admiring Nature" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="section about mesh-animated">
      <div className="container">
        <div className="about__grid">
          <motion.div
            className="about__image-wrap"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about__frame">
              <img src={profileImg} alt="Portrait of Ravuri Sindhurani" />
            </div>
            <div className="about__frame-glow" aria-hidden="true" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p className="section-eyebrow" variants={fadeUp}>
              About
            </motion.p>
            <motion.h2 className="section-title" variants={fadeUp}>
              Turning ideas into working products
            </motion.h2>
            <motion.p className="about__text" variants={fadeUp}>
              I'm an aspiring <strong>MERN Stack Developer</strong> and B.Tech
              graduate in Electronics &amp; Communication Engineering from RGUKT
              Ongole. With hands-on experience building full-stack applications,
              I work end to end — from database architecture and RESTful APIs to
              responsive interfaces and interactive 3D visualizations.
            </motion.p>
            <motion.p className="about__text" variants={fadeUp}>
              During my internship as a{" "}
              <strong>Full Stack Developer Intern at Qwik Digital Solutions</strong>,
              I contributed to enterprise web development, an end-to-end Real Estate CRM
              platform, responsive desktop and mobile interfaces, 3D property plot layouts,
              and accelerated delivery using modern AI-assisted tools.
            </motion.p>
            <motion.p className="about__text" variants={fadeUp}>
              I specialize across <strong>MongoDB, Express.js, React.js, and Node.js</strong>,
              with strong proficiency in <strong>Java, Spring Boot, MySQL, Hibernate,
              TypeScript, and RESTful APIs</strong>. My portfolio includes an Event Management
              System presented at the J.P. Morgan Chase Hackathon, an E-commerce platform for
              paintings, and layered enterprise CRUD services.
            </motion.p>
            <motion.p className="about__text" variants={fadeUp}>
              I am actively looking for a <strong>MERN / Full Stack Developer role</strong>{" "}
              where I can apply my development foundation, SQL HackerRank certification,
              and passion for building scalable, maintainable, user-focused applications.
            </motion.p>
            <motion.p className="about__text" variants={fadeUp}>
              Alongside that, I take on freelance work too — building and{" "}
              <strong>designing websites</strong>, deploying them on{" "}
              <strong>Firebase</strong> or <strong>Vercel</strong>, and, on
              the creative side, <strong>writing poetry</strong> and{" "}
              <strong>drawing</strong>. Have a look at{" "}
              <a href="#services">what I offer</a>.
            </motion.p>

            <motion.div className="about__stats" variants={fadeUp}>
              {stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <span className="stat-card__value">{s.value}</span>
                  <span className="stat-card__label">{s.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div className="about__interests" variants={fadeUp}>
              <span className="about__interests-label">Beyond the code</span>
              <div className="about__interests-list">
                {interests.map(({ icon: Icon, label }) => (
                  <span className="interest-chip" key={label}>
                    <Icon size={16} />
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
