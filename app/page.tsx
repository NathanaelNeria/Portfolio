import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Analytics />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Services />
        <Testimonial />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
