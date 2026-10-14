import { WhatsAppIcon } from "@/components/whatsapp-icon"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Phone, Star, Award, Building2, MapPin, Clock, Shield, Users, Home, Hammer, Wrench, DoorOpen, ClipboardList, BadgeCheck } from "lucide-react"

const CITY = "Johannesburg"
const REGION = "Gauteng"
const SLUG = "door-hanging-johannesburg"
const CANONICAL = `https://granitecarpentry.co.za/${SLUG}`

export const metadata: Metadata = {
  title: `Door Hanging ${CITY} 2026 | Door Fitters, Hinges, Locks & Door Repairs | Same-Day Quotes`,
  description:
    `★★★★★ Door hanging in ${CITY}. We hang internal & external doors, fix doors that don’t close, replace hinges, align doors, install locksets/handles, and do bathroom door replacements. Fast turnaround. Call 067 601 4490`,
  keywords:
    `door hanging ${CITY}, door fitters ${CITY}, hang a door ${CITY}, interior door hanging ${CITY}, external door hanging ${CITY}, door won’t close repair ${CITY}, door hinge repair ${CITY}, door alignment ${CITY}, door scraping floor ${CITY}, door latch alignment ${CITY}, strike plate adjustment ${CITY}, lockset installation ${CITY}, door handle replacement ${CITY}, bathroom door replacement ${CITY}, hollow core door installation ${CITY}, solid door installation ${CITY}`,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: `Door Hanging ${CITY} 2026 | Door Fitters, Hinges, Locks & Door Repairs`,
    description:
      `★★★★★ Door hanging in ${CITY}. Hanging, alignment, hinges, locks and fast door repairs. Call 067 601 4490`,
    url: CANONICAL,
    images: [
      {
        url: "https://granitecarpentry.co.za/door-hanging.jpg",
        width: 1200,
        height: 630,
        alt: `Door Hanging ${CITY} - Door Fitters & Repairs`,
      },
    ],
  },
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${CANONICAL}#door-hanging-${CITY.toLowerCase()}`,
      "name": `Granite Carpentry - Door Hanging ${CITY}`,
      "image": "https://granitecarpentry.co.za/door-hanging.jpg",
      "telephone": "+27676014490",
      "priceRange": "R450-R25000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": CITY,
        "addressRegion": REGION,
        "addressCountry": "ZA",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-26.2041",
        "longitude": "28.0473",
      },
      "url": CANONICAL,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "37",
        "bestRating": "5",
        "worstRating": "1",
      },
      "areaServed": { "@type": "City", "name": CITY },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "14:00",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      "serviceType": `Door Hanging & Door Repairs in ${CITY}`,
      "provider": { "@id": `${CANONICAL}#door-hanging-${CITY.toLowerCase()}` },
      "areaServed": { "@type": "City", "name": CITY },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://granitecarpentry.co.za" },
        { "@type": "ListItem", "position": 2, "name": "Areas", "item": "https://granitecarpentry.co.za/areas" },
        { "@type": "ListItem", "position": 3, "name": CITY, "item": `https://granitecarpentry.co.za/areas/${CITY.toLowerCase().replace(" ", "-")}` },
        { "@type": "ListItem", "position": 4, "name": `Door Hanging ${CITY}` },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How much does door hanging cost in ${CITY}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Door hanging in ${CITY} usually starts from around R450 for basic labour, depending on the door type, hinge work, trimming, lockset installation and alignment. Send a photo + your location for an accurate quote.`,
          },
        },
        {
          "@type": "Question",
          "name": `Can you fix a door that won’t close or locks badly?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes. Most issues come from hinge sag, frame movement, latch/strike misalignment, swollen doors, or a door scraping the floor. We adjust hinges, plane/trim if needed, and realign the lock & strike.`,
          },
        },
        {
          "@type": "Question",
          "name": `Do you supply doors, hinges and locksets?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes. We can supply and fit doors, hinges, locksets and handles — or install customer-supplied items. We’ll advise the best option based on budget and door type.`,
          },
        },
      ],
    },
  ],
}

export default function DoorHangingCityPage() {
  const suburbs = [
    "Sandton", "Rosebank", "Randburg", "Melrose", "Illovo", "Parktown",
    "Fourways", "Bryanston", "Midrand", "Edenvale", "Bedfordview", "Boksburg",
  ]

  const quickQuoteChecklist = [
    "Photo of the door (front + side view)",
    "Photo of hinges + handle/lock area",
    "Is it an interior or exterior door?",
    "Tell us your suburb + access (apartment/complex/house)",
    "Any deadline (move-in, inspection, tenant handover)?",
  ]

  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Breadcrumb */}
      <section className="bg-slate-50 py-4">
        <div className="container mx-auto">
          <nav className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-amber-600 flex items-center">
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/areas" className="hover:text-amber-600">
              Areas
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/areas/${CITY.toLowerCase().replace(" ", "-")}`} className="hover:text-amber-600">
              {CITY}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{`Door Hanging ${CITY}`}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-amber-400 mr-2" />
                <Badge variant="secondary" className="bg-amber-600/20 text-amber-100 border-amber-300">
                  {CITY} Door Hanging & Repairs
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-amber-400">{`Door Hanging ${CITY}`}</span>
                <br />
                Hinges • Locks • Alignment • Door Repairs
              </h1>

              <p className="text-xl sm:text-2xl text-slate-200 mb-8 leading-relaxed">
                ★★★★★ High-converting quick jobs: hang doors correctly, fix doors that won’t close, replace hinges,
                align latch & strike plate, install locksets/handles, and do bathroom door replacements.
                Same-day quotes in {CITY}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4 font-semibold">
                  <Link href="/contact">
                    Get FREE Quote
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
                  <BadgeCheck className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Quality Finish</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Fast Turnaround</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-sm font-medium">Same Day</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/door-hanging.jpg"
                alt={`Door Hanging ${CITY} - Door Fitters & Repairs`}
                width={700}
                height={560}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Door Problems?</div>
                <div className="text-sm">We fix fast.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Fix (keyword heavy) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Door Problems We Fix in {CITY}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              If your door is sticking, scraping, not locking, or not closing—this is exactly what we do every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Door Won’t Close Properly", desc: "Hinge sag, latch misalignment, frame movement, swollen doors or poor hanging." },
              { title: "Door Scraping the Floor", desc: "We adjust hinges, plane/trim carefully, and align gaps for smooth operation." },
              { title: "Loose Hinges / Worn Screws", desc: "We strengthen hinge points and ensure the door stays square and stable." },
              { title: "Door Won’t Lock / Latch Issues", desc: "We realign strike plate, adjust latch position, and replace locksets if needed." },
              { title: "Bathroom Door Replacement", desc: "Quick supply-and-fit solutions, matching door style and clean installation." },
              { title: "Handle / Lockset Replacement", desc: "Replace locksets, handles, privacy locks, and ensure perfect alignment." },
            ].map((item) => (
              <Card key={item.title} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <DoorOpen className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guide (bigger + detailed) */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Door Hanging Pricing Guide in {CITY}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transparent pricing ranges. Final cost depends on door type, hardware, trimming, and site conditions.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Award className="w-6 h-6 text-amber-600 mr-2" />
                  Common Door Hanging Prices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {[
                  { name: "Door Hanging (labour only) – interior", price: "From R450 – R950", note: "If frame is OK + minor adjustments" },
                  { name: "Door Alignment / Door won’t close", price: "R450 – R1,200", note: "Hinges, latch/strike adjustments" },
                  { name: "Hinge Replacement (pair)", price: "R250 – R650", note: "Depends on hinge type/quality" },
                  { name: "Lockset / Handle Install", price: "R450 – R1,100", note: "Includes strike alignment" },
                  { name: "Bathroom Door Replacement (supply + fit)", price: "R1,800 – R3,500", note: "Door + lockset + install (varies)" },
                  { name: "Exterior Door Hanging (heavy duty)", price: "R900 – R2,500", note: "Security/solid doors take longer" },
                ].map((row) => (
                  <div key={row.name} className="flex items-start justify-between gap-6 border-b pb-4 last:border-b-0 last:pb-0">
                    <div>
                      <p className="font-semibold text-slate-800">{row.name}</p>
                      <p className="text-sm text-slate-600">{row.note}</p>
                    </div>
                    <p className="font-bold text-amber-600 whitespace-nowrap">{row.price}</p>
                  </div>
                ))}

                <div className="mt-6 p-4 bg-white rounded-lg border">
                  <p className="text-sm text-slate-700">
                    <strong>Pro Tip:</strong> Want the fastest quote? Send 3 photos + suburb on WhatsApp.
                    We’ll estimate immediately and confirm on site.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-amber-400">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <ClipboardList className="w-6 h-6 text-amber-600 mr-2" />
                  What Affects Door Hanging Cost?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Door type: hollow core vs solid core vs security door",
                    "Frame condition: skew frame, swollen frame, previous poor installation",
                    "Hardware: standard hinges vs heavy duty hinges",
                    "Lock type: privacy lock, mortice lock, cylinder lock, multi-point systems",
                    "Trimming/planing needed: scraping floor or tight gaps",
                    "Apartment access: parking, stairs, body corporate rules",
                  ].map((x) => (
                    <li key={x} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{x}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong>Budget option:</strong> If you supply door + lockset, we can do labour-only installation.
                  </p>
                </div>

                <div className="mt-6">
                  <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 w-full">
                    <Link href="/contact">Get Door Hanging Quote</Link>
                  </Button>
                  <p className="text-xs text-slate-600 text-center mt-3">
                    Also see:{" "}
                    <Link href="/door-installation" className="text-amber-600 hover:underline font-semibold">
                      Door Installation
                    </Link>{" "}
                    •{" "}
                    <Link href="/wooden-doors" className="text-amber-600 hover:underline font-semibold">
                      Wooden Doors
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process (adds trust + SEO) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Our Door Hanging Process (Fast & Clean)
            </h2>
            <p className="text-xl text-slate-600">
              Simple process. Professional finish. Most small door jobs are completed the same day.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { step: "1", title: "Quick Assessment", desc: "We inspect the door, hinges, frame, latch and gaps to identify why it’s sticking or not closing." },
              { step: "2", title: "Plan & Quote", desc: "We explain the fix (alignment / hinges / trimming / lockset) and quote before work starts." },
              { step: "3", title: "Door Hanging / Alignment", desc: "We hang the door square, set correct clearances, and ensure smooth swing + correct closing." },
              { step: "4", title: "Lock & Strike Alignment", desc: "We align latch and strike plate so the door locks properly without forcing." },
              { step: "5", title: "Final Quality Check", desc: "We test open/close multiple times, check handle + lock function, and clean up." },
            ].map((p) => (
              <div key={p.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {p.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">{p.title}</h3>
                  <p className="text-slate-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-slate-50 rounded-lg border">
            <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
              <Wrench className="w-5 h-5 text-amber-600 mr-2" />
              Fast Quote Checklist (Send This)
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quickQuoteChecklist.map((x) => (
                <li key={x} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service Areas grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Door Hanging Services Near You (Around {CITY})
            </h2>
            <p className="text-xl text-slate-600">
              We cover Johannesburg and nearby suburbs — fast response for door repairs and replacements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {suburbs.map((area) => (
              <Card key={area} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <p className="font-semibold text-slate-800 text-sm">{area}</p>
                  <p className="text-xs text-slate-600 mt-1">Same Day Quotes</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-slate-600 mb-2">Browse our areas:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/areas/johannesburg" className="text-amber-600 hover:underline font-semibold">Johannesburg Areas</Link>
              <Link href="/areas/sandton" className="text-amber-600 hover:underline font-semibold">Sandton Areas</Link>
              <Link href="/areas/randburg" className="text-amber-600 hover:underline font-semibold">Randburg Areas</Link>
              <Link href="/areas/edenvale" className="text-amber-600 hover:underline font-semibold">Edenvale Areas</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal linking cluster */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Related Services (Internal Links)
            </h2>
            <p className="text-xl text-slate-600">
              Build topical authority by linking to related pages — this helps rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <DoorOpen className="w-8 h-8 text-amber-600 mb-3" />, title: "Door Installation", desc: "Full door installation services across Gauteng.", href: "/door-installation" },
              { icon: <Award className="w-8 h-8 text-amber-600 mb-3" />, title: "Wooden Doors", desc: "Premium wooden door installation & fitting.", href: "/wooden-doors" },
              { icon: <Shield className="w-8 h-8 text-amber-600 mb-3" />, title: "Security Doors", desc: "Security door installation for stronger protection.", href: "/security-doors-johannesburg" },
              { icon: <Building2 className="w-8 h-8 text-amber-600 mb-3" />, title: "Areas", desc: "See our service coverage for more suburbs.", href: "/areas" },
            ].map((s) => (
              <Card key={s.title} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  {s.icon}
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{s.desc}</p>
                  <Link href={s.href} className="text-amber-600 hover:underline text-sm font-semibold">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Door Services (Internal Links) */}
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
      <div className="text-center mb-12">
       <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Related Door Services in Gauteng
       </h2>
       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Need more than door hanging? Explore our most requested door repair services across Gauteng.
      </p>
      </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="hover:shadow-xl transition-shadow">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">Door Alignment Repair</h3>
          <p className="text-sm text-gray-600 mb-3">
            Door won’t close or rubs? We align doors, fix hinge sag, and correct gaps.
          </p>
          <Link
            href="/door-alignment-repair-gauteng"
            className="text-amber-600 hover:underline text-sm font-semibold"
          >
            Door Alignment Repair Gauteng →
          </Link>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-shadow">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">Door Handle Replacement</h3>
          <p className="text-sm text-gray-600 mb-3">
            Replace handles, privacy locks, and install new locksets with clean finishing.
          </p>
          <Link
            href="/door-handle-replacement-gauteng"
            className="text-amber-600 hover:underline text-sm font-semibold"
          >
            Door Handle Replacement Gauteng →
          </Link>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-shadow">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">Door Lock Replacement</h3>
          <p className="text-sm text-gray-600 mb-3">
            Lock broken or jammed? We replace locks, cylinders, and align strike plates.
          </p>
          <Link
            href="/door-lock-replacement-gauteng"
            className="text-amber-600 hover:underline text-sm font-semibold"
          >
            Door Lock Replacement Gauteng →
          </Link>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-shadow">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">Door Repair Gauteng</h3>
          <p className="text-sm text-gray-600 mb-3">
            Full door repairs: scraping, swelling, frame issues, hinges, and latch problems.
          </p>
          <Link
            href="/door-repair-gauteng"
            className="text-amber-600 hover:underline text-sm font-semibold"
          >
            Door Repair Gauteng →
          </Link>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-shadow">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">Cupboard Door Repair</h3>
          <p className="text-sm text-gray-600 mb-3">
            Hinges loose, doors sagging, or misaligned? We fix cupboard doors fast.
          </p>
          <Link
            href="/cupboard-door-repair-gauteng"
            className="text-amber-600 hover:underline text-sm font-semibold"
          >
            Cupboard Door Repair Gauteng →
          </Link>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-shadow">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">Emergency Door Repair</h3>
          <p className="text-sm text-gray-600 mb-3">
            Door can’t lock or close? Emergency repairs for urgent door issues.
          </p>
          <Link
            href="/emergency-door-repair-gauteng"
            className="text-amber-600 hover:underline text-sm font-semibold"
          >
            Emergency Door Repair Gauteng →
          </Link>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-shadow">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">Move-Out Repairs</h3>
          <p className="text-sm text-gray-600 mb-3">
            Tenant exit / inspection fixes: doors, handles, locks, cupboard hinges and more.
          </p>
          <Link
            href="/move-out-repairs-gauteng"
            className="text-amber-600 hover:underline text-sm font-semibold"
          >
            Move-Out Repairs Gauteng →
          </Link>
        </CardContent>
      </Card>

      <Card className="hover:shadow-xl transition-shadow">
        <CardContent className="p-6">
          <h3 className="font-bold text-lg mb-2">Door Installation</h3>
          <p className="text-sm text-gray-600 mb-3">
            Full installation for interior/exterior doors, security doors and replacements.
          </p>
          <Link
            href="/door-installation"
            className="text-amber-600 hover:underline text-sm font-semibold"
          >
            Door Installation →
          </Link>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


      {/* FAQ - bigger */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              FAQ — Door Hanging {CITY}
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { q: `How much does door hanging cost in ${CITY}?`, a: `Prices start from around R450 for basic labour. Cost depends on door type, hinges, trimming and lock alignment. Send photos for a quick estimate.` },
              { q: `Can you fix a door that won’t close?`, a: `Yes. We fix hinge sag, latch/strike misalignment, swollen doors, and scraping floors. Most jobs are done same day.` },
              { q: `Do you supply doors and locksets?`, a: `Yes. We can supply and fit doors, hinges, locksets and handles — or install customer-supplied items.` },
              { q: `How long does a door hanging job take?`, a: `Most interior door hanging and alignment jobs take 1–2 hours depending on trimming and lock alignment.` },
              { q: `My door is scraping the floor — can you fix it without replacing the door?`, a: `Usually yes. We adjust hinges or trim carefully (only what’s needed) and reset gaps for a clean finish.` },
              { q: `Can you replace a bathroom door quickly?`, a: `Yes. Bathroom door replacement is a popular quick job. We can match a white door and fit a lockset for privacy.` },
              { q: `Do you work in complexes and apartments?`, a: `Yes. We’re apartment-friendly — clean, efficient, and we can follow body corporate rules and access times.` },
              { q: `Can you align the lock so it stops jamming?`, a: `Yes. We align the latch and strike plate so the door locks properly without forcing or slamming.` },
              { q: `Do you do emergency call-outs?`, a: `If your door can’t close/lock and it’s urgent, call us — we can often assist same day depending on location.` },
              { q: `What information do you need to quote fast?`, a: `Send: 3 photos (door + hinges + lock area), door type (interior/exterior), and your suburb.` },
            ].map((item) => (
              <Card key={item.q}>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <WhatsAppIcon className="w-5 h-5 text-amber-600 mr-2" />
                    {item.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 text-sm">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{`Need Door Hanging in ${CITY} Today?`}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Send a photo of the door + your location. We’ll quote fast and book you in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button size="lg" asChild className="bg-white text-amber-600 hover:bg-slate-50 text-lg px-8 py-4 font-semibold">
              <Link href="/contact">
                Get FREE Quote Now
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

          <div className="mt-6 text-sm opacity-80">
            <p>
              Explore:{" "}
              <Link href="/door-installation" className="underline hover:text-amber-200">Door Installation</Link>{" "}
              |{" "}
              <Link href="/wooden-doors" className="underline hover:text-amber-200">Wooden Doors</Link>{" "}
              |{" "}
              <Link href="/security-doors-johannesburg" className="underline hover:text-amber-200">Security Doors</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
