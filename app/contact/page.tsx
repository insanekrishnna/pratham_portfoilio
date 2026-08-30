import type { Metadata } from "next"

import { ContactPage } from "@/components/contact/contact-page"
import { siteUrl, socialPreviewImage } from "@/lib/content/site"

const description =
  "Get in touch with Pratham Yadav about full-stack engineering roles, freelance work, or anything he has built."

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Contact | Pratham Yadav",
    description,
    url: `${siteUrl}/contact`,
    type: "website",
    images: [{ ...socialPreviewImage, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Pratham Yadav",
    description,
    images: [socialPreviewImage],
  },
}

export default function Page() {
  return <ContactPage />
}
