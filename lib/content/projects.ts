export type Project = {
  slug: string
  title: string
  subheading?: string
  description: string
  image: string
  /** Optional clip played on hover, with `image` as the poster frame. */
  video?: string
  links: { website?: string; github?: string }
  technologies: string[]
  status: "live" | "building"
}

/**
 * Order matters: the home page shows the first two, and the projects
 * page lists all of them.
 */
export const projects: Project[] = [
  {
    slug: "icodraw",
    title: "Icodraw",
    subheading: "Capture, annotate, share",
    description:
      "A lightweight screen-capture and annotation tool for macOS, Windows and Linux - grab a region, mark it up, and share it without a heavyweight editor in the way.",
    image: "/icop.png",
    links: {
      website: "https://icodraw.prathm.me/",
      github: "https://github.com/insanekrishnna/inki",
    },
    technologies: ["TypeScript", "React", "Vite", "TailwindCSS", "Framer Motion"],
    status: "live",
  },
  {
    slug: "paperlab",
    title: "Paperlab",
    subheading: "PDF tools, no watermark",
    description:
      "46 PDF tools that run entirely in the browser - merge, split, convert and OCR without an upload, a sign-up or a watermark, because the files never leave the device.",
    image: "/paper.png",
    links: {
      website: "https://paperlabb.vercel.app/",
      github: "https://github.com/insanekrishnna/pureab",
    },
    technologies: ["TypeScript", "Next.js", "TailwindCSS", "pdf-lib", "Tesseract.js"],
    status: "live",
  },
  {
    slug: "metamax",
    title: "Metamax",
    subheading: "SEO and performance audits",
    description:
      "Point it at any URL and it returns SEO, Lighthouse and Core Web Vitals checks in seconds, with a cached Express crawler doing the scraping so repeat audits stay fast.",
    image: "/metamex.png",
    links: {
      website: "https://metamex.vercel.app/",
      github: "https://github.com/insanekrishnna/metamax",
    },
    technologies: ["TypeScript", "Next.js", "TailwindCSS", "ExpressJS", "Cheerio"],
    status: "live",
  },
  {
    slug: "kovaa",
    title: "Kovaa",
    subheading: "Zillow for India",
    description:
      "India's fragmented rental market lacks trust and transparency; Kovaa centralises verified listings and streamlines discovery, powered by a production-ready backend focused on security, scalability, correctness, strong validation and predictable failure handling.",
    image: "/kova.png",
    links: {
      website: "https://kova-7ijn.onrender.com/",
      github: "https://github.com/insanekrishnna/kova",
    },
    technologies: ["TypeScript", "TailwindCSS", "MongoDB", "ExpressJS", "NodeJS"],
    status: "live",
  },
]
