import type { Metadata } from "next"
import Link from "next/link"
import { Callout, GuideLayout, H2, OL, UL } from "@/components/guide-layout"
import { QUOTE_TEMPLATE_PDF } from "@/lib/yebo"

const SLUG = "how-to-write-a-carpentry-quote-south-africa"
const TITLE = "How to Write a Carpentry Quote in South Africa (Free Template)"
const INTRO =
  "A clear quote wins the job, protects you from arguments later and gets you paid on time. Here is exactly what to put in one, with a worked example and a free template."

export const metadata: Metadata = {
  title: TITLE,
  description:
    "What to include in a carpentry quote in South Africa: scope, materials, labour, VAT, deposit and payment terms. Includes a worked example and a free quote template PDF.",
  keywords:
    "carpentry quote template South Africa, how to write a quote, quotation for carpenter, tradesman quote template, quote with VAT South Africa",
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
      image="/carpenter-johannesburg-installing-kitchen-cupboards.jpg"
      imageAlt="Carpenter in Johannesburg installing kitchen cupboards"
      publishedAt="2026-10-13"
      readTime="7 min read"
      ctaMedium="guide-quote"
      related={[
        { href: "/blog/how-to-get-paid-faster-as-a-tradesman-south-africa", title: "How to get paid faster as a tradesman" },
        { href: "/for-tradesmen", title: "How Granite Carpentry sends quotes and invoices" },
      ]}
    >
      <p>
        Most tradesmen lose jobs for the same boring reason: the quote arrived late, or it was so vague that the client
        did not know what they were agreeing to. A good quote takes a few minutes longer to write and saves you hours
        of back-and-forth.
      </p>

      <H2>What every carpentry quote should include</H2>
      <OL>
        <li>
          <strong>Your business details.</strong> Business name, phone number, email and, if you are VAT registered,
          your VAT number.
        </li>
        <li>
          <strong>The client and the site.</strong> Name, contact details and the address where the work will be done.
        </li>
        <li>
          <strong>A quote number and date.</strong> It makes the job easy to find later and turns the quote into an
          invoice without confusion.
        </li>
        <li>
          <strong>How long the quote is valid.</strong> Material prices change. Say something like "valid for 14 days".
        </li>
        <li>
          <strong>The scope of work, in plain words.</strong> What you will build, fit or fix, and where. "Supply and
          install 6 base units and 4 wall units in the kitchen" beats "kitchen cupboards".
        </li>
        <li>
          <strong>Materials and labour as separate lines.</strong> Quantities, unit prices and totals. Clients trust
          what they can see.
        </li>
        <li>
          <strong>What is not included.</strong> Plumbing connections, electrical work, painting, removing old units,
          rubble removal. Write down what you are not doing as clearly as what you are.
        </li>
        <li>
          <strong>Timeline.</strong> Expected start date and how long it should take.
        </li>
        <li>
          <strong>Deposit and payment terms.</strong> How much upfront, when the balance is due and how to pay (EFT
          details, card or instant EFT).
        </li>
        <li>
          <strong>Acceptance.</strong> A signature line, or a link where the client can accept online.
        </li>
      </OL>

      <H2>How to price the job</H2>
      <p>Whatever you charge, build the price from the same parts every time:</p>
      <UL>
        <li>
          <strong>Materials</strong>, including offcuts and waste. Add a sensible allowance for cutting loss.
        </li>
        <li>
          <strong>Labour</strong>: your time and anyone working for you, for the full job, not just the fitting.
        </li>
        <li>
          <strong>Transport, hire and consumables</strong>: fuel, delivery, blades, glue, screws, skip hire.
        </li>
        <li>
          <strong>Your margin</strong>: the part that keeps the business going when something takes longer than planned.
        </li>
      </UL>

      <Callout title="Worked example (illustrative numbers only)">
        <p className="mb-2">A kitchen cupboard installation quote might look like this:</p>
        <ul className="space-y-1">
          <li>Materials: R18,500</li>
          <li>Labour: R14,000</li>
          <li>Transport and waste removal: R1,500</li>
          <li>
            <strong>Subtotal: R34,000</strong>
          </li>
          <li>VAT at 15%: R5,100</li>
          <li>
            <strong>Total: R39,100</strong>
          </li>
          <li>Deposit of 50% to book the job: R19,550</li>
        </ul>
        <p className="mt-2">These figures only show the layout. Your prices depend on your costs and your market.</p>
      </Callout>

      <H2>VAT on quotes</H2>
      <p>
        VAT in South Africa is 15%. If your business is VAT registered, your quote should show the VAT amount and your
        VAT number, and it should be clear whether the total includes VAT. Registration becomes compulsory when your
        taxable turnover goes above R1 million in a 12-month period, and you can register voluntarily below that.
        Check the current rules with SARS or your accountant, because thresholds can change.
      </p>

      <H2>Seven quote mistakes that cost you money</H2>
      <UL>
        <li>A lump sum with no breakdown, which invites "can you do it cheaper?"</li>
        <li>No validity date, so the client accepts six months later at old prices.</li>
        <li>No exclusions, so you end up doing extra work for free.</li>
        <li>No deposit, so you carry the cost of materials alone.</li>
        <li>Sending it days after the visit, by which time another carpenter has already replied.</li>
        <li>Never following up. A quick WhatsApp two or three days later often decides the job.</li>
        <li>Not keeping a copy, so you cannot prove what was agreed.</li>
      </UL>

      <H2>Speed matters as much as detail</H2>
      <p>
        The best time to send a quote is while the client is still thinking about the job. That means writing it on
        your phone, on site or in the bakkie, not that night at the kitchen table. Tools that turn a quick voice note
        into a draft quote, like Yebo Invoices, exist for exactly this reason.
      </p>

      <Callout title="Free download">
        <p>
          Grab our{" "}
          <a href={QUOTE_TEMPLATE_PDF} download className="font-medium text-amber-700 underline underline-offset-2">
            carpentry quote template (PDF)
          </a>
          . It has a worked example and a checklist to run through before you hit send. See also{" "}
          <Link
            href="/blog/how-to-get-paid-faster-as-a-tradesman-south-africa"
            className="font-medium text-amber-700 underline underline-offset-2"
          >
            how to get paid faster as a tradesman
          </Link>
          .
        </p>
      </Callout>
    </GuideLayout>
  )
}
