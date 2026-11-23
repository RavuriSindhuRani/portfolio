import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TbX,
  TbBrandLinkedin,
  TbMail,
  TbBrandGithub,
  TbCode,
  TbBrandWhatsapp,
  TbPhone,
  TbMapPin,
} from "react-icons/tb";
import "./ContactModal.css";
import "./Contact.css";

const socials = [
  { icon: TbBrandLinkedin, href: "https://www.linkedin.com/in/ravuri-sindhurani-16aa39261/", label: "LinkedIn" },
  { icon: TbMail, href: "mailto:rrsindhurani@gmail.com", label: "Email" },
  { icon: TbPhone, href: "tel:+919849900857", label: "+91 9849900857" },
  { icon: TbBrandGithub, href: "https://github.com/RavuriSindhuRani", label: "GitHub" },
  { icon: TbCode, href: "https://www.hackerrank.com/profile/rrsindhurani", label: "HackerRank" },
];

const WHATSAPP_NUMBER = "919849900857";

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please add a message.";
  return errors;
}

export default function ContactModal({ open, onClose }) {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("sending");

    const text = `Hi, I'm ${values.name} (${values.email}).\n\n${values.message}`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setStatus("success");
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal__close" onClick={onClose} aria-label="Close">
              <TbX size={20} />
            </button>

            <div className="contact-modal__body">
              <p className="section-eyebrow">Contact</p>
              <h3 id="contact-modal-title" className="contact-modal__title">
                Let's build something
              </h3>
              <p className="contact-modal__subtitle">
                Have a role, project, or idea in mind? Send it over and I'll
                reply on WhatsApp.
              </p>

              <div className="contact__grid">
                <form className="contact__form" onSubmit={handleSubmit} noValidate>
                  <div className="field">
                    <label htmlFor="cm-name">Name</label>
                    <input
                      id="cm-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={values.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "cm-name-error" : undefined}
                    />
                    {errors.name && <span className="field__error" id="cm-name-error">{errors.name}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="cm-email">Email</label>
                    <input
                      id="cm-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={values.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "cm-email-error" : undefined}
                    />
                    {errors.email && <span className="field__error" id="cm-email-error">{errors.email}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="cm-message">Message</label>
                    <textarea
                      id="cm-message"
                      name="message"
                      rows={4}
                      placeholder="Tell me a bit about what you're working on"
                      value={values.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "cm-message-error" : undefined}
                    />
                    {errors.message && <span className="field__error" id="cm-message-error">{errors.message}</span>}
                  </div>

                  <button className="btn btn-primary contact__submit" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Opening WhatsApp..." : (<>Send via WhatsApp <TbBrandWhatsapp /></>)}
                  </button>

                  {status === "success" && (
                    <motion.p
                      className="contact__status contact__status--success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      Opened WhatsApp with your message — just hit send there.
                    </motion.p>
                  )}
                </form>

                <div className="contact__aside">
                  <p className="contact__aside-text">
                    Prefer a direct message? Reach out on any of these — I
                    check all of them regularly.
                  </p>
                  <div className="contact__socials">
                    {socials.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="contact__social">
                        <s.icon size={20} />
                        <span>{s.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
