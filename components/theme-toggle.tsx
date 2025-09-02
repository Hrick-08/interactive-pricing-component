"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = resolvedTheme === "dark"
  const onToggle = (v: boolean) => {
    setTheme(v ? "dark" : "light")
  }

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div
      className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur dark:bg-secondary cursor-pointer"
      role="group"
      aria-label="Theme"
      onClick={() => onToggle(!isDark)}
    >
      <Label htmlFor="dark-mode" className="text-xs text-muted-foreground select-none">
        Dark mode
      </Label>
      <Switch id="dark-mode" checked={isDark} onCheckedChange={onToggle} aria-label="Toggle dark mode" />
    </div>
  )
}
