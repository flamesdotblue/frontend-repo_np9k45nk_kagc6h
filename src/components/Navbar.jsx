import React from 'react';
import { Heart, ShoppingCart, PhoneCall, Video, Crown } from 'lucide-react';

function Navbar({ favoritesCount, onFavoritesClick }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-blue-950/60 bg-blue-950/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-md">
              <span className="font-black text-blue-950">క్రు</span>
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <Crown size={18} className="text-yellow-400" />
                <h1 className="text-lg sm:text-xl font-extrabold tracking-wide">KRISHNA GARI BATTALA KOTTU</h1>
              </div>
              <p className="text-xs text-blue-200">Luxurious handpicked sarees, fabrics, bags & more</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#new" className="hover:text-yellow-300 transition-colors">New</a>
            <a href="#sale" className="hover:text-yellow-300 transition-colors">Sale</a>
            <a href="#occasion" className="hover:text-yellow-300 transition-colors">Shop by Occasion</a>
            <a href="#video" className="hover:text-yellow-300 transition-colors flex items-center gap-1"><Video size={16}/> Video Call</a>
            <a href="#track" className="hover:text-yellow-300 transition-colors flex items-center gap-1"><PhoneCall size={16}/> Track Order</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              aria-label="View favorites"
              onClick={onFavoritesClick}
              className="relative p-2 rounded-full bg-blue-900/60 hover:bg-blue-800 transition-colors"
            >
              <Heart className="text-yellow-400" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-blue-950 text-xs font-bold rounded-full px-1.5 py-0.5">
                  {favoritesCount}
                </span>
              )}
            </button>
            <button className="p-2 rounded-full bg-blue-900/60 hover:bg-blue-800 transition-colors" aria-label="Cart">
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
