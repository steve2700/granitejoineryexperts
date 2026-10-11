import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Phone,
  Star,
  CheckCircle,
  Clock,
  Shield,
  MapPin,
  ArrowRight,
  Quote,
  Factory,
  Building2,
  Droplets,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "Steel City Carpenter & Plumber Vanderbijlpark | Industrial Kitchen Renovations, Built-in Cupboards & Heavy-Duty Plumbing | Granite Carpentry",
  description:
    "Steel city carpenter & plumber services in Vanderbijlpark. Industrial kitchen renovations, built-in cupboards, granite installation & heavy-duty plumbing. Licensed & insured for steel city living. Call 067 601 4490 for free quote.",
  keywords:
    "carpenter Vanderbijlpark, steel city plumber Vanderbijlpark, industrial kitchen renovations Vanderbijlpark, built-in cupboards Vanderbijlpark, granite installation Vanderbijlpark, heavy-duty plumbing Vanderbijlpark, steel city carpenter, emergency plumber Vanderbijlpark, industrial plumbing Vanderbijlpark",
  openGraph: {
    title: "Steel City Carpenter & Plumber Vanderbijlpark | Industrial Kitchen Renovations & Heavy-Duty Plumbing",
    description:
      "Steel city carpenter & plumber services in Vanderbijlpark. Industrial kitchen renovations, built-in cupboards, granite installation & heavy-duty plumbing. Licensed & insured for steel city living.",
    url: "https://granitecarpentry.co.za/areas/vanderbijlpark",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/og-image.png",
        width: 1200,
        height: 630,
        alt: "Steel City Carpenter & Plumber Vanderbijlpark - Granite Carpentry",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel City Carpenter & Plumber Vanderbijlpark | Industrial Kitchen Renovations & Heavy-Duty Plumbing",
    description:
      "Steel city carpenter & plumber services in Vanderbijlpark. Industrial kitchen renovations, built-in cupboards, granite installation & heavy-duty plumbing. Licensed & insured for steel city living.",
    images: ["https://granitecarpentry.co.za/og-image.png"],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/vanderbijlpark",
  },
}

export default function VanderbijlparkPage() {
  const services = [
    {
      title: "Steel City Kitchen Renovations",
      description: "Heavy-duty kitchen makeovers built to withstand Vanderbijlpark's industrial environment.",
      image: "/Kitchen-renovations-sandton.webp",
      href: "/services/kitchen-renovations",
      price: "From R55,000",
      duration: "8-16 days",
    },
    {
      title: "Industrial Built-in Cupboards",
      description: "Robust custom wardrobes and storage solutions designed for Vanderbijlpark's industrial lifestyle.",
      image: "/Built-Built-in-Cupboards-Midrand.jpg",
      href: "/services/built-in-cupboards",
      price: "From R18,000",
      duration: "4-8 days",
    },
    {
      title: "Heavy-Duty Granite Installation",
      description:
        "Industrial-strength granite and quartz installations built for Vanderbijlpark's demanding environment.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/quartz-granite",
      price: "From R10,000",
      duration: "3-6 days",
    },
    {
      title: "Industrial Plumbing Services",
      description: "Heavy-duty plumbing solutions for Vanderbijlpark's steel city homes and industrial properties.",
      image: "/professional-plumber-working.png",
      href: "/services/plumbing",
      price: "From R420/hour",
      duration: "Same day",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Factory className="h-8 w-8 text-amber-600" />,
      title: "Steel City Specialists",
      description: "Deep understanding of Vanderbijlpark's industrial environment and unique carpentry requirements",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Industrial-Grade Warranty",
      description: "Extended warranty coverage designed for Vanderbijlpark's demanding industrial conditions",
    },
    {
      icon: <Building2 className="h-8 w-8 text-amber-600" />,
      title: "Heavy-Duty Licensed",
      description: "Fully licensed for industrial work with comprehensive coverage for Vanderbijlpark projects",
    },
    {
      icon: <Droplets className="h-8 w-8 text-amber-600" />,
      title: "Industrial Plumbing Expert",
      description: "Specialized in heavy-duty plumbing systems for steel city industrial and residential properties",
    },
  ]

  const testimonials = [
    {
      name: "Pieter Steyn",
      location: "Vanderbijlpark SW5",
      rating: 5,
      text: "Outstanding kitchen renovation and plumbing upgrade that can handle our industrial lifestyle. Built tough for steel city living. Professional team that understands our needs.",
      service: "Steel City Kitchen & Plumbing",
    },
    {
      name: "Nomsa Radebe",
      location: "Vanderbijlpark CE",
      rating: 5,
      text: "Excellent built-in cupboards and emergency plumbing service that are built to last in our industrial environment. Quality workmanship that stands up to daily use.",
      service: "Industrial Built-ins & Plumbing",
    },
    {
      name: "Jan van Rensburg",
      location: "Vanderbijlpark SE",
      rating: 5,
      text: "Heavy-duty granite installation and industrial plumbing that looks great and handles everything we throw at it. Perfect for our steel city home!",
      service: "Heavy-Duty Granite & Plumbing",
    },
  ]

  const nearbyAreas = [
    "Vanderbijlpark SW5",
    "Vanderbijlpark CE",
    "Vanderbijlpark SE",
    "Bophelong",
    "Boipatong",
    "Sebokeng",
    "Evaton",
    "Sharpeville",
    "Vereeniging",
    "Sasolburg",
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
                  Steel City Carpenter & Plumber Vanderbijlpark
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  Steel City Carpenter & <span className="text-amber-400">Industrial Plumber</span>{" "}
                  <span className="block">Services in Vanderbijlpark</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Transform your Vanderbijlpark home with the Vaal Triangle's most trusted steel city carpentry, granite
                  installation, and heavy-duty plumbing experts. Industrial kitchen renovations, built-in cupboards,
                  stone installations, and robust plumbing solutions built for steel city living since 2020.
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
                <span className="font-semibold">Steel City Specialists</span>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">Industrial Grade</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Get Industrial Quote
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
                  <span>Industrial Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Heavy-Duty Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Emergency Plumbing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Steel City Specialists</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/drywall-contractor.jpg"
                  alt="Steel City Carpenter & Plumber Vanderbijlpark - Industrial Carpentry and Heavy-Duty Plumbing Solutions"
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
                        <p className="font-semibold text-slate-900 text-sm sm:text-base">Steel City Specialists</p>
                        <p className="text-xs sm:text-sm text-slate-600">Industrial Grade</p>
                      </div>
                      <Factory className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Vanderbijlpark Industrial Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Heavy-Duty Carpentry & Plumbing Solutions for Steel City
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              From industrial-strength kitchens to heavy-duty plumbing systems, we deliver robust craftsmanship with
              premium materials and professional installation throughout Vanderbijlpark and the Vaal Triangle.
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
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">Industrial</Badge>
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Why Choose Us in Vanderbijlpark</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Vanderbijlpark's Leading Steel City Carpentry & Plumbing Specialists
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              With specialized experience in Vanderbijlpark's industrial environment, we understand steel city living
              and deliver heavy-duty carpentry and plumbing solutions built to withstand the demands of industrial life.
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
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-4">Vanderbijlpark Client Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Steel City Clients Say</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied Vanderbijlpark clients have to say about our
              industrial-grade carpentry and heavy-duty plumbing services.
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
              Industrial Carpentry & Plumbing Throughout Vanderbijlpark & Vaal Triangle
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We provide specialized industrial carpentry, granite installation, and heavy-duty plumbing services
              throughout Vanderbijlpark and surrounding Vaal Triangle areas with the same heavy-duty standards and steel
              city quality.
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready for Steel City Carpentry & Plumbing in Vanderbijlpark?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your industrial carpentry, granite installation, or heavy-duty
            plumbing project in Vanderbijlpark. We're ready to deliver heavy-duty solutions built for steel city living.
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
                Get Industrial Quote
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
