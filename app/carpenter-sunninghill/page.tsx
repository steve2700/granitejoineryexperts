import { WhatsAppIcon } from "@/components/whatsapp-icon"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Star, Award, Building2, MapPin, Clock, Shield, Users, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Carpenter Sunninghill 2026 | Kitchen Renovations & Built-in Cupboards | Same Day Quotes",
  description:
    "★★★★★ #1 Carpenter in Sunninghill. Expert kitchen renovations, luxury built-in cupboards & granite installations. 50+ completed Sunninghillprojects. Licensed & insured. Call 067 601 4490",
  keywords:
    "carpenter Sunninghill, kitchen renovation Sunninghill, built-in cupboards Sunninghill, granite installation Sunninghill, carpenter near me Sunninghill, Sunninghillcarpenter, kitchen cabinets Sunninghill, cupboards Sunninghill, best carpenter Sunninghill",
  alternates: {
    canonical: "https://granitecarpentry.co.za/carpenter-sunninghill",
  },
  openGraph: {
    title: "Carpenter Sunninghill 2026 | Kitchen Renovations & Built-in Cupboards",
    description:
      "★★★★★ #1 Carpenter in Sunninghill. Expert kitchen renovations, luxury built-in cupboards & granite installations. Call 067 601 4490",
    url: "https://granitecarpentry.co.za/carpenter-sunninghill",
    images: [
      {
        url: "https://granitecarpentry.co.za/granite-installation-sandton.jpg",
        width: 1200,
        height: 630,
        alt: "Carpenter Sunninghill- Kitchen Renovation & Built-in Cupboards",
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
      "@id": "https://granitecarpentry.co.za/#carpenter-sunninghill",
      "name": "Granite Carpentry - Sunninghill Carpenter",
      "image": "https://granitecarpentry.co.za/granite-installation-sandton.jpg",
      "telephone": "+27676014490",
      "priceRange": "R400-R25000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sunninghill",
        "addressRegion": "Gauteng",
        "postalCode": "2191",
        "addressCountry": "ZA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-26.03528",
        "longitude": "28.06528"
      },
      "url": "https://granitecarpentry.co.za/carpenter-sunninghill",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "20",
        "bestRating": "5",
        "worstRating": "1"
      },
      "areaServed": {
        "@type": "City",
        "name": "Sunninghill"
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
      "@id": "https://granitecarpentry.co.za/#breadcrumb-sunninghill",
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
          "name": "Sandton Areas",
          "item": "https://granitecarpentry.co.za/areas/sandton"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Carpenter Sunninghill"
        }
      ]
    }
  ]
}

export default function CarpenterSunninghillPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Breadcrumb Navigation */}
      <section className="bg-slate-50 py-4">
        <div className="container mx-auto">
          <nav className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-amber-600 flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/areas/sandton" className="hover:text-amber-600">
              Sandton
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Carpenter Sunninghill</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-amber-400 mr-2" />
                <Badge variant="secondary" className="bg-amber-600/20 text-amber-100 border-amber-300">
                  Sunninghill's #1 Carpenter
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-amber-400">Carpenter Sunninghill</span>
                <br />
                Kitchen Renovations & Built-in Cupboards
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                ★★★★★ Rated Sunninghill's most trusted carpenter with 50+ completed local projects. Expert kitchen renovations, luxury built-in cupboards, granite installations & emergency plumbing for Sunninghillapartments, townhouses, and homes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4 font-semibold">
                  <Link href="/contact">
                    Get FREE SunninghillQuote
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
                  <span className="text-sm font-medium">50+ Local Jobs</span>
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
                alt="Carpenter Sunninghill- Kitchen Renovation & Built-in Cupboards"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">SunninghillProjects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local SunninghillCarpenter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Why Sunninghill Residents Choose Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand Sunninghill's unique properties - from luxury apartments in The SunninghillDrive to townhouses near SunninghillMall
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Local SunninghillExpertise</h3>
                <p className="text-slate-600">
                  We've completed 30+ projects in Sunninghill- from The  Sunninghill Estate to Sunninghill Centre. We know local building requirements, body corporate rules, and parking access for materials delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Fast Response Times</h3>
                <p className="text-slate-600">
                  Based nearby in Sandton, we're typically on-site in Sunninghillwithin 30-45 minutes for quotes and emergency plumbing. Same-day quotes for kitchen and carpentry projects.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Apartment-Friendly Service</h3>
                <p className="text-slate-600">
                  Experienced in working within Sunninghill's apartment complexes. We coordinate with building management, work within noise restrictions, and ensure clean, minimal disruption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SunninghillKitchen Renovation Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Kitchen Renovation Sunninghill- Apartment & Townhouse Specialists
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your Sunninghill kitchen with designs perfect for apartment living and modern townhouses. Space-efficient solutions with luxury finishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Sunninghill Apartment Kitchens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Specialized kitchen designs for Sunninghill apartments like Sunninghill Apartments precinct, Maxwell Drive, and Leeukop Road. Maximizing limited space with smart storage solutions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Compact kitchen islands</strong> - Perfect for open-plan Sunninghill apartments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Smart storage solutions</strong> - Pull-out pantries, corner units, vertical storage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Premium finishes</strong> - Quartz countertops, soft-close hinges, designer handles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Body corporate approved</strong> - We handle all building management communications</span>
                  </li>
                </ul>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-slate-800 mb-2">Sunninghill Apartment Kitchens from R28,000</p>
                  <p className="text-xs text-slate-600">Completed projects in Maxwell Drive, Leeukop Road, Main Road Sunninghill</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-amber-400">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Badge className="mr-2 bg-amber-600">Popular</Badge>
                  Sunninghill Townhouse Kitchens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Full kitchen renovations for Sunninghill town houses and family homes. Contemporary designs with entertaining in mind.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Large kitchen islands</strong> - With breakfast bar seating and storage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Scullery integration</strong> - Hidden prep areas for entertaining</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Premium appliances</strong> - Integrated dishwashers, wine fridges, gas hobs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm"><strong>Indoor-outdoor flow</strong> - Perfect for Sunninghill's entertaining lifestyle</span>
                  </li>
                </ul>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-slate-800 mb-2">Sunninghill Townhouse Kitchens from R45,000</p>
                  <p className="text-xs text-slate-600">3-4 week completion • 5-year warranty included</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Get Your Free Sunninghill Kitchen Quote</Link>
            </Button>
            <p className="text-sm text-slate-600 mt-4">
              Also serving nearby <Link href="/areas/sandton" className="text-amber-600 hover:underline">Sandton</Link>, <Link href="/carpenter-hyde-park" className="text-amber-600 hover:underline">Hyde Park</Link>, and <Link href="/carpenter-illovo" className="text-amber-600 hover:underline">Illovo</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Built-in Cupboards Sunninghill*/}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Built-in Cupboards Sunninghill- Custom Storage Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Maximize your Sunninghill property's storage with custom built-in cupboards designed for apartments and townhouses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Award className="w-5 h-5 text-amber-600 mr-2" />
                  Bedroom Wardrobes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm">
                  Walk-in closets and built-in wardrobes perfect for Sunninghill apartments and townhouses.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Floor-to-ceiling designs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom drawer inserts
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Soft-close mechanisms
                  </li>
                </ul>
                <p className="text-lg font-bold text-amber-600">From R15,000</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Building2 className="w-5 h-5 text-amber-600 mr-2" />
                  Home Office Units
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm">
                  Custom home office solutions for Sunninghill professionals working from home.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Built-in desks & shelving
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Cable management systems
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Drawer & file storage
                  </li>
                </ul>
                <p className="text-lg font-bold text-amber-600">From R18,000</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Star className="w-5 h-5 text-amber-600 mr-2" />
                  Entertainment Units
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm">
                  Sleek entertainment centers designed for modern Sunninghill living spaces.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    TV mounting integration
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Concealed wiring
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Glass shelving options
                  </li>
                </ul>
                <p className="text-lg font-bold text-amber-600">From R12,000</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">
              For more custom carpentry options, explore our full <Link href="/built-in-cupboards" className="text-amber-600 hover:underline font-semibold">built-in cupboards service</Link>
            </p>
          </div>
        </div>
      </section>

      {/* SunninghillCustomer Reviews */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              What Sunninghill Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              ★★★★★ 5.0 Rating - 30+ verified reviews from Sunninghill residents
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
                  "Outstanding craftsmanship on our apartment kitchen in The Zone. They worked around our building's noise restrictions and the final result is stunning. Highly recommend for Sunninghillapartments!"
                </p>
                <p className="font-semibold text-slate-800">James T.</p>
                <p className="text-sm text-slate-600">Witkoppen Road, Sunninghill</p>
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
                  "Best carpenter in Sunninghill! Transformed our townhouse kitchen with a beautiful island and quartz countertops. Professional team, clean work, completed on schedule."
                </p>
                <p className="font-semibold text-slate-800">Sarah K.</p>
                <p className="text-sm text-slate-600">Sunninghill Gardens, Sunninghill</p>
                <p className="text-xs text-slate-500 mt-1">Kitchen Island - December 2025</p>
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
                  "Excellent built-in cupboards for our Sunninghill apartment. Maximized every inch of space with clever storage solutions. The quality is exceptional and the team was a pleasure to work with."
                </p>
                <p className="font-semibold text-slate-800">Michael R.</p>
                <p className="text-sm text-slate-600">44 Stanley, Sunninghill</p>
                <p className="text-xs text-slate-500 mt-1">Built-in Wardrobes - November 2025</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600">
              Read more <Link href="/areas/sandton" className="text-amber-600 hover:underline font-semibold">Sandton area reviews</Link> from Hyde Park, Illovo, and Melrose clients
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions - Carpenter Sunninghill
            </h2>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  How much does a kitchen renovation cost in Sunninghill?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm">
                  Kitchen renovation costs in Sunninghill typically range from R28,000 to R75,000 for apartments, and R45,000 to R110,000 for townhouses. Apartment kitchens (2-3 meters) with quality cabinets and quartz countertops start around R28,000-R40,000. Full townhouse kitchens with islands and premium finishes range from R45,000-R75,000. Luxury renovations with imported materials can reach R110,000+. We provide free quotes specifically tailored to your Sunninghillproperty.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Do you work with Sunninghill body corporates and building management?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm">
                  Yes! We have extensive experience working in Sunninghill places  like Sunninghill Gardens, Sunninghill Central and  The View Estate. We handle all body corporate communications, submit required documentation, coordinate materials delivery and parking, work within noise restriction hours (typically 8am-5pm weekdays), and ensure minimal disruption to neighbors. We're familiar with access procedures and building requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  How long does a kitchen renovation take in a Sunninghill apartment?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm">
                  Most Sunninghill apartment kitchen renovations take 1-3 weeks. A standard apartment kitchen (2-3 meters) with cabinet replacement takes 5-7 days. Full renovations with countertops, plumbing, and electrical work typically take 10-14 days. Larger townhouse kitchens may take 2-3 weeks. We work efficiently to minimize disruption and can schedule around your availability. Fast-track options available for urgent projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Do you offer same-day quotes in Sunninghill?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm">
                  Yes! Based nearby in Sandton, we can typically reach Sunninghill properties within 30-45 minutes. Call us at 067 601 4490 before 2pm and we can often visit your Sunninghill property the same day. We provide detailed written quotes within 24 hours covering materials, labor, and timeline. Emergency plumbing quotes are provided immediately upon arrival.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  What areas near Sunninghill do you also serve?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm">
                  Beyond Sunninghill, we serve all nearby Sandton suburbs including Hyde Park, Illovo, Melrose, Parktown North, Saxonwold, Dunkeld,MorningSide and Parkwood. We also cover the broader Sandton area including Sunninghill, Sunninghill, and Sunninghill. For our complete service area, visit our <Link href="/areas/sandton" className="text-amber-600 hover:underline">Sandton areas page</Link>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Can you install granite countertops in Sunninghill apartments?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm">
                  Absolutely! We specialize in granite and quartz installations for Sunninghill properties. We coordinate lift access for materials, protect common areas during transport, and complete templating and installation efficiently. Popular choices for Sunninghillapartments include Caesar Stone, Silestone, and premium granite varieties. Prices start from R8,500 for standard countertops. Learn more about our <Link href="/quartz-granite" className="text-amber-600 hover:underline">granite and quartz services</Link>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                  Do you offer emergency plumbing services in Sunninghill?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm">
                  Yes! We provide 24/7 emergency plumbing services throughout Sunninghill. Whether you're in The Zone, 44 Stanley, or anywhere in Sunninghill, we aim to arrive within 30-45 minutes for genuine emergencies like burst pipes, geyser failures, or major leaks. Call 067 601 4490 anytime. We understand the urgency in apartment buildings where leaks can affect multiple units.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SunninghillService Areas Map */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Serving All Sunninghill Areas
            </h2>
            <p className="text-xl text-slate-600">
              From The Mutual Road to Sunninghill Road  complete coverage across Sunninghill
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Sunninghill Gardens",
              "Sunninghill Central",
              "Waterfall Drive (nearby)",
              "Main Road Sunninghill",
              "Woodmead Drive (nearby)",
              "Sunninghill Ridge",
              "The Kanyin",
              "The View Estate",
              "Sandton CBD",
              "Atholl Square",
              "Maxwell Drive",
              "Sandton City"
            ].map((area) => (
              <Card key={area} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <p className="font-semibold text-slate-800 text-sm">{area}</p>
                  <p className="text-xs text-slate-600 mt-1">Same Day Service</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 mb-2">Also serving nearby:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/carpenter-hyde-park" className="text-amber-600 hover:underline font-semibold">
                Carpenter Hyde Park
              </Link>
              <Link href="/carpenter-rivonia" className="text-amber-600 hover:underline font-semibold">
                Carpenter Rivonia
              </Link>  
              <Link href="/carpenter-illovo" className="text-amber-600 hover:underline font-semibold">
                Carpenter Illovo
              </Link>
              <Link href="/carpenter-rosebank" className="text-amber-600 hover:underline font-semibold">
                Carpenter Rosebank
              </Link>
              <Link href="/carpenter-morningside" className="text-amber-600 hover:underline font-semibold">
                Carpenter MorningSide
              </Link>
              <Link href="/carpenter-sandhurst" className="text-amber-600 hover:underline font-semibold">
                Carpenter Sandhurst
              </Link>
              <Link href="/carpenter-bryanston" className="text-amber-600 hover:underline font-semibold">
                Carpenter Bryanston
              </Link>
              <Link href="/areas/sandton" className="text-amber-600 hover:underline font-semibold">
                All Sandton Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview with Internal Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Our Sunninghill Carpentry & Plumbing Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Building2 className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">Kitchen Renovations</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Complete kitchen transformations for Sunninghill apartments and townhouses.
                </p>
                <Link href="/kitchen-renovations" className="text-amber-600 hover:underline text-sm font-semibold">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">Built-in Cupboards</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Custom wardrobes, home offices, and storage solutions.
                </p>
                <Link href="/built-in-cupboards" className="text-amber-600 hover:underline text-sm font-semibold">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">Granite & Quartz</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Premium countertop installations with expert templating.
                </p>
                <Link href="/quartz-granite" className="text-amber-600 hover:underline text-sm font-semibold">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="font-bold text-lg mb-2">Emergency Plumbing</h3>
                <p className="text-sm text-slate-600 mb-3">
                  24/7 emergency plumbing services throughout Sunninghill.
                </p>
                <Link href="/areas/sandton#plumbing" className="text-amber-600 hover:underline text-sm font-semibold">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Sunninghill Property?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join 50+ satisfied Sunninghill clients. Get your FREE quote today from Sunninghill's most trusted carpenter. Licensed, insured, and experienced in apartment buildings and townhouses.
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
              ⭐⭐⭐⭐⭐ "Outstanding craftsmanship on our apartment kitchen in Sunninghill Ridge!" - James T., Sunninghill
            </p>
          </div>

          <div className="mt-6 text-sm opacity-80">
            <p>Serving Sunninghill and nearby:&nbsp;
              <Link href="/carpenter-hyde-park" className="underline hover:text-amber-200">
              Hyde Park
              </Link>{" | "}
              <Link href="/carpenter-sandhurst" className="underline hover:text-amber-200">
               Sandhurst
              </Link>{" | "}
              <Link href="/carpenter-rivonia" className="underline hover:text-amber-200">
              Rivonia
              </Link>{" | "}
              <Link href="/carpenter-morningside" className="underline hover:text-amber-200">
              Morningside
              </Link>{" | "}
              <Link href="/carpenter-rosebank" className="underline hover:text-amber-200">
              Rosebank
              </Link>{" | "}
              <Link href="/carpenter-illovo" className="underline hover:text-amber-200">
               Illovo
              </Link>{" | "}
              <Link href="/carpenter-bryanston" className="underline hover:text-amber-200">
              Bryanston
              </Link>{" | "}
             <Link href="/areas/sandton" className="underline hover:text-amber-200">
            All Sandton
            </Link>
       </p>
          </div>
        </div>
      </section>
    </>
  )
}
