import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, Star, CheckCircle, Clock, Shield, Award, Users, MapPin, ArrowRight, Quote } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Kitchen Renovations",
      description:
        "Transform your kitchen with custom cabinetry, premium granite countertops, and modern appliances. Expert Johannesburg kitchen remodeling specialists delivering stunning results.",
      image: "/Kitchen-renovations-sandton.webp",
      href: "/kitchen-renovations",
      price: "From R50,000",
      duration: "7-14 days",
      linkText: "Explore Kitchen Renovations",
    },
    {
      title: "Kitchen Cupboards", // Added kitchen cupboards service card
      description:
        "Custom kitchen cabinetry with premium finishes. Shaker, modern, and contemporary designs with soft-close mechanisms and durable materials for lasting quality.",
      image: "/Kitchen-renovations-sandton.webp",
      href: "/kitchen-cupboards",
      price: "From R35,000",
      duration: "5-10 days",
      linkText: "View Kitchen Cupboard Designs",
    },
    {
      title: "Bathroom Renovations", // Added bathroom renovations service card
      description:
        "Complete bathroom makeovers with modern fixtures, tiling, waterproofing, and plumbing. Contemporary, classic, and luxury designs for Johannesburg homes.",
      image: "/professional-plumber-working.png",
      href: "/bathroom-renovations",
      price: "From R45,000",
      duration: "7-14 days",
      linkText: "Explore Bathroom Renovations",
    },
    {
      title: "Built-in Cupboards",
      description:
        "Bespoke wardrobes, study units, and custom storage solutions maximizing your space. Premium carpentry craftsmanship for Gauteng homes and offices.",
      image: "/Built-Built-in-Cupboards-Midrand.jpg",
      href: "/built-in-cupboards",
      price: "From R15,000",
      duration: "3-7 days",
      linkText: "View Built-in Cupboard Options",
    },
    {
      title: "Granite & Quartz",
      description:
        "Luxury stone countertops and surfaces with precision installation. Imported and local granite, quartz, and marble for kitchens, bathrooms, and commercial spaces.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/quartz-granite",
      price: "From R8,000",
      duration: "2-5 days",
      linkText: "Discover Granite & Quartz Services",
    },
    {
      title: "Granite Countertops",
      description:
        "Premium natural granite countertops with unique patterns. Heat-resistant, scratch-resistant, and luxurious stone surfaces for kitchens and bathrooms.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/granite-countertops",
      price: "From R1,200/m²",
      duration: "1-2 weeks",
      linkText: "View Granite Options",
    },
    {
      title: "Quartz Countertops",
      description:
        "Engineered quartz surfaces with consistent patterns. Non-porous, stain-resistant, and low-maintenance countertops from Caesarstone, Silestone, and Compac.",
      image: "/granite-installation-sandton.jpg",
      href: "/quartz-countertops",
      price: "From R3,500/m²",
      duration: "1-2 weeks",
      linkText: "Explore Quartz Designs",
    },
    {
      title: "Professional Plumbing",
      description:
        "24/7 emergency plumbing, bathroom installations, geyser repairs, and leak detection. Licensed plumbers serving all of Johannesburg and Gauteng.",
      image: "/professional-plumber-working.png",
      href: "/plumbing",
      price: "From R280",
      duration: "Same day",
      linkText: "Get Plumbing Services",
    },
    {
      title: "Decking & Flooring",
      description:
        "Premium outdoor wooden decking and indoor flooring solutions. Durable materials, expert installation, and weather-resistant treatments for Johannesburg climate.",
      image: "/beautiful-decking.jpg",
      href: "/decking-flooring",
      price: "From R12,000",
      duration: "3-8 days",
      linkText: "See Decking & Flooring Work",
    },
    {
      title: "Drywall & Ceilings",
      description:
        "Expert drywall installation, ceiling repairs, and suspended ceiling systems. Commercial and residential solutions with quality finishing throughout Gauteng.",
      image: "/drywall-contractor.jpg",
      href: "/drywall-ceilings",
      price: "From R6,000",
      duration: "2-6 days",
      linkText: "Learn About Drywall Services",
    },
    {
      title: "Door Installation",
      description:
        "Professional door installation including luxury pivot doors, barn doors, security doors, and French doors. Modern and traditional designs for homes and businesses.",
      image: "/modern-door-installation.jpg",
      href: "/door-installation",
      price: "From R4,500",
      duration: "1-3 days",
      linkText: "Explore Door Services",
    },
    {
      title: "Granite Supply & Installation",
      description:
        "Complete granite supply and installation services. Premium imported and local granite slabs, expert fabrication, and professional installation throughout Gauteng.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/granite-supply-and-installation",
      price: "From R900/m²",
      duration: "10-14 days",
      linkText: "View Supply & Installation",
    },
    {
      title: "Granite Installers Sandton",
      description:
        "Expert granite installation in Sandton. Precision templating, professional fabrication, and flawless installation for residential and commercial projects.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/granite-installers-sandton",
      price: "From R1,200/m²",
      duration: "1-2 weeks",
      linkText: "Sandton Installation Services",
    },
  ]

  const areas = [
    { name: "Johannesburg South", href: "/areas/johannesburg-south" },
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Kempton Park", href: "/areas/kempton-park" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Fourways", href: "/areas/fourways" },
    { name: "Boksburg", href: "/areas/boksburg" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Alberton", href: "/areas/alberton" },
    { name: "Edenvale", href: "/areas/edenvale" },
    { name: "Roodepoort", href: "/areas/roodepoort" },
    { name: "Benoni", href: "/areas/benoni" },
    { name: "Germiston", href: "/areas/germiston" },
    { name: "Springs", href: "/areas/springs" },
    { name: "Vanderbijlpark", href: "/areas/vanderbijlpark" },
    { name: "Vereeniging", href: "/areas/vereeniging" },
    { name: "Nigel", href: "/areas/nigel" },
    { name: "Heidelberg", href: "/areas/heidelberg" },
    { name: "Carletonville", href: "/areas/carletonville" },
    { name: "Krugersdorp", href: "/areas/krugersdorp" },
    { name: "Westonaria", href: "/areas/westonaria" },
    { name: "Bedfordview", href: "/areas/bedfordview" },
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Sandton",
      rating: 5,
      text: "Absolutely exceptional work! Our kitchen renovation exceeded all expectations. The Granite Carpentry team was professional, punctual, and delivered exactly what they promised. The granite countertops are stunning and installation was flawless.",
      service: "Kitchen Renovation",
    },
    {
      name: "David Thompson",
      location: "Randburg",
      rating: 5,
      text: "The built-in cupboards transformed our bedroom completely. Quality craftsmanship and attention to detail was outstanding. They maximized our storage space beautifully. Highly recommended for custom carpentry work!",
      service: "Built-in Cupboards",
    },
    {
      name: "Lisa Chen",
      location: "Midrand",
      rating: 5,
      text: "Professional granite installation with perfect finishing. The team was courteous, cleaned up after themselves, and the result is stunning. Our kitchen looks like a showroom now. Worth every penny!",
      service: "Granite Installation",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "5-Star Rated Service",
      description:
        "Consistently rated 5 stars across Google Reviews with 47+ successful projects completed in 2025-2026",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "24-Month Warranty",
      description:
        "Industry-leading 24-month warranty on all workmanship and 12-month guarantee on materials and installations",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Licensed & Insured",
      description:
        "Fully licensed carpentry and plumbing business with comprehensive public liability insurance coverage",
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      title: "On-Time Delivery",
      description: "We complete 98% of projects on schedule with transparent timelines and regular progress updates",
    },
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
                  Johannesburg's #1 Rated Carpenter, Plumber & Granite Installer 2025
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  Expert Carpentry, Plumbing &{" "}
                  <span className="text-amber-400 block sm:inline">Granite Installation</span>{" "}
                  <span className="block">Services Johannesburg</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Transform your property with Johannesburg's most trusted home improvement specialists. From luxury
                  kitchen renovations and custom built-in cupboards to 24/7 emergency plumbing and premium granite
                  installations - we deliver exceptional craftsmanship backed by 5-star reviews and a 24-month warranty
                  guarantee across all Gauteng areas.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 items-center text-sm sm:text-base">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 fill-current" />
                  ))}
                  <span className="ml-2 font-semibold">5.0 Google Rating</span>
                </div>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">50+ Projects (2025-2026)</span>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">24/7 Emergency Response</span>
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
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Licensed & Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Free In-Home Consultations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Instant WhatsApp Quotes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>24-Month Workmanship Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/granitecarpentry.webp"
                  alt="Professional Carpenter, Plumber & Granite Installation Johannesburg"
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
                        <p className="font-semibold text-slate-900 text-sm sm:text-base">Quick Response</p>
                        <p className="text-xs sm:text-sm text-slate-600">Call 067 601 4490</p>
                      </div>
                      <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Our Premium Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Complete Home Improvement & Renovation Solutions Across Gauteng
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              From luxury kitchen makeovers to emergency plumbing repairs - we deliver world-class craftsmanship with
              premium materials, expert installation, and unmatched customer service throughout Johannesburg, Pretoria,
              and surrounding areas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                      {service.linkText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Drywall location services section */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Professional Drywall Installation & Ceiling Repair Services by Location
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Expert drywall contractors and ceiling specialists serving all major Johannesburg suburbs - same-day
                quotes, quality workmanship, and guaranteed results
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Drywall Sandton</h4>
                  <p className="text-slate-600 mb-4">
                    Premium drywall installation services in Sandton's residential and commercial properties.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/drywall-sandton">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Ceiling Repairs Randburg</h4>
                  <p className="text-slate-600 mb-4">
                    Expert ceiling repair and restoration services throughout Randburg area.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ceiling-repairs-randburg">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Drywall Rosebank</h4>
                  <p className="text-slate-600 mb-4">
                    Professional drywall solutions for Rosebank's modern homes and offices.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/drywall-rosebank">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Suspended Ceilings Johannesburg</h4>
                  <p className="text-slate-600 mb-4">
                    Commercial suspended ceiling systems for Johannesburg businesses.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/suspended-ceilings-johannesburg">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Drywalling Contractors Johannesburg</h4>
                  <p className="text-slate-600 mb-4">Licensed drywalling contractors serving all of Johannesburg.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/drywalling-contractors-johannesburg">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Drywall Fourways</h4>
                  <p className="text-slate-600 mb-4">
                    Expert drywall installation for Fourways residential and commercial properties.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/drywall-fourways">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Ceiling Repairs Sandton</h4>
                  <p className="text-slate-600 mb-4">
                    Professional ceiling repair services for Sandton homes and offices.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ceiling-repairs-sandton">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Drywall Midrand</h4>
                  <p className="text-slate-600 mb-4">Quality drywall installation services throughout Midrand area.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/drywall-midrand">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Ceiling Repairs Vereeniging</h4>
                  <p className="text-slate-600 mb-4">Emergency ceiling repair services available in Vereeniging.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ceiling-repairs-vereeniging">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Drywall Johannesburg South</h4>
                  <p className="text-slate-600 mb-4">Professional drywalling for all Johannesburg South communities.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/drywall-johannesburg-south">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Drywall Bryanston</h4>
                  <p className="text-slate-600 mb-4">
                    Premium drywall installation for Bryanston's luxury homes and estates.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/drywall-bryanston">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Suspended Ceilings Sandton</h4>
                  <p className="text-slate-600 mb-4">
                    Commercial suspended ceiling systems for Sandton business district.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/suspended-ceilings-sandton">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Drywall Centurion</h4>
                  <p className="text-slate-600 mb-4">
                    Expert drywall installation for Centurion residential and commercial properties.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/drywall-centurion">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Ceiling Repairs Pretoria</h4>
                  <p className="text-slate-600 mb-4">Professional ceiling repair services throughout Pretoria area.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ceiling-repairs-pretoria">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Drywall Edenvale</h4>
                  <p className="text-slate-600 mb-4">
                    Quality drywall installation services for Edenvale homes and businesses.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/drywall-edenvale">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Ceiling Installation Bryanston</h4>
                  <p className="text-slate-600 mb-4">Professional ceiling installation for Bryanston properties.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ceiling-installation-bryanston">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Drywall Pretoria</h4>
                  <p className="text-slate-600 mb-4">
                    Expert drywall solutions for Pretoria residential and commercial spaces.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/drywall-pretoria">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Ceiling Repairs Centurion</h4>
                  <p className="text-slate-600 mb-4">Emergency ceiling repair services available in Centurion.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ceiling-repairs-centurion">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Drywall Boksburg</h4>
                  <p className="text-slate-600 mb-4">
                    Professional drywall installation for Boksburg homes and businesses.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/drywall-boksburg">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Ceiling Installation Edenvale</h4>
                  <p className="text-slate-600 mb-4">Expert ceiling installation services throughout Edenvale area.</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/ceiling-installation-edenvale">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-slate-200">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Expert Door Installation Services - Pivot, Barn, Security & French Doors
              </h3>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
                Premium door installation specialists for residential and commercial properties across Gauteng - modern
                designs, security solutions, and architectural statement pieces installed with precision
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Pivot Doors</h4>
                  <p className="text-slate-600 mb-4">
                    Modern pivot door installation for contemporary homes - architectural statement pieces.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/pivot-doors">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Barn Doors</h4>
                  <p className="text-slate-600 mb-4">
                    Rustic and modern barn door installations - space-saving sliding door solutions.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/barn-doors">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Security Doors</h4>
                  <p className="text-slate-600 mb-4">
                    High-security door installation - protection without compromising style.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/security-doors">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">French Doors</h4>
                  <p className="text-slate-600 mb-4">
                    Elegant French door installation - bringing natural light and elegance to your space.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/french-doors">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Wooden Doors</h4>
                  <p className="text-slate-600 mb-4">
                    Custom solid wood door installation - timeless craftsmanship and durability.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/wooden-doors">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Pivot Doors Sandton</h4>
                  <p className="text-slate-600 mb-4">
                    Premium pivot door installation services for Sandton's luxury homes and estates.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/pivot-doors-sandton">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Barn Doors Cape Town</h4>
                  <p className="text-slate-600 mb-4">
                    Stylish barn door installations for Cape Town homes - modern and rustic designs.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/barn-doors-cape-town">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Security Doors Johannesburg</h4>
                  <p className="text-slate-600 mb-4">
                    Professional security door installation throughout Johannesburg area.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/security-doors-johannesburg">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Solid Wood Doors Pretoria</h4>
                  <p className="text-slate-600 mb-4">
                    Expert solid wood door installation for Pretoria homes - premium craftsmanship.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/solid-wood-doors-pretoria">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">French Doors Sandton</h4>
                  <p className="text-slate-600 mb-4">
                    Luxury French door installation for Sandton properties - elegance and light.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/french-doors-sandton">
                      View Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Door Installation Hub</h4>
                  <p className="text-slate-600 mb-4">
                    Complete door installation services - browse all door types and locations.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/door-installation">
                      View All Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Why Choose Granite Carpentry</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Gauteng's Most Trusted Home Service Experts Since 2020
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              With 50+ successfully completed projects in 2025-2026 and a flawless 5.0-star Google rating, we're the
              preferred choice for discerning homeowners and businesses across Johannesburg, Sandton, Pretoria, and
              Gauteng for carpentry, plumbing, and professional installations.
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

      {/* Areas Served Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Service Coverage Areas</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Serving 23+ Areas Across Greater Johannesburg, Pretoria & Gauteng Province
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Professional carpentry, plumbing, granite installation, and door services available throughout Gauteng.
              Same-day quotes and rapid response times for emergency services in all serviced areas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="group p-4 rounded-lg border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600 group-hover:text-amber-700 flex-shrink-0" />
                  <span className="font-medium text-slate-900 group-hover:text-amber-700 text-sm sm:text-base">
                    {area.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/areas">
                View All 23 Service Areas in Gauteng
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-4">5-Star Client Reviews</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Real Reviews from Satisfied Clients Across Gauteng</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it - read verified testimonials from homeowners and businesses who've
              experienced our exceptional carpentry, plumbing, and installation services first-hand.
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Home or Business?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get your FREE no-obligation consultation and detailed quote today. Our experts are ready to discuss your
            carpentry, plumbing, granite installation, or door installation project. Available 24/7 for emergency
            services throughout Johannesburg and Gauteng.
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
                Get Your Free Quote Now
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-amber-600 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
            >
              <Link href="tel:+27676014490">Call 067 601 4490 (24/7)</Link>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Free In-Home Consultations</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Instant WhatsApp Quotes</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>24/7 Emergency Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Licensed, Insured & Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
