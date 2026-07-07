export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-xl font-bold">
          Carl Apelacion<span className="text-indigo-400">.</span>
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}