# TrackLap

Running Tracker app (Front End).

src/
├── layouts/
│ ├── MainLayout.astro # Public (Landing, Login, Register)
│ └── DashboardLayout.astro # Auth (Sidebar, Navbar, User Context)
├── components/
│ ├── auth/ # Login, Register, Forgot Password forms
│ ├── strava/ # Strava Connect/Status components
│ ├── workouts/ # Workout Library & Template builders
│ ├── shoes/ # Shoe cards, Mileage trackers, "Add Shoe" form
│ ├── calendar/ # Weekly/Monthly training plan views
│ ├── runs/ # Activity feed cards (Strava & Manual)
│ └── ui/ # Reusable: Button, Input, Modal, Badge, Card
├── pages/
│ ├── index.astro # Marketing Landing Page
│ ├── login.astro  
│ ├── register.astro  
│ └── dashboard/ # AUTHENTICATED AREA
│ ├── index.astro # Main Hub (Overview of Plan, Runs, Shoes)
│ ├── workouts.astro # Manage Workout Templates
│ ├── shoes.astro # Detailed "Gear Locker"
│ └── settings.astro # Profile editing & Strava integration
├── lib/ # api.ts (Hono fetcher), date-utils.ts
├── store/ # authStore.ts (Nano Stores for JWT)
├── types/ # interfaces for User, Run, Workout, Shoe
└── env.d.ts # Type definitions for Environment Variables
