export const YEBO_URL = "https://www.yeboinvoices.com"
export const YEBO_TAGLINE = "Your always-on personal AI co-worker for clear quotes and faster invoicing"
export const YEBO_PRICE = "R199 per month"
export const YEBO_DISCLOSURE = "Granite Carpentry is an official partner of Yebo Invoices and is sponsored by Yebo Invoices."
export const QUOTE_TEMPLATE_PDF = "/downloads/carpentry-quote-template-south-africa.pdf"

/**
 * Link to Yebo Invoices with tracking tags, so you can see in Yebo's analytics
 * which Granite Carpentry page sent the visitor.
 * `path` is "/app" (default, the Yebo app) or "" for the Yebo home page.
 */
export function yeboLink(medium: string, path: "" | "/app" | "/login" = "/app") {
  return `${YEBO_URL}${path}?utm_source=granitecarpentry&utm_medium=${encodeURIComponent(medium)}&utm_campaign=tradesmen`
}
