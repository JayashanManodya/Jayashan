import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-900 dark:bg-slate-900 light:bg-slate-50"
    >
      {/* Modern Background Grid */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] light:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" style={{
        animationDelay: '1s'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side - Modern Text Layout */}
          <motion.div
            style={{ y: yText }}
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.3,
              duration: 0.8
            }}
            className="flex-1 space-y-8"
          >
            {/* Name with larger typography */}
            <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.5
            }} className="text-7xl md:text-10xl lg:text-9xl font-black text-white dark:text-white light:text-slate-900 leading-none tracking-tight">
              Jayashan
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Manodya
              </span>
            </motion.h1>

            {/* Modern CTA Buttons */}
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.8
            }} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth'
              })} className="group">
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button variant="outline" size="lg">
                <Download className="mr-2 w-5 h-5" />
                Resume
              </Button>
            </motion.div>


          </motion.div>

          {/* Right Side - Photo */}
          <motion.div
            style={{ y: yImage, scale: scaleImage }}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="relative flex-shrink-0"
          >
            {/* Photo without any frame or container */}
            <img src="/h.png" alt="Jayashan Manodya" className="w-96 h-96 md:w-[620px] md:h-[620px] object-contain" />
          </motion.div>
        </div>

        {/* Modern Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.2
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 dark:text-gray-500 light:text-slate-600 uppercase tracking-wider">
            Scroll
          </span>
          <motion.div animate={{
            y: [0, 8, 0]
          }} transition={{
            repeat: Infinity,
            duration: 1.5
          }} className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}