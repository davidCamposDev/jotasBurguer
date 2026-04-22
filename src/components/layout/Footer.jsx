import React from "react";
import { MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer id="contato" className="bg-black text-white mt-12 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* LOCAL */}
        <div>
          <h4 className="text-[#facc15] font-black text-xl mb-4 tracking-wider">
            LOCAL
          </h4>
          <div className="flex justify-center md:justify-start items-start gap-2 text-sm text-gray-300 font-medium">
            <MapPin className="text-[#facc15] shrink-0 w-5 h-5" />
            <p>R. Adilber Viana,18 - Conj Eldorado</p>
          </div>
          <div className="flex justify-center md:justify-start items-start gap-2 text-sm text-gray-300 font-medium">
            <MapPin className="text-[#facc15] shrink-0 w-5 h-5" />
            <p>Av. Atroaris, 44 - Cidade Nova</p>
          </div>
        </div>

        {/* HORÁRIO */}
        <div>
          <h4 className="text-[#facc15] font-black text-xl mb-4 tracking-wider">
            HORÁRIO
          </h4>
          <div className="flex justify-center md:justify-start items-start gap-2 text-sm text-gray-300 font-medium">
            <Clock className="text-[#facc15] shrink-0 w-5 h-5" />
            <div>
              <p>Dom a Qui: 17h às 01h</p>
              <p>Sex e Sáb: 17h às 02h</p>
            </div>
          </div>
        </div>

        {/* LOGO */}
        <div className="flex justify-center items-center order-first md:order-none">
          <img
            src={Logo}
            alt="Jota's Burgers"
            className="w-24 h-24 rounded-full border-2 border-[#facc15]"
          />
        </div>

        {/* REDES */}
        <div>
          <h4 className="text-[#facc15] font-black text-xl mb-4 tracking-wider">
            REDES SOCIAIS
          </h4>
          <div className="flex flex-col items-center md:items-start gap-3 text-sm text-gray-300 font-medium">
            <a
              href="https://www.facebook.com/jotasburgersam/"
              className="flex items-center gap-2 hover:text-[#facc15] transition"
            >
              <Facebook className="w-5 h-5" /> jotasburgers
            </a>

            <a
              href="https://www.instagram.com/jotasburgers/"
              className="flex items-center gap-2 hover:text-[#facc15] transition"
            >
              <Instagram className="w-5 h-5" /> jotasburgers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
