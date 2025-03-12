import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ParticlesComponent from "./components/Particles";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div>
          <div>
            <Navbar />
            <div className="relative h-screen">
              <Hero />
              <ParticlesComponent id="particles-js" className="absolute top-0 left-0 w-full h-full" />
            </div>
          </div>
          <div className="relative z-1 bg-[#121212]">
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-1">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
