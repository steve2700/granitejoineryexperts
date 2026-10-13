import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { YEBO_TAGLINE, YEBO_PRICE, YEBO_DISCLOSURE, QUOTE_TEMPLATE_PDF, yeboLink } from "@/lib/yebo"

interface YeboCTAProps {
  /** Which page the visitor came from, used in the tracking link (utm_medium) */
  medium: string
  heading?: string
  showTemplate?: boolean
}

/** Call-to-action card promoting Yebo Invoices. Used on tradesperson pages and guides only. */
export function YeboCTA({
  medium,
  heading = "Send clear quotes. Get paid faster.",
  showTemplate = true,
}: YeboCTAProps) {
  return (
    <section
      aria-label="Yebo Invoices"
      className="my-12 rounded-2xl bg-slate-900 p-6 text-white shadow-lg sm:p-8"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <Image
          src="/yebo-logo.svg"
          alt="Yebo Invoices logo"
          width={72}
          height={72}
          unoptimized
          className="h-16 w-16 flex-shrink-0 sm:h-[72px] sm:w-[72px]"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{heading}</h2>
          <p className="mt-2 text-slate-300">{YEBO_TAGLINE}.</p>
          <p className="mt-1 text-sm text-slate-400">
            {YEBO_DISCLOSURE} {YEBO_PRICE}, all features, cancel any time.
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="bg-[#f26b38] text-white hover:bg-[#e05a28]">
          <a href={yeboLink(medium)} target="_blank" rel="noopener">
            Get started with Yebo Invoices
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        {showTemplate && (
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-slate-600 bg-transparent text-white hover:bg-slate-800 hover:text-white"
          >
            <a href={QUOTE_TEMPLATE_PDF} download>
              <Download className="mr-2 h-4 w-4" />
              Free quote template (PDF)
            </a>
          </Button>
        )}
      </div>
    </section>
  )
}

export function YeboBackLink() {
  return (
    <Link href="/for-tradesmen" className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800">
      See how Granite Carpentry sends quotes and invoices
    </Link>
  )
}
