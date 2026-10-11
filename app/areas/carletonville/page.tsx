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
  Award,
  ArrowRight,
  Pickaxe,
  HardHat,
  MapPin,
  Quote,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "Mining Town Carpenter & Plumber Carletonville | Heavy-Duty Carpentry, Granite Installation & Industrial Plumbing | Granite Carpentry",
  description:
    "Mining town carpenter & plumber services in Carletonville. Heavy-duty carpentry, kitchen renovations, built-in cupboards, granite installation & industrial plumbing. Licensed & insured for mining communities. Call 067 601 4490 for free quote.",
  keywords:
    "carpenter Carletonville, mining town plumber Carletonville, heavy-duty carpentry Carletonville, kitchen renovations Carletonville, built-in cupboards Carletonville, granite installation Carletonville, industrial plumbing Carletonville",
  openGraph: {
    title: "Mining Town Carpenter & Plumber Carletonville | Heavy-Duty Carpentry & Granite Installation",
    description:
      "Mining town carpenter services in Carletonville. Heavy-duty carpentry, kitchen renovations, built-in cupboards, granite installation. Licensed & insured for mining communities.",
    url: "https://granitecarpentry.co.za/areas/carletonville",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mining Town Carpenter Carletonville - Granite Carpentry",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mining Town Carpenter & Plumber Carletonville | Heavy-Duty Carpentry & Granite Installation",
    description:
      "Mining town carpenter services in Carletonville. Heavy-duty carpentry, kitchen renovations, built-in cupboards, granite installation. Licensed & insured for mining communities.",
    images: ["https://granitecarpentry.co.za/og-image.png"],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/carletonville",
  },
}

export default function CarletonvillePage() {
  const services = [
    {
      title: "Mining Town Kitchen Renovations",
      description: "Heavy-duty kitchen makeovers built to withstand Carletonville's mining community lifestyle.",
      image: "/Kitchen-renovations-sandton.webp",
      href: "/services/kitchen-renovations",
      price: "From R53,000",
      duration: "8-16 days",
    },
    {
      title: "Mining Community Built-ins",
      description: "Robust custom wardrobes and storage solutions designed for Carletonville's mining families.",
      image: "/Built-Built-in-Cupboards-Midrand.jpg",
      href: "/services/built-in-cupboards",
      price: "From R17,000",
      duration: "4-8 days",
    },
    {
      title: "Heavy-Duty Granite Installation",
      description: "Industrial-strength granite and quartz installations built for mining town durability.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/quartz-granite",
      price: "From R9,500",
      duration: "3-6 days",
    },
    {
      title: "Mining Town Decking & Flooring",
      description: "Durable outdoor decking and flooring solutions designed for Carletonville's mining environment.",
      image: "/beautiful-decking.jpg",
      href: "/services/decking-flooring",
      price: "From R14,500",
      duration: "4-10 days",
    },
    {
      title: "Mining Town Plumbing Services",
      description: "Heavy-duty plumbing services designed for Carletonville's mining community and industrial demands.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/plumbing",
      price: "From R400/hour",
      duration: "24/7 Mining Service",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Pickaxe className="h-8 w-8 text-amber-600" />,
      title: "Mining Town Specialists",
      description: "Deep understanding of Carletonville's mining community needs and heavy-duty requirements",
    },
    {
      icon: <HardHat className="h-8 w-8 text-amber-600" />,
      title: "Heavy-Duty Focus",
      description: "Specialized in robust construction that can handle the demands of mining community living",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Mining-Grade Warranty",
      description: "Extended warranty coverage designed for the demanding conditions of mining town life",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "West Rand Coverage",
      description: "Comprehensive service throughout Carletonville and surrounding West Rand mining areas",
    },
  ]

  const testimonials = [
    {
      name: "Sipho Mthembu",
      location: "Carletonville Central",
      rating: 5,
      text: "Outstanding kitchen renovation that can handle our mining family's busy lifestyle. Built tough and looks great. Professional team that understands our needs.",
      service: "Mining Town Kitchen",
    },
    {
      name: "Jannie Pretorius",
      location: "Carletonville West",
      rating: 5,
      text: "Excellent built-in cupboards that are built to last in our mining community. Quality workmanship that stands up to daily use from our large family.",
      service: "Mining Community Built-ins",
    },
    {
      name: "Nomsa Radebe",
      location: "Carletonville East",
      rating: 5,
      text: "Heavy-duty granite installation that looks fantastic and handles everything we throw at it. Perfect for our mining town home!",
      service: "Heavy-Duty Granite",
    },
  ]

  const nearbyAreas = [
    "Carletonville Central",
    "Carletonville West",
    "Carletonville East",
    "Khutsong",
    "Oberholzer",
    "Fochville",
    "Westonaria",
    "Potchefstroom",
    "Krugersdorp",
    "Randfontein",
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
                  Mining Town Carpenter & Plumber Carletonville
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  Mining Town Carpenter & <span className="text-amber-400">Heavy-Duty</span>{" "}
                  <span className="block">Carpentry in Carletonville</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Transform your Carletonville home with the West Rand's most trusted mining town carpentry and granite
                  installation experts. Heavy-duty kitchen renovations, built-in cupboards, and stone installations
                  built for mining community living since 2020.
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
                <span className="font-semibold">Mining Town Specialists</span>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">Heavy-Duty Grade</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Get Mining Quote
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
                  <span>Mining Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Heavy-Duty Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Community Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Mining Town Specialists</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/drywall-contractor.jpg"
                  alt="Mining Town Carpenter Carletonville - Heavy-Duty Carpentry and Built-in Solutions"
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
                        <p className="font-semibold text-slate-900 text-sm sm:text-base">Mining Town Specialists</p>
                        <p className="text-xs sm:text-sm text-slate-600">Heavy-Duty Grade</p>
                      </div>
                      <Pickaxe className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Carletonville Mining Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Heavy-Duty Carpentry Solutions for Mining Town Living
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              From mining-strength kitchens to heavy-duty built-ins, we deliver robust craftsmanship with premium
              materials and professional installation throughout Carletonville and the West Rand mining communities.
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
                    <Badge className="bg-orange-600 text-white">Mining</Badge>
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Why Choose Us in Carletonville</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Carletonville's Leading Mining Town Carpentry Specialists
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              With specialized experience in Carletonville's mining community environment, we understand the demands of
              mining town living and deliver heavy-duty carpentry solutions built to last.
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
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-4">Carletonville Client Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Mining Community Clients Say</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied Carletonville clients have to say about our
              mining town carpentry and heavy-duty installation services.
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
              Mining Town Carpentry Throughout Carletonville & West Rand
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We provide specialized mining town carpentry and granite installation services throughout Carletonville
              and surrounding West Rand mining areas with the same heavy-duty expertise and quality craftsmanship.
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready for Mining Town Carpentry in Carletonville?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your heavy-duty carpentry or granite installation project in
            Carletonville. We're ready to deliver mining-strength solutions built for your community.
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
                Get Mining Quote
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
