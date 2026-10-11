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
  Building,
  Zap,
  Droplets,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "City Carpenter & Plumber Johannesburg | Premium Kitchen Renovations, Built-in Cupboards & Professional Plumbing | Granite Carpentry",
  description:
    "City carpenter & plumber services in Johannesburg CBD & Central. Premium kitchen renovations, built-in cupboards, granite installation & professional plumbing. Licensed & insured for city living. Call 067 601 4490 for free quote.",
  keywords:
    "carpenter Johannesburg, city plumber Johannesburg, premium kitchen renovations Johannesburg, built-in cupboards Johannesburg, granite installation Johannesburg, professional plumbing Johannesburg, Johannesburg CBD carpenter, emergency plumber Johannesburg, commercial plumbing Johannesburg",
  openGraph: {
    title: "City Carpenter & Plumber Johannesburg | Premium Kitchen Renovations & Professional Plumbing",
    description:
      "City carpenter & plumber services in Johannesburg CBD & Central. Premium kitchen renovations, built-in cupboards, granite installation & professional plumbing. Licensed & insured for city living.",
    url: "https://granitecarpentry.co.za/areas/johannesburg",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/og-image.png",
        width: 1200,
        height: 630,
        alt: "City Carpenter & Plumber Johannesburg - Granite Carpentry",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "City Carpenter & Plumber Johannesburg | Premium Kitchen Renovations & Professional Plumbing",
    description:
      "City carpenter & plumber services in Johannesburg CBD & Central. Premium kitchen renovations, built-in cupboards, granite installation & professional plumbing. Licensed & insured for city living.",
    images: ["https://granitecarpentry.co.za/og-image.png"],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/johannesburg",
  },
}

export default function JohannesburgPage() {
  const services = [
    {
      title: "Premium City Kitchen Renovations",
      description: "Luxury kitchen makeovers designed for Johannesburg's sophisticated urban lifestyle.",
      image: "/Kitchen-renovations-sandton.webp",
      href: "/services/kitchen-renovations",
      price: "From R65,000",
      duration: "10-18 days",
    },
    {
      title: "Executive Built-in Cupboards",
      description: "High-end custom wardrobes and storage solutions for Johannesburg's executive homes.",
      image: "/Built-Built-in-Cupboards-Midrand.jpg",
      href: "/services/built-in-cupboards",
      price: "From R22,000",
      duration: "5-10 days",
    },
    {
      title: "Premium Granite Installation",
      description: "Luxury granite and quartz installations that complement Johannesburg's upscale properties.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/quartz-granite",
      price: "From R12,000",
      duration: "4-7 days",
    },
    {
      title: "Professional City Plumbing Services",
      description: "Expert plumbing solutions for Johannesburg's commercial and residential properties.",
      image: "/professional-plumber-working.png",
      href: "/services/plumbing",
      price: "From R480/hour",
      duration: "Same day",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Building className="h-8 w-8 text-amber-600" />,
      title: "City Specialists",
      description: "Expert understanding of Johannesburg's urban environment and sophisticated property requirements",
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-600" />,
      title: "Premium Quality",
      description: "High-end materials and finishes that match Johannesburg's luxury property standards",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Executive Warranty",
      description: "Comprehensive warranty coverage designed for Johannesburg's premium properties",
    },
    {
      icon: <Droplets className="h-8 w-8 text-amber-600" />,
      title: "Professional Plumbing Expert",
      description: "Specialized in commercial and residential plumbing for Johannesburg's diverse properties",
    },
  ]

  const testimonials = [
    {
      name: "Michael Thompson",
      location: "Johannesburg CBD",
      rating: 5,
      text: "Outstanding premium kitchen renovation and professional plumbing upgrade for our city apartment. Exceptional quality that matches Johannesburg's high standards. Highly professional team.",
      service: "Premium Kitchen & Plumbing",
    },
    {
      name: "Sarah Nkomo",
      location: "Johannesburg Central",
      rating: 5,
      text: "Excellent executive built-in cupboards and emergency plumbing service that perfectly suit our urban lifestyle. Quality craftsmanship that stands out in the city.",
      service: "Executive Built-ins & Plumbing",
    },
    {
      name: "James van der Merwe",
      location: "Johannesburg East",
      rating: 5,
      text: "Premium granite installation and professional plumbing that transforms our city home. Perfect quality for Johannesburg's sophisticated market!",
      service: "Premium Granite & Plumbing",
    },
  ]

  const nearbyAreas = [
    "Johannesburg CBD",
    "Johannesburg Central",
    "Johannesburg East",
    "Johannesburg West",
    "Braamfontein",
    "Newtown",
    "Marshalltown",
    "Doornfontein",
    "Hillbrow",
    "Berea",
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
                  City Carpenter & Plumber Johannesburg
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  City Carpenter & <span className="text-amber-400">Professional Plumber</span>{" "}
                  <span className="block">Services in Johannesburg</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Transform your Johannesburg property with Gauteng's most trusted city carpentry, granite installation,
                  and professional plumbing experts. Premium kitchen renovations, executive built-in cupboards, luxury
                  stone installations, and expert plumbing solutions built for sophisticated city living since 2020.
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
                <span className="font-semibold">City Specialists</span>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">Premium Quality</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Get Premium Quote
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
                  <span>City Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Professional Plumbing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Executive Service</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/carpenter-johannesburg-installing-kitchen-cupboards.jpg"
                  alt="City Carpenter & Plumber Johannesburg - Premium Carpentry and Professional Plumbing Solutions"
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
                        <p className="font-semibold text-slate-900 text-sm sm:text-base">City Specialists</p>
                        <p className="text-xs sm:text-sm text-slate-600">Premium Quality</p>
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Johannesburg Premium Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Premium Carpentry & Plumbing Solutions for City Living
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              From luxury kitchens to professional plumbing systems, we deliver sophisticated craftsmanship with premium
              materials and expert installation throughout Johannesburg and the greater Gauteng area.
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
                    <Badge className="bg-green-600 text-white">Premium</Badge>
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Why Choose Us in Johannesburg</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Johannesburg's Leading City Carpentry & Plumbing Specialists
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              With specialized experience in Johannesburg's urban environment, we understand city living demands and
              deliver premium carpentry and professional plumbing solutions built for sophisticated properties.
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
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-4">Johannesburg Client Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our City Clients Say</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied Johannesburg clients have to say about our
              premium carpentry and professional plumbing services.
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
              Premium Carpentry & Plumbing Throughout Johannesburg & Gauteng
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We provide specialized city carpentry, granite installation, and professional plumbing services throughout
              Johannesburg and surrounding Gauteng areas with the same premium standards and executive quality.
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
            Ready for Premium Carpentry & Plumbing in Johannesburg?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your premium carpentry, granite installation, or professional plumbing
            project in Johannesburg. We're ready to deliver sophisticated solutions built for city living.
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
                Get Premium Quote
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
