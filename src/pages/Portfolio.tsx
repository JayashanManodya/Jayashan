import { Navbar } from '../components/ui/Navbar';
import { ParticleBackground } from '../components/ui/ParticleBackground';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Skills } from '../components/sections/Skills';
import { Education } from '../components/sections/Education';
import { Certifications } from '../components/sections/Certifications';
import { Projects } from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';

export function Portfolio() {
  return <div className="bg-white min-h-screen text-slate-900 selection:bg-[#6366f1]/20 selection:text-[#6366f1]">
    <ParticleBackground />
    <Navbar />

    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </main>
  </div>;
}