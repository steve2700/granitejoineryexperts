import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://granitecarpentry.co.za"

  // Static pages
  const staticPages = ["", "/about", "/contact", "/portfolio", "/blog", "/faq", "/privacy", "/terms", "/for-tradesmen"]

  const servicePages = [
    "/kitchen-renovations",
    "/kitchen-renovation-cost-johannesburg",
    "/built-in-cupboards",
    "/kitchen-cupboards", // Added kitchen cupboards page
    "/bathroom-renovations", // Added bathroom renovations page
    "/quartz-granite",
    "/granite-countertops",
    "/quartz-countertops",
    "/granite-supply-and-installation", // Added two new granite service pages
    "/granite-installers-sandton",
    "/granite-installers-boksburg",
    "/granite-installers-pretoria",
    "/granite-installers-centurion",
    "/granite-installers-fourways",
    "/granite-installers-midrand",
    "/decking-flooring",
    "/drywall-ceilings",
    "/granite-countertops-prices-johannesburg",
    "/countertop-cutting-service-gauteng",
    "/custom-built-in-cupboards-johannesburg",
    "/same-day-kitchen-repairs-gauteng",
    "/complete-home-renovations-sandton",
    "/waterproofing-repairs-gauteng",
    "/painting-services-johannesburg",
  ]

  const doorPages = [
    "/door-installation",            // Main hub page
    "/door-hanging-johannesburg",
    "/emergency-door-repair-gauteng",
    "/pivot-doors",
    "/barn-doors",
    "/security-doors",
    "/french-doors",
    "/wooden-doors",
    "/pivot-doors-sandton",
    "/barn-doors-cape-town",
    "/security-doors-johannesburg",
    "/solid-wood-doors-pretoria",
    "/french-doors-sandton",
    "/bathroom-door-replacement-gauteng",
    "/cupboard-door-repair-gauteng",
    "/door-alignment-repair-gauteng",
    "/door-handle-replacement-gauteng",
    "/door-lock-replacement-gauteng",
    "/door-repair-gauteng",
    "/move-out-repairs-gauteng",
    "/rental-property-repairs-gauteng",
    "/same-day-carpenter-gauteng",
    "/24-hour-emergency-carpenter-johannesburg",

  ]

  const drywallLocationPages = [
    "/drywall-sandton",
    "/ceiling-repairs-randburg",
    "/drywall-rosebank",
    "/suspended-ceilings-johannesburg",
    "/drywalling-contractors-johannesburg",
    "/drywall-fourways",
    "/ceiling-repairs-sandton",
    "/drywall-midrand",
    "/ceiling-repairs-vereeniging",
    "/drywall-johannesburg-south",
    "/drywall-bryanston",
    "/suspended-ceilings-sandton",
    "/drywall-centurion",
    "/ceiling-repairs-pretoria",
    "/drywall-edenvale",
    "/ceiling-installation-bryanston",
    "/drywall-pretoria",
    "/ceiling-repairs-centurion",
    "/drywall-boksburg",
    "/ceiling-installation-edenvale",
  ]

  // Area pages - all 24 areas including new Johannesburg + areas hub page
  const areaPages = [
    "/areas", // Hub page for all service areas
    "/areas/johannesburg",
    "/areas/johannesburg-south",
    "/areas/sandton",
    "/areas/randburg",
    "/areas/pretoria",
    "/areas/centurion",
    "/areas/midrand",
    "/areas/kempton-park",
    "/areas/roodepoort",
    "/areas/fourways",
    "/areas/edenvale",
    "/areas/boksburg",
    "/areas/alberton",
    "/areas/benoni",
    "/areas/germiston",
    "/areas/springs",
    "/areas/vanderbijlpark",
    "/areas/vereeniging",
    "/areas/nigel",
    "/areas/heidelberg",
    "/areas/carletonville",
    "/areas/krugersdorp",
    "/areas/westonaria",
    "/areas/bedfordview",
  ]
  //carpenter pages suburbs there make money 
  const carpenterPages = [
  "/carpenter-rosebank",
  "/carpenter-woodmead",
  "/carpenter-hyde-park",
  "/carpenter-illovo",
  "/carpenter-morningside",
  "/carpenter-rivonia",
  "/carpenter-bryanston",
  "/carpenter-sunninghill",
  "/carpenter-sandhurst",
]


  // Blog pages
  const blogPages = [
    "/blog/how-to-write-a-carpentry-quote-south-africa",
    "/blog/how-to-get-paid-faster-as-a-tradesman-south-africa",
  ]

  const allPages = [...staticPages, ...servicePages, ...doorPages, ...drywallLocationPages, ...areaPages, ...carpenterPages,...blogPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency:
      page === ""
        ? "daily"
        : page.startsWith("/blog")
          ? "weekly"
          : page === "/areas" || page.startsWith("/areas/")
            ? "weekly"
            : page.startsWith("/drywall-") ||
                page.startsWith("/ceiling-repairs-") ||
                page.startsWith("/suspended-ceilings-") ||
                page.startsWith("/drywalling-contractors-") ||
                page.startsWith("/ceiling-installation-")
              ? "weekly"
              : page.startsWith("/door-") ||
                  page.startsWith("/pivot-doors") ||
                  page.startsWith("/barn-doors") ||
                  page.startsWith("/security-doors") ||
                  page.startsWith("/french-doors") ||
                  page.startsWith("/wooden-doors") ||
                  page.startsWith("/solid-wood-doors")
                ? "weekly"
                : page === "/kitchen-renovations" ||
                    page === "/built-in-cupboards" ||
                    page === "/quartz-granite" ||
                    page === "/plumbing" ||
                    page === "/decking-flooring" ||
                    page === "/drywall-ceilings" ||
                    page === "/granite-countertops" ||
                    page === "/quartz-countertops" ||
                    page === "/granite-supply-and-installation" ||
                    page === "/granite-installers-sandton" ||
                    page === "/granite-installers-boksburg" ||
                    page === "/granite-installers-pretoria" ||
                    page === "/granite-installers-centurion" ||
                    page === "/granite-installers-fourways" ||
                    page === "/granite-installers-midrand"
                  ? "monthly"
                  : "yearly",
    priority:
      page === ""
        ? 1
        : page === "/areas"
          ? 0.9
          : page.startsWith("/areas/")
            ? 0.9
            : page.startsWith("/door-") ||
                page.startsWith("/pivot-doors") ||
                page.startsWith("/barn-doors") ||
                page.startsWith("/security-doors") ||
                page.startsWith("/french-doors") ||
                page.startsWith("/wooden-doors") ||
                page.startsWith("/solid-wood-doors")
              ? 0.85
              : page.startsWith("/drywall-") ||
                  page.startsWith("/ceiling-repairs-") ||
                  page.startsWith("/suspended-ceilings-") ||
                  page.startsWith("/drywalling-contractors-") ||
                  page.startsWith("/ceiling-installation-")
                ? 0.85
                : page === "/kitchen-renovations" ||
                    page === "/built-in-cupboards" ||
                    page === "/quartz-granite" ||
                    page === "/plumbing" ||
                    page === "/decking-flooring" ||
                    page === "/drywall-ceilings" ||
                    page === "/granite-countertops" ||
                    page === "/quartz-countertops" ||
                    page === "/granite-supply-and-installation" ||
                    page === "/granite-installers-sandton" ||
                    page === "/granite-installers-boksburg" ||
                    page === "/granite-installers-pretoria" ||
                    page === "/granite-installers-centurion" ||
                    page === "/granite-installers-fourways" ||
                    page === "/granite-installers-midrand"
                  ? 0.8
                  : page.startsWith("/blog")
                    ? 0.7
                    : 0.6,
  }))
}
