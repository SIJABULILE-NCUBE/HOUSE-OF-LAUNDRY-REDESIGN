# House of Laundry & Dry Cleaners — Redesign

A redesign concept for [House of Laundry & Dry Cleaners](https://houseoflaundry.co.za), a laundry and dry cleaning business with four branches across Soweto, Johannesburg.

Built as **Company Project 1** for my web development course.

## What this project does

- Redesigns the business's outdated website using a modern glass-panel aesthetic with their real brand colours (cyan/charcoal/silver)
- Includes all their real services, prices, branch addresses, phone numbers, and social media links
- Features an **order basket** where customers can compile a laundry request and send it directly to the shop via WhatsApp or email
- All contact links are real and functional (click-to-call, Google Maps directions, WhatsApp)
- Responsive design with mobile navigation

## Tech stack

- **React 18** (functional components + hooks)
- **Tailwind CSS v3** (utility-first styling)
- **React Router** (client-side routing)
- **Vite** (build tool)

## Getting started

```bash
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build
```

## Project structure

```
company-project-1/
├── BRIEF.md              # why i chose this company + why it needs a redesign
├── README.md             # this file
├── outreach-proof/       # screenshot of contacting the business
│   └── README.md
├── src/
│   ├── App.jsx           # main app with routing
│   ├── index.css         # tailwind + custom animations
│   ├── main.jsx          # entry point
│   ├── context/
│   │   └── CartContext.jsx   # order basket state
│   └── components/
│       ├── Header.jsx        # glass nav with logo + cart badge
│       ├── Hero.jsx          # full-bleed photo + glass panel + bubbles
│       ├── Services.jsx      # pegs animation + service cards with prices
│       ├── Commercial.jsx    # hover-reveal linen cards + industry pills
│       ├── Branches.jsx      # 4 branches with maps + click-to-call
│       ├── Footer.jsx        # ocean footer with social logos
│       ├── OrderPage.jsx     # order basket → sends via WhatsApp/email
│       ├── ContactPage.jsx   # contact form + direct links
│       └── WhatsAppFloat.jsx # floating WhatsApp button
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── .gitignore
```

## Notes

- The logo is a CSS/SVG recreation of their wave-hanger mark — swap it for their real logo file once received (marked with a `SWAP` comment in the code).
- Photos are royalty-free stock from Unsplash (free license, no attribution required). Replace with real business photos once the owner provides them.
- No public email address exists for this business anywhere online. The email field is a placeholder — confirm a real inbox with the owner before going live.
- The order basket does not process payments. It compiles a request and sends it via WhatsApp or email for the shop to confirm manually.

## Author

Sijabulile Ncube — [github.com/SIJABULILE-NCUBE](https://github.com/SIJABULILE-NCUBE)
