// import logo from './logo.svg';
import './index.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Projects from './components/Projects';
import Habilities from './components/Habilities';


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
    </div>
  );
}

export default App;
