import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

export const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-white antialiased selection:bg-jet selection:text-lavender_blush">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 size-full items-center px-5 py-2 [background:radial-gradient(125%_125%_at_50%_10%,#22181c_20%,#0d302b_100%)]"/>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero/>
        </div> 
        
      </div>
    </>
  )
}

export default App