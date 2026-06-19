import { motion } from 'framer-motion';

export default function About() {
  const techSkills = [
    "Java", "Python", "C/C++", "C#", "TypeScript", 
    "React", "Bun", "Docker", "AWS (Lambda, ECR)", 
    "Azure", "SQL", "Tailwind"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Bio Card */}
        <div className="lg:col-span-8 glass-card p-10 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            The Journey So Far.
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
            <p>
              I am currently pursuing my <strong className="text-white font-medium">B.S. in Computer Science</strong> with a Minor in History at <strong className="text-accent font-medium">The University of Texas at Austin</strong> (Class of 2028). 
            </p>
            <p>
              My focus is on full-stack development, cloud architecture, and creating software that makes a tangible impact. Right now, I'm working as an <strong className="text-white font-medium">Undergraduate Course Assistant</strong> for Software Engineering, where I help students master tools like AWS, GCP, PostgreSQL, and continuous integration pipelines.
            </p>
            <p>
              Beyond the code editor, I am heavily involved in campus life. I serve as a <strong className="text-white font-medium">Representative for UT Student Government</strong>, advocating for over 13,000 students in the College of Natural Sciences. I also work as a <strong className="text-white font-medium">Senior Internal Officer for ACM</strong>, mentoring freshmen and hosting professional development workshops.
            </p>
          </div>
        </div>

        {/* Sidebar Cards */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Quick Facts Card */}
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-9xl text-white/5 font-black pointer-events-none">🤘</div>
            <h3 className="text-xl font-bold text-accent mb-6 font-mono">Quick Facts</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span> 
                <span>Based in Austin, TX</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📚</span> 
                <span>Technical Reviewer for Packt Publishing (Blazor WebAssembly)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🚢</span> 
                <span>Recently recharged on a 12-day Caribbean Zipline Cruise</span>
              </li>
            </ul>
          </div>

          {/* Skills Card */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-white mb-6">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-2">
              {techSkills.map((skill, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-3 py-1.5 bg-darkBg/50 border border-gray-700/50 text-gray-300 rounded-lg text-sm hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}