import { WhatsAppIcon } from "@/components/whatsapp-icon"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Star, Award, Building2, MapPin, Clock, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Best Carpenter Pretoria 2026 | Kitchen Renovations & Built-in Cupboards | Free Quote",
  description:
    "★★★★★ #1 Carpenter & Plumber in Pretoria & Centurion. Expert kitchen renovations, built-in cupboards & 24/7 emergency plumbing. Licensed & insured. Call 067 601 4490 for same-day quotes.",
  keywords:
    "carpenter Pretoria, kitchen renovation Pretoria Centurion, carpenter Waterkloof, carpenter Lynnwood, carpenter Menlyn, carpenter Groenkloof, carpenter Faerie Glen, carpenter Sunnyside, built-in cupboards Pretoria, granite installation Pretoria, plumber Pretoria, carpenter near me Pretoria",
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/pretoria",
  },
  openGraph: {
    title: "Best Carpenter Pretoria 2026 | Kitchen Renovations & Built-in Cupboards",
    description:
      "★★★★★ #1 Carpenter & Plumber serving Pretoria & Centurion. Expert kitchen renovations, granite installation & 24/7 emergency plumbing. Free quotes. Call 067 601 4490",
    url: "https://granitecarpentry.co.za/areas/pretoria",
    images: [
      {
        url: "https://granitecarpentry.co.za/carpenter-johannesburg-installing-kitchen-cupboards.jpg",
        width: 1200,
        height: 630,
        alt: "Best Carpenter Pretoria - Kitchen Renovation & Built-in Cupboards",
      },
    ],
  },
}

// JSON-LD Schema Markup
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://granitecarpentry.co.za/#localbusiness",
      "name": "Granite Carpentry - Pretoria Carpenter & Plumber",
      "image": "https://granitecarpentry.co.za/carpenter-johannesburg-installing-kitchen-cupboards.jpg",
      "telephone": "+27676014490",
      "priceRange": "R380-R22000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pretoria",
        "addressRegion": "Gauteng",
        "addressCountry": "ZA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-25.7479",
        "longitude": "28.2293"
      },
      "url": "https://granitecarpentry.co.za/areas/pretoria",
      "areaServed": [
        "Pretoria", "Brooklyn", "Hatfield", "Menlyn", "Waterkloof", "Centurion", 
        "Lynnwood", "Groenkloof", "Faerie Glen", "Sunnyside", "Tshwane"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Carpentry & Plumbing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kitchen Renovation Pretoria",
              "description": "Complete kitchen renovations including cabinets, granite, and plumbing",
              "provider": {
                "@id": "https://granitecarpentry.co.za/#localbusiness"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Built-in Cupboards Pretoria",
              "description": "Custom wardrobes, closets, and storage solutions",
              "provider": {
                "@id": "https://granitecarpentry.co.za/#localbusiness"
              }
            }
          }
        ]
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "14:00"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://granitecarpentry.co.za/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://granitecarpentry.co.za"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Areas",
          "item": "https://granitecarpentry.co.za/areas"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pretoria Carpenter & Plumber"
        }
      ]
    }
  ]
}

export default function PretoriaPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-amber-400 mr-2" />
                <Badge variant="secondary" className="bg-amber-600/20 text-amber-100 border-amber-300">
                  Pretoria's #1 Carpenter & Plumber
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Best <span className="text-amber-400">Carpenter & Plumber</span> in{" "}
                <span className="text-amber-400 underline decoration-amber-500/60">Pretoria & Centurion</span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                ★★★★★ Rated #1 Carpenter & Plumber in Pretoria, Centurion & Tshwane. Expert kitchen renovations, built-in
                cupboards, granite installations, and 24/7 emergency plumbing. Serving Waterkloof, Brooklyn, Hatfield, Menlyn, Lynnwood, Groenkloof & all Pretoria areas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4 font-semibold">
                  <Link href="/contact">
                    Get FREE Quote Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <a href="tel:+27676014490">
                    <Phone className="mr-2 w-5 h-5" />
                    Call: 067 601 4490
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Star className="w-6 h-6 text-amber-400 mb-1 fill-current" />
                  <span className="text-sm font-medium">5.0 Rating</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Licensed</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">600+ Jobs</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Same Day</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/carpenter-johannesburg-installing-kitchen-cupboards.jpg"
                alt="Best Carpenter Pretoria - Expert Kitchen Renovation & Built-in Cupboards"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">#1 Rated</div>
                <div className="text-sm">Pretoria Carpenter & Plumber</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Renovation Pretoria Centurion - Featured Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Kitchen Renovation Pretoria & Centurion
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your Pretoria or Centurion kitchen with our expert renovation services. From modern designs to classic elegance, we deliver stunning results with guaranteed quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Complete Kitchen Makeovers</h3>
                <p className="text-slate-600 mb-4">
                  Full kitchen renovations in Pretoria & Centurion including cabinets, countertops, plumbing, and electrical work.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Custom cabinet design & installation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Granite & quartz countertops
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Coordinated plumbing services
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-amber-400">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-amber-600">Most Popular</Badge>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Kitchen Upgrades</h3>
                <p className="text-slate-600 mb-4">
                  Refresh your Pretoria kitchen with new cabinets, countertops, or islands. Perfect for modernizing without full renovation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Kitchen island installation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Cabinet refacing & replacement
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Countertop replacement
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Budget-Friendly Options</h3>
                <p className="text-slate-600 mb-4">
                  Affordable kitchen improvements for Pretoria & Centurion homes. Quality work that fits your budget.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Flexible payment plans available
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Premium & economy materials
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Free detailed quotes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-700 mb-4 font-semibold">
              Average Kitchen Renovation Cost in Pretoria: R22,000 - R85,000
            </p>
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Get Your Free Kitchen Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pretoria Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Carpenter Near Me - Serving All Pretoria & Tshwane Areas
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional carpentry & plumbing services throughout Pretoria and Tshwane metro. Same-day quotes for Waterkloof, Lynnwood, Menlyn, Groenkloof, Faerie Glen, Sunnyside, Brooklyn, Hatfield and all surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: "Waterkloof", popular: true },
              { name: "Lynnwood", popular: true },
              { name: "Menlyn", popular: true },
              { name: "Groenkloof", popular: true },
              { name: "Faerie Glen", popular: true },
              { name: "Sunnyside", popular: true },
              { name: "Brooklyn", popular: true },
              { name: "Hatfield", popular: true },
              { name: "Centurion", popular: true },
              { name: "Pretoria CBD", popular: false },
              { name: "Silver Lakes", popular: false },
              { name: "Garsfontein", popular: false },
              { name: "Moreleta Park", popular: false },
              { name: "Willow Park", popular: false },
              { name: "Erasmuskloof", popular: false },
              { name: "Arcadia", popular: false },
            ].map((area) => (
              <Card key={area.name} className={`text-center hover:shadow-lg transition-all duration-300 hover:scale-105 ${area.popular ? 'border-amber-300 border-2' : ''}`}>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-800">{area.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">Same Day Service</p>
                  {area.popular && (
                    <Badge className="mt-2 bg-amber-600 text-xs">High Demand</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Expert Carpentry & Plumbing Services in Pretoria
            </h2>
            <p className="text-xl text-slate-600">
              Professional carpentry and plumbing solutions for Pretoria homes and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Building2 className="w-6 h-6 text-amber-600 mr-2" />
                  Kitchen Renovations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Complete kitchen transformations for Pretoria & Centurion homes. Modern designs, quality materials, expert installation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom kitchen cabinets & islands
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Granite & quartz countertops
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Complete plumbing coordination
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R22,000</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/kitchen-renovations">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Award className="w-6 h-6 text-amber-600 mr-2" />
                  Built-in Cupboards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Custom storage solutions for Pretoria homes. Wardrobes, studies, entertainment units, and more.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Walk-in wardrobes & closets
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Home office & study units
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    TV & entertainment centers
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R12,000</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/built-in-cupboards">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Star className="w-6 h-6 text-amber-600 mr-2" />
                  Granite Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Professional granite & quartz installations. Kitchen countertops, bathroom vanities, and more.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Premium granite & quartz slabs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Precision cutting & installation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sink cutouts & edge finishing
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R7,500</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/quartz-granite">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="w-6 h-6 text-amber-600 mr-2" />
                  Professional Plumbing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Expert plumbing services for Pretoria homes and businesses. Emergency repairs, installations, and maintenance throughout Tshwane.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Emergency plumbing repairs 24/7
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bathroom & kitchen plumbing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Geyser services & installations
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R380/hour</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/plumbing">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              What Pretoria Clients Say About Us
            </h2>
            <p className="text-xl text-slate-600">
              ★★★★★ 5.0 Rating - 247+ verified reviews from Pretoria & Centurion clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Outstanding work on our kitchen renovation! The team was professional, punctual, and the quality exceeded our expectations. Our Brooklyn kitchen looks absolutely stunning."
                </p>
                <p className="font-semibold text-slate-800">John D.</p>
                <p className="text-sm text-slate-600">Brooklyn, Pretoria</p>
                <p className="text-xs text-slate-500 mt-1">Kitchen Renovation - December 2024</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Best carpenter in Waterkloof! They installed beautiful built-in cupboards in all three bedrooms. Excellent craftsmanship and very reasonable prices. Highly recommended!"
                </p>
                <p className="font-semibold text-slate-800">Sarah M.</p>
                <p className="text-sm text-slate-600">Waterkloof, Pretoria</p>
                <p className="text-xs text-slate-500 mt-1">Built-in Cupboards - January 2026</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Fantastic granite installation in our Centurion home. The granite looks incredible and the installation was quick and clean. Great communication throughout the project."
                </p>
                <p className="font-semibold text-slate-800">Michael R.</p>
                <p className="text-sm text-slate-600">Centurion</p>
                <p className="text-xs text-slate-500 mt-1">Granite Countertops - November 2024</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Emergency plumbing service at 2am in Menlyn - they arrived within 45 minutes! Fixed our burst pipe professionally and cleaned up perfectly. True lifesavers!"
                </p>
                <p className="font-semibold text-slate-800">Linda K.</p>
                <p className="text-sm text-slate-600">Menlyn, Pretoria</p>
                <p className="text-xs text-slate-500 mt-1">Emergency Plumbing - December 2024</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Transformed our Lynnwood kitchen with new cabinets and quartz countertops. The design advice was invaluable and the workmanship is top-notch. Worth every rand!"
                </p>
                <p className="font-semibold text-slate-800">David P.</p>
                <p className="text-sm text-slate-600">Lynnwood, Pretoria</p>
                <p className="text-xs text-slate-500 mt-1">Kitchen Cabinets - January 2026</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "Professional service from start to finish. Built custom wardrobes in Groenkloof that maximized our space perfectly. The team was respectful and left everything spotless."
                </p>
                <p className="font-semibold text-slate-800">Jennifer S.</p>
                <p className="text-sm text-slate-600">Groenkloof, Pretoria</p>
                <p className="text-xs text-slate-500 mt-1">Wardrobes - December 2024</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/reviews">
                Read All 247+ Reviews
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions - Carpenter & Plumber Pretoria
            </h2>
            <p className="text-xl text-slate-600">
              Common questions about our carpentry and plumbing services in Pretoria
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  How much does a kitchen renovation cost in Pretoria?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Kitchen renovation costs in Pretoria typically range from R22,000 to R85,000 depending on the size and scope. A basic kitchen with standard cabinets and laminate countertops starts around R22,000-R35,000. Mid-range kitchens with granite countertops and quality cabinets cost R40,000-R65,000. Premium kitchens with custom cabinetry, quartz or marble countertops, and high-end appliances range from R70,000-R85,000+. We provide free detailed quotes for all Pretoria and Centurion areas including Brooklyn, Waterkloof, Menlyn, and Lynnwood.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Do you offer same-day carpentry quotes in Pretoria and Centurion?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Yes! We provide free same-day quotes for all carpentry and plumbing services throughout Pretoria, Centurion, and Tshwane. Call us at 067 601 4490 before 2pm and we can often visit your property the same day. For kitchen renovations, built-in cupboards, granite installations, or any carpentry work in areas like Waterkloof, Groenkloof, Faerie Glen, Sunnyside, Hatfield, or Menlyn, we'll assess your project and provide a detailed written quote within 24 hours. Emergency plumbing quotes are provided immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  What areas of Pretoria and Tshwane do you serve?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We serve all areas throughout Pretoria, Centurion, and the greater Tshwane metro. Our main service areas include Waterkloof, Brooklyn, Hatfield, Menlyn, Lynnwood, Groenkloof, Faerie Glen, Sunnyside, Centurion, Pretoria CBD, Silver Lakes, Garsfontein, Moreleta Park, Willow Park, Erasmuskloof, and Arcadia. We provide same-day service for emergency plumbing and typically start carpentry projects within 3-5 business days for all these areas. If you're searching for a "carpenter near me" in Pretoria, we're your local experts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Are you licensed and insured in Pretoria?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Yes, we are fully licensed and insured to operate throughout Pretoria, Centurion, and Tshwane. Our carpenters and plumbers are qualified tradesmen with relevant certifications and years of experience. We carry comprehensive public liability insurance and all our work comes with a 5-year warranty. We comply with all South African building regulations and SANS plumbing standards. You can request proof of our licenses and insurance certificates at any time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  How long does a typical kitchen renovation take in Pretoria?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Most kitchen renovations in Pretoria take 2-4 weeks from start to completion. A basic cabinet replacement takes 5-7 days. Complete kitchen renovations with new cabinets, countertops, plumbing, and electrical work typically take 2-3 weeks. Large or complex kitchens with custom features may take 3-4 weeks. We provide a detailed timeline with your quote and keep you updated throughout the project. We work efficiently to minimize disruption to your Pretoria home.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Do you offer emergency plumbing services in Pretoria?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Yes! We offer 24/7 emergency plumbing services throughout Pretoria, Centurion, and all Tshwane areas. Whether you're in Menlyn, Waterkloof, Brooklyn, Lynnwood, or any other Pretoria suburb, our emergency plumbers can respond quickly to burst pipes, blocked drains, geyser failures, and other urgent plumbing issues. Call 067 601 4490 anytime for immediate assistance. We aim to arrive within 60 minutes for true emergencies in the greater Pretoria area.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  What types of built-in cupboards do you install in Pretoria?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We install all types of custom built-in cupboards for Pretoria homes including walk-in wardrobes, bedroom closets, linen cupboards, home office units, study desks with shelving, entertainment centers, TV units, laundry room storage, garage cabinets, and pantry cupboards. All cupboards are custom-designed to maximize your space and match your home's style. We use quality materials including melamine, laminate, and wood finishes. Prices for built-in cupboards in Pretoria start from R12,000 depending on size and specifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Why Pretoria Chooses Us</h2>
            <p className="text-xl text-slate-600">
              The most trusted carpenter and plumber in Pretoria with 600+ completed projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600 fill-current" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5-Star Rated</h3>
              <p className="text-slate-600">Consistently rated 5 stars by Pretoria clients on Google Reviews</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Licensed & Insured</h3>
              <p className="text-slate-600">
                Fully licensed carpenter and plumber with comprehensive insurance coverage
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Same Day Quotes</h3>
              <p className="text-slate-600">Free quotes within 24 hours for all Pretoria areas</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5-Year Warranty</h3>
              <p className="text-slate-600">All work comes with our comprehensive 5-year warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Pretoria Property?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join 600+ satisfied Pretoria clients. Get your FREE quote today from Pretoria's #1 rated carpenter and
            plumber. Licensed, insured, and guaranteed. Serving all Pretoria areas including Waterkloof, Brooklyn, Menlyn, Lynnwood, Centurion & more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              asChild
              className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8 py-4 font-semibold"
            >
              <Link href="/contact">
                Get FREE Quote Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8 py-4 bg-transparent"
            >
              <a href="tel:+27676014490">
                <Phone className="mr-2 w-5 h-5" />
                Call: 067 601 4490
              </a>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg opacity-90">
              ⭐⭐⭐⭐⭐ "Outstanding work on our kitchen renovation! Highly recommend." - John D., Brooklyn
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
