// commercial linen categories - hover to reveal the photo behind each card
// 3 have real stock photos, 3 are placeholders until the owner sends real ones
const LINEN_TYPES = [
  {
    label: "Hotel & Restaurant Linen",
    img: "https://images.unsplash.com/photo-1724847885015-be191f1a47ef?fm=jpg&q=85&w=900&auto=format&fit=crop&ixlib=rb-4.1.0",
    alt: "Folded linen stacked on a rack",
  },
  {
    label: "Food & Beverage Linen",
    img: "https://images.unsplash.com/photo-1752805869096-9b149e6effa1?fm=jpg&q=85&w=900&auto=format&fit=crop&ixlib=rb-4.1.0",
    alt: "Commercial washing machine drum",
  },
  {
    label: "Hospital Ward & Theatre Linen",
    img: null,
    placeholder: "Photo placeholder — hospital ward & theatre linen",
  },
  {
    label: "Hotel Guest Dry Cleaning",
    img: null,
    placeholder: "Photo placeholder — guest dry cleaning",
  },
  {
    label: "Table Linen, Curtains & Pillows",
    img: null,
    placeholder: "Photo placeholder — table linen, curtains, pillows & walk-off mats",
  },
  {
    label: "Uniforms & Chair Covers",
    img: "https://images.unsplash.com/photo-1647202152259-98fe50ad0618?fm=jpg&q=85&w=900&auto=format&fit=crop&ixlib=rb-4.1.0",
    alt: "Pressing garments on an ironing board",
  },
];

// these are the real industries listed on their actual site
const INDUSTRIES = [
  "Healthcare", "Hospitality", "Food & Beverage", "Retail",
  "Mining", "Motoring", "Engineering", "Pharmaceutical",
  "Industrial", "General Manufacturing",
];

export default function Commercial() {
  return (
    <section id="commercial" className="py-28 bg-gradient-to-b from-brand-silver to-brand-silver-light dark:from-brand-charcoal dark:to-brand-char-mid">
      <div className="max-w-[1200px] mx-auto px-7">
        <div className="max-w-[640px] mb-14">
          <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-brand-cyan block mb-3.5">
            Commercial & Industrial
          </span>
          <h2 className="font-display text-[clamp(26px,3vw,38px)] font-semibold leading-[1.15] mb-3.5 dark:text-white">
            We professionally clean, press and package bulk laundry.
          </h2>
          <p className="text-[#5B6870] dark:text-gray-400 leading-[1.75] text-[15px] font-light">
            Industrial linen and garments washed to both national (SANS 10146) and
            international standards. Collected from your premises, processed at our
            centralised facility, and returned across Johannesburg and the East Rand.
          </p>
        </div>

        {/* photos always visible - no hover reveal */}
        <div className="grid md:grid-cols-3 gap-[18px]">
          {LINEN_TYPES.map((item) => (
            <div
              key={item.label}
              className="relative aspect-[4/3] rounded-[20px] overflow-hidden border border-white/80 dark:border-white/10 bg-brand-silver dark:bg-brand-char-mid shadow-[0_12px_32px_rgba(16,22,26,0.07)] flex items-end p-[22px] group transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(16,22,26,0.16)] cursor-default"
            >
              {/* photo always showing */}
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                // placeholder for cards without photos yet
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-[11.5px] text-[#9AA6AE] z-[2]">
                  <span>{item.placeholder}</span>
                </div>
              )}

              {/* dark gradient always visible so text is readable over photos */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,14,16,0.05)] via-transparent to-[rgba(12,14,16,0.75)]" />

              {/* category label - always white since photos are always showing */}
              <span className="relative z-[3] font-display font-semibold text-[15.5px] text-white drop-shadow-md">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* industries they serve - real list from their website */}
        <div className="max-w-[640px] mt-[76px]">
          <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-brand-cyan block mb-3.5">
            Industries We Service
          </span>
          <h2 className="font-display text-2xl font-semibold leading-[1.15]">
            Trusted across ten sectors.
          </h2>
        </div>
        <div className="flex flex-wrap gap-2.5 mt-5">
          {INDUSTRIES.map((ind) => (
            <span
              key={ind}
              className="px-5 py-2.5 rounded-full text-[12.5px] font-medium glass-panel text-[#48555D] hover:border-brand-cyan hover:text-brand-cyan hover:-translate-y-0.5 transition-all cursor-default"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}