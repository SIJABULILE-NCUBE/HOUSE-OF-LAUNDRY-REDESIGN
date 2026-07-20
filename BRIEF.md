# Project Brief — House of Laundry & Dry Cleaners Website Redesign

**Student:** Sijabulile Ncube
**Project:** Company Project 1 — Real Business Website Redesign
**GitHub:** github.com/SIJABULILE-NCUBE
**Portfolio:** sijabulile-ncube.github.io
**Client:** House of Laundry & Dry Cleaners (Soweto, Johannesburg)
**Original website:** houseoflaundry.co.za

---

## 1. Introduction

This document is the brief for my Company Project 1. The assignment was to find a real, existing South African business whose website could be improved, and to design and build a modern redesign of it using React and Tailwind CSS.

Rather than choosing a large company or inventing a fictional business, I wanted to work with a genuine small business where a better website could make a real difference. I chose **House of Laundry & Dry Cleaners**, a family-oriented laundry and dry-cleaning business operating four branches across Soweto.

Importantly, this is a **student project built for learning purposes**. Before starting, I reached out to the business owner directly and was given permission to recreate the website as a concept for study purposes. With that permission, I sourced real photographs of the branches from the business's own website and their public Instagram page, rather than using generic stock imagery. A full record of that conversation , including the WhatsApp transcript and the formal follow-up email  is included in the `outreach-proof/` folder. This means the project is not just a hypothetical exercise; it was carried out with the knowledge and blessing of the actual business.

---

## 2. About the Business

House of Laundry & Dry Cleaners is a well-established laundry service based in Soweto. From their existing website and my conversation with the owner, here is what the business offers:

**Household services**
- Laundry (wash, dry, fold and iron) — charged per kilogram, not per item
- Ironing (iron-only service)
- Dry cleaning (trousers, jackets, suits, coats, dresses and more)
- Takkie (sneaker) wash — for individuals and sports clubs
- Dyeing of clothes (denim, dresses, chinos and more)
- Alterations
- Pest control
- Contract cleaning

**Commercial & industrial services**
The business also serves commercial clients, professionally cleaning, pressing and packaging bulk laundry to national (SANS 10146) and international standards. This includes:
- Hotel and restaurant linen
- Food and beverage linen
- Hospital ward and theatre linen
- Hotel guest dry cleaning
- Table linen, curtains, pillows and walk-off mats
- Personnel uniforms and chair covers

They serve clients across ten sectors including healthcare, hospitality, food and beverage, retail, mining, motoring, engineering, pharmaceutical, industrial and general manufacturing.

**Branches (all open 7am–6pm, seven days a week)**
- Rockville — 3177 Vundla Street, Moroka
- Dube Village — 535 Masina Street
- Tladi — 1702 Legwale Street
- Mapetla Ext — 2171 Manotshe Street (free delivery within a 5km radius)

**Their motto:** "We do it with pride."

---

## 3. Why I Chose This Business

I chose House of Laundry for several reasons:

1. **It is a real, active business.** It has multiple branches, real contact numbers, an active WhatsApp line and social media presence. The business is clearly operating and serving customers , the website simply doesn't reflect how established they are.

2. **The content is genuinely interesting to work with.** The business does far more than basic laundry. The commercial and industrial side (hospital theatre linen, hotel linen, SANS-standard washing) gives real depth to design around, rather than a thin services page.

3. **Their pricing model is a hidden strength.** They charge per kilogram rather than per item, which is actually a customer-friendly selling point  but on the current site it is buried and hard to find.

4. **They have a distinctive brand identity.** Their turquoise/cyan wave-and-hanger logo and their "We do it with pride" motto are memorable. These weren't being used to their full potential, which gave me a clear creative starting point.

5. **A better website could genuinely help them.** For a business that already offers collection, delivery and commercial contracts, a modern, mobile-friendly website with clear pricing and an easy way to place requests could realistically bring in more customers.

---

## 4. An Honest Look at the Current Website

The current website has clearly served the business for a number of years, and it deserves credit for establishing an online presence at a time when many small businesses had none. The information is largely there, and the brand identity is present. My aim here is not to criticise the people behind it, but to identify, professionally and constructively, where a refresh would help.

The following are the main areas I believe could be improved:

**a) The site looks dated and hasn't been refreshed recently.**
The footer still displays "Copyright © 2020," and there is a COVID-19 information banner left over from the pandemic era. These small details unintentionally signal to visitors that the business may be less active than it actually is — which is a shame, because the business is thriving.

**b) Some images are not displaying.**
On the current site, several images do not load and appear as broken image icons. This is almost certainly a technical issue with how the images were linked rather than anything the owner did wrong, but the effect is that a first-time visitor sees empty boxes where photos of the shop should be.

**c) The pricing is hard to find.**
The per-kilogram pricing — which is one of the business's genuine advantages is not prominent. A visitor has to actively search for it. Bringing pricing to the surface makes the service feel more transparent and trustworthy.

**d) The layout is built on an older template.**
The site was put together on a basic hosting template, which was a sensible and affordable choice at the time. However, it limits how modern and professional the site can look, and it doesn't adapt as smoothly to mobile phones  which is how most of the business's customers would browse.

**e) There is no easy way to place a request online.**
Despite offering collection, delivery and commercial contracts, the current site has no online way to compile an order or request a pickup. Customers must phone or message. Adding a simple request tool removes friction for busy customers.

**f) The overall presentation undersells the business.**
The business is established, professional and offers an impressive range of services  but the current website makes it look smaller and less active than it is. The biggest opportunity is simply to present the business as well as it actually operates.

To be clear: none of this reflects poorly on the owner. Getting any website online is an achievement, and the foundations — real content, a real brand, real services  are all there. The redesign is about building on that foundation and bringing it up to date.

---

## 5. Design System

I deliberately chose a design direction that felt premium and trustworthy, while still keeping the business's own real brand identity at the centre of it. This section documents the specific design decisions.

**Colour palette**
- **Silver / charcoal base** — a light, airy "silver-light" background for most sections, with a darker charcoal used for the hero and select accents, giving the site a premium, modern feel rather than a plain white template
- **Cyan accent** — a refined version of the business's real turquoise/cyan brand colour, used for headings, prices, icons and highlights
- **Pink glass accent** — used specifically for the traditional wooden clothes pegs, giving them a distinctive, tactile look
- **Light blue bubbles** — a saturated, clearly visible light blue used for the floating bubbles in the hero section
- **Ocean blue bubbles** — clean sky-blue bubbles and foam used decoratively on the branch cards, evoking clean water rather than murky or heavy tones
- **Full dark mode** — every section, heading, label, input field and paragraph has a matching dark-mode colour so text stays clearly readable whether a visitor is in light or dark mode, rather than reusing the same colour in both. This required a dedicated pass to catch places (form inputs, labels, item names on the order page, contact details) where text was accidentally the same dark colour in both modes and effectively invisible on a dark background

**Typography**
- **Outfit** — used for headings and display text, giving a confident, modern feel
- **Inter** — used for body text and paragraphs, chosen for its clarity and readability at small sizes

**Logo**
Their real wave-and-hanger logo could not be copied directly (see Section 8), so I recreated the shape myself as an SVG graphic in the same colours. It is clearly marked in the code with a comment so it can be swapped for the real logo file at any time.

**Animation & decorative details**
- **Rising steam** — soft, blurred shapes that continuously drift upward in the Services and Branches sections, in dark grey for light mode and white for dark mode so they stay visible against either background
- **Floating bubbles** — layered, softly-lit light-blue circles in the hero section that drift and pulse gently
- **Swaying pegs** — a row of traditional wooden clothes-peg graphics hanging from a washing line, each gently swaying and holding a small tag naming a service
- **Ocean-blue bubbles and foam** — decorative bubble clusters inside each branch card, evoking suds and clean water
- **Laundry Tip of the Day bubble** — redesigned into a large, centred, cloud-shaped glass bubble that bounces gently and continuously to draw the eye, with a glowing lightbulb icon (a soft pulsing yellow halo behind it) to reinforce the "tip" idea visually, not just with an emoji

---

## 6. Page-by-Page Breakdown

**Home page**
The landing page, featuring a full-bleed hero photo with a glass panel overlay, the business's real motto, branch count, opening hours and delivery radius shown immediately, followed by the Services, Commercial, Branches and Reviews sections in sequence.

**Services page**
All six household services shown as individual cards with real pricing, icons, and a peg-and-washing-line decorative header. Every single card has a clearly visible dark-blue "+ Add to order" button (with white text so it's readable in both light and dark mode) linking straight into the order basket — this was refined after initial feedback that only one service card had this option, which made it look like the feature only worked for one service rather than all of them.

**Commercial page**
The business's commercial and industrial offering, shown using real photographs sourced from their website and Instagram (with the owner's permission), covering hotel linen, food & beverage linen, hospital theatre linen, hotel guest dry cleaning, table linen/curtains/pillows, and uniforms/chair covers. All ten industries they serve are listed as a set of pills underneath.

**Branches page**
All four real branches, each shown as its own card with the real address, real opening hours, a "Call" button that dials the real phone number directly, and a "Directions" button that opens Google Maps to that exact address. Each card includes decorative ocean-blue bubbles and a foam cluster.

**Reviews page**
A set of sample customer reviews (clearly documented as realistic sample content, not scraped real testimonials — see Section 9) with a star rating, a name and phone number, and a working "like" button that increases and decreases a like count when tapped. A "Laundry Tip of the Day" banner sits above the reviews, cycling automatically through ten real laundry care tips based on the calendar date.

**Order page**
A fully functional order basket. A visitor can browse services grouped by category, add items with a single tap, adjust quantities, see a running total calculated live, select a **preferred payment method** (cash on collection/delivery, EFT, or card — clearly labelled as a stated preference only, since there is no real payment processor connected), and then send the whole compiled request straight to the business via WhatsApp or email with one click. No payment is actually processed anywhere on the site — it is a request tool, not a checkout.

**Contact page**
A simple, direct way to get in touch: real phone numbers, the real (owner-confirmed) email address, and a WhatsApp link, alongside a basic contact form.

**Every page includes:**
- A fixed glass-effect header with navigation, a light/dark mode toggle, and a cart icon showing the number of items currently in the order basket
- A floating WhatsApp button in the bottom corner for instant contact
- A footer with the business's real contact details, real social media links (Instagram, Facebook, X/Twitter, WhatsApp), service links, and the current copyright year

---

## 7. Photographs & Permissions

The photographs used in the commercial section are **real photographs of the actual business**. I sourced them myself from the business's website and their public Instagram page, after the owner agreed I could recreate the site for study purposes. They show the branches, staff in uniform, folded linen and the working environment. Using real photos (with the owner's permission to do so) makes the redesign far more authentic than stock imagery would.

Where a real photo was not available or appropriate, a clearly-labelled placeholder or a royalty-free stock image (Unsplash License, free to use commercially) was used instead, and these are noted in the code so they can easily be replaced later.

---

## 8. Protecting My Work

Before sharing this project with the business owner, I was conscious of an important concern: since this redesign uses the real business's name, content and branding, I wanted to make sure the owner could view and evaluate my work without it being taken and used without my knowledge or agreement  while still being genuinely useful and shareable for him to look at.

To address this, I took the following steps:

- **I only shared a live preview link, not the source code.** The owner (and anyone else) can view and interact with the site, but the underlying React and Tailwind code, the GitHub repository, and my project files were not handed over. Viewing a website is not the same as being able to copy and reuse its code.
- **I was explicit, in writing, that this is a "concept" and a student project**, not a finished commercial handover. This sets a clear expectation that further use of the design ,for example, actually taking it live as their real website — would be a separate conversation and agreement between us, not something that happens automatically just because the link was shared.
- **My name is credited in the footer of the site itself** ("Redesign concept by Sijabulile Ncube"), so authorship is visible on the work, not just in a document that could be separated from it.
- **I kept the formal email professional and dated**, creating a written record of when the concept was shared and under what terms, should it ever need to be referred back to.

I want to be upfront that I am not a lawyer, and this project does not rely on any formal legal contract .It is a student project shared in good faith with a business owner who has already been generous and supportive. These steps are reasonable, practical precautions rather than a legal protection, but they do make my authorship clear and set honest expectations about what is being shared and why.

---

## 9. A Note on the Nature of This Project

This is a **student project created for educational purposes** as part of my web development course. While it was built with the owner's permission and using real business information, it is a redesign *concept* and is not the business's official live website.

Some elements are clearly sample or demonstration content rather than live, real data:
- The **customer reviews** are realistic sample content I wrote myself to demonstrate how a reviews-and-likes feature would work, not scraped or invented real customer testimonials.
- The **order basket and email capture** are functional demonstrations of the feature working end-to-end (they genuinely compile a request and open WhatsApp or an email draft), rather than a connected, live commercial ordering system.
- The **logo** is a recreation, not the business's actual logo file.

The goal of the project was to demonstrate my ability to research a real business, understand its needs, and design and build a professional, modern, responsive website that genuinely serves those needs — while being fully transparent, both with my marker and with the business owner, about exactly what has and hasn't been changed.

---

## 10. Iterative Refinements

Building this project was not a single, one-shot process — it went through several rounds of review and refinement, much as a real client project would. Some of the changes made along the way:

- **Real photo swaps** — after the owner's permission was granted and initial photos were sourced, two of the commercial linen photos (Food & Beverage Linen and Hospital Ward & Theatre Linen) were later swapped out for more accurate real photographs once I identified better matches.
- **Dark mode accessibility pass** — after testing the site properly in dark mode, I found several places (form inputs on the Order and Contact pages, item names and labels in the order basket) where text was rendering in a dark colour on a dark background, making it unreadable. I went through both pages systematically and corrected every instance.
- **Consistency fix on the "Add to order" buttons** — originally only one service card had a quick-add button, which made it look like ordering only worked for that one service. I updated every card so the option is consistent and clearly visible (solid dark blue with white text) across the whole Services page.
- **Payment method clarity** — added a simple payment preference selector to the order basket, being careful to label it honestly as a stated preference rather than a real payment step, since no payment gateway is connected.
- **Visual polish on the Laundry Tip of the Day** — the tip banner initially sat awkwardly off to one side with a lot of empty space around it. I redesigned it into a large, centred, cloud-shaped bubble with a gentle bounce animation and a glowing lightbulb icon so it properly draws attention and fills the space intentionally.
- **Colour refinements** — adjusted the hero section's floating bubbles to a clearly visible, saturated light blue after an initial version was too subtle to read as blue at a glance.

I've included this section deliberately, because I think it's honest about how real design work actually happens — not perfect on the first attempt, but refined through review, much like working with a real client would involve rounds of feedback.

## 11. Technical Summary

- **Framework:** React 18, using functional components and hooks throughout (`useState`, `useContext`)
- **Styling:** Tailwind CSS v3, with a custom theme extension for the brand's colours and fonts
- **Routing:** React Router, with dedicated routes for Home, Services, Commercial, Branches, Reviews, Order and Contact
- **State management:** A dedicated Cart Context so the order basket persists as a visitor moves between pages
- **Build tool:** Vite
- **Responsiveness:** Fully responsive layouts using Tailwind's grid and flexbox utilities, tested down to mobile screen widths
- **Version control:** Git, with a deliberate, incremental commit history (scaffold → dependencies → styling → each component individually → pages → routing → documentation) rather than one large commit, to reflect how the project was actually built up in stages

---

## 12. Conclusion

House of Laundry & Dry Cleaners is a strong, established business whose website simply hadn't kept pace with how well the business itself operates. This redesign aims to close that gap — presenting the business as the professional, multi-branch, full-service operation it genuinely is, while keeping its real identity, real content and real personality intact.

I'm grateful to the owner for engaging with me, granting permission to recreate the site, and being generous with his time throughout. It made this project far more meaningful than a purely hypothetical exercise, and I hope the result does justice to a business that clearly takes real pride in its work.
