# Implementation Plan for PoliticOS

## Feature Analysis

### Identified Features:
1.  **Multi-Tenant Authentication:** Secure login with role redirection (Admin vs. Candidate) and Row Level Security (RLS).
2.  **Admin Dashboard:** Management of candidates, contracts, and global metrics.
3.  **Candidate "War Room":** High-density dashboard with real-time tickers and KPI cards.
4.  **Political Intelligence Feed:** Consumption of n8n webhooks with sentiment analysis and emotional tagging.
5.  **AI Shadow Opponent:** Interactive AI chat simulating a rival politician for strategic training.
6.  **Geospatial Intelligence:** Interactive map with heatmaps for voter density and campaign activity.
7.  **Campaign Management:** Kanban board for tasks and Calendar for events.
8.  **Scenario Generator:** AI-driven generation of Optimistic, Pessimistic, and Realistic campaign scenarios.

### Feature Categorization:
- **Must-Have Features:** Auth/RLS, Admin User Mgmt, War Room Layout, Intelligence Feed (Webhook), Basic KPIs.
- **Should-Have Features:** AI Shadow Opponent, Geospatial Map (Leaflet), Scenario Generator, Calendar/Kanban.
- **Nice-to-Have Features:** Gamification (XP System), Advanced Vector Search for news.

## Recommended Tech Stack

### Frontend:
- **Framework:** Next.js 14 (App Router) - [Documentation](https://nextjs.org/docs)
- **Styling:** Tailwind CSS + Shadcn/ui - [Documentation](https://ui.shadcn.com/)
- **State:** Zustand (Client) + TanStack Query (Server) - [Documentation](https://tanstack.com/query/latest)
- **Maps:** React Leaflet - [Documentation](https://react-leaflet.js.org/)
- **Charts:** Recharts - [Documentation](https://recharts.org/en-US/)

### Backend & Database:
- **Platform:** Supabase (PostgreSQL, Auth, Edge Functions) - [Documentation](https://supabase.com/docs)
- **AI:** OpenAI SDK - [Documentation](https://platform.openai.com/docs/api-reference)

## Implementation Stages

### Stage 1: Foundation & Security (CRITICAL)
**Duration:** 2 Days
**Dependencies:** None

#### Sub-steps:
- [ ] Initialize Next.js 14 project with TypeScript and Tailwind.
- [ ] Set up "Dark Intelligence" Design System (colors, fonts, globals.css).
- [ ] Configure Supabase Client/Server utilities using `@supabase/ssr`.
- [ ] Implement Database Schema (Profiles, Candidates, Intelligence tables).
- [ ] **Security:** Implement strict RLS policies for Multi-tenancy.
- [ ] Build Login Page with Role-Based Redirection (`middleware.ts`).

### Stage 2: The Core "War Room" & Admin
**Duration:** 3 Days
**Dependencies:** Stage 1

#### Sub-steps:
- [ ] Create Layouts: `(admin)` with Sidebar and `(candidate)` with War Room Shell.
- [ ] Implement Admin: Create Candidate Form (Auto-generate User + Profile).
- [ ] Build UI Components: KPI Cards (Glassmorphism), Ticker, Sidebar.
- [ ] Implement Candidate Dashboard: Fetch real data from `political_intelligence`.
- [ ] Create API Route: `/api/webhooks/news` to receive n8n JSON payloads.

### Stage 3: Advanced Intelligence & AI
**Duration:** 3 Days
**Dependencies:** Stage 2

#### Sub-steps:
- [ ] Implement "Intelligence Feed" with filtering (Sentiment/Date).
- [ ] Build "AI Shadow Opponent": Chat interface using OpenAI streaming.
- [ ] Create "Scenario Generator": Form to request AI analysis + Display Component.
- [ ] Implement Recharts for Sentiment Trends over time.

### Stage 4: Management & Geo-Data
**Duration:** 2 Days
**Dependencies:** Stage 3

#### Sub-steps:
- [ ] Integrate React Leaflet for the "Authority Map".
- [ ] Implement Heatmap Layer logic (fetching `geo_data`).
- [ ] Build Kanban Board using `@hello-pangea/dnd` or similar.
- [ ] Setup Campaign Calendar (React Big Calendar).

### Stage 5: Polish & Optimization
**Duration:** 2 Days
**Dependencies:** Stage 4

#### Sub-steps:
- [ ] Stress test RLS policies (Ensure Candidate A cannot see Candidate B).
- [ ] Optimize "Glassmorphism" performance (CSS containment).
- [ ] Implement Error Boundaries and Loading Skeletons ("Premium feel").
- [ ] Final Deployment check on Vercel.