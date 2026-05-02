import { motion } from 'motion/react';
import { RESUME_DATA } from '../data';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 lg:px-24 py-32 overflow-hidden bg-white dark:bg-[#080c14] transition-colors duration-300">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20 dark:opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-600/20 blur-[80px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-[20%] w-[350px] h-[350px] bg-teal-600/10 dark:bg-teal-600/20 blur-[80px] rounded-full animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

          {/* ── Left column: name + copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-teal-500" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                BC, Canada · {RESUME_DATA.corporation}
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95] text-slate-900 dark:text-white mb-4 font-display">
              {RESUME_DATA.name.split(' ')[0]}
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-white/20 dark:to-white/5 border-slate-900 drop-shadow-sm"
                style={{ WebkitTextStroke: '1px rgba(15, 23, 42, 0.1)' }}
              >
                {RESUME_DATA.name.split(' ')[1]}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight mb-8 font-display">
              {RESUME_DATA.title}
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-12 leading-relaxed">
              {RESUME_DATA.mission}
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="#contact"
                className="px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-xl font-mono text-sm font-bold hover:bg-blue-700 dark:hover:bg-blue-400 transition-all flex items-center gap-2 group shadow-lg shadow-blue-500/20"
              >
                Discuss a contract <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#experience"
                className="px-8 py-4 bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl font-mono text-sm font-bold hover:border-slate-400 dark:hover:border-slate-600 transition-all"
              >
                View experience
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {['C# / .NET', 'React', 'TypeScript', 'Microservices', 'AWS'].map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100/50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 rounded-full font-mono text-[10px] font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Right column: stat cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Experience */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 to-transparent" />
              <p className="font-mono text-[10px] uppercase font-bold text-slate-400 mb-2">Experience</p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white font-display">15+</p>
              <p className="text-[10px] text-slate-500">years in production</p>
            </div>

            {/* Domains */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-500 to-transparent" />
              <p className="font-mono text-[10px] uppercase font-bold text-slate-400 mb-2">Domains</p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white font-display">6+</p>
              <p className="text-[10px] text-slate-500">industries served</p>
            </div>

            {/* ── OPTION B: Prior engagement card ── */}
            <div className="col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden group hover:-translate-y-1 transition-transform">
              {/* Teal top rule — signals completion / positive closure */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-500 to-transparent" />

              <p className="font-mono text-[10px] uppercase font-bold text-slate-400 mb-3">
                {RESUME_DATA.lastEngagement.label}
              </p>

              {/* Org name + dept */}
              <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1">
                {RESUME_DATA.lastEngagement.org}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                {RESUME_DATA.lastEngagement.dept}
              </p>

              {/* Two-badge row: Completed + Now accepting */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Completed — neutral gray */}
                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full">
                  {/* Checkmark icon via CSS */}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="flex-shrink-0">
                    <circle cx="5" cy="5" r="4.5" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="1" fill="none"/>
                    <path d="M3 5l1.5 1.5L7 3.5" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Completed
                  </span>
                </div>

                {/* Now accepting — teal pulse */}
                <div className="flex items-center gap-1.5 px-3 py-1 bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/25 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 animate-pulse flex-shrink-0" />
                  <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-teal-700 dark:text-teal-400">
                    {RESUME_DATA.lastEngagement.availabilityLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Academic */}
            <div className="col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500 to-transparent" />
              <p className="font-mono text-[10px] uppercase font-bold text-slate-400 mb-2">Academic</p>
              <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1">
                {RESUME_DATA.education.degree}
              </p>
              <p className="text-xs text-slate-500">{RESUME_DATA.education.institution}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
