import React from "react";
import Hamburguer from "../../assets/hamburguer.png";
import Background2 from "../../assets/Background2.png";
import { products } from "../../data/products";

export default function Products() {
  return (
    <section
      className="py-12 px-4 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Background2})` }}
    >
      <h2 className="text-4xl font-bold">Os Mais Vendidos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full g:max-w-6xl lg:w-5xl mx-auto px-4 mt-10">
        {products.slice(0, 3).map((item, id) => (
          <div
            key={id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border transition transform hover:scale-105 duration-300 hover:shadow-2xl"
          >
            <img
              src={Hamburguer}
              alt={item.name}
              className="w-full h-60 sm:h-56 lg:h-64 object-cover"
            />

            <div className="p-6 text-left">
              <h3 className="text-xl font-bold">{item.name}</h3>

              <p className="text-sm text-zinc-600 mt-2">{item.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {item.extras.map((extra, possitionArray) => (
                  <span
                    key={possitionArray}
                    className="bg-zinc-100 px-3 py-1 rounded-full text-xs"
                  >
                    {extra}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-5">
                <span className="text-lg font-bold">R$ {item.price}</span>

                <button className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-xl font-semibold shadow-md transition">
                  <a href={item.link}>Pedir</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
