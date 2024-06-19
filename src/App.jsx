import Navbar from "./components/Navbar"

export const App = () => {
  return (
    <div>
      {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(180%_180%_at_50%_20%,#2e294e_25%,#011638_100%)]"></div> */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-space_cadet bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.05),rgba(255,255,255,-10))]"></div>
      <Navbar />
    </div>
  )
}

export default App