function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5">
      <h1 className="text-2xl font-bold">
        ApplyMate
      </h1>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
        Login
      </button>
    </nav>
  )
}

export default Navbar