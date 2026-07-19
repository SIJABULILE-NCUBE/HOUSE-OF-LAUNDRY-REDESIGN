# 🧺 House of Laundry & Dry Cleaners — Website Redesign

> A modern React + Tailwind CSS redesign concept for **House of Laundry & Dry Cleaners**, a real South African laundry and dry-cleaning business with four branches across Soweto, Johannesburg.

This project was developed as **Company Project 1** for my Software Development studies through **Codespace Academy** and **Melsoft Academy**.

---

# 🔗 Important Links

| Resource | Link |
|-----------|------|
| 🌐 Live Website | **house-of-laundry.netlify.app** |
| 💻 GitHub Repository | https://github.com/SIJABULILE-NCUBE/HOUSE-OF-LAUNDRY-REDESIGN |
| 🎥 Loom Walkthrough | **PASTE LOOM LINK HERE** |
| 🏢 Original Business Website | https://houseoflaundry.co.za |
| 👤 GitHub Profile | https://github.com/SIJABULILE-NCUBE |
| 

---

# 📖 Project Overview

House of Laundry & Dry Cleaners is a real South African laundry and dry-cleaning business serving both residential and commercial customers across Soweto.

After researching the company's existing website, I identified several opportunities to improve the overall user experience, accessibility, responsiveness, visual hierarchy, and customer engagement.

Rather than creating a fictional project, I chose to redesign an existing business website as a real-world case study.

Before beginning development, I contacted the business owner directly to request permission to redesign their website as part of my studies. Permission was granted, and all communication has been documented within this repository.

This project demonstrates not only frontend development skills, but also professional communication, user experience analysis, documentation, and project planning.

For the complete case study—including business research, design decisions, technical implementation, page breakdowns, challenges, and future recommendations—please refer to **BRIEF.md**.

---

# 🎯 Project Objectives

The goals of this redesign were to:

- Modernise the company's online presence
- Improve the mobile experience
- Create a cleaner user interface
- Improve website navigation
- Showcase commercial laundry services more effectively
- Encourage customer engagement
- Simplify quotation and booking enquiries
- Build a fully responsive React application
- Demonstrate professional frontend development practices

---

# ✨ Features

| Feature | Status |
|----------|--------|
| Responsive Design | ✅ |
| Light / Dark Mode | ✅ |
| WhatsApp Integration | ✅ |
| Email Integration | ✅ |
| Interactive Order Basket | ✅ |
| Customer Reviews Section | ✅ |
| Laundry Tip of the Day | ✅ |
| Google Maps Branch Locations | ✅ |
| Click-to-Call Functionality | ✅ |
| Floating WhatsApp Button | ✅ |
| Custom Animations | ✅ |
| Commercial Services Showcase | ✅ |

---

# 👨‍💻 Typical User Journey

1. User lands on the homepage.
2. Learns about the business.
3. Explores household or commercial laundry services.
4. Views pricing and available branches.
5. Adds services to the order basket.
6. Reviews the basket.
7. Sends the enquiry through WhatsApp or email.
8. Contacts the business if further assistance is required.

---

# 🛠 Technology Stack

- React 18
- Tailwind CSS v3
- React Router
- React Context API
- JavaScript (ES6+)
- Vite
- HTML5
- CSS3

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/SIJABULILE-NCUBE/HOUSE-OF-LAUNDRY-REDESIGN.git
```

Navigate into the project

```bash
cd HOUSE-OF-LAUNDRY-REDESIGN
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Create a production build

```bash
npm run build
```

---

# 📂 Project Structure

```text
company-project-1/
│
├── BRIEF.md
├── README.md
│
├── outreach-proof/
│   ├── README.md
│   ├── COMMUNICATION.md
│   ├── FORMAL-EMAIL.md
│   └── whatsapp-*.png
│
├── public/
│   └── images/
│       ├── hotel-restaurant-linen.jpeg
│       ├── food-beverage-linen.jpeg
│       ├── hospital-ward-theatre-linen.jpeg
│       ├── hotel-guest-dry-cleaning.jpeg
│       ├── table-linen-curtains-pillows.jpeg
│       └── uniforms-chair-covers.jpeg
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── Commercial.jsx
│       ├── Branches.jsx
│       ├── Reviews.jsx
│       ├── OrderPage.jsx
│       ├── ContactPage.jsx
│       ├── Footer.jsx
│       └── WhatsAppFloat.jsx
│
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── package.json
└── .gitignore
```

---

# 🧠 Component Architecture

```text
App
│
├── Header
├── Hero
├── Services
├── Commercial
├── Reviews
├── Branches
├── OrderPage
├── ContactPage
├── Footer
└── WhatsAppFloat
```

---

# 🛒 State Management

The application uses **React Context API** to manage the order basket globally.

The Cart Context provides:

- Add items
- Remove items
- Update quantities
- Clear basket
- Calculate totals

This eliminates prop drilling and keeps basket data accessible across multiple pages.

---

# 📱 Responsive Design

The application was designed using a **mobile-first approach** and has been tested across:

- Mobile devices
- Tablets
- Laptops
- Desktop monitors

Layouts automatically adapt to different screen sizes for an optimal user experience.

---

# ♿ Accessibility

Accessibility considerations include:

- Semantic HTML
- Responsive layouts
- Descriptive image alt text
- Readable typography
- Consistent spacing
- Keyboard-friendly navigation
- Good colour contrast

---

# ⚡ Performance

Performance optimisations include:

- Reusable React components
- Optimised image loading
- Tailwind utility classes
- Lightweight dependency stack
- Fast Vite development server
- Efficient component rendering

---

# 📄 Documentation

This repository contains multiple documentation files.

| File | Description |
|------|-------------|
| README.md | Repository overview |
| BRIEF.md | Complete project case study |
| outreach-proof/README.md | Outreach documentation index |
| COMMUNICATION.md | WhatsApp communication with the business owner |
| FORMAL-EMAIL.md | Formal email sent to the business owner |

---

# 📸 Screenshots

> Screenshots will be added after deployment.

- Home Page
- Services
- Commercial Laundry
- Reviews
- Order Basket
- Contact Page

---

# 🚧 Challenges Encountered

Some of the challenges during development included:

- Working with a real business rather than a fictional brief
- Preserving the company's branding while modernising the interface
- Creating reusable React components
- Managing shared basket state using Context API
- Designing responsive layouts
- Balancing animations with performance

Each challenge contributed to improving my frontend development skills.

---

# 📚 Lessons Learned

This project strengthened my understanding of:

- React architecture
- Context API
- Component reusability
- Tailwind CSS
- Responsive design
- UI/UX principles
- Technical documentation
- Git & GitHub workflows
- Professional communication with clients

---

# 🚀 Future Improvements

Future versions could include:

- Online payments
- User authentication
- Customer accounts
- Live order tracking
- SMS notifications
- Admin dashboard
- Database integration
- Backend API
- Booking calendar
- Online quotations
- Loyalty rewards programme
- Live customer reviews

---

# 💼 Skills Demonstrated

- React
- JavaScript
- Tailwind CSS
- React Router
- Context API
- Responsive Web Design
- UI/UX Design
- Git
- GitHub
- Vite
- Component Architecture
- Technical Documentation
- Client Communication

---

# 📊 Project Statistics

- 7+ Pages
- 10+ Reusable React Components
- Mobile Responsive
- Dark & Light Mode
- React Context API
- WhatsApp Integration
- Email Integration
- Google Maps Integration
- Real Business Case Study
- Professional Documentation

---

# 📝 Important Notes

- The logo is a CSS/SVG recreation of the company's wave-and-hanger logo and can easily be replaced with the official logo if required.
- Images located inside `public/images/` are real photographs sourced from the business's official website and Instagram page with the owner's permission.
- The Order Basket and Customer Reviews are demonstration features intended to showcase frontend functionality and are not connected to a live payment system or production database.
- This repository represents a student redesign concept and is **not** the official website of House of Laundry & Dry Cleaners.
- Proof of the owner's permission is included inside the `outreach-proof/` directory.

---

# 🙏 Acknowledgements

Special thanks to:

- House of Laundry & Dry Cleaners for granting permission to redesign their website.
- Codespace Academy.
- Melsoft Academy.
- My instructors and mentors for their guidance throughout this project.

---

# 📄 License

This repository has been created for educational and portfolio purposes only.

All original branding, company information and photographs remain the property of House of Laundry & Dry Cleaners.

No commercial use of this redesign is permitted without the business owner's written permission.

---

# 👤 Author

## **Sijabulile Ncube**

Software Development Student  
Melsoft Academy (SNPL Programme)

**GitHub:** https://github.com/SIJABULILE-NCUBE

**Portfolio:** https://sijabulile-ncube.github.io

*"Building modern, user-focused web applications while transitioning from Finance into Software Engineering and Artificial Intelligence."*