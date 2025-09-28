"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"

export default function ContactPage() {

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
            {/* Contact Information */}
            <Card className="glass-card border-0 shadow-2xl">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-white arabic-text-bold">تواصل معنا مباشرة</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white arabic-text-bold">اتصل بنا</h3>
                      <p className="text-stone-muted arabic-text">+962 7 9658 9330</p>
                      <p className="text-stone-muted arabic-text">+962 6 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white arabic-text-bold">راسلنا</h3>
                      <p className="text-stone-muted arabic-text">villa_roza@hotmail.com</p>
                      <p className="text-stone-muted arabic-text">info@villaroza.jo</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white arabic-text-bold">زورنا</h3>
                      <p className="text-stone-muted arabic-text">عمان - الأردن</p>
                      <p className="text-stone-muted arabic-text">شارع الملكة رانيا العبدالله - أم السماق</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="glass-card w-12 h-12 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white arabic-text-bold">أوقات العمل</h3>
                      <p className="text-stone-muted arabic-text">الأحد - الخميس: 9:00 - 18:00</p>
                      <p className="text-stone-muted arabic-text">السبت: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>
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
