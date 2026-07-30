import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Star, Award, Building2, MapPin, Clock, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Best Carpenter & Plumber Centurion 2026 | Kitchen Renovations, Built-in Cupboards & Modern Plumbing | Free Quotes",
  description:
    "★★★★★ #1 Rated Carpenter & Plumber in Centurion. Expert kitchen renovations, modern built-in cupboards, granite installation & smart plumbing systems. Serving Irene, Highveld, Lyttelton. Licensed & insured. Free quotes. Call 067 601 4490",
  keywords:
    "carpenter Centurion, plumber Centurion, kitchen renovation Centurion, built-in cupboards Centurion, granite installation Centurion, modern plumbing Centurion, carpenter Irene, carpenter Highveld, kitchen cabinets Centurion, best carpenter Centurion, affordable carpenter Centurion, Centurion kitchen contractor, granite Centurion, cupboards Centurion, smart plumbing Centurion",
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/centurion",
  },
  openGraph: {
    title: "Best Carpenter & Plumber Centurion 2026 | Kitchen Renovations & Built-in Cupboards",
    description:
      "★★★★★ #1 Rated Carpenter & Plumber in Centurion. Expert kitchen renovations, granite installation & smart plumbing systems. Free quotes. Call 067 601 4490",
    url: "https://granitecarpentry.co.za/areas/centurion",
    images: [
      {
        url: "https://granitecarpentry.co.za/carpenter-johannesburg-installing-kitchen-cupboards.jpg",
        width: 1200,
        height: 630,
        alt: "Best Carpenter & Plumber Centurion - Kitchen Renovation & Built-in Cupboards",
      },
    ],
  },
}

export default function CenturionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-amber-400 mr-2" />
                <Badge variant="secondary" className="bg-amber-600/20 text-amber-100 border-amber-300">
                  Centurion's #1 Carpenter & Plumber
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Best <span className="text-amber-400">Carpenter & Plumber</span> in{" "}
                <span className="text-amber-400 underline decoration-amber-500/60">Centurion</span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                ★★★★★ Rated #1 Carpenter & Plumber in Centurion. Expert kitchen renovations, modern built-in cupboards,
                granite installations, and smart plumbing systems. Serving Irene, Highveld, Lyttelton & all Centurion
                areas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4 font-semibold">
                  <Link href="/contact">
                    Get FREE Quote Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <a href="tel:+27676014490">
                    <Phone className="mr-2 w-5 h-5" />
                    Call: 067 601 4490
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Star className="w-6 h-6 text-amber-400 mb-1 fill-current" />
                  <span className="text-sm font-medium">5.0 Rating</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Licensed</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">400+ Jobs</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Same Day</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/carpenter-johannesburg-installing-kitchen-cupboards.jpg"
                alt="Best Carpenter & Plumber Centurion - Modern Kitchen Renovation & Built-in Cupboards"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">#1 Rated</div>
                <div className="text-sm">Centurion Carpenter & Plumber</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centurion Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Serving All Centurion Areas</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional carpentry and plumbing services throughout Centurion and surrounding areas. Same-day quotes,
              licensed craftsmen, 5-year warranty.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Centurion CBD",
              "Irene",
              "Highveld",
              "Lyttelton",
              "Wierdapark",
              "Eldoraigne",
              "Doringkloof",
              "Zwartkop",
              "Rooihuiskraal",
              "Clubview",
              "Laudium",
              "Erasmuskloof",
              "Pierre van Ryneveld",
              "Thatchfield",
              "Wierda Park",
              "Centurion Golf Estate",
            ].map((area) => (
              <Card key={area} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-800">{area}</h3>
                  <p className="text-sm text-slate-600 mt-1">Same Day Service</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Modern Carpentry & Plumbing Services in Centurion
            </h2>
            <p className="text-xl text-slate-600">
              Contemporary carpentry and plumbing solutions for Centurion's modern lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Building2 className="w-6 h-6 text-amber-600 mr-2" />
                  Kitchen Renovations Centurion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Modern kitchen transformations for Centurion homes. Smart layouts, quality materials, expert
                  installation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Smart kitchen layouts & islands
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Modern materials & finishes
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Technology integration ready
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R20,000</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/kitchen-renovations">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Award className="w-6 h-6 text-amber-600 mr-2" />
                  Built-in Cupboards Centurion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Smart storage solutions for modern Centurion homes. Innovative designs that maximize space and
                  functionality.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Smart wardrobes & closets
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Home office solutions
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Media & entertainment centers
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R11,000</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/built-in-cupboards">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Star className="w-6 h-6 text-amber-600 mr-2" />
                  Granite Installation Centurion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Premium granite & quartz installations for modern Centurion homes. Kitchen countertops and bathroom
                  vanities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Premium granite & quartz slabs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Precision templating & fitting
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Modern edge profiles available
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R7,000</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/quartz-granite">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Star className="w-6 h-6 text-amber-600 mr-2" />
                  Modern Plumbing Centurion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Contemporary plumbing solutions for Centurion's modern homes. Smart installations and emergency
                  services.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Smart home plumbing systems
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Modern bathroom installations
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Emergency repair services
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-600">From R370/hour</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/services/plumbing">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Why Centurion Chooses Us</h2>
            <p className="text-xl text-slate-600">
              The most trusted carpenter and plumber in Centurion with 400+ completed projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-amber-600 fill-current" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5-Star Rated</h3>
              <p className="text-slate-600">Consistently rated 5 stars by Centurion clients on Google Reviews</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Licensed & Insured</h3>
              <p className="text-slate-600">
                Fully licensed carpenter and plumber with comprehensive insurance coverage
              </p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Same Day Quotes</h3>
              <p className="text-slate-600">Free quotes within 24 hours for all Centurion areas</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5-Year Warranty</h3>
              <p className="text-slate-600">All work comes with our comprehensive 5-year warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Centurion Carpentry & Plumbing FAQs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Answers to the questions Centurion homeowners ask us most in 2026
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "How quickly can you provide a quote in Centurion?",
                a: "We offer same-day quotes across all Centurion areas including Irene, Highveld, and Lyttelton. Most free quotes are delivered within 24 hours of your call.",
              },
              {
                q: "Are you licensed and insured?",
                a: "Yes. We are a fully licensed carpenter and plumber with comprehensive insurance, so your home and project are always protected.",
              },
              {
                q: "Do you offer a warranty on your work?",
                a: "Absolutely. Every carpentry and plumbing job we complete in Centurion comes with a comprehensive 5-year workmanship warranty.",
              },
              {
                q: "What does a kitchen renovation cost in Centurion?",
                a: "Kitchen renovations start from R20,000 depending on layout, materials, and finishes. We provide a detailed, transparent quote before any work begins.",
              },
              {
                q: "Do you handle plumbing emergencies?",
                a: "Yes, we provide emergency plumbing repairs throughout Centurion with fast response times and upfront hourly pricing from R370/hour.",
              },
              {
                q: "Which Centurion areas do you serve?",
                a: "We serve all of Centurion including the CBD, Irene, Highveld, Lyttelton, Wierdapark, Eldoraigne, Doringkloof, Clubview, and surrounding suburbs.",
              },
            ].map((faq) => (
              <Card key={faq.q} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-800 text-lg mb-2">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Centurion Property?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join 400+ satisfied Centurion clients. Get your FREE quote today from Centurion's #1 rated carpenter and
            plumber. Licensed, insured, and guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button
              size="lg"
              asChild
              className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8 py-4 font-semibold"
            >
              <Link href="/contact">
                Get FREE Quote Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8 py-4 bg-transparent"
            >
              <a href="tel:+27676014490">
                <Phone className="mr-2 w-5 h-5" />
                Call: 067 601 4490
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-white" />
              ))}
            </div>
            <p className="text-lg opacity-90 max-w-2xl text-pretty">
              {'"Excellent modern kitchen renovation and plumbing service! Professional team."'} - Lisa K., Irene
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
