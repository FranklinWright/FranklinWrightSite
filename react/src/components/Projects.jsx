export default function Projects() {
  const portfolioProjects = [
    {
      title: "Software Engineering Project (CS 373)",
      description: "Collaborative full-stack web application demonstrating modern software engineering practices, agile methodologies, and comprehensive testing.",
      tags: ["React", "Node.js", "API Integration"],
      link: "#"
    },
    {
      title: "Algorithmic Solutions Archive",
      description: "A centralized repository of optimized solutions for complex programming challenges from Kattis and C S 331 data structures coursework.",
      tags: ["Algorithms", "Data Structures", "Optimization"],
      link: "#"
    },
    {
      title: "Linear Algebra Computations (M 340L)",
      description: "Programmatic implementations of matrices, vector spaces, and linear transformations to solve applied mathematical models.",
      tags: ["Mathematics", "Logic", "Scripting"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-darkBg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-10 border-b-2 border-accent inline-block pb-2">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
                <div key={index} className="bg-cardBg rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-accent hover:-translate-y-2 hover:shadow-accent/20 hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer">              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 text-accent text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-800">
                <a href={project.link} className="text-sm font-semibold text-white hover:text-accent transition-colors flex items-center">
                  View Repository <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}