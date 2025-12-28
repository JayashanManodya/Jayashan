import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { ParticleBackground } from '../components/ui/ParticleBackground';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Education } from '../components/sections/Education';
import { Projects } from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';
export function Portfolio() {
  return <div className="bg-[#0a0a0f] min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <ParticleBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>;
}