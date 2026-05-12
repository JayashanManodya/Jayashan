import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface TimelineItemProps {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  index: number;
  badges?: string[];
}

export function TimelineItem({
  degree,
  institution,
  period,
  location,
  description,
  index,
  badges
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative pl-10 pb-16 border-l-4 border-black/15 dark:border-white/15 last:pb-0 group"
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-14px] top-0 w-6 h-6 bg-white dark:bg-black border-4 border-brand-primary rounded-full group-hover:scale-125 transition-transform duration-300 shadow-sm" />

      <div className="bg-white dark:bg-black/[0.06] p-8 rounded-[32px] border border-black/15 dark:border-white/15 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h3 className="text-2xl font-bold text-black dark:text-white tracking-tight leading-tight">{degree}</h3>
          <span className="flex items-center text-sm font-semibold text-brand-primary bg-brand-primary/10 dark:bg-brand-primary/20 px-4 py-2 rounded-full w-fit">
            <Calendar className="w-4 h-4 mr-2" />
            {period}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 mb-6">
          <span className="text-lg font-semibold text-black/75 dark:text-white/90 tracking-wide">
            {institution}
          </span>
          <span className="flex items-center text-black/55 dark:text-white/55 font-semibold text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            {location}
          </span>
        </div>

        <p className="text-black/70 dark:text-white/70 leading-relaxed text-lg mb-6">{description}</p>

        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 rounded-xl text-sm font-medium bg-black/[0.06] dark:bg-white/10 text-black dark:text-white border border-black/15 dark:border-white/15 hover:border-brand-primary dark:hover:border-brand-primary transition-colors cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}