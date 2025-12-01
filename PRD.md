Product Requirements Document (PRD): PoliticOS
Project Name: PoliticOS (SaaS Political Management Platform) Version: 1.0 Status: Draft / Ready for Implementation Plan Date: December 1, 2025

1. Executive Summary
PoliticOS is a high-end, multi-tenant SaaS platform designed to act as the "Bloomberg Terminal" for political campaigns. It provides real-time intelligence, strategic AI simulations, and campaign management tools wrapped in a high-density, "Dark Intelligence" user interface. The platform serves two distinct user groups: Political Agencies (managing multiple campaigns) and Candidates (managing their specific election efforts).

2. User Personas & Roles
2.1. Super Admin (The Agency)
Description: Political consultancy firms or marketing agencies.
Goals: Manage multiple client contracts, oversee global sentiment across campaigns, onboard new candidates, handle billing.
Access Level: Full access to all tenants (candidates) and global configurations.
2.2. The Candidate (The Client)
Description: Politicians, Campaign Managers, and strategic staff.
Goals: View real-time campaign health, monitor news and sentiment, receive strategic AI advice, manage schedule and street teams.
Access Level: Restricted strictly to their own candidate_id data via Row Level Security (RLS).
3. Core Features & Functional Requirements
3.1. Authentication & Security
Multi-Tenant Architecture: Strict data isolation between candidates.
RLS (Row Level Security): Database policies ensuring candidates can never access data outside their scope.
Role-Based Access Control (RBAC): Admin vs. Candidate roles managed via profiles table linked to Supabase Auth.
Secure Login: Custom login page with redirect logic based on user role (/dashboard vs /war-room).
3.2. The "War Room" (Candidate Dashboard)
High-Density UI: A single-view dashboard containing critical metrics.
Real-time Ticker: Scrolling top bar with latest news headlines.
KPI Cards:
Authority Score: Calculated metric (0-100) based on engagement and sentiment.
Digital Reach: Aggregated follower/view counts.
Crisis Alert: Counter of negative mentions in the last 24h.
Shadow Opponent (AI Module): An AI chat interface that simulates a rival politician, analyzing the candidate's current news and generating counter-arguments/attacks to help the team prepare defenses.
3.3. Political Intelligence (News & Sentiment)
N8n Integration: Webhook endpoint (/api/webhooks/news) to receive processed news.
Data Structure: JSON payload containing Title, Summary, Sentiment Score (-1 to 1), Source, and Emotional Tags (e.g., "Fear", "Hope", "Anger").
Feed Interface: Searchable, filterable list of news items with AI-generated summaries.
3.4. AI Strategy & Scenarios
Scenario Generator: On-demand AI analysis using OpenAI (GPT-4).
Outputs: Generates three distinct scenarios based on current data:
Optimistic: Best case growth.
Pessimistic: Crisis management.
Realistic: Most probable outcome.
3.5. Geospatial Intelligence (The Map)
Interactive Map: Leaflet-based map focused on specific regions (e.g., Maranhão).
Heatmaps: Visualization layers for:
Voter Density/Authority: Where the candidate is strong/weak.
Campaign Activity: Where events have occurred.
Points of Interest: Markers for polling stations and past rallies.
3.6. Campaign Management (Tasks & Calendar)
Kanban Board: Drag-and-drop task management (To Do, In Progress, Done).
Calendar: Event scheduling view (Rallies, Interviews, Meetings).
Gamification (Future): XP system for street teams completing tasks (foundational structure only).
3.7. Admin Dashboard (Agency View)
Client Overview: Table list of all active candidates/campaigns.
Global Stats: Total active campaigns, aggregate sentiment.
Onboarding: Form to create new Candidates (automatically generating Auth User + Profile + Candidate Metadata).
4. Technical Architecture
4.1. Tech Stack
Frontend: Next.js 14 (App Router), React, TypeScript.
Styling: Tailwind CSS, tailwindcss-animate, Shadcn/ui (Radix Primitives).
State Management: Zustand (Client state), TanStack Query (Server state/Caching).
Backend/DB: Supabase (PostgreSQL, Auth, Edge Functions, Vector).
AI: OpenAI SDK.
Maps: Leaflet / React-Leaflet.
Charts: Recharts.
4.2. Database Schema (Key Tables)
profiles: Links Auth ID to Role and Candidate ID.
candidates: Metadata (Name, Party, State, Contract Status).
political_intelligence: News items, embeddings, sentiment scores, emotional tags.
political_scenarios: AI-generated strategic reports.
geo_data: Lat/Lng points with intensity scores for heatmaps.
campaign_events: Calendar data.
campaign_tasks: Kanban items.
4.3. Project Structure
Must follow Base44 standard for modularity.
Strict separation of (admin), (candidate), and (auth) route groups.
5. UI/UX Design System ("Dark Intelligence")
5.1. Design Philosophy
Theme: "The War Room". Professional, intimidating, high-tech.
Base Colors: Deep Slates (slate-950, slate-900).
Surface: Glassmorphism (backdrop-blur-md, bg-slate-800/50).
Accents:
Primary: Blue-600 (Action).
Positive: Emerald-500 (Growth).
Negative: Rose-500 (Crisis).
Warning: Amber-400 (Alerts).
Typography:
UI Elements: Inter (Sans-serif).
Data/Numbers: JetBrains Mono (Monospace).
5.2. Key Components
Command Palette (Cmd+K): Global navigation for power users.
Toast Notifications: For real-time updates (webhook hits).
Sidebar: Collapsible, role-specific navigation.
6. Implementation Priorities
Foundation: Setup Next.js 14, Supabase connection, Auth logic, and Design System tokens.
Core Data: Database migrations (RLS policies are critical).
Candidate View: War Room layout, Intelligence Feed, and AI "Shadow Opponent".
Admin View: Candidate creation and management.
Visuals: Map integration and Charts.