import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div className="bg-slate-900 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Experience */}
      <Experience />

      {/* Certifications */}
      <Certifications />

      {/* GitHub Stats */}
      <GithubStats />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;