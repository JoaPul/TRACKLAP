# Balkali

Running Tracker app (Front End). Comes from Áalkab.

this is the recomended architecture

src/
├── pages/
│ ├── index.astro → Landing page
│ ├── login.astro
│ ├── register.astro
│ ├── dashboard.astro → Protected, uses React island
│ ├── runs/
│ │ ├── new.astro → Log a run (React form + map)
│ │ └── [id].astro → Run details
│ ├── shoes/
│ │ ├── index.astro → List shoes
│ │ ├── new.astro
│ │ └── [id].edit.astro
│ └── settings.astro
│
├── components/
│ ├── react/
│ │ ├── ShoeCard.jsx
│ │ ├── RunCard.jsx
│ │ ├── RouteMap.jsx → React + Mapbox
│ │ ├── MileageBar.jsx
│ │ └── AuthForm.jsx
│ └── Header.astro
│
├── layouts/
│ └── Layout.astro → Wraps authenticated pages
│
├── lib/
│ └── api.js → Functions to call your BUN/Hono API
│
├── env.d.ts → Define import.meta.env.PUBLIC_API_URL
