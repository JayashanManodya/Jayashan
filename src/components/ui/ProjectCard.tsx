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
  category: string | string[];
  index: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  category,
  image,
  githubUrl,
  demoUrl,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-[40px] overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="h-64 w-full bg-slate-50 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-indigo-500/10 flex items-center justify-center">
            <span className="text-slate-300 font-black tracking-tighter">No Preview</span>
          </div>
        )}

        {/* Category Overlay */}
        <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
          {(Array.isArray(category) ? category : [category]).map(cat => (
            <span key={cat} className="px-4 py-2 text-xs font-black tracking-wider bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-[#6366f1] rounded-full shadow-sm border border-white/50 dark:border-slate-700/50">
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#6366f1] transition-colors leading-none">
          {title}
        </h3>

        <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {tags.map(tag => (
            <span key={tag} className="text-xs font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-800">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {demoUrl && (
            <Button size="sm" className="bg-[#6366f1] hover:bg-indigo-700 text-white rounded-full px-6" onClick={() => window.open(demoUrl, '_blank')}>
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="outline" className="border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full px-6" onClick={() => window.open(githubUrl, '_blank')}>
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}