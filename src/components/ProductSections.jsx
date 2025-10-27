import React, { useMemo } from 'react';
import { Heart, Tag, Gift, Video, Truck } from 'lucide-react';

function ProductCard({ product, isFavorite, onToggleFavorite }) {
  return (
    <div className="group bg-blue-900/40 border border-blue-800 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <button
          aria-label="Save to favorites"
          onClick={() => onToggleFavorite(product)}
          className="absolute top-3 right-3 p-2 rounded-full bg-blue-900/70 hover:bg-blue-800 text-yellow-400"
        >
          <Heart className={isFavorite ? 'fill-yellow-400 text-yellow-400' : ''} />
        </button>
        {product.badge && (
          <span className="absolute left-3 top-3 bg-yellow-400 text-blue-950 text-xs font-bold px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white">{product.name}</h3>
        <p className="text-sm text-blue-200">{product.category}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-yellow-400 font-bold">₹{product.price}</span>
            {product.compareAt && (
              <span className="text-xs line-through text-blue-300">₹{product.compareAt}</span>
            )}
          </div>
          <button className="text-sm text-blue-100 hover:text-yellow-300">View details</button>
        </div>
      </div>
    </div>
  );
}

const SectionHeader = ({ id, icon: Icon, title, subtitle }) => (
  <div id={id} className="flex items-center justify-between mb-4">
    <div>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="text-yellow-400" size={18} />}
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      {subtitle && <p className="text-sm text-blue-200 mt-1">{subtitle}</p>}
    </div>
    <a href="#" className="text-sm text-yellow-300 hover:text-yellow-200">View all</a>
  </div>
);

function ProductSections({ productsNew, productsSale, favorites, onToggleFavorite }) {
  const favoriteIds = useMemo(() => new Set(favorites.map((f) => f.id)), [favorites]);

  return (
    <section className="bg-gradient-to-b from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* New & Interesting */}
        <SectionHeader id="new" icon={Gift} title="New & Interesting" subtitle="Fresh drops curated this week" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsNew.map((p) => (
            <ProductCard key={p.id} product={p} isFavorite={favoriteIds.has(p.id)} onToggleFavorite={onToggleFavorite} />
          ))}
        </div>

        {/* Puppets Feature */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-blue-700/60 bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE1MDAxMzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
            <div className="bg-blue-950/70 p-8">
              <h4 className="text-2xl font-extrabold text-yellow-400">Artisanal Puppets</h4>
              <p className="text-blue-100 mt-2 max-w-2xl">Handcrafted puppets that celebrate tradition and craftsmanship. A whimsical addition to your space or a thoughtful gift.</p>
              <a href="#new" className="inline-block mt-4 bg-yellow-400 text-blue-950 font-semibold px-5 py-2 rounded-md">Explore Puppets</a>
            </div>
          </div>
        </div>

        {/* Sale */}
        <div className="mt-12">
          <SectionHeader id="sale" icon={Tag} title="Sale" subtitle="Exclusive offers on limited pieces" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsSale.map((p) => (
              <ProductCard key={p.id} product={p} isFavorite={favoriteIds.has(p.id)} onToggleFavorite={onToggleFavorite} />
            ))}
          </div>
        </div>

        {/* Shop by Occasion */}
        <div className="mt-12" id="occasion">
          <h3 className="text-xl font-bold text-white mb-4">Shop by Occasion</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Wedding', image: 'https://images.unsplash.com/photo-1756143059835-bebee32eeb29?ixid=M3w3OTkxMTl8MXwxfHNlYXJjaHwxfHxXZWRkaW5nfGVufDB8MHx8fDE3NjE1NTkzMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
              { title: 'Festive', image: 'https://images.unsplash.com/photo-1756143059835-bebee32eeb29?ixid=M3w3OTkxMTl8MXwxfHNlYXJjaHwxfHxXZWRkaW5nfGVufDB8MHx8fDE3NjE1NTkzMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
              { title: 'Everyday Elegance', image: 'https://images.unsplash.com/photo-1756143059835-bebee32eeb29?ixid=M3w3OTkxMTl8MXwxfHNlYXJjaHwxfHxXZWRkaW5nfGVufDB8MHx8fDE3NjE1NTkzMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
            ].map((o) => (
              <div key={o.title} className="relative rounded-xl overflow-hidden ring-1 ring-blue-700/60">
                <img src={o.image} alt={o.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="text-white font-semibold">{o.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shop via Video Call + Track order */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6" id="video">
          <div className="lg:col-span-2 bg-blue-900/50 border border-blue-800 rounded-xl p-6 flex items-center justify-between">
            <div className="max-w-xl">
              <h4 className="text-lg font-bold text-yellow-400 flex items-center gap-2"><Video size={18}/> Shop via Video Call</h4>
              <p className="text-blue-100 mt-1">Book a live video session to view sarees and exclusive pieces up-close with personalized guidance.</p>
            </div>
            <a href="#" className="bg-yellow-400 text-blue-950 font-semibold px-4 py-2 rounded-md whitespace-nowrap">Book Now</a>
          </div>
          <div id="track" className="bg-blue-900/50 border border-blue-800 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold text-yellow-400 flex items-center gap-2"><Truck size={18}/> Track Your Order</h4>
              <p className="text-blue-100 text-sm">Enter your order ID to check the latest status.</p>
            </div>
            <a href="#" className="text-yellow-300 hover:text-yellow-200 font-semibold">Track</a>
          </div>
        </div>

        {/* Favorites */}
        <div className="mt-12" id="favorites">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Heart className="text-yellow-400" /> Favorites
          </h3>
          {favorites.length === 0 ? (
            <p className="text-blue-200">Your saved items will appear here. Tap the heart on any product to add it.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((p) => (
                <ProductCard key={p.id} product={p} isFavorite={true} onToggleFavorite={onToggleFavorite} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductSections;
