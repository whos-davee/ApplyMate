import Button from "./button"

function Navbar() {
  return (
    <nav className="
            ffixed
            top-0
            left-0
            w-full
            z-50
            flex
            justify-between
            items-center
            px-14
            py-8
            ">
      <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "Archetype Bayer"}}>
        ApplyMate
      </h1>

    <Button>
        Login
    </Button>
    </nav>
  )
}

export default Navbar