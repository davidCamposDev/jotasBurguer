import Logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-zinc-400 z-50">
      <nav className="flex items-center justify-end px-8 py-4">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo Jota's Burguer"
          className="absolute left-14 top-full -translate-y-1/2 w-24"
        />

        {/* Links */}
        <ul className="flex gap-8 font-semibold tracking-wide">
          <li>
            <a
              href="#inicio"
              className="hover:bg-yellow-400 hover:text-black px-4 py-1 rounded-full transition"
            >
              Início
            </a>
          </li>

          <li>
            <a
              href="#sobre"
              className="hover:bg-yellow-400 hover:text-black px-4 py-1 rounded-full transition"
            >
              Sobre Nós
            </a>
          </li>

          <li>
            <a
              href="#contato"
              className="hover:bg-yellow-400 hover:text-black px-4 py-1 rounded-full transition"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
