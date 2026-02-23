import { motion } from "framer-motion";
import Logo from "../../assets/logo.png";
import Background from "../../assets/Background.jpg";
import { Repeat } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="block text-yellow-400 text-4xl font-bold">
          O MELHOR BURGUER DE MANAUS.
        </span>
        <span className="block text-white text-4xl font-bold">
          FEITO NA HORA.
        </span>
        <span className="block text-white text-4xl font-bold">
          O SABOR QUE DOMINA.
        </span>
      </motion.h1>
      <button className="mt-4 px-4 py-2 bg-yellow-400 text-dark rounded-md font-bold hover:scale-105 transition">
        PEÇA AGORA - DELIVERY RÁPIDO
      </button>
    </section>
  );
}
