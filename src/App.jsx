import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"

export const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-white antialiased selection:bg-dark_tiffany_blue selection:text-mauve-400">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 size-full items-center px-5 py-2 [background:radial-gradient(125%_125%_at_50%_10%,#13352a_20%,#256a54_160%)]"/>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero/>
          <About/>
          <Technologies/>
          <Projects/>
          <Education/>
          <Experience/>
          <Contact/>
        </div> 
        
      </div>
    </>
  )
}

export default App