import Navbar from './Components/Navbar';
import About from './Components/About';
import './Components/App.css'
import Carousel from './Components/Carousel';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
   
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
