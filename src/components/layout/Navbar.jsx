import { useState } from "react";
import Logo from "../../assets/logo.png";
import useHideOnScroll from "../../hooks/useHidenScroll";
import { Link } from "react-router-dom";

export default function Navbar() {
  const showNavbar = useHideOnScroll();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-black text-zinc-400 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-2 py-2">
        {/* Logo */}
        <img src={Logo} alt="Logo Jota's Burguer" className="w-20" />

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 font-semibold tracking-wide">
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

        {/* Botão Mobile */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`md:hidden bg-black transition-all duration-300 ${
          isOpen ? "max-h-60 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 font-semibold">
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#sobre">Sobre Nós</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
