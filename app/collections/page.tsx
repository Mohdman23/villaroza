"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Heart, Star, Grid, ArrowRight, Home, Waves, Droplets, Bath, Palette, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function CollectionsPage() {
  const [isVisible, setIsVisible] = useState(false)
  // Start with porcelain category for better organization
  const [activeCategory, setActiveCategory] = useState("porcelain")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: "porcelain", name: "البلاط البورسلان", icon: Palette, featured: true },
    { id: "bathroom", name: "تجهيزات الحمامات", icon: Bath, featured: true },
    { id: "cladding", name: "كسوة الجدران", icon: Home, featured: true },
    { id: "pool", name: "بلاط المسابح", icon: Waves, featured: false },
    { id: "faucets", name: "البطاريات والأحواض", icon: Droplets, featured: false },
    { id: "heating", name: "أنظمة التدفئة", icon: Lightbulb, featured: false },
    { id: "stone", name: "البلاط الحجري", icon: Home, featured: false },
    { id: "all", name: "جميع المنتجات", icon: Grid, featured: false },
  ]

  const collections = [
    // New Final Spanish Porcelain Tiles
    {
      id: 56,
      title: "مجموعة CENTRAL DISTRICT الإسبانية",
      category: "porcelain",
      description: "بلاط بورسلان إسباني مربع بلون بيج فاتح مع ملمس ناعم (60×60 سم) مثالي للمساحات العصرية",
      images: ["/images/central-district-tile.jpg"],
      features: ["صنع في إسبانيا", "60×60 سم", "بيج فاتح", "ملمس ناعم"],
      rating: 4.8,
      reviews: 22,
      isNew: true,
    },
    {
      id: 57,
      title: "مجموعة CONTRACD PERAL الإسبانية",
      category: "porcelain",
      description: "بلاط بورسلان إسباني مربع بلون رمادي لؤلؤي مع نقاط دقيقة (60×60 سم) للتصاميم المعاصرة",
      images: ["/images/contracd-peral-tile.jpg"],
      features: ["صنع في إسبانيا", "60×60 سم", "رمادي لؤلؤي", "نقاط دقيقة"],
      rating: 4.7,
      reviews: 19,
      isNew: true,
    },
    {
      id: 58,
      title: "مجموعة CONCORDE ANF الإسبانية",
      category: "porcelain",
      description: "بلاط بورسلان إسباني مربع بلون رمادي متوسط مع ملمس ناعم (60×60 سم) للأرضيات والجدران",
      images: ["/images/concorde-anf-tile.jpg"],
      features: ["صنع في إسبانيا", "60×60 سم", "رمادي متوسط", "متعدد الاستخدام"],
      rating: 4.9,
      reviews: 25,
      isNew: true,
    },

    // Featured Spanish Porcelain Tiles (No Pricing)
    {
      id: 46,
      title: "مجموعة SIGNA LISA الإسبانية",
      category: "porcelain",
      description: "بلاط بورسلان إسباني فاخر بلون بيج فاتح (120×60 سم) مثالي للمساحات الداخلية العصرية والكلاسيكية",
      images: ["/images/signa-lisa-spanish-tile.jpg"],
      features: ["صنع في إسبانيا", "120×60 سم", "بيج فاتح أنيق", "جودة فاخرة"],
      rating: 4.9,
      reviews: 31,
      isNew: true,
    },
    {
      id: 47,
      title: "مجموعة HEAUT EVIL WHITE الإسبانية",
      category: "porcelain",
      description: "بلاط بورسلان إسباني بلون أبيض كريمي (120×60 سم) يضفي إشراقاً ونظافة على المساحات",
      images: ["/images/heaut-evil-white-tile.jpg"],
      features: ["صنع في إسبانيا", "120×60 سم", "أبيض كريمي", "إشراق طبيعي"],
      rating: 4.8,
      reviews: 28,
      isNew: true,
    },
    {
      id: 48,
      title: "مجموعة CRIKEKET PERLA الإسبانية",
      category: "porcelain",
      description: "بلاط بورسلان إسباني مربع بلون رمادي لؤلؤي (60×60 سم) مثالي للأرضيات والجدران",
      images: ["/images/crikeket-perla-tile.jpg"],
      features: ["صنع في إسبانيا", "60×60 سم", "رمادي لؤلؤي", "تشطيب أنيق"],
      rating: 4.7,
      reviews: 25,
      isNew: true,
    },
    {
      id: 49,
      title: "مجموعة GALWAY ALBAR الإسبانية المحدثة",
      category: "porcelain",
      description: "بلاط بورسلان إسباني بلون بيج فاتح (120×60 سم) بتشطيب ناعم وأناقة كلاسيكية",
      images: ["/images/galway-albar-spanish-tile.jpg"],
      features: ["صنع في إسبانيا", "120×60 سم", "بيج كلاسيكي", "تشطيب ناعم"],
      rating: 4.9,
      reviews: 33,
      isPopular: true,
    },
    {
      id: 50,
      title: "مجموعة CONCEPT CREMA الإسبانية",
      category: "porcelain",
      description: "بلاط بورسلان إسباني بلون كريمي دافئ (120×60 سم) يجمع بين الأناقة والعملية",
      images: ["/images/concept-crema-tile.jpg"],
      features: ["صنع في إسبانيا", "120×60 سم", "كريمي دافئ", "أناقة عملية"],
      rating: 4.8,
      reviews: 29,
      isNew: true,
    },
    {
      id: 51,
      title: "مجموعة GEOTECH IVOR الإسبانية",
      category: "porcelain",
      description: "بلاط بورسلان إسباني بلون عاجي مع نقاط ملونة (120×60 سم) يضفي طابعاً طبيعياً مميزاً",
      images: ["/images/geotech-ivor-tile.jpg"],
      features: ["صنع في إسبانيا", "120×60 سم", "عاجي منقط", "طابع طبيعي"],
      rating: 4.7,
      reviews: 27,
      isNew: true,
    },
    {
      id: 52,
      title: "مجموعة BETON GRAFITO الإسبانية",
      category: "porcelain",
      description: "بلاط بورسلان إسباني بتأثير الخرسانة الرمادية (120×60 سم) للتصاميم الصناعية العصرية",
      images: ["/images/beton-grafito-tile.jpg"],
      features: ["صنع في إسبانيا", "120×60 سم", "تأثير خرسانة", "تصميم صناعي"],
      rating: 4.9,
      reviews: 32,
      isPopular: true,
    },

    // MAHDY STONE Wall Cladding
    {
      id: 53,
      title: "مجموعة MOUNTAIN RANGE الذهبية",
      category: "cladding",
      description: "كسوة جدران حجرية طبيعية من MAHDY STONE بألوان ذهبية دافئة، تضفي فخامة وطابعاً طبيعياً مميزاً",
      images: ["/images/mountain-range-sunshine-stone.jpg"],
      features: ["حجر طبيعي", "ألوان ذهبية", "MAHDY STONE", "تأثير جبلي"],
      rating: 5.0,
      reviews: 24,
      isNew: true,
    },
    {
      id: 54,
      title: "مجموعة MOUNTAIN ROCKS الرمادية",
      category: "cladding",
      description: "كسوة جدران حجرية من MAHDY STONE بأحجار رمادية كبيرة وملمس طبيعي خشن للتصاميم الجبلية",
      images: ["/images/mountain-rocks-grey-stone.jpg"],
      features: ["أحجار كبيرة", "رمادي طبيعي", "ملمس خشن", "MAHDY STONE"],
      rating: 4.8,
      reviews: 26,
      isNew: true,
    },
    {
      id: 55,
      title: "مجموعة ART BRICK الأحمر التقليدي",
      category: "cladding",
      description: "كسوة جدران بتصميم الطوب الأحمر التقليدي من MAHDY STONE، مثالية للتصاميم الكلاسيكية والتراثية",
      images: ["/images/art-brick-red-mahdy.jpg"],
      features: ["طوب أحمر تقليدي", "تصميم تراثي", "MAHDY STONE", "نمط كلاسيكي"],
      rating: 4.7,
      reviews: 30,
      isPopular: true,
    },

    // Existing collections continue...
    {
      id: 1,
      title: "مجموعة بلاط المسابح المتخصص",
      category: "pool",
      description:
        "بلاط مسابح مقاوم للكلور والمواد الكيميائية مع مواد التركيب من MAPEI، مع سطح مضاد للانزلاق لضمان الأمان",
      images: ["/images/pool-tiles-mapei.jpg"],
      features: ["مقاوم للكلور", "مضاد للانزلاق", "ألوان زاهية ثابتة", "مواد تركيب MAPEI"],
      rating: 5.0,
      reviews: 52,
      isPopular: true,
    },
    {
      id: 2,
      title: "مجموعة CABRERA الزجاجية للمسابح",
      category: "pool",
      description: "موزاييك زجاجي إسباني فاخر من ALTOGLASS بدرجات الأزرق، مثالي لتبطين المسابح الراقية",
      images: ["/images/cabrera-pool-tiles.jpg"],
      features: ["موزاييك زجاجي", "31×45 سم", "صنع في إسبانيا", "ALTOGLASS"],
      rating: 5.0,
      reviews: 38,
      isNew: true,
    },
    {
      id: 3,
      title: "مجموعة الأحواض الكريستالية الفاخرة",
      category: "faucets",
      description: "أحواض حمامات كريستالية بتصاميم فنية راقية، مصنوعة من الكريستال عالي الجودة مع نقوش يدوية",
      images: ["/images/blue-crystal-basin.jpg"],
      features: ["كريستال عالي الجودة", "تصاميم فنية", "مقاوم للخدوش", "ضمان 5 سنوات"],
      rating: 4.9,
      reviews: 45,
      isPopular: true,
    },
    {
      id: 4,
      title: "مجموعة الأحواض النحاسية الذهبية",
      category: "faucets",
      description: "أحواض نحاسية فاخرة بلمسة ذهبية، مصنوعة يدوياً بتقنيات تقليدية مع نقوش هندسية دقيقة",
      images: ["/images/gold-brass-basin.jpg"],
      features: ["نحاس أصلي", "صناعة يدوية", "مقاوم للتآكل", "تصميم هندسي"],
      rating: 4.8,
      reviews: 33,
      isNew: true,
    },
    {
      id: 5,
      title: "مجموعة الأحواض الهندسية السوداء",
      category: "faucets",
      description: "أحواض سيراميك بتصميم هندسي عصري باللون الأسود، تضفي لمسة من الأناقة والفخامة",
      images: ["/images/black-geometric-basin.jpg"],
      features: ["سيراميك عالي الجودة", "تصميم هندسي", "أسود لامع", "سهل التنظيف"],
      rating: 4.7,
      reviews: 29,
      isPopular: false,
    },
    {
      id: 6,
      title: "مجموعة الأحواض الفضية المزخرفة",
      category: "faucets",
      description: "أحواض معدنية بلمسة فضية مع زخارف نباتية راقية، تجمع بين الأناقة والعملية",
      images: ["/images/silver-decorative-basin.jpg"],
      features: ["معدن مطلي فضي", "زخارف نباتية", "مقاوم للصدأ", "تصميم كلاسيكي"],
      rating: 4.6,
      reviews: 41,
      isNew: false,
    },
    {
      id: 7,
      title: "مجموعة الأحواض الكريستالية البيضاء",
      category: "faucets",
      description: "أحواض كريستال شفافة بنقوش هندسية معقدة، تعكس الضوء بطريقة ساحرة",
      images: ["/images/clear-crystal-basin.jpg"],
      features: ["كريستال شفاف", "نقوش هندسية", "عاكس للضوء", "تصميم فني"],
      rating: 4.9,
      reviews: 37,
      isPopular: true,
    },
    {
      id: 8,
      title: "مجموعة الأحواض الرخامية البيضاء",
      category: "faucets",
      description: "أحواض بورسلان بتأثير الرخام الأبيض الطبيعي، تضفي فخامة كلاسيكية على الحمام",
      images: ["/images/white-marble-basin.jpg"],
      features: ["تأثير رخامي", "بورسلان عالي الجودة", "أبيض كلاسيكي", "مقاوم للبقع"],
      rating: 4.8,
      reviews: 28,
      isNew: true,
    },
    {
      id: 9,
      title: "مجموعة الأحواض النحاسية المطروقة",
      category: "faucets",
      description: "أحواض نحاسية مطروقة يدوياً بتقنيات تراثية، تجمع بين الأصالة والفخامة",
      images: ["/images/bronze-hammered-basin.jpg"],
      features: ["نحاس مطروق يدوياً", "تقنيات تراثية", "مقاوم للتآكل", "قطعة فنية"],
      rating: 4.7,
      reviews: 44,
      isPopular: true,
    },
    {
      id: 10,
      title: "مجموعة الأحواض الرخامية الرمادية",
      category: "faucets",
      description: "أحواض بورسلان بتأثير الرخام الرمادي، تناسب التصاميم العصرية والمعاصرة",
      images: ["/images/grey-marble-basin.jpg"],
      features: ["تأثير رخامي رمادي", "بورسلان متين", "تصميم عصري", "سهل الصيانة"],
      rating: 4.6,
      reviews: 31,
      isNew: false,
    },
    {
      id: 11,
      title: "مجموعة MUNCH WHITE الإسبانية",
      category: "porcelain",
      description: "بلاط بورسلان إسباني بلون أبيض أنيق، مثالي للمساحات الخارجية والتراسات العصرية",
      images: ["/images/munch-white-outdoor.jpg"],
      features: ["صنع في إسبانيا", "60×120 سم", "مقاوم للعوامل الجوية", "مناسب للخارج"],
      rating: 4.9,
      reviews: 45,
      isPopular: true,
    },
    {
      id: 12,
      title: "مجموعة ATRIUM GREY العصرية",
      category: "porcelain",
      description: "بلاط بورسلان إسباني بلون رمادي، مثالي للمساحات المغطاة والبرجولات الحديثة",
      images: ["/images/atrium-grey-pergola.jpg"],
      features: ["رمادي عصري", "60×120 سم", "مقاوم للرطوبة", "تصميم مودرن"],
      rating: 4.8,
      reviews: 33,
      isNew: true,
    },
    {
      id: 13,
      title: "مجموعة ATRIM PERLA الفاخرة",
      category: "porcelain",
      description: "بلاط بورسلان بلون اللؤلؤ الفاتح، يضفي أناقة على المساحات حول المسابح",
      images: ["/images/atrim-perla-pool.jpg"],
      features: ["لون اللؤلؤ الفاتح", "60×120 سم", "مقاوم للكلور", "مضاد للانزلاق"],
      rating: 4.7,
      reviews: 29,
      isPopular: false,
    },
    {
      id: 14,
      title: "مجموعة VINICI GREY الأنيقة",
      category: "stone",
      description: "بلاط حجري إسباني بلون رمادي، مثالي للمساحات الخارجية وأماكن تناول الطعام",
      images: ["/images/vinici-grey-outdoor.jpg"],
      features: ["حجر طبيعي", "60×120 سم", "مقاوم للعوامل الجوية", "ملمس طبيعي"],
      rating: 4.9,
      reviews: 41,
      isNew: false,
    },
    {
      id: 15,
      title: "مجموعة SUBWAY للحمامات",
      category: "bathroom",
      description: "بلاط سيراميك مستطيل بتصميم SUBWAY الكلاسيكي، مثالي للحمامات العصرية والكلاسيكية",
      images: ["/images/subway-bathroom-tiles.jpg"],
      features: ["تصميم SUBWAY كلاسيكي", "صنع في إسبانيا", "10×30 سم", "مقاوم للرطوبة"],
      rating: 4.9,
      reviews: 67,
      isPopular: true,
    },
    {
      id: 16,
      title: "مجموعة BLANCO الإسبانية البيضاء",
      category: "pool",
      description: "موزاييك زجاجي إسباني أبيض من ALTOGLASS، مثالي للمسابح العصرية والتصاميم المعمارية الحديثة",
      images: ["/images/blanco-pool-tiles.jpg"],
      features: ["موزاييك زجاجي أبيض", "31×45 سم", "ALTOGLASS إسباني", "تصميم معاصر"],
      rating: 4.9,
      reviews: 42,
      isNew: true,
    },
    {
      id: 17,
      title: "مجموعة خزائن الحمام الرخامية السوداء",
      category: "bathroom",
      description: "خزائن حمام فاخرة بسطح رخامي أسود مع إضاءة LED عصرية وتصميم معلق أنيق",
      images: ["/images/black-marble-bathroom.jpg"],
      features: ["رخام أسود فاخر", "إضاءة LED ذهبية", "مرآة دائرية", "تصميم معلق"],
      rating: 4.8,
      reviews: 35,
      isPopular: true,
    },
    {
      id: 18,
      title: "مجموعة خزائن الحمام الرخامية الرمادية",
      category: "bathroom",
      description: "خزائن حمام عصرية بسطح رخامي رمادي مع خزانة خشبية وتصميم عملي ومتطور",
      images: ["/images/grey-marble-bathroom.jpg"],
      features: ["رخام رمادي طبيعي", "خزانة خشبية", "تصميم عملي", "مقاوم للرطوبة"],
      rating: 4.7,
      reviews: 28,
      isNew: true,
    },
    {
      id: 19,
      title: "مجموعة AZUL CELESTE السماوية",
      category: "pool",
      description: "موزاييك زجاجي إسباني بلون أزرق سماوي من ALTOGLASS، يضفي هدوءاً وأناقة على المسابح",
      images: ["/images/azul-celeste-pool.jpg"],
      features: ["أزرق سماوي", "31×45 سم", "زجاج إسباني", "ALTOGLASS"],
      rating: 4.8,
      reviews: 39,
      isPopular: true,
    },
    {
      id: 20,
      title: "مجموعة خزائن الحمام البيضاء العصرية",
      category: "bathroom",
      description: "خزائن حمام بيضاء أنيقة مع مرآة دائرية وإضاءة مدمجة وتصميم نظيف ومعاصر",
      images: ["/images/white-marble-bathroom.jpg"],
      features: ["رخام أبيض", "مرآة دائرية", "إضاءة مدمجة", "تصميم نظيف"],
      rating: 4.9,
      reviews: 44,
      isNew: true,
    },
    {
      id: 21,
      title: "مجموعة ESTELA المختلطة الفاخرة",
      category: "pool",
      description: "موزاييك زجاجي إسباني بمزيج من الأزرق والذهبي من ALTOGLASS، مثالي للمسابح الفاخرة",
      images: ["/images/estela-pool-tiles.jpg"],
      features: ["مزيج أزرق وذهبي", "31×45 سم", "تأثير فاخر", "ALTOGLASS"],
      rating: 5.0,
      reviews: 31,
      isPopular: true,
    },
    {
      id: 22,
      title: "مجموعة PAPUA BLUE الزرقاء العميقة",
      category: "pool",
      description: "موزاييك زجاجي إسباني بلون أزرق عميق من ALTOGLASS، مثالي للمسابح اللانهائية والمناظر الطبيعية",
      images: ["/images/papua-blue-pool.jpg"],
      features: ["أزرق عميق", "31×45 سم", "للمسابح اللانهائية", "منظر طبيعي"],
      rating: 4.9,
      reviews: 37,
      isNew: true,
    },
    {
      id: 23,
      title: "مجموعة خزائن الحمام الخشبية المعاصرة",
      category: "bathroom",
      description: "خزائن حمام بتصميم خشبي دافئ مع سطح رخامي أبيض ومرآة مضيئة وتصميم عملي",
      images: ["/images/modern-bathroom-vanity.jpg"],
      features: ["خشب طبيعي", "رخام أبيض", "مرآة مضيئة", "تصميم عملي"],
      rating: 4.7,
      reviews: 33,
      isPopular: false,
    },
    {
      id: 24,
      title: "مجموعة خزائن الحمام البيج الفاخرة",
      category: "bathroom",
      description: "خزائن حمام كبيرة بسطح رخامي بيج مع تخزين متكامل وتصميم معلق أنيق",
      images: ["/images/beige-marble-bathroom.jpg"],
      features: ["رخام بيج فاخر", "تخزين متكامل", "تصميم معلق", "مساحة كبيرة"],
      rating: 4.8,
      reviews: 29,
      isNew: true,
    },
    {
      id: 25,
      title: "مجموعة MALLORCA للسبا والجاكوزي",
      category: "pool",
      description: "موزاييك زجاجي إسباني بتدرج أزرق من ALTOGLASS، مثالي للسبا والجاكوزي والمساحات الاستجمامية",
      images: ["/images/mallorca-pool-tiles.jpg"],
      features: ["تدرج أزرق", "31×45 سم", "للسبا والجاكوزي", "خلفية طبيعية"],
      rating: 4.9,
      reviews: 41,
      isPopular: true,
    },
    {
      id: 26,
      title: "مجموعة الحمامات الرخامية السوداء الفاخرة",
      category: "bathroom",
      description: "حمامات فاخرة بتصميم رخامي أسود مع إضاءة LED عصرية ومرايا دائرية ذهبية",
      images: ["/images/luxury-black-marble-complete.jpg"],
      features: ["رخام أسود فاخر", "إضاءة LED ذهبية", "مرآة دائرية", "تصميم معلق"],
      rating: 5.0,
      reviews: 48,
      isPopular: true,
    },
    {
      id: 27,
      title: "مجموعة الأحواض الزجاجية المزخرفة",
      category: "faucets",
      description: "أحواض زجاجية بنقوش دائرية أنيقة مع سطح رخامي رمادي وتصميم عصري متطور",
      images: ["/images/glass-basin-grey-marble.jpg"],
      features: ["زجاج مزخرف", "نقوش دائرية", "سطح رخامي رمادي", "تصميم عصري"],
      rating: 4.9,
      reviews: 35,
      isNew: true,
    },
    {
      id: 28,
      title: "مجموعة الحمامات البيضاء المعاصرة",
      category: "bathroom",
      description: "حمامات بيضاء أنيقة مع رخام أبيض ومرايا دائرية مضيئة وتصميم نظيف ومعاصر",
      images: ["/images/white-marble-modern-bathroom.jpg"],
      features: ["رخام أبيض نقي", "مرآة دائرية مضيئة", "تصميم نظيف", "خزانة سوداء أنيقة"],
      rating: 4.8,
      reviews: 41,
      isNew: true,
    },
    {
      id: 29,
      title: "مجموعة الأحواض المعدنية المزخرفة",
      category: "faucets",
      description: "أحواض معدنية بنقوش هندسية دقيقة مع سطح رخامي أبيض وتصميم فني راقي",
      images: ["/images/decorative-basin-black-marble.jpg"],
      features: ["نقوش هندسية معدنية", "سطح رخامي أبيض", "تصميم فني", "صناعة يدوية"],
      rating: 4.7,
      reviews: 33,
      isPopular: true,
    },
    {
      id: 30,
      title: "مجموعة الحمامات الرخامية السوداء المتكاملة",
      category: "bathroom",
      description: "تصميم حمام متكامل بالرخام الأسود مع خزانة معلقة وإضاءة LED وتصميم فاخر",
      images: ["/images/black-marble-floating-vanity.jpg"],
      features: ["رخام أسود متكامل", "خزانة معلقة", "إضاءة LED", "تصميم فاخر"],
      rating: 4.9,
      reviews: 39,
      isNew: true,
    },
    {
      id: 31,
      title: "مجموعة BEVELLED الأصفر الزاهي",
      category: "bathroom",
      description: "بلاط BEVELLED أصفر زاهي (10×30 سم) مثالي للمطابخ العصرية، يضفي إشراقاً وحيوية على المساحة",
      images: ["/images/bevelled-yellow-kitchen.jpg"],
      features: ["أصفر زاهي", "10×30 سم", "تشطيب لامع", "مقاوم للبقع"],
      rating: 4.8,
      reviews: 29,
      isNew: true,
    },
    {
      id: 32,
      title: "مجموعة BEVELLED الأحمر الدموي",
      category: "bathroom",
      description: "بلاط BEVELLED أحمر عميق (10×30 سم) يضفي دراما وأناقة على المطابخ والحمامات الفاخرة",
      images: ["/images/bevelled-blood-red-kitchen.jpg"],
      features: ["أحمر عميق", "10×30 سم", "تأثير دراماتيكي", "جودة عالية"],
      rating: 4.9,
      reviews: 34,
      isPopular: true,
    },
    {
      id: 33,
      title: "مجموعة BEVELLED الأزرق الملكي",
      category: "bathroom",
      description: "بلاط BEVELLED أزرق ملكي (10×30 سم) مثالي للحمامات وغرف الغسيل العصرية مع لمسة كلاسيكية",
      images: ["/images/bevelled-blue-bathroom.jpg"],
      features: ["أزرق ملكي", "10×30 سم", "مناسب للحمامات", "تصميم كلاسيكي"],
      rating: 4.7,
      reviews: 41,
      isNew: true,
    },
    {
      id: 34,
      title: "مجموعة BEVELLED الأخضر الواحي",
      category: "bathroom",
      description: "بلاط BEVELLED أخضر واحي (10×30 سم) بنمط هيرنجبون، يجمع بين الطبيعة والأناقة العصرية",
      images: ["/images/bevelled-oasis-green-kitchen.jpg"],
      features: ["أخضر واحي", "نمط هيرنجبون", "10×30 سم", "تصميم طبيعي"],
      rating: 5.0,
      reviews: 27,
      isPopular: true,
    },
    {
      id: 35,
      title: "مجموعة BEVELLED البرتقالي النابض",
      category: "bathroom",
      description: "بلاط BEVELLED برتقالي نابض بالحياة (10×30 سم) يضفي دفئاً وحيوية على المساحات الداخلية",
      images: ["/images/bevelled-orange-kitchen.jpg"],
      features: ["برتقالي نابض", "10×30 سم", "دافئ ومشرق", "سهل التنظيف"],
      rating: 4.6,
      reviews: 33,
      isNew: true,
    },
    {
      id: 36,
      title: "مجموعة مدافئ المناشف الإسبانية الفاخرة",
      category: "heating",
      description: "مدافئ مناشف إسبانية فاخرة بتصاميم متنوعة: أبيض، ذهبي، أسود، وكروم مع ضمان الجودة الأوروبية",
      images: ["/images/spanish-luxury-towel-warmers.jpg"],
      features: ["صنع في إسبانيا", "4 ألوان متاحة", "جودة أوروبية", "ضمان شامل"],
      rating: 4.9,
      reviews: 52,
      isPopular: true,
    },
    {
      id: 37,
      title: "مجموعة BEVELLED الأسود الأنيق",
      category: "bathroom",
      description: "بلاط BEVELLED أسود أنيق (10×30 سم) مع حوض أسود عصري، مثالي للحمامات المعاصرة والمينيماليست",
      images: ["/images/bevelled-black-bathroom.jpg"],
      features: ["أسود أنيق", "10×30 سم", "تصميم مينيماليست", "حوض عصري"],
      rating: 4.8,
      reviews: 38,
      isNew: true,
    },
    {
      id: 38,
      title: "مجموعة LAND SENSE البيج الطبيعي",
      category: "cladding",
      description:
        "كسوة جدران حجرية طبيعية من MAHDY STONE بلون بيج دافئ، تضفي لمسة طبيعية وأناقة كلاسيكية على المساحات الداخلية والخارجية",
      images: ["/images/land-sense-beige-stone.jpg"],
      features: ["حجر طبيعي", "MAHDY STONE", "بيج دافئ", "للداخل والخارج"],
      rating: 4.9,
      reviews: 31,
      isNew: true,
    },
    {
      id: 39,
      title: "مجموعة الحمامات الرمادية المتكاملة",
      category: "bathroom",
      description: "حمام متكامل بتصميم رمادي عصري مع كابينة دش زجاجية وخزانة خشبية وإضاءة LED، من تنفيذ فيلا روزا",
      images: ["/images/modern-grey-bathroom-complete.jpg"],
      features: ["تصميم متكامل", "كابينة دش زجاجية", "خزانة خشبية", "إضاءة LED"],
      rating: 5.0,
      reviews: 42,
      isPopular: true,
    },
    {
      id: 40,
      title: "مجموعة ART BRICK الرمادي",
      category: "cladding",
      description: "كسوة جدران بتصميم الطوب الفني الرمادي من MAHDY STONE، مثالية للتصاميم الصناعية والعصرية",
      images: ["/images/art-brick-grey-stone.jpg"],
      features: ["تصميم طوب فني", "رمادي عصري", "MAHDY STONE", "نمط صناعي"],
      rating: 4.8,
      reviews: 28,
      isNew: true,
    },
    {
      id: 41,
      title: "مجموعة الرخام الأبيض مع الحوض الأسود",
      category: "bathroom",
      description: "حمام فاخر بجدران رخامية بيضاء مع حوض أسود دائري ومرآة LED، يجمع بين الكلاسيكية والعصرية",
      images: ["/images/white-marble-black-basin.jpg"],
      features: ["رخام أبيض فاخر", "حوض أسود دائري", "مرآة LED", "تصميم متباين"],
      rating: 4.9,
      reviews: 35,
      isPopular: true,
    },
    {
      id: 42,
      title: "مجموعة الحمامات البيج مع اللمسات الذهبية",
      category: "bathroom",
      description: "حمام أنيق بألوان بيج دافئة مع حوض أبيض وصنابير ذهبية ونباتات طبيعية وإضاءة دافئة",
      images: ["/images/beige-bathroom-gold-accents.jpg"],
      features: ["ألوان بيج دافئة", "صنابير ذهبية", "نباتات طبيعية", "إضاءة دافئة"],
      rating: 4.8,
      reviews: 33,
      isNew: true,
    },
    {
      id: 43,
      title: "مجموعة الأحواض المزدوجة الرمادية",
      category: "faucets",
      description: "طاولة حمام رمادية عصرية مع حوضين أبيضين دائريين ومرآة LED، مثالية للحمامات الرئيسية",
      images: ["/images/double-basin-grey-vanity.jpg"],
      features: ["حوضان مزدوجان", "طاولة رمادية", "مرآة LED", "تصميم عصري"],
      rating: 4.9,
      reviews: 29,
      isPopular: true,
    },
    {
      id: 44,
      title: "مجموعة LAND SENSE المختلط",
      category: "cladding",
      description: "كسوة جدران حجرية مختلطة من MAHDY STONE بألوان ترابية دافئة وأحجام متنوعة، تضفي طابعاً طبيعياً مميزاً",
      images: ["/images/land-sense-medely-stone.jpg"],
      features: ["أحجار مختلطة", "ألوان ترابية", "أحجام متنوعة", "طابع طبيعي"],
      rating: 5.0,
      reviews: 26,
      isNew: true,
    },
    {
      id: 45,
      title: "مجموعة ART BRICK الأحمر الكلاسيكي",
      category: "cladding",
      description: "كسوة جدران بتصميم الطوب الأحمر التقليدي من MAHDY STONE، مثالية للتصاميم الكلاسيكية والتراثية",
      images: ["/images/art-brick-red-stone.jpg"],
      features: ["طوب أحمر تقليدي", "تصميم تراثي", "MAHDY STONE", "نمط كلاسيكي"],
      rating: 4.7,
      reviews: 34,
      isNew: true,
    },
  ]

  const filteredCollections = collections.filter((collection) => {
    return activeCategory === "all" || collection.category === activeCategory
  })

  // Separate featured and regular categories for better organization
  const featuredCategories = categories.filter((cat) => cat.featured)
  const regularCategories = categories.filter((cat) => !cat.featured)

  return (
    <div className="min-h-screen" dir="rtl">
      <Navigation />

      {/* Compact Hero Section - Products Visible Immediately */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 badge-glass px-6 py-3 text-base font-semibold rounded-full">مجموعاتنا المميزة</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-stone-light arabic-text-bold">
              بلاط وتجهيزات فاخرة
            </h1>
            <p className="text-xl text-stone-muted max-w-3xl mx-auto leading-relaxed arabic-text">
              اكتشف مجموعاتنا المتنوعة من البلاط البورسلان الإسباني وتجهيزات الحمامات من أرقى الماركات العالمية
            </p>
          </div>

          {/* Compact Category Filters */}
          <div className="glass-card rounded-2xl p-6 shadow-xl mb-8">
            {/* Featured Categories First */}
            <div className="flex flex-wrap gap-3 justify-center mb-4">
              {featuredCategories.map((category) => {
                const Icon = category.icon
                return (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className={`rounded-full px-6 py-3 flex items-center space-x-2 text-base font-semibold ${
                      activeCategory === category.id
                        ? "btn-gold shadow-lg scale-105"
                        : "glass-semi border-white/30 hover:border-amber-500 text-white hover:scale-105"
                    } transition-all duration-300`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="arabic-text">{category.name}</span>
                  </Button>
                )
              })}
            </div>

            {/* Regular Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {regularCategories.map((category) => {
                const Icon = category.icon
                return (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className={`rounded-full px-4 py-2 flex items-center space-x-2 text-sm font-semibold ${
                      activeCategory === category.id
                        ? "btn-gold shadow-lg"
                        : "glass-semi border-white/20 hover:border-amber-400 text-white/80 hover:text-white"
                    } transition-all duration-300`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="arabic-text">{category.name}</span>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid - Immediately Visible */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Info */}
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-stone-light arabic-text-bold">
              {categories.find((cat) => cat.id === activeCategory)?.name || "جميع المنتجات"}
            </h2>
            <p className="text-lg text-stone-muted arabic-text">{filteredCollections.length} منتج متاح في هذه الفئة</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map((collection, index) => (
              <Card
                key={collection.id}
                className="group hover-lift glass-card border-0 shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden card-hover"
              >
                <div className="relative">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={collection.images[0] || "/placeholder.svg"}
                      alt={collection.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {collection.isPopular && (
                        <Badge className="bg-red-500 text-white border-0 px-3 py-2 font-semibold">
                          <Star className="w-4 h-4 ml-1" />
                          الأكثر طلباً
                        </Badge>
                      )}
                      {collection.isNew && (
                        <Badge className="bg-green-500 text-white border-0 px-3 py-2 font-semibold">جديد</Badge>
                      )}
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="lg" className="flex-1 btn-white font-bold">
                        <Eye className="w-5 h-5 ml-2" />
                        عرض
                      </Button>
                      <Button size="lg" className="btn-outline-light">
                        <Heart className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors arabic-text-bold">
                      {collection.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-300">{collection.rating}</span>
                      <span className="text-xs text-gray-400">({collection.reviews})</span>
                    </div>
                  </div>

                  <p className="text-stone-muted mb-4 leading-relaxed arabic-text">{collection.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {collection.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-amber-400/50 text-amber-400 bg-amber-400/10 font-semibold text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button className="btn-gold rounded-full px-6 py-3 group-hover:scale-105 transition-all duration-300 arabic-text font-bold">
                      اطلب الآن
                      <ArrowRight className="w-4 h-4 mr-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCollections.length === 0 && (
            <div className="text-center py-16">
              <div className="glass-card rounded-3xl p-12">
                <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center mx-auto mb-6">
                  <Grid className="w-12 h-12 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 arabic-text-bold">لم نجد نتائج</h3>
                <p className="text-stone-muted mb-8 text-lg arabic-text max-w-2xl mx-auto">
                  جرب اختيار فئة أخرى لعرض المنتجات المتاحة
                </p>
                <Button
                  onClick={() => setActiveCategory("porcelain")}
                  className="btn-gold rounded-full px-8 py-3 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 arabic-text"
                >
                  عرض البلاط البورسلان
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-dark rounded-3xl p-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white arabic-text-bold">هل وجدت المنتج المثالي؟</h2>
            <p className="text-lg mb-12 text-white/90 arabic-text max-w-2xl mx-auto">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="btn-gold px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 arabic-text"
                >
                  احجز استشارة مجانية
                  <ArrowRight className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  className="btn-outline-light px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 arabic-text"
                >
                  شاهد خدماتنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
