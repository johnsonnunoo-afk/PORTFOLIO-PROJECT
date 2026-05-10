import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Lock } from 'lucide-react';

export default function About() {
  const principles = [
    {
      icon: <Target className="text-primary" size={24} />,
      title: "Precision First",
      desc: "Accuracy is non-negotiable. Every dataset is cleaned, verified, and structured before analysis begins."
    },
    {
      icon: <Zap className="text-primary" size={24} />,
      title: "Actionable Insights",
      desc: "Data without direction is just noise. I focus on metrics that drive business decisions."
    },
    {
      icon: <Lock className="text-primary" size={24} />,
      title: "Robust Architecture",
      desc: "Building scalable, maintainable reporting systems that grow with your organization's needs."
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-border bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="font-mono text-primary text-sm font-normal">01.</span>
              Core Philosophy
            </h2>
            <div className="font-mono text-textMuted space-y-4 text-sm">
              <p>{'//'} I believe data should tell a story.</p>
              <p>{'//'} It's not about complex queries.</p>
              <p>{'//'} It's about clarity of thought.</p>
              <div className="w-12 h-px bg-border my-6"></div>
              <p>With a background spanning finance, operations, and growth marketing, I understand that stakeholders don't want dashboards—they want answers.</p>
            </div>
          </motion.div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <div className="mb-4 bg-black w-12 h-12 flex items-center justify-center border border-border rounded">
                  {p.icon}
                </div>
                <h3 className="font-mono font-bold mb-2 text-lg">{p.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
