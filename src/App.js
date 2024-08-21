import './App.css';
import Nav from './components/nav.js';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Skills from './components/Skills';
import BackToTopButton from './components/BackToTopButton.js';
import About from './components/About.js';
import ContactForm from './components/ContactForm.tsx';

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <ContactForm />
      <BackToTopButton />
      <footer className="bg-blue-600 text-white text-center py-3 ">
        <p>&copy; {new Date().getFullYear()} Kobe Anderson</p>
      </footer>
    </>
  );
}

export default App;
