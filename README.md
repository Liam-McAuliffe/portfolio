# Portfolio Site Design Plan

## 1. Overall Aesthetic & Branding

- **Color Palette**
  - **Primary:** Deep navy `#1E1E2F`
  - **Accent:** Teal `#4DD0E1` and coral `#FF6F61`
  - **Neutrals:** Soft grey `#F5F5F5` and charcoal `#2B2B3A`
- **Typography**
  - **Headings:** Montserrat, bold, tight letter-spacing
  - **Body:** Inter, normal weight
- **Visual Motif**
  - Diagonal section separators
  - Glass-morphism cards (semi-transparent backdrop-filter with subtle inner glow)

---

## 2. Layout & Structure

1. **Hero / Landing**

   - Full-viewport split layout:
     - **Left:** “Hi, I’m Liam McAuliffe” + subtitle “Full-Stack Developer”
     - **Right:** Animated code-snippet background or floating SVG nodes
   - Primary CTA button: “View Projects”

2. **Sticky Sidebar Nav** (desktop)

   - Vertical icon + label list: Home, About, Skills, Experience, Projects, Contact
   - Collapses to a top hamburger on mobile

3. **About Me**

   - Two-column: circular headshot with drop-shadow + narrative text
   - Highlight “Science 4 Kids” & tutoring with icons

4. **Skills**

   - Interactive tag cloud/pills to filter projects dynamically
   - On hover, display proficiency tooltip

5. **Experience**

   - Horizontal interactive timeline (Framer Motion) with each milestone animating into view

6. **Projects**

   - Masonry grid of glass-cards:
     - Screenshot with hover tilt+glow, title, tech-stack badges
     - Click expands to full-screen modal with case-study details

7. **Community & Extracurriculars**

   - Icon-driven grid linking to deeper narratives on tutoring & outreach

8. **Contact**

   - Clean form with floating labels, validation states, and micro-animation
   - Dark/light-mode toggle

9. **Footer**
   - Social icons (GitHub, LinkedIn), “© 2025 Liam McAuliffe”

---

## 3. Micro-Interactions & Performance

- **Scroll-Triggered Animations:** Fade/slide sections into view
- **Hover States:** Buttons scale (`hover:scale-105`), cards elevate (`hover:shadow-lg`)
- **Dark/Light Mode:** Toggle swaps semantic Tailwind classes (`dark:bg-gray-900`, `bg-white`)
- **Image Optimization:** `next/image` for headshot & project screenshots

---

## 4. Responsiveness & Accessibility

- **Mobile-First Design:** Single-column stack on small screens, no horizontal scroll
- **WCAG Best Practices:**
  - Semantic HTML5 (`<nav>`, `<main>`, `<article>`, `<footer>`)
  - Descriptive `alt` text for images
  - Keyboard-navigable interactive elements with visible focus rings
  - Contrast ratios ≥ 4.5:1 for text

---

## 5. Unique “Signature” Feature

Embed a live mini-demo (e.g., a tiny React component) directly in the Hero or Projects section via an `<iframe>` or sandboxed React snippet.
