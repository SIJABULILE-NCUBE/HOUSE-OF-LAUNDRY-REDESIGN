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
      {/* background steam */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <span className="absolute w-[45px] h-[230px] rounded-full bg-gray-800/14 dark:bg-white/10 blur-[22px] bottom-0 left-[6%]" style={{ animation: "steamrise 5.5s ease-in-out infinite" }} />
        <span className="absolute w-[55px] h-[270px] rounded-full bg-gray-800/12 dark:bg-white/8 blur-[28px] bottom-0 left-[45%]" style={{ animation: "steamrise 6s ease-in-out infinite 1.5s" }} />
        <span className="absolute w-[40px] h-[200px] rounded-full bg-gray-800/16 dark:bg-white/10 blur-[20px] bottom-0 right-[10%]" style={{ animation: "steamrise 5s ease-in-out infinite 0.8s" }} />
        <span className="absolute w-[50px] h-[250px] rounded-full bg-gray-800/12 dark:bg-white/8 blur-[25px] bottom-0 right-[30%]" style={{ animation: "steamrise 6.2s ease-in-out infinite 2.5s" }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-7 relative z-[2]">
        <div className="max-w-[640px] mb-14">
          <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-brand-cyan block mb-3.5">
            Find Us
          </span>
          <h2 className="font-display text-[clamp(26px,3vw,38px)] font-semibold leading-[1.15] mb-3.5 dark:text-white">
            Four branches across Soweto.
          </h2>
          <p className="text-[#5B6870] dark:text-gray-400 leading-[1.75] text-[15px] font-light">
            Open 7am to 6pm, seven days a week. Free delivery within a 5km radius from the Mapetla branch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {BRANCHES.map((b, i) => (
            <div
              key={b.name}
              className="glass-panel rounded-[20px] p-[30px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(16,22,26,0.11)] hover:border-brand-cyan/40"
            >
              {/* decorative navy bubbles and foam inside each card */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[20px]">
                <div className="absolute w-[90px] h-[90px] rounded-full bg-sky-500/10 dark:bg-sky-300/15 blur-[3px]" style={{ top: "-25px", right: "-15px" }} />
                <div className="absolute w-[55px] h-[55px] rounded-full bg-sky-500/12 dark:bg-sky-300/18 blur-[2px]" style={{ top: "15px", right: "50px" }} />
                <div className="absolute w-[35px] h-[35px] rounded-full bg-sky-500/14 dark:bg-sky-300/20 blur-[1px]" style={{ bottom: "10px", right: "15px" }} />
                <div className="absolute w-[65px] h-[65px] rounded-full bg-sky-500/8 dark:bg-sky-300/12 blur-[3px]" style={{ bottom: "-20px", left: i % 2 === 0 ? "55%" : "25%" }} />
                <div className="absolute w-[22px] h-[22px] rounded-full bg-sky-500/16 dark:bg-sky-300/24 blur-[0.5px]" style={{ top: "45%", right: "12%" }} />
                <div className="absolute w-[40px] h-[40px] rounded-full bg-sky-500/10 dark:bg-sky-300/16 blur-[2px]" style={{ top: "25%", left: "3%" }} />
                <div className="absolute w-[16px] h-[16px] rounded-full bg-sky-500/18 dark:bg-sky-300/26 blur-[0.5px]" style={{ top: "10px", left: "15%" }} />
                <div className="absolute w-[28px] h-[28px] rounded-full bg-sky-500/12 dark:bg-sky-300/18 blur-[1px]" style={{ bottom: "40px", left: "8%" }} />
                <div className="absolute w-[12px] h-[12px] rounded-full bg-sky-500/20 dark:bg-sky-300/28 blur-[0.5px]" style={{ top: "60%", left: "35%" }} />
                <div className="absolute w-[48px] h-[48px] rounded-full bg-sky-500/9 dark:bg-sky-300/14 blur-[2px]" style={{ bottom: "20px", right: "45%" }} />
                <div className="absolute w-[18px] h-[18px] rounded-full bg-sky-500/15 dark:bg-sky-300/22 blur-[0.5px]" style={{ top: "70%", right: "25%" }} />
                <div className="absolute w-[24px] h-[24px] rounded-full bg-sky-500/13 dark:bg-sky-300/20 blur-[1px]" style={{ top: "5px", right: "25%" }} />
                {/* foam texture - cluster of tiny bubbles bottom-left, like suds */}
                <div className="absolute bottom-0 left-0 w-[130px] h-[70px]">
                  <div className="absolute w-[10px] h-[10px] rounded-full bg-sky-500/22 dark:bg-sky-300/30" style={{ bottom: "8px", left: "10px" }} />
                  <div className="absolute w-[14px] h-[14px] rounded-full bg-sky-500/18 dark:bg-sky-300/26" style={{ bottom: "18px", left: "24px" }} />
                  <div className="absolute w-[8px] h-[8px] rounded-full bg-sky-500/24 dark:bg-sky-300/32" style={{ bottom: "5px", left: "38px" }} />
                  <div className="absolute w-[12px] h-[12px] rounded-full bg-sky-500/20 dark:bg-sky-300/28" style={{ bottom: "22px", left: "50px" }} />
                  <div className="absolute w-[9px] h-[9px] rounded-full bg-sky-500/22 dark:bg-sky-300/30" style={{ bottom: "10px", left: "65px" }} />
                  <div className="absolute w-[11px] h-[11px] rounded-full bg-sky-500/19 dark:bg-sky-300/27" style={{ bottom: "15px", left: "80px" }} />
                  <div className="absolute w-[7px] h-[7px] rounded-full bg-sky-500/25 dark:bg-sky-300/33" style={{ bottom: "4px", left: "95px" }} />
                  <div className="absolute w-[13px] h-[13px] rounded-full bg-sky-500/17 dark:bg-sky-300/25" style={{ bottom: "20px", left: "108px" }} />
                </div>
              </div>

              <div className="relative z-[2]">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-display text-[17px] font-semibold dark:text-white">{b.name}</h4>
                  {b.badge && (
                    <span className="text-[10px] font-semibold text-pink-600 bg-pink-100 dark:bg-pink-900/30 dark:text-pink-300 border border-pink-300 dark:border-pink-700 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {b.badge}
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-[#5B6870] dark:text-gray-400 font-light mt-2">{b.address}</p>
                <p className="text-[13px] text-[#5B6870] dark:text-gray-400 font-light">{b.hours}</p>

                <div className="flex gap-2 mt-4 flex-wrap">
                {b.phones.map((ph) => (
                  <a
                    key={ph.label}
                    href={ph.href}
                    className="text-[11.5px] font-semibold px-4 py-2 rounded-full border border-brand-silver-300 dark:border-gray-600 text-[#48555D] dark:text-gray-300 hover:bg-brand-cyan hover:border-brand-cyan hover:text-white transition-all"
                  >
                    Call {ph.label}
                  </a>
                ))}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${b.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11.5px] font-semibold px-4 py-2 rounded-full border border-brand-silver-300 dark:border-gray-600 text-[#48555D] dark:text-gray-300 hover:bg-brand-cyan hover:border-brand-cyan hover:text-white transition-all"
                >
                  Directions
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}