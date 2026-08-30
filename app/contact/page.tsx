import type { Metadata } from "next"

import { ContactPage } from "@/components/contact/contact-page"
import {
  siteUrl,
  socialPreviewDescription,
  socialPreviewImage,
  socialPreviewTitle,
} from "@/lib/content/site"

const description =
  "Get in touch with Pratham Yadav about full-stack engineering roles, freelance work, or anything he has built."

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: socialPreviewTitle,
    description: socialPreviewDescription,
    url: `${siteUrl}/contact`,
    type: "website",
    images: [{ ...socialPreviewImage, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: socialPreviewTitle,
    description: socialPreviewDescription,
    images: [socialPreviewImage],
  },
}

export default function Page() {
  return <ContactPage />
}
