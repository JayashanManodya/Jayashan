import { Navbar } from '../components/ui/Navbar';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Skills } from '../components/sections/Skills';
import { Education } from '../components/sections/Education';
import { Certifications } from '../components/sections/Certifications';
import { Projects } from '../components/sections/Projects';
import { Blogs } from '../components/sections/Blogs';
import { Contact } from '../components/sections/Contact';

export function Portfolio() {
  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white selection:bg-brand-primary/25 selection:text-black dark:selection:text-black transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Blogs />
        <Contact />
      </main>
    </div>
  );
}