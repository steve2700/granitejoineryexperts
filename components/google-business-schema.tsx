export function GoogleBusinessSchema() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://granitecarpentry.co.za/#business",
    name: "Granite Carpentry",
    alternateName: "Granite Carpentry Johannesburg",
    description:
      "Professional carpenter and granite installation specialists in Johannesburg. Specializing in kitchen renovations, built-in cupboards, granite countertops, decking, flooring, and carpentry training.",
    url: "https://granitecarpentry.co.za",
    logo: {
      "@type": "ImageObject",
      url: "https://granitecarpentry.co.za/logo.png",
      width: 1024,
      height: 1024,
    },
    image: [
      "https://granitecarpentry.co.za/logo.png",
      "https://granitecarpentry.co.za/Kitchen-renovations-sandton.webp",
      "https://granitecarpentry.co.za/granite-installation-Johannesburg.jpg",
      "https://granitecarpentry.co.za/Built-Built-in-Cupboards-Midrand.jpg",
    ],
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
    areaServed: [
      {
        "@type": "City",
        name: "Johannesburg",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      {
        "@type": "City",
        name: "Sandton",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      {
        "@type": "City",
        name: "Randburg",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      {
        "@type": "City",
        name: "Pretoria",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
      {
        "@type": "City",
        name: "Centurion",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -26.2041,
        longitude: 28.0473,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Carpentry and Granite Installation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Renovations",
            description: "Complete kitchen renovation services including custom cabinets and granite countertops",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Built-in Cupboards",
            description: "Custom built-in cupboards and wardrobes for bedrooms, studies, and storage solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Granite & Quartz Installation",
            description: "Professional granite and quartz countertop installation for kitchens and bathrooms",
          },
        },
      ],
    },
    priceRange: "R5000-R100000",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "ZAR",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah Johnson",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Excellent kitchen renovation service. The team was professional, punctual, and delivered exactly what was promised. Highly recommend Granite Carpentry!",
        datePublished: "2024-01-15",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Michael Smith",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Outstanding granite installation work. The countertops look amazing and the installation was flawless. Great value for money.",
        datePublished: "2024-02-20",
      },
    ],
    sameAs: [
      "https://www.facebook.com/granitecarpentry",
      "https://www.instagram.com/granitecarpentry",
      "https://www.linkedin.com/company/granite-carpentry",
    ],
    founder: {
      "@type": "Person",
      name: "Granite Carpentry Team",
    },
    foundingDate: "2020",
    slogan: "Professional Carpentry & Granite Installation Excellence",
    knowsAbout: [
      "Kitchen Renovations",
      "Built-in Cupboards",
      "Granite Installation",
      "Quartz Countertops",
      "Carpentry Services",
      "Home Renovations",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Free Consultation",
        description: "Free home consultation and quote for all carpentry and granite installation services",
        price: "0",
        priceCurrency: "ZAR",
      },
    ],
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://granitecarpentry.co.za/#organization",
    name: "Granite Carpentry",
    url: "https://granitecarpentry.co.za",
    logo: {
      "@type": "ImageObject",
      url: "https://granitecarpentry.co.za/logo.png",
      width: 1024,
      height: 1024,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27676014490",
      contactType: "customer service",
      areaServed: "ZA",
      availableLanguage: ["English", "Afrikaans"],
    },
    sameAs: [
      "https://www.facebook.com/granitecarpentry",
      "https://www.instagram.com/granitecarpentry",
      "https://www.linkedin.com/company/granite-carpentry",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  )
}
