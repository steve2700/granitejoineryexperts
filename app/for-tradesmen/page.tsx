import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BellRing,
  CreditCard,
  Download,
  FileText,
  Mic,
  Send,
  Smartphone,
  Target,
  Eye,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { YeboCTA } from "@/components/yebo-cta"
import { QUOTE_TEMPLATE_PDF, YEBO_DISCLOSURE, YEBO_PRICE, YEBO_TAGLINE, yeboLink } from "@/lib/yebo"

const PAGE_URL = "https://granitecarpentry.co.za/for-tradesmen"

export const metadata: Metadata = {
  title: "Quoting & Invoicing for Tradesmen in South Africa | Yebo Invoices",
  description:
    "How Granite Carpentry sends clear quotes and gets paid faster with Yebo Invoices. Voice-note quotes, WhatsApp sending, online acceptance and card or instant EFT payments for South African tradesmen.",
  keywords:
    "quoting software South Africa, invoicing app for tradesmen, carpenter invoice app, quote template South Africa, WhatsApp quotes, Yebo Invoices",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Quoting & Invoicing for Tradesmen in South Africa | Yebo Invoices",
    description: "Send clear quotes, get the yes, and get paid faster. The tool Granite Carpentry uses every day.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Granite Carpentry and Yebo Invoices" }],
  },
}

const features = [
  {
    icon: Mic,
    title: "Quote by voice note or typing",
    text: "Say what the job involves or type it in. You get a draft quote to review before it goes out.",
  },
  {
    icon: Send,
    title: "Send by WhatsApp, email or link",
    text: "Quotes reach your client where they already are, as a PDF or a shareable link.",
  },
  {
    icon: Eye,
    title: "See when it is opened",
    text: "Know when a client opens, accepts or pays a document, so you know when to follow up.",
  },
  {
    icon: CheckCircle,
    title: "Clients accept online",
    text: "A tap to accept, and the accepted quote turns into an invoice with due date and EFT details.",
  },
  {
    icon: CreditCard,
    title: "Get paid by card or instant EFT",
    text: "Clients can pay invoices online through PayFast, and receive a receipt automatically.",
  },
  {
    icon: BellRing,
    title: "Automatic reminders",
    text: "Follow-ups go out for quotes and invoices that go quiet, so you stop chasing by hand.",
  },
  {
    icon: Target,
    title: "Monthly targets",
    text: "Track quotes sent and money collected against your own goals.",
  },
  {
    icon: Smartphone,
    title: "Works from your phone",
    text: "Built for people on site. Add your logo and colours, show VAT if you are VAT registered, and download PDFs.",
  },
]

const steps = [
  {
    title: "Tell it about the job",
    text: "Record a voice note or type the details while you are still on site with the client.",
  },
  {
    title: "Review and send",
    text: "Check the draft, then send it by WhatsApp, email or link. Your logo and details are already on it.",
  },
  {
    title: "Get the yes, then get paid",
    text: "The client accepts online, the quote becomes an invoice, and payment and reminders are tracked for you.",
  },
]

const faqs = [
  {
    question: "Who is Yebo Invoices for?",
    answer:
      "South African small business owners who quote and invoice on the move, such as carpenters, plumbers, painters, electricians, builders and handymen.",
  },
  {
    question: "How much does Yebo Invoices cost?",
    answer: `Yebo Pro is ${YEBO_PRICE} and includes all features with no usage tiers. There is no free plan. You can cancel at any time and keep access until the end of the month you have paid for.`,
  },
  {
    question: "Can my clients pay online?",
    answer:
      "Yes. Clients can pay invoices by card or instant EFT through PayFast, and they receive a receipt when they pay.",
  },
  {
    question: "Do I need to be VAT registered?",
    answer:
      "No. Yebo shows VAT on your quotes and invoices if your business is VAT registered, and leaves it off if it is not.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

export default function ForTradesmenPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 text-white lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="rounded-xl bg-[#fcf8ed] p-2">
                <Image src="/logo-mark.png" alt="Granite Carpentry logo" width={992} height={820} className="h-14 w-auto" />
              </div>
              <span className="text-2xl text-slate-400" aria-hidden="true">
                +
              </span>
              <Image
                src="/yebo-logo.svg"
                alt="Yebo Invoices logo"
                width={72}
                height={72}
                unoptimized
                className="h-[72px] w-[72px]"
              />
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">For tradesmen · Sponsored partner</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
              Quote clearly. <span className="text-[#f26b38]">Get the yes.</span>
            </h1>
            <p className="mx-auto mb-4 max-w-2xl text-xl leading-relaxed text-slate-300">{YEBO_TAGLINE}.</p>
            <p className="mx-auto mb-8 max-w-2xl text-sm text-slate-400">{YEBO_DISCLOSURE}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#f26b38] text-white hover:bg-[#e05a28]">
                <a href={yeboLink("for-tradesmen-hero")} target="_blank" rel="noopener">
                  Get started with Yebo Invoices
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-500 bg-transparent text-white hover:bg-slate-800 hover:text-white"
              >
                <a href={QUOTE_TEMPLATE_PDF} download>
                  <Download className="mr-2 h-5 w-5" />
                  Free quote template
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why we use it */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">Why a carpentry company is telling you this</h2>
            <p className="mb-4 text-lg leading-relaxed text-slate-700">
              Granite Carpentry is an official partner of Yebo Invoices, and we are sponsored by them. We use it to get
              quotes to clients quickly, so they do not wait days for a price. Since we started doing that, more of our
              quotes have turned into booked jobs. A clear quote sent while you are still standing in the client's
              kitchen wins more work than a perfect one sent three days later, and an invoice that is easy to pay gets
              paid sooner.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              If you run a trade business in South Africa, you probably have the same problem: you are great with your
              hands, and paperwork eats your evenings. This page shows what we use, what it costs and where to start. Because we are sponsored, we want you to know that up front.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">How it works</h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <Card key={step.title} className="border-slate-200">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#f26b38] font-bold text-white">
                    {i + 1}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600">{step.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900">What you get</h2>
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Card key={f.title} className="border-slate-200 transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <f.icon className="mb-4 h-8 w-8 text-[#f26b38]" aria-hidden="true" />
                  <h3 className="mb-2 font-semibold text-slate-900">{f.title}</h3>
                  <p className="text-sm text-slate-600">{f.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price + free resources */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <Card className="border-2 border-[#f26b38]">
              <CardContent className="p-8">
                <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-[#f26b38]">Yebo Pro</p>
                <p className="mb-4 text-4xl font-bold text-slate-900">
                  R199<span className="text-lg font-normal text-slate-500"> / month</span>
                </p>
                <ul className="mb-6 space-y-2 text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" /> All features, no usage tiers
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" /> Cancel any time
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" /> Keep access until the end of
                    the month you paid for
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#f26b38] text-white hover:bg-[#e05a28]">
                  <a href={yeboLink("for-tradesmen-pricing")} target="_blank" rel="noopener">
                    Get started
                  </a>
                </Button>
                <p className="mt-3 text-xs text-slate-500">There is no free plan. Prices are set by Yebo Invoices.</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="p-8">
                <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-amber-700">Free for everyone</p>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">Not ready yet? Start with our free resources</h3>
                <ul className="mb-6 space-y-3">
                  <li>
                    <a
                      href={QUOTE_TEMPLATE_PDF}
                      download
                      className="flex items-start gap-2 font-medium text-slate-900 hover:text-amber-700"
                    >
                      <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                      Carpentry quote template (PDF, with a worked example)
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/blog/how-to-write-a-carpentry-quote-south-africa"
                      className="flex items-start gap-2 font-medium text-slate-900 hover:text-amber-700"
                    >
                      <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                      How to write a carpentry quote in South Africa
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/how-to-get-paid-faster-as-a-tradesman-south-africa"
                      className="flex items-start gap-2 font-medium text-slate-900 hover:text-amber-700"
                    >
                      <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                      How to get paid faster as a tradesman
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Questions tradesmen ask</h2>
            <dl className="space-y-6">
              {faqs.map((f) => (
                <div key={f.question} className="rounded-lg border border-slate-200 p-6">
                  <dt className="mb-2 text-lg font-semibold text-slate-900">{f.question}</dt>
                  <dd className="text-slate-700">{f.answer}</dd>
                </div>
              ))}
            </dl>
            <YeboCTA medium="for-tradesmen-footer" heading="Ready to quote faster?" />
            <p className="text-center text-sm text-slate-500">
              Looking for a carpenter instead?{" "}
              <Link href="/contact" className="text-amber-700 underline underline-offset-2">
                Get a free quote from Granite Carpentry
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
