# Supreme Group Frontend – Assignment Submission

## 🚀 Deployment

- **Live URL:** [https://blacksof-assignment-inky.vercel.app](https://blacksof-assignment-inky.vercel.app)  
- **GitHub Repo:** [https://github.com/shriyanshbhargava/blacksof-assignment](https://github.com/shriyanshbhargava/blacksof-assignment)

---

## 📁 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Not required currently. If needed, Zustand would be my preferred choice due to its minimal and scalable API.

---

## 📦 Project Structure
```
├── public/
├── src/
│ ├── app/
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── components/
│ │ ├── CarouselSection/
│ │ ├── sections/
│ │ └── shared/
│ ├── data/
│ ├── lib/
│ │ ├── hooks/
│ │ ├── types/
│ │ └── utils/
│ └── globals.css
├── .gitignore
├── next.config.ts
├── next-env.d.ts
```

---

## 🧱 Component Architecture

- Components are grouped by feature to enhance reusability and clarity (`CarouselSection`, `shared`, `sections`).
- Logic-related code like `hooks`, `utils`, and `types` is housed under `lib/` for modular separation.
- Pages are handled via the App Router in `src/app` using Next.js 13+ standards.

---

## 📱 Responsive Design Strategy

- Built using Tailwind’s mobile-first responsive utility classes (`sm:`, `md:`, `lg:`, `xl:`).
- Manually tested on Chrome DevTools across multiple breakpoints (`320px` to `1440px`).
- Layouts are fluid, using `flex`, `grid`, and `aspect-ratio` for adaptability.

---

## ⚡ Performance Optimization

- Used `next/image` for optimized image loading with lazy loading and automatic resizing.
- Code splitting with dynamic imports (`next/dynamic`) for sections not needed immediately.
- Avoided unnecessary re-renders using memoization and clean component structure.

---

## ♿ Accessibility

- All HTML is semantic (e.g., `header`, `main`, `nav`, `section`, `button`).
- ARIA roles and labels used where necessary.
- Full keyboard accessibility and logical tab order tested.
- Color contrast verified via Lighthouse and Figma plugins.

---

## 🎞️ Animations

- **Library Used:** Framer Motion
- Applied subtle entrance animations on scroll and smooth transitions for interactivity.
- All animations are performance-friendly and do not block main thread.

---

## 🧪 Testing (Optional)

- No tests implemented in this phase due to time constraints.
- For future development, would prefer using:
  - **Unit Tests:** Vitest or Jest
  - **Component Tests:** React Testing Library
  - **E2E Tests:** Playwright or Cypress

---

## 🧩 Third-Party Libraries Used

- **Tailwind CSS** – Styling
- **Framer Motion** – Animations
- **Next.js** – Framework & Routing
- **TypeScript** – Type safety

---

## ❗ Assumptions & Decisions

- Static content was assumed, so no global state or dynamic fetching was added.
- Used `public/` folder structure as per asset categorization (carousel, hero, icons).
- Skipped heavy animation in favor of fast load times and simplicity.

---

## 🧗 Challenges & Solutions

| Challenge                    | Solution                                                                 |
|-----------------------------|--------------------------------------------------------------------------|
| Figma pixel perfection      | Used Figma inspect panel with rulers to exactly match spacing & colors. |
| Responsive edge handling    | Tweaked Tailwind breakpoints and image scaling manually.                |
| Class clutter with Tailwind | Used reusable components and grouped class logic cleanly.               |

---

## 🚧 Future Improvements

- Add integration and unit tests.
- Move content to CMS for easier editing.
- Improve Lighthouse scores on performance/accessibility.
- Add skeleton loaders and prefetching for dynamic sections.
- Animate layout transitions for a richer UX.

---

## 📝 How to Run Locally

```bash
git clone https://github.com/shriyanshbhargava/blacksof-assignment
cd blacksof-assignment
npm install
npm run dev
