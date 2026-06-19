import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-darkBg text-gray-100 font-sans selection:bg-accent selection:text-white relative overflow-hidden">
        
        {/* FUN AMBIENT BACKGROUND BLOBS */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob"></div>
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <Navbar />
        
        {/* Main Content Area */}
        <div className="relative z-10">
          <AnimatedRoutes />
        </div>
        
        {/* Universal Footer */}
        <footer className="py-8 text-center border-t border-gray-800/50 bg-darkBg/30 backdrop-blur-md relative z-50 mt-20">
          <p className="text-gray-500 text-sm font-mono tracking-wide">
            © {new Date().getFullYear()} Franklin Wright. Built with React & Tailwind.
          </p>
        </footer>
      </div>
    </Router>
  );
}