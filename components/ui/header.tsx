"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Building2, Menu, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface NavLink {
  name: string
  path: string
  icon?: React.ReactNode
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  // Property management related navigation links
  const propertyLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Buy", path: "/buy" },
    { name: "Sell", path: "/sell" },
    { name: "Rent", path: "/rent" },
    { name: "Properties", path: "/properties" },
  ]

  // Company related links
  const companyLinks: NavLink[] = [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
  ]

  // User related links
  const userLinks: NavLink[] = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
    { name: "Dashboard", path: "/dashboard" },
  ]

  return (
    <header className="relative w-full z-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-primary/10 to-transparent -z-10 blur-xl" />
      <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-gradient-to-l from-secondary/10 to-transparent -z-10 blur-xl" />

      {/* Accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative p-2 bg-gradient-to-br from-primary to-secondary rounded-lg mr-3 shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                PropManage
              </span>
              <span className="text-xs text-muted-foreground">Property Management System</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Property Links Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-base">
                  Properties
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                {propertyLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link href={link.path} className="w-full cursor-pointer">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Company Links */}
            {companyLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="relative px-3 py-2 text-base font-medium group"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <span className={cn("transition-colors duration-200", hoveredLink === link.name ? "text-primary" : "")}>
                  {link.name}
                </span>
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <ModeToggle />

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {userLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link href={link.path} className="w-full cursor-pointer">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="grid grid-cols-1 gap-2">
              {propertyLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              {companyLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              {userLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="px-3 py-2 rounded-md hover:bg-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary" />
    </header>
  )
}

