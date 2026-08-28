import { achievements } from "@/lib/content/milestones"
import { experiences } from "@/lib/content/experience"
import { profile } from "@/lib/content/profile"
import { siteUrl } from "@/lib/content/site"
import { stack } from "@/lib/content/stack"

/**
 * Rendered on the server so crawlers see the graph in the initial HTML.
 * Everything here is derived from the same content the page renders.
 */
export default function StructuredData() {
  const currentEmployers = experiences
    .filter((experience) => experience.isCurrent)
    .map((experience) => ({
      "@type": "Organization",
      name: experience.company,
      url: experience.website,
    }))

  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    alternateName: profile.handle,
    jobTitle: profile.title,
    description:
      "TL;DR: Full-Stack Software Engineer building scalable, production-grade systems at early-stage startups. Experienced in end-to-end ownership, system design, backend services, frontend applications, and taking products from architecture to production.",
    url: siteUrl,
    image: `${siteUrl}${profile.avatar}`,
    email: `mailto:${profile.email}`,
    nationality: "Indian",
    address: {
      "@type": "PostalAddress",
      addressCountry: "India",
      addressRegion: "Madhya Pradesh",
      addressLocality: "Indore",
    },
    sameAs: [
      "https://www.linkedin.com/in/prathamyadavv",
      "https://github.com/insanekrishnna",
      "https://x.com/insanekrishnaa",
      "https://medium.com/@iiprathamyadav",
    ],
    knowsAbout: stack.flatMap((category) =>
      category.skills.map((skill) => skill.title)
    ),
    // Dropped entirely between roles rather than emitted as an empty list.
    ...(currentEmployers.length ? { worksFor: currentEmployers } : {}),
    award: achievements.map((item) => ({
      "@type": "Award",
      name: item.title,
      description: item.description,
    })),
  }

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${profile.name} Portfolio`,
        description:
          "Portfolio, projects, experience and writing of Pratham Yadav - Full Stack Developer.",
        publisher: { "@id": `${siteUrl}/#person` },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
