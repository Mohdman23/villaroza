"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X, Home, User, Briefcase, Phone, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      collections: "مجموعاتنا",
      contact: "تواصل معنا",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      collections: "Collections",
      contact: "Contact",
    },
  },
}

export default function Navigation() {
  const [language, setLanguage] = useState<"ar" | "en">("ar")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const t = translations[language]
  const isRTL = language === "ar"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { key: "home", href: "/", icon: Home },
    { key: "about", href: "/about", icon: User },
    { key: "services", href: "/services", icon: Briefcase },
    { key: "collections", href: "/collections", icon: ShoppingBag },
    { key: "contact", href: "/contact", icon: Phone },
  ]

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300 glass-nav shadow-xl"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="text-3xl font-bold nav-link group-hover:text-amber-600 transition-colors arabic-text-bold">
              فيلا روزا
            </div>
            <div className="hidden sm:block text-lg text-gray-300 font-semibold">Villa Roza</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`nav-link px-6 py-3 rounded-full font-bold transition-all duration-300 arabic-text text-lg ${
                    isActive ? "active bg-amber-600/20 text-amber-400" : "hover:bg-white/10"
                  }`}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </Link>
              )
            })}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 border-white/30 hover:bg-white/10 bg-black/50 font-semibold text-white"
            >
              <Globe className="w-5 h-5" />
              <span>{language === "ar" ? "EN" : "عربي"}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden border-white/30 hover:bg-white/10 bg-black/50 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-nav border-t border-white/10 shadow-xl">
            <div className="px-4 py-8 space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 arabic-text font-semibold text-lg ${
                      isActive ? "bg-amber-600/20 text-amber-400" : "text-white hover:bg-white/10"
                    }`}
                  >
                    <item.icon className="w-6 h-6" />
                    <span>{t.nav[item.key as keyof typeof t.nav]}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
