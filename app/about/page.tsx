"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Target, Heart, Lightbulb, Shield, Star, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: Heart,
      title: "الشغف والإبداع",
      description: "نؤمن بأن الشغف هو المحرك الأساسي للإبداع والتميز في كل مشروع نقوم به",
    },
    {
      icon: Shield,
      title: "الجودة والثقة",
      description: "نلتزم بأعلى معايير الجودة ونبني علاقات طويلة الأمد مع عملائنا",
    },
    {
      icon: Lightbulb,
      title: "الابتكار والتطوير",
      description: "نواكب أحدث الاتجاهات ونطور حلولاً مبتكرة تلبي احتياجات العصر",
    },
    {
      icon: Users,
      title: "العمل الجماعي",
      description: "فريق متخصص يعمل بروح الفريق الواحد لتحقيق أفضل النتائج",
    },
  ]

  const achievements = [
    { number: "500+", label: "مشروع مكتمل", icon: Target },
    { number: "1000+", label: "عميل سعيد", icon: Users },
    { number: "15+", label: "سنة خبرة", icon: Award },
    { number: "50+", label: "جائزة وتقدير", icon: Star },
  ]

  return (
    <div className="min-h-screen" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <Badge className="mb-3 badge-glass px-4 py-2 text-sm font-semibold rounded-full">من نحن</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-stone-light arabic-text-bold">
              قصة فيلا روزا
            </h1>
            <p className="text-base sm:text-lg text-stone-muted max-w-3xl mx-auto leading-relaxed arabic-text">
              رحلة من الشغف إلى الإتقان في توفير أجود أنواع البلاط وتجهيزات الحمامات من أرقى الماركات العالمية
            </p>
          </div>

          {/* Stats - Horizontal on Mobile */}
          <div className="grid grid-cols-4 gap-3 mb-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group hover-lift">
                <div className="glass-card w-12 h-12 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-5 h-5 sm:w-8 sm:h-8 text-amber-400" />
                </div>
                <div className="text-lg sm:text-3xl font-bold text-stone-light mb-1 arabic-text-bold">
                  {achievement.number}
                </div>
                <div className="text-stone-muted font-semibold text-xs sm:text-base arabic-text">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-stone-light arabic-text-bold">
                رحلتنا نحو التميز
              </h2>
              <p className="text-lg text-stone-muted mb-6 leading-relaxed arabic-text">
                بدأت فيلا روزا كحلم صغير في عام 2009، حيث آمنا بأن كل منزل يستحق أجود المواد وأرقى التجهيزات. اليوم، نحن
                فخورون بأن نكون من الشركات الرائدة في مجال البلاط وتجهيزات الحمامات في الأردن.
              </p>

              <div className="space-y-4">
                {[
                  "أكثر من 15 عاماً من الخبرة في البلاط والتجهيزات",
                  "شراكات مع أفضل المصانع والماركات العالمية مثل MAPEI و ALTOGLASS",
                  "استيراد مباشر لضمان أفضل الأسعار والجودة",
                  "فريق متخصص في التركيب والصيانة مع ضمان 5 سنوات",
                  "خدمات شاملة من الاستشارة إلى التسليم النهائي",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-stone-muted font-semibold arabic-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} relative`}>
              <div className="relative group">
                <div className="glass-card rounded-3xl shadow-2xl overflow-hidden card-hover">
                  <Image
                    src="/images/lightmarblebathroomcomplete.jpeg"
                    alt="Villa Roza Luxury Installation"
                    width={500}
                    height={600}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 badge-glass px-4 py-2 text-sm font-semibold rounded-full">قيمنا</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-stone-light arabic-text-bold">
              ما نؤمن به
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover-lift glass-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <CardContent className="p-4 text-center">
                  <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <value.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-white arabic-text-bold">{value.title}</h3>
                  <p className="text-stone-muted leading-relaxed arabic-text text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} relative`}>
              <div className="relative group">
                <div className="glass-card rounded-3xl shadow-2xl overflow-hidden card-hover">
                  <Image
                    src="/images/modernbathroomcomplete4.jpeg"
                    alt="Porcelain Display"
                    width={500}
                    height={600}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-stone-light arabic-text-bold">
                خبرتنا المتخصصة
              </h2>
              <p className="text-lg text-stone-muted mb-6 leading-relaxed arabic-text">
                نحن متخصصون في البلاط البورسلان والسيراميك الفاخر من أرقى المصانع العالمية، بالإضافة إلى تجهيزات
                الحمامات الفاخرة وبلاط BEVELLED العصري.
              </p>

              <div className="space-y-4">
                {[
                  "بلاط بورسلان إسباني فاخر بمقاسات متنوعة",
                  "سيراميك عالي الجودة للحمامات والمطابخ",
                  "بلاط BEVELLED بألوان متنوعة للمطابخ والحمامات",
                  "تجهيزات حمامات كاملة من الأحواض إلى البطاريات",
                  "خدمات تركيب متخصصة مع ضمان شامل",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-stone-muted font-semibold arabic-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-dark rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white arabic-text-bold">
              هل أنت مستعد للبدء معنا؟
            </h2>
            <p className="text-lg mb-8 text-white/90 arabic-text max-w-3xl mx-auto">
              دعنا نحول مساحتك إلى تحفة فنية تعكس شخصيتك وذوقك الرفيع
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="btn-gold px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 arabic-text"
                >
                  تواصل معنا الآن
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
