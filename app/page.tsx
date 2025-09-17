"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronRight,
  ArrowRight,
  Home,
  Palette,
  Lightbulb,
  Award,
  Users,
  Eye,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { number: "15+", label: "سنوات من الخبرة", icon: Award },
    { number: "500+", label: "مشروع مكتمل", icon: Home },
    { number: "1000+", label: "عميل سعيد", icon: Users },
    { number: "50+", label: "جائزة تميز", icon: Star },
  ]

  const services = [
    {
      title: "البلاط البورسلان الفاخر",
      description: "بلاط بورسلان عالي الجودة بتصاميم عصرية ومقاسات متنوعة من أفضل المصانع العالمية",
      icon: Home,
      features: ["بورسلان إسباني فاخر", "مقاسات متنوعة", "تصاميم عصرية"],
      image: "/images/porcelain-display.jpg",
    },
    {
      title: "تجهيزات الحمامات الفاخرة",
      description: "تصاميم حمامات عصرية مع مغاسل وأحواض رخامية وكريستالية من أرقى الماركات العالمية",
      icon: Palette,
      features: ["أحواض رخامية فاخرة", "مغاسل كريستالية", "تصاميم معاصرة"],
      image: "/images/luxury-black-marble-complete.jpg",
    },
    {
      title: "بلاط BEVELLED المتميز",
      description: "مجموعة شاملة من بلاط BEVELLED بألوان متنوعة (10×30 سم) للمطابخ والحمامات العصرية",
      icon: Lightbulb,
      features: ["ألوان متنوعة", "تشطيب مشطوف", "جودة عالية"],
      image: "/images/bevelled-white-kitchen.jpg",
    },
  ]

  const testimonials = [
    {
      name: "أحمد محمد",
      text: "فيلا روزا حولت منزلي إلى تحفة فنية حقيقية. الخدمة كانت استثنائية والنتيجة فاقت كل التوقعات",
      rating: 5,
      project: "فيلا سكنية - عبدون",
    },
    {
      name: "سارة أحمد",
      text: "فريق محترف ومبدع. اهتمام بالتفاصيل والجودة العالية جعلني أنصح بهم لكل من يريد تصميماً مميزاً",
      rating: 5,
      project: "شقة عصرية - الدوار السابع",
    },
    {
      name: "محمد العلي",
      text: "خبرة واسعة وذوق رفيع في التصميم. النتيجة كانت أكثر من رائعة وتم التسليم في الوقت المحدد",
      rating: 5,
      project: "مكتب تجاري - العبدلي",
    },
  ]

  return (
    <div className="min-h-screen" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              <Badge className="mb-6 badge-glass px-8 py-4 text-lg font-semibold rounded-full">
                البورسلان والسيراميك الفاخر
              </Badge>

              <h1 className="text-7xl lg:text-9xl font-bold mb-8 leading-tight text-stone-light arabic-text-bold">
                فيلا روزا
              </h1>

              <p className="text-2xl text-stone-muted mb-12 leading-relaxed arabic-text">
                متخصصون في توفير أجود أنواع البلاط البورسلان والسيراميك وتجهيزات الحمامات الفاخرة من أرقى الماركات
                العالمية
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Link href="/collections">
                  <Button size="lg" className="btn-gold px-12 py-6 rounded-full text-xl font-bold group">
                    <Eye className="w-6 h-6 ml-3" />
                    اكتشف مجموعاتنا
                    <ArrowRight className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" className="btn-outline-light px-12 py-6 rounded-full text-xl font-bold">
                  <Phone className="w-6 h-6 ml-3" />
                  +962 7 9658 9330
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group hover-lift">
                    <div className="glass-card w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-10 h-10 text-amber-400" />
                    </div>
                    <div className="text-4xl font-bold text-stone-light mb-2 arabic-text-bold">{stat.number}</div>
                    <div className="text-stone-muted font-semibold arabic-text">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} relative`}>
              <div className="relative group">
                <div className="glass-card rounded-3xl shadow-2xl overflow-hidden card-hover">
                  <Image
                    src="/images/porcelain-display.jpg"
                    alt="Villa Roza Porcelain Display"
                    width={600}
                    height={700}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 badge-glass px-8 py-4 text-lg font-semibold rounded-full">خدماتنا المتخصصة</Badge>
            <h2 className="text-6xl lg:text-7xl font-bold mb-8 text-stone-light arabic-text-bold">
              نحول أحلامك إلى واقع
            </h2>
            <p className="text-xl text-stone-muted max-w-3xl mx-auto leading-relaxed arabic-text">
              نقدم خدمات شاملة في البلاط والتجهيزات بأعلى معايير الجودة والإبداع
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift glass-card border-0 overflow-hidden card-hover">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="icon-container w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-10 h-10 text-amber-400" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 card-text-light arabic-text-bold">{service.title}</h3>

                  <p className="card-text-muted mb-6 leading-relaxed arabic-text">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="card-text-muted arabic-text">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full btn-gold rounded-lg py-4 font-bold text-lg">
                    اعرف المزيد
                    <ChevronRight className="w-5 h-5 mr-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 badge-glass px-8 py-4 text-lg font-semibold rounded-full">آراء عملائنا</Badge>
            <h2 className="text-6xl lg:text-7xl font-bold mb-8 text-stone-light arabic-text-bold">قصص نجاح حقيقية</h2>
          </div>

          <div className="relative">
            <div className="glass-dark rounded-3xl p-16 text-center">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-3xl lg:text-4xl font-medium mb-10 leading-relaxed arabic-text text-white">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center gap-6">
                <div className="glass-card w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-2xl arabic-text-bold">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-2xl arabic-text-bold text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-300 text-lg arabic-text">{testimonials[currentTestimonial].project}</div>
                </div>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-dark rounded-3xl p-20">
            <h2 className="text-6xl lg:text-7xl font-bold mb-10 text-white arabic-text-bold">هل أنت مستعد للبدء؟</h2>
            <p className="text-2xl mb-16 text-white/90 leading-relaxed arabic-text max-w-3xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية لتحويل مساحتك إلى تحفة فنية
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="btn-gold px-16 py-6 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 arabic-text"
                >
                  <Phone className="w-6 h-6 ml-3" />
                  تواصل معنا الآن
                </Button>
              </Link>
              <Link href="/collections">
                <Button
                  size="lg"
                  className="btn-outline-light px-16 py-6 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 arabic-text"
                >
                  <Eye className="w-6 h-6 ml-3" />
                  شاهد مجموعاتنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-dark rounded-3xl p-16">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-8 arabic-text-bold">فيلا روزا</h3>
              <p className="text-white/80 mb-12 max-w-2xl mx-auto text-xl arabic-text">
                شركة رائدة في مجال البلاط وتجهيزات الحمامات في الأردن
              </p>

              <div className="flex justify-center gap-12 mb-12">
                <div className="text-center">
                  <Phone className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                  <p className="text-white/90 text-lg">+962 7 9658 9330</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                  <p className="text-white/90 text-lg">villa_roza@hotmail.com</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                  <p className="text-white/90 text-lg">عمان، الأردن</p>
                </div>
              </div>

              <div className="border-t border-white/30 pt-8">
                <p className="text-white/70 text-lg arabic-text">© 2024 فيلا روزا. جميع الحقوق محفوظة</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
