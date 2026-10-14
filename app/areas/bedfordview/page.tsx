import { WhatsAppIcon } from "@/components/whatsapp-icon"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Star, MapPin, Award, Users, Clock, Shield, Gem, Building2, Home } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Best Carpenter Bedfordview 2026 | Kitchen Renovations & Built-in Cupboards | Free Quote",
  description:
    "★★★★★ #1 Carpenter & Plumber in Bedfordview. Expert kitchen renovations, luxury built-in cupboards, Caesarstone installations & 24/7 emergency plumbing. 600+ projects. Licensed & insured. Call 067 601 4490",
  keywords:
    "carpenter Bedfordview, kitchen renovation Bedfordview, built-in cupboards Bedfordview, plumber Bedfordview, granite installation Bedfordview, Caesarstone Bedfordview, carpenter Edenvale, emergency plumber Bedfordview, carpenter near me Bedfordview",
  openGraph: {
    title: "Best Carpenter Bedfordview 2026 | Kitchen Renovations & Built-in Cupboards",
    description:
      "★★★★★ #1 Carpenter & Plumber in Bedfordview. Expert kitchen renovations, luxury built-in cupboards & 24/7 emergency plumbing. Free quotes. Call 067 601 4490",
    url: "https://granitecarpentry.co.za/areas/bedfordview",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/og-image.png",
        width: 1200,
        height: 630,
        alt: "Best Carpenter Bedfordview - Kitchen Renovation & Built-in Cupboards",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/bedfordview",
  },
}

// JSON-LD Schema Markup
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://granitecarpentry.co.za/#localbusiness-bedfordview",
      "name": "Granite Carpentry - Bedfordview Carpenter & Plumber",
      "image": "https://granitecarpentry.co.za/og-image.png",
      "telephone": "+27676014490",
      "priceRange": "R450-R85000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bedfordview",
        "addressRegion": "Gauteng",
        "addressCountry": "ZA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-26.1755",
        "longitude": "28.1358"
      },
      "url": "https://granitecarpentry.co.za/areas/bedfordview",
      "areaServed": [
        "Bedfordview", "Edenvale", "Epsom Downs", "Lethabong", "Germiston",
        "Kempton Park", "Alberton", "Brakpan"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Premium Carpentry & Plumbing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kitchen Renovation Bedfordview",
              "description": "Premium kitchen renovations with Caesarstone and luxury finishes",
              "provider": {
                "@id": "https://granitecarpentry.co.za/#localbusiness-bedfordview"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Built-in Cupboards Bedfordview",
              "description": "Custom luxury storage solutions for Bedfordview homes",
              "provider": {
                "@id": "https://granitecarpentry.co.za/#localbusiness-bedfordview"
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
      "@id": "https://granitecarpentry.co.za/#breadcrumb-bedfordview",
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
          "name": "Bedfordview Carpenter & Plumber"
        }
      ]
    }
  ]
}

export default function BedfordviewPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Breadcrumb Navigation */}
      <section className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-amber-600 flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/areas" className="hover:text-amber-600">
              Areas
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Carpenter Bedfordview</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-amber-400 mr-2" />
                <Badge variant="secondary" className="bg-amber-600/20 text-amber-100 border-amber-300">
                  Bedfordview's #1 Carpenter & Plumber
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Best <span className="text-amber-400">Carpenter & Plumber</span> in{" "}
                <span className="text-amber-400 underline decoration-amber-500/60">Bedfordview</span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                ★★★★★ Rated #1 Carpenter & Plumber in Bedfordview & East Rand. Expert kitchen renovations, luxury built-in cupboards, Caesarstone & granite installations, and 24/7 emergency plumbing. Serving Bedfordview, Edenvale, Epsom Downs, Germiston & all East Rand areas.
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
                src="/granitecarpentry-logo.png"
                alt="Best Carpenter Bedfordview - Premium Kitchen Renovation & Built-in Cupboards"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">#1 Rated</div>
                <div className="text-sm">Bedfordview Carpenter</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Renovation Bedfordview - Featured Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Kitchen Renovation Bedfordview - Premium Kitchen Transformations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your Bedfordview kitchen with luxury materials and expert craftsmanship. Serving Bedfordview, Edenvale, and all East Rand suburbs with premium kitchen renovation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Luxury Kitchen Makeovers</h3>
                <p className="text-slate-600 mb-4">
                  High-end kitchen renovations for Bedfordview's upmarket homes with Caesarstone, Silestone, and premium fixtures.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Caesarstone & Silestone countertops
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Custom cabinetry with soft-close
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Designer islands & breakfast bars
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-amber-400">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-amber-600">Most Popular</Badge>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Complete Kitchen Renovations</h3>
                <p className="text-slate-600 mb-4">
                  Full kitchen transformations with premium materials perfect for Bedfordview family homes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Granite & quartz installations
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Plumbing & electrical coordination
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Smart storage solutions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Kitchen Upgrades</h3>
                <p className="text-slate-600 mb-4">
                  Modernize your Bedfordview kitchen with new countertops, cabinets, or islands without full renovation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Cabinet refacing & replacement
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Countertop installations
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Flexible payment options
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-700 mb-4 font-semibold">
              Average Kitchen Renovation Cost in Bedfordview: R85,000 - R250,000
            </p>
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Get Your Free Bedfordview Kitchen Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bedfordview Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Carpenter Near Me - Serving All Bedfordview & East Rand Areas
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional carpentry & plumbing services throughout Bedfordview and East Rand. Same-day quotes for Edenvale, Germiston, Kempton Park, Alberton and all surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: "Bedfordview", popular: true },
              { name: "Edenvale", popular: true },
              { name: "Epsom Downs", popular: true },
              { name: "Lethabong", popular: true },
              { name: "Germiston", popular: true },
              { name: "Kempton Park", popular: true },
              { name: "Alberton", popular: false },
              { name: "Brakpan", popular: false },
              { name: "Benoni", popular: false },
              { name: "Boksburg", popular: false },
              { name: "Springs", popular: false },
              { name: "Nigel", popular: false },
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Premium Carpentry & Plumbing Services in Bedfordview
            </h2>
            <p className="text-xl text-slate-600">
              Luxury carpentry and plumbing solutions for Bedfordview's finest homes
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
                  Premium kitchen transformations for Bedfordview homes. Caesarstone, Silestone, and luxury finishes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom kitchen cabinets & islands
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Caesarstone & Silestone countertops
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Complete plumbing coordination
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R85,000</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/kitchen-renovations">View Details</Link>
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
                  Custom luxury storage solutions for Bedfordview homes. Wardrobes, offices, entertainment units.
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
                    Entertainment centers
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R18,500</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/built-in-cupboards">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Gem className="w-6 h-6 text-amber-600 mr-2" />
                  Stone Installations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Premium Caesarstone, granite & marble installations. Kitchen countertops, bathroom vanities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Caesarstone & Silestone
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Natural granite & marble
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Expert templating & installation
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R850/m²</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/quartz-granite">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="w-6 h-6 text-amber-600 mr-2" />
                  Premium Plumbing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Luxury plumbing services for Bedfordview homes. Emergency repairs, installations, and maintenance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    24/7 emergency plumbing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bathroom & kitchen plumbing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Geyser installations & repairs
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R450/hour</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/plumbing">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              What Bedfordview Clients Say About Us
            </h2>
            <p className="text-xl text-slate-600">
              ★★★★★ 5.0 Rating - 120+ verified reviews from Bedfordview & East Rand clients
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
                  "Fantastic kitchen renovation in Bedfordview. The team was professional, on-time, and the quality is outstanding. Caesarstone countertops look incredible!"
                </p>
                <p className="font-semibold text-slate-800">John & Lisa T.</p>
                <p className="text-sm text-slate-600">Bedfordview</p>
                <p className="text-xs text-slate-500 mt-1">Kitchen Renovation - December 2025</p>
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
                  "Excellent emergency plumbing service at 2am. The plumber was knowledgeable and fixed the burst pipe quickly. Highly recommend for Edenvale residents!"
                </p>
                <p className="font-semibold text-slate-800">Michael W.</p>
                <p className="text-sm text-slate-600">Edenvale</p>
                <p className="text-xs text-slate-500 mt-1">Emergency Plumbing - January 2026</p>
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
                  "Built-in wardrobes and storage solutions transformed our Bedfordview home. Perfect craftsmanship, premium materials, and exactly on budget. Truly exceptional work!"
                </p>
                <p className="font-semibold text-slate-800">Sarah M.</p>
                <p className="text-sm text-slate-600">Bedfordview</p>
                <p className="text-xs text-slate-500 mt-1">Built-in Cupboards - November 2025</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions - Carpenter & Plumber Bedfordview
            </h2>
            <p className="text-xl text-slate-600">
              Common questions about our carpentry and plumbing services in Bedfordview
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  What areas in Bedfordview do you service?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We provide comprehensive carpentry and plumbing services throughout Bedfordview and surrounding East Rand areas including <Link href="/areas/edenvale" className="text-amber-600 hover:underline">Edenvale</Link>, Epsom Downs, Lethabong, <Link href="/areas/germiston" className="text-amber-600 hover:underline">Germiston</Link>, <Link href="/areas/kempton-park" className="text-amber-600 hover:underline">Kempton Park</Link>, and <Link href="/areas/alberton" className="text-amber-600 hover:underline">Alberton</Link>. We serve both residential and upmarket properties across the entire East Rand region with same-day quotes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  How long does a kitchen renovation take in Bedfordview?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Kitchen renovation timelines in Bedfordview vary based on scope. Small to medium renovations typically take 2-4 weeks, while comprehensive luxury kitchen makeovers can take 4-8 weeks. We provide detailed project timelines upfront and maintain flexible scheduling to minimize disruption to your Bedfordview home. Fast-track options available for urgent projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Do you offer emergency plumbing in Bedfordview?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Yes! We provide 24/7 emergency plumbing services throughout Bedfordview and all East Rand areas. Burst pipes, leaks, geyser failures, and urgent repairs are handled promptly. Call 067 601 4490 for immediate assistance. We aim to arrive within 60 minutes for genuine emergencies in Bedfordview, Edenvale, and surrounding areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  What premium materials do you use for countertops?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We exclusively use top-quality materials including Caesarstone, Silestone, natural granite, and marble. Each material is sourced from trusted suppliers ensuring durability, aesthetics, and value. We provide samples and expert guidance to help you select the perfect finish for your Bedfordview kitchen. Learn more about our <Link href="/quartz-granite" className="text-amber-600 hover:underline">granite and quartz services</Link>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Is your work in Bedfordview guaranteed?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Absolutely. All carpentry and plumbing work is backed by our comprehensive 5-year warranty. We're fully licensed and insured with R2 million public liability coverage, ensuring complete peace of mind on your investment. We comply with all South African building regulations and SANS plumbing standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  How much do built-in cupboards cost in Bedfordview?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Custom built-in cupboards in Bedfordview start from R18,500 depending on size, materials, and complexity. Walk-in wardrobes and luxury storage solutions range from R25,000 to R85,000+. We provide free detailed quotes after assessing your specific requirements. All cupboards are custom-designed to maximize your space and match your home's style.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Do you handle both new installations and repairs?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Yes, we specialize in both new installations and repairs. From minor plumbing fixes to complete renovations, our Bedfordview team handles all carpentry and plumbing needs for residential and upmarket properties. We offer same-day service for emergency repairs and flexible scheduling for new installations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Why Bedfordview Chooses Us</h2>
            <p className="text-xl text-slate-600">
              The most trusted carpenter and plumber in Bedfordview with 600+ completed projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600 fill-current" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5-Star Rated</h3>
              <p className="text-slate-600">Consistently rated 5 stars by Bedfordview clients on Google Reviews</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Licensed & Insured</h3>
              <p className="text-slate-600">Fully licensed with R2 million public liability coverage</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gem className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Premium Materials</h3>
              <p className="text-slate-600">Caesarstone, Silestone & premium fixtures only</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5-Year Warranty</h3>
              <p className="text-slate-600">All work backed by comprehensive warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas Links */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">
              Explore Our Services in Nearby East Rand Areas
            </h3>
            <p className="text-slate-600">
              Click to view dedicated pages for each area with local pricing, testimonials, and projects
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/areas/edenvale" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
              Carpenter Edenvale →
            </Link>
            <Link href="/areas/germiston" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
              Carpenter Germiston →
            </Link>
            <Link href="/areas/kempton-park" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
              Carpenter Kempton Park →
            </Link>
            <Link href="/areas/alberton" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
              Carpenter Alberton →
            </Link>
            <Link href="/areas/boksburg" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
              Carpenter Boksburg →
            </Link>
            <Link href="/areas/benoni" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
              Carpenter Benoni →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Bedfordview Property?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join 600+ satisfied Bedfordview clients. Get your FREE quote today from Bedfordview's #1 rated carpenter and plumber. Licensed, insured, and guaranteed. Serving all East Rand areas with premium materials and 5-year warranty.
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
              ⭐⭐⭐⭐⭐ "Fantastic kitchen renovation in Bedfordview. The quality is outstanding!" - John & Lisa T., Bedfordview
            </p>
          </div>

          <div className="mt-6 text-sm opacity-80">
            <p className="mb-2">Serving Bedfordview and nearby East Rand areas:</p>
            <p>
              <Link href="/areas/edenvale" className="underline hover:text-amber-200">Edenvale</Link> | 
              <Link href="/areas/germiston" className="underline hover:text-amber-200">Germiston</Link> | 
              <Link href="/areas/kempton-park" className="underline hover:text-amber-200">Kempton Park</Link> | 
              <Link href="/areas/alberton" className="underline hover:text-amber-200">Alberton</Link> | 
              <Link href="/areas/boksburg" className="underline hover:text-amber-200">Boksburg</Link> | 
              <Link href="/areas/benoni" className="underline hover:text-amber-200">Benoni</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
