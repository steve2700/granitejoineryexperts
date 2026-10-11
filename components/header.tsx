"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu, Phone, Mail, MapPin, ChevronDown, Star } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { name: "Kitchen Renovations", href: "/kitchen-renovations" },
     { name: "Kitchen Renovations Cost Johannesburg", href: "/kitchen-renovation-cost-johannesburg" },
    { name: "Kitchen Cupboards", href: "/kitchen-cupboards" }, 
    { name: "Bathroom Renovations", href: "/bathroom-renovations" }, 
    { name: "Built-in Cupboards", href: "/built-in-cupboards" },
    { name: "Quartz & Granite", href: "/quartz-granite" },
    { name: "Granite Countertops", href: "/granite-countertops" },
    { name: "Quartz Countertops", href: "/quartz-countertops" },
    { name: "Granite Supply & Installation", href: "/granite-supply-and-installation" },
    { name: "Granite Installers Sandton", href: "/granite-installers-sandton" }, 
    { name: "Decking & Flooring", href: "/decking-flooring" },
    { name: "Drywall & Ceilings", href: "/drywall-ceilings" },
    { name: "Door Installation", href: "/door-installation" },
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

  const doorServices = [
    { name: "Pivot Doors", href: "/pivot-doors" },
    { name: "Barn Doors", href: "/barn-doors" },
    { name: "Security Doors", href: "/security-doors" },
    { name: "French Doors", href: "/french-doors" },
    { name: "Wooden Doors", href: "/wooden-doors" },
    { name: "Pivot Doors Sandton", href: "/pivot-doors-sandton" },
    { name: "Barn Doors Cape Town", href: "/barn-doors-cape-town" },
    { name: "Security Doors Johannesburg", href: "/security-doors-johannesburg" },
    { name: "Solid Wood Doors Pretoria", href: "/solid-wood-doors-pretoria" },
    { name: "French Doors Sandton", href: "/french-doors-sandton" },
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar - Hidden on small mobile, visible on larger screens */}
      <div className="bg-slate-900 text-white hidden sm:block">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3 text-amber-400" />
                <a href="tel:+27676014490" className="hover:text-amber-400 transition-colors">
                  067 601 4490
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Mail className="h-3 w-3 text-amber-400" />
                <a href="mailto:info@granitecarpentry.co.za" className="hover:text-amber-400 transition-colors">
                  info@granitecarpentry.co.za
                </a>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3 text-amber-400" />
                <span>Serving Greater Johannesburg & Pretoria</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-amber-400 fill-current" />
                <span className="text-amber-400">★★★★★ 5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo - Optimized for mobile */}
          <div className="flex items-center min-w-0 flex-1">
            <Link href="/" className="flex items-center space-x-2 min-w-0">
              <Image
                src="/logo-mark.png"
                alt="Granite Carpentry logo"
                width={992}
                height={820}
                priority
                className="h-9 w-auto sm:h-11 flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <div className="font-bold text-base sm:text-lg text-slate-900 truncate">Granite Carpentry</div>
                <div className="text-xs text-slate-600 hidden sm:block">& Joinery Experts</div>
              </div>
            </Link>
          </div>

          {/* Mobile Contact & CTA - Only on small screens */}
          <div className="flex items-center space-x-2 sm:hidden">
            <a
              href="tel:+27676014490"
              className="flex items-center justify-center h-9 w-9 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
            </a>
            <Button asChild size="sm" className="bg-amber-600 hover:bg-amber-700 text-xs px-3">
              <Link href="/contact">Quote</Link>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors">
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors">
                Services <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
                  <div className="border-t border-slate-200 my-1"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase">Door Services</div>
                  {doorServices.map((door) => (
                    <Link
                      key={door.href}
                      href={door.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                    >
                      {door.name}
                    </Link>
                  ))}
                  <div className="border-t border-slate-200 my-1"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase">Drywall Locations</div>
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

            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors">
                Areas <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 max-h-96 overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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

            <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors">
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link href="/blog" className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors">
              Blog
            </Link>
            <Link href="/faq" className="text-sm font-medium text-slate-700 hover:text-amber-600 transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Desktop CTA & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Button asChild className="hidden sm:inline-flex bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Get Quote</Link>
            </Button>

            {/* Mobile menu trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-slate-700 h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 sm:p-6 border-b bg-slate-50">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                      <Image
                        src="/logo-mark.png"
                        alt="Granite Carpentry logo"
                        width={992}
                        height={820}
                        className="h-9 w-auto"
                      />
                      <div>
                        <div className="font-bold text-base text-slate-900">Granite Carpentry</div>
                        <div className="text-xs text-slate-600">& Joinery Experts</div>
                      </div>
                    </Link>
                  </div>

                  {/* Scrollable Navigation */}
                  <ScrollArea className="flex-1 px-4 sm:px-6">
                    <div className="flex flex-col space-y-6 py-6">
                      <Link
                        href="/"
                        className="text-lg font-medium text-slate-900 hover:text-amber-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Home
                      </Link>

                      <div className="space-y-3">
                        <div className="text-lg font-medium text-slate-900">Services</div>
                        <div className="pl-4 space-y-3 border-l-2 border-amber-100">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block text-sm text-slate-600 hover:text-amber-600 transition-colors py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                          <div className="pt-3 mt-3 border-t border-slate-200">
                            <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Door Services</div>
                            {doorServices.map((door) => (
                              <Link
                                key={door.href}
                                href={door.href}
                                className="block text-sm text-slate-600 hover:text-amber-600 transition-colors py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {door.name}
                              </Link>
                            ))}
                          </div>
                          <div className="pt-3 mt-3 border-t border-slate-200">
                            <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Drywall Locations</div>
                            {drywallLocations.map((location) => (
                              <Link
                                key={location.href}
                                href={location.href}
                                className="block text-sm text-slate-600 hover:text-amber-600 transition-colors py-1"
                                onClick={() => setIsOpen(false)}
                              >
                                {location.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="text-lg font-medium text-slate-900">Areas</div>
                        <div className="pl-4 space-y-3 border-l-2 border-amber-100">
                          {areas.map((area) => (
                            <Link
                              key={area.href}
                              href={area.href}
                              className="block text-sm text-slate-600 hover:text-amber-600 transition-colors py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {area.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/about"
                        className="text-lg font-medium text-slate-900 hover:text-amber-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        About
                      </Link>
                      <Link
                        href="/portfolio"
                        className="text-lg font-medium text-slate-900 hover:text-amber-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Portfolio
                      </Link>
                      <Link
                        href="/blog"
                        className="text-lg font-medium text-slate-900 hover:text-amber-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/faq"
                        className="text-lg font-medium text-slate-900 hover:text-amber-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        FAQ
                      </Link>
                    </div>
                  </ScrollArea>

                  {/* Footer */}
                  <div className="border-t p-4 sm:p-6 space-y-4 bg-slate-50">
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Phone className="h-4 w-4 text-amber-600" />
                      <a href="tel:+27676014490" className="hover:text-amber-600 transition-colors">
                        067 601 4490
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Mail className="h-4 w-4 text-amber-600" />
                      <span>info@granitecarpentry.co.za</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <MapPin className="h-4 w-4 text-amber-600" />
                      <span>Johannesburg & Pretoria</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="text-amber-600 font-medium">★★★★★ 5.0 Rating</span>
                    </div>
                    <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
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
    </header>
  )
}
