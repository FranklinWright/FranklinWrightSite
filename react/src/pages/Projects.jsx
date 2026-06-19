import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Software Engineering Sandbox",
      description: "A collaborative full-stack application built to master agile methodologies, complete with API integrations and comprehensive testing suites.",
      tech: ["React", "Express", "PostgreSQL"],
    },
    {
      title: "Algorithmic Vault",
      description: "A heavily optimized repository of solutions for complex data structure challenges and competitive programming problems.",
      tech: ["C++", "Python", "Logic"],
    },
    {
      title: "Linear Algebra Engine",
      description: "Programmatic implementation of matrix transformations and vector space computations for applied mathematical modeling.",
      tech: ["Python", "NumPy", "Math"],
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="flex items-end justify-between mb-12 border-b border-gray-800 pb-6">
        <h2 className="text-4xl md:text-5xl font-black text-white">Selected Works.</h2>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-accent hover:text-white transition-colors font-mono">
          // View all on GitHub
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="group relative bg-cardBg rounded-2xl p-8 border border-gray-800 hover:border-accent/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{project.title}</h3>
            <p className="text-gray-400 mb-8 relative z-10 text-sm leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-mono text-gray-500 bg-darkBg px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}