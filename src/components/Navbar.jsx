import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbMenu2, TbX, TbArrowUpRight, TbDownload } from "react-icons/tb";
import ThemeToggle from "./ThemeToggle";
import { useContact } from "../context/ContactContext";
import "./Navbar.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "The Tea" },
  { href: "#experience", label: "The Grind" },
  { href: "#education", label: "Glow-Up" },
  { href: "#skills", label: "Skill Check" },
  { href: "#services", label: "What I Serve" },
  { href: "#projects", label: "Receipts" },
  { href: "#achievements", label: "My Ws" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { openContact } = useContact();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    openContact();
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={(e) => handleClick(e, "#home")}>
          Ravuri <span>Sindhurani</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={active === link.href ? "is-active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            href="/Ravuri_Sindhurani_Resume.pdf"
            className="btn btn-secondary btn-sm navbar__resume"
            download="Ravuri_Sindhurani_Resume.pdf"
          >
            Resume <TbDownload />
          </a>
          <a
            href="#contact"
            className="btn btn-primary btn-sm navbar__cta"
            onClick={handleContactClick}
          >
            Get in Touch <TbArrowUpRight />
          </a>
          <ThemeToggle />
          <button
            className="navbar__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <TbX size={22} /> : <TbMenu2 size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Mobile"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className={active === link.href ? "is-active" : ""}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={handleContactClick}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: links.length * 0.04 }}
              className="navbar__mobile-cta"
            >
              Get in Touch <TbArrowUpRight />
            </motion.a>
            <motion.a
              href="/Ravuri_Sindhurani_Resume.pdf"
              download="Ravuri_Sindhurani_Resume.pdf"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (links.length + 1) * 0.04 }}
              className="navbar__mobile-resume"
              onClick={() => setOpen(false)}
            >
              Download Resume <TbDownload />
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
