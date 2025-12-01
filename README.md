# NeoPolitxs - Political Management Platform

SaaS platform for political campaign management built with Next.js 14, TypeScript, and Tailwind CSS.

## Design System

This project uses the **"Clean SaaS"** design system:
- **Background:** Slate-50 (#F8FAFC)
- **Surface:** White (#FFFFFF)
- **Primary:** Blue-600 (#2563EB)
- **Typography:** Inter font family

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── (platform)/          # Protected routes with Sidebar + Header
│   │   ├── dashboard/       # Main dashboard
│   │   ├── campaigns/       # Campaign management
│   │   ├── payments/        # Billing history
│   │   └── influencer/      # Influencer management
│   └── globals.css          # Global styles (Light mode)
├── components/
│   ├── ui/                  # Shadcn/ui components
│   └── layout/              # Sidebar and Header
└── lib/
    └── utils.ts             # Utility functions
```

## Implementation Status

- ✅ **Stage 1:** Foundation & Design Setup
- ✅ **Stage 2:** Sidebar & Header Layout
- ⏳ **Stage 3:** Dashboard (War Room) - Pending
- ⏳ **Stage 4:** Campaign & Admin Lists - Pending
- ⏳ **Stage 5:** Polish - Pending

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui (Radix Primitives)
- **Icons:** Lucide React

