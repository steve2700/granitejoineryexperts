import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, Star, CheckCircle, Clock, Shield, Award, Users, MapPin, ArrowRight, Quote, Hammer } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Professional Carpenter & Plumber Benoni | Kitchen Renovations, Built-in Cupboards & Emergency Plumbing | Granite Carpentry",
  description:
    "Professional carpenter & plumber services in Benoni. Kitchen renovations, built-in cupboards, granite installation & emergency plumbing. Licensed & insured with 24-month warranty. Call 067 601 4490 for free quote.",
  keywords:
    "carpenter Benoni, plumber Benoni, kitchen renovations Benoni, built-in cupboards Benoni, granite installation Benoni, emergency plumbing Benoni, professional carpenter East Rand, carpentry services Benoni, plumbing services Benoni",
  openGraph: {
    title: "Professional Carpenter & Plumber Benoni | Kitchen Renovations & Built-in Cupboards",
    description:
      "Professional carpenter & plumber services in Benoni. Kitchen renovations, built-in cupboards, granite installation & emergency plumbing. Licensed & insured with 24-month warranty.",
    url: "https://granitecarpentry.co.za/areas/benoni",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/og-image.png",
        width: 1200,
        height: 630,
        alt: "Professional Carpenter & Plumber Benoni - Granite Carpentry",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Carpenter & Plumber Benoni | Kitchen Renovations & Built-in Cupboards",
    description:
      "Professional carpenter & plumber services in Benoni. Kitchen renovations, built-in cupboards, granite installation & emergency plumbing. Licensed & insured with 24-month warranty.",
    images: ["https://granitecarpentry.co.za/og-image.png"],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/benoni",
  },
}

export default function BenoniBenoniPage() {
  const services = [
    {
      title: "Kitchen Renovations Benoni",
      description:
        "Complete kitchen makeovers with custom cabinets, granite countertops, and modern appliances for Benoni homes.",
      image: "/Kitchen-renovations-sandton.webp",
      href: "/services/kitchen-renovations",
      price: "From R50,000",
      duration: "7-14 days",
    },
    {
      title: "Built-in Cupboards Benoni",
      description: "Custom wardrobes, study units, and storage solutions designed specifically for Benoni properties.",
      image: "/Built-Built-in-Cupboards-Midrand.jpg",
      href: "/services/built-in-cupboards",
      price: "From R15,000",
      duration: "3-7 days",
    },
    {
      title: "Granite Installation Benoni",
      description: "Premium granite and quartz countertops with professional installation throughout Benoni.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/quartz-granite",
      price: "From R8,000",
      duration: "2-5 days",
    },
    {
      title: "Decking & Flooring Benoni",
      description: "Beautiful outdoor decking and indoor flooring solutions for Benoni homes.",
      image: "/beautiful-decking.jpg",
      href: "/services/decking-flooring",
      price: "From R12,000",
      duration: "3-8 days",
    },
    {
      title: "Professional Plumbing Benoni",
      description: "Expert plumbing services for Benoni homes and businesses with emergency repairs and installations.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/plumbing",
      price: "From R360/hour",
      duration: "Same Day",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "East Rand Specialists",
      description: "Deep understanding of Benoni's architectural styles and local building requirements",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "24-Month Warranty",
      description: "Comprehensive warranty on all workmanship with local Benoni support",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Licensed & Insured",
      description: "Fully licensed carpentry business with public liability insurance covering Benoni",
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      title: "Fast Response Times",
      description: "Quick response times for Benoni residents with same-day quotes available",
    },
  ]

  const testimonials = [
    {
      name: "Michael van der Merwe",
      location: "Benoni Central",
      rating: 5,
      text: "Outstanding kitchen renovation! The team understood exactly what we wanted and delivered beyond expectations. Professional service from start to finish.",
      service: "Kitchen Renovation",
    },
    {
      name: "Sarah Nkomo",
      location: "Northmead, Benoni",
      rating: 5,
      text: "Beautiful built-in cupboards that maximized our bedroom space perfectly. Quality workmanship and attention to detail was exceptional.",
      service: "Built-in Cupboards",
    },
    {
      name: "James Mitchell",
      location: "Benoni Country Club",
      rating: 5,
      text: "Professional granite installation with perfect finishing. The team was punctual, clean, and the result is absolutely stunning.",
      service: "Granite Installation",
    },
  ]

  const nearbyAreas = [
    "Benoni Central",
    "Northmead",
    "Benoni Country Club",
    "Actonville",
    "Wattville",
    "Daveyton",
    "Etwatwa",
    "Boksburg",
    "Springs",
    "Kempton Park",
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
                  Professional Carpenter & Plumber Benoni
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  Professional Carpenter & <span className="text-amber-400">Granite Installation</span>{" "}
                  <span className="block">Services in Benoni</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Transform your Benoni home with the East Rand's most trusted carpentry and granite installation
                  experts. Specializing in kitchen renovations, built-in cupboards, and premium stone installations with
                  5-star service since 2020.
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
                <span className="font-semibold">50+ Benoni Projects</span>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">East Rand Specialists</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Get Free Quote
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
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Free Benoni Consultations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Same-Day Quotes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>24-Month Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/professional-carpenter-midrand.jpeg"
                  alt="Professional Carpenter Benoni - Kitchen Renovations and Built-in Cupboards"
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
                        <p className="font-semibold text-slate-900 text-sm sm:text-base">Benoni Specialists</p>
                        <p className="text-xs sm:text-sm text-slate-600">East Rand Experts</p>
                      </div>
                      <Hammer className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Benoni Carpentry Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Complete Carpentry Solutions for Benoni Homes
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              From kitchen renovations to custom built-ins, we deliver exceptional craftsmanship with premium materials
              and professional installation throughout Benoni and the East Rand.
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Why Choose Us in Benoni</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Benoni's Most Trusted Professional Carpentry Experts
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              With extensive experience in Benoni and the East Rand, we understand local architectural styles and
              deliver professional carpentry services that exceed expectations.
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
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-4">Benoni Client Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Benoni Clients Say</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied Benoni clients have to say about our
              professional carpentry and installation services.
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
              Professional Carpentry Throughout Benoni & East Rand
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We provide professional carpentry and granite installation services throughout Benoni and surrounding East
              Rand areas with the same high standards and quality.
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Benoni Home?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your carpentry or granite installation project in Benoni. We're ready
            to bring your vision to life with professional craftsmanship.
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
                Get Free Quote
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
