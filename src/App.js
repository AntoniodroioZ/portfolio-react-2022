// import logo from './logo.svg';
import './index.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";


function App() {
  return (
    <div>
      <Navbar/>
      {/* {h1gen()} */}
      <Hero/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
