import Hero from "./components/Hero/Hero";
import Story from "./components/Story/Story";
import PhilosophyGrid from "./components/PhilosophyGrid/PhilosophyGrid";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import InstagramFeed from "./components/InstagramFeed/InstagramFeed";
import Footer from "./components/Footer/Footer";
import FloatingCTA from "./components/FloatingCTA/FloatingCTA";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <PhilosophyGrid />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <InstagramFeed />
      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </main>
  );
}
