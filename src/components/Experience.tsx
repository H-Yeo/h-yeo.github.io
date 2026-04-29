import { motion } from 'motion/react';
import { RESUME_DATA } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 lg:px-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 mb-2">Work History</p>
            <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">Experience</h2>
          </div>
          <p className="text-slate-400 dark:text-slate-500 font-serif italic max-w-xs text-right hidden md:block">
            Proven track record delivering technical excellence across federal and corporate domains.
          </p>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Time Line Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 dark:from-blue-400 via-slate-200 dark:via-slate-800 to-transparent md:left-[2.5rem]" />

          <div className="space-y-16">
            {RESUME_DATA.experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative md:grid md:grid-cols-[1fr_3fr] gap-12 group"
              >
                {/* Time Dot */}
                <div className={`absolute left-[-2.5rem] top-1.5 w-4 h-4 rounded-full border-2 bg-white dark:bg-slate-950 transition-colors duration-300 md:left-[2.2rem] z-10 
                  ${item.isCurrent ? 'border-blue-600 dark:border-blue-400 bg-blue-600 ring-4 ring-blue-500/10' : 'border-slate-300 dark:border-slate-700'}`} 
                />

                <div className="mb-4 md:mb-0 md:text-right">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${item.isCurrent ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}`}>
                    {item.period}
                  </span>
                  {item.isGov && (
                    <div className="mt-2 text-[10px] uppercase font-bold tracking-widest text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-2 py-0.5 rounded inline-block md:block md:w-fit md:ml-auto">
                      Gov Contract
                    </div>
                  )}
                </div>

                <div className="relative">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">{item.role}</h3>
                  <h4 className="text-lg font-mono font-medium text-blue-600 dark:text-blue-400 mb-4">{item.company}</h4>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 max-w-2xl">
                    {item.description}
                  </p>

                  {item.bullets.length > 0 && (
                    <ul className="space-y-3 mb-6">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          <span className="text-teal-600 dark:text-teal-500 mt-1">→</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-24 border-t border-slate-100 dark:border-slate-800 pt-16">
          <div className="grid md:grid-cols-[1fr_2.5fr] items-center gap-12">
            <div className="md:text-right">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-1">Academic</p>
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">Foundation</h3>
            </div>
            <div className="p-8 bg-blue-50/50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900/30 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-blue-400 transition-colors duration-300">
              <div>
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-100">{RESUME_DATA.education.degree}</h4>
                <p className="text-blue-700/70 dark:text-blue-400/70 font-medium">{RESUME_DATA.education.institution}</p>
              </div>
              <p className="text-sm text-blue-800/60 dark:text-blue-300/50 font-serif italic max-w-xs md:text-right">
                {RESUME_DATA.education.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
