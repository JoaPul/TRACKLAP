# 🏃‍♂️ TrackLap - Performance Running Hub

TrackLap is a specialized training platform for runners and coaches. It integrates directly with Strava to sync activities, allows coaches to assign structured workouts, and helps athletes track gear mileage.

## 🛠 Tech Stack

- **Frontend:** Astro (SSR Mode), Tailwind CSS, Nano Stores (State Management).
- **Backend:** Hono (Node/Bun runtime), MongoDB (Mongoose), Zod.
- **Integrations:** Strava API (Webhooks & OAuth 2.0).

## 📂 Project Structure

(Insert the file structure we refined above here)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) or Node.js installed.
- Running Backend API (TrackLap-API).

### Installation

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install

   ```

### Project Structure

```bash

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

```
