import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { techIconsData } from '../../data/techIcons';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
  delay?: number;
}

export function SkillCard({
  title,
  skills,
  icon: Icon,
  delay = 0
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 rounded-2xl bg-indigo-50 text-[#6366f1] group-hover:bg-[#6366f1] group-hover:text-white transition-colors duration-300">
          <Icon size={28} />
        </div>
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => {
          const iconData = techIconsData[skill];
          return (
            <span
              key={index}
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 bg-slate-50 rounded-xl border border-slate-100 hover:bg-[#6366f1]/5 hover:border-[#6366f1]/20 hover:text-[#6366f1] transition-all duration-200"
            >
              {iconData && (
                <svg
                  viewBox="0 0 24 24"
                  fill={iconData.color}
                  className="w-4 h-4"
                >
                  <path d={iconData.path} />
                </svg>
              )}
              {skill}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}