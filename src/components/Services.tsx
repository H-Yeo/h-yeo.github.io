import { motion } from 'motion/react';
import { RESUME_DATA } from '../data';
import { Settings, Layout, Shield } from 'lucide-react';

const icons = {
  Settings: Settings,
  Layout: Layout,
  Shield: Shield
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-8 lg:px-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-teal-600 dark:text-teal-400 mb-2">Capabilities</p>
          <h2 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">Specialized Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.services.map((service, index) => {
            const Icon = (icons as any)[service.icon];
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl hover:border-blue-400 dark:hover:border-blue-900 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
