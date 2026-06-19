import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20"
    >
      {/* Creative Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-accent font-mono mb-6 text-lg tracking-wide"
        >
          System Architect & Web Developer
        </motion.p>
        
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 tracking-tight mb-6">
          Franklin Wright.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light">
          I engineer digital experiences out of Austin, Texas. Bridging the gap between complex algorithmic logic and stunning user interfaces.
        </p>
        
        <div className="flex items-center gap-6">
          <Link to="/projects" className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-accent font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent hover:bg-accent/90 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]">
            Explore My Work
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors font-medium hover:underline underline-offset-8 decoration-accent">
            More about me &rarr;
          </Link>
        </div>
      </div>
    </motion.div>
  );
}