# 🏃‍♂️ TrackLap - Performance Running Hub

TrackLap is a specialized training platform for runners and coaches. It integrates directly with Strava to sync activities, allows coaches to assign structured workouts, and helps athletes track gear mileage.

## 🛠 Tech Stack

- **Frontend:** Astro 5.0 (SSR Mode), Tailwind CSS 4.0, Nano Stores.
- **Backend:** Hono (Bun runtime), MongoDB (Mongoose).
- **Integrations:** Strava API (Webhooks & OAuth 2.0).

## 📦 Key Dependencies

| Package        | Version    | Purpose                                           |
| :------------- | :--------- | :------------------------------------------------ |
| `astro`        | `^5.1.x`   | Modern web framework (Island Architecture)        |
| `tailwindcss`  | `^4.0.x`   | Styling with the new Oxide engine                 |
| `nanostores`   | `^0.11.x`  | Lightweight state management for JWT & User state |
| `lucide-astro` | `^0.46x.x` | High-quality icons for dashboard UI               |
| `date-fns`     | `^4.1.x`   | Precise date manipulation for training plans      |
| `zod`          | `^3.x.x`   | Schema validation for frontend forms              |

## 📂 Project Structure

```text
src/
├── layouts/
│   ├── MainLayout.astro      # Public (Landing, Login, Register)
│   └── DashboardLayout.astro   # Auth (Sidebar, Navbar, User Context)
├── components/
│   ├── auth/                 # Login, Register, Forgot Password forms
│   ├── strava/               # Strava Connect/Status components
│   ├── workouts/             # Workout Library & Template builders
│   ├── shoes/                # Shoe cards, Mileage trackers, "Add Shoe" form
│   ├── calendar/             # Weekly/Monthly training plan views
│   ├── runs/                 # Activity feed cards (Strava & Manual)
│   └── ui/                   # Reusable: Button, Input, Modal, Badge, Card
├── pages/
│   ├── index.astro           # Marketing Landing Page
│   ├── login.astro
│   ├── register.astro
│   └── dashboard/            # AUTHENTICATED AREA
│       ├── index.astro       # Main Hub (Overview of Plan, Runs, Shoes)
│       ├── workouts.astro    # Manage Workout Templates
│       ├── shoes.astro       # Detailed "Gear Locker"
│       └── settings.astro    # Profile editing & Strava integration
├── lib/                      # api.ts (Hono fetcher), date-utils.ts
├── store/                    # authStore.ts (Nano Stores for JWT)
├── types/                    # interfaces for User, Run, Workout, Shoe
└── env.d.ts                  # Type definitions for Environment Variables
```

## Prerequisites

- Bun installed.
- Running Backend API (TrackLap-API).

## Installation

1.- Clone the repository.

2.- Install dependencies:

```Bash
    bun install
```

Configure environment variables (Create .env):

```Bash
    PUBLIC_API_URL=http://localhost:3000/api/v1
```

Start the development server:

```Bash
   bun run dev
```
