"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Palette, Lightbulb, Clock, CheckCircle, ArrowRight, Star, Phone, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      title: "البلاط البورسلان والسيراميك الفاخر",
      subtitle: "أجود أنواع البلاط البورسلان والسيراميك من المصانع العالمية",
      description:
        "نوفر مجموعة واسعة من البلاط البورسلان عالي الجودة والسيراميك الفاخر بتصاميم عصرية ومقاسات متنوعة من أفضل المصانع الإسبانية والإيطالية، مع خدمات تركيب متخصصة وضمان شامل.",
      icon: Home,
      features: [
        "بلاط بورسلان إسباني فاخر بمقاسات متنوعة",
        "سيراميك عالي الجودة مقاوم للخدوش والبقع",
        "تصاميم عصرية تناسب جميع الأذواق",
        "مقاوم للرطوبة والعوامل الجوية",
        "ألوان ثابتة لا تتأثر بالشمس والاستخدام",
        "ضمان الجودة والمتانة لمدة 10 سنوات",
      ],
      price: "من 12 دينار/متر مربع",
      duration: "1-2 أسابيع",
      image: "/images/porcelain-display.jpg",
    },
    {
      title: "تصاميم وتجهيزات الحمامات الفاخرة",
      subtitle: "حمامات عصرية بأحدث التصاميم والتجهيزات",
      description:
        "نقدم خدمات تصميم الحمامات العصرية مع توفير مغاسل فاخرة وأحواض متنوعة من أرقى الماركات العالمية، مع التركيز على الجودة والأناقة والتصاميم المعاصرة التي تناسب جميع الأذواق.",
      icon: Palette,
      features: [
        "تصاميم حمامات مودرن وكلاسيك",
        "أحواض رخامية وكريستالية فاخرة",
        "مغاسل زجاجية وسيراميك عالية الجودة",
        "كابينة دش عصرية مع إضاءة LED",
        "إكسسوارات حمامات كاملة ومتطورة",
        "تركيب وصيانة شاملة مع ضمان 5 سنوات",
      ],
      price: "من 1200 دينار/حمام",
      duration: "3-4 أسابيع",
      image: "/images/luxury-black-marble-bathroom.jpg",
    },
    {
      title: "بلاط BEVELLED العصري",
      subtitle: "بلاط مشطوف بألوان متنوعة للمطابخ والحمامات",
      description:
        "مجموعة شاملة من بلاط BEVELLED المشطوف (10×30 سم) بألوان متنوعة تشمل الأزرق والأصفر والأبيض والبرتقالي والأسود، مثالي للمطابخ والحمامات العصرية مع تشطيب لامع عالي الجودة.",
      icon: Lightbulb,
      features: [
        "بلاط مشطوف (BEVELLED) عالي الجودة",
        "ألوان متنوعة: أزرق، أصفر، أبيض، برتقالي، أسود",
        "مقاس 10×30 سم مثالي للتطبيقات المتنوعة",
        "تشطيب لامع مقاوم للبقع",
        "سهل التنظيف والصيانة",
        "مناسب للمطابخ والحمامات والمساحات التجارية",
      ],
      price: "من 8 دنانير/متر مربع",
      duration: "1-2 أسابيع",
      image: "/images/bevelled-blue-tiles.jpg",
    },
  ]

  return (
    <div className="min-h-screen" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 badge-glass px-8 py-4 text-lg font-semibold rounded-full">خدماتنا المتخصصة</Badge>
            <h1 className="text-7xl lg:text-8xl font-bold mb-8 text-stone-light arabic-text-bold">
              بلاط وتجهيزات متخصصة
            </h1>
            <p className="text-2xl text-stone-muted max-w-4xl mx-auto leading-relaxed arabic-text">
              نوفر أجود أنواع البلاط والأرضيات وتجهيزات الحمامات الفاخرة من أرقى الماركات العالمية مع خدمات تركيب متخصصة
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={index} className={`mb-32 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                  <div className="relative group">
                    <div className="glass-card rounded-3xl shadow-2xl overflow-hidden card-hover">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={600}
                        height={500}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                  <div className="glass-card w-24 h-24 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                    <service.icon className="w-12 h-12 text-amber-400" />
                  </div>

                  <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-stone-light arabic-text-bold">
                    {service.title}
                  </h2>

                  <p className="text-xl text-stone-accent mb-6 font-bold arabic-text">{service.subtitle}</p>

                  <p className="text-lg text-stone-muted mb-8 leading-relaxed arabic-text">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-bold text-stone-light mb-4 arabic-text-bold">المميزات الرئيسية:</h4>
                      <div className="space-y-4">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                            <span className="text-stone-muted font-semibold arabic-text">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-stone-light mb-4 arabic-text-bold">معلومات الخدمة:</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-6 h-6 text-amber-400 flex-shrink-0" />
                          <span className="text-stone-muted font-semibold arabic-text">المدة: {service.duration}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Star className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                          <span className="text-stone-muted font-semibold arabic-text">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="btn-gold px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 arabic-text"
                      >
                        <Phone className="w-6 h-6 ml-3" />
                        اطلب الخدمة الآن
                      </Button>
                    </Link>
                    <Link href="/collections">
                      <Button
                        size="lg"
                        className="btn-outline-light px-10 py-4 rounded-full font-bold text-lg arabic-text"
                      >
                        <Eye className="w-6 h-6 ml-3" />
                        شاهد المجموعات
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 badge-glass px-8 py-4 text-lg font-semibold rounded-full">مميزات إضافية</Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-stone-light arabic-text-bold">
              لماذا تختار فيلا روزا؟
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "استشارة مجانية",
                description: "زيارة مجانية للموقع مع استشارة متخصصة",
                image: "/images/glass-basin-bathroom.jpg",
              },
              {
                title: "ضمان شامل",
                description: "ضمان يصل إلى 10 سنوات على المواد والتركيب",
                image: "/images/decorative-basin-bathroom.jpg",
              },
              {
                title: "فريق متخصص",
                description: "فنيون مدربون على أحدث تقنيات التركيب",
                image: "/images/black-marble-suite.jpg",
              },
            ].map((feature, index) => (
              <div key={index} className="glass-card rounded-3xl overflow-hidden shadow-xl card-hover">
                <div className="relative h-48">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 arabic-text-bold">{feature.title}</h3>
                  <p className="text-stone-muted arabic-text text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-dark rounded-3xl p-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-10 text-white arabic-text-bold">
              هل أنت مستعد لبدء مشروعك؟
            </h2>
            <p className="text-xl mb-16 text-white/90 arabic-text max-w-3xl mx-auto">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="btn-gold px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 arabic-text"
                >
                  احجز استشارة مجانية
                  <ArrowRight className="w-6 h-6 mr-3" />
                </Button>
              </Link>
              <Link href="/collections">
                <Button
                  size="lg"
                  className="btn-outline-light px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 hover:scale-105 arabic-text"
                >
                  شاهد مجموعاتنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
