import { useCart } from "../context/CartContext";

// the clothesline with swaying pegs - each peg holds a service tag
function PegLine() {
  const tags = ["Wash & Fold", "Dry Cleaning", "Takkie Wash", "Alterations"];
  const positions = ["12%", "34%", "56%", "78%"];
  const delays = ["0s", "-1.4s", "-2.7s", "-0.7s"];

  return (
    <div className="relative h-[120px] mb-[-30px] hidden md:block">
      {/* the washing line itself */}
      <div
        className="absolute top-[22px] left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, #CBD3D8 8%, #CBD3D8 92%, transparent)" }}
      />
      {tags.map((tag, i) => (
        <div
          key={tag}
          className="absolute top-[8px]"
          style={{
            left: positions[i],
            transformOrigin: "top center",
            animation: `sway 5s ease-in-out infinite`,
            animationDelay: delays[i],
          }}
        >
          {/* the peg SVG */}
          <svg viewBox="0 0 24 44" className="w-[26px] mx-auto">
            <path d="M8 4 L8 26 M16 4 L16 26" stroke="#9AA6AE" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <rect x="5" y="10" width="14" height="30" rx="3" fill="#CBD3D8" stroke="#9AA6AE" strokeWidth="1" />
            <circle cx="12" cy="20" r="2.4" fill="#9AA6AE" />
          </svg>
          {/* hanging tag */}
          <div className="mt-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap glass-panel text-[#39464E]">
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
    <section id="services" className="py-28 bg-brand-silver-light">
      <div className="max-w-[1200px] mx-auto px-7">
        <PegLine />

        <div className="max-w-[640px] mb-14">
          <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-brand-cyan block mb-3.5">
            Household Services
          </span>
          <h2 className="font-display text-[clamp(26px,3vw,38px)] font-semibold leading-[1.15] mb-3.5">
            Everything you drop off, done properly.
          </h2>
          <p className="text-[#5B6870] leading-[1.75] text-[15px] font-light">
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
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-[13.5px] text-[#5B6870] leading-[1.65] font-light">{s.desc}</p>
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
