import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Star, MapPin, Award, Users, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title:
    "★★★★★ Best Carpenter & Plumber Johannesburg South 2026 | #1 Rated Kitchen Renovations, Built-in Cupboards & Plumbing Services",
  description:
    "★★★★★ #1 rated carpenter & plumber in Johannesburg South 2026. Professional kitchen renovations, built-in cupboards, granite installations & emergency plumbing services. 500+ completed jobs. FREE quotes. Licensed & insured. Call 067 601 4490.",
  keywords:
    "best carpenter Johannesburg South, plumber Johannesburg South 2026, kitchen renovation Johannesburg South, built-in cupboards Johannesburg South, granite installation Johannesburg South, emergency plumbing Johannesburg South, professional carpentry Johannesburg South, #1 carpenter Johannesburg South, cheap carpenter Johannesburg South, carpenter near me Johannesburg South, 24/7 plumber Johannesburg South",
  openGraph: {
    title: "★★★★★ Best Carpenter & Plumber Johannesburg South 2026 | #1 Rated",
    description:
      "★★★★★ #1 rated carpenter & plumber in Johannesburg South. Professional kitchen renovations, built-in cupboards, granite installations & emergency plumbing services. 500+ jobs completed. FREE quotes.",
    url: "https://granitecarpentry.co.za/areas/johannesburg-south",
  },
  alternates: {
    canonical: "https://granitecarpentry.co.za/areas/johannesburg-south",
  },
}

export default function JohannesburgSouthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-amber-400" />
              <Badge variant="secondary" className="bg-amber-600/20 text-amber-200 border-amber-400/30">
                ★★★★★ #1 Rated Johannesburg South
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Best Carpenter
              <span className="block text-amber-400">Johannesburg South 2026</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              ★★★★★ #1 rated carpenter & plumber in Johannesburg South. Professional kitchen renovations, built-in
              cupboards, granite installations & emergency plumbing services. 500+ completed jobs with 5-year warranty.
              FREE quotes & same-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                <Link href="/contact">Get FREE Quote Today</Link>
              </Button>
              <a
                href="tel:+27676014490"
                className="flex items-center gap-2 text-lg hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                067 601 4490
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <span>★★★★★ 5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                <span>500+ Jobs Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <span>5-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Professional Carpentry & Plumbing Services Johannesburg South
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Serving Johannesburg South, Alberton, Bassonia, Glenvista, and surrounding areas with premium carpentry
              solutions & emergency plumbing services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Kitchen Renovations</h3>
                    <p className="text-sm text-amber-600">Starting from R25,000</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Custom kitchen cabinets & cupboards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Granite & quartz countertop installation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Kitchen islands & breakfast bars
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Complete kitchen makeovers
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/kitchen-renovations">View Kitchen Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Built-in Cupboards</h3>
                    <p className="text-sm text-amber-600">Starting from R8,500</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Bedroom wardrobes & walk-in closets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Study & office built-ins
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    TV units & entertainment centers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Linen cupboards & storage solutions
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/built-in-cupboards">View Cupboard Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Granite & Stone Work</h3>
                    <p className="text-sm text-amber-600">Starting from R450/m²</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Granite countertop installation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Caesarstone & quartz surfaces
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Bathroom vanity tops
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Precision templating & fitting
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/quartz-granite">View Stone Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-600">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Professional Plumbing Services</h3>
                    <p className="text-sm text-amber-600">Starting from R350/hour</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Emergency plumbing repairs 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Kitchen & bathroom installations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Geyser repairs & replacements
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Leak detection & pipe repairs
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/services/plumbing">View Plumbing Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
              Why We're Johannesburg South's #1 Rated Carpenter & Plumber
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">★★★★★ 5-Star Rated Service</h3>
                    <p className="text-slate-600">
                      Consistently rated 5 stars by Johannesburg South customers. 500+ completed projects with 100%
                      satisfaction guarantee and 5-year warranty on all work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Same-Day Service Available</h3>
                    <p className="text-slate-600">
                      Emergency repairs and urgent projects handled with same-day service. We understand your time is
                      valuable and work around your schedule.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Local Johannesburg South Experts</h3>
                    <p className="text-slate-600">
                      Born and raised in Johannesburg South. Deep understanding of local homes, architectural styles,
                      and building requirements specific to the area.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Licensed & Fully Insured</h3>
                    <p className="text-slate-600">
                      Fully licensed carpenter with comprehensive insurance coverage. All work complies with SANS
                      building standards and municipal regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">Johannesburg South Area Coverage</h2>
            <p className="text-xl text-slate-600 mb-12">
              Professional carpentry & plumbing services throughout Johannesburg South and surrounding areas
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Johannesburg South</h3>
                <p className="text-sm text-slate-600">Main Area</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Alberton</h3>
                <p className="text-sm text-slate-600">South Rand</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Bassonia</h3>
                <p className="text-sm text-slate-600">Residential</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Glenvista</h3>
                <p className="text-sm text-slate-600">Upmarket</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Mondeor</h3>
                <p className="text-sm text-slate-600">Established</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Southdale</h3>
                <p className="text-sm text-slate-600">Shopping Hub</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Winchester Hills</h3>
                <p className="text-sm text-slate-600">Family Area</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors">
                <h3 className="font-semibold text-slate-800">Kibler Park</h3>
                <p className="text-sm text-slate-600">Residential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Johannesburg South Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-xl font-semibold text-slate-800">5.0 out of 5 stars</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Outstanding kitchen renovation in Bassonia. Professional service from start to finish. The granite
                  countertops are perfect!"
                </p>
                <div className="font-semibold text-slate-800">Sarah M.</div>
                <div className="text-sm text-slate-600">Bassonia, Johannesburg South</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Best carpenter in Johannesburg South! Built-in wardrobes exceeded expectations. Highly recommend for
                  quality work."
                </p>
                <div className="font-semibold text-slate-800">Michael T.</div>
                <div className="text-sm text-slate-600">Glenvista, Johannesburg South</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Excellent service and fair pricing. The team was professional and completed our study built-ins on
                  time. 5 stars!"
                </p>
                <div className="font-semibold text-slate-800">Jennifer L.</div>
                <div className="text-sm text-slate-600">Mondeor, Johannesburg South</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Johannesburg South Project?</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Contact Johannesburg South's #1 rated carpenter & plumber today. FREE quotes, professional service, and
            5-year warranty on all work. Same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-amber-700 hover:bg-slate-100 text-lg px-8"
            >
              <Link href="/contact">Get FREE Quote Today</Link>
            </Button>
            <a
              href="tel:+27676014490"
              className="flex items-center gap-2 text-lg hover:text-amber-200 transition-colors"
            >
              <Phone className="w-5 h-5" />
              067 601 4490 - Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
