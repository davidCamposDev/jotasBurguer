import React from "react";
import Hamburguer from "../../assets/hamburguer.png";
import Background2 from "../../assets/Background2.png";
import { products } from "../../data/products";

export default function Products() {
  return (
    <section
      className="py-4 px-2 text-center"
      style={{ backgroundImage: `url(${Background2})` }}
    >
      <h2 className="text-4xl font-bold">Os Mais Vendidos</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {products.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border transition hover:scale-105 duration-300"
          >
            <img
              src={Hamburguer}
              alt={item.name}
              className="w-full h-64 object-cover"
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

                <button className="bg-yellow-400 hover:bg-yellow-600 px-6 py-2 rounded-xl font-bold transition">
                  Pedir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
