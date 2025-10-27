export default function Footer() {
  return (
    <footer className="bg-[#0c61eb] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="inline-flex items-center gap-3">
            <div className="bg-white rounded-xl p-2 shadow-sm ring-1 ring-slate-200">
              <span className="block text-2xl font-extrabold leading-none bg-gradient-to-b from-[#0c61eb] to-sky-400 text-transparent bg-clip-text">కృ</span>
            </div>
            <div>
              <p className="text-sm tracking-widest text-white/80 uppercase">Krishna Gari</p>
              <p className="text-lg font-semibold text-white">Battala Kottu</p>
            </div>
          </div>
          <p className="mt-4 text-white/80 max-w-sm">Heritage craftsmanship with a contemporary eye. Each piece is designed to last—season after season.</p>
        </div>
        <div>
          <h4 className="font-semibold">Policy</h4>
          <p className="mt-2 text-white/80">No returns once purchased. Exchanges only for manufacturing defects within 48 hours of delivery.</p>
        </div>
        <div>
          <h4 className="font-semibold">Feedback</h4>
          <form className="mt-3 flex gap-2">
            <input type="text" placeholder="Share your thoughts" className="w-full rounded-xl border-0 text-slate-900 px-4 py-3" />
            <button type="button" className="rounded-xl bg-white text-[#0c61eb] font-semibold px-5 py-3 hover:brightness-90">Send</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-white/80 flex items-center justify-between">
          <span>© {new Date().getFullYear()} KRISHNA GARI BATTALA KOTTU</span>
          <span>Crafted in India</span>
        </div>
      </div>
    </footer>
  );
}
