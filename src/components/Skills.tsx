import { motion } from 'motion/react';
import { RESUME_DATA } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 lg:px-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 mb-2">Technical Depth</p>
          <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">Technical Toolkit</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {RESUME_DATA.skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-6 pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                {category.title}
                <span className="text-[10px] text-slate-400 group-hover:text-teal-500 transition-colors">{category.skills.length} Items</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 font-mono text-xs hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
