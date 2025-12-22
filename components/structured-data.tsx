"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Pratham Yadav",
      jobTitle: "Full Stack Developer",
      description:
        "TL;DR: Full-Stack Software Engineer building scalable, production-grade systems at early-stage startups. Experienced in end-to-end ownership, system design, backend services, frontend applications, and taking products from architecture to production.",
      url: "https://pratham.dev",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
      email: "iiprathamyadav@gmail.com",
      nationality: "Indian",
      birthDate: "2005",
      gender: "Male",
      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
        addressRegion: "Indore",
        addressLocality: "Indore",
      },
      sameAs: [
        "https://www.linkedin.com/in/prathamyadavv",
        "https://github.com/insanekrishnna",
        "https://x.com/insanekrishnaa",
      ],
      knowsAbout: [
        "Full Stack Development",
        "React",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "Web Development",
        "Software Engineering",
        "Portfolio Development",
        "Minimalist Design",
        "Modern Web Design",
        "Student Portfolio",
        "Developer Portfolio",
        "Tech Portfolio",
        "Professional Portfolio",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Chameli Devi Group of Institutions",
          alternateName: "CDGI",
          description: "B.Tech in Information Technology",
          url: "https://www.cdgi.edu.in/",
        },
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "Stealth Startup",
          description: "SWE Intern",
        },
      ],
      award: [
        {
          "@type": "Award",
          name: "Winner — Ideathon 2025, CDGI ",
          description:
            "Conceived, built, and pitched a problem-driven solution, NextUp -  onestop solution for students and recruiters, judged best among competing teams.",
          dateAwarded: "2025-11",
        },
        {
          "@type": "Award",
          name: "Finalist — Mindcoders Hackathon 2025",
          description:
            "Built a production-ready solution under strict 24-hour constraints; ranked among top-performing teams.",
          dateAwarded: "2025-03",
        },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        description: "Building efficient, scalable, and intuitive applications",
        skills: [
          "React",
          "TypeScript",
          "Node.js",
          "JavaScript",
          "Python",
          "TailwindCSS",
          "Supabase",
          "Firebase",
          "Streamlit",
        ],
      },
    };

    try {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } catch (error) {
      console.error("Error adding structured data:", error);
    }
  }, []);

  return null;
}
