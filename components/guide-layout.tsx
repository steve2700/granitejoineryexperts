import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { YeboCTA } from "@/components/yebo-cta"

interface GuideLayoutProps {
  title: string
  intro: string
  slug: string
  image: string
  imageAlt: string
  publishedAt: string // ISO date
  readTime: string
  ctaMedium: string
  related: { href: string; title: string }[]
  children: React.ReactNode
}

const SITE = "https://granitecarpentry.co.za"

export function GuideLayout({
  title,
  intro,
  slug,
  image,
  imageAlt,
  publishedAt,
  readTime,
  ctaMedium,
  related,
  children,
}: GuideLayoutProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: intro,
    image: `${SITE}${image}`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: { "@type": "Organization", name: "Granite Carpentry", url: SITE },
    publisher: {
      "@type": "Organization",
      name: "Granite Carpentry",
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
    },
    mainEntityOfPage: `${SITE}/blog/${slug}`,
  }

  return (
    <article className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-14 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="mb-6 inline-flex items-center text-sm text-slate-300 hover:text-amber-400">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to the blog
            </Link>
            <Badge className="mb-4 block w-fit bg-amber-600 text-white">Guide for tradesmen</Badge>
            <h1 className="mb-4 text-3xl font-bold leading-tight lg:text-5xl">{title}</h1>
            <p className="mb-6 text-lg text-slate-300">{intro}</p>
            <div className="flex items-center gap-5 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(publishedAt).toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={600}
            priority
            className="mb-10 h-64 w-full rounded-xl object-cover sm:h-80"
          />

          <div className="space-y-5 text-lg leading-relaxed text-slate-700">{children}</div>

          <YeboCTA medium={ctaMedium} />

          {related.length > 0 && (
            <aside className="mt-10 border-t border-slate-200 pt-8">
              <h2 className="mb-4 text-xl font-semibold text-slate-900">Keep reading</h2>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="text-amber-700 underline underline-offset-2 hover:text-amber-800">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </div>
    </article>
  )
}

/* Small typographic helpers so guides stay consistent without a typography plugin */
export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="pt-6 text-2xl font-bold text-slate-900 lg:text-3xl">{children}</h2>
)
export const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="pt-2 text-xl font-semibold text-slate-900">{children}</h3>
)
export const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc space-y-2 pl-6 marker:text-amber-600">{children}</ul>
)
export const OL = ({ children }: { children: React.ReactNode }) => (
  <ol className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-amber-600">{children}</ol>
)
export const Callout = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-5">
    <p className="mb-1 font-semibold text-slate-900">{title}</p>
    <div className="text-base text-slate-700">{children}</div>
  </div>
)
