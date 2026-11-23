import { createContext, useContext, useState } from "react";

const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openContact = () => setOpen(true);
  const closeContact = () => setOpen(false);

  return (
    <ContactContext.Provider value={{ open, openContact, closeContact }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return ctx;
}
