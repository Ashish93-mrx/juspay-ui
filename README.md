# Juspay UI Developer Assignment – SaaS Dashboard

This project is my implementation of the **UI Developer assignment for Juspay**.  
It is a **pixel-perfect SaaS dashboard** built with **React + Material UI**, following the Figma design specifications.  

Deployed Link: 👉 [Live Demo on Vercel](https://your-vercel-link.vercel.app)  
GitHub Repo: 👉 [GitHub Repository](https://github.com/your-username/your-repo)

Design Decisions

Material UI: Chosen for consistent design system, theming, and responsive components.

Custom Theme: Extended MUI theme to match Figma fonts, colors, and spacings.

State Management: Kept simple with useState and context (ThemeProvider).
Redux was not used since data is mocked and local.

Charts: Used Recharts for easy customization and pixel-perfect match with Figma.

Responsiveness: Layouts tested across breakpoints for smooth resizing.

Challenges

Achieving pixel-perfect accuracy with Figma (spacing, fonts, line-height) required careful tuning.

Implementing dark mode overrides for cards that had fixed light backgrounds.

Handling table functionality (sorting, filtering, pagination) while keeping performance smooth.

Ensuring micro-interactions were subtle but meaningful, not distracting.

##Improvements

Add unit & integration tests with Jest + React Testing Library.

Fetch data from an API instead of local mock JSON.

Improve accessibility with more ARIA roles and screen reader labels.

Add more advanced state management if project scales.
---

## Features
- **Pixel-perfect design** (matches Figma layouts, typography, spacing, colors)
- **Responsive layout** (desktop, tablet, mobile)
- **Dark & Light theme support** (toggleable from topbar)
- **Reusable components** (sidebar, topbar, stat cards, charts, tables)
- **Filtering, Searching, Sorting, Pagination** in Order List
- **Charts** (Revenue trends, Projects vs Actuals, Revenue by Location, Total Sellings)
- **Micro-interactions** (smooth hover, tap animations with Framer Motion)
- **Accessibility** (semantic HTML, ARIA roles, keyboard navigation)
- **Cross-browser support** (tested on Chrome, Firefox, Safari, Edge)

---

## 🛠️ Tech Stack
- **React 18**
- **Material UI (MUI v5)**
- **React Router v6**
- **Recharts** (for charts/graphs)
- **Framer Motion** (for animations)
- **Vercel** (for deployment)

---

## 📦 Setup & Installation

Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

Install dependencies:

npm install


Run locally:

npm run dev


Build for production:

npm run build

Author

Ashish N M