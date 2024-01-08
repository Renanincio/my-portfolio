import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Header from "./Sections/Header";
import Skills from "./Sections/Skills";
import Testimonials from "./Sections/Testimonials";
import Work from "./Sections/Work";
import  Navbar  from "./components/Navbar";

function App() {
  

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
