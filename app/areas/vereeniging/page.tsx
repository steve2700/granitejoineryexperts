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
  Heart,
  Crown,
  Droplets,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "River City Carpenter & Plumber Vereeniging | Traditional Kitchen Renovations, Built-in Cupboards & Reliable Plumbing | Granite Carpentry",
  description:
    "River city carpenter & plumber services in Vereeniging. Traditional kitchen renovations, built-in cupboards, granite installation & reliable plumbing. Licensed & insured for Vaal Triangle living. Call 067 601 4490 for free quote.",
  keywords:
    "carpenter Vereeniging, river city plumber Vereeniging, traditional kitchen renovations Vereeniging, built-in cupboards Vereeniging, granite installation Vereeniging, reliable plumbing Vereeniging, Vaal Triangle carpenter, emergency plumber Vereeniging, heritage plumbing Vereeniging",
  openGraph: {
    title: "River City Carpenter & Plumber Vereeniging | Traditional Kitchen Renovations & Reliable Plumbing",
    description:
      "River city carpenter & plumber services in Vereeniging. Traditional kitchen renovations, built-in cupboards, granite installation & reliable plumbing. Licensed & insured for Vaal Triangle living.",
    url: "https://granitecarpentry.co.za/areas/vereeniging",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/og-image.png",
        width: 1200,
        height: 630,
        alt: "River City Carpenter & Plumber Vereeniging - Granite Carpentry",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "River City Carpenter & Plumber Vereeniging | Traditional Kitchen Renovations & Reliable Plumbing",
    description:
      "River city carpenter & plumber services in Vereeniging. Traditional kitchen renovations, built-in cupboards, granite installation & reliable plumbing. Licensed & insured for Vaal Triangle living.",
    images: ["https://granitecarpentry.co.za/og-image.png"],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/vereeniging",
  },
}

export default function VereenigingPage() {
  const services = [
    {
      title: "Heritage Kitchen Renovations",
      description: "Traditional kitchen makeovers that honor Vereeniging's rich heritage with modern functionality.",
      image: "/Kitchen-renovations-sandton.webp",
      href: "/services/kitchen-renovations",
      price: "From R52,000",
      duration: "8-15 days",
    },
    {
      title: "Traditional Built-in Cupboards",
      description: "Classic custom wardrobes and storage solutions that reflect Vereeniging's timeless character.",
      image: "/Built-Built-in-Cupboards-Midrand.jpg",
      href: "/services/built-in-cupboards",
      price: "From R16,000",
      duration: "4-8 days",
    },
    {
      title: "Classic Granite Installation",
      description: "Elegant granite and quartz installations that complement Vereeniging's traditional architecture.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/quartz-granite",
      price: "From R9,000",
      duration: "3-6 days",
    },
    {
      title: "Heritage Plumbing Services",
      description:
        "Reliable plumbing solutions that respect Vereeniging's traditional homes while providing modern efficiency.",
      image: "/professional-plumber-working.png",
      href: "/services/plumbing",
      price: "From R380/hour",
      duration: "Same day",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Crown className="h-8 w-8 text-amber-600" />,
      title: "Heritage Specialists",
      description: "Deep respect for Vereeniging's rich history with traditional craftsmanship techniques",
    },
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      title: "Community Values",
      description: "Strong community ties with personalized service that reflects Vereeniging's family values",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Traditional Warranty",
      description: "Time-honored warranty coverage backed by generations of carpentry excellence",
    },
    {
      icon: <Droplets className="h-8 w-8 text-amber-600" />,
      title: "Heritage Plumbing Expert",
      description: "Specialized in traditional home plumbing with modern reliability for Vaal Triangle properties",
    },
  ]

  const testimonials = [
    {
      name: "Maria Oosthuizen",
      location: "Vereeniging Central",
      rating: 5,
      text: "Beautiful heritage kitchen renovation and reliable plumbing upgrade that perfectly captures the traditional character of our Vereeniging home. Exceptional craftsmanship with modern functionality.",
      service: "Heritage Kitchen & Plumbing",
    },
    {
      name: "David Mthembu",
      location: "Three Rivers, Vereeniging",
      rating: 5,
      text: "Outstanding traditional built-in cupboards and emergency plumbing service that honor our home's heritage. Quality workmanship that will last for generations. Highly recommended!",
      service: "Traditional Built-ins & Plumbing",
    },
    {
      name: "Annelie du Plessis",
      location: "Peacehaven, Vereeniging",
      rating: 5,
      text: "Classic granite installation and heritage plumbing that complements our traditional home perfectly. Professional service with attention to heritage details.",
      service: "Classic Granite & Plumbing",
    },
  ]

  const nearbyAreas = [
    "Vereeniging Central",
    "Three Rivers",
    "Peacehaven",
    "Duncanville",
    "Roshnee",
    "Sharpeville",
    "Boipatong",
    "Sebokeng",
    "Vanderbijlpark",
    "Meyerton",
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
                  River City Carpenter & Plumber Vereeniging
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  River City Carpenter & <span className="text-amber-400">Heritage Plumber</span>{" "}
                  <span className="block">Services in Vereeniging</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Transform your Vereeniging home with the Vaal Triangle's most trusted heritage carpentry, granite
                  installation, and reliable plumbing experts. Traditional kitchen renovations, built-in cupboards,
                  stone installations, and heritage plumbing solutions that honor our rich heritage since 2020.
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
                <span className="font-semibold">Heritage Specialists</span>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">Traditional Values</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Get Heritage Quote
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
                  <span>Heritage Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Traditional Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Reliable Plumbing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Community Values</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/trusted-carpenter-randburg.jpg"
                  alt="River City Carpenter & Plumber Vereeniging - Heritage Carpentry and Reliable Plumbing Solutions"
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
                        <p className="font-semibold text-slate-900 text-sm sm:text-base">Heritage Specialists</p>
                        <p className="text-xs sm:text-sm text-slate-600">Traditional Values</p>
                      </div>
                      <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Vereeniging Heritage Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Traditional Carpentry & Plumbing Solutions for Vereeniging
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              From heritage kitchens to reliable plumbing systems, we deliver timeless craftsmanship with premium
              materials and professional installation throughout Vereeniging and the Vaal Triangle.
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
                    <Badge className="bg-purple-600 text-white">Heritage</Badge>
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Why Choose Us in Vereeniging</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Vereeniging's Leading Heritage Carpentry & Plumbing Specialists
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              With deep respect for Vereeniging's rich heritage and traditional values, we deliver carpentry and
              plumbing solutions that honor the past while embracing modern functionality and reliability.
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
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-4">Vereeniging Client Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Heritage Clients Say</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied Vereeniging clients have to say about our
              heritage carpentry and reliable plumbing services.
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
              Heritage Carpentry & Plumbing Throughout Vereeniging & Vaal Triangle
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We provide specialized heritage carpentry, granite installation, and reliable plumbing services throughout
              Vereeniging and surrounding Vaal Triangle areas with the same traditional values and quality
              craftsmanship.
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
            Ready for Heritage Carpentry & Plumbing in Vereeniging?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your heritage carpentry, granite installation, or reliable plumbing
            project in Vereeniging. We're ready to deliver traditional solutions that honor our rich heritage.
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
                Get Heritage Quote
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
