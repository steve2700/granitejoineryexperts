import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Clock,
  Shield,
  Award,
  CheckCircle,
  Star,
  MapPin,
  Wrench,
  Droplets,
  Zap,
  Home,
  Building,
  AlertTriangle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Plumber Johannesburg 2026 | Emergency Plumbing Services | Licensed & Insured",
  description:
    "Expert plumber in Johannesburg offering 24/7 emergency plumbing services. Licensed, insured & 5-star rated. Kitchen, bathroom, geyser repairs & installations. Call 067 601 4490 for same-day service.",
  keywords:
    "plumber Johannesburg, emergency plumber Johannesburg, plumbing services Johannesburg, 24 hour plumber Johannesburg, bathroom plumber Johannesburg, kitchen plumber Johannesburg, geyser installation Johannesburg, plumber Sandton, plumber Randburg, plumber Pretoria",
  openGraph: {
    title: "Professional Plumber Johannesburg 2026 | Emergency Plumbing Services",
    description:
      "Expert plumber in Johannesburg offering 24/7 emergency plumbing services. Licensed, insured & 5-star rated.",
    url: "https://granitecarpentry.co.za/services/plumbing",
    siteName: "Granite Carpentry & Joinery Experts",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Plumber Johannesburg 2026 | Emergency Plumbing Services",
    description:
      "Expert plumber in Johannesburg offering 24/7 emergency plumbing services. Licensed, insured & 5-star rated.",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/services/plumbing",
  },
  other: {
    "geo.region": "ZA-GP",
    "geo.placename": "Johannesburg",
    "geo.position": "-26.2041;28.0473",
    ICBM: "-26.2041, 28.0473",
  },
}

export default function PlumbingPage() {
  const services = [
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Emergency Plumbing Repairs",
      description:
        "24/7 emergency plumbing services for burst pipes, blocked drains, and urgent repairs throughout Johannesburg.",
      features: ["Burst pipe repairs", "Blocked drain clearing", "Leak detection", "Emergency call-outs"],
      price: "From R350",
    },
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Bathroom Plumbing",
      description:
        "Complete bathroom plumbing installations and renovations including toilets, basins, showers, and bathtubs.",
      features: ["Toilet installations", "Basin & tap fitting", "Shower installations", "Bathtub plumbing"],
      price: "From R1,200",
    },
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Kitchen Plumbing",
      description:
        "Professional kitchen plumbing services including sink installations, dishwasher connections, and water filtration systems.",
      features: [
        "Kitchen sink installation",
        "Dishwasher connections",
        "Water filter systems",
        "Garbage disposal units",
      ],
      price: "From R800",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Geyser Services",
      description:
        "Geyser installations, repairs, and maintenance services with energy-efficient solutions and warranty coverage.",
      features: ["Geyser installations", "Geyser repairs", "Solar geyser systems", "Geyser maintenance"],
      price: "From R2,500",
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Pipe Installation & Repair",
      description:
        "Professional pipe installation and repair services using quality materials with long-term warranties.",
      features: [
        "New pipe installations",
        "Pipe repairs & replacements",
        "Water pressure optimization",
        "Pipe insulation",
      ],
      price: "From R450",
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-blue-600" />,
      title: "Drain Cleaning & Maintenance",
      description: "Professional drain cleaning and maintenance services to prevent blockages and ensure optimal flow.",
      features: ["High-pressure drain cleaning", "CCTV drain inspections", "Preventive maintenance", "Root removal"],
      price: "From R280",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Licensed & Insured",
      description:
        "Fully licensed plumbing contractor with comprehensive public liability insurance for your peace of mind.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "24/7 Emergency Service",
      description:
        "Round-the-clock emergency plumbing services available throughout Johannesburg and surrounding areas.",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: "5-Star Rated Service",
      description: "Consistently rated 5 stars by our clients with over 500+ successful plumbing projects completed.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
      title: "12-Month Warranty",
      description: "Comprehensive 12-month warranty on all plumbing work and 6-month warranty on parts and fittings.",
    },
  ]

  const serviceAreas = [
    { name: "Johannesburg South", href: "/areas/johannesburg-south" },
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Kempton Park", href: "/areas/kempton-park" },
    { name: "Roodepoort", href: "/areas/roodepoort" },
    { name: "Fourways", href: "/areas/fourways" },
    { name: "Edenvale", href: "/areas/edenvale" },
    { name: "Boksburg", href: "/areas/boksburg" },
    { name: "Alberton", href: "/areas/alberton" },
  ]

  const relatedServices = [
    { name: "Kitchen Renovations", href: "/services/kitchen-renovations" },
    { name: "Built-in Cupboards", href: "/services/built-in-cupboards" },
    { name: "Drywall & Ceilings", href: "/services/drywall-ceilings" },
    { name: "Carpentry Training", href: "/services/carpentry-training" },
  ]

  const faqs = [
    {
      question: "Do you offer 24/7 emergency plumbing services in Johannesburg?",
      answer:
        "Yes, we provide 24/7 emergency plumbing services throughout Johannesburg, Sandton, Randburg, Pretoria, and surrounding areas. Our emergency response team is available for urgent plumbing issues including burst pipes, severe leaks, blocked drains, and geyser failures. Call 067 601 4490 for immediate assistance.",
    },
    {
      question: "What areas do you cover for plumbing services?",
      answer:
        "We provide professional plumbing services throughout Greater Johannesburg including Sandton, Randburg, Roodepoort, Midrand, Centurion, Pretoria, Kempton Park, Boksburg, Edenvale, Alberton, Fourways, and surrounding areas. We offer free quotes and same-day service in most areas.",
    },
    {
      question: "Are your plumbers licensed and insured?",
      answer:
        "Yes, all our plumbers are fully licensed and certified. We carry comprehensive public liability insurance and all work is covered by our 12-month warranty. Our team has over 15 years of experience in residential and commercial plumbing throughout Johannesburg.",
    },
    {
      question: "How much do plumbing services cost in Johannesburg?",
      answer:
        "Our plumbing services start from R280 for basic drain cleaning, R350 for emergency repairs, R800 for kitchen plumbing, and R2,500 for geyser installations. We provide free quotes and transparent pricing with no hidden costs. Final pricing depends on the complexity and materials required.",
    },
    {
      question: "Do you provide warranties on plumbing work?",
      answer:
        "Yes, we provide a comprehensive 12-month warranty on all plumbing workmanship and a 6-month warranty on parts and fittings. This covers any defects in our work and gives you complete peace of mind. We also offer ongoing maintenance services to keep your plumbing systems in optimal condition.",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Plumbing Services Johannesburg",
    description:
      "Expert plumber in Johannesburg offering 24/7 emergency plumbing services, bathroom plumbing, kitchen plumbing, geyser installations, and pipe repairs.",
    provider: {
      "@type": "LocalBusiness",
      name: "Granite Carpentry & Joinery Experts",
      image: "https://granitecarpentry.co.za/og-image.png",
      telephone: "+27676014490",
      email: "info@granitecarpentry.co.za",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Johannesburg",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -26.2041,
        longitude: 28.0473,
      },
      url: "https://granitecarpentry.co.za",
      priceRange: "R280-R5000",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "47",
      },
    },
    areaServed: ["Johannesburg", "Sandton", "Randburg", "Pretoria", "Centurion", "Midrand"],
    serviceType: "Plumbing Services",
    offers: {
      "@type": "Offer",
      priceRange: "R280-R5000",
      availability: "https://schema.org/InStock",
    },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-slate-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-blue-600 transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">Professional Plumbing</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6">Professional Plumbing Services</Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Expert Plumber in <span className="text-blue-600">Johannesburg</span> - 24/7 Emergency Service
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Professional plumbing services throughout Johannesburg with 24/7 emergency response. Licensed, insured,
                and 5-star rated plumber offering kitchen plumbing, bathroom installations, geyser services, and
                emergency repairs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Get Free Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 bg-transparent"
                >
                  <Link href="tel:+27676014490">
                    <Clock className="mr-2 h-5 w-5" />
                    Emergency: 067 601 4490
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-slate-600">Emergency Service</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-slate-600">Month Warranty</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-slate-600">5.0 Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Comprehensive Plumbing Services in Johannesburg
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From emergency repairs to complete installations, our licensed plumbers provide professional plumbing
                services throughout Johannesburg with same-day service and transparent pricing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      {service.icon}
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="outline" className="text-blue-600 border-blue-200">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-slate-600 leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Choose Our Plumbing Services?</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                With over 15 years of experience and 500+ successful projects, we're Johannesburg's most trusted
                plumbing contractor for residential and commercial properties.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Plumbing Service Areas</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We provide professional plumbing services throughout Greater Johannesburg and Pretoria with free quotes
                and same-day emergency service available.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <Link
                  key={index}
                  href={area.href}
                  className="group p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 group-hover:text-blue-700 flex-shrink-0" />
                    <span className="font-medium text-slate-900 group-hover:text-blue-700 text-sm sm:text-base">
                      {area.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-600 mb-4">
                Don't see your area listed? We also service surrounding areas in Gauteng province.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact">Check Service Availability</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Get answers to common questions about our plumbing services, pricing, and service areas.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Related Services</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Complete your home improvement project with our other professional services.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group p-6 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-center"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 mb-2">{service.name}</h3>
                  <p className="text-sm text-slate-600 group-hover:text-blue-600">
                    Learn more about our {service.name.toLowerCase()} services
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need Emergency Plumbing Services?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Don't let plumbing problems disrupt your day. Our licensed plumbers are available 24/7 for emergency
              repairs throughout Johannesburg. Call now for immediate assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-6"
              >
                <Link href="tel:+27676014490">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 067 601 4490 Now
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 bg-transparent"
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>12-Month Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>Free Quotes</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
