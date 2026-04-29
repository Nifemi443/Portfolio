import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Projects />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
