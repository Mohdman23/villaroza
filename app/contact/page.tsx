"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        budget: "",
        timeline: "",
      })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      details: ["+962 7 9658 9330", "+962 6 123 4567"],
      isPhone: true, // Add this flag
    },
    {
      icon: Mail,
      title: "راسلنا",
      details: ["villa_roza@hotmail.com", "info@villaroza.jo"],
    },
    {
      icon: MapPin,
      title: "زورنا",
      details: ["عمان - الأردن", "شارع الملكة رانيا العبدالله - أم السماق"],
    },
    {
      icon: Clock,
      title: "أوقات العمل",
      details: ["الأحد - الخميس: 9:00 - 18:00", "السبت: 10:00 - 16:00"],
    },
  ]

  const services = [
    "البلاط البورسلان الإسباني",
    "الحمامات الرخامية الفاخرة",
    "الحمامات العصرية",
    "موزاييك ALTOGLASS الإسباني",
    "أحواض وبطاريات الحمامات",
    "استشارات التصميم والتركيب",
  ]

  return (
    <div className="min-h-screen" dir="rtl">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <Badge className="mb-3 badge-glass px-4 py-2 text-sm font-semibold rounded-full">تواصل معنا</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-stone-light arabic-text-bold">
              نحن هنا لخدمتك
            </h1>
            <p className="text-base sm:text-lg text-stone-muted max-w-3xl mx-auto leading-relaxed arabic-text">
              تواصل معنا اليوم واحصل على استشارة مجانية من خبرائنا لتحويل مساحتك إلى تحفة فنية
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover-lift glass-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <CardContent className="p-4 text-center">
                  <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <info.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-sm font-bold mb-2 text-white arabic-text-bold">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-stone-muted arabic-text text-xs" dir={info.isPhone ? "ltr" : "rtl"}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card border-0 shadow-2xl">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-white arabic-text-bold">احجز استشارة مجانية</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="glass-card w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-400 mb-4 arabic-text-bold">تم إرسال رسالتك بنجاح!</h3>
                    <p className="text-stone-muted arabic-text">سنتواصل معك خلال 24 ساعة</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-white mb-2 arabic-text">الاسم الكامل *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="input-glass w-full px-4 py-3 rounded-lg arabic-text"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-white mb-2 arabic-text">رقم الهاتف *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="input-glass w-full px-4 py-3 rounded-lg"
                          placeholder="+962 7X XXX XXXX"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2 arabic-text">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-glass w-full px-4 py-3 rounded-lg"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2 arabic-text">نوع الخدمة المطلوبة</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="input-glass w-full px-4 py-3 rounded-lg arabic-text"
                      >
                        <option value="">اختر نوع الخدمة</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2 arabic-text">تفاصيل المشروع</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="input-glass w-full px-4 py-3 rounded-lg resize-none arabic-text"
                        placeholder="أخبرنا عن مشروعك وما تحتاجه..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gold py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 arabic-text"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                          جاري الإرسال...
                        </div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 ml-2" />
                          إرسال الرسالة
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Image and Info */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="glass-card rounded-3xl shadow-2xl overflow-hidden card-hover">
                  <Image
                    src="/images/fullmodernbathroomporcelaintileswhitesinkandmodernmirror.jpeg"
                    alt="Villa Roza Showroom"
                    width={500}
                    height={400}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Why Choose Us */}
              <Card className="glass-dark border-0 shadow-2xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-white arabic-text-bold">لماذا تختار فيلا روزا؟</h3>
                  <div className="space-y-4">
                    {[
                      "استشارة مجانية في الموقع مع خبراء متخصصين",
                      "فريق من أمهر المصممين والفنيين المدربين",
                      "ضمان الجودة يصل إلى 10 سنوات على المواد والتركيب",
                      "أسعار تنافسية ومرونة في الدفع والتقسيط",
                      "متابعة مستمرة من البداية حتى التسليم النهائي",
                      "شراكات حصرية مع MAPEI و ALTOGLASS",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 ml-3" />
                        <span className="text-white arabic-text font-semibold text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location Map Placeholder */}
              <Card className="glass-dark border-0 shadow-2xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-white arabic-text-bold">موقعنا</h3>
                  <div className="relative h-48 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-amber-400 mx-auto mb-3" />
                      <p className="text-white text-lg font-bold arabic-text">عمان - أم السماق</p>
                      <p className="text-stone-muted arabic-text text-sm">شارع الملكة رانيا العبدالله</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
