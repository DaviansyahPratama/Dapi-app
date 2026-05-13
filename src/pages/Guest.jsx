import Navbar from "../components/guest/Navbar";
import Hero from "../components/guest/Hero";
import Products from "../components/guest/Products";
import Testimonials from "../components/guest/Testimonials";
import About from "../components/guest/About";

export default function Guest() {
  return (
    <div className="bg-[#070B1A] text-white">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Testimonials /> 
      
    </div>
  );
}