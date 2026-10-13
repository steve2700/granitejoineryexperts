import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WhatsAppJobCard } from "@/components/whatsapp-job-card"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Calendar,
  Shield,
  Award,
  Users,
  Wrench,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Johannesburg's #1 Carpenter | Free Quotes Kitchen Renovations 2026",
  description:
    "Contact Granite Carpentry for door installation, granite cutting & installation, kitchen renovations and built-in cupboards. Send your job on WhatsApp or call 067 601 4490. 5-star rated carpenter serving Johannesburg, Sandton, Randburg.",
  keywords:
    "contact carpenter Johannesburg, free kitchen renovation quote, granite installation quote Johannesburg, built-in cupboards quote, carpenter contact details Johannesburg, kitchen renovation consultation, professional carpenter contact",
  robots: "index, follow",
  openGraph: {
    title: "Contact Johannesburg's #1 Carpenter | Free Quotes 2026",
    description:
      "Get free quotes for kitchen renovations, built-in cupboards & granite installation. 5-star rated carpenter serving Greater Johannesburg.",
    url: "https://granitecarpentry.co.za/contact",
    siteName: "Granite Carpentry",
    images: [
      {
        url: "https://granitecarpentry.co.za/granitecarpentry.webp",
        width: 1200,
        height: 630,
        alt: "Contact Granite Carpentry - Professional Carpenter Johannesburg",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-600 font-medium">#1 Rated Carpenter Johannesburg</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Get Your <span className="text-amber-600">Free Quote</span> Today
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Door installation and granite cutting are the jobs our customers ask for most this year. Tell us what
                you need on WhatsApp and we will send you a clear quote, with no waiting around for days.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Free Quotes & Consultations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">5-Star Rated Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">24-Month Warranty</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <a href="tel:+27676014490">
                    <Phone className="mr-2 w-5 h-5" />
                    Call: 067 601 4490
                  </a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="text-lg px-8 border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                >
                  <a href="https://wa.me/27676014490" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="mr-2 w-5 h-5" />
                    WhatsApp Quote
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/granitecarpentry.webp"
                alt="Contact Granite Carpentry - Professional carpenter in Johannesburg for kitchen renovations"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-slate-800">47+</div>
                <div className="text-slate-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-slate-600">Choose the contact method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-amber-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Call Us</h3>
                <p className="text-slate-600 mb-4">Speak directly with our team</p>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                  <a href="tel:+27676014490">067 601 4490</a>
                </Button>
                <p className="text-xs text-slate-500 mt-2">Available 7 days a week</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-amber-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <WhatsAppIcon className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">WhatsApp</h3>
                <p className="text-slate-600 mb-4">Quick quotes & photos</p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href="https://wa.me/27676014490" target="_blank" rel="noopener noreferrer">
                    Message Us
                  </a>
                </Button>
                <p className="text-xs text-slate-500 mt-2">Send photos for instant quotes</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-amber-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Email</h3>
                <p className="text-slate-600 mb-4">Detailed project discussions</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <a href="mailto:info@granitecarpentry.co.za">Send Email</a>
                </Button>
                <p className="text-xs text-slate-500 mt-2">info@granitecarpentry.co.za</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-amber-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Book Consultation</h3>
                <p className="text-slate-600 mb-4">Free on-site visits</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  <a href="tel:+27676014490">Schedule Visit</a>
                </Button>
                <p className="text-xs text-slate-500 mt-2">Free consultations available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WhatsApp Job Form */}
      <section id="whatsapp-job" className="py-16 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Send Us Your Job on WhatsApp</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Three quick taps and your message is ready. No forms to wait on, no emails lost in a spam folder.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3">
                <WhatsAppJobCard />
              </div>

              <aside className="lg:col-span-2 space-y-6">
                {/* Clear contact number */}
                <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-lg">
                  <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">WhatsApp or call</p>
                  <a
                    href="tel:+27676014490"
                    className="mt-1 block text-3xl font-bold hover:text-amber-300 sm:text-4xl"
                  >
                    067 601 4490
                  </a>
                  <p className="mt-2 text-sm text-slate-300">Mon to Fri 7:00 to 17:00, Sat 8:00 to 14:00</p>
                  <p className="text-sm text-slate-300">Emergency calls answered 24/7</p>
                  <a
                    href="https://wa.me/27676014490"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#1ebe5b]"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Most requested services */}
                <div className="rounded-2xl border-2 border-amber-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
                    Most requested this year
                  </p>
                  <div className="mt-4 space-y-4">
                    <Link
                      href="/door-installation"
                      className="block rounded-lg border border-slate-200 p-4 transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
                    >
                      <p className="font-bold text-slate-800">Door Installation</p>
                      <p className="mt-1 text-sm text-slate-600">
                        Interior, pivot, barn, security and French doors, hung and finished properly.
                      </p>
                    </Link>
                    <Link
                      href="/countertop-cutting-service-gauteng"
                      className="block rounded-lg border border-slate-200 p-4 transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
                    >
                      <p className="font-bold text-slate-800">Granite Cutting &amp; Installation</p>
                      <p className="mt-1 text-sm text-slate-600">
                        Precise cut-outs for sinks and hobs, and clean installation of granite and quartz tops.
                      </p>
                    </Link>
                  </div>
                </div>

                {/* Yebo Invoices note */}
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-start gap-3">
                    <Image
                      src="/yebo-logo.svg"
                      alt="Yebo Invoices logo"
                      width={40}
                      height={40}
                      unoptimized
                      className="h-10 w-10 flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-slate-800">Quotes sent fast with Yebo Invoices</p>
                      <p className="mt-1 text-sm text-slate-600">
                        We use Yebo Invoices to send clear quotes and invoices quickly, so you are not left waiting
                        days.{" "}
                        <Link href="/for-tradesmen" className="text-amber-700 underline underline-offset-2">
                          Official partner
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Why Choose Granite Carpentry?</h2>
            <p className="text-xl text-slate-600">Johannesburg's most trusted carpentry specialists</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Licensed & Insured</h3>
              <p className="text-slate-600">
                Fully licensed carpentry business with comprehensive insurance coverage for your peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5-Star Rated</h3>
              <p className="text-slate-600">
                Consistently rated 5 stars by customers across Johannesburg with 47+ completed projects.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Expert Team</h3>
              <p className="text-slate-600">
                Qualified carpenters with years of experience in kitchen renovations and custom installations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Quality Guarantee</h3>
              <p className="text-slate-600">
                24-month warranty on all workmanship with quality materials and professional installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Location */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Clock className="w-6 h-6 text-amber-600 mr-3" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="font-medium text-slate-700">Monday - Friday</span>
                  <span className="text-slate-600">7:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="font-medium text-slate-700">Saturday</span>
                  <span className="text-slate-600">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="font-medium text-slate-700">Sunday</span>
                  <span className="text-slate-600">Emergency calls only</span>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg mt-4">
                  <p className="text-amber-800 font-medium">24/7 Emergency Service Available</p>
                  <p className="text-amber-700 text-sm">
                    For urgent carpentry repairs and emergency situations, we're available around the clock.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MapPin className="w-6 h-6 text-amber-600 mr-3" />
                  Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  We proudly serve customers throughout the Greater Johannesburg area and surrounding regions:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Johannesburg South</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Sandton & Rosebank</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Randburg & Fourways</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Kempton Park</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Pretoria & Centurion</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Midrand & Edenvale</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Boksburg & Benoni</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Roodepoort</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-blue-800 font-medium">Free On-Site Consultations</p>
                  <p className="text-blue-700 text-sm">
                    We provide free consultations and quotes throughout our service areas. Travel charges may apply for
                    areas outside our standard service zone.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 47+ satisfied customers who chose Granite Carpentry for their kitchen renovations, built-in cupboards,
            and granite installations across Johannesburg.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8">
              <a href="tel:+27676014490">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: 067 601 4490
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8 bg-transparent"
            >
              <Link href="/portfolio">
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <p className="text-amber-100 text-sm mt-6">
            Free quotes • Licensed & insured • 24-month warranty • 5-star rated service
          </p>
        </div>
      </section>
    </>
  )
}
