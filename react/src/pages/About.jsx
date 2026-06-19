import { motion } from 'framer-motion';

export default function About() {
  const skills = ["React", "Node.js", "Algorithms", "Data Structures", "Agile Methodology", "Git/GitHub", "Linear Algebra", "Software Architecture"];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Behind the Code.
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              My journey into software engineering is driven by a desire to turn abstract concepts into tangible, functioning systems. Whether collaborating on complex full-stack applications for CS 373 or grinding out algorithmic test cases on Kattis, I thrive on problem-solving.
            </p>
            <p>
              I spend a lot of my time at the GDC campus facility diving into documentation and refining system architecture. But code isn't everything. I firmly believe that the best logic comes from a well-rested mind. Recently, I stepped away from the screens for a 12-day Caribbean cruise, ziplining through forests and recharging my creative batteries in San Juan and St. Maarten.
            </p>
            <p>
              When I'm back at The Block student housing, it's all about balancing rigorous coursework with creative web projects like this one.
            </p>
          </div>
        </div>

        <div className="bg-cardBg p-8 rounded-2xl border border-gray-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] group-hover:bg-accent/20 transition-all duration-500" />
          <h3 className="text-2xl font-bold text-white mb-6">Technical Arsenal</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-darkBg border border-gray-700 text-accent rounded-lg text-sm font-medium hover:border-accent hover:shadow-[0_0_10px_rgba(56,189,248,0.2)] transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}