import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Maximize2, X, Code2, Database } from 'lucide-react';

export default function Projects() {
  const [activeIframe, setActiveIframe] = useState(null);

  const liveProjects = [
    {
      title: "Growth Insights Hub",
      description: "A comprehensive business analytics console tracking revenue, profit margins, operational expenses, and customer acquisition costs across fiscal years.",
      tags: ["Python", "Streamlit", "Pandas", "Plotly"],
      url: "https://insightful-growth-hub.onrender.com/",
      type: "LIVE_DASHBOARD"
    },
    {
      title: "Startup Pulse",
      description: "Real-time ecosystem analytics monitoring dashboard. Tracks funding rounds, valuation trends, and sector momentum for tech startups.",
      tags: ["SQL", "Dashboard", "Metabase", "ETL"],
      url: "https://startup-pulse-peek-8663089f-1.onrender.com/",
      type: "LIVE_DASHBOARD"
    }
  ];

  const upcomingProjects = [
    {
      title: "E-commerce Sales Intelligence",
      description: "Predictive model for inventory optimization and dynamic pricing.",
      type: "MODEL",
      status: "COMPILING..."
    },
    {
      title: "Customer Churn Predictor",
      description: "Machine learning pipeline identifying high-risk segments before attrition.",
      type: "PIPELINE",
      status: "TRAINING..."
    },
    {
      title: "Supply Chain Optimizer",
      description: "Logistics route analysis minimizing fuel costs and delivery times.",
      type: "ANALYSIS",
      status: "QUEUED"
    },
    {
      title: "Social Media Sentiment Tracker",
      description: "NLP dashboard tracking brand perception across major platforms.",
      type: "DASHBOARD",
      status: "QUEUED"
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-border bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-4 mb-2">
              <span className="font-mono text-primary text-sm font-normal">03.</span>
              Live Systems
            </h2>
            <p className="font-mono text-textMuted text-sm">{'//'} Production environments</p>
          </div>
        </motion.div>

        {/* Live Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {liveProjects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border border-border bg-surface flex flex-col hover:border-primary/50 transition-colors"
            >
              <div className="h-10 border-b border-border bg-black/50 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <Database size={14} className="text-primary" />
                  <span className="font-mono text-xs text-textMuted">{project.type}</span>
                </div>
                <div className="flex gap-2">
                  <a href={project.url} target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors" title="Open in new tab">
                    <ExternalLink size={16} />
                  </a>
                  <button onClick={() => setActiveIframe(project.url)} className="text-textMuted hover:text-primary transition-colors" title="Maximize preview">
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-textMuted text-sm mb-6 flex-1 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-1 bg-black border border-border text-xs font-mono text-textMuted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold flex items-center gap-4 mb-2">
            <span className="font-mono text-primary text-sm font-normal">04.</span>
            In Development
          </h2>
          <p className="font-mono text-textMuted text-sm">{'//'} Upcoming models and pipelines</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border border-dashed bg-background p-5 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-textMuted tracking-wider bg-surface px-2 py-1 border border-border">
                  {project.type}
                </span>
                <span className={`font-mono text-[10px] flex items-center gap-1 ${project.status === 'COMPILING...' || project.status === 'TRAINING...' ? 'text-primary animate-pulse' : 'text-textMuted'}`}>
                  {project.status === 'COMPILING...' || project.status === 'TRAINING...' ? <div className="w-1.5 h-1.5 bg-primary rounded-full"></div> : null}
                  {project.status}
                </span>
              </div>
              <h3 className="font-bold text-sm mb-2 text-textMain/80">{project.title}</h3>
              <p className="text-textMuted text-xs">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Iframe Modal */}
      {activeIframe && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12">
          <div className="w-full h-full max-w-7xl max-h-[90vh] bg-surface border border-border flex flex-col shadow-2xl rounded-lg overflow-hidden">
            <div className="h-12 border-b border-border bg-black flex items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                  <div className="w-3 h-3 rounded-full bg-border"></div>
                </div>
                <div className="font-mono text-xs text-textMuted hidden md:block">{activeIframe}</div>
              </div>
              <div className="flex items-center gap-4">
                <a href={activeIframe} target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors text-xs font-mono flex items-center gap-2">
                  OPEN_EXT <ExternalLink size={14} />
                </a>
                <button onClick={() => setActiveIframe(null)} className="text-textMuted hover:text-white transition-colors p-1 bg-border/50 rounded">
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-black w-full relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="font-mono text-primary flex items-center gap-2 animate-pulse">
                  <Database size={16} /> Loading remote environment...
                </div>
              </div>
              <iframe 
                src={activeIframe} 
                className="w-full h-full border-none relative z-10 bg-black"
                title="Project Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
