import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, Star, CheckCircle, Clock, Shield, MapPin, ArrowRight, Quote, Building, Cog } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Industrial Carpenter & Plumber Germiston | Commercial Carpentry, Granite Installation & Industrial Plumbing | Granite Carpentry",
  description:
    "Industrial carpenter & plumber services in Germiston. Commercial carpentry, kitchen renovations, built-in cupboards, granite installation & industrial plumbing. Licensed & insured. Call 067 601 4490 for free quote.",
  keywords:
    "carpenter Germiston, industrial plumber Germiston, commercial carpentry Germiston, kitchen renovations Germiston, built-in cupboards Germiston, granite installation Germiston, industrial plumbing Germiston",
  openGraph: {
    title: "Industrial Carpenter Germiston | Commercial Carpentry & Granite Installation",
    description:
      "Industrial carpenter services in Germiston. Commercial carpentry, kitchen renovations, built-in cupboards, granite installation. Licensed & insured.",
    url: "https://granitecarpentry.co.za/areas/germiston",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/og-image.png",
        width: 1200,
        height: 630,
        alt: "Industrial Carpenter Germiston - Granite Carpentry",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Carpenter Germiston | Commercial Carpentry & Granite Installation",
    description:
      "Industrial carpenter services in Germiston. Commercial carpentry, kitchen renovations, built-in cupboards, granite installation. Licensed & insured.",
    images: ["https://granitecarpentry.co.za/og-image.png"],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/germiston",
  },
}

export default function GermistonPage() {
  const services = [
    {
      title: "Commercial Carpentry Germiston",
      description: "Industrial-grade carpentry solutions for Germiston's commercial and industrial properties.",
      image: "/carpenter-johannesburg-installing-kitchen-cupboards.jpg",
      href: "/services/kitchen-renovations",
      price: "From R75,000",
      duration: "10-21 days",
    },
    {
      title: "Industrial Built-ins Germiston",
      description: "Heavy-duty built-in storage solutions designed for Germiston's industrial environment.",
      image: "/Built-Built-in-Cupboards-Midrand.jpg",
      href: "/services/built-in-cupboards",
      price: "From R20,000",
      duration: "5-10 days",
    },
    {
      title: "Commercial Granite Germiston",
      description: "Industrial-strength granite and quartz installations for commercial properties in Germiston.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/quartz-granite",
      price: "From R12,000",
      duration: "3-7 days",
    },
    {
      title: "Industrial Flooring Germiston",
      description: "Durable flooring solutions designed for Germiston's industrial and commercial needs.",
      image: "/beautiful-decking.jpg",
      href: "/services/decking-flooring",
      price: "From R18,000",
      duration: "5-12 days",
    },
    {
      title: "Industrial Plumbing Germiston",
      description: "Heavy-duty plumbing services designed for Germiston's industrial and commercial properties.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/plumbing",
      price: "From R420/hour",
      duration: "24/7 Service",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Building className="h-8 w-8 text-amber-600" />,
      title: "Industrial Specialists",
      description: "Specialized in commercial and industrial carpentry for Germiston's unique requirements",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Heavy-Duty Warranty",
      description: "Extended warranty coverage designed for industrial use and commercial applications",
    },
    {
      icon: <Cog className="h-8 w-8 text-amber-600" />,
      title: "Commercial Licensed",
      description: "Fully licensed for commercial work with comprehensive industrial insurance coverage",
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      title: "24/7 Industrial Service",
      description: "Round-the-clock service for Germiston's industrial clients with emergency response",
    },
  ]

  const testimonials = [
    {
      name: "Johan Pretorius",
      location: "Germiston Industrial",
      rating: 5,
      text: "Excellent commercial carpentry work for our factory offices. Professional team that understands industrial requirements and delivers on time.",
      service: "Commercial Carpentry",
    },
    {
      name: "Nomsa Mthembu",
      location: "Germiston CBD",
      rating: 5,
      text: "Outstanding kitchen renovation for our restaurant. Heavy-duty installations that can handle commercial use. Highly recommended!",
      service: "Commercial Kitchen",
    },
    {
      name: "Peter van Wyk",
      location: "Germiston South",
      rating: 5,
      text: "Professional granite installation for our showroom. Industrial-strength quality with perfect finishing. Excellent service throughout.",
      service: "Commercial Granite",
    },
  ]

  const nearbyAreas = [
    "Germiston CBD",
    "Germiston South",
    "Elsburg",
    "Primrose",
    "Lambton",
    "Dinwiddie",
    "Rosherville",
    "Parkhill",
    "Benoni",
    "Boksburg",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2">
                  Industrial Carpenter Germiston
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  Industrial Carpenter & <span className="text-amber-400">Commercial Carpentry</span>{" "}
                  <span className="block">Services in Germiston</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Transform your Germiston commercial or industrial property with specialized carpentry and granite
                  installation experts. Heavy-duty solutions for kitchens, built-ins, and commercial installations with
                  industrial-grade quality since 2020.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 items-center text-sm sm:text-base">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 fill-current" />
                  ))}
                  <span className="ml-2 font-semibold">5.0 Rating</span>
                </div>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">Industrial Grade</span>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">Commercial Licensed</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Get Commercial Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
                >
                  <Link href="tel:+27676014490">Call 067 601 4490</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Commercial Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Industrial Insurance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>24/7 Emergency Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Heavy-Duty Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/carpenter-johannesburg-installing-kitchen-cupboards.jpg"
                  alt="Industrial Carpenter Germiston - Commercial Carpentry and Built-in Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-slate-900 text-sm sm:text-base">Industrial Specialists</p>
                        <p className="text-xs sm:text-sm text-slate-600">Commercial Grade</p>
                      </div>
                      <Building className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Germiston Industrial Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Industrial-Grade Carpentry Solutions for Germiston
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              From commercial kitchens to industrial built-ins, we deliver heavy-duty craftsmanship with premium
              materials and professional installation throughout Germiston's commercial and industrial sectors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-600 text-white">{service.price}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Why Choose Us in Germiston</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Germiston's Leading Industrial Carpentry Specialists
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              With specialized experience in Germiston's industrial sector, we understand commercial requirements and
              deliver heavy-duty carpentry solutions that meet the highest industrial standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-4">Germiston Client Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Germiston Clients Say</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied Germiston commercial and industrial clients
              have to say about our specialized carpentry services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-amber-400 mr-3 flex-shrink-0" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t border-slate-700 pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-slate-400">{testimonial.location}</p>
                      </div>
                      <Badge variant="outline" className="border-amber-400 text-amber-400">
                        {testimonial.service}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Areas We Serve</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Industrial Carpentry Throughout Germiston & East Rand
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We provide specialized industrial carpentry and granite installation services throughout Germiston and
              surrounding East Rand industrial areas with the same high standards and commercial-grade quality.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {nearbyAreas.map((area, index) => (
              <div
                key={index}
                className="group p-4 rounded-lg border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600 group-hover:text-amber-700 flex-shrink-0" />
                  <span className="font-medium text-slate-900 group-hover:text-amber-700 text-sm">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready for Industrial-Grade Carpentry in Germiston?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your commercial carpentry or granite installation project in
            Germiston. We're ready to deliver heavy-duty solutions with industrial-grade craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-amber-600 hover:bg-slate-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Get Commercial Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
            >
              <Link href="tel:+27676014490">Call 067 601 4490</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
