import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20"
    >
      <div className="glass-card p-10 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden group">
        {/* Subtle inner glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent font-mono mb-4 text-lg tracking-wide flex items-center gap-3"
        >
          <span className="w-8 h-[2px] bg-accent inline-block"></span>
          Software Engineer
        </motion.p>
        
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 drop-shadow-lg">
          Franklin <br className="hidden md:block"/> Wright.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light">
          Computer Science student at UT Austin. I build highly-portable web applications, robust cloud infrastructure, and dynamic data visualizations.
        </p>
        
        <div className="flex flex-wrap items-center gap-6">
          <Link to="/projects" className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-darkBg transition-all duration-300 bg-accent rounded-full hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
            Explore My Work
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2 group">
            Behind the code <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}