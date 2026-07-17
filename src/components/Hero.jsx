import { Link } from "react-router-dom";

// the floating bubbles - positioned absolutely inside the hero
// each one has that specular highlight + rim from index.css
function Bubbles() {
  const sizes = [
    { w: 110, left: "8%", top: "22%", delay: "0s" },
    { w: 56, left: "26%", top: "66%", delay: "-4s" },
    { w: 150, left: "60%", top: "12%", delay: "-8s", opacity: 0.75 },
    { w: 38, left: "78%", top: "70%", delay: "-2s" },
    { w: 76, left: "44%", top: "80%", delay: "-11s", opacity: 0.6 },
    { w: 24, left: "88%", top: "34%", delay: "-6s" },
  ];

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {sizes.map((b, i) => (
        <div
          key={i}
          className="bubble absolute"
          style={{
            width: b.w,
            height: b.w,
            left: b.left,
            top: b.top,
            animationDelay: b.delay,
            opacity: b.opacity || 1,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-charcoal overflow-hidden">
      {/* full-bleed background photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1757233285714-4de702bb8a56?fm=jpg&q=85&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Row of washing machines in a laundromat"
          className="w-full h-full object-cover grayscale-[0.65] contrast-[1.05]"
        />
        {/* dark overlay with subtle cyan glow on right side */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(12,14,16,0.94) 0%, rgba(12,14,16,0.72) 45%, rgba(41,168,196,0.14) 100%), radial-gradient(ellipse at 78% 45%, rgba(41,168,196,0.16), transparent 60%)",
          }}
        />
      </div>

      <Bubbles />

      {/* glass hero panel */}
      <div className="max-w-[1200px] mx-auto px-7 relative z-[3] w-full pt-[76px]">
        <div
          className="max-w-[620px] p-12 md:p-[52px_48px] rounded-3xl text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 100%)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.28)",
          }}
        >
          {/* silver sheen sweep */}
          <div
            className="absolute top-[-60%] w-[60%] h-[220%]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.09), transparent)",
              transform: "rotate(18deg)",
              animation: "sheen 7s ease-in-out infinite",
            }}
          />

          <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.16em] uppercase text-brand-cyan-soft border border-brand-cyan-soft/30 bg-brand-cyan/10 px-4 py-1.5 rounded-full mb-6">
            Soweto · 4 Branches · Open 7 Days
          </span>

          <h1 className="font-display text-[clamp(34px,4.6vw,56px)] font-semibold leading-[1.06] mb-5">
            A chore-free day,
            <br />
            <em className="not-italic text-brand-cyan-soft">every day.</em>
          </h1>

          <p className="text-[15.5px] leading-[1.75] opacity-80 max-w-[460px] mb-8 font-light">
            Wash, dry, fold and iron. Dry cleaning, takkie wash, dyeing and
            alterations — collected from your door and returned pressed.{" "}
            <strong className="font-medium">We do it with pride.</strong>
          </p>

          <div className="flex gap-3.5 flex-wrap">
            <Link
              to="/services"
              className="bg-brand-cyan text-[#04171C] px-8 py-4 rounded-full font-semibold text-[13.5px] shadow-[0_10px_30px_rgba(41,168,196,0.35)] hover:bg-brand-cyan-soft hover:-translate-y-0.5 transition-all"
            >
              Explore our services
            </Link>
            <Link
              to="/branches"
              className="border border-white/30 px-8 py-4 rounded-full font-medium text-[13.5px] backdrop-blur-sm hover:border-white hover:bg-white/5 transition-all"
            >
              Find your branch
            </Link>
          </div>
        </div>
      </div>

      {/* stat strip at the bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 z-[3] bg-white/5 border-t border-white/10 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto px-7 py-5 flex flex-wrap justify-between gap-5">
          {[
            { n: "4", l: "Soweto branches" },
            { n: "7 Days", l: "Open every week" },
            { n: "5km", l: "Free delivery radius" },
            { n: "1–2 Days", l: "Standard turnaround" },
            { n: "SANS 10146", l: "Commercial standard" },
          ].map((stat) => (
            <div key={stat.l} className="text-white">
              <div className="font-display text-[23px] font-semibold text-brand-cyan-soft">{stat.n}</div>
              <div className="text-[10.5px] tracking-[0.1em] uppercase opacity-55 mt-0.5">{stat.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
