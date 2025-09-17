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
      setIsScrolled(window.scrollY > 20)
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
    <>
      {/* Mobile-First Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav shadow-2xl py-2" : "glass-nav shadow-xl py-4"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Mobile-Optimized Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="text-2xl sm:text-3xl font-bold nav-link group-hover:text-amber-400 transition-colors arabic-text-bold">
                فيلا روزا
              </div>
              <div className="hidden sm:block text-sm text-gray-300 font-semibold">Villa Roza</div>
            </Link>

            {/* Mobile Menu Button & Language Toggle */}
            <div className="flex items-center gap-3">
              <Button
                onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                variant="outline"
                size="sm"
                className="h-10 w-16 border-white/30 hover:bg-white/10 bg-black/50 font-semibold text-white text-xs"
              >
                <Globe className="w-4 h-4 mr-1" />
                {language === "ar" ? "EN" : "عربي"}
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="lg:hidden h-10 w-10 border-white/30 hover:bg-white/10 bg-black/50 text-white p-0"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>

            {/* Desktop Navigation - Hidden on Mobile */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`nav-link px-4 py-2 rounded-full font-bold transition-all duration-300 arabic-text ${
                      isActive ? "active bg-amber-600/20 text-amber-400" : "hover:bg-white/10"
                    }`}
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-black/90 backdrop-blur-xl z-40">
            <div className="p-6 space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 arabic-text font-bold text-lg ${
                      isActive
                        ? "bg-amber-600/20 text-amber-400 shadow-lg"
                        : "text-white hover:bg-white/10 active:bg-white/20"
                    }`}
                  >
                    <div className={`p-2 rounded-xl ${isActive ? "bg-amber-400/20" : "bg-white/10"}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span>{t.nav[item.key as keyof typeof t.nav]}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-nav border-t border-white/10">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`flex flex-col items-center p-2 rounded-xl transition-all duration-300 ${
                  isActive ? "text-amber-400" : "text-white/70 hover:text-white"
                }`}
              >
                <div className={`p-2 rounded-lg ${isActive ? "bg-amber-400/20" : ""}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-xs arabic-text font-semibold mt-1">{t.nav[item.key as keyof typeof t.nav]}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
