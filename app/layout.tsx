import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Pixelify_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { UiFeedbackProvider } from "@/hooks/use-ui-feedback"
import { MotionProvider } from "@/components/common/motion-provider"
import { ErrorBoundary } from "@/components/error-boundary"
import { LenisSmoothScroll } from "@/components/lenis-smooth-scroll"
import { UserCursor } from "@/components/common/user-cursor"
import { SiteShell } from "@/components/layout/site-shell"
import StructuredData from "@/components/structured-data"
import { siteUrl } from "@/lib/content/site"

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixelify",
})

const description =
  "TL;DR: Full-Stack Software Engineer building scalable, production-grade systems at early-stage startups. Experienced in end-to-end ownership, system design, backend services, frontend applications, and taking products from architecture to production."

const ogImage = "https://freeimage.host/i/pratham-portfolioo.f1C7zKl"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pratham Yadav - Full Stack Developer | Portfolio",
    template: "%s | Pratham Yadav",
  },
  description,
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "India",
    "Pratham Krishna Yadav",
    "Stealth Startup",
    "Founding Engineer",
    "Call2Code Hackathon",
    "BitBash",
    "MUJ",
    "NIT",
    "Chameli Devi Group of institution",
    "CDGI",
    "Best Portfolio",
    "Minimalist Portfolio",
    "Pratham Yadav",
    "Developer Portfolio",
    "Student Portfolio",
    "Tech Portfolio",
    "Modern Portfolio",
    "Clean Portfolio",
    "Professional Portfolio",
    "Portfolio Website",
    "Personal Website",
    "Developer Website",
  ],
  authors: [{ name: "Pratham Yadav" }],
  creator: "Pratham Yadav",
  publisher: "Pratham Yadav",
  generator: "Next.js",
  applicationName: "Pratham Yadav Portfolio",
  referrer: "origin-when-cross-origin",
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Pratham Yadav Portfolio",
    title: "Pratham Yadav - Full Stack Developer",
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Pratham Yadav - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@insanekrishnaa",
    creator: "@insanekrishnaa",
    title: "Pratham Yadav - Full Stack Developer",
    description,
    images: [ogImage],
  },
  icons: {
    icon: "/favicon?v=1",
    shortcut: "/favicon?v=1",
    apple: "/favicon?v=1",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "contact:email": "iiprathamyadav@gmail.com",
    "contact:phone_number": "+91-9302929645",
    "contact:country_name": "India",
    "contact:region": "Indore",
    "contact:locality": "Indore",
    "twitter:domain": "pratham.dev",
    "twitter:url": siteUrl,
    "twitter:image:alt": "Pratham Yadav - Full Stack Developer Portfolio",
    "whatsapp:image": ogImage,
    "whatsapp:title": "Pratham Yadav - Full Stack Developer",
    "whatsapp:description": description,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${pixelifySans.variable}`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MotionProvider>
              <UiFeedbackProvider>
                <LenisSmoothScroll />
                <UserCursor name="hi" />
                <SiteShell>{children}</SiteShell>
              </UiFeedbackProvider>
            </MotionProvider>
          </ThemeProvider>
        </ErrorBoundary>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
