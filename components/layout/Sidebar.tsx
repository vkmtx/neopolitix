"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Megaphone, CreditCard, Users, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const navigation = [
  {
    name: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Campaign",
    href: "/campaigns",
    icon: Megaphone,
  },
  {
    name: "Payments",
    href: "/payments",
    icon: CreditCard,
  },
  {
    name: "Influencer",
    href: "/influencer",
    icon: Users,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col bg-white border-r border-slate-200">
      {/* Logo/Header */}
      <div className="flex h-16 items-center px-6 border-b border-slate-200">
        <h1 className="text-xl font-bold text-slate-900">NeoPolitxs</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
          const Icon = item.icon
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-slate-100 text-blue-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5",
                  isActive ? "text-blue-600" : "text-slate-500"
                )}
              />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Become Pro Access Card */}
      <div className="p-4">
        <Card className="bg-gradient-to-br from-blue-600 to-blue-500 border-0 shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-white" />
              <h3 className="text-lg font-semibold text-white">Become Pro Access</h3>
            </div>
            <p className="text-sm text-blue-50 mb-4">
              Unlock advanced features and analytics for your campaign.
            </p>
            <Button
              className="w-full bg-white text-blue-600 hover:bg-blue-50 font-medium"
              size="sm"
            >
              Upgrade Pro
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

