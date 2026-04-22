import Hero from "../components/landing/Hero";
import Products from "../components/landing/Products";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div className="bg-black text-black">
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}
