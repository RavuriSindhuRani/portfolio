import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ParticleField from "./components/ParticleField";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import { ContactProvider, useContact } from "./context/ContactContext";

function AppShell() {
  const { open, closeContact } = useContact();

  return (
    <>
      <ParticleField />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Services />
        <Projects />
        <Certifications />
        <Achievements />
      </main>
      <Footer />
      <ContactModal open={open} onClose={closeContact} />
    </>
  );
}

export default function App() {
  return (
    <ContactProvider>
      <AppShell />
    </ContactProvider>
  );
}
