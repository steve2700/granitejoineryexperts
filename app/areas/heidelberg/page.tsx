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
  MapPin,
  ArrowRight,
  Quote,
  Mountain,
  Compass,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "Historic Carpenter & Plumber Heidelberg | Traditional Carpentry, Granite Installation & Heritage Plumbing | Granite Carpentry",
  description:
    "Historic carpenter & plumber services in Heidelberg. Traditional carpentry, kitchen renovations, built-in cupboards, granite installation & heritage plumbing. Licensed & insured with historic expertise. Call 067 601 4490 for free quote.",
  keywords:
    "carpenter Heidelberg, historic plumber Heidelberg, traditional carpentry Heidelberg, kitchen renovations Heidelberg, built-in cupboards Heidelberg, granite installation Heidelberg, heritage plumbing Heidelberg",
  openGraph: {
    title: "Historic Carpenter & Plumber Heidelberg | Traditional Carpentry & Granite Installation",
    description:
      "Historic carpenter & plumber services in Heidelberg. Traditional carpentry, kitchen renovations, built-in cupboards, granite installation & heritage plumbing. Licensed & insured with historic expertise.",
    url: "https://granitecarpentry.co.za/areas/heidelberg",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/og-image.png",
        width: 1200,
        height: 630,
        alt: "Historic Carpenter & Plumber Heidelberg - Granite Carpentry",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Historic Carpenter & Plumber Heidelberg | Traditional Carpentry & Granite Installation",
    description:
      "Historic carpenter & plumber services in Heidelberg. Traditional carpentry, kitchen renovations, built-in cupboards, granite installation & heritage plumbing. Licensed & insured with historic expertise.",
    images: ["https://granitecarpentry.co.za/og-image.png"],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/heidelberg",
  },
}

export default function HeidelbergPage() {
  const services = [
    {
      title: "Historic Kitchen Renovations Heidelberg",
      description:
        "Traditional kitchen makeovers that honor Heidelberg's historic character with modern functionality.",
      image: "/Kitchen-renovations-sandton.webp",
      href: "/services/kitchen-renovations",
      price: "From R51,000",
      duration: "8-15 days",
    },
    {
      title: "Heritage Built-in Cupboards Heidelberg",
      description: "Classic custom wardrobes and storage solutions that reflect Heidelberg's historic charm.",
      image: "/Built-Built-in-Cupboards-Midrand.jpg",
      href: "/services/built-in-cupboards",
      price: "From R15,500",
      duration: "4-8 days",
    },
    {
      title: "Traditional Granite Installation Heidelberg",
      description: "Premium granite and quartz installations that complement Heidelberg's historic architecture.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/quartz-granite",
      price: "From R9,000",
      duration: "3-6 days",
    },
    {
      title: "Historic Decking & Flooring Heidelberg",
      description: "Traditional outdoor decking and flooring solutions for Heidelberg's historic properties.",
      image: "/beautiful-decking.jpg",
      href: "/services/decking-flooring",
      price: "From R13,500",
      duration: "4-9 days",
    },
    {
      title: "Heritage Plumbing Services Heidelberg",
      description:
        "Traditional plumbing services that respect Heidelberg's historic character while providing modern functionality.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/plumbing",
      price: "From R380/hour",
      duration: "Heritage Service",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Mountain className="h-8 w-8 text-amber-600" />,
      title: "Historic Specialists",
      description: "Deep respect for Heidelberg's rich history with traditional craftsmanship techniques",
    },
    {
      icon: <Compass className="h-8 w-8 text-amber-600" />,
      title: "Heritage Expertise",
      description: "Specialized knowledge of historic building methods and traditional carpentry styles",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Historic Warranty",
      description: "Comprehensive warranty coverage designed for historic properties and heritage homes",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Sedibeng Coverage",
      description: "Extensive service throughout Heidelberg and surrounding Sedibeng district areas",
    },
  ]

  const testimonials = [
    {
      name: "Heinrich Müller",
      location: "Heidelberg Central",
      rating: 5,
      text: "Exceptional historic kitchen renovation that perfectly preserved our home's character while adding modern functionality. Outstanding craftsmanship!",
      service: "Historic Kitchen",
    },
    {
      name: "Thandiwe Nkomo",
      location: "Heidelberg West",
      rating: 5,
      text: "Beautiful heritage built-in cupboards that honor our historic home's character. Quality workmanship with attention to traditional details.",
      service: "Heritage Built-ins",
    },
    {
      name: "Francois du Toit",
      location: "Heidelberg East",
      rating: 5,
      text: "Professional granite installation that complements our historic property perfectly. Excellent service with heritage sensitivity.",
      service: "Traditional Granite",
    },
  ]

  const nearbyAreas = [
    "Heidelberg Central",
    "Heidelberg West",
    "Heidelberg East",
    "Ratanda",
    "Suikerbosrand",
    "Nigel",
    "Balfour",
    "Vereeniging",
    "Meyerton",
    "Walkerville",
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
                  Historic Carpenter & Plumber Heidelberg
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  Historic Carpenter & <span className="text-amber-400">Heritage Craftsmanship</span>{" "}
                  <span className="block">Services in Heidelberg</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Transform your Heidelberg historic home with the Sedibeng district's most trusted heritage carpentry
                  and granite installation experts. Traditional kitchen renovations, built-in cupboards, and stone
                  installations that honor historic character since 2020.
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
                <span className="font-semibold">Historic Specialists</span>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">Heritage Expertise</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Get Historic Quote
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
                  <span>Historic Expertise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Traditional Methods</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Heritage Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/granite-installation-Johannesburg.jpg"
                  alt="Historic Carpenter Heidelberg - Heritage Carpentry and Traditional Solutions"
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
                        <p className="font-semibold text-slate-900 text-sm sm:text-base">Historic Specialists</p>
                        <p className="text-xs sm:text-sm text-slate-600">Heritage Expertise</p>
                      </div>
                      <Mountain className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Heidelberg Historic Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Heritage Carpentry Solutions for Historic Heidelberg
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              From historic kitchens to heritage built-ins, we deliver traditional craftsmanship with premium materials
              and professional installation throughout Heidelberg and the Sedibeng district.
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
                    <Badge className="bg-purple-600 text-white">Historic</Badge>
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Why Choose Us in Heidelberg</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Heidelberg's Leading Historic Carpentry Specialists
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              With deep respect for Heidelberg's historic heritage and traditional architecture, we deliver carpentry
              solutions that honor the past while embracing modern functionality and quality.
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
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-4">Heidelberg Client Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Historic Clients Say</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied Heidelberg clients have to say about our
              historic carpentry and heritage installation services.
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
              Historic Carpentry Throughout Heidelberg & Sedibeng
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We provide specialized historic carpentry and granite installation services throughout Heidelberg and
              surrounding Sedibeng district areas with the same heritage expertise and quality craftsmanship.
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready for Historic Carpentry in Heidelberg?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your historic carpentry or granite installation project in Heidelberg.
            We're ready to deliver heritage solutions that honor your home's historic character.
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
                Get Historic Quote
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
