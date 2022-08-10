// import logo from './logo.svg';
import './index.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

let h1Generate;
const h1gen = ()=>{
  for (let index = 0; index < 1000; index++) {
    h1Generate += '<h1>test1</h1>';
  }
  return(h1Generate);
}
function App() {
  return (
    <div>
      <Navbar/>
      {/* {h1gen()} */}
      <Hero/>
    </div>
  );
}

export default App;
