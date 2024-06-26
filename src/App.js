import About from  './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import Skills from './component/Skills';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
