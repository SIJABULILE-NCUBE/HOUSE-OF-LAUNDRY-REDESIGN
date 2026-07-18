import { useCart } from "../context/CartContext";

// the clothesline with swaying pegs - traditional wooden peg shape, glass pink
function PegLine() {
  const tags = ["Wash & Fold", "Dry Cleaning", "Takkie Wash", "Alterations"];
  const positions = ["12%", "34%", "56%", "78%"];
  const delays = ["0s", "-1.4s", "-2.7s", "-0.7s"];

  return (
    <div className="relative h-[130px] mb-[-30px] hidden md:block">
      {/* the washing line */}
      <div
        className="absolute top-[22px] left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, #CBD3D8 8%, #CBD3D8 92%, transparent)" }}
      />
      {tags.map((tag, i) => (
        <div
          key={tag}
          className="absolute top-[6px]"
          style={{
            left: positions[i],
            transformOrigin: "top center",
            animation: `sway 5s ease-in-out infinite`,
            animationDelay: delays[i],
          }}
        >
          {/* traditional wooden clothespin / peg - glass pink */}
          <svg viewBox="0 0 30 56" className="w-[28px] mx-auto drop-shadow-md">
            {/* top spring/grip area */}
            <path d="M7 6 C7 3 10 1 15 1 C20 1 23 3 23 6 L23 22 L7 22 Z"
              fill="url(#pinkglass)" stroke="rgba(219,112,147,0.6)" strokeWidth="0.8" />
            {/* left prong */}
            <path d="M8 22 L8 50 C8 53 10 55 12 55 L13 55 L13 22 Z"
              fill="url(#pinkglass)" stroke="rgba(219,112,147,0.5)" strokeWidth="0.8" />
            {/* right prong */}
            <path d="M17 22 L17 55 L18 55 C20 55 22 53 22 50 L22 22 Z"
              fill="url(#pinkglass)" stroke="rgba(219,112,147,0.5)" strokeWidth="0.8" />
            {/* spring in the middle */}
            <ellipse cx="15" cy="22" rx="5" ry="3" fill="rgba(219,112,147,0.35)" stroke="rgba(219,112,147,0.5)" strokeWidth="0.6" />
            {/* glass highlight */}
            <path d="M10 4 C11 3 13 2.5 15 3 L14 12 L10 10 Z" fill="rgba(255,255,255,0.45)" />
            {/* gradient definition */}
            <defs>
              <linearGradient id="pinkglass" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(255,182,203,0.85)" />
                <stop offset="50%" stopColor="rgba(219,112,147,0.7)" />
                <stop offset="100%" stopColor="rgba(255,182,203,0.6)" />
              </linearGradient>
            </defs>
          </svg>
          {/* hanging tag */}
          <div className="mt-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap glass-panel text-[#39464E] dark:text-gray-300">
            {tag}
          </div>
        </div>
      ))}
    </div>
  );
}

// icon components for each service card - kept simple with stroke-only SVGs
function WashingMachineIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-brand-cyan fill-none stroke-[1.5] mb-4">
      <rect x="3" y="2" width="18" height="20" rx="2.5" />
      <circle cx="12" cy="14" r="5" /><circle cx="12" cy="14" r="2" />
      <circle cx="6.5" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IronIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-brand-cyan fill-none stroke-[1.5] mb-4">
      <path d="M4 16 L4 11 C4 9 5.5 8 7.5 8 L15 8 C17 8 19 9.5 19.5 12 L20 16 Z" />
      <path d="M7.5 8 L7.5 5.5 C7.5 4.5 8.3 4 9.2 4 L14 4" />
      <path d="M3 19 L21 19" />
    </svg>
  );
}

function DryCleanIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-brand-cyan fill-none stroke-[1.5] mb-4">
      <path d="M8 3 L8 6 L5 9 L5 19 C5 20 5.8 21 7 21 L17 21 C18.2 21 19 20 19 19 L19 9 L16 6 L16 3 Z" />
      <path d="M8 3 L16 3" /><path d="M9 13 L15 13" />
    </svg>
  );
}

function SneakerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-brand-cyan fill-none stroke-[1.5] mb-4">
      <path d="M4 16 C4 13 6 11 8 10 L10 6 L15 6 L17 10 C19.5 11.5 21 13.5 21 16 L21 18 L4 18 Z" />
      <path d="M8 10 L17 10" /><path d="M4 18 L21 18" />
    </svg>
  );
}

function DropletIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-brand-cyan fill-none stroke-[1.5] mb-4">
      <path d="M12 3 C12 3 6 10 6 14.5 C6 18 8.7 20.5 12 20.5 C15.3 20.5 18 18 18 14.5 C18 10 12 3 12 3 Z" />
      <path d="M9.5 15 C9.5 16.6 10.6 17.8 12 17.8" />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-9 h-9 stroke-brand-cyan fill-none stroke-[1.5] mb-4">
      <circle cx="6" cy="6" r="2.6" /><circle cx="6" cy="18" r="2.6" />
      <path d="M8 7.5 L20 17" /><path d="M8 16.5 L20 7" />
    </svg>
  );
}

// the actual service data - each card has an icon, real description and price
const SERVICES = [
  {
    icon: <WashingMachineIcon />,
    eyebrow: "Laundry",
    title: "Wash, Dry, Fold & Iron",
    desc: "Personal clothing, staff uniforms, bedroom linen, duvet covers, blankets and towelling. Charged per kg, not per item.",
    price: "Per kg · 3kg minimum",
  },
  {
    icon: <IronIcon />,
    eyebrow: "Ironing",
    title: "Pressed & Ready",
    desc: "Iron-only service for items that are already clean and just need pressing before they go back on the hanger.",
    price: "R22 per kg",
    cartId: "iron-kg",
  },
  {
    icon: <DryCleanIcon />,
    eyebrow: "Dry Cleaning",
    title: "Suits, Coats & More",
    desc: "Trousers, jackets, skirts, suits, coats, dresses and more — professionally cleaned and pressed. 1–2 day turnaround.",
    price: "From R48 · Suit R120",
  },
  {
    icon: <SneakerIcon />,
    eyebrow: "Takkie Wash",
    title: "Sneakers, Done Right",
    desc: "Sneakers cleaned for individuals and sports clubs — priced by shoe size, ready in one to two days.",
    price: "Size 2–4 R20 · Size 5–11 R40",
  },
  {
    icon: <DropletIcon />,
    eyebrow: "Dyeing",
    title: "Bring Colour Back",
    desc: "Denim, skirts, golf shirts, dresses, lumber jackets, chinos and trousers — restored in 1–2 days.",
    price: "R90 – R150",
  },
  {
    icon: <ScissorsIcon />,
    eyebrow: "Alterations",
    title: "Get The Right Fit",
    desc: "Available in-store at every branch — ask for a quote.",
    price: "Quoted in-store",
  },
];

export default function Services() {
  const { addItem } = useCart();

  return (
    <section id="services" className="py-28 bg-brand-silver-light dark:bg-brand-char-mid relative overflow-hidden">
      {/* background steam that rises across the section */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <span className="absolute w-[40px] h-[200px] rounded-full bg-gray-800/15 dark:bg-white/10 blur-[20px] bottom-0 left-[8%]" style={{ animation: "steamrise 5s ease-in-out infinite" }} />
        <span className="absolute w-[50px] h-[250px] rounded-full bg-gray-800/12 dark:bg-white/8 blur-[25px] bottom-0 left-[30%]" style={{ animation: "steamrise 6s ease-in-out infinite 1.5s" }} />
        <span className="absolute w-[60px] h-[300px] rounded-full bg-gray-800/14 dark:bg-white/10 blur-[30px] bottom-0 right-[12%]" style={{ animation: "steamrise 5.5s ease-in-out infinite 0.8s" }} />
        <span className="absolute w-[45px] h-[220px] rounded-full bg-gray-800/10 dark:bg-white/7 blur-[22px] bottom-0 right-[35%]" style={{ animation: "steamrise 6.5s ease-in-out infinite 2.5s" }} />
        <span className="absolute w-[55px] h-[280px] rounded-full bg-gray-800/12 dark:bg-white/9 blur-[28px] bottom-0 left-[55%]" style={{ animation: "steamrise 5.8s ease-in-out infinite 3.5s" }} />
        <span className="absolute w-[35px] h-[180px] rounded-full bg-gray-800/18 dark:bg-white/12 blur-[18px] bottom-0 left-[75%]" style={{ animation: "steamrise 4.8s ease-in-out infinite 1s" }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-7 relative z-[2]">
        <PegLine />

        <div className="max-w-[640px] mb-14">
          <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-brand-cyan block mb-3.5">
            Household Services
          </span>
          <h2 className="font-display text-[clamp(26px,3vw,38px)] font-semibold leading-[1.15] mb-3.5 dark:text-white">
            Everything you drop off, done properly.
          </h2>
          <p className="text-[#5B6870] dark:text-gray-400 leading-[1.75] text-[15px] font-light">
            Charged per kilogram, not per basket — weighed and invoiced on
            collection, so there are no surprises. Minimum 3kg (roughly 10 items).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-[22px]">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="glass-panel rounded-[20px] p-[34px_30px] relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_4px_8px_rgba(16,22,26,0.04),0_26px_56px_rgba(16,22,26,0.12)] hover:border-brand-cyan/40"
            >
              {s.icon}
              <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-brand-cyan block mb-1">
                {s.eyebrow}
              </span>
              <h3 className="font-display text-lg font-semibold mb-2 dark:text-white">{s.title}</h3>
              <p className="text-[13.5px] text-[#5B6870] dark:text-gray-400 leading-[1.65] font-light">{s.desc}</p>
              <span className="font-display text-xs font-semibold text-brand-cyan mt-3 block">
                {s.price}
              </span>

              {/* quick-add button if this service has a direct cart mapping */}
              {s.cartId && (
                <button
                  onClick={() => addItem(s.cartId)}
                  className="mt-3 text-[11px] font-semibold text-brand-cyan border border-brand-cyan/30 rounded-full px-3 py-1 hover:bg-brand-cyan hover:text-white transition-all"
                >
                  + Add to order
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}