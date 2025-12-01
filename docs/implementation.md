# Implementation Plan for PoliticOS

## Feature Analysis

### Identified Features:
1.  **Multi-Tenant Authentication:** Secure login with role redirection (Admin vs. Candidate).
2.  **Clean Dashboard (War Room):** Light-mode interface with "Upgrade" CTAs and metrics.
3.  **Political Intelligence Feed:** Webhook integration for news.
4.  **Geospatial Intelligence:** Interactive map with country/region reach visualization.
5.  **Campaign Management:** Active campaigns table with budget allocation and status.
6.  **Subscription/Payment Module:** Because of the "Upgrade Pro" button, we need a billing placeholder structure.

## Recommended Tech Stack

### Frontend:
- **Framework:** Next.js 14 (App Router).
- **Styling:** Tailwind CSS + Shadcn/ui (configured for Light Mode).
- **Icons:** Lucide React (Clean line icons).
- **Charts:** Recharts (Best for the radar/bar charts shown in design).
- **Maps:** React Simple Maps or Leaflet (Clean style).

### Backend:
- **Platform:** Supabase (PostgreSQL, Auth).

## Implementation Stages

### Stage 1: Foundation & "Clean" Design Setup
**Duration:** 2 Days
**Dependencies:** None

#### Sub-steps:
- [ ] Initialize Next.js 14 project.
- [ ] **Design System:** Configure `tailwind.config.ts` for the "Modern Clean" palette (Slate-50 background, White cards).
- [ ] **Global CSS:** Force Light Mode defaults in `globals.css`.
- [ ] Configure Supabase Client.
- [ ] Setup Database Schema (`profiles`, `candidates`).

### Stage 2: The Shell (Sidebar & Header)
**Duration:** 2 Days
**Dependencies:** Stage 1

#### Sub-steps:
- [ ] Build **Sidebar Component**:
    - [ ] Navigation Links (Home, Campaign, Payments, Influencer).
    - [ ] **"Become Pro Access" Card:** Gradient blue card at the bottom.
- [ ] Build **Header Component**:
    - [ ] Search Input (Styled clean).
    - [ ] Notifications Bell.
    - [ ] User Profile Dropdown.
- [ ] Create Layout wrapper combining Sidebar + Header + Grey Background Content Area.

### Stage 3: The Dashboard (War Room)
**Duration:** 3 Days
**Dependencies:** Stage 2

#### Sub-steps:
- [ ] Create **Metric Cards** (Total Likes, Comments, Engagement).
- [ ] Implement **Audience Chart** (Bar chart: Male vs Female).
- [ ] Implement **Follower Interest** (Radar Chart).
- [ ] Implement **World/Region Map** (Reach visualization).
- [ ] Connect dummy data first, then real DB data.

### Stage 4: Campaign & Admin Lists
**Duration:** 2 Days
**Dependencies:** Stage 3

#### Sub-steps:
- [ ] Build "Campaign List" Table (Status badges: Active, Pending).
- [ ] Build "Payments" History Table.
- [ ] Integrate Logic: Fetch data from Supabase based on `candidate_id`.

### Stage 5: Polish
**Duration:** 1 Day
**Dependencies:** Stage 4

#### Sub-steps:
- [ ] Add smooth transitions (hover effects on cards).
- [ ] Ensure "Upgrade" button has a nice click effect.
- [ ] Final QA on routing logic.