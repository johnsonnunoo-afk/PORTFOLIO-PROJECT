import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const categories = [
    {
      title: "LANGUAGES & QUERY",
      skills: ["SQL (PostgreSQL, MySQL)", "Python (Pandas, NumPy)", "R", "DAX", "MDX"]
    },
    {
      title: "VISUALIZATION",
      skills: ["Tableau", "Power BI", "Looker Studio", "Metabase", "D3.js"]
    },
    {
      title: "PLATFORMS & TOOLS",
      skills: ["Snowflake", "BigQuery", "dbt", "Airflow", "Jupyter"]
    },
    {
      title: "ANALYSIS",
      skills: ["A/B Testing", "Cohort Analysis", "Predictive Modeling", "Forecasting", "LTV Modeling"]
    }
  ];

  return (
    <section id="skills" className="py-24 border-t border-border bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold flex items-center gap-4">
            <span className="font-mono text-primary text-sm font-normal">02.</span>
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="font-mono text-xs text-primary mb-4 border-b border-border pb-2 tracking-widest">{category.title}</h3>
              <ul className="flex flex-col gap-3">
                {category.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-textMuted group">
                    <span className="w-1.5 h-1.5 bg-border group-hover:bg-primary transition-colors"></span>
                    <span className="group-hover:text-textMain transition-colors font-mono">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
