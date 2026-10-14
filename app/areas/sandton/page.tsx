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
    "Best Carpenter Sandton 2026 | Kitchen Renovations & Built-in Cupboards | Free Quote",
  description:
    "★★★★★ #1 Carpenter & Plumber in Sandton. Expert kitchen renovations, luxury built-in cupboards & 24/7 emergency plumbing. Serving Rosebank, Hyde Park, Illovo. Licensed & insured. Call 067 601 4490",
  keywords:
    "carpenter Sandton, plumber Sandton, kitchen renovation Sandton, carpenter Rosebank, carpenter Hyde Park, carpenter Illovo, granite installation Sandton, built-in cupboards Sandton, emergency plumbing Sandton, quartz countertops Sandton, carpenter near me Sandton",
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/sandton",
  },
  openGraph: {
    title: "Best Carpenter Sandton 2026 | Kitchen Renovations & Built-in Cupboards",
    description:
      "★★★★★ #1 Carpenter & Plumber in Sandton. Expert kitchen renovations, luxury built-in cupboards & 24/7 emergency plumbing. Free quotes. Call 067 601 4490",
    url: "https://granitecarpentry.co.za/areas/sandton",
    images: [
      {
        url: "https://granitecarpentry.co.za/granite-installation-sandton.jpg",
        width: 1200,
        height: 630,
        alt: "Best Carpenter Sandton - Kitchen Renovation & Granite Installation",
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
      "@id": "https://granitecarpentry.co.za/#localbusiness-sandton",
      "name": "Granite Carpentry - Sandton Carpenter & Plumber",
      "image": "https://granitecarpentry.co.za/granite-installation-sandton.jpg",
      "telephone": "+27676014490",
      "priceRange": "R400-R25000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sandton",
        "addressRegion": "Gauteng",
        "addressCountry": "ZA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-26.1076",
        "longitude": "28.0567"
      },
      "url": "https://granitecarpentry.co.za/areas/sandton",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "189",
        "bestRating": "5",
        "worstRating": "1"
      },
      "areaServed": [
        "Sandton", "Rosebank", "Hyde Park", "Illovo", "Melrose", "Morningside",
        "Rivonia", "Bryanston", "Douglasdale", "Lonehill", "Sunninghill"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Luxury Carpentry & Plumbing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kitchen Renovation Sandton",
              "description": "Luxury kitchen renovations with premium materials and expert craftsmanship",
              "provider": {
                "@id": "https://granitecarpentry.co.za/#localbusiness-sandton"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Built-in Cupboards Sandton",
              "description": "Custom luxury storage solutions for premium Sandton properties",
              "provider": {
                "@id": "https://granitecarpentry.co.za/#localbusiness-sandton"
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
          "name": "Sandton Carpenter & Plumber"
        }
      ]
    }
  ]
}

export default function SandtonPage() {
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
                  Sandton's #1 Carpenter & Plumber
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Best <span className="text-amber-400">Carpenter & Plumber</span> in{" "}
                <span className="text-amber-400 underline decoration-amber-500/60">Sandton</span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                ★★★★★ Rated #1 Carpenter & Plumber in Sandton. Expert kitchen renovations, luxury built-in cupboards,
                premium granite installations & 24/7 emergency plumbing services. Serving Rosebank, Hyde Park, Illovo, Melrose, Morningside & all Sandton areas.
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
                  <span className="text-sm font-medium">500+ Jobs</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Same Day</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/granite-installation-sandton.jpg"
                alt="Best Carpenter Sandton - Premium Kitchen Renovation & Granite Installation"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">#1 Rated</div>
                <div className="text-sm">Sandton Carpenter & Plumber</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Renovation Sandton - Featured Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Kitchen Renovation Sandton - Luxury Kitchen Transformations
            </h2>
            <p className="text-sm text-slate-600 mt-4">
            Also serving nearby <Link href="/carpenter-rosebank" className="text-amber-600 hover:underline">Rosebank</Link>, <Link href="/carpenter-hyde-park" className="text-amber-600 hover:underline">Hyde Park</Link>, <Link href="/carpenter-illovo" className="text-amber-600 hover:underline">Illovo</Link>, and <Link href="/carpenter-morningside" className="text-amber-600 hover:underline">Morningside</Link>
           </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Designer Kitchens</h3>
                <p className="text-slate-600 mb-4">
                  High-end kitchen renovations for Sandton's luxury homes with imported materials and premium finishes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Italian & German cabinetry options
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Marble, quartz & exotic granite
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Smart kitchen technology integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-amber-400">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-amber-600">Most Popular</Badge>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Modern Kitchen Upgrades</h3>
                <p className="text-slate-600 mb-4">
                  Contemporary kitchen renovations with sleek designs perfect for Sandton apartments and townhouses.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Minimalist cabinet designs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Waterfall edge countertops
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Integrated appliances
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Executive Kitchen Remodels</h3>
                <p className="text-slate-600 mb-4">
                  Premium kitchen renovations for Sandton executives with flexible payment options and concierge service.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    After-hours consultations available
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Premium materials & finishes
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Fast-track completion options
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-700 mb-4 font-semibold">
              Average Kitchen Renovation Cost in Sandton: R25,000 - R120,000
            </p>
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Get Your Free Kitchen Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sandton Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Carpenter Near Me - Serving All Sandton Areas
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional carpentry & plumbing services throughout Sandton's premium suburbs. Same-day quotes for Rosebank, Hyde Park, Illovo, Melrose, Morningside, Rivonia, Bryanston and all surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: "Rosebank", popular: true, link: "/carpenter-rosebank" },
              { name: "Hyde Park", popular: true, link: "/carpenter-hyde-park" },
              { name: "Illovo", popular: true, link: "/carpenter-illovo" },
              { name: "Morningside", popular: true, link: "/carpenter-morningside" },
              { name: "Rivonia", popular: true, link: "/carpenter-rivonia" },
              { name: "Bryanston", popular: true, link: "/carpenter-bryanston" },
              { name: "Sunninghill", popular: true, link: "/carpenter-sunninghill" },
              { name: "Sandton CBD", popular: false },
              { name: "Sandhurst", popular: false, link: "/carpenter-sandhurst" },
              { name: "Douglasdale", popular: false },
              { name: "Lonehill", popular: false },
              { name: "Paulshof", popular: false },
              { name: "Woodmead", popular: false, link: "/carpenter-woodmead" },
              { name: "Marlboro", popular: false },
              { name: "Wynberg", popular: false },
              { name: "Atholl", popular: false },
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
              Premium Carpentry & Plumbing Services in Sandton
            </h2>
            <p className="text-xl text-slate-600">
              Luxury carpentry and plumbing solutions for Sandton's finest homes and offices
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
                  Luxury kitchen transformations for Sandton homes. Premium materials, expert craftsmanship, designer finishes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom kitchen islands & cabinets
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Premium granite & quartz countertops
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Soft-close hinges & premium hardware
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R25,000</span>
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
                  Custom luxury storage solutions for Sandton properties. Walk-in wardrobes, studies, entertainment units.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Walk-in wardrobes & dressing rooms
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Executive home office solutions
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Entertainment & media centers
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R15,000</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/built-in-cupboards">View Details</Link>
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
                  Premium granite & quartz installations. Kitchen countertops, bathroom vanities, reception counters.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Premium granite & quartz slabs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Precision templating & installation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Undermount sink cutouts included
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R8,500</span>
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
                  Luxury plumbing services for Sandton's premium properties. Emergency repairs, installations, and maintenance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    24/7 emergency plumbing services
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Luxury bathroom & kitchen plumbing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Geyser installations & repairs
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R400/hour</span>
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
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              What Sandton Clients Say About Us
            </h2>
            <p className="text-xl text-slate-600">
              ★★★★★ 5.0 Rating - 189+ verified reviews from Sandton clients
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
                  "Best carpenter and plumber in Sandton! Excellent work on our kitchen renovation. Professional team, beautiful results, and completed on time. Highly recommend for Hyde Park homes."
                </p>
                <p className="font-semibold text-slate-800">Sarah M.</p>
                <p className="text-sm text-slate-600">Hyde Park, Sandton</p>
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
                  "Outstanding craftsmanship on our Rosebank apartment. The custom built-in cupboards are exactly what we wanted. Fast, professional, and exceptional quality work."
                </p>
                <p className="font-semibold text-slate-800">James T.</p>
                <p className="text-sm text-slate-600">Rosebank, Sandton</p>
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
                  "Premium granite installation in our Illovo home. The quartz countertops are stunning! Professional service from consultation to completion. Worth every cent."
                </p>
                <p className="font-semibold text-slate-800">Rebecca L.</p>
                <p className="text-sm text-slate-600">Illovo, Sandton</p>
                <p className="text-xs text-slate-500 mt-1">Granite Countertops - November 2025</p>
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
                  "Emergency plumbing service at midnight in Morningside - arrived within 30 minutes! Fixed the burst geyser professionally and efficiently. Excellent emergency service."
                </p>
                <p className="font-semibold text-slate-800">David K.</p>
                <p className="text-sm text-slate-600">Morningside, Sandton</p>
                <p className="text-xs text-slate-500 mt-1">Emergency Plumbing - December 2025</p>
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
                  "Transformed our Melrose kitchen from dated to designer. The attention to detail is impressive. Professional, clean, and the final result exceeds expectations!"
                </p>
                <p className="font-semibold text-slate-800">Michelle P.</p>
                <p className="text-sm text-slate-600">Melrose, Sandton</p>
                <p className="text-xs text-slate-500 mt-1">Kitchen Renovation - January 2026</p>
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
                  "Excellent service for our Rivonia office renovation. Built custom reception desk and storage units. Professional, punctual, and the quality is top-tier."
                </p>
                <p className="font-semibold text-slate-800">Mark R.</p>
                <p className="text-sm text-slate-600">Rivonia, Sandton</p>
                <p className="text-xs text-slate-500 mt-1">Office Carpentry - December 2025</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/https://share.google/QM1ip2xNSRFczmk3t">
                Read All  Reviews
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Nearby Sandton Suburbs */}
      <section className="py-12 bg-white border-t border-slate-200">
      <div className="container mx-auto">
      <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-slate-800 mb-3">
        Explore Our Carpentry Services in Nearby Sandton Suburbs
      </h3>
      <p className="text-slate-600">
        Click to view dedicated pages for each suburb with local pricing, testimonials, and projects
      </p>
    </div>
    
    <div className="flex flex-wrap justify-center gap-3">
      <Link href="/carpenter-rosebank" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
        Carpenter Rosebank →
      </Link>
      <Link href="/carpenter-woodmead" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
        Carpenter Woodmead →
      </Link>
      <Link href="/carpenter-hyde-park" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
        Carpenter Hyde Park →
      </Link>
      <Link href="/carpenter-illovo" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
        Carpenter Illovo →
      </Link>
      <Link href="/carpenter-morningside" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
        Carpenter Morningside →
      </Link>
      <Link href="/carpenter-rivonia" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
        Carpenter Rivonia →
      </Link>
      <Link href="/carpenter-bryanston" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
        Carpenter Bryanston →
      </Link>
      <Link href="/carpenter-sunninghill" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
        Carpenter Sunninghill →
      </Link>
      <Link href="/carpenter-sandhurst" className="inline-flex items-center px-4 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors font-semibold">
        Carpenter Sandhurst →
      </Link>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions - Carpenter & Plumber Sandton
            </h2>
            <p className="text-xl text-slate-600">
              Common questions about our carpentry and plumbing services in Sandton
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  How much does a kitchen renovation cost in Sandton?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Kitchen renovation costs in Sandton typically range from R25,000 to R120,000 depending on size, materials, and finishes. A standard kitchen with quality cabinets and granite countertops starts around R25,000-R45,000. Mid-range luxury kitchens with premium materials cost R50,000-R85,000. High-end designer kitchens with imported cabinetry, marble countertops, and smart technology range from R90,000-R120,000+. We provide free detailed quotes for all Sandton areas including Rosebank, Hyde Park, Illovo, and Melrose.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Do you offer same-day quotes for carpentry work in Sandton?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Yes! We provide free same-day quotes for all carpentry and plumbing services throughout Sandton. Call us at 067 601 4490 before 2pm and we can often visit your property the same day. For kitchen renovations, built-in cupboards, or granite installations in areas like Rosebank, Hyde Park, Illovo, Morningside, or Rivonia, we'll assess your project and provide a detailed written quote within 24 hours. Emergency plumbing quotes are provided immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Which Sandton areas do you serve?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We serve all areas throughout Sandton and surrounding suburbs including <Link href="/carpenter-rosebank" className="text-amber-600 hover:underline">Rosebank</Link>, <Link href="/carpenter-hyde-park" className="text-amber-600 hover:underline">Hyde Park</Link>, <Link href="/carpenter-illovo" className="text-amber-600 hover:underline">Illovo</Link>, <Link href="/carpenter-morningside" className="text-amber-600 hover:underline">Morningside</Link>, <Link href="/carpenter-rivonia" className="text-amber-600 hover:underline">Rivonia</Link>, <Link href="/carpenter-bryanston" className="text-amber-600 hover:underline">Bryanston</Link>, and more...
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Are you licensed and insured to work in Sandton?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Yes, we are fully licensed and insured to operate throughout Sandton and Johannesburg. Our carpenters and plumbers are qualified tradesmen with relevant certifications and extensive experience working on luxury properties. We carry comprehensive public liability insurance and all our work comes with a 5-year warranty. We comply with all South African building regulations and SANS plumbing standards. You can request proof of our licenses and insurance certificates at any time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  How long does a typical kitchen renovation take in Sandton?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Most kitchen renovations in Sandton take 2-4 weeks from start to completion. A basic cabinet replacement takes 5-7 days. Complete kitchen renovations with new cabinets, countertops, plumbing, and electrical work typically take 2-3 weeks. Large or luxury kitchens with imported materials and custom features may take 3-5 weeks. We offer fast-track options for executives who need quicker completion. We provide a detailed timeline with your quote and keep you updated throughout the project.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Do you offer 24/7 emergency plumbing in Sandton?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Yes! We offer 24/7 emergency plumbing services throughout all Sandton areas. Whether you're in Rosebank, Hyde Park, Illovo, Morningside, or any other Sandton suburb, our emergency plumbers can respond quickly to burst pipes, blocked drains, geyser failures, and other urgent plumbing issues. Call 067 601 4490 anytime for immediate assistance. We aim to arrive within 45 minutes for true emergencies in the greater Sandton area.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  What types of built-in cupboards do you install in Sandton?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  We install all types of luxury custom built-in cupboards for Sandton homes and offices including walk-in wardrobes, dressing rooms, bedroom closets, linen cupboards, executive home office units, study desks with shelving, entertainment centers, TV units, wine cellars, laundry room storage, garage cabinets, and pantry cupboards. All cupboards are custom-designed to maximize your space and match your property's luxury aesthetic. We use premium materials including imported melamine, real wood veneers, and designer finishes. Prices for built-in cupboards in Sandton start from R15,000 depending on size and specifications.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Why Sandton Chooses Us</h2>
            <p className="text-xl text-slate-600">
              The most trusted carpenter and plumber in Sandton with 500+ completed projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600 fill-current" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5-Star Rated</h3>
              <p className="text-slate-600">Consistently rated 5 stars by Sandton clients on Google Reviews</p>
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
            <div className="mt-6 text-sm opacity-80">
            <p className="mb-2">Carpenter services in Sandton suburbs:</p>
           <p>
           <Link href="/carpenter-rosebank" className="underline hover:text-amber-200">Rosebank</Link> | 
           <Link href="/carpenter-woodmead" className="underline hover:text-amber-200">Woodmead</Link> |
           <Link href="/carpenter-hyde-park" className="underline hover:text-amber-200">Hyde Park</Link> | 
           <Link href="/carpenter-illovo" className="underline hover:text-amber-200">Illovo</Link> | 
           <Link href="/carpenter-morningside" className="underline hover:text-amber-200">Morningside</Link> | 
          <Link href="/carpenter-rivonia" className="underline hover:text-amber-200">Rivonia</Link> | 
          <Link href="/carpenter-bryanston" className="underline hover:text-amber-200">Bryanston</Link> | 
          <Link href="/carpenter-sunninghill" className="underline hover:text-amber-200">Sunninghill</Link> | 
          <Link href="/carpenter-sandhurst" className="underline hover:text-amber-200">Sandhurst</Link>
          </p>
         </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Same Day Quotes</h3>
              <p className="text-slate-600">Free quotes within 24 hours for all Sandton areas</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Sandton Property?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join 500+ satisfied Sandton clients. Get your FREE quote today from Sandton's #1 rated carpenter and
            plumber. Licensed, insured, and guaranteed. Serving all Sandton areas including Rosebank, Hyde Park, Illovo, Melrose, Morningside & more.
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
              ⭐⭐⭐⭐⭐ "Best carpenter and plumber in Sandton! Excellent work on our kitchen renovation." - Sarah M., Hyde Park
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
