// decorative iron sitting on the side with animated steam rising from it
// placed as a background element in Services and Branches sections

export default function SteamIron({ side = "right" }) {
  const posClass = side === "right" ? "right-4 md:right-10" : "left-4 md:left-10";

  return (
    <div className={`absolute ${posClass} bottom-10 z-[1] pointer-events-none opacity-40 dark:opacity-25`}>
      {/* steam wisps rising from the iron */}
      <div className="relative">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60px] h-[140px]">
          <span className="steam-wisp absolute bottom-0 left-[10px] w-[6px] h-[80px] rounded-full bg-brand-cyan/40 dark:bg-brand-cyan-soft/30 blur-[4px]" style={{ animation: "steamrise 3.5s ease-in-out infinite" }} />
          <span className="steam-wisp absolute bottom-0 left-[25px] w-[8px] h-[100px] rounded-full bg-brand-cyan/30 dark:bg-brand-cyan-soft/20 blur-[5px]" style={{ animation: "steamrise 4s ease-in-out infinite 0.8s" }} />
          <span className="steam-wisp absolute bottom-0 left-[40px] w-[5px] h-[70px] rounded-full bg-brand-cyan/35 dark:bg-brand-cyan-soft/25 blur-[4px]" style={{ animation: "steamrise 3.8s ease-in-out infinite 1.6s" }} />
          <span className="steam-wisp absolute bottom-0 left-[18px] w-[7px] h-[90px] rounded-full bg-brand-cyan/25 dark:bg-brand-cyan-soft/20 blur-[6px]" style={{ animation: "steamrise 4.2s ease-in-out infinite 2.2s" }} />
        </div>

        {/* iron SVG */}
        <svg viewBox="0 0 120 60" className="w-[100px] md:w-[140px] h-auto" xmlns="http://www.w3.org/2000/svg">
          {/* iron body */}
          <path d="M15 25 L15 15 C15 10 20 8 28 8 L90 8 C95 8 100 12 100 18 L100 25 Z" fill="#CBD3D8" className="dark:fill-[#3a4550]" stroke="#9AA6AE" strokeWidth="1.5" />
          {/* iron plate / soleplate */}
          <path d="M8 25 L100 25 L108 45 C110 50 105 55 100 55 L15 55 C10 55 5 50 8 45 Z" fill="#E8ECEF" className="dark:fill-[#2a3540]" stroke="#9AA6AE" strokeWidth="1.5" />
          {/* handle */}
          <path d="M35 8 L35 2 C35 1 36 0 38 0 L70 0 C72 0 73 1 73 2 L73 8" fill="none" stroke="#9AA6AE" strokeWidth="2" strokeLinecap="round" />
          {/* steam holes on soleplate */}
          <circle cx="35" cy="40" r="1.5" fill="#9AA6AE" opacity="0.5" />
          <circle cx="50" cy="40" r="1.5" fill="#9AA6AE" opacity="0.5" />
          <circle cx="65" cy="40" r="1.5" fill="#9AA6AE" opacity="0.5" />
          <circle cx="80" cy="40" r="1.5" fill="#9AA6AE" opacity="0.5" />
          <circle cx="42" cy="48" r="1.5" fill="#9AA6AE" opacity="0.5" />
          <circle cx="57" cy="48" r="1.5" fill="#9AA6AE" opacity="0.5" />
          <circle cx="72" cy="48" r="1.5" fill="#9AA6AE" opacity="0.5" />
          {/* temperature dial */}
          <circle cx="55" cy="16" r="5" fill="none" stroke="#9AA6AE" strokeWidth="1" />
          <path d="M55 13 L55 16 L57 17" fill="none" stroke="#29A8C4" strokeWidth="1" strokeLinecap="round" />
          {/* power light */}
          <circle cx="42" cy="16" r="2" fill="#29A8C4" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
}
