import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// recreating their wave/hanger logo as an SVG
// SWAP: replace this SVG with their real logo file once owner sends it
function WaveLogo() {
  return (
    <svg viewBox="0 0 100 62" className="w-10 h-auto flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 46 C 22 40, 34 33, 47 22 C 55 15, 62 8, 74 6 C 84 5, 92 9, 95 16 C 90 12, 82 11, 74 15 C 63 20, 56 29, 47 37 C 34 48, 20 52, 4 53 Z"
        fill="#6FD0E3"
      />
      <path d="M2 56 C 20 51, 33 45, 45 35 C 40 44, 26 54, 2 58 Z" fill="#fff" opacity="0.9" />
    </svg>
  );
}

export default function Header() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  // total items in basket for the badge
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(12,14,16,0.55)] backdrop-blur-xl border-b border-white/10 text-white">
      <div className="max-w-[1200px] mx-auto px-7 flex items-center justify-between h-[76px]">
        {/* logo links back to home */}
        <Link to="/" className="flex items-center gap-3 text-white">
          <WaveLogo />
          <span className="leading-tight">
            <span className="font-display font-semibold text-base block">House of Laundry</span>
            <span className="text-[8.5px] tracking-[0.13em] uppercase opacity-60 block mt-0.5">
              &amp; Dry Cleaners
            </span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <Link to="/" className="text-[13.5px] font-medium opacity-75 hover:opacity-100 hover:text-brand-cyan-soft transition-all">
            Home
          </Link>
          <Link to="/services" className="text-[13.5px] font-medium opacity-75 hover:opacity-100 hover:text-brand-cyan-soft transition-all">
            Services
          </Link>
          <Link to="/commercial" className="text-[13.5px] font-medium opacity-75 hover:opacity-100 hover:text-brand-cyan-soft transition-all">
            Commercial
          </Link>
          <Link to="/branches" className="text-[13.5px] font-medium opacity-75 hover:opacity-100 hover:text-brand-cyan-soft transition-all">
            Branches
          </Link>
          <Link to="/contact" className="text-[13.5px] font-medium opacity-75 hover:opacity-100 hover:text-brand-cyan-soft transition-all">
            Contact
          </Link>

          {/* cart icon with badge */}
          <Link to="/order" className="relative text-[13.5px] font-medium opacity-75 hover:opacity-100 transition-all">
            🛒
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-brand-cyan text-[10px] text-white w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>

          {/* whatsapp CTA */}
          <a
            href="https://wa.me/27780263836"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2.5 rounded-full text-[13px] font-semibold backdrop-blur-sm hover:bg-brand-cyan hover:border-brand-cyan transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
        </nav>

        {/* mobile hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-brand-charcoal/95 backdrop-blur-xl border-t border-white/10 px-7 py-6 flex flex-col gap-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-sm font-medium opacity-80">Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="text-sm font-medium opacity-80">Services</Link>
          <Link to="/commercial" onClick={() => setMenuOpen(false)} className="text-sm font-medium opacity-80">Commercial</Link>
          <Link to="/branches" onClick={() => setMenuOpen(false)} className="text-sm font-medium opacity-80">Branches</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-sm font-medium opacity-80">Contact</Link>
          <Link to="/order" onClick={() => setMenuOpen(false)} className="text-sm font-medium opacity-80">
            Order Basket {itemCount > 0 && `(${itemCount})`}
          </Link>
        </div>
      )}
    </header>
  );
}
