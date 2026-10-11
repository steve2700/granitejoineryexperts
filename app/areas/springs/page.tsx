import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, Star, CheckCircle, Clock, Shield, Award, MapPin, ArrowRight, Quote, Zap, Timer } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Efficient Carpenter & Plumber Springs | Fast Kitchen Renovations, Built-in Cupboards & Emergency Plumbing | Granite Carpentry",
  description:
    "Efficient carpenter & plumber services in Springs. Fast kitchen renovations, built-in cupboards, granite installation & emergency plumbing. Licensed & insured with quick turnaround. Call 067 601 4490 for free quote.",
  keywords:
    "carpenter Springs, efficient plumber Springs, fast kitchen renovations Springs, built-in cupboards Springs, granite installation Springs, emergency plumbing Springs, quick carpentry Springs, fast plumbing Springs",
  openGraph: {
    title: "Efficient Carpenter & Plumber Springs | Fast Kitchen Renovations & Built-in Cupboards",
    description:
      "Efficient carpenter & plumber services in Springs. Fast kitchen renovations, built-in cupboards, granite installation & emergency plumbing. Licensed & insured with quick turnaround.",
    url: "https://granitecarpentry.co.za/areas/springs",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/og-image.png",
        width: 1200,
        height: 630,
        alt: "Efficient Carpenter & Plumber Springs - Granite Carpentry",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Efficient Carpenter & Plumber Springs | Fast Kitchen Renovations & Built-in Cupboards",
    description:
      "Efficient carpenter & plumber services in Springs. Fast kitchen renovations, built-in cupboards, granite installation & emergency plumbing. Licensed & insured with quick turnaround.",
    images: ["https://granitecarpentry.co.za/og-image.png"],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/springs",
  },
}

export default function SpringsPage() {
  const services = [
    {
      title: "Fast Kitchen Renovations Springs",
      description:
        "Quick and efficient kitchen makeovers with custom cabinets and granite countertops for Springs homes.",
      image: "/Kitchen-renovations-sandton.webp",
      href: "/services/kitchen-renovations",
      price: "From R45,000",
      duration: "5-10 days",
    },
    {
      title: "Quick Built-in Cupboards Springs",
      description: "Efficient custom wardrobes and storage solutions with fast installation for Springs properties.",
      image: "/Built-Built-in-Cupboards-Midrand.jpg",
      href: "/services/built-in-cupboards",
      price: "From R12,000",
      duration: "2-5 days",
    },
    {
      title: "Express Granite Installation Springs",
      description: "Fast granite and quartz countertop installation with efficient service throughout Springs.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/quartz-granite",
      price: "From R7,000",
      duration: "1-3 days",
    },
    {
      title: "Rapid Decking & Flooring Springs",
      description: "Quick outdoor decking and indoor flooring solutions with efficient installation in Springs.",
      image: "/beautiful-decking.jpg",
      href: "/services/decking-flooring",
      price: "From R10,000",
      duration: "2-6 days",
    },
    {
      title: "Fast Plumbing Services Springs",
      description: "Quick and efficient plumbing repairs and installations with same-day service throughout Springs.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/plumbing",
      price: "From R340/hour",
      duration: "Same Day",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Zap className="h-8 w-8 text-amber-600" />,
      title: "Lightning Fast Service",
      description: "Efficient project completion with faster turnaround times than traditional carpentry services",
    },
    {
      icon: <Timer className="h-8 w-8 text-amber-600" />,
      title: "Quick Response Guarantee",
      description: "Same-day quotes and rapid project start times for urgent Springs carpentry needs",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Quality Without Compromise",
      description: "Fast service doesn't mean cutting corners - full warranty on all efficient installations",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Streamlined Process",
      description: "Optimized workflows and efficient project management for Springs area clients",
    },
  ]

  const testimonials = [
    {
      name: "Thabo Mthembu",
      location: "Springs Central",
      rating: 5,
      text: "Incredibly fast service! Our kitchen renovation was completed in just 8 days with outstanding quality. The team was efficient and professional throughout.",
      service: "Fast Kitchen Renovation",
    },
    {
      name: "Susan van der Walt",
      location: "Casseldale, Springs",
      rating: 5,
      text: "Amazing quick turnaround on our built-in cupboards. What other companies quoted 2 weeks for, they completed in 4 days with perfect results!",
      service: "Quick Built-ins",
    },
    {
      name: "Ahmed Hassan",
      location: "Daggafontein, Springs",
      rating: 5,
      text: "Express granite installation exceeded expectations. Professional, fast, and the quality is exceptional. Highly recommend for urgent projects!",
      service: "Express Granite",
    },
  ]

  const nearbyAreas = [
    "Springs Central",
    "Casseldale",
    "Daggafontein",
    "Selcourt",
    "Dersley",
    "Strubenvale",
    "Nuffield",
    "Geduld",
    "Benoni",
    "Nigel",
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
                  Efficient Carpenter & Plumber Springs
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  Efficient Carpenter & <span className="text-amber-400">Fast Installation</span>{" "}
                  <span className="block">Services in Springs</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Transform your Springs home with the East Rand's most efficient carpentry and granite installation
                  experts. Lightning-fast kitchen renovations, built-in cupboards, and stone installations with 5-star
                  quality since 2020.
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
                <span className="font-semibold">Lightning Fast</span>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">Same-Day Quotes</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Get Instant Quote
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
                  <span>Same-Day Quotes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Fast Project Start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Quick Turnaround</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/carpenter-installing-deck-joists-johannesburg.jpg"
                  alt="Efficient Carpenter & Plumber Springs - Fast Kitchen Renovations and Built-in Cupboards"
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
                        <p className="font-semibold text-slate-900 text-sm sm:text-base">Lightning Fast</p>
                        <p className="text-xs sm:text-sm text-slate-600">Efficient Service</p>
                      </div>
                      <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Springs Efficient Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Lightning-Fast Carpentry Solutions for Springs
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              From rapid kitchen renovations to express built-ins, we deliver exceptional craftsmanship with premium
              materials and efficient installation throughout Springs and the East Rand.
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
                    <Badge className="bg-green-600 text-white">Fast</Badge>
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Why Choose Us in Springs</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Springs' Most Efficient Carpentry Specialists
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              With optimized processes and streamlined workflows, we deliver the fastest carpentry services in Springs
              without compromising on quality or craftsmanship.
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
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-4">Springs Client Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Springs Clients Say</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied Springs clients have to say about our efficient
              carpentry and installation services.
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
              Efficient Carpentry Throughout Springs & East Rand
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We provide efficient carpentry and granite installation services throughout Springs and surrounding East
              Rand areas with the same lightning-fast service and quality standards.
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready for Lightning-Fast Carpentry in Springs?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get an instant consultation and quote for your carpentry or granite installation project in Springs. We're
            ready to deliver efficient solutions with lightning-fast craftsmanship.
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
                Get Instant Quote
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
