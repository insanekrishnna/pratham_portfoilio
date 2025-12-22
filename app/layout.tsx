import type React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import StructuredData from "@/components/structured-data";
import { ErrorBoundary } from "@/components/error-boundary";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title: "Pratham Yadav - Full Stack Developer | Portfolio",
  description:
    "TL;DR: Full-Stack Software Engineer building scalable, production-grade systems at early-stage startups. Experienced in end-to-end ownership, system design, backend services, frontend applications, and taking products from architecture to production.",
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
    url: "https://pratham.dev",
    siteName: "Pratham Yadav Portfolio",
    title: "Pratham Yadav - Full Stack Developer",
    description:
      "TL;DR: Full-Stack Software Engineer building scalable, production-grade systems at early-stage startups. Experienced in end-to-end ownership, system design, backend services, frontend applications, and taking products from architecture to production.",
    images: [
      {
        url: "https://freeimage.host/i/pratham-portfolioo.f1C7zKl",
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
    description:
      "TL;DR: Full-Stack Software Engineer building scalable, production-grade systems at early-stage startups. Experienced in end-to-end ownership, system design, backend services, frontend applications, and taking products from architecture to production.",
    images: ["https://freeimage.host/i/pratham-portfolioo.f1C7zKl"],
  },
  icons: {
    icon: "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
    shortcut:
      "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
    apple:
      "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "contact:email": "iiprathamyadav@gmail.com",
    "contact:phone_number": "+91-9302929645",
    "contact:country_name": "India",
    "contact:region": "Indore",
    "contact:locality": "Indore",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:alt": "Pratham Yadav - Full Stack Developer Portfolio",
    "og:site_name": "Pratham Yadav Portfolio",
    "og:locale": "en_US",
    "og:type": "website",
    "og:url": "https://pratham.dev",
    "og:title": "Pratham Yadav - Full Stack Developer",
    "og:description":
      "TL;DR: Full-Stack Software Engineer building scalable, production-grade systems at early-stage startups. Experienced in end-to-end ownership, system design, backend services, frontend applications, and taking products from architecture to production.",
    "og:image": "https://freeimage.host/i/pratham-portfolioo.f1C7zKl",
    "twitter:image:alt": "Pratham Yadav - Full Stack Developer Portfolio",
    "twitter:domain": "pratham.dev",
    "twitter:url": "https://pratham.dev",
    "whatsapp:image": "https://freeimage.host/i/pratham-portfolioo.f1C7zKl",
    "whatsapp:title": "Pratham Yadav - Full Stack Developer",
    "whatsapp:description":
      "TL;DR: Full-Stack Software Engineer building scalable, production-grade systems at early-stage startups. Experienced in end-to-end ownership, system design, backend services, frontend applications, and taking products from architecture to production.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body className="font-sans min-h-dvh bg-grid text-foreground">
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-dvh">{children}</div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
