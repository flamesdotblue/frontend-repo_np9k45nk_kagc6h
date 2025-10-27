import { Heart } from "lucide-react";

const COLORS = {
  dark: "#0C61EB",
  light: "#38BDF8",
  gold: "#F5C542",
};

const productsNew = [
  {
    id: 1,
    name: "Kanjivaram Silk Saree",
    price: "₹24,999",
    img: "https://source.unsplash.com/featured/800x1000/?saree,indian,silk",
    badge: "New",
  },
  {
    id: 2,
    name: "Embellished Potli Bag",
    price: "₹8,499",
    img: "https://source.unsplash.com/featured/800x1000/?potli,handbag,clutch,indian",
    badge: "New",
  },
  {
    id: 3,
    name: "Handloom Cotton Dupatta",
    price: "₹5,999",
    img: "https://source.unsplash.com/featured/800x1000/?dupatta,shawl,scarf,handloom",
    badge: "New",
  },
];

const productsSale = [
  {
    id: 4,
    name: "Raw Silk Fabric (per metre)",
    price: "₹1,999",
    prev: "₹2,499",
    img: "https://source.unsplash.com/featured/800x1000/?raw-silk,fabric,textile,cloth",
    badge: "-20%",
  },
  {
    id: 5,
    name: "Banarasi Brocade Saree",
    price: "₹17,999",
    prev: "₹22,999",
    img: "https://source.unsplash.com/featured/800x1000/?banarasi,saree,brocade",
    badge: "-22%",
  },
  {
    id: 6,
    name: "Leather Evening Clutch",
    price: "₹6,999",
    prev: "₹9,499",
    img: "https://source.unsplash.com/featured/800x1000/?evening,clutch,handbag,luxury",
    badge: "-26%",
  },
];

function SectionHeader({ id, eyebrow, title, subtitle }) {
  return (
    <div id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <div className="text-xs tracking-widest uppercase font-semibold" style={{ color: COLORS.dark }}>{eyebrow}</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
        {subtitle && <p className="text-slate-600 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}

function ProductCard({ item }) {
  return (
    <div className="group rounded-2xl bg-white/90 backdrop-blur shadow-sm ring-1 ring-slate-200 overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {item.badge && (
          <span
            className="absolute top-3 left-3 rounded-full text-slate-900 text-xs font-bold px-3 py-1 shadow"
            style={{ background: `linear-gradient(90deg, ${COLORS.gold}, #FFD777)` }}
          >
            {item.badge}
          </span>
        )}
        <button
          className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/95 text-slate-900 hover:bg-white"
          aria-label="Add to favorites"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-slate-900">{item.name}</h3>
            <p className="mt-1 font-semibold" style={{ color: COLORS.dark }}>
              {item.price}{" "}
              {item.prev && (
                <span className="text-slate-400 line-through font-normal ml-2">{item.prev}</span>
              )}
            </p>
          </div>
          <button
            className="rounded-full px-4 py-2 text-slate-900 text-sm font-medium hover:brightness-110"
            style={{ background: `linear-gradient(90deg, ${COLORS.gold}, #FFD777)` }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductSections() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-slate-50">
      <SectionHeader
        id="new"
        eyebrow="Exclusives"
        title="New & Interesting"
        subtitle="Curated drops that blend heritage with modern silhouettes."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsNew.map((p) => (
            <ProductCard key={p.id} item={p} />
          ))}
        </div>
      </div>

      <div className="mt-16" />

      <SectionHeader
        id="sale"
        eyebrow="Offers"
        title="Refined Picks on Sale"
        subtitle="Limited-time reductions on signature pieces."
      />
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
              <button type="button" className="rounded-xl text-slate-900 font-semibold px-5 py-3 hover:brightness-110" style={{ background: `linear-gradient(90deg, ${COLORS.gold}, #FFD777)` }}>Request Session</button>
            </form>
          </div>
          <div className="relative min-h-[280px] md:min-h-full" style={{ background: `linear-gradient(135deg, ${COLORS.light}22, white)` }}>
            <div className="absolute inset-0 m-6 rounded-2xl border-2 border-dashed" style={{ borderColor: `${COLORS.gold}77` }} />
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
            <button type="button" className="rounded-xl text-slate-900 font-semibold px-5 py-3 hover:brightness-110" style={{ background: `linear-gradient(90deg, ${COLORS.gold}, #FFD777)` }}>Check Status</button>
          </form>
        </div>
      </div>
    </section>
  );
}
