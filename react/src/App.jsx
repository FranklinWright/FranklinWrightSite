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
      <div className="min-h-screen bg-darkBg text-gray-100 font-sans selection:bg-accent selection:text-white overflow-x-hidden">
        <Navbar />
        <AnimatedRoutes />
        <footer className="py-8 text-center border-t border-gray-800 bg-darkBg/50 backdrop-blur-sm relative z-50">
          <p className="text-gray-600 text-sm font-mono">
            © {new Date().getFullYear()} Franklin Wright. All systems operational.
          </p>
        </footer>
      </div>
    </Router>
  );
}