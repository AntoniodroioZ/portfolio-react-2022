// import logo from './logo.svg';
import './index.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from './components/Projects';
import Habilities from './components/Habilities';
import Portfolio from './components/Portfolio';
import FormContact from './components/FormContact';
import FooterWeb from './components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      {/* {h1gen()} */}
      <Hero/>
      <About/>
      <Services/>
      {/* <Projects/> */}
      <Habilities/>
      <Portfolio id="Portafolio"/>
      <FormContact/>
      <FooterWeb/>
    </div>
  );
}

export default App;
