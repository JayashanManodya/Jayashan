import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './Button';
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  category: string;
  index: number;
}
export function ProjectCard({
  title,
  description,
  tags,
  category,
  githubUrl,
  demoUrl,
  index
}: ProjectCardProps) {
  return <motion.div initial={{
    opacity: 0,
    scale: 0.9
  }} whileInView={{
    opacity: 1,
    scale: 1
  }} viewport={{
    once: true
  }} transition={{
    delay: index * 0.1,
    duration: 0.5
  }} className="group relative rounded-xl overflow-hidden bg-slate-900/40 border border-white/10 hover:border-cyan-500/30 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-10" />

      {/* Abstract background pattern instead of image if none provided */}
      <div className="h-48 w-full bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full" />
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-20 p-6 -mt-20">
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 rounded-full">
            {category}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 mb-6 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => <span key={tag} className="text-xs text-gray-500 font-mono">
              #{tag}
            </span>)}
        </div>

        <div className="flex gap-4">
          {demoUrl && <Button size="sm" variant="outline" onClick={() => window.open(demoUrl, '_blank')}>
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>}
          {githubUrl && <Button size="sm" variant="secondary" onClick={() => window.open(githubUrl, '_blank')}>
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>}
        </div>
      </div>
    </motion.div>;
}