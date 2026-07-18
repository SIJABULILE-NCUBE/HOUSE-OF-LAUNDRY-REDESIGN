import SteamIron from "./SteamIron";

// all 4 real branch locations from their actual website + directory listings
const BRANCHES = [
  {
    name: "Rockville",
    address: "3177 Vundla Street, Moroka, Soweto, 1818",
    hours: "7am – 6pm daily",
    phones: [{ label: "011 749 3229", href: "tel:0117493229" }],
    mapsQuery: "3177+Vundla+Street+Moroka+Soweto",
  },
  {
    name: "Dube Village",
    address: "535 Masina Street, Dube Village, Soweto",
    hours: "7am – 6pm daily",
    phones: [
      { label: "068 160 9757", href: "tel:0681609757" },
      { label: "079 883 2128", href: "tel:0798832128" },
    ],
    mapsQuery: "535+Masina+Street+Dube+Village+Soweto",
  },
  {
    name: "Tladi",
    address: "1702 Legwale Street, Tladi, Soweto",
    hours: "7am – 6pm daily",
    phones: [{ label: "011 749 3229", href: "tel:0117493229" }],
    mapsQuery: "1702+Legwale+Street+Tladi+Soweto",
  },
  {
    name: "Mapetla Ext",
    address: "2171 Manotshe Street, Mapetla Ext, Soweto, 1818",
    hours: "7am – 6pm daily · Free delivery within 5km",
    phones: [{ label: "011 749 3229", href: "tel:0117493229" }],
    mapsQuery: "2171+Manotshe+Street+Mapetla+Soweto",
    badge: "Free 5km delivery",
  },
];

export default function Branches() {
  return (
    <section id="branches" className="py-28 bg-brand-silver-light dark:bg-brand-char-mid relative overflow-hidden">
      <SteamIron side="left" />
      <div className="max-w-[1200px] mx-auto px-7 relative z-[2]">
        <div className="max-w-[640px] mb-14">
          <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-brand-cyan block mb-3.5">
            Find Us
          </span>
          <h2 className="font-display text-[clamp(26px,3vw,38px)] font-semibold leading-[1.15] mb-3.5">
            Four branches across Soweto.
          </h2>
          <p className="text-[#5B6870] leading-[1.75] text-[15px] font-light">
            Open 7am to 6pm, seven days a week. Free delivery within a 5km radius from the Mapetla branch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {BRANCHES.map((b) => (
            <div
              key={b.name}
              className="glass-panel rounded-[20px] p-[30px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(16,22,26,0.11)] hover:border-brand-cyan/40"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-display text-[17px] font-semibold">{b.name}</h4>
                {b.badge && (
                  <span className="text-[10px] font-semibold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/30 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {b.badge}
                  </span>
                )}
              </div>
              <p className="text-[13px] text-[#5B6870] font-light mt-2">{b.address}</p>
              <p className="text-[13px] text-[#5B6870] font-light">{b.hours}</p>

              <div className="flex gap-2 mt-4 flex-wrap">
                {b.phones.map((ph) => (
                  <a
                    key={ph.label}
                    href={ph.href}
                    className="text-[11.5px] font-semibold px-4 py-2 rounded-full border border-brand-silver-300 text-[#48555D] hover:bg-brand-cyan hover:border-brand-cyan hover:text-white transition-all"
                  >
                    Call {ph.label}
                  </a>
                ))}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${b.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11.5px] font-semibold px-4 py-2 rounded-full border border-brand-silver-300 text-[#48555D] hover:bg-brand-cyan hover:border-brand-cyan hover:text-white transition-all"
                >
                  Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}