"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu, Phone, Mail, MapPin, ChevronDown, Star, DoorOpen, Gem, ChefHat, PanelsTopLeft } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

const WHATSAPP_URL = `https://wa.me/27676014490?text=${encodeURIComponent(
  "Hi Granite Carpentry, I would like a quote please.",
)}`

// Fastest, most requested services. Shown first on every screen size.
const quickServices = [
  { name: "Door Installation", short: "Doors", href: "/door-installation", hot: true, icon: DoorOpen },
  { name: "Granite Cutting & Install", short: "Granite", href: "/granite-supply-and-installation", hot: true, icon: Gem },
  { name: "Kitchen Renovations", short: "Kitchens", href: "/kitchen-renovations", hot: false, icon: ChefHat },
  { name: "Built-in Cupboards", short: "Cupboards", href: "/built-in-cupboards", hot: false, icon: PanelsTopLeft },
]

const chipLinks = [
  { name: "Door Installation", href: "/door-installation", hot: true },
  { name: "Granite Cutting", href: "/granite-supply-and-installation", hot: true },
  { name: "Kitchens", href: "/kitchen-renovations", hot: false },
  { name: "Cupboards", href: "/built-in-cupboards", hot: false },
  { name: "Quartz Tops", href: "/quartz-countertops", hot: false },
  { name: "Plumbing", href: "/plumbing", hot: false },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Everything about doors, on top
  const doorServices = [
    { name: "Door Installation", href: "/door-installation" },
    { name: "Door Hanging Johannesburg", href: "/door-hanging-johannesburg" },
    { name: "Door Fitters Johannesburg", href: "/door-fitters-johannesburg" },
    { name: "Door Fitters Sandton", href: "/door-fitters-sandton" },
    { name: "Door Fitters Pretoria", href: "/door-fitters-pretoria" },
    { name: "Door Fitters Centurion", href: "/door-fitters-centurion" },
    { name: "Door Fitters Midrand", href: "/door-fitters-midrand" },
    { name: "Door Fitters Randburg", href: "/door-fitters-randburg" },
    { name: "Door Fitters Fourways", href: "/door-fitters-fourways" },
    { name: "Pivot Doors", href: "/pivot-doors" },
    { name: "Pivot Doors Sandton", href: "/pivot-doors-sandton" },
    { name: "Pivot Doors Johannesburg", href: "/pivot-doors-johannesburg" },
    { name: "Pivot Doors Pretoria", href: "/pivot-doors-pretoria" },
    { name: "Barn Doors", href: "/barn-doors" },
    { name: "Barn Doors Sandton", href: "/barn-doors-sandton" },
    { name: "Barn Doors Johannesburg", href: "/barn-doors-johannesburg" },
    { name: "Barn Doors Cape Town", href: "/barn-doors-cape-town" },
    { name: "French Doors", href: "/french-doors" },
    { name: "French Doors Sandton", href: "/french-doors-sandton" },
    { name: "Security Doors", href: "/security-doors" },
    { name: "Security Doors Johannesburg", href: "/security-doors-johannesburg" },
    { name: "Security Doors Sandton", href: "/security-doors-sandton" },
    { name: "Security Doors Pretoria", href: "/security-doors-pretoria" },
    { name: "Wooden Doors", href: "/wooden-doors" },
    { name: "Solid Wood Doors Pretoria", href: "/solid-wood-doors-pretoria" },
    { name: "Door Repair Gauteng", href: "/door-repair-gauteng" },
    { name: "Emergency Door Repair", href: "/emergency-door-repair-gauteng" },
    { name: "Door Alignment Repair", href: "/door-alignment-repair-gauteng" },
    { name: "Door Lock Replacement", href: "/door-lock-replacement-gauteng" },
    { name: "Door Handle Replacement", href: "/door-handle-replacement-gauteng" },
    { name: "Bathroom Door Replacement", href: "/bathroom-door-replacement-gauteng" },
  ]

  // Everything about granite cutting and installation, on top
  const graniteServices = [
    { name: "Granite Supply & Installation", href: "/granite-supply-and-installation" },
    { name: "Countertop Cutting Service", href: "/countertop-cutting-service-gauteng" },
    { name: "Granite Countertops", href: "/granite-countertops" },
    { name: "Granite Prices Johannesburg", href: "/granite-countertops-prices-johannesburg" },
    { name: "Quartz & Granite", href: "/quartz-granite" },
    { name: "Quartz Countertops", href: "/quartz-countertops" },
    { name: "Granite Installers Sandton", href: "/granite-installers-sandton" },
    { name: "Granite Installers Pretoria", href: "/granite-installers-pretoria" },
    { name: "Granite Installers Centurion", href: "/granite-installers-centurion" },
    { name: "Granite Installers Midrand", href: "/granite-installers-midrand" },
    { name: "Granite Installers Fourways", href: "/granite-installers-fourways" },
    { name: "Granite Installers Boksburg", href: "/granite-installers-boksburg" },
  ]

  // Everything else
  const services = [
    { name: "Kitchen Renovations", href: "/kitchen-renovations" },
    { name: "Kitchen Renovations Cost Johannesburg", href: "/kitchen-renovation-cost-johannesburg" },
    { name: "Kitchen Cupboards", href: "/kitchen-cupboards" },
    { name: "Bathroom Renovations", href: "/bathroom-renovations" },
    { name: "Built-in Cupboards", href: "/built-in-cupboards" },
    { name: "Decking & Flooring", href: "/decking-flooring" },
    { name: "Drywall & Ceilings", href: "/drywall-ceilings" },
    { name: "Professional Plumbing", href: "/plumbing" },
  ]

  const drywallLocations = [
    { name: "Drywall Sandton", href: "/drywall-sandton" },
    { name: "Ceiling Repairs Randburg", href: "/ceiling-repairs-randburg" },
    { name: "Drywall Rosebank", href: "/drywall-rosebank" },
    { name: "Suspended Ceilings JHB", href: "/suspended-ceilings-johannesburg" },
    { name: "Drywalling Contractors JHB", href: "/drywalling-contractors-johannesburg" },
    { name: "Drywall Fourways", href: "/drywall-fourways" },
    { name: "Ceiling Repairs Sandton", href: "/ceiling-repairs-sandton" },
    { name: "Drywall Midrand", href: "/drywall-midrand" },
    { name: "Ceiling Repairs Vereeniging", href: "/ceiling-repairs-vereeniging" },
    { name: "Drywall JHB South", href: "/drywall-johannesburg-south" },
    { name: "Drywall Bryanston", href: "/drywall-bryanston" },
    { name: "Suspended Ceilings Sandton", href: "/suspended-ceilings-sandton" },
    { name: "Drywall Centurion", href: "/drywall-centurion" },
    { name: "Ceiling Repairs Pretoria", href: "/ceiling-repairs-pretoria" },
    { name: "Drywall Edenvale", href: "/drywall-edenvale" },
    { name: "Ceiling Installation Bryanston", href: "/ceiling-installation-bryanston" },
    { name: "Drywall Pretoria", href: "/drywall-pretoria" },
    { name: "Ceiling Repairs Centurion", href: "/ceiling-repairs-centurion" },
    { name: "Drywall Boksburg", href: "/drywall-boksburg" },
    { name: "Ceiling Installation Edenvale", href: "/ceiling-installation-edenvale" },
  ]

  const areas = [
    { name: "Johannesburg South", href: "/areas/johannesburg-south" },
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Kempton Park", href: "/areas/kempton-park" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Roodepoort", href: "/areas/roodepoort" },
    { name: "Fourways", href: "/areas/fourways" },
    { name: "Edenvale", href: "/areas/edenvale" },
    { name: "Boksburg", href: "/areas/boksburg" },
    { name: "Alberton", href: "/areas/alberton" },
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
  ]

  const accordion =
    "group border-b border-slate-200 [&[open]>summary_svg]:rotate-180"
  const summary =
    "flex min-h-[48px] cursor-pointer list-none items-center justify-between text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden"
  const subLink =
    "flex min-h-[44px] items-center text-sm text-slate-600 transition-colors hover:text-amber-600"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar: desktop only */}
      <div className="hidden bg-slate-900 text-white sm:block">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3 text-amber-400" />
                <a href="tel:+27676014490" className="transition-colors hover:text-amber-400">
                  067 601 4490
                </a>
              </div>
              <div className="hidden items-center space-x-1 md:flex">
                <Mail className="h-3 w-3 text-amber-400" />
                <a href="mailto:info@granitecarpentry.co.za" className="transition-colors hover:text-amber-400">
                  info@granitecarpentry.co.za
                </a>
              </div>
            </div>
            <div className="hidden items-center space-x-4 lg:flex">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3 text-amber-400" />
                <span>Serving Greater Johannesburg & Pretoria</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-current text-amber-400" />
                <span className="text-amber-400">★★★★★ 5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex h-14 items-center justify-between gap-2 sm:h-16">
          <Link href="/" className="flex min-w-0 items-center space-x-2">
            <Image
              src="/logo-mark.png"
              alt="Granite Carpentry logo"
              width={992}
              height={820}
              priority
              className="h-9 w-auto flex-shrink-0 sm:h-11"
            />
            <div className="min-w-0">
              <div className="truncate text-base font-bold leading-tight text-slate-900 sm:text-lg">Granite Carpentry</div>
              <div className="hidden text-xs text-slate-600 sm:block">& Joinery Experts</div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center space-x-5 lg:flex">
            <Link href="/" className="text-sm font-medium text-slate-700 transition-colors hover:text-amber-600">
              Home
            </Link>
            <div className="group relative">
              <Link
                href="/door-installation"
                className="relative flex items-center text-sm font-semibold text-slate-900 transition-colors hover:text-amber-600"
              >
                Doors <ChevronDown className="ml-1 h-3 w-3" />
                <span className="absolute -right-2 -top-1.5 h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
              </Link>
              <div className="invisible absolute left-0 top-full z-50 mt-2 max-h-[80vh] w-64 overflow-y-auto rounded-md bg-white opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="py-1">
                  {doorServices.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link
                href="/granite-supply-and-installation"
                className="relative flex items-center text-sm font-semibold text-slate-900 transition-colors hover:text-amber-600"
              >
                Granite Cutting <ChevronDown className="ml-1 h-3 w-3" />
                <span className="absolute -right-2 -top-1.5 h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
              </Link>
              <div className="invisible absolute left-0 top-full z-50 mt-2 max-h-[80vh] w-64 overflow-y-auto rounded-md bg-white opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="py-1">
                  {graniteServices.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center text-sm font-medium text-slate-700 transition-colors hover:text-amber-600">
                More Services <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-2 max-h-[80vh] w-64 overflow-y-auto rounded-md bg-white opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="py-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="my-1 border-t border-slate-200"></div>
                  <div className="px-4 py-2 text-xs font-semibold uppercase text-slate-500">Drywall Locations</div>
                  {drywallLocations.map((location) => (
                    <Link
                      key={location.href}
                      href={location.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center text-sm font-medium text-slate-700 transition-colors hover:text-amber-600">
                Areas <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-2 max-h-96 w-56 overflow-y-auto rounded-md bg-white opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="py-1">
                  {areas.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/portfolio" className="text-sm font-medium text-slate-700 transition-colors hover:text-amber-600">
              Portfolio
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-700 transition-colors hover:text-amber-600">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium text-slate-700 transition-colors hover:text-amber-600">
              Blog
            </Link>
            <Link href="/faq" className="text-sm font-medium text-slate-700 transition-colors hover:text-amber-600">
              FAQ
            </Link>
          </nav>

          {/* Actions: WhatsApp and call are one tap on mobile */}
          <div className="flex flex-shrink-0 items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get a quote on WhatsApp"
              className="flex h-10 items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-sm transition-colors hover:bg-[#1ebe5b] max-sm:w-10 sm:px-4"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
            </a>
            <a
              href="tel:+27676014490"
              aria-label="Call 067 601 4490"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-white transition-colors hover:bg-amber-700 sm:hidden"
            >
              <Phone className="h-5 w-5" />
            </a>
            <Button asChild className="hidden bg-amber-600 hover:bg-amber-700 sm:inline-flex">
              <Link href="/contact">Get Quote</Link>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[88vw] max-w-[360px] p-0">
                <div className="flex h-full flex-col">
                  <div className="flex items-center border-b bg-slate-50 p-4">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                      <Image src="/logo-mark.png" alt="Granite Carpentry logo" width={992} height={820} className="h-9 w-auto" />
                      <div>
                        <div className="text-base font-bold text-slate-900">Granite Carpentry</div>
                        <div className="text-xs text-slate-600">& Joinery Experts</div>
                      </div>
                    </Link>
                  </div>

                  <ScrollArea className="flex-1">
                    <div className="space-y-5 p-4">
                      {/* Fast services first */}
                      <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">Most requested</p>
                        <div className="grid grid-cols-2 gap-2.5">
                          {quickServices.map((q) => {
                            const Icon = q.icon
                            return (
                              <Link
                                key={q.href}
                                href={q.href}
                                onClick={() => setIsOpen(false)}
                                className={`relative flex min-h-[84px] flex-col justify-between rounded-xl border-2 p-3 transition-colors active:scale-[0.98] ${
                                  q.hot
                                    ? "border-amber-400 bg-amber-50"
                                    : "border-slate-200 bg-white"
                                }`}
                              >
                                <Icon className="h-6 w-6 text-amber-600" />
                                <span className="text-sm font-semibold leading-tight text-slate-900">{q.name}</span>
                                {q.hot && (
                                  <span className="absolute right-2 top-2 rounded-full bg-amber-500 px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                                    Hot
                                  </span>
                                )}
                              </Link>
                            )
                          })}
                        </div>
                      </div>

                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-[#25D366] px-4 text-base font-bold text-white shadow-md active:scale-[0.98]"
                      >
                        <WhatsAppIcon className="h-6 w-6" />
                        Quote on WhatsApp
                      </a>
                      <a
                        href="tel:+27676014490"
                        className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-amber-600 px-4 text-base font-semibold text-amber-700 active:scale-[0.98]"
                      >
                        <Phone className="h-5 w-5" />
                        Call 067 601 4490
                      </a>

                      <div>
                        <details className={accordion} open>
                          <summary className={summary}>
                            Door Services (all) <ChevronDown className="h-5 w-5 text-slate-500 transition-transform" />
                          </summary>
                          <div className="pb-3 pl-3">
                            {doorServices.map((door) => (
                              <Link key={door.href} href={door.href} className={subLink} onClick={() => setIsOpen(false)}>
                                {door.name}
                              </Link>
                            ))}
                          </div>
                        </details>

                        <details className={accordion}>
                          <summary className={summary}>
                            Granite Cutting & Stone (all) <ChevronDown className="h-5 w-5 text-slate-500 transition-transform" />
                          </summary>
                          <div className="pb-3 pl-3">
                            {graniteServices.map((g) => (
                              <Link key={g.href} href={g.href} className={subLink} onClick={() => setIsOpen(false)}>
                                {g.name}
                              </Link>
                            ))}
                          </div>
                        </details>

                        <details className={accordion}>
                          <summary className={summary}>
                            Kitchens, Cupboards & More <ChevronDown className="h-5 w-5 text-slate-500 transition-transform" />
                          </summary>
                          <div className="pb-3 pl-3">
                            {services.map((service) => (
                              <Link key={service.href} href={service.href} className={subLink} onClick={() => setIsOpen(false)}>
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </details>

                        <details className={accordion}>
                          <summary className={summary}>
                            Drywall & Ceilings <ChevronDown className="h-5 w-5 text-slate-500 transition-transform" />
                          </summary>
                          <div className="pb-3 pl-3">
                            {drywallLocations.map((location) => (
                              <Link key={location.href} href={location.href} className={subLink} onClick={() => setIsOpen(false)}>
                                {location.name}
                              </Link>
                            ))}
                          </div>
                        </details>

                        <details className={accordion}>
                          <summary className={summary}>
                            Areas We Serve <ChevronDown className="h-5 w-5 text-slate-500 transition-transform" />
                          </summary>
                          <div className="pb-3 pl-3">
                            {areas.map((area) => (
                              <Link key={area.href} href={area.href} className={subLink} onClick={() => setIsOpen(false)}>
                                {area.name}
                              </Link>
                            ))}
                          </div>
                        </details>

                        {[
                          { name: "Portfolio", href: "/portfolio" },
                          { name: "About", href: "/about" },
                          { name: "Blog", href: "/blog" },
                          { name: "FAQ", href: "/faq" },
                          { name: "For Tradesmen", href: "/for-tradesmen" },
                        ].map((l) => (
                          <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setIsOpen(false)}
                            className="flex min-h-[48px] items-center border-b border-slate-200 text-base font-semibold text-slate-900 hover:text-amber-600"
                          >
                            {l.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </ScrollArea>

                  <div className="border-t bg-slate-50 p-4">
                    <Button asChild className="h-12 w-full bg-amber-600 text-base hover:bg-amber-700">
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        Get Free Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile quick-service strip: always visible, swipe sideways */}
      <div className="border-t bg-white lg:hidden">
        <div className="container mx-auto px-3 sm:px-4">
          <nav aria-label="Popular services" className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto px-1 py-2">
            {chipLinks.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className={`flex-shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                  c.hot
                    ? "border-amber-500 bg-amber-500 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700 active:bg-amber-50"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
