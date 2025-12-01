# Project Structure (Base44 Standard)

## Root Directory
```text
politic-os/
├── app/                        # Next.js App Router
│   ├── (auth)/                 # Public Auth Routes
│   │   ├── login/              # Clean login page
│   ├── (platform)/             # Protected App Routes (Sidebar Layout)
│   │   ├── layout.tsx          # Contains Sidebar + Header + Gray BG
│   │   ├── dashboard/          # Main "War Room"
│   │   ├── campaigns/          # Campaign List
│   │   ├── payments/           # Billing History
│   │   ├── settings/           # User Settings
│   ├── api/                    # Server API
│   ├── globals.css             # Tailwind base (Light mode)
├── components/
│   ├── ui/                     # Shadcn Primitives (Button, Card, Input)
│   ├── layout/                 # Layout Specific
│   │   ├── Sidebar.tsx         # The white sidebar with Blue Upgrade Card
│   │   ├── Header.tsx          # Top navigation
│   ├── dashboard/              # Dashboard specific
│   │   ├── MetricCard.tsx      # White stats card
│   │   ├── GenderChart.tsx     # Recharts component
│   │   ├── ReachMap.tsx        # Map component
├── lib/
│   ├── design-system.ts        # Color tokens
│   ├── supabase.ts             # DB Client
├── Docs/                       # Documentation (THIS FOLDER)

Module Organization Rules
Strict Separation: Admin components must stay in components/admin. Candidate components in components/candidate.
Shadcn UI: Do not modify components/ui directly unless necessary for the "Dark Intelligence" theme. Override styles in globals.css or via props.
Supabase: Always use the typed client from lib/supabase to ensure RLS compliance.

---

### 3. Arquivo: `Docs/UI_UX_doc.md`
*Este arquivo garante que o design não fique com "cara de padrão".*

```markdown
# UI/UX & Design System: "Dark Intelligence"

## Design Philosophy
We are building a "Bloomberg Terminal for Politics". The UI must be high-density, data-rich, and intimidatingly professional.
- **Vibe:** Cyberpunk Corporate / Military Command Center.
- **Mode:** Dark Mode Only (No light mode switch).

## Design System Specifications

### Color Palette (Tailwind)
- **Background Deep:** `slate-950` (#020617) - Main background.
- **Surface Glass:** `slate-900/50` with `backdrop-blur-md` - Cards and Panels.
- **Primary Action:** `blue-600` (#2563eb) - Buttons, active states.
- **Semantic Colors:**
    - **Positive (Hope):** `emerald-500` (#10b981)
    - **Negative (Fear):** `rose-500` (#f43f5e)
    - **Warning (Alert):** `amber-400` (#fbbf24)
- **Text:**
    - **Headings:** `slate-50`
    - **Body:** `slate-300`
    - **Muted:** `slate-500`

### Typography
- **UI Elements:** `Inter` (Sans-serif) - Clean readability.
- **Data/Numbers/KPIs:** `JetBrains Mono` (Monospace) - Precision feel.

### Component Guidelines

#### 1. KPI Cards
- **Style:** Glassmorphism background, subtle border `border-slate-800`.
- **Content:** Big number (Mono), label (Inter small caps), trend indicator (Icon).

#### 2. The "Ticker"
- A scrolling marquee at the top of the War Room showing latest news headlines.
- Must feel like a 24h news channel.

#### 3. Command Palette (`Cmd+K`)
- The primary navigation method for power users.
- Accessible from anywhere in the app.

#### 4. Maps
- Dark tile layer (CartoDB Dark Matter or similar).
- Neon overlays for heatmaps.

### Responsive Requirements
- **Desktop First:** The primary persona uses this on a large monitor in an office.
- **Mobile Support:** "Read-only" mode optimized for candidates checking stats on the go. Complex management forms can be hidden on mobile.