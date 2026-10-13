"use client"

import { useState } from "react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)

  const whatsappNumber = "+27676014490"
  const message = "Hi! I'm interested in your carpentry services. Can you help me with a quote?"
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 left-0 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg text-center">
            Chat with us on WhatsApp!
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900"></div>
          </div>
        )}

        {/* WhatsApp button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Granite Carpentry on WhatsApp"
          title="Chat on WhatsApp"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5b] focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
        >
          <WhatsAppIcon className="h-8 w-8" />
        </a>
      </div>
    </div>
  )
}
