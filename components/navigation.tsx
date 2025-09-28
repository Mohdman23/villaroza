"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X, Home, User, Briefcase, Phone, ShoppingBag, Sparkles, Zap } from "lucide-react"
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
  const [isAnimating, setIsAnimating] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  const t = translations[language]
  const isRTL = language === "ar"

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
      
      // Add animation class when scrolling
      if (navRef.current) {
        if (scrolled) {
          navRef.current.classList.add('nav-scrolled')
        } else {
          navRef.current.classList.remove('nav-scrolled')
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLanguageToggle = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setLanguage(language === "ar" ? "en" : "ar")
      setIsAnimating(false)
    }, 150)
  }

  const navItems = [
    { key: "home", href: "/", icon: Home },
    { key: "about", href: "/about", icon: User },
    { key: "services", href: "/services", icon: Briefcase },
    { key: "collections", href: "/collections", icon: ShoppingBag },
    { key: "contact", href: "/contact", icon: Phone },
  ]

  return (
    <>
      {/* Enhanced Navigation */}
      <nav
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "glass-nav shadow-2xl py-0.5" : "glass-nav shadow-xl py-1 sm:py-4"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Enhanced Logo with Animation */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="glass-card w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                  <Sparkles className="w-5 h-5 text-amber-400 group-hover:text-yellow-300 transition-colors" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl sm:text-3xl font-bold nav-link group-hover:text-amber-400 transition-colors arabic-text-bold bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                  فيلا روزا
                </div>
                <div className="hidden sm:block text-xs text-gray-300 font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
                  Villa Roza
                </div>
              </div>
            </Link>

            {/* Enhanced Controls */}
            <div className="flex items-center gap-3">
              <Button
                onClick={handleLanguageToggle}
                variant="outline"
                size="sm"
                className={`h-10 w-16 border-white/30 hover:bg-white/10 bg-black/50 font-semibold text-white text-xs transition-all duration-300 hover:scale-105 ${
                  isAnimating ? 'animate-pulse' : ''
                }`}
              >
                <Globe className={`w-4 h-4 mr-1 transition-transform duration-300 ${isAnimating ? 'rotate-180' : ''}`} />
                {language === "ar" ? "EN" : "عربي"}
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="lg:hidden h-10 w-10 border-white/30 hover:bg-white/10 bg-black/50 text-white p-0 transition-all duration-300 hover:scale-105"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="relative">
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 animate-scale-in" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </div>
              </Button>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`nav-link px-6 py-1 sm:py-3 rounded-2xl font-bold transition-all duration-300 arabic-text group relative overflow-hidden ${
                      isActive 
                        ? "active bg-amber-600/20 text-amber-400 shadow-lg shadow-amber-400/20" 
                        : "hover:bg-white/10 hover:scale-105"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{t.nav[item.key as keyof typeof t.nav]}</span>
                    </div>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"></div>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-black z-40 animate-fade-in">
            <div className="p-6 space-y-3">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 arabic-text font-bold text-lg group hover:scale-105 ${
                      isActive
                        ? "bg-amber-600/20 text-amber-400 shadow-lg shadow-amber-400/20"
                        : "text-white hover:bg-white/10 active:bg-white/20"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      isActive ? "bg-amber-400/20 shadow-lg" : "bg-white/10"
                    }`}>
                      <item.icon className="w-6 h-6 group-hover:text-amber-400 transition-colors" />
                    </div>
                    <span className="group-hover:text-amber-400 transition-colors">
                      {t.nav[item.key as keyof typeof t.nav]}
                    </span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Mobile Bottom Navigation */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-nav border-t border-white/10 shadow-2xl"
        style={{
          paddingBottom: "env(safe-area-inset-bottom)",
          position: "fixed",
          bottom: "0",
          width: "100%",
        }}
      >
        <div className="flex justify-around items-center py-1 px-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`flex flex-col items-center p-1 rounded-2xl transition-all duration-300 min-w-0 flex-1 group hover:scale-105 ${
                  isActive ? "text-amber-400" : "text-white/70 hover:text-white"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`p-1 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                  isActive ? "bg-amber-400/20 shadow-lg shadow-amber-400/20" : "group-hover:bg-white/10"
                }`}>
                  <item.icon className="w-5 h-5 group-hover:text-amber-400 transition-colors" />
                </div>
                <span className="text-xs arabic-text font-semibold mt-1 truncate group-hover:text-amber-400 transition-colors">
                  {t.nav[item.key as keyof typeof t.nav]}
                </span>
                {isActive && (
                  <div className="absolute -top-1 w-1 h-1 bg-amber-400 rounded-full animate-pulse"></div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
