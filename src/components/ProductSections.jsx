import { Heart } from "lucide-react";

const productsNew = [
  {
    id: 1,
    name: "Royal Silk Saree",
    price: "₹24,999",
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1200&auto=format&fit=crop",
    badge: "New"
  },
  {
    id: 2,
    name: "Handcrafted Clutch",
    price: "₹8,499",
    img: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1200&auto=format&fit=crop",
    badge: "New"
  },
  {
    id: 3,
    name: "Embroidered Sherwani",
    price: "₹49,999",
    img: "https://images.unsplash.com/photo-1542062703-3c0e5f79caa0?q=80&w=1200&auto=format&fit=crop",
    badge: "New"
  }
];

const productsSale = [
  {
    id: 4,
    name: "Zari Border Saree",
    price: "₹14,999",
    prev: "₹18,999",
    img: "https://images.unsplash.com/photo-1520975922131-c3c6b172e4d7?q=80&w=1200&auto=format&fit=crop",
    badge: "-25%"
  },
  {
    id: 5,
    name: "Pearl Set",
    price: "₹12,499",
    prev: "₹15,999",
    img: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?q=80&w=1200&auto=format&fit=crop",
    badge: "-22%"
  },
  {
    id: 6,
    name: "Velvet Blazer",
    price: "₹9,999",
    prev: "₹13,999",
    img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop",
    badge: "-29%"
  }
];

function SectionHeader({ id, eyebrow, title, subtitle }) {
  return (
    <div id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <div className="text-xs tracking-widest uppercase text-[#0c61eb] font-semibold">{eyebrow}</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
        {subtitle && <p className="text-slate-600 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}

function ProductCard({ item }) {
  return (
    <div className="group rounded-2xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-slate-200 overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={item.img} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {item.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 text-xs font-bold px-3 py-1 shadow">
            {item.badge}
          </span>
        )}
        <button className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/90 text-slate-900 hover:bg-white">
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-slate-900">{item.name}</h3>
            <p className="mt-1 text-[#0c61eb] font-semibold">{item.price} {item.prev && <span className="text-slate-400 line-through font-normal ml-2">{item.prev}</span>}</p>
          </div>
          <button className="rounded-full px-4 py-2 bg-[#0c61eb] text-white text-sm font-medium hover:brightness-110">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default function ProductSections() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-slate-50">
      <SectionHeader id="new" eyebrow="Exclusives" title="New & Interesting" subtitle="Curated drops that blend heritage with modern silhouettes." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsNew.map((p) => (
            <ProductCard key={p.id} item={p} />
          ))}
        </div>
      </div>

      <div className="mt-16" />

      <SectionHeader id="sale" eyebrow="Offers" title="Refined Picks on Sale" subtitle="Limited-time reductions on signature pieces." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsSale.map((p) => (
            <ProductCard key={p.id} item={p} />
          ))}
        </div>
      </div>

      <div className="mt-16" />

      <div id="video" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white grid md:grid-cols-2">
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-bold text-slate-900">Shop via Video Call</h3>
            <p className="mt-2 text-slate-600">Personal styling and live walkthroughs of our latest collection, right from the boutique.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full rounded-xl border-slate-300 focus:border-[#0c61eb] focus:ring-[#0c61eb]" />
              <input type="email" placeholder="Email" className="w-full rounded-xl border-slate-300 focus:border-[#0c61eb] focus:ring-[#0c61eb]" />
              <input type="tel" placeholder="Phone" className="w-full rounded-xl border-slate-300 focus:border-[#0c61eb] focus:ring-[#0c61eb]" />
              <button type="button" className="rounded-xl bg-[#0c61eb] text-white font-semibold px-5 py-3 hover:brightness-110">Request Session</button>
            </form>
          </div>
          <div className="relative min-h-[280px] md:min-h-full bg-gradient-to-br from-[#0c61eb]/10 via-sky-100 to-white">
            <div className="absolute inset-0 m-6 rounded-2xl border-2 border-dashed border-[#0c61eb]/30" />
          </div>
        </div>
      </div>

      <div className="mt-16" />

      <div id="track" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white p-8 md:p-10">
          <h3 className="text-2xl font-bold text-slate-900">Track Your Order</h3>
          <p className="mt-2 text-slate-600">Enter your order ID and email to check status.</p>
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input type="text" placeholder="Order ID" className="w-full rounded-xl border-slate-300 focus:border-[#0c61eb] focus:ring-[#0c61eb]" />
            <input type="email" placeholder="Email" className="w-full rounded-xl border-slate-300 focus:border-[#0c61eb] focus:ring-[#0c61eb]" />
            <button type="button" className="rounded-xl bg-[#0c61eb] text-white font-semibold px-5 py-3 hover:brightness-110">Check Status</button>
          </form>
        </div>
      </div>
    </section>
  );
}
