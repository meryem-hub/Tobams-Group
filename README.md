
◆ A Tobams Group landing page built from a Figma design.Made sure everything lines up - spacing colors, fonts, all of it.

◆ **Figma:** [Link](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

---

## How to run

```bash
npm install
npm run dev
```

---

What's inside

◆ Header with dropdowns (About, What We Do, Account)
◆ Hero section with background image
◆ LMS section with circular image
◆ Training section (Corporate, Individual, Capacity)
◆ Management program (dark theme)
◆ CEO webinar section
◆ Training consultant section
◆ Testimonials (scrollable cards)
◆ Footer (redesigned)

All components are separate files under /components.

---

What I refactored

◆ Footer redesign - Took the basic footer from Figma and completely elevated it. Added glass-morphism cards, hover animations (rotate, scale, slide), gradient backgrounds, glow effects, and interactive contact cards. Same information, just more polished and premium.

◆ Testimonial scroll - Horizontal scrolling cards with hidden scrollbar. Clean and functional.

◆ Custom border radius - Images use specific corner radii: 56px, 24px, 23px, 12px

◆ Responsive breakpoints - Works perfectly at 425px, 768px, and 1280px+

---

Custom CSS I wrote

◆ Used plain CSS for animations that Tailwind couldn't handle & for scroll.

◆ Everything else is 100% Tailwind CSS. No inline styles.

---

How I used AI

◆ Used AI coding tools for rapid prototyping and boilerplate generation


◆ Every line of code was reviewed, tested, and customized to match the exact design requirements.

◆ The footer redesign was my own creative direction - AI helped with implementation, but the design decisions were mine.

---

Details I focused on

Typography
◆ Headings: Nunito (600/700 weight)
◆ Body text: Nunito Sans (400 weight)
◆ Exact sizes: 40px, 32px, 18px

Colors
◆ Primary: #571244
◆ Secondary: #EF4353
◆ Dark BGs: #2C0922, #11040E, #1D0617

Responsive
◆ Phone: 425px
◆ Tablet: 768px
◆ Desktop: 1280px+
◆ Used Tailwind's sm/md/lg prefixes exclusively

Custom border radius on images
◆ rounded-tl-[56px] rounded-tr-[24px] rounded-br-[23px] rounded-bl-[12px]

---

Deployment

◆ Live on Vercel.

---

Note

◆ All internal links go to / since this is just the frontend.

