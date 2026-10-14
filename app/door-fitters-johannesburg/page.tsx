import { WhatsAppIcon } from "@/components/whatsapp-icon"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Star, MapPin, Clock, Shield, Wrench, Home } from "lucide-react"

const CITY = "Johannesburg"
const SLUG = "johannesburg"
const CANONICAL = `https://granitecarpentry.co.za/door-fitters-${SLUG}`

export const metadata: Metadata = {
  title: `Door Fitters ${CITY} 2026 | Door Hanging, Alignment & Repairs | Same-Day Quotes`,
  description:
    `★★★★★ Trusted door fitters in ${CITY}. Door hanging, door alignment repair, handle replacement, lock replacement & emergency door repairs. Fast turnaround. Call 067 601 4490`,
  keywords:
    `door fitters ${CITY}, door hanging ${CITY}, door fitters near me ${CITY}, door installation ${CITY}, door alignment repair ${CITY}, door repair ${CITY}, door handle replacement ${CITY}, door lock replacement ${CITY}, emergency door repair ${CITY}, interior door fitter ${CITY}, bathroom door fitter ${CITY}`,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: `Door Fitters ${CITY} 2026 | Door Hanging & Repairs`,
    description:
      `Trusted door fitters in ${CITY}. Door hanging, alignment fixes, locks & handles. Same-day quotes.`,
    url: CANONICAL,
    images: [
      {
        url: "https://granitecarpentry.co.za/door-hanging.jpg",
        width: 1200,
        height: 630,
        alt: `Door Fitters ${CITY} - Door Hanging & Repairs`,
      },
    ],
    locale: "en_ZA",
    type: "website",
    siteName: "Granite Carpentry",
  },
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${CANONICAL}#localbusiness`,
      name: `Granite Carpentry - Door Fitters ${CITY}`,
      url: CANONICAL,
      telephone: "+27676014490",
      image: "https://granitecarpentry.co.za/door-hanging.jpg",
      priceRange: "R450-R15000",
      address: {
        "@type": "PostalAddress",
        addressLocality: CITY,
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      areaServed: {
        "@type": "City",
        name: CITY,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "14:00",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      serviceType: `Door Fitters ${CITY} (Door Hanging, Alignment & Repairs)`,
      provider: { "@id": `${CANONICAL}#localbusiness` },
      areaServed: { "@type": "City", name: CITY },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://granitecarpentry.co.za" },
        { "@type": "ListItem", position: 2, name: "Areas", item: "https://granitecarpentry.co.za/areas" },
        { "@type": "ListItem", position: 3, name: CITY, item: `https://granitecarpentry.co.za/areas/${SLUG}` },
        { "@type": "ListItem", position: 4, name: `Door Fitters ${CITY}` },
      ],
    },
  ],
}

export default function DoorFittersCityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Breadcrumb */}
      <section className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-amber-600 flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/areas" className="hover:text-amber-600">Areas</Link>
            <span className="mx-2">/</span>
            <Link href={`/areas/${SLUG}`} className="hover:text-amber-600">{CITY}</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{`Door Fitters ${CITY}`}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-amber-400 mr-2" />
                <Badge variant="secondary" className="bg-amber-600/20 text-amber-100 border-amber-300">
                  {CITY} Door Fitters • Door Hanging & Repairs
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-amber-400">{`Door Fitters ${CITY}`}</span>
                <br />
                Door Hanging, Alignment & Repairs
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                ★★★★★ Fast, clean door fitting in {CITY}. We fix doors that rub, don’t close, or won’t lock.
                Same-day quotes and strong workmanship for homes, apartments and offices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4 font-semibold">
                  <Link href="/contact">
                    Get Free Quote
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
                  <span className="text-sm font-medium">Quality Work</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Fast Turnaround</span>
                </div>
                <div className="flex flex-col items-center">
                  <Wrench className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Clean Finishing</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/door-hanging.jpg"
                alt={`Door Fitters ${CITY} - Door Hanging & Repairs`}
                width={700}
                height={520}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Same Day</div>
                <div className="text-sm">Quotes Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{`Door Fitting Services in ${CITY}`}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick jobs that convert: door hanging, alignment, locks, handles, and emergency repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Door Hanging</CardTitle>
                <CardDescription>Replace, hang, and refit interior/exterior doors</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["New door hanging", "Re-hang sagging doors", "Hinge replacement & alignment"].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link href="/door-hanging-johannesburg" className="text-amber-600 hover:underline font-semibold">
                    See Door Hanging Johannesburg →
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Door Alignment Repair</CardTitle>
                <CardDescription>Fix rubbing, sticking, and uneven gaps</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3 text-sm">
                  We adjust hinges, strike plates, and frames so your door closes smoothly and locks properly.
                </p>
                <Link href="/door-alignment-repair-gauteng" className="text-amber-600 hover:underline font-semibold">
                  Door Alignment Repair Gauteng →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Locks & Handles</CardTitle>
                <CardDescription>Replace locksets, cylinders, and door handles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <Link href="/door-lock-replacement-gauteng" className="text-amber-600 hover:underline font-semibold block">
                    Door Lock Replacement Gauteng →
                  </Link>
                  <Link href="/door-handle-replacement-gauteng" className="text-amber-600 hover:underline font-semibold block">
                    Door Handle Replacement Gauteng →
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Cupboard Door Repairs</CardTitle>
                <CardDescription>Hinges, alignment and quick fixes</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/cupboard-door-repair-gauteng" className="text-amber-600 hover:underline font-semibold">
                  Cupboard Door Repair Gauteng →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Emergency Door Repair</CardTitle>
                <CardDescription>Door won’t lock/close? Urgent repairs</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/emergency-door-repair-gauteng" className="text-amber-600 hover:underline font-semibold">
                  Emergency Door Repair Gauteng →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Full Door Installation</CardTitle>
                <CardDescription>New doors supplied & installed</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/door-installation" className="text-amber-600 hover:underline font-semibold">
                  Door Installation →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{`Door Fitters ${CITY} Pricing Guide`}</h2>
            <p className="text-xl text-gray-600">
              Realistic ranges for quick jobs. Final price depends on door type, condition, and hardware.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                {[
                  { t: "Door Hanging (existing door)", d: "Rehang + hinge alignment + testing", p: "R450 – R1,200" },
                  { t: "New Door Hanging (standard interior)", d: "Fit, align, latch/strike adjustment", p: "R950 – R2,500" },
                  { t: "Door Alignment Repair", d: "Fix rubbing, sticking, gaps, hinge sag", p: "R450 – R1,500" },
                  { t: "Door Handle Replacement", d: "Replace handle/lockset + fitting", p: "R650 – R1,800" },
                  { t: "Door Lock Replacement", d: "Lock replacement + alignment", p: "R850 – R2,500" },
                  { t: "Emergency Door Repair", d: "Urgent close/secure service", p: "R950 – R3,500" },
                ].map((row) => (
                  <div key={row.t} className="flex justify-between items-start pb-4 border-b gap-6">
                    <div>
                      <h3 className="font-bold text-lg">{row.t}</h3>
                      <p className="text-sm text-gray-600">{row.d}</p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <p className="font-bold text-xl text-amber-600">{row.p}</p>
                      <p className="text-sm text-gray-600">estimate</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Tip:</strong> For faster approval, we quote as: <em>materials + labour</em>. Small door jobs
                  convert best when the client sees a clear breakdown.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">{`Get a Free ${CITY} Quote`}</Link>
            </Button>
            <p className="text-sm text-gray-600 mt-4">
              Also useful:{" "}
              <Link href="/move-out-repairs-gauteng" className="text-amber-600 hover:underline font-semibold">
                Move-Out Repairs Gauteng
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{`FAQs - Door Fitters ${CITY}`}</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: `How long does door hanging take in ${CITY}?`,
                a: `Most standard doors take 1–2 hours if the frame is fine. If alignment or hinges need repair, it can take longer. We always test close, latch and lock before we leave.`,
              },
              {
                q: `Do you supply doors as well?`,
                a: `Yes. We can supply standard interior doors and install them, or install a door you already bought. If you want supply + install, check our Door Installation page.`,
                link: { href: "/door-installation", label: "Door Installation" },
              },
              {
                q: `My door rubs and won’t lock — what causes that?`,
                a: `Usually hinge sag, frame movement, or the strike plate being out of line. We fix this with Door Alignment Repair so the door closes smoothly.`,
                link: { href: "/door-alignment-repair-gauteng", label: "Door Alignment Repair Gauteng" },
              },
              {
                q: `Can you replace handles and locks same day?`,
                a: `Yes, most handle and lock replacements are quick jobs. We also align the latch/strike so it closes properly.`,
                link: { href: "/door-handle-replacement-gauteng", label: "Door Handle Replacement Gauteng" },
              },
            ].map((f) => (
              <Card key={f.q}>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                    {f.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">
                    {f.a}{" "}
                    {f.link ? (
                      <Link href={f.link.href} className="text-amber-600 hover:underline font-semibold">
                        {f.link.label} →
                      </Link>
                    ) : null}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{`Need Door Fitters in ${CITY}?`}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Fast, reliable door hanging and repairs with clean finishing. Same-day quotes available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8 py-4 font-semibold">
              <Link href="/contact">
                Request Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8 py-4 bg-transparent">
              <a href="tel:+27676014490">
                <Phone className="mr-2 w-5 h-5" />
                Call: 067 601 4490
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
