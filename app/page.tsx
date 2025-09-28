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
  Instagram,
  Facebook,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import ImageSlider from "@/components/image-slider"

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
    { number: "15+", label: "سنوات خبرة", icon: Award },
    { number: "500+", label: "مشروع مكتمل", icon: Home },
    { number: "1000+", label: "عميل سعيد", icon: Users },
    { number: "50+", label: "جائزة تميز", icon: Star },
  ]

  // Mobile Slider Data - Scene Descriptive Images
  const mobileSliderItems = [
    {
      image: "/images/beige-bathroom-gold-accents.jpg",
      title: "حمام فاخر بالرخام البيج واللمسات الذهبية",
      description: "تصميم حمام فاخر بالرخام البيج مع لمسات ذهبية أنيقة وتجهيزات عصرية"
    },
    {
      image: "/images/modern-grey-bathroom-complete.jpg",
      title: "حمام رمادي عصري متكامل",
      description: "حمام رمادي عصري مع تجهيزات متكاملة وتصميم معاصر"
    },
    {
      image: "/images/lightmarblebathroomcomplete.jpeg",
      title: "حمام رخامي فاتح متكامل",
      description: "حمام رخامي فاتح بتصميم متكامل مع تجهيزات فاخرة"
    },
    {
      image: "/images/modernbathroomcomplete4.jpeg",
      title: "حمام عصري متكامل",
      description: "حمام عصري متكامل مع تجهيزات عصرية وتصميم أنيق"
    },
    {
      image: "/images/whitesinkmodernbathroommodernmirrorovalLshapedbathroom.jpeg",
      title: "حمام أبيض عصري على شكل L",
      description: "حمام أبيض عصري بتصميم L مع مرآة بيضاوية ومغسلة عصرية"
    }
  ]

  // Desktop Slider Data - Scene Descriptive Images
  const desktopSliderItems = [
    {
      image: "/images/beige-bathroom-gold-accents.jpg",
      title: "حمام فاخر بالرخام البيج واللمسات الذهبية",
      description: "تصميم حمام فاخر بالرخام البيج مع لمسات ذهبية أنيقة وتجهيزات عصرية"
    },
    {
      image: "/images/modern-grey-bathroom-complete.jpg",
      title: "حمام رمادي عصري متكامل",
      description: "حمام رمادي عصري مع تجهيزات متكاملة وتصميم معاصر"
    },
    {
      image: "/images/lightmarblebathroomcomplete.jpeg",
      title: "حمام رخامي فاتح متكامل",
      description: "حمام رخامي فاتح بتصميم متكامل مع تجهيزات فاخرة"
    },
    {
      image: "/images/modernbathroomcomplete4.jpeg",
      title: "حمام عصري متكامل",
      description: "حمام عصري متكامل مع تجهيزات عصرية وتصميم أنيق"
    },
    {
      image: "/images/whitesinkmodernbathroommodernmirrorovalLshapedbathroom.jpeg",
      title: "حمام أبيض عصري على شكل L",
      description: "حمام أبيض عصري بتصميم L مع مرآة بيضاوية ومغسلة عصرية"
    }
  ]

  const services = [
    {
      title: "البلاط البورسلان الفاخر",
      description: "بلاط بورسلان عالي الجودة بتصاميم عصرية من أفضل المصانع العالمية",
      icon: Home,
      features: ["بورسلان إسباني", "مقاسات متنوعة", "تصاميم عصرية"],
      image: "/images/modernbathroomwithporcelaintiles.jpeg",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "تجهيزات الحمامات الفاخرة",
      description: "تصاميم حمامات عصرية مع مغاسل وأحواض رخامية وكريستالية فاخرة",
      icon: Palette,
      features: ["أحواض رخامية", "مغاسل كريستالية", "تصاميم معاصرة"],
      image: "/images/lightmarblebathroomcomplete.jpeg",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "بلاط BEVELLED المتميز",
      description: "مجموعة شاملة من بلاط BEVELLED بألوان متنوعة للمطابخ والحمامات",
      icon: Lightbulb,
      features: ["ألوان متنوعة", "تشطيب مشطوف", "جودة عالية"],
      image: "/images/modernbathroomcomplete4.jpeg",
      color: "from-orange-500 to-red-600",
    },
  ]

  const testimonials = [
    {
      name: "أحمد محمد",
      text: "فيلا روزا حولت منزلي إلى تحفة فنية حقيقية. الخدمة كانت استثنائية والنتيجة فاقت كل التوقعات",
      rating: 5,
      project: "فيلا سكنية - عبدون",
      avatar: "أ",
    },
    {
      name: "سارة أحمد",
      text: "فريق محترف ومبدع. اهتمام بالتفاصيل والجودة العالية جعلني أنصح بهم لكل من يريد تصميماً مميزاً",
      rating: 5,
      project: "شقة عصرية - الدوار السابع",
      avatar: "س",
    },
    {
      name: "محمد العلي",
      text: "خبرة واسعة وذوق رفيع في التصميم. النتيجة كانت أكثر من رائعة وتم التسليم في الوقت المحدد",
      rating: 5,
      project: "مكتب تجاري - العبدلي",
      avatar: "م",
    },
  ]

  return (
    <div className="min-h-screen pb-8 lg:pb-0" dir="rtl">
      <Navigation />

      {/* Mobile-First Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 px-4">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center lg:text-right lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Content */}
            <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} mb-8 lg:mb-0`}>
              <Badge className="mb-3 badge-glass px-4 py-2 text-sm font-semibold rounded-full inline-block">
                البورسلان والسيراميك الفاخر
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight text-stone-light arabic-text-bold">
                فيلا روزا
              </h1>

              <p className="text-lg sm:text-xl text-stone-muted mb-6 leading-relaxed arabic-text max-w-2xl mx-auto lg:mx-0">
                متخصصون في توفير أجود أنواع البلاط البورسلان والسيراميك وتجهيزات الحمامات الفاخرة من أرقى الماركات
                العالمية
              </p>

              {/* Mobile Image Slider - Only on Mobile, under description */}
              <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} mb-6 lg:hidden`}>
                <ImageSlider 
                  items={mobileSliderItems}
                  className="w-full"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center lg:justify-start">
                <a 
                  href="https://www.instagram.com/villarozajordan/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full btn-gold px-8 py-4 rounded-2xl text-lg font-bold group shadow-2xl"
                  >
                    <Instagram className="w-5 h-5 ml-2" />
                    تابعنا على إنستغرام
                    <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a 
                  href="https://www.facebook.com/villarozajo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto btn-outline-light px-8 py-4 rounded-2xl text-lg font-bold"
                  >
                    <Facebook className="w-5 h-5 ml-2" />
                    تابعنا على فيسبوك
                  </Button>
                </a>
              </div>

              {/* Mobile-Optimized Stats */}
              <div className="grid grid-cols-4 gap-3">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="glass-card w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400" />
                    </div>
                    <div className="text-lg sm:text-2xl font-bold text-stone-light mb-1 arabic-text-bold">
                      {stat.number}
                    </div>
                    <div className="text-stone-muted font-semibold arabic-text text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>


            {/* Desktop Image Slider - Only on Desktop */}
            <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} relative mt-8 lg:mt-0 hidden lg:block`}>
              <ImageSlider 
                items={desktopSliderItems}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-3 badge-glass px-4 py-2 text-sm font-semibold rounded-full">خدماتنا المتخصصة</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-stone-light arabic-text-bold">
              نحول أحلامك إلى واقع
            </h2>
            <p className="text-lg text-stone-muted max-w-2xl mx-auto leading-relaxed arabic-text">
              نقدم خدمات شاملة في البلاط والتجهيزات بأعلى معايير الجودة والإبداع
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group glass-card border-0 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-white arabic-text-bold">{service.title}</h3>
                  <p className="text-stone-muted mb-3 leading-relaxed arabic-text">{service.description}</p>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-stone-muted arabic-text text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/services">
                    <Button className="w-full btn-gold rounded-xl py-3 font-bold">
                      اعرف المزيد
                      <ChevronRight className="w-4 h-4 mr-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-3 badge-glass px-4 py-2 text-sm font-semibold rounded-full">آراء عملائنا</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-stone-light arabic-text-bold">
              قصص نجاح حقيقية
            </h2>
          </div>

          <div className="relative">
            <div className="glass-dark rounded-3xl p-8 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl sm:text-2xl font-medium mb-8 leading-relaxed arabic-text text-white">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="glass-card w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-lg arabic-text-bold">
                    {testimonials[currentTestimonial].avatar}
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg arabic-text-bold text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-300 arabic-text">{testimonials[currentTestimonial].project}</div>
                </div>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-amber-400 scale-125" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-dark rounded-3xl p-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white arabic-text-bold">
              هل أنت مستعد للبدء؟
            </h2>
            <p className="text-lg mb-6 text-white/90 leading-relaxed arabic-text">
              تواصل معنا اليوم واحصل على استشارة مجانية لتحويل مساحتك إلى تحفة فنية
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full btn-gold px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 arabic-text"
                >
                  <Phone className="w-5 h-5 ml-2" />
                  تواصل معنا الآن
                </Button>
              </Link>
              <Link href="/collections" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full btn-outline-light px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 arabic-text"
                >
                  <Eye className="w-5 h-5 ml-2" />
                  شاهد مجموعاتنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Footer */}
      <footer className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-dark rounded-3xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-3 arabic-text-bold">فيلا روزا</h3>
              <p className="text-white/80 mb-6 arabic-text">شركة رائدة في مجال البلاط وتجهيزات الحمامات في الأردن</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <Phone className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                  <p className="text-white/90" dir="ltr">
                    +962 7 9658 9330
                  </p>
                </div>
                <div className="text-center">
                  <Mail className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                  <p className="text-white/90">villa_roza@hotmail.com</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                  <p className="text-white/90">عمان، الأردن</p>
                </div>
              </div>

              <div className="border-t border-white/30 pt-4">
                <p className="text-white/70 arabic-text">© 2024 فيلا روزا. جميع الحقوق محفوظة</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
