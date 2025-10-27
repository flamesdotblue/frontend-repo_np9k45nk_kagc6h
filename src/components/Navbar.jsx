import { Heart, ShoppingCart } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-white rounded-xl p-2 shadow-sm ring-1 ring-slate-200">
        <span
          className="block text-2xl font-extrabold leading-none bg-gradient-to-b from-[#0c61eb] to-sky-400 text-transparent bg-clip-text"
          aria-label="KRISHNA GARI BATTALA KOTTU"
        >
          కృ
        </span>
      </div>
      <div className="hidden sm:block">
        <p className="text-sm tracking-widest text-white/80 uppercase">Krishna Gari</p>
        <p className="text-lg font-semibold text-white">Battala Kottu</p>
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-[#0c61eb]/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/90">
          <a href="#new" className="hover:text-white transition">New</a>
          <a href="#sale" className="hover:text-white transition">Sale</a>
          <a href="#occasion" className="hover:text-white transition">Occasions</a>
          <a href="#video" className="hover:text-white transition">Video Call</a>
          <a href="#track" className="hover:text-white transition">Track Order</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/10 hover:bg-white/20 text-white transition" aria-label="Favorites">
            <Heart className="h-5 w-5" />
          </button>
          <button className="inline-flex items-center justify-center rounded-full h-10 w-10 bg-white/10 hover:bg-white/20 text-white transition" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
