import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Services from './components/Services';
import { Sun, Moon } from 'lucide-react';
import { RESUME_DATA } from './data';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="relative bg-white dark:bg-[#080c14] transition-colors duration-300 min-h-screen">
      {/* Navigation - Minimal Rail */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-white/80 dark:bg-[#080c14]/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/50 transition-colors duration-300">
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm font-extrabold tracking-tighter uppercase text-slate-900 dark:text-white font-display">
            HY<span className="text-blue-600">.</span>Software
          </a>
          <ul className="hidden md:flex items-center gap-6">
            {['Services', 'Experience', 'Skills'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" className="text-[11px] font-mono font-bold uppercase tracking-widest bg-blue-600 dark:bg-blue-500 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors shadow-lg shadow-blue-500/20">
            Get in touch →
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <Experience />
        <Skills />
      </main>

      {/* Contact Section Placeholder (as defined in Projects for Showcase or separate contact card) */}
      <section id="contact" className="py-24 px-8 lg:px-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
         <div className="max-w-3xl mx-auto text-center p-12 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 font-display">Ready for the next engagement?</h2>
            <p className="text-slate-500 mb-10 leading-relaxed">
              Currently engaged with DND Canada. Discussing future contracts across federal, fintech, and enterprise domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`mailto:${RESUME_DATA.email}`} className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold transition-all hover:scale-105">
                Send an Email
              </a>
              <a href="https://linkedin.com/in/heing-yeo" target="_blank" rel="noopener" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold transition-all hover:scale-105">
                LinkedIn Profile
              </a>
            </div>
            <p className="mt-12 text-[10px] font-mono text-slate-400 uppercase tracking-widest">BC-Based · Numbered Corporation</p>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#080c14] border-t border-slate-100 dark:border-slate-800 py-12 px-8 lg:px-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            © {new Date().getFullYear()} {RESUME_DATA.corporation} · North Vancouver, BC
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] font-mono text-slate-400 hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="text-[10px] font-mono text-slate-400 hover:text-blue-600">Contracting Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
