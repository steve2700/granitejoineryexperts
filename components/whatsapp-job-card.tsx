"use client"

import { useState } from "react"
import Image from "next/image"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

const WHATSAPP_NUMBER = "27676014490"

const services = [
  { name: "Door Installation", hot: true },
  { name: "Granite Cutting & Installation", hot: true },
  { name: "Kitchen Renovation", hot: false },
  { name: "Built-in Cupboards", hot: false },
  { name: "Quartz Countertops", hot: false },
  { name: "Something else", hot: false },
]

const whens = ["As soon as possible", "This week", "This month", "Just getting prices"]

const areas = [
  "Johannesburg South",
  "Sandton & Rosebank",
  "Randburg & Fourways",
  "Kempton Park & Boksburg",
  "Pretoria & Centurion",
  "Midrand & Edenvale",
  "Roodepoort & Krugersdorp",
  "Other area (I will say which)",
]

/**
 * WhatsApp job card. No API, no server: the visitor picks the job, the card builds
 * a ready-to-send message and opens WhatsApp with it, addressed to Granite Carpentry.
 */
export function WhatsAppJobCard() {
  const [service, setService] = useState("")
  const [when, setWhen] = useState("")
  const [area, setArea] = useState("")
  const [name, setName] = useState("")
  const [details, setDetails] = useState("")

  const lines = [
    "Hi Granite Carpentry, I would like a quote please.",
    service && `Job: ${service}`,
    area && `Area: ${area}`,
    when && `When: ${when}`,
    name.trim() && `Name: ${name.trim()}`,
    details.trim() && `Details: ${details.trim()}`,
  ].filter(Boolean) as string[]

  const message = lines.join("\n")
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  const ready = Boolean(service)

  const progress = (service ? 40 : 0) + (area ? 20 : 0) + (when ? 20 : 0) + (name.trim() || details.trim() ? 20 : 0)

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
      {/* WhatsApp-style header */}
      <div className="flex items-center gap-3 bg-[#075E54] px-5 py-4 text-white">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fcf8ed]">
          <Image src="/logo-mark.png" alt="" width={992} height={820} className="h-7 w-auto" />
        </div>
        <div className="flex-1">
          <p className="font-semibold leading-tight">Send us your job on WhatsApp</p>
          <p className="text-sm text-green-100">Pick, tap send, and your chat opens</p>
        </div>
        <WhatsAppIcon className="wa-float h-8 w-8 text-[#25D366]" />
      </div>

      {/* Progress */}
      <div className="h-1.5 bg-slate-100" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
        <div
          className="h-full bg-[#25D366] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-7 p-5 sm:p-7">
        {/* Step 1 */}
        <fieldset>
          <legend className="mb-3 text-base font-semibold text-slate-800">
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-sm text-white">
              1
            </span>
            What do you need done?
          </legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((s) => {
              const active = service === s.name
              return (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => setService(s.name)}
                  aria-pressed={active}
                  className={`relative rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] ${
                    active
                      ? "border-[#25D366] bg-green-50 text-slate-900 shadow-md"
                      : "border-slate-200 bg-white text-slate-700 hover:border-green-300"
                  }`}
                >
                  {s.name}
                  {s.hot && (
                    <span className="mt-1 block text-xs font-semibold text-amber-700">Most requested this year</span>
                  )}
                </button>
              )
            })}
          </div>
        </fieldset>

        {/* Step 2 */}
        <fieldset className={`transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-50"}`}>
          <legend className="mb-3 text-base font-semibold text-slate-800">
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-sm text-white">
              2
            </span>
            Where and when?
          </legend>
          <label htmlFor="wa-area" className="sr-only">
            Your area
          </label>
          <select
            id="wa-area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="mb-3 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 transition-colors focus:border-[#25D366] focus:outline-none"
          >
            <option value="">Choose your area</option>
            {areas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap gap-2">
            {whens.map((w) => {
              const active = when === w
              return (
                <button
                  key={w}
                  type="button"
                  onClick={() => setWhen(w)}
                  aria-pressed={active}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] ${
                    active
                      ? "scale-105 border-[#25D366] bg-[#25D366] text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-green-300"
                  }`}
                >
                  {w}
                </button>
              )
            })}
          </div>
        </fieldset>

        {/* Step 3 */}
        <fieldset className={`transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-50"}`}>
          <legend className="mb-3 text-base font-semibold text-slate-800">
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-sm text-white">
              3
            </span>
            Anything we should know? <span className="font-normal text-slate-500">(optional)</span>
          </legend>
          <label htmlFor="wa-name" className="sr-only">
            Your name
          </label>
          <input
            id="wa-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            className="mb-3 w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm transition-colors focus:border-[#25D366] focus:outline-none"
          />
          <label htmlFor="wa-details" className="sr-only">
            Job details
          </label>
          <textarea
            id="wa-details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={3}
            placeholder="For example: 4 interior doors to hang, or a kitchen top that needs cutting for a hob and sink"
            className="w-full resize-none rounded-xl border-2 border-slate-200 px-4 py-3 text-sm transition-colors focus:border-[#25D366] focus:outline-none"
          />
          <p className="mt-2 text-xs text-slate-500">
            Tip: once WhatsApp opens, attach photos of the space. It helps us quote faster.
          </p>
        </fieldset>

        {/* Live preview of the WhatsApp message */}
        <div className="rounded-xl bg-[#efeae2] p-4" aria-live="polite">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Your message</p>
          {ready ? (
            <div className="wa-pop ml-auto max-w-[92%] whitespace-pre-line break-words rounded-lg rounded-tr-none bg-[#d9fdd3] px-3.5 py-2.5 text-sm text-slate-800 shadow-sm">
              {message}
            </div>
          ) : (
            <div className="flex w-fit items-center gap-1.5 rounded-lg rounded-tl-none bg-white px-4 py-3 shadow-sm">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="wa-dot h-2 w-2 rounded-full bg-slate-400"
                  style={{ animationDelay: `${i * 0.18}s` }}
                />
              ))}
              <span className="ml-2 text-xs text-slate-500">Choose a job above to start your message</span>
            </div>
          )}
        </div>

        {/* Send */}
        <a
          href={ready ? href : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!ready}
          onClick={(e) => {
            if (!ready) e.preventDefault()
          }}
          className={`flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-lg font-bold text-white transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300 ${
            ready
              ? "wa-ring bg-[#25D366] shadow-lg hover:scale-[1.02] hover:bg-[#1ebe5b]"
              : "cursor-not-allowed bg-slate-300"
          }`}
        >
          <WhatsAppIcon className="h-7 w-7" />
          {ready ? "Send on WhatsApp" : "Choose a job to continue"}
        </a>
        <p className="-mt-3 text-center text-xs text-slate-500">
          Nothing is stored on this website. Your message opens in WhatsApp, and you press send.
        </p>
      </div>
    </div>
  )
}
