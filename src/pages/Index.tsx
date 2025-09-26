import Navigation from "@/components/Navigation";
import Hero3D from "@/components/Hero3D";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Security from "@/components/Security";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero3D />
      <About />
      <Skills />
      <Projects />
      <Security />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
