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
      title: "البلاط البورسلان الإسباني الفاخر",
      subtitle: "بلاط بورسلان إسباني عالي الجودة بتصاميم عصرية وأنيقة",
      description:
        "نوفر مجموعة واسعة من البلاط البورسلان الإسباني عالي الجودة بتصاميم عصرية وأنيقة ومقاسات متنوعة من أفضل المصانع الإسبانية، مع خدمات تركيب متخصصة وضمان شامل.",
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
      image: "/images/modernbathroomwithporcelaintiles.jpeg",
    },
    {
      title: "الحمامات الرخامية الفاخرة",
      subtitle: "تصاميم حمامات فاخرة بالرخام الأسود مع إضاءة LED متطورة",
      description:
        "نقدم خدمات تصميم الحمامات الفاخرة بالرخام الأسود مع إضاءة LED متطورة وتجهيزات عصرية، مع التركيز على الجودة والأناقة والتصاميم المعاصرة التي تناسب جميع الأذواق.",
      icon: Palette,
      features: [
        "تصاميم حمامات فاخرة بالرخام الأسود",
        "إضاءة LED ذهبية متطورة",
        "مرآة دائرية أنيقة",
        "تصميم معلق فاخر",
        "مواد فاخرة وتجهيزات متطورة",
        "تركيب وصيانة شاملة مع ضمان 5 سنوات",
      ],
      price: "من 1200 دينار/حمام",
      duration: "3-4 أسابيع",
      image: "/images/modern-grey-bathroom-complete.jpg",
    },
    {
      title: "الحمامات العصرية",
      subtitle: "تصاميم حمامات عصرية وأنيقة مع مواد فاخرة",
      description:
        "تصاميم حمامات عصرية وأنيقة مع مواد فاخرة وتجهيزات متطورة، تجمع بين الأناقة والوظائف العملية للمساحات المعاصرة.",
      icon: Lightbulb,
      features: [
        "تصاميم عصرية وأنيقة",
        "مواد فاخرة وتجهيزات متطورة",
        "رخام طبيعي عالي الجودة",
        "إضاءة LED متطورة",
        "سهل الصيانة والتنظيف",
        "مناسب للمساحات المعاصرة",
      ],
      price: "من 8 دنانير/متر مربع",
      duration: "1-2 أسابيع",
      image: "/images/whitesinkmodernbathroommodernmirrorovalLshapedbathroom.jpeg",
    },
  ]

  return (
    <div className="min-h-screen" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <Badge className="mb-3 badge-glass px-4 py-2 text-sm font-semibold rounded-full">خدماتنا المتخصصة</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-stone-light arabic-text-bold">
              بلاط وتجهيزات متخصصة
            </h1>
            <p className="text-base sm:text-lg text-stone-muted max-w-3xl mx-auto leading-relaxed arabic-text">
              نوفر أجود أنواع البلاط والأرضيات وتجهيزات الحمامات الفاخرة من أرقى الماركات العالمية مع خدمات تركيب متخصصة
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={index} className={`mb-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                  <div className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <service.icon className="w-8 h-8 text-amber-400" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-stone-light arabic-text-bold">
                    {service.title}
                  </h2>

                  <p className="text-sm text-stone-accent mb-3 font-bold arabic-text">{service.subtitle}</p>

                  <p className="text-sm sm:text-base text-stone-muted mb-4 leading-relaxed arabic-text">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-stone-light mb-3 arabic-text-bold">المميزات الرئيسية:</h4>
                      <div className="space-y-3">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-stone-muted font-semibold arabic-text text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-stone-light mb-3 arabic-text-bold">معلومات الخدمة:</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                          <span className="text-stone-muted font-semibold arabic-text text-sm">
                            المدة: {service.duration}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                          <span className="text-stone-muted font-semibold arabic-text text-sm">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="btn-gold px-8 py-3 rounded-2xl font-bold transition-all duration-300 hover:scale-105 arabic-text"
                      >
                        <Phone className="w-5 h-5 ml-2" />
                        اطلب الخدمة الآن
                      </Button>
                    </Link>
                    <Link href="/collections">
                      <Button size="lg" className="btn-outline-light px-8 py-3 rounded-2xl font-bold arabic-text">
                        <Eye className="w-5 h-5 ml-2" />
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 badge-glass px-4 py-2 text-sm font-semibold rounded-full">مميزات إضافية</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-stone-light arabic-text-bold">
              لماذا تختار فيلا روزا؟
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "استشارة مجانية",
                description: "زيارة مجانية للموقع مع استشارة متخصصة",
                image: "/images/lightmarblebathroomcomplete.jpeg",
              },
              {
                title: "ضمان شامل",
                description: "ضمان يصل إلى 10 سنوات على المواد والتركيب",
                image: "/images/modernbathroomcomplete4.jpeg",
              },
              {
                title: "فريق متخصص",
                description: "فنيون مدربون على أحدث تقنيات التركيب",
                image: "/images/white-marble-basin.jpg",
              },
            ].map((feature, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-32">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 arabic-text-bold">{feature.title}</h3>
                  <p className="text-stone-muted arabic-text text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-dark rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white arabic-text-bold">
              هل أنت مستعد لبدء مشروعك؟
            </h2>
            <p className="text-lg mb-8 text-white/90 arabic-text max-w-3xl mx-auto">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="btn-gold px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 arabic-text"
                >
                  احجز استشارة مجانية
                  <ArrowRight className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Link href="/collections">
                <Button
                  size="lg"
                  className="btn-outline-light px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 arabic-text"
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
