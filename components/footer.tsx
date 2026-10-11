import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Star, Award, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Kitchen Renovations", href: "/kitchen-renovations" },
    { name: "Kitchen Renovations Cost Johannesburg", href: "/kitchen-renovation-cost-johannesburg"},
    { name: "Kitchen Cupboards", href: "/kitchen-cupboards" }, 
    { name: "Bathroom Renovations", href: "/bathroom-renovations" }, 
    { name: "Built-in Cupboards", href: "/built-in-cupboards" },
    { name: "Granite & Quartz", href: "/quartz-granite" },
    { name: "Granite Countertops", href: "/granite-countertops" },
    { name: "Quartz Countertops", href: "/quartz-countertops" },
    { name: "Granite Supply & Installation", href: "/granite-supply-and-installation" },
    { name: "Granite Installers Sandton", href: "/granite-installers-sandton" },
    { name: "Professional Plumbing", href: "/plumbing" },
    { name: "Drywall & Ceilings", href: "/drywall-ceilings" },
    { name: "Decking & Flooring", href: "/decking-flooring" },
    { name: "Door Installation", href: "/door-installation" },
  ]

  const doorServices = [
    { name: "Pivot Doors", href: "/pivot-doors" },
    { name: "Barn Doors", href: "/barn-doors" },
    { name: "Security Doors", href: "/security-doors" },
    { name: "French Doors", href: "/french-doors" },
    { name: "Wooden Doors", href: "/wooden-doors" },
    { name: "Pivot Doors Sandton", href: "/pivot-doors-sandton" },
    { name: "French Doors Sandton", href: "/french-doors-sandton" },
    { name: "Barn Doors Cape Town", href: "/barn-doors-cape-town" },
    { name: "Security Doors JHB", href: "/security-doors-johannesburg" },
    { name: "Wood Doors Pretoria", href: "/solid-wood-doors-pretoria" },
  ]

  const drywallServices = [
    { name: "Drywall Sandton", href: "/drywall-sandton" },
    { name: "Ceiling Repairs Randburg", href: "/ceiling-repairs-randburg" },
    { name: "Drywall Rosebank", href: "/drywall-rosebank" },
    { name: "Suspended Ceilings JHB", href: "/suspended-ceilings-johannesburg" },
    { name: "Drywalling Contractors", href: "/drywalling-contractors-johannesburg" },
    { name: "Drywall Fourways", href: "/drywall-fourways" },
    { name: "Ceiling Repairs Sandton", href: "/ceiling-repairs-sandton" },
    { name: "Drywall Midrand", href: "/drywall-midrand" },
    { name: "Ceiling Repairs Vereeniging", href: "/ceiling-repairs-vereeniging" },
    { name: "Drywall JHB South", href: "/drywall-johannesburg-south" },
    { name: "Drywall Bryanston", href: "/drywall-bryanston" },
    { name: "Drywall Centurion", href: "/drywall-centurion" },
    { name: "Drywall Pretoria", href: "/drywall-pretoria" },
    { name: "Drywall Edenvale", href: "/drywall-edenvale" },
    { name: "Drywall Boksburg", href: "/drywall-boksburg" },
  ]

  const areas = [
    { name: "Johannesburg", href: "/areas/johannesburg-south" },
    { name: "Sandton", href: "/areas/sandton" },
    { name: "Randburg", href: "/areas/randburg" },
    { name: "Pretoria", href: "/areas/pretoria" },
    { name: "Centurion", href: "/areas/centurion" },
    { name: "Midrand", href: "/areas/midrand" },
    { name: "Krugersdorp", href: "/areas/krugersdorp" },
    { name: "Benoni", href: "/areas/benoni" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      {/* Trust Indicators */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">★★★★★</div>
                <div className="text-sm text-slate-300">5-Star Rated</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">1000+</div>
                <div className="text-sm text-slate-300">Projects Completed</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">24</div>
                <div className="text-sm text-slate-300">Month Warranty</div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">15+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="rounded-lg bg-[#fcf8ed] p-1.5 flex-shrink-0">
                  <Image
                    src="/logo-mark.png"
                    alt="Granite Carpentry logo"
                    width={992}
                    height={820}
                    className="h-9 w-auto"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg text-amber-400">Granite Carpentry</div>
                  <div className="text-sm text-slate-400">& Joinery Experts</div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Johannesburg's #1 rated carpenter and plumber with over 1000+ completed projects. Professional kitchen
                renovations, built-in cupboards, emergency plumbing, and granite installations with 24-month warranty.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <a href="tel:+27676014490" className="hover:text-amber-400 transition-colors">
                    067 601 4490
                  </a>
                  <div className="text-xs text-slate-400">24/7 Emergency Service</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <a href="mailto:info@granitecarpentry.co.za" className="hover:text-amber-400 transition-colors">
                    info@granitecarpentry.co.za
                  </a>
                  <div className="text-xs text-slate-400">Free Quotes Available</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <span>Johannesburg, Gauteng</span>
                  <div className="text-xs text-slate-400">Serving Greater Johannesburg</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <div>
                  <span>Mon-Sat: 7AM-5PM</span>
                  <div className="text-xs text-slate-400">Sunday: Emergency Only</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/granitecarpentry"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/granitecarpentry"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/granite-carpentry"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 group-hover:bg-amber-400 transition-colors"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Door Services */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-6">Door Services</h4>
            <ul className="space-y-3">
              {doorServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 group-hover:bg-amber-400 transition-colors"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-6">Drywall Locations</h4>
            <ul className="space-y-3">
              {drywallServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 group-hover:bg-amber-400 transition-colors"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3 group-hover:bg-amber-400 transition-colors"></span>
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-slate-800 rounded-lg">
              <h5 className="font-semibold text-amber-400 mb-2">Free Service Areas</h5>
              <p className="text-sm text-slate-300">
                We provide free quotes and consultations throughout Johannesburg, Sandton, Randburg, Pretoria,
                Centurion, Midrand, Krugersdorp, and Benoni. Emergency plumbing available 24/7.
              </p>
            </div>
          </div>

          {/* Newsletter & Company */}
          <div>
            <h4 className="text-lg font-semibold text-amber-400 mb-6">Stay Updated</h4>
            <p className="text-slate-300 mb-4">
              Get expert carpentry tips, plumbing advice, project ideas, and special offers delivered to your inbox.
            </p>

            <div className="space-y-3 mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Subscribe to Newsletter</Button>
            </div>

            <div className="space-y-3">
              <h5 className="font-semibold text-amber-400">Company</h5>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-300 hover:text-amber-400 transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm text-center md:text-left">
            <p>© {currentYear} Granite Carpentry & Joinery Experts. All rights reserved.</p>
            <p className="mt-1">
              Professional carpentry & plumbing services in Johannesburg | Licensed & Insured | 24-Month Warranty
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
            <div className="text-slate-400">
              <span className="text-amber-400">★★★★★</span> 5.0 Rating
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-amber-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="font-semibold">24/7 Emergency Carpentry & Plumbing Service Available</span>
            <span className="mx-2">|</span>
            <a href="tel:+27676014490" className="hover:underline font-semibold">
              Call 067 601 4490 Now
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
