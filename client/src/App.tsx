import Navbar from "./components/navbar"
import HeroSection from "./components/herosection"

function App() {
  return (
    <div
      className="
      min-h-screen
      bg-[radial-gradient(circle_at_top_left,_#2F5F6B,_transparent_35%),radial-gradient(circle_at_bottom_right,_#4B7482,_transparent_30%),linear-gradient(135deg,#102A36,#173F4D,#1F4959)]
      text-white
      "
    >

      <Navbar />
      <HeroSection />

    </div>
  )
}

export default App