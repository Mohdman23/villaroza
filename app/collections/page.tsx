"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Heart, Star, Grid, ArrowRight, Home, Waves, Droplets, Bath, Palette, Lightbulb, Search, Filter, SortAsc, Sparkles, Zap, TrendingUp, ChefHat } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function CollectionsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setIsVisible(true)
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    )
  }

  const categories = [
    { id: "porcelain", name: "البلاط البورسلان", icon: Palette, featured: true, color: "from-blue-500 to-purple-600" },
    { id: "bathroom", name: "تجهيزات الحمامات", icon: Bath, featured: true, color: "from-emerald-500 to-teal-600" },
    { id: "cladding", name: "كسوة الجدران", icon: Home, featured: true, color: "from-orange-500 to-red-600" },
    { id: "pool", name: "بلاط المسابح", icon: Waves, featured: false, color: "from-cyan-500 to-blue-600" },
    {
      id: "faucets",
      name: "البطاريات والأحواض",
      icon: Droplets,
      featured: false,
      color: "from-indigo-500 to-purple-600",
    },
    { id: "heating", name: "أنظمة التدفئة", icon: Lightbulb, featured: false, color: "from-yellow-500 to-orange-600" },
    { id: "stone", name: "البلاط الحجري", icon: Home, featured: false, color: "from-gray-500 to-slate-600" },
    { id: "all", name: "جميع المنتجات", icon: Grid, featured: false, color: "from-pink-500 to-rose-600" },
  ]

  const collections = [
    // BATHROOM PRODUCTS
    {
      id: 1,
      title: "حمام بيج مع لمسات ذهبية",
      category: "bathroom",
      description: "حمام أنيق بألوان بيج دافئة مع إضاءة ذهبية وتصميم كلاسيكي فاخر",
      images: ["/images/beige-bathroom-gold-accents.jpg"],
      features: ["ألوان بيج دافئة", "إضاءة ذهبية", "تصميم كلاسيكي", "رخام فاخر"],
      rating: 4.8,
      reviews: 28,
      isNew: true,
    },
    {
      id: 2,
      title: "حمام مع بلاط بورسلان بيج",
      category: "bathroom",
      description: "حمام عصري مع بلاط بورسلان بيج وتصميم أنيق",
      images: ["/images/bathroom_beige_tiles_porcelain.jpeg"],
      features: ["بلاط بورسلان بيج", "تصميم أنيق", "مواد عالية الجودة", "أناقة عصرية"],
      rating: 4.6,
      reviews: 24,
      isNew: true,
    },
    {
      id: 3,
      title: "حمام مع حوض",
      category: "bathroom",
      description: "حمام عصري مع حوض وتصميم نظيف",
      images: ["/images/bathroomwithsink.jpeg"],
      features: ["حوض عصري", "تصميم نظيف", "أناقة بسيطة", "عملي وأنيق"],
      rating: 4.4,
      reviews: 19,
      isNew: false,
    },
    {
      id: 4,
      title: "حمام أسود مع حوض أبيض",
      category: "bathroom",
      description: "حمام أنيق مع حوض أبيض ومرآة كبيرة وتصميم نظيف",
      images: ["/images/blackbathroom_w_whitesink.jpeg"],
      features: ["حوض أبيض", "مرآة كبيرة", "تصميم نظيف", "ألوان متباينة"],
      rating: 4.6,
      reviews: 24,
      isNew: false,
    },
    {
      id: 5,
      title: "حمام مع حوض أسود",
      category: "bathroom",
      description: "حمام عصري مع حوض أسود وبلاط بورسلان داكن وتصميم معاصر",
      images: ["/images/blacksinkwithdarkporcelainpatternbehindtoilet.jpeg"],
      features: ["حوض أسود", "بلاط بورسلان داكن", "تصميم معاصر", "ألوان داكنة"],
      rating: 4.8,
      reviews: 31,
      isNew: true,
    },
    {
      id: 6,
      title: "حمام صغير مع مرآة كبيرة",
      category: "bathroom",
      description: "حمام صغير مع حوض أسود ومرآة كبيرة وتصميم مينيماليست",
      images: ["/images/blacksmallbathroomsinkwithlargemirror.jpeg"],
      features: ["حوض أسود", "مرآة كبيرة", "تصميم مينيماليست", "مساحة صغيرة"],
      rating: 4.5,
      reviews: 22,
      isNew: false,
    },
    {
      id: 7,
      title: "حمام رمادي مع مرحاض",
      category: "bathroom",
      description: "حمام رمادي عصري مع مرحاض وبلاط بورسلان داكن",
      images: ["/images/darkgreytoiletwithporcelain.jpeg"],
      features: ["ألوان رمادية", "مرحاض عصري", "بلاط بورسلان", "تصميم داكن"],
      rating: 4.4,
      reviews: 19,
      isNew: false,
    },
    {
      id: 8,
      title: "حمام مع رخام داكن",
      category: "bathroom",
      description: "حمام أنيق مع رخام داكن خلف المرحاض الأبيض وتصميم متباين",
      images: ["/images/darkmarblebehindwhitetoilet.jpeg"],
      features: ["رخام داكن", "مرحاض أبيض", "تصميم متباين", "أناقة كلاسيكية"],
      rating: 4.7,
      reviews: 27,
      isNew: true,
    },
    {
      id: 9,
      title: "حمام عصري متطور",
      category: "bathroom",
      description: "حمام عصري متطور مع حوض ومرآة متطورة وتصميم فاخر",
      images: ["/images/extermelymodernbathroomwithextramodernsinkandmirror.jpeg"],
      features: ["تصميم متطور", "حوض عصري", "مرآة متطورة", "فخامة عصرية"],
      rating: 4.9,
      reviews: 41,
      isPopular: true,
    },
    {
      id: 10,
      title: "حمام بورسلان كامل",
      category: "bathroom",
      description: "حمام كامل بالبلاط البورسلان مع حوض أبيض ومرآة عصرية",
      images: ["/images/fullmodernbathroomporcelaintileswhitesinkandmodernmirror.jpeg"],
      features: ["بلاط بورسلان", "حوض أبيض", "مرآة عصرية", "تصميم كامل"],
      rating: 4.8,
      reviews: 35,
      isPopular: true,
    },
    {
      id: 11,
      title: "حمام رمادي بسيط",
      category: "bathroom",
      description: "حمام رمادي بسيط مع تصميم نظيف وعملي",
      images: ["/images/grey1_bathroom.jpeg"],
      features: ["ألوان رمادية", "تصميم بسيط", "نظيف وعملي", "أناقة مينيمالية"],
      rating: 4.3,
      reviews: 18,
      isNew: false,
    },
    {
      id: 12,
      title: "حمام رخام فاخر",
      category: "bathroom",
      description: "حمام فاخر بالرخام مع تصميم كلاسيكي أنيق",
      images: ["/images/modern-grey-bathroom-complete.jpg"],
      features: ["رخام فاخر", "تصميم كلاسيكي", "أناقة فاخرة", "مواد عالية الجودة"],
      rating: 5.0,
      reviews: 48,
      isPopular: true,
    },
    {
      id: 13,
      title: "حمام رخام متكامل فاخر",
      category: "bathroom",
      description: "حمام متكامل فاخر بالرخام مع جميع التجهيزات والإضاءة",
      images: ["/images/modern-grey-bathroom-complete.jpg"],
      features: ["رخام متكامل", "تجهيزات فاخرة", "إضاءة متطورة", "تصميم متكامل"],
      rating: 5.0,
      reviews: 52,
      isPopular: true,
    },
    {
      id: 14,
      title: "حمام رمادي عصري متكامل",
      category: "bathroom",
      description: "حمام رمادي عصري متكامل مع جميع التجهيزات",
      images: ["/images/modern-grey-bathroom-complete.jpg"],
      features: ["ألوان رمادية", "تصميم عصري", "متكامل", "تجهيزات شاملة"],
      rating: 4.8,
      reviews: 37,
      isPopular: true,
    },
    {
      id: 15,
      title: "حمام مع حوض وبلاط",
      category: "bathroom",
      description: "حمام عصري مع حوض وبلاط حمام وتصميم متكامل",
      images: ["/images/modernbathroomsinkandsinktilesandbathroomtiles.jpeg"],
      features: ["حوض عصري", "بلاط حمام", "تصميم متكامل", "مواد عالية الجودة"],
      rating: 4.6,
      reviews: 25,
      isNew: true,
    },
    {
      id: 16,
      title: "بلاط حمام عصري",
      category: "bathroom",
      description: "بلاط حمام عصري مع تصميم معاصر وأنيق",
      images: ["/images/modernbathroomsinktiles.jpeg"],
      features: ["بلاط عصري", "تصميم معاصر", "أنيق وعملي", "مواد متطورة"],
      rating: 4.5,
      reviews: 21,
      isNew: false,
    },
    {
      id: 17,
      title: "حمام مع بلاط بورسلان",
      category: "bathroom",
      description: "حمام عصري مع بلاط بورسلان وحوض ومرآة عصرية",
      images: ["/images/modernbathroomtileswithmodernpatternporcelainandmodernsinkandmirror.jpeg"],
      features: ["بلاط بورسلان", "حوض عصري", "مرآة عصرية", "تصميم متطور"],
      rating: 4.7,
      reviews: 30,
      isNew: true,
    },
    {
      id: 18,
      title: "حمام مع بلاط أرضية وجدران",
      category: "bathroom",
      description: "حمام عصري مع بلاط أرضية وجدران وتصميم متكامل",
      images: ["/images/modernbathroomwithpatternfloorandwall-tiles.jpeg"],
      features: ["بلاط أرضية", "بلاط جدران", "تصميم متكامل", "أناقة عصرية"],
      rating: 4.6,
      reviews: 26,
      isNew: true,
    },
    {
      id: 19,
      title: "حمام مع بلاط أرضية وجدران 2",
      category: "bathroom",
      description: "حمام عصري مع بلاط أرضية وجدران وتصميم متطور",
      images: ["/images/modernbathroomwithpatternfloorandwall-tiles2.jpeg"],
      features: ["بلاط أرضية", "بلاط جدران", "تصميم متطور", "مواد فاخرة"],
      rating: 4.7,
      reviews: 28,
      isNew: true,
    },
    {
      id: 20,
      title: "حمام مع بلاط بورسلان",
      category: "bathroom",
      description: "حمام عصري مع بلاط بورسلان وتصميم أنيق",
      images: ["/images/modernbathroomwithporcelaintiles.jpeg"],
      features: ["بلاط بورسلان", "تصميم أنيق", "مواد عالية الجودة", "أناقة عصرية"],
      rating: 4.8,
      reviews: 34,
      isPopular: true,
    },
    {
      id: 21,
      title: "حمام مع بلاط دش",
      category: "bathroom",
      description: "حمام عصري مع بلاط دش وتصميم متطور",
      images: ["/images/modernbathroomwithshowertiles.jpeg"],
      features: ["بلاط دش", "تصميم متطور", "مواد مقاومة للماء", "أناقة عصرية"],
      rating: 4.5,
      reviews: 23,
      isNew: true,
    },
    {
      id: 22,
      title: "حمام مع حوض ودش ومرآة",
      category: "bathroom",
      description: "حمام متكامل مع حوض ودش ومرآة وتصميم عصري",
      images: ["/images/modernbathroomwithsinkshowertilesandmirror.jpeg"],
      features: ["حوض عصري", "دش متطور", "مرآة عصرية", "تصميم متكامل"],
      rating: 4.8,
      reviews: 36,
      isPopular: true,
    },
    {
      id: 23,
      title: "حوضان مزدوجان مع مرآة كبيرة",
      category: "bathroom",
      description: "حمام مع حوضين مزدوجين ومرآة كبيرة وتصميم فاخر",
      images: ["/images/moderndualsinkandonebigmirror.jpeg"],
      features: ["حوضان مزدوجان", "مرآة كبيرة", "تصميم فاخر", "أناقة عصرية"],
      rating: 4.9,
      reviews: 42,
      isPopular: true,
    },
    {
      id: 24,
      title: "حمام مع حوض زجاجي شفاف",
      category: "bathroom",
      description: "حمام عصري مع حوض زجاجي شفاف ومرآة عصرية",
      images: ["/images/modernglasseffectransparentsinkandmodernmirror.jpeg"],
      features: ["حوض زجاجي شفاف", "مرآة عصرية", "تصميم عصري", "أناقة معاصرة"],
      rating: 4.7,
      reviews: 31,
      isNew: true,
    },
    {
      id: 25,
      title: "حمام رخام عصري متكامل",
      category: "bathroom",
      description: "حمام رخام عصري متكامل مع جميع التجهيزات",
      images: ["/images/modernmarblebathroomcomplete.jpeg"],
      features: ["رخام عصري", "تصميم متكامل", "تجهيزات شاملة", "أناقة فاخرة"],
      rating: 4.9,
      reviews: 44,
      isPopular: true,
    },
    {
      id: 26,
      title: "دش بورسلان عصري",
      category: "bathroom",
      description: "دش بورسلان عصري مع تصميم متطور ومواد فاخرة",
      images: ["/images/modernporcelainshower.jpeg"],
      features: ["دش بورسلان", "تصميم متطور", "مواد فاخرة", "أناقة عصرية"],
      rating: 4.6,
      reviews: 27,
      isNew: true,
    },
    {
      id: 27,
      title: "حمام أبيض مع نمط",
      category: "bathroom",
      description: "حمام أبيض عصري مع نمط وتصميم متكامل",
      images: ["/images/modernwhitebathroompatterncomplete.jpeg"],
      features: ["ألوان بيضاء", "نمط عصري", "تصميم متكامل", "أناقة عصرية"],
      rating: 4.8,
      reviews: 38,
      isPopular: true,
    },
    {
      id: 28,
      title: "حمام مع حوض مربع",
      category: "bathroom",
      description: "حمام عصري مع حوض مربع وتصميم أنيق",
      images: ["/images/squaresink2.jpeg"],
      features: ["حوض مربع", "تصميم أنيق", "عصري وعملي", "أناقة معاصرة"],
      rating: 4.4,
      reviews: 20,
      isNew: false,
    },
    {
      id: 29,
      title: "حمام مع حوض أبيض مربع",
      category: "bathroom",
      description: "حمام مع حوض أبيض مربع وتصميم نظيف",
      images: ["/images/whitesquarebathroomsink.jpeg"],
      features: ["حوض أبيض مربع", "تصميم نظيف", "أناقة بسيطة", "عملي وأنيق"],
      rating: 4.3,
      reviews: 17,
      isNew: false,
    },
    {
      id: 30,
      title: "حمام مع حوض أبيض مربع 2",
      category: "bathroom",
      description: "حمام مع حوض أبيض مربع وتصميم عصري",
      images: ["/images/whitesquaresink.jpeg"],
      features: ["حوض أبيض مربع", "تصميم عصري", "أناقة معاصرة", "عملي وفاخر"],
      rating: 4.5,
      reviews: 22,
      isNew: true,
    },
    {
      id: 31,
      title: "مرحاض أبيض",
      category: "bathroom",
      description: "مرحاض أبيض عصري مع تصميم نظيف",
      images: ["/images/whitetoilet.jpeg"],
      features: ["مرحاض أبيض", "تصميم نظيف", "عصري وعملي", "أناقة بسيطة"],
      rating: 4.2,
      reviews: 15,
      isNew: false,
    },
    {
      id: 32,
      title: "مرحاض أبيض مع بلاط بورسلان",
      category: "bathroom",
      description: "مرحاض أبيض مع بلاط بورسلان على الأرضية والجدران",
      images: ["/images/whitetoiletwithporcelaintilesonfloorandwalls.jpeg"],
      features: ["مرحاض أبيض", "بلاط بورسلان", "أرضية وجدران", "تصميم متكامل"],
      rating: 4.6,
      reviews: 25,
      isNew: true,
    },
    {
      id: 33,
      title: "حمام مع حوض أبيض",
      category: "bathroom",
      description: "حمام أنيق مع حوض أبيض وتصميم نظيف",
      images: ["/images/whitebathroomsink.jpeg"],
      features: ["حوض أبيض", "تصميم نظيف", "أناقة بسيطة", "عملي وأنيق"],
      rating: 4.4,
      reviews: 19,
      isNew: false,
    },
    {
      id: 34,
      title: "حمام مع حوض أبيض وبلاط داكن",
      category: "bathroom",
      description: "حمام مع حوض أبيض وبلاط بورسلان داكن خلفه",
      images: ["/images/whitebathroomsinkwithdarkporcelainbehindit.jpeg"],
      features: ["حوض أبيض", "بلاط داكن", "تصميم متباين", "أناقة عصرية"],
      rating: 4.5,
      reviews: 21,
      isNew: true,
    },
    {
      id: 35,
      title: "حمام مع حوض أبيض وبياض حوله",
      category: "bathroom",
      description: "حمام مع حوض أبيض وبياض حوله وتصميم نظيف",
      images: ["/images/whitebathroomsinkwithwhitearoundit.jpeg"],
      features: ["حوض أبيض", "بياض حوله", "تصميم نظيف", "أناقة بسيطة"],
      rating: 4.3,
      reviews: 16,
      isNew: false,
    },
    {
      id: 36,
      title: "حمام مع حوض أبيض 2",
      category: "bathroom",
      description: "حمام مع حوض أبيض وتصميم عصري",
      images: ["/images/whitesink2.jpeg"],
      features: ["حوض أبيض", "تصميم عصري", "أناقة معاصرة", "عملي وفاخر"],
      rating: 4.4,
      reviews: 18,
      isNew: false,
    },
    {
      id: 37,
      title: "حمام مع حوض أبيض ومرآة دائرية",
      category: "bathroom",
      description: "حمام مع حوض أبيض ومرآة دائرية وتصميم أنيق",
      images: ["/images/whitesinkmodernbathroommodernmirrorovalLshapedbathroom.jpeg"],
      features: ["حوض أبيض", "مرآة دائرية", "تصميم أنيق", "أناقة عصرية"],
      rating: 4.7,
      reviews: 32,
      isNew: true,
    },
    {
      id: 38,
      title: "حمام مع حوض أبيض",
      category: "bathroom",
      description: "حمام أنيق مع حوض أبيض وتصميم نظيف",
      images: ["/images/white_sink.jpeg"],
      features: ["حوض أبيض", "تصميم نظيف", "أناقة بسيطة", "عملي وأنيق"],
      rating: 4.4,
      reviews: 19,
      isNew: false,
    },

    // FAUCETS & SINKS
    {
      id: 39,
      title: "الأحواض الهندسية السوداء",
      category: "faucets",
      description: "أحواض سيراميك بتصميم هندسي عصري باللون الأسود، تضفي لمسة من الأناقة والفخامة",
      images: ["/images/black-geometric-basin.jpg"],
      features: ["سيراميك عالي الجودة", "تصميم هندسي", "أسود لامع", "سهل التنظيف"],
      rating: 4.7,
      reviews: 29,
      isPopular: false,
    },
    {
      id: 40,
      title: "الأحواض الكريستالية الفاخرة",
      category: "faucets",
      description: "أحواض حمامات كريستالية بتصاميم فنية راقية",
      images: ["/images/blue-crystal-basin.jpg"],
      features: ["كريستال عالي الجودة", "تصاميم فنية", "مقاوم للخدوش", "ضمان 5 سنوات"],
      rating: 4.9,
      reviews: 45,
      isPopular: true,
    },
    {
      id: 41,
      title: "الأحواض الكريستالية البيضاء",
      category: "faucets",
      description: "أحواض كريستال شفافة بنقوش هندسية معقدة، تعكس الضوء بطريقة ساحرة",
      images: ["/images/crystal-oval-basin.jpg"],
      features: ["كريستال شفاف", "نقوش هندسية", "عاكس للضوء", "تصميم فني"],
      rating: 4.9,
      reviews: 37,
      isPopular: true,
    },
    {
      id: 42,
      title: "الأحواض المزدوجة الرمادية",
      category: "faucets",
      description: "أحواض مزدوجة بتصميم رمادي عصري مع سطح رخامي أبيض وتصميم معلق أنيق",
      images: ["/images/double-basin-grey-vanity.jpg"],
      features: ["حوضان مزدوجان", "تصميم معلق", "رخام أبيض", "أناقة عصرية"],
      rating: 4.9,
      reviews: 29,
      isPopular: true,
    },
    {
      id: 43,
      title: "الأحواض الفضية المزخرفة",
      category: "faucets",
      description: "أحواض معدنية بلمسة فضية مع زخارف نباتية راقية، تجمع بين الأناقة والعملية",
      images: ["/images/silver-decorative-basin.jpg"],
      features: ["معدن مطلي فضي", "زخارف نباتية", "مقاوم للصدأ", "تصميم كلاسيكي"],
      rating: 4.6,
      reviews: 41,
      isNew: false,
    },
    {
      id: 44,
      title: "الأحواض النحاسية الذهبية",
      category: "faucets",
      description: "أحواض نحاسية فاخرة بلمسة ذهبية، مصنوعة يدوياً بتقنيات تقليدية مع نقوش هندسية دقيقة",
      images: ["/images/gold-brass-basin.jpg"],
      features: ["نحاس أصلي", "صناعة يدوية", "مقاوم للتآكل", "تصميم هندسي"],
      rating: 4.8,
      reviews: 33,
      isNew: true,
    },
    {
      id: 45,
      title: "الأحواض الرخامية البيضاء",
      category: "faucets",
      description: "أحواض بورسلان بتأثير الرخام الأبيض الطبيعي، تضفي فخامة كلاسيكية على الحمام",
      images: ["/images/white-marble-basin.jpg"],
      features: ["تأثير رخامي", "بورسلان عالي الجودة", "أبيض كلاسيكي", "مقاوم للبقع"],
      rating: 4.8,
      reviews: 28,
      isNew: true,
    },
    {
      id: 46,
      title: "الأحواض النحاسية المطروقة",
      category: "faucets",
      description: "أحواض نحاسية مطروقة يدوياً بتقنيات تراثية، تجمع بين الأصالة والفخامة",
      images: ["/images/bronze-hammered-basin.jpg"],
      features: ["نحاس مطروق يدوياً", "تقنيات تراثية", "مقاوم للتآكل", "قطعة فنية"],
      rating: 4.7,
      reviews: 44,
      isPopular: true,
    },
    {
      id: 47,
      title: "الأحواض الرخامية الرمادية",
      category: "faucets",
      description: "أحواض بورسلان بتأثير الرخام الرمادي، تناسب التصاميم العصرية والمعاصرة",
      images: ["/images/grey-marble-basin.jpg"],
      features: ["تأثير رخامي رمادي", "بورسلان متين", "تصميم عصري", "سهل الصيانة"],
      rating: 4.6,
      reviews: 31,
      isNew: false,
    },
    {
      id: 50,
      title: "الأحواض المعدنية المزخرفة",
      category: "faucets",
      description: "أحواض معدنية بنقوش هندسية دقيقة مع سطح رخامي أسود وتصميم فني راقي",
      images: ["/images/black-geometric-basin.jpg"],
      features: ["نقوش هندسية معدنية", "سطح رخامي أسود", "تصميم فني", "صناعة يدوية"],
      rating: 4.7,
      reviews: 33,
      isPopular: true,
    },

    // POOL TILES
    {
      id: 51,
      title: "بلاط المسابح المتخصص",
      category: "pool",
      description: "بلاط مسابح مقاوم للكلور مع مواد التركيب من MAPEI",
      images: ["/images/pooltiles.jpeg"],
      features: ["مقاوم للكلور", "مضاد للانزلاق", "MAPEI", "ألوان زاهية ثابتة"],
      rating: 5.0,
      reviews: 52,
      isPopular: true,
    },
    {
      id: 52,
      title: "بلاط المسابح الأزرق",
      category: "pool",
      description: "بلاط مسابح أزرق فاخر مع تصميم عصري",
      images: ["/images/pooltiles2.jpeg"],
      features: ["أزرق فاخر", "تصميم عصري", "مقاوم للكلور", "أناقة عصرية"],
      rating: 4.9,
      reviews: 38,
      isNew: true,
    },
    {
      id: 53,
      title: "بلاط المسابح الأبيض",
      category: "pool",
      description: "بلاط مسابح أبيض أنيق مع تصميم نظيف",
      images: ["/images/pooltiles4.jpeg"],
      features: ["أبيض أنيق", "تصميم نظيف", "مقاوم للكلور", "أناقة بسيطة"],
      rating: 4.8,
      reviews: 35,
      isPopular: true,
    },
    {
      id: 54,
      title: "بلاط المسابح الأزرق السماوي",
      category: "pool",
      description: "بلاط مسابح أزرق سماوي مع تصميم هادئ",
      images: ["/images/pooltiles5.jpeg"],
      features: ["أزرق سماوي", "تصميم هادئ", "مقاوم للكلور", "أناقة طبيعية"],
      rating: 4.7,
      reviews: 32,
      isNew: true,
    },
    {
      id: 55,
      title: "بلاط المسابح مع نمط",
      category: "pool",
      description: "بلاط مسابح مع نمط وتصميم متطور",
      images: ["/images/pooltilespattern1.jpeg"],
      features: ["نمط متطور", "تصميم عصري", "مقاوم للكلور", "أناقة فاخرة"],
      rating: 4.9,
      reviews: 41,
      isPopular: true,
    },
    {
      id: 56,
      title: "PAPUA BLUE الزرقاء العميقة",
      category: "pool",
      description: "موزاييك زجاجي إسباني بلون أزرق عميق من ALTOGLASS، مثالي للمسابح اللانهائية والمناظر الطبيعية",
      images: ["/images/papua-blue-pool.jpg"],
      features: ["أزرق عميق", "31×45 سم", "للمسابح اللانهائية", "منظر طبيعي"],
      rating: 4.9,
      reviews: 37,
      isNew: true,
    },

    // KITCHEN TILES
    {
      id: 57,
      title: "BEVELLED الأصفر الزاهي",
      category: "kitchen",
      description: "بلاط BEVELLED أصفر زاهي (10×30 سم) مثالي للمطابخ العصرية، يضفي إشراقاً وحيوية على المساحة",
      images: ["/images/bevelled-yellow-kitchen.jpg"],
      features: ["أصفر زاهي", "10×30 سم", "تشطيب لامع", "مقاوم للبقع"],
      rating: 4.8,
      reviews: 29,
      isNew: true,
    },
    {
      id: 58,
      title: "BEVELLED الأحمر الدموي",
      category: "kitchen",
      description: "بلاط BEVELLED أحمر عميق (10×30 سم) يضفي دراما وأناقة على المطابخ والحمامات الفاخرة",
      images: ["/images/bevelled-blood-red-kitchen.jpg"],
      features: ["أحمر عميق", "10×30 سم", "تأثير دراماتيكي", "جودة عالية"],
      rating: 4.9,
      reviews: 34,
      isPopular: true,
    },
    {
      id: 59,
      title: "BEVELLED الأزرق الملكي",
      category: "kitchen",
      description: "بلاط BEVELLED أزرق ملكي (10×30 سم) مثالي للمطابخ العصرية",
      images: ["/images/bevelled-blue-tiles.jpg"],
      features: ["أزرق ملكي", "10×30 سم", "مناسب للمطابخ", "تصميم عصري"],
      rating: 4.7,
      reviews: 31,
      isNew: true,
    },
    {
      id: 60,
      title: "BEVELLED الأخضر الواحي",
      category: "kitchen",
      description: "بلاط BEVELLED أخضر واحي (10×30 سم) بنمط هيرنجبون، يجمع بين الطبيعة والأناقة العصرية",
      images: ["/images/bevelled-oasis-green-kitchen.jpg"],
      features: ["أخضر واحي", "نمط هيرنجبون", "10×30 سم", "تصميم طبيعي"],
      rating: 5.0,
      reviews: 27,
      isPopular: true,
    },
    {
      id: 61,
      title: "BEVELLED البرتقالي النابض",
      category: "kitchen",
      description: "بلاط BEVELLED برتقالي نابض بالحياة (10×30 سم) يضفي دفئاً وحيوية على المساحات الداخلية",
      images: ["/images/bevelled-orange-kitchen.jpg"],
      features: ["برتقالي نابض", "10×30 سم", "دافئ ومشرق", "سهل التنظيف"],
      rating: 4.6,
      reviews: 33,
      isNew: true,
    },
    {
      id: 62,
      title: "BEVELLED الأبيض النقي",
      category: "kitchen",
      description: "بلاط BEVELLED أبيض نقي (10×30 سم) مثالي للمطابخ العصرية والنظيفة",
      images: ["/images/bevelled-white-kitchen.jpg"],
      features: ["أبيض نقي", "10×30 سم", "نظيف وعملي", "أناقة بسيطة"],
      rating: 4.8,
      reviews: 36,
      isPopular: true,
    },
    {
      id: 63,
      title: "BEVELLED الأسود الأنيق",
      category: "kitchen",
      description: "بلاط BEVELLED أسود أنيق (10×30 سم) مع حوض أسود عصري، مثالي للمطابخ المعاصرة والمينيماليست",
      images: ["/images/bevelled-black-tiles.jpg"],
      features: ["أسود أنيق", "10×30 سم", "تصميم مينيماليست", "حوض عصري"],
      rating: 4.8,
      reviews: 38,
      isNew: true,
    },

    // STONE CLADDING
    {
      id: 64,
      title: "MOUNTAIN RANGE الذهبية",
      category: "cladding",
      description: "كسوة جدران حجرية طبيعية من MAHDY STONE بألوان ذهبية دافئة، تضفي فخامة وطابعاً طبيعياً مميزاً",
      images: ["/images/mountain-range-sunshine-stone.jpg"],
      features: ["ألوان ذهبية", "تأثير جبلي", "MAHDY STONE", "طوب أحمر تقليدي"],
      rating: 5.0,
      reviews: 24,
      isNew: true,
    },
    {
      id: 65,
      title: "MOUNTAIN ROCKS الرمادية",
      category: "cladding",
      description: "كسوة جدران حجرية من MAHDY STONE بأحجار رمادية كبيرة وملمس طبيعي خشن للتصاميم الجبلية",
      images: ["/images/mountain-rocks-grey-stone.jpg"],
      features: ["أحجار كبيرة", "ملمس خشن", "تصميم جبلي", "MAHDY STONE"],
      rating: 4.8,
      reviews: 26,
      isNew: true,
    },
    {
      id: 66,
      title: "ART BRICK الأحمر التقليدي",
      category: "cladding",
      description: "كسوة جدران بتصميم الطوب الأحمر التقليدي من MAHDY STONE، مثالية للتصاميم الكلاسيكية والتراثية",
      images: ["/images/art-brick-red-mahdy.jpg"],
      features: ["طوب أحمر تقليدي", "تصميم تراثي", "MAHDY STONE", "نمط كلاسيكي"],
      rating: 4.7,
      reviews: 30,
      isPopular: true,
    },
    {
      id: 67,
      title: "ART BRICK الرمادي",
      category: "cladding",
      description: "كسوة جدران بتصميم الطوب الرمادي من MAHDY STONE، مثالية للتصاميم العصرية",
      images: ["/images/art-brick-grey-stone.jpg"],
      features: ["طوب رمادي", "تصميم عصري", "MAHDY STONE", "أناقة معاصرة"],
      rating: 4.6,
      reviews: 28,
      isNew: true,
    },
    {
      id: 68,
      title: "LAND SENSE البيج الطبيعي",
      category: "cladding",
      description: "كسوة جدران حجرية طبيعية من MAHDY STONE بلون بيج دافئ، تضفي لمسة طبيعية وأناقة كلاسيكية على المساحات الداخلية والخارجية",
      images: ["/images/land-sense-beige-stone.jpg"],
      features: ["حجر طبيعي", "MAHDY STONE", "بيج دافئ", "للداخل والخارج"],
      rating: 4.9,
      reviews: 31,
      isNew: true,
    },
    {
      id: 69,
      title: "LAND SENSE المختلط",
      category: "cladding",
      description: "كسوة جدران حجرية مختلطة من MAHDY STONE بألوان متدرجة، تضفي طابعاً طبيعياً مميزاً",
      images: ["/images/land-sense-medely-stone.jpg"],
      features: ["ألوان متدرجة", "طابع طبيعي", "MAHDY STONE", "تصميم مختلط"],
      rating: 4.8,
      reviews: 29,
      isNew: true,
    },

    // SPECIALTY ITEMS
    {
      id: 70,
      title: "مدافئ المناشف الإسبانية",
      category: "heating",
      description: "مدافئ مناشف إسبانية فاخرة بتصاميم متنوعة: أبيض، ذهبي، أسود، وكروم مع ضمان الجودة الأوروبية",
      images: ["/images/spanish-luxury-towel-warmers.jpg"],
      features: ["صنع في إسبانيا", "4 ألوان متاحة", "جودة أوروبية", "ضمان شامل"],
      rating: 4.9,
      reviews: 52,
      isPopular: true,
    },
    {
      id: 71,
      title: "عرض البورسلان",
      category: "display",
      description: "عرض بورسلان فاخر مع مجموعة متنوعة من التصاميم والألوان",
      images: ["/images/porcelain-display.jpg"],
      features: ["بورسلان فاخر", "تصاميم متنوعة", "ألوان متعددة", "جودة عالية"],
      rating: 4.7,
      reviews: 35,
      isNew: true,
    },
    // PORCELAIN PRODUCTS
    {
      id: 72,
      title: "بلاط بورسلان إسباني فاخر",
      category: "porcelain",
      description: "بلاط بورسلان عالي الجودة بتصاميم عصرية من أفضل المصانع الإسبانية",
      images: ["/images/porcelain-display.jpg"],
      features: ["بورسلان إسباني", "تصاميم عصرية", "جودة عالية", "مقاوم للرطوبة"],
      rating: 4.8,
      reviews: 42,
      isPopular: true,
      isNew: false,
    },
    {
      id: 73,
      title: "بلاط بورسلان أبيض كلاسيكي",
      category: "porcelain",
      description: "بلاط بورسلان أبيض بتصميم كلاسيكي أنيق مناسب للحمامات والمطابخ",
      images: ["/images/bevelled-white-tiles.jpg"],
      features: ["لون أبيض نقي", "تصميم كلاسيكي", "سهل التنظيف", "مقاوم للبقع"],
      rating: 4.6,
      reviews: 38,
      isPopular: false,
      isNew: true,
    },
    {
      id: 74,
      title: "بلاط بورسلان رمادي عصري",
      category: "porcelain",
      description: "بلاط بورسلان رمادي بتصميم عصري يناسب الديكورات المعاصرة",
      images: ["/images/modern-grey-bathroom-complete.jpg"],
      features: ["لون رمادي عصري", "تصميم معاصر", "مقاوم للخدوش", "سهل التركيب"],
      rating: 4.7,
      reviews: 35,
      isPopular: true,
      isNew: false,
    },
    // STONE PRODUCTS
    {
      id: 75,
      title: "أحجار طبيعية فاخرة",
      category: "stone",
      description: "مجموعة متنوعة من الأحجار الطبيعية بألوان وتصاميم متنوعة",
      images: ["/images/land-sense-beige-stone.jpg"],
      features: ["أحجار طبيعية", "ألوان متنوعة", "مقاومة للعوامل الجوية", "جودة عالية"],
      rating: 4.9,
      reviews: 28,
      isPopular: true,
      isNew: false,
    },
    {
      id: 76,
      title: "أحجار جبلية رمادية",
      category: "stone",
      description: "أحجار طبيعية رمادية بتصميم جبلي أنيق مناسب للحدائق والمساحات الخارجية",
      images: ["/images/mountain-rocks-grey-stone.jpg"],
      features: ["تصميم جبلي", "لون رمادي طبيعي", "مقاوم للصقيع", "مثالي للحدائق"],
      rating: 4.5,
      reviews: 22,
      isPopular: false,
      isNew: true,
    },
    {
      id: 77,
      title: "أحجار شمسية ذهبية",
      category: "stone",
      description: "أحجار طبيعية بلون ذهبي شمسي تضيف دفئاً وأناقة للمساحات",
      images: ["/images/mountain-range-sunshine-stone.jpg"],
      features: ["لون ذهبي شمسي", "مقاوم للعوامل الجوية", "مثالي للحدائق", "جودة عالية"],
      rating: 4.7,
      reviews: 31,
      isPopular: true,
      isNew: false,
    },
    // ADDITIONAL MISSING IMAGES
    {
      id: 78,
      title: "طوب أحمر تقليدي",
      category: "stone",
      description: "طوب أحمر تقليدي بتصميم تراثي أنيق مناسب للديكورات الكلاسيكية",
      images: ["/images/art-brick-red-stone.jpg"],
      features: ["طوب أحمر تقليدي", "تصميم تراثي", "ألوان دافئة", "جودة عالية"],
      rating: 4.6,
      reviews: 25,
      isPopular: false,
      isNew: true,
    },
    {
      id: 79,
      title: "حمام أسود أنيق",
      category: "bathroom",
      description: "حمام أسود أنيق بتصميم مينيماليست مع تجهيزات عصرية",
      images: ["/images/bevelled-black-bathroom.jpg"],
      features: ["ألوان سوداء", "تصميم مينيماليست", "تجهيزات عصرية", "أناقة فاخرة"],
      rating: 4.7,
      reviews: 32,
      isPopular: true,
      isNew: false,
    },
    {
      id: 80,
      title: "بلاط أسود مشطوف",
      category: "porcelain",
      description: "بلاط أسود مشطوف بتصميم أنيق مناسب للحمامات والمطابخ",
      images: ["/images/bevelled-black-tiles.jpg"],
      features: ["لون أسود أنيق", "تشطيب مشطوف", "مقاوم للخدوش", "سهل التنظيف"],
      rating: 4.5,
      reviews: 28,
      isPopular: false,
      isNew: true,
    },
    {
      id: 81,
      title: "حمام أزرق ملكي",
      category: "bathroom",
      description: "حمام أزرق ملكي بتصميم عصري مع تجهيزات فاخرة",
      images: ["/images/bevelled-blue-bathroom.jpg"],
      features: ["ألوان زرقاء ملكية", "تصميم عصري", "تجهيزات فاخرة", "أناقة عصرية"],
      rating: 4.8,
      reviews: 35,
      isPopular: true,
      isNew: false,
    },
    {
      id: 82,
      title: "بلاط أزرق مشطوف",
      category: "porcelain",
      description: "بلاط أزرق مشطوف بتصميم عصري مناسب للمساحات المعاصرة",
      images: ["/images/bevelled-blue-tiles.jpg"],
      features: ["لون أزرق عصري", "تشطيب مشطوف", "تصميم معاصر", "جودة عالية"],
      rating: 4.6,
      reviews: 30,
      isPopular: false,
      isNew: true,
    },
    {
      id: 83,
      title: "بلاط برتقالي مشطوف",
      category: "porcelain",
      description: "بلاط برتقالي مشطوف بتصميم دافئ ومشرق يضيف حيوية للمساحات",
      images: ["/images/bevelled-orange-tiles.jpg"],
      features: ["لون برتقالي دافئ", "تشطيب مشطوف", "تصميم مشرق", "سهل التنظيف"],
      rating: 4.4,
      reviews: 22,
      isPopular: false,
      isNew: true,
    },
    {
      id: 84,
      title: "بلاط أصفر مشطوف",
      category: "porcelain",
      description: "بلاط أصفر مشطوف بتصميم زاهي ومشرق يضيف دفئاً للمساحات",
      images: ["/images/bevelled-yellow-tiles.jpg"],
      features: ["لون أصفر زاهي", "تشطيب مشطوف", "تصميم مشرق", "مقاوم للبقع"],
      rating: 4.5,
      reviews: 26,
      isPopular: false,
      isNew: true,
    },
    {
      id: 85,
      title: "ديكور داخلي أنيق",
      category: "cladding",
      description: "ديكور داخلي أنيق بتصميم عصري يناسب المساحات المعاصرة",
      images: ["/images/galway-albar-interior.jpg"],
      features: ["ديكور داخلي", "تصميم عصري", "ألوان متناسقة", "أناقة معاصرة"],
      rating: 4.7,
      reviews: 33,
      isPopular: true,
      isNew: false,
    },
    {
      id: 86,
      title: "عرض أحجار طبيعية",
      category: "stone",
      description: "عرض متنوع من الأحجار الطبيعية بألوان وتصاميم متنوعة",
      images: ["/images/land-sense-beige-display.jpg"],
      features: ["أحجار طبيعية", "ألوان متنوعة", "تصاميم متنوعة", "جودة عالية"],
      rating: 4.8,
      reviews: 38,
      isPopular: true,
      isNew: false,
    },
    {
      id: 87,
      title: "حوض رخامي أبيض وأسود",
      category: "faucets",
      description: "حوض رخامي بتصميم أبيض وأسود أنيق مع تجهيزات فاخرة",
      images: ["/images/white-marble-black-basin.jpg"],
      features: ["رخام أبيض وأسود", "تصميم أنيق", "تجهيزات فاخرة", "أناقة عصرية"],
      rating: 4.9,
      reviews: 42,
      isPopular: true,
      isNew: false,
    },
    {
      id: 88,
      title: "خلفية حجرية طبيعية",
      category: "cladding",
      description: "خلفية حجرية طبيعية بتصميم أنيق مناسب للديكورات الداخلية والخارجية",
      images: ["/images/stone-wall-background.png"],
      features: ["خلفية حجرية", "تصميم طبيعي", "مناسب للداخل والخارج", "جودة عالية"],
      rating: 4.6,
      reviews: 29,
      isPopular: false,
      isNew: true,
    }
  ]

  const filteredCollections = collections.filter((collection) => {
    const matchesCategory = activeCategory === "all" || collection.category === activeCategory
    const matchesSearch = searchQuery === "" || 
      collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      collection.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      collection.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return matchesCategory && matchesSearch
  }).sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
      case "popular":
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0)
      case "rating":
        return b.rating - a.rating
      case "reviews":
        return b.reviews - a.reviews
      default:
        return 0
    }
  })

  const featuredCategories = categories.filter((cat) => cat.featured)
  const regularCategories = categories.filter((cat) => !cat.featured)

  // Loading Screen
  if (isLoading) {
  return (
      <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-amber-400/30 border-t-amber-400 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Grid className="w-8 h-8 text-amber-400 animate-pulse" />
          </div>
        </div>
          <h2 className="text-2xl font-bold text-white mb-2 arabic-text-bold">جاري تحميل المجموعات</h2>
          <p className="text-stone-400 arabic-text">اكتشف منتجاتنا المميزة...</p>
                      </div>
                  </div>
              )
  }

              return (
    <div className="min-h-screen pb-8 lg:pb-0" dir="rtl">
      <Navigation />

      {/* Mobile-Optimized Hero Section */}
      <section className="pt-16 lg:pt-20 pb-3 lg:pb-4 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-24 lg:w-32 h-24 lg:h-32 bg-amber-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 lg:w-40 h-32 lg:h-40 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-3 lg:mb-4">
            <div className="flex items-center justify-center mb-2 lg:mb-3">
              <Badge className="badge-glass px-3 lg:px-4 py-1.5 lg:py-2 text-xs font-bold rounded-full inline-flex items-center gap-1.5 lg:gap-2 shadow-2xl">
                <Sparkles className="w-3 h-3 text-amber-400" />
                مجموعاتنا المميزة
                <Zap className="w-3 h-3 text-amber-400" />
              </Badge>
            </div>
            
            <h1 className="text-xl sm:text-2xl lg:text-7xl font-bold mb-2 lg:mb-3 text-stone-light arabic-text-bold leading-tight bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
              بلاط وتجهيزات فاخرة
            </h1>
            
            <p className="text-sm sm:text-lg text-stone-muted max-w-2xl mx-auto leading-relaxed arabic-text mb-4">
              اكتشف مجموعاتنا المتنوعة من البلاط البورسلان الإسباني وتجهيزات الحمامات
            </p>

            {/* Mobile-Optimized Search and Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="glass-card rounded-lg lg:rounded-xl p-3 lg:p-4 shadow-2xl">
                <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
                  {/* Search Bar */}
                  <div className="flex-1 relative">
                    <Search className="absolute right-2 lg:right-3 top-1/2 transform -translate-y-1/2 w-3.5 lg:w-4 h-3.5 lg:h-4 text-stone-400" />
                    <input
                      ref={searchRef}
                      type="text"
                      placeholder="ابحث عن المنتجات..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="input-glass w-full px-2.5 lg:px-3 py-2.5 lg:py-3 pr-8 lg:pr-10 rounded-lg text-xs lg:text-sm arabic-text focus:ring-2 focus:ring-amber-400"
                      dir="rtl"
                    />
          </div>

                  {/* Sort Dropdown */}
                  <div className="flex gap-1.5 lg:gap-2">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="input-glass px-2.5 lg:px-3 py-2.5 lg:py-3 rounded-lg text-xs lg:text-sm arabic-text min-w-0"
                    >
                      <option value="newest">الأحدث</option>
                      <option value="popular">الأكثر شعبية</option>
                      <option value="rating">الأعلى تقييماً</option>
                      <option value="reviews">الأكثر مراجعة</option>
                    </select>

                    <Button
                      onClick={() => setShowFilters(!showFilters)}
                      className="btn-outline-light px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg font-bold text-xs lg:text-sm"
                    >
                      <Filter className="w-3.5 lg:w-4 h-3.5 lg:h-4 ml-1" />
                      فلترة
                    </Button>
                  </div>
                </div>

                {/* Results Count */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/20">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                    <span className="text-white font-bold arabic-text text-sm">
                      {filteredCollections.length} منتج متاح
                    </span>
                  </div>
                  {favorites.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-400 fill-current" />
                      <span className="text-white font-bold arabic-text text-sm">
                        {favorites.length} مفضل
                      </span>
                      </div>
                    )}
                  </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Sticky Filter Bar */}
      <section className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-white/10 px-4 py-1 sm:py-3">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Category Filter - Horizontal Scroll */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-amber-500 text-black shadow-lg"
                      : "glass-semi border-white/20 text-white hover:border-amber-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="arabic-text whitespace-nowrap font-semibold text-sm">{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mobile-Optimized Collections Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Category Info - Compact for Mobile */}
          <div className="text-center mb-3">
            <h2 className="text-lg sm:text-xl font-bold mb-1 text-stone-light arabic-text-bold">
              {categories.find((cat) => cat.id === activeCategory)?.name || "جميع المنتجات"}
            </h2>
            <p className="text-xs text-stone-muted arabic-text">{filteredCollections.length} منتج متاح</p>
          </div>

          {/* Mobile-First Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {filteredCollections.map((collection, index) => (
              <Card
                key={collection.id}
                className="group glass-card border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                    <Image
                      src={collection.images[0] || "/placeholder.svg"}
                      alt={collection.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                    {/* Mobile-Optimized Badges */}
                    <div className="absolute top-2 right-2 flex flex-col gap-1">
                      {collection.isPopular && (
                        <Badge className="bg-red-500 text-white border-0 px-2 py-1 text-xs font-bold shadow-lg">
                          <Star className="w-3 h-3 ml-1" />
                          الأكثر طلباً
                        </Badge>
                      )}
                      {collection.isNew && (
                        <Badge className="bg-green-500 text-white border-0 px-2 py-1 text-xs font-bold shadow-lg">
                          <Sparkles className="w-3 h-3 ml-1" />
                          جديد
                        </Badge>
                      )}
                    </div>

                    {/* Mobile-Optimized Rating */}
                    <div className="absolute top-2 left-2">
                      <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 shadow-lg">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white text-xs font-bold">{collection.rating}</span>
                        <span className="text-white/70 text-xs">({collection.reviews})</span>
                      </div>
                    </div>

                    {/* Enhanced Hover Actions */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <Button size="sm" className="flex-1 btn-white font-bold text-sm h-12 hover:scale-105 transition-transform">
                        <Eye className="w-4 h-4 ml-1" />
                        عرض التفاصيل
                      </Button>
                      <Button 
                        size="sm" 
                        className={`h-12 w-12 p-0 transition-all duration-300 ${
                          favorites.includes(collection.id) 
                            ? 'bg-red-500 hover:bg-red-600' 
                            : 'btn-outline-light hover:bg-red-500'
                        }`}
                        onClick={() => toggleFavorite(collection.id)}
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(collection.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-amber-400 transition-colors arabic-text-bold leading-tight mb-2 lg:mb-3">
                    {collection.title}
                  </h3>

                  <p className="text-stone-muted mb-3 lg:mb-4 leading-relaxed arabic-text text-xs lg:text-sm line-clamp-2">
                    {collection.description}
                  </p>

                  {/* Enhanced Features */}
                  <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-3 lg:mb-4">
                    {collection.features.slice(0, 3).map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-amber-400/50 text-amber-400 bg-amber-400/10 font-semibold text-xs px-2 lg:px-3 py-1 hover:scale-105 transition-transform"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <Button className="w-full btn-gold rounded-lg lg:rounded-xl py-3 lg:py-4 group-hover:scale-105 transition-all duration-300 arabic-text font-bold text-sm lg:text-lg shadow-lg hover:shadow-xl">
                    <Zap className="w-4 h-4 lg:w-5 lg:h-5 ml-1 lg:ml-2 group-hover:rotate-12 transition-transform" />
                    اطلب الآن
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredCollections.length === 0 && (
            <div className="text-center py-16">
              <div className="glass-card rounded-3xl p-8">
                <div className="w-20 h-20 glass-card rounded-full flex items-center justify-center mx-auto mb-6">
                  <Grid className="w-10 h-10 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 arabic-text-bold">لم نجد نتائج</h3>
                <p className="text-stone-muted mb-8 arabic-text">جرب اختيار فئة أخرى لعرض المنتجات المتاحة</p>
                <Button
                  onClick={() => setActiveCategory("porcelain")}
                  className="btn-gold rounded-xl px-8 py-3 font-bold arabic-text"
                >
                  عرض البلاط البورسلان
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mobile-Optimized CTA Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-dark rounded-3xl p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white arabic-text-bold">هل وجدت المنتج المثالي؟</h2>
            <p className="text-base mb-6 text-white/90 arabic-text leading-relaxed">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full btn-gold px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 arabic-text"
                >
                  احجز استشارة مجانية
                  <ArrowRight className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full btn-outline-light px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 arabic-text"
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
