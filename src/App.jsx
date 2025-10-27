import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSections from "./components/ProductSections";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductSections />
      </main>
      <Footer />
    </div>
  );
}
