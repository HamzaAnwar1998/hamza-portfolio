import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="wrapper">
      <div className="background">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
    </div>
  );
}

export default App;
