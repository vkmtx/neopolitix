# UI/UX & Design System: "Modern Clean SaaS"

## Design Philosophy
We are building a "Clean & Airy" SaaS platform. The focus is on clarity, whitespace, and a welcoming professional environment.
- **Vibe:** Modern, Approachable, High-Clarity (Stripe-like / Linear-like Light Mode).
- **Mode:** **Light Mode Default**. Dark mode is secondary or disabled for MVP.

## Design System Specifications

### Color Palette (Tailwind)
- **App Background:** `slate-50` (#F8FAFC) - A very soft gray/blue tint.
- **Surface (Cards/Sidebar):** `white` (#FFFFFF) - Pure white.
- **Primary Action:** `blue-600` (#2563EB) to `blue-500` - Vibrant, electric blue.
- **Text:**
    - **Headings:** `slate-900` (#0F172A) - Deep dark blue/gray (never pure black).
    - **Body:** `slate-600` (#475569).
    - **Muted:** `slate-400`.
- **Borders:** `slate-200` (#E2E8F0) - Very subtle.

### Shape & Geometry
- **Border Radius:**
    - Cards: `rounded-xl` (Extra Large).
    - Buttons: `rounded-lg` or `rounded-full` (for icon buttons).
    - Main Container: `rounded-2xl` (for the dashboard area).
- **Shadows:**
    - Cards: `shadow-sm` (diffused).
    - Hover: `shadow-md` + subtle `translate-y-[-2px]`.

### Key Components

#### 1. Sidebar (Navigation)
- **Background:** Pure White.
- **Style:** Minimal icons on the left.
- **Active State:** Light Blue/Gray background (`bg-slate-100`) with Primary Color Icon.
- **"Pro Access" Card:**
    - Located at the bottom of the sidebar.
    - Background: **Blue Gradient** (Linear `from-blue-600 to-blue-500`).
    - Content: White text, "Upgrade Pro" button inside.
    - Shape: Highly rounded (`rounded-2xl`).

#### 2. KPI Cards (Dashboard)
- **Style:** White card floating on the gray background.
- **Layout:** Icon on top left, Big Metric in middle, Label at bottom.
- **No Borders:** Rely on soft shadows to separate from background.

#### 3. Charts Area
- **Container:** White card.
- **Grid Lines:** Very light gray (`stroke-slate-100`).
- **Tooltips:** Dark gray background (high contrast).

#### 4. Top Header
- **Style:** Minimalist.
- **Search Bar:** Pill-shaped or soft rounded rectangle, light gray background.
- **User Profile:** Avatar with name on the right.

### Responsive Requirements
- **Desktop First:** Optimized for wide screens (dashboard view).
- **Mobile:** Sidebar collapses into a Hamburger menu or bottom tab bar.