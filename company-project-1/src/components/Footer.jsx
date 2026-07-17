import { Link } from "react-router-dom";

// social media SVG icons - each links to their real accounts
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white opacity-85 group-hover:opacity-100 transition-opacity">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38C1.35 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.13-1.38.66-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.93 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm7.85-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white opacity-85 group-hover:opacity-100 transition-opacity">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white opacity-85 group-hover:opacity-100 transition-opacity">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white opacity-85 group-hover:opacity-100 transition-opacity">
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />
    </svg>
  );
}

// social links - all real, verified from their site + social profiles
const SOCIALS = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com/houseoflaund/", label: "Instagram", hoverClass: "hover:bg-gradient-to-tr hover:from-[#F09433] hover:via-[#DC2743] hover:to-[#BC1888]" },
  { icon: <WhatsAppIcon />, href: "https://wa.me/27780263836", label: "WhatsApp", hoverClass: "hover:bg-[#25D366]" },
  { icon: <FacebookIcon />, href: "https://www.facebook.com/people/House-of-Laundry-Dry-Cleaners/100063661866115/", label: "Facebook", hoverClass: "hover:bg-[#1877F2]" },
  { icon: <XIcon />, href: "https://x.com/rockvilelaundry", label: "X / Twitter", hoverClass: "hover:bg-black" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-ocean text-white overflow-hidden pt-[90px]">
      {/* ocean gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(41,168,196,0.22), transparent 55%), radial-gradient(ellipse at 85% 90%, rgba(111,208,227,0.14), transparent 55%), linear-gradient(180deg, #06253A 0%, #041A2B 60%, #030F1A 100%)",
        }}
      />

      {/* animated wave SVGs at top */}
      <svg
        className="absolute top-0 left-0 w-full h-[120px] z-[1] opacity-50"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 C240,90 480,10 720,45 C960,80 1200,20 1440,55 L1440,0 L0,0 Z"
          fill="rgba(111,208,227,0.14)"
        />
        <path
          d="M0,70 C240,30 480,100 720,65 C960,30 1200,95 1440,60 L1440,0 L0,0 Z"
          fill="rgba(41,168,196,0.1)"
        />
      </svg>

      <div className="max-w-[1200px] mx-auto px-7 relative z-[2]">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-11 pb-14">
          {/* brand col */}
          <div>
            <Link to="/" className="flex items-center gap-3 text-white">
              <svg viewBox="0 0 100 62" className="w-10 h-auto" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 46 C 22 40, 34 33, 47 22 C 55 15, 62 8, 74 6 C 84 5, 92 9, 95 16 C 90 12, 82 11, 74 15 C 63 20, 56 29, 47 37 C 34 48, 20 52, 4 53 Z" fill="#6FD0E3" />
                <path d="M2 56 C 20 51, 33 45, 45 35 C 40 44, 26 54, 2 58 Z" fill="#fff" opacity="0.9" />
              </svg>
              <span className="leading-tight">
                <span className="font-display font-semibold text-base block">House of Laundry</span>
                <span className="text-[8.5px] tracking-[0.13em] uppercase opacity-60 block mt-0.5">&amp; Dry Cleaners</span>
              </span>
            </Link>
            <p className="text-[13.5px] opacity-60 leading-[1.75] font-light mt-4 max-w-[290px]">
              Bringing laundry services to your doorstep across Soweto, seven days a week. We do it with pride.
            </p>

            {/* clickable social icons */}
            <div className="flex gap-3 mt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`group w-[42px] h-[42px] rounded-xl flex items-center justify-center bg-white/8 border border-white/16 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:shadow-[0_10px_26px_rgba(0,0,0,0.4)] ${s.hoverClass}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* services col */}
          <div>
            <h5 className="text-[11px] tracking-[0.16em] uppercase opacity-45 mb-4 font-semibold">Services</h5>
            <Link to="/services" className="block text-[13.5px] opacity-75 mb-2 font-light hover:opacity-100 hover:text-brand-cyan-soft transition-all">Laundry</Link>
            <Link to="/services" className="block text-[13.5px] opacity-75 mb-2 font-light hover:opacity-100 hover:text-brand-cyan-soft transition-all">Ironing</Link>
            <Link to="/services" className="block text-[13.5px] opacity-75 mb-2 font-light hover:opacity-100 hover:text-brand-cyan-soft transition-all">Dry Cleaning</Link>
            <Link to="/services" className="block text-[13.5px] opacity-75 mb-2 font-light hover:opacity-100 hover:text-brand-cyan-soft transition-all">Takkie Wash</Link>
            <Link to="/services" className="block text-[13.5px] opacity-75 mb-2 font-light hover:opacity-100 hover:text-brand-cyan-soft transition-all">Dyeing Clothes</Link>
            <Link to="/services" className="block text-[13.5px] opacity-75 mb-2 font-light hover:opacity-100 hover:text-brand-cyan-soft transition-all">Alterations</Link>
            <Link to="/commercial" className="block text-[13.5px] opacity-75 mb-2 font-light hover:opacity-100 hover:text-brand-cyan-soft transition-all">Commercial &amp; Industrial</Link>
          </div>

          {/* contact col */}
          <div>
            <h5 className="text-[11px] tracking-[0.16em] uppercase opacity-45 mb-4 font-semibold">Get In Touch</h5>
            <a href="tel:0117493229" className="block text-[13.5px] opacity-75 mb-2 font-light hover:opacity-100 hover:text-brand-cyan-soft transition-all">011 749 3229</a>
            <a href="tel:0681609757" className="block text-[13.5px] opacity-75 mb-2 font-light hover:opacity-100 hover:text-brand-cyan-soft transition-all">068 160 9757</a>
            <a href="https://wa.me/27780263836" target="_blank" rel="noopener noreferrer" className="block text-[13.5px] opacity-75 mb-2 font-light hover:opacity-100 hover:text-brand-cyan-soft transition-all">WhatsApp us</a>
            <span className="block text-[11.5px] opacity-40 italic mt-2.5">
              Email address to be confirmed with the owner — no public address is currently listed.
            </span>
            <h5 className="text-[11px] tracking-[0.16em] uppercase opacity-45 mt-6 mb-4 font-semibold">Hours</h5>
            <span className="block text-[13.5px] opacity-75 font-light">7am – 6pm, 7 days a week</span>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-white/10 py-6 flex justify-between flex-wrap gap-3 text-[11.5px] opacity-45 font-light">
          <span>© 2026 House of Laundry &amp; Dry Cleaners. All rights reserved.</span>
          <span>Redesign concept — student project by Sijabulile Ncube.</span>
        </div>
      </div>
    </footer>
  );
}
