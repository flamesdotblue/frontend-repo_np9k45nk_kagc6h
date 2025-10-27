import React from 'react';
import { Sparkles, Crown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,215,0,0.15),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700 rounded-full px-3 py-1 text-xs text-blue-100 mb-4">
              <Sparkles size={14} className="text-yellow-400" />
              Exclusive. Handpicked. One of a kind.
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Embrace Elegance with
              <span className="block text-yellow-400">KRISHNA GARI BATTALA KOTTU</span>
            </h2>
            <p className="mt-4 text-blue-100 max-w-xl">
              Discover luxurious sarees, intricate dupattas, artisanal fabrics, handcrafted bags and puppets curated from the finest weavers and artisans.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#new" className="inline-flex items-center gap-2 bg-yellow-400 text-blue-950 font-semibold px-5 py-2.5 rounded-md shadow hover:bg-yellow-300 transition-colors">
                <Crown size={18} /> New & Interesting
              </a>
              <a href="#sale" className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700 text-white px-5 py-2.5 rounded-md hover:bg-blue-800 transition-colors">
                Explore Sale
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-blue-700/50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1610030469983-d7399c5d6f39?q=80&w=1600&auto=format&fit=crop"
                alt="Luxurious saree drape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-900/80 backdrop-blur border border-blue-700 rounded-xl p-4 shadow-xl hidden sm:flex items-center gap-3">
              <Sparkles className="text-yellow-400" />
              <p className="text-sm text-blue-100">Limited Edition Pieces Only</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
