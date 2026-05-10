import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link, Code2, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border bg-background relative">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4">
            <span className="font-mono text-primary text-sm tracking-widest uppercase">05. Connection Protocol</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's analyze together.</h2>
          
          <p className="text-textMuted mb-12 max-w-2xl mx-auto">
            Currently open to new opportunities. Whether you have a messy dataset that needs untangling, a dashboard that needs building, or just want to talk data infrastructure, my inbox is always open.
          </p>

          <a 
            href="mailto:contact@johnsonnunoo.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-mono font-bold hover:bg-primary/90 transition-all hover:scale-105"
          >
            <Send size={18} />
            ESTABLISH_CONNECTION
          </a>

          <div className="flex justify-center gap-6 mt-16 pt-16 border-t border-border/50">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors p-3 bg-surface border border-border rounded-full hover:border-primary">
              <Code2 size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-textMuted hover:text-primary transition-colors p-3 bg-surface border border-border rounded-full hover:border-primary">
              <Link size={20} />
            </a>
            <a href="mailto:contact@johnsonnunoo.com" className="text-textMuted hover:text-primary transition-colors p-3 bg-surface border border-border rounded-full hover:border-primary">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
