import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart2, Database, GitBranch } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-grid-pattern">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-full w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-mono text-xs text-textMuted uppercase tracking-wider">System Online</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Transforming <span className="text-textMuted italic font-light">noise</span> into <span className="text-primary">signal.</span>
          </h1>
          
          <p className="text-lg text-textMuted max-w-xl font-light leading-relaxed">
            I am Johnson Nunoo, a Data Analyst who builds dashboards that speak, reports that persuade, and models that predict. Operating at the intersection of rigorous analysis and elegant presentation.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 bg-primary text-black font-mono font-bold hover:bg-primary/90 transition-colors flex items-center gap-2">
              VIEW_SYSTEMS <BarChart2 size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-6 py-3 border border-border bg-surface hover:bg-surfaceHover font-mono transition-colors flex items-center gap-2">
              <GitBranch size={18} /> GITHUB
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] rounded-lg border border-border bg-surface/50 backdrop-blur-sm overflow-hidden flex flex-col"
        >
          {/* Faux Terminal Header */}
          <div className="h-8 border-b border-border bg-black/50 flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
            <div className="mx-auto font-mono text-xs text-textMuted">analytics_engine.exe</div>
          </div>
          
          <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden relative">
             <div className="font-mono text-sm text-textMuted flex flex-col gap-2">
                <p><span className="text-primary">{'>'}</span> Initializing data pipelines...</p>
                <p><span className="text-primary">{'>'}</span> Connecting to clusters [OK]</p>
                <p><span className="text-primary">{'>'}</span> Compiling models... <span className="text-primary">100%</span></p>
                <p><span className="text-primary">{'>'}</span> Awaiting query<span className="terminal-cursor"></span></p>
             </div>

             <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-black/40 border border-border p-4 rounded flex flex-col gap-2">
                   <div className="flex items-center justify-between">
                     <Activity size={16} className="text-primary" />
                     <span className="font-mono text-xs text-primary">+14.2%</span>
                   </div>
                   <div className="font-mono text-2xl">24,592</div>
                   <div className="font-mono text-xs text-textMuted uppercase">Queries Processed</div>
                </div>
                <div className="bg-black/40 border border-border p-4 rounded flex flex-col gap-2">
                   <div className="flex items-center justify-between">
                     <Database size={16} className="text-primary" />
                     <span className="font-mono text-xs text-primary">99.9%</span>
                   </div>
                   <div className="font-mono text-2xl">1.2 TB</div>
                   <div className="font-mono text-xs text-textMuted uppercase">Data Analyzed</div>
                </div>
             </div>

             {/* Decorative Chart Line */}
             <div className="absolute bottom-0 left-0 w-full h-32 opacity-20 pointer-events-none flex items-end">
               <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-primary fill-current">
                 <path d="M0,100 L0,80 C10,80 15,50 25,50 C35,50 40,70 50,70 C60,70 65,30 75,30 C85,30 90,60 100,60 L100,100 Z" />
               </svg>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
