import Hero from "../components/landing/Hero";
import Products from "../components/landing/Products";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";
import Navbar from "../components/landing/Navbar";

export default function JotasPage() {
  return (
    <div className="bg-gradient-to-b from-zinc-400 to-zinc-800 text-black">
      <Navbar />
      <Hero />
      <Products />
      <CTA />
      <Footer />
    </div>
  );
}
