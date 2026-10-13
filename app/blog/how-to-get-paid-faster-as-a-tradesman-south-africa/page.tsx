import type { Metadata } from "next"
import Link from "next/link"
import { Callout, GuideLayout, H2, H3, OL, UL } from "@/components/guide-layout"

const SLUG = "how-to-get-paid-faster-as-a-tradesman-south-africa"
const TITLE = "How to Get Paid Faster as a Tradesman in South Africa"
const INTRO =
  "Late payment is the quiet killer of small trade businesses. These practical steps help you collect deposits, invoice quickly and stop chasing clients by hand."

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Practical ways for South African tradesmen to get paid faster: deposits, milestone payments, same-day invoices, easy online payment and automatic reminders.",
  keywords:
    "get paid faster tradesman South Africa, invoice tips for tradesmen, deposit for building work, chase late payment, invoice app South Africa",
  alternates: { canonical: `https://granitecarpentry.co.za/blog/${SLUG}` },
  openGraph: {
    type: "article",
    url: `https://granitecarpentry.co.za/blog/${SLUG}`,
    title: TITLE,
    description: INTRO,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
}

export default function Page() {
  return (
    <GuideLayout
      title={TITLE}
      intro={INTRO}
      slug={SLUG}
      image="/modern-door-installation.jpg"
      imageAlt="Tradesman completing a door installation"
      publishedAt="2026-10-13"
      readTime="6 min read"
      ctaMedium="guide-paid"
      related={[
        { href: "/blog/how-to-write-a-carpentry-quote-south-africa", title: "How to write a carpentry quote in South Africa" },
        { href: "/for-tradesmen", title: "How Granite Carpentry sends quotes and invoices" },
      ]}
    >
      <p>
        Doing the work is only half the job. The other half is turning finished work into money in your account. Most
        payment problems are not about dishonest clients. They happen because the terms were never clear, the invoice
        went out late, or paying was a hassle.
      </p>

      <H2>1. Agree the terms before you start</H2>
      <p>
        Put your payment terms on the quote, so the client accepts them when they accept the job. That means the
        deposit amount, when the balance is due and what happens if payment is late. If it is not in writing, you are
        relying on memory and goodwill.
      </p>

      <H2>2. Take a deposit</H2>
      <p>
        A deposit covers your materials and shows the client is committed. Many tradesmen ask for around half to book a
        job, but the right amount depends on how much material you must buy upfront. Whatever you choose, state it
        clearly on the quote.
      </p>

      <H2>3. Split bigger jobs into milestones</H2>
      <p>For jobs that run over several weeks, tie payments to progress so you are never far ahead of the money:</p>
      <UL>
        <li>Deposit to confirm the job and order materials.</li>
        <li>A second payment when materials are delivered or the main work is half done.</li>
        <li>The balance on completion, once the client has signed off.</li>
      </UL>

      <H2>4. Invoice the same day</H2>
      <p>
        The day you finish is the day the client is happiest with you. Send the invoice before you leave the site or
        that evening, not at the end of the month. Every day you wait is a day closer to the client forgetting how good
        the work was.
      </p>

      <H2>5. Make paying easy</H2>
      <p>People pay what is easy to pay. Put everything they need on the invoice:</p>
      <UL>
        <li>Your bank details and a clear payment reference.</li>
        <li>The due date, written as a date, not "30 days".</li>
        <li>A way to pay straight from the invoice, such as card or instant EFT, if you can offer one.</li>
        <li>An automatic receipt once the money arrives, so the client has proof and you look professional.</li>
      </UL>

      <H2>6. Follow up without the awkwardness</H2>
      <p>
        Chasing money feels uncomfortable, so most people leave it too long. A simple routine removes the emotion:
      </p>
      <OL>
        <li>A friendly reminder a day or two before the due date.</li>
        <li>A short message on the due date with the payment details attached again.</li>
        <li>A firmer message a few days later, quoting the invoice number and amount.</li>
        <li>A phone call, then a formal letter of demand if it drags on. Get legal advice before taking it further.</li>
      </OL>
      <p>
        Automatic reminders help here, because they go out on schedule and nobody has to be the bad guy. Yebo Invoices
        sends follow-ups on quotes and invoices that go quiet, and tells you when a client opens, accepts or pays.
      </p>

      <H2>7. Know who your slow payers are</H2>
      <H3>Keep a simple record</H3>
      <p>
        Note which clients paid on time and which needed chasing. For repeat clients, ask for a larger deposit or
        shorter terms if they are consistently late. For new clients on big jobs, a bigger deposit is a reasonable
        protection.
      </p>

      <Callout title="Quick checklist">
        <ul className="list-disc space-y-1 pl-5">
          <li>Terms are written on the quote</li>
          <li>Deposit received before work starts</li>
          <li>Milestones agreed for long jobs</li>
          <li>Invoice sent the same day the work is finished</li>
          <li>Payment details and due date are on the invoice</li>
          <li>Reminders are scheduled, not remembered</li>
        </ul>
      </Callout>

      <p>
        Next, make sure the quote that started the job is just as clear. Read{" "}
        <Link
          href="/blog/how-to-write-a-carpentry-quote-south-africa"
          className="font-medium text-amber-700 underline underline-offset-2"
        >
          how to write a carpentry quote in South Africa
        </Link>{" "}
        and download the free template.
      </p>
    </GuideLayout>
  )
}
