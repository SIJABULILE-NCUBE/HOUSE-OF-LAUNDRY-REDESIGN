// simple contact page - links to real phone numbers, whatsapp, and maps
// email is a placeholder since they don't list a public one anywhere

export default function ContactPage() {
  return (
    <section className="pt-[100px] pb-28 bg-brand-silver-light dark:bg-brand-char-mid min-h-screen">
      <div className="max-w-[800px] mx-auto px-7">
        <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-brand-cyan block mb-3.5">
          Get In Touch
        </span>
        <h1 className="font-display text-3xl font-semibold mb-2 dark:text-white">Contact us</h1>
        <p className="text-[#5B6870] dark:text-gray-400 text-[15px] font-light mb-10">
          WhatsApp or call us directly — we're open 7am to 6pm, seven days a week.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* direct contact options */}
          <div className="glass-panel rounded-[20px] p-6">
            <h3 className="font-display font-semibold text-base mb-4 dark:text-white">Quick contact</h3>

            <a
              href="https://wa.me/27780263836"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 mb-3 hover:bg-[#25D366]/20 transition-all"
            >
              <span className="text-2xl">💬</span>
              <div>
                <span className="text-sm font-semibold block dark:text-white">WhatsApp</span>
                <span className="text-[12px] text-[#5B6870] dark:text-gray-400">+27 78 026 3836</span>
              </div>
            </a>

            <a
              href="tel:0117493229"
              className="flex items-center gap-3 p-4 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20 mb-3 hover:bg-brand-cyan/10 transition-all"
            >
              <span className="text-2xl">📞</span>
              <div>
                <span className="text-sm font-semibold block dark:text-white">Main line</span>
                <span className="text-[12px] text-[#5B6870] dark:text-gray-400">011 749 3229</span>
              </div>
            </a>

            <a
              href="tel:0681609757"
              className="flex items-center gap-3 p-4 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20 hover:bg-brand-cyan/10 transition-all"
            >
              <span className="text-2xl">📞</span>
              <div>
                <span className="text-sm font-semibold block dark:text-white">Dube Village branch</span>
                <span className="text-[12px] text-[#5B6870] dark:text-gray-400">068 160 9757</span>
              </div>
            </a>
          </div>

          {/* email placeholder */}
          <div className="glass-panel rounded-[20px] p-6">
            <h3 className="font-display font-semibold text-base mb-4 dark:text-white">Send a message</h3>
            <div className="mb-3">
              <label className="text-[12.5px] font-semibold block mb-1.5 dark:text-gray-200">Your name</label>
              <input type="text" placeholder="Full name" className="w-full bg-white/50 dark:bg-white/10 dark:text-white border border-brand-silver-300 dark:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm" />
            </div>
            <div className="mb-3">
              <label className="text-[12.5px] font-semibold block mb-1.5 dark:text-gray-200">Your email</label>
              <input type="email" placeholder="you@example.com" className="w-full bg-white/50 dark:bg-white/10 dark:text-white border border-brand-silver-300 dark:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm" />
            </div>
            <div className="mb-4">
              <label className="text-[12.5px] font-semibold block mb-1.5 dark:text-gray-200">Message</label>
              <textarea rows={3} placeholder="Tell us what you need..." className="w-full bg-white/50 dark:bg-white/10 dark:text-white border border-brand-silver-300 dark:border-gray-600 rounded-lg px-3.5 py-2.5 text-sm" />
            </div>
            <a
              href="mailto:sandile@houseoflaundry.co.za"
              className="inline-block bg-brand-cyan text-white px-6 py-3 rounded-full font-semibold text-[13px] hover:bg-brand-cyan-soft transition-all"
            >
              Send Email
            </a>
            <p className="text-[11px] text-[#9AA6AE] dark:text-gray-400 mt-3">
              sandile@houseoflaundry.co.za
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
