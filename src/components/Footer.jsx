import { TbBrandLinkedin, TbMail, TbBrandGithub, TbCode, TbArrowUpRight, TbPhone } from "react-icons/tb";
import { useContact } from "../context/ContactContext";
import "./Footer.css";

const socials = [
  { icon: TbBrandLinkedin, href: "https://www.linkedin.com/in/ravuri-sindhurani-16aa39261/", label: "LinkedIn" },
  { icon: TbMail, href: "mailto:rrsindhurani@gmail.com", label: "Email" },
  { icon: TbPhone, href: "tel:+919849900857", label: "+91 9849900857" },
  { icon: TbBrandGithub, href: "https://github.com/RavuriSindhuRani", label: "GitHub" },
  { icon: TbCode, href: "https://www.hackerrank.com/profile/rrsindhurani", label: "HackerRank" },
];

export default function Footer() {
  const { openContact } = useContact();

  return (
    <footer className="footer mesh-animated">
      <div className="container footer__top">
        <div className="footer__brand">
          <p className="footer__name">Ravuri Sindhurani</p>
          <p className="footer__role">MERN Stack Developer</p>
          <p className="footer__tagline">
            Building scalable, maintainable, and user-focused web and mobile
            applications from Hyderabad, Telangana.
          </p>
          <a
            href="#contact"
            className="btn btn-primary footer__cta"
            onClick={(e) => {
              e.preventDefault();
              openContact();
            }}
          >
            Get in Touch <TbArrowUpRight />
          </a>
        </div>

        <div className="footer__socials">
          <p className="footer__socials-label">Find me on</p>
          <div className="footer__socials-list">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <s.icon size={20} />
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copy">&copy; 2026 Ravuri Sindhurani. All rights reserved.</p>
      </div>
    </footer>
  );
}
