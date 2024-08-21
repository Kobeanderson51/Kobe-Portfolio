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
    </>
  );
}

export default App;
