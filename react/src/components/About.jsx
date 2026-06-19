export default function About() {
  return (
    <section id="about" className="py-20 bg-darkBg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white mb-8 border-b-2 border-accent inline-block pb-2">About Me</h2>
        <div className="bg-cardBg p-8 rounded-xl shadow-lg border border-gray-800 leading-relaxed text-gray-300 space-y-6">
          <p>
            I am a software engineer passionate about turning complex problems into elegant, efficient solutions. Whether I am deep in study sessions at the GDC, collaborating on architecture, or optimizing algorithmic test cases on Kattis, I am constantly looking for ways to level up my code.
          </p>
          <p>
            My technical foundation spans full-stack development, algorithms, and applied mathematics. I leverage platforms like GitHub to maintain clean, organized repositories and collaborate effectively. 
          </p>
          <p>
            I believe in balancing rigorous technical work with real-world exploration. Recently, I took a step back from the screen for a 12-day Eastern Caribbean cruise—ziplining and exploring destinations like San Juan, St. Maarten, and St. Croix. This balance keeps my perspective fresh and fuels my creativity when I return to the keyboard.
          </p>
        </div>
      </div>
    </section>
  )
}