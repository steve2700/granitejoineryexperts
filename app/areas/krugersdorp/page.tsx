import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, Star, CheckCircle, Clock, Shield, Award, MapPin, ArrowRight, Quote, Building2, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title:
    "Industrial Carpenter & Plumber Krugersdorp | Commercial Carpentry, Granite Installation & Industrial Plumbing | Granite Carpentry",
  description:
    "Industrial carpenter & plumber services in Krugersdorp. Commercial carpentry, kitchen renovations, built-in cupboards, granite installation & industrial plumbing. Licensed & insured for industrial projects. Call 067 601 4490 for free quote.",
  keywords:
    "carpenter Krugersdorp, industrial plumber Krugersdorp, commercial carpentry Krugersdorp, kitchen renovations Krugersdorp, built-in cupboards Krugersdorp, granite installation Krugersdorp, industrial plumbing Krugersdorp",
  openGraph: {
    title: "Industrial Carpenter & Plumber Krugersdorp | Commercial Carpentry & Granite Installation",
    description:
      "Industrial carpenter & plumber services in Krugersdorp. Commercial carpentry, kitchen renovations, built-in cupboards, granite installation & industrial plumbing. Licensed & insured for industrial projects.",
    url: "https://granitecarpentry.co.za/areas/krugersdorp",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/og-image.png",
        width: 1200,
        height: 630,
        alt: "Industrial Carpenter & Plumber Krugersdorp - Granite Carpentry",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Carpenter & Plumber Krugersdorp | Commercial Carpentry & Granite Installation",
    description:
      "Industrial carpenter & plumber services in Krugersdorp. Commercial carpentry, kitchen renovations, built-in cupboards, granite installation & industrial plumbing. Licensed & insured for industrial projects.",
    images: ["https://granitecarpentry.co.za/og-image.png"],
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/krugersdorp",
  },
}

export default function KrugersdorpPage() {
  const services = [
    {
      title: "Industrial Kitchen Renovations Krugersdorp",
      description: "Commercial-grade kitchen makeovers built for Krugersdorp's industrial and business community.",
      image: "/Kitchen-renovations-sandton.webp",
      href: "/services/kitchen-renovations",
      price: "From R55,000",
      duration: "9-17 days",
    },
    {
      title: "Commercial Built-in Cupboards Krugersdorp",
      description: "Industrial-strength custom wardrobes and storage solutions for Krugersdorp businesses and homes.",
      image: "/Built-Built-in-Cupboards-Midrand.jpg",
      href: "/services/built-in-cupboards",
      price: "From R18,000",
      duration: "5-9 days",
    },
    {
      title: "Industrial Granite Installation Krugersdorp",
      description: "Heavy-duty granite and quartz installations designed for Krugersdorp's industrial environment.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/quartz-granite",
      price: "From R10,000",
      duration: "3-7 days",
    },
    {
      title: "Commercial Decking & Flooring Krugersdorp",
      description: "Industrial-grade outdoor decking and flooring solutions for Krugersdorp's commercial properties.",
      image: "/beautiful-decking.jpg",
      href: "/services/decking-flooring",
      price: "From R15,000",
      duration: "5-11 days",
    },
    {
      title: "Industrial Plumbing Services Krugersdorp",
      description: "Commercial-grade plumbing services for Krugersdorp's industrial and business properties.",
      image: "/granite-installation-Johannesburg.jpg",
      href: "/services/plumbing",
      price: "From R410/hour",
      duration: "Industrial Service",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Building2 className="h-8 w-8 text-amber-600" />,
      title: "Industrial Specialists",
      description: "Deep expertise in Krugersdorp's industrial environment and commercial carpentry requirements",
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-600" />,
      title: "Commercial Grade",
      description: "Specialized in heavy-duty construction that meets industrial standards and commercial demands",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: "Industrial Warranty",
      description: "Extended warranty coverage designed for the demanding conditions of industrial environments",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "West Rand Leader",
      description: "Leading carpentry service throughout Krugersdorp and surrounding West Rand industrial areas",
    },
  ]

  const testimonials = [
    {
      name: "Pieter van der Merwe",
      location: "Krugersdorp Central",
      rating: 5,
      text: "Outstanding industrial kitchen renovation that handles our business demands perfectly. Built to commercial standards with excellent attention to detail.",
      service: "Industrial Kitchen",
    },
    {
      name: "Sarah Molefe",
      location: "Krugersdorp North",
      rating: 5,
      text: "Excellent commercial built-in cupboards that are built for heavy use. Quality workmanship that meets our industrial facility requirements perfectly.",
      service: "Commercial Built-ins",
    },
    {
      name: "Johan Steyn",
      location: "Krugersdorp West",
      rating: 5,
      text: "Heavy-duty granite installation that looks professional and handles our industrial kitchen demands. Perfect for our commercial property!",
      service: "Industrial Granite",
    },
  ]

  const nearbyAreas = [
    "Krugersdorp Central",
    "Krugersdorp North",
    "Krugersdorp West",
    "Krugersdorp South",
    "Munsieville",
    "Kagiso",
    "Randfontein",
    "Westonaria",
    "Carletonville",
    "Roodepoort",
  ]

  const faqs = [
    {
      question: "What carpentry services do you offer in Krugersdorp?",
      answer:
        "We provide comprehensive carpentry services throughout Krugersdorp including custom kitchen renovations, built-in cupboards, granite and quartz countertop installations, outdoor decking, indoor flooring, and commercial carpentry for industrial properties. Our Krugersdorp team specializes in both residential and commercial-grade projects designed for the West Rand's unique industrial environment.",
    },
    {
      question: "How much does a kitchen renovation cost in Krugersdorp?",
      answer:
        "Kitchen renovation costs in Krugersdorp typically range from R55,000 for basic renovations to R150,000+ for comprehensive luxury makeovers. Factors affecting cost include kitchen size, material selection (granite vs Caesarstone), cabinet complexity, appliance integration, and plumbing requirements. We provide detailed free quotes specific to your Krugersdorp project.",
    },
    {
      question: "Do you serve industrial and commercial properties in Krugersdorp?",
      answer:
        "Yes, we specialize in industrial and commercial carpentry throughout Krugersdorp. Our team has extensive experience with commercial-grade installations, industrial kitchens, factory storage solutions, office built-ins, and heavy-duty granite surfaces that meet the demands of Krugersdorp's industrial sector.",
    },
    {
      question: "What areas around Krugersdorp do you cover?",
      answer:
        "We proudly serve all Krugersdorp suburbs including Krugersdorp Central, Monument, Mindalore, Silverfields, Kenmare, Noordheuwel, Wilro Park, Kagiso, and Munsieville. We also cover surrounding West Rand areas including Randfontein, Westonaria, Carletonville, and Roodepoort with the same commercial-grade expertise.",
    },
    {
      question: "How long does a built-in cupboard installation take in Krugersdorp?",
      answer:
        "Built-in cupboard installations in Krugersdorp typically take 5-9 days depending on project complexity. Simple bedroom wardrobes may be completed in 3-5 days, while extensive walk-in closets and multi-room storage solutions can take 7-12 days. We provide accurate timelines during our free consultation and maintain flexible scheduling to minimize disruption.",
    },
    {
      question: "What granite and stone materials do you use?",
      answer:
        "We exclusively use premium materials including Caesarstone, Silestone, natural granite, marble, and engineered quartz. All stone is sourced from trusted suppliers and backed by manufacturer warranties. Our Krugersdorp team helps you select the perfect material based on durability requirements, aesthetics, and budget considerations for your industrial or residential project.",
    },
    {
      question: "Do you offer emergency plumbing services in Krugersdorp?",
      answer:
        "Yes, we provide 24/7 emergency plumbing services throughout Krugersdorp and the West Rand. Burst pipes, major leaks, geyser failures, and urgent drainage issues are handled promptly by our licensed plumbers. Industrial and commercial emergency call-outs are prioritized. Call 067 601 4490 for immediate assistance.",
    },
    {
      question: "Are you licensed and insured for industrial work in Krugersdorp?",
      answer:
        "Absolutely. We hold full trade licenses for carpentry and plumbing, with specialized certification for industrial and commercial projects. We carry R2 million public liability insurance covering all Krugersdorp projects. All work is backed by our comprehensive 5-year warranty, ensuring complete peace of mind for your industrial investment.",
    },
    {
      question: "What makes you the best choice for Krugersdorp projects?",
      answer:
        "We combine 15+ years of West Rand experience, industrial-grade expertise, 600+ completed projects, premium materials only, commercial certifications, extended warranty coverage, and deep understanding of Krugersdorp's industrial environment. Our team delivers exceptional craftsmanship that meets the demanding standards of industrial and commercial applications.",
    },
    {
      question: "Can you handle large commercial projects in Krugersdorp?",
      answer:
        "Yes, we specialize in large-scale commercial and industrial projects throughout Krugersdorp. From factory kitchens to office renovations, warehouse storage solutions to commercial plumbing installations, our team has the expertise, equipment, and capacity to deliver professional results on schedule and within budget for industrial clients.",
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
                  Industrial Carpenter & Plumber Krugersdorp
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  Industrial Carpenter & <span className="text-amber-400">Commercial</span>{" "}
                  <span className="block">Carpentry in Krugersdorp</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  Transform your Krugersdorp property with the West Rand's most trusted industrial carpentry and granite
                  installation experts. Commercial-grade kitchen renovations, built-in cupboards, and stone
                  installations built for industrial demands since 2020.
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
                <span className="font-semibold">Industrial Specialists</span>
                <Separator orientation="vertical" className="h-6 bg-slate-600 hidden sm:block" />
                <span className="font-semibold">Commercial Grade</span>
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
                  <span>Commercial Grade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Business Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
                  <span>Industrial Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/granite-installation-sandton.jpg"
                  alt="Industrial Carpenter Krugersdorp - Commercial Carpentry and Built-in Solutions"
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
                      <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Krugersdorp Industrial Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Commercial Carpentry Solutions for Industrial Krugersdorp
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              From industrial-strength kitchens to commercial built-ins, we deliver robust craftsmanship with premium
              materials and professional installation throughout Krugersdorp and the West Rand industrial areas.
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
            <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Why Choose Us in Krugersdorp</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Krugersdorp's Leading Industrial Carpentry Specialists
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              With specialized experience in Krugersdorp's industrial environment and commercial demands, we deliver
              carpentry solutions that meet the highest standards for business and industrial applications.
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

      {/* Service Details Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Krugersdorp Service Excellence</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Comprehensive Carpentry Solutions for Industrial Krugersdorp
              </h2>
              <p className="text-lg text-slate-600">
                Serving Krugersdorp since 2020 with specialized industrial carpentry, commercial-grade granite installations, and professional plumbing services designed for the West Rand's unique business environment.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Industrial Kitchen Renovations in Krugersdorp</h3>
                <p className="text-slate-600 mb-4">
                  Transform your Krugersdorp industrial or commercial kitchen with our specialized renovation services. We understand the demanding requirements of West Rand businesses and deliver commercial-grade solutions built to withstand heavy use while maintaining professional aesthetics.
                </p>
                <p className="text-slate-600 mb-4">
                  Our Krugersdorp kitchen renovation services include custom commercial cabinetry with reinforced construction, heavy-duty granite and Caesarstone countertops rated for industrial use, professional-grade plumbing installations, industrial lighting and electrical integration, and specialized ventilation systems for commercial kitchens.
                </p>
                <p className="text-slate-600">
                  Popular areas in Krugersdorp we serve include Monument industrial area, Silverfields business district, Mindalore commercial zone, and Kenmare industrial park. Every kitchen renovation is backed by our extended industrial warranty and meets all commercial building standards for the West Rand region.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Commercial Built-in Cupboards Throughout Krugersdorp</h3>
                <p className="text-slate-600 mb-4">
                  Maximize your Krugersdorp business space with our industrial-strength built-in storage solutions. From factory tool storage to office filing systems, retail display units to warehouse organization, we design and install commercial-grade cupboards that deliver functionality and durability for West Rand businesses.
                </p>
                <p className="text-slate-600 mb-4">
                  Our built-in solutions feature heavy-duty construction materials rated for industrial environments, commercial-grade hardware and locking systems, customized designs for specialized storage needs, fire-resistant materials where required, and professional powder-coated finishes that resist industrial wear and tear.
                </p>
                <p className="text-slate-600">
                  Whether you're in Krugersdorp Central, Noordheuwel, Wilro Park, or any other West Rand location, our team delivers storage solutions that meet your specific industrial requirements. We work with factories, warehouses, offices, and retail spaces throughout the Krugersdorp industrial corridor.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Heavy-Duty Granite Installations in Krugersdorp</h3>
                <p className="text-slate-600 mb-4">
                  Our Krugersdorp granite and stone installation services deliver industrial-strength surfaces designed for commercial kitchens, factory workspaces, and high-traffic business environments. We exclusively use premium materials that withstand the demanding conditions of West Rand industrial operations.
                </p>
                <p className="text-slate-600 mb-4">
                  Stone options include commercial-grade granite with sealed surfaces resistant to chemicals and heat, Caesarstone engineered quartz rated for industrial kitchens, Silestone antibacterial surfaces for food preparation areas, and custom edge profiles designed for safety in industrial settings. All installations include professional templating, precise cutting, and expert fitting backed by manufacturer warranties.
                </p>
                <p className="text-slate-600">
                  Krugersdorp businesses choose us for workbenches, industrial kitchen counters, laboratory surfaces, retail countertops, and reception desks. Our team understands the unique requirements of West Rand commercial properties and delivers surfaces that combine functionality with professional aesthetics.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Commercial Plumbing Services for Krugersdorp Businesses</h3>
                <p className="text-slate-600 mb-4">
                  Keep your Krugersdorp business running smoothly with our professional commercial plumbing services. From routine maintenance to emergency repairs, industrial installations to system upgrades, our licensed plumbers deliver reliable solutions for West Rand commercial and industrial properties.
                </p>
                <p className="text-slate-600 mb-4">
                  Services include industrial bathroom installations, commercial kitchen plumbing systems, factory drainage solutions, high-capacity geyser installations, water filtration for industrial use, backflow prevention systems, and 24/7 emergency repair services. All work complies with Johannesburg building regulations and SANS plumbing standards.
                </p>
                <p className="text-slate-600">
                  Our Krugersdorp plumbing team responds quickly to emergencies in all industrial areas including Kagiso, Munsieville, and throughout the West Rand corridor. We understand that plumbing downtime costs businesses money, which is why we prioritize rapid response and efficient solutions for commercial clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-amber-600 text-white px-4 py-2 mb-4">Krugersdorp Client Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Our Industrial Clients Say</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied Krugersdorp clients have to say about our
              industrial carpentry and commercial installation services.
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
              Industrial Carpentry Throughout Krugersdorp & West Rand
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We provide specialized industrial carpentry and granite installation services throughout Krugersdorp and
              surrounding West Rand areas with the same commercial-grade expertise and quality craftsmanship.
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

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-4">Krugersdorp FAQs</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Frequently Asked Questions - Krugersdorp Carpentry & Plumbing
              </h2>
              <p className="text-lg text-slate-600">
                Get answers to common questions about our industrial carpentry, commercial built-ins, granite installations, and plumbing services in Krugersdorp and the West Rand.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-amber-50 rounded-lg p-6 border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Still Have Questions?</h3>
              <p className="text-slate-600 mb-4">
                Our Krugersdorp team is ready to answer your questions about industrial carpentry, commercial plumbing, or any West Rand renovation project. Contact us for personalized advice and free detailed quotes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Request Free Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:+27676014490">Call 067 601 4490</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready for Industrial Carpentry in Krugersdorp?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your commercial carpentry or granite installation project in
            Krugersdorp. We're ready to deliver industrial-strength solutions built for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-amber-600 hover:bg-slate-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get Industrial Quote
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
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
