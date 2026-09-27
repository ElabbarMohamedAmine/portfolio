import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import Stack from "./sections/Stack";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Stack />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
