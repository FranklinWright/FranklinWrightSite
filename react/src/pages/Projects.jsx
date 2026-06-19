import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "RailReach",
      description: "A responsive web application advocating for train infrastructure in underserved communities. Features a custom Bento Grid layout utilizing Magic UI to visualize complex station accessibility and route data.",
      tech: ["React", "TypeScript", "Bun", "AWS", "Docker"],
      icon: "🚄"
    },
    {
      title: "CFB Standings Hub",
      description: "A dynamic sports tracking platform that consumes real-time APIs to deliver up-to-date College Football standings. Built with a focus on responsive design and fast data-fetching techniques to visualize team rankings and statistics.",
      tech: ["React", "API Integration", "Tailwind CSS", "Vite"],
      icon: "🏈"
    },
    {
      title: "Software Engineering Sandbox",
      description: "Collaborative full-stack applications built to master agile methodologies, featuring CI/CD pipelines (GitLab CI), automated build scripts, and robust relational database backends.",
      tech: ["PostgreSQL", "Python", "GCP", "Make"],
      icon: "⚙️"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Selected Works.</h2>
          <p className="text-accent mt-2 font-mono">Turning coffee into infrastructure.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="group glass-card rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.3)] transition-all duration-500 flex flex-col h-full"
          >
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
              {project.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-700/50">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-semibold tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
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