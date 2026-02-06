import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Calendar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Typewriter } from "@/components/ui/typewriter";
import { TimeCounter } from "@/components/time-counter";
import { SpeedInsights } from "@vercel/speed-insights/next"




import { WorkItem } from "@/components/work-item";
import { ProjectListItem } from "@/components/project-list-item";
import { AchievementCard, AchievementItem } from "@/components/achievement-item";
import { Dock } from "@/components/dock";
import { SkillsDraggable } from "@/components/skills-draggable";
import { GitHubContributions } from "@/components/github-contributions";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ScrollAnimation,
  FadeInText,
  SlideUp,
  SlideInLeft,
  SlideInRight,
} from "@/components/scroll-animation";

export default function Page() {
  return (
    <main className="min-h-dvh bg-grid pb-32 pt-6 dark:bg-neutral-950">
      <FadeInText>
        <nav className="mx-auto mb-4 flex w-full max-w-xl items-center justify-between px-4 md:px-6 lg:px-8 text-xs text-neutral-600 dark:text-neutral-300">
          <Link
            href="#"
            className="font-semibold text-neutral-900 dark:text-neutral-50"
          >
            pratham.
          </Link>


          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#experience"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              experience
            </a>
            <a
              href="#projects"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              projects
            </a>
            <a
              href="#achievements"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              achievements
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </FadeInText>

      <div className="mx-auto max-w-xl px-4 md:px-6 lg:px-8">
        <article
          aria-label="Portfolio"
          className="relative rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="p-4 md:p-6 lg:p-6">
            {/* Header */}

            <SlideUp>
              <header id="about" className="space-y-2 p-4">
                <FadeInText delay={0.1}>
                  <div className="flex items-center justify-between">
                    <TextShimmer
                      as="p"
                      className="text-xs"
                      duration={2.2}
                      spread={1.2}
                    >
                      hello, I’m
                    </TextShimmer>
                    <TimeCounter className="text-xs text-neutral-500 dark:text-neutral-400 font-mono" />
                  </div>
                </FadeInText>
                <SlideInLeft delay={0.2}>
                  <div className="flex items-center gap-3">
                    <div className="h-16 w-16 ring-2 ring-neutral-200 dark:ring-neutral-900 rounded-full overflow-hidden">
                      <img
                        src="/facedemo.jpeg"
                        alt="Pratham Yadav"
                        className="h-full w-full object-cover scale-115 -translate-x-0.5"
                      />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
                      Pratham Yadav
                      <br />
                     <p className="flex flex-wrap items-center mt-1 gap-5 sm:gap-6 text-xs text-neutral-600 dark:text-neutral-400">aka insanekrishnna</p>
                    </h1>
                   
                  </div>
                   {/* <p className="flex flex-wrap items-center mt-3 gap-2 sm:gap-4 text-xs text-neutral-600 dark:text-neutral-300">aka insanekrishnaa</p> */}
                </SlideInLeft>
                <FadeInText delay={0.3}>
                  <div className="flex flex-wrap items-center mt-3 gap-2 sm:gap-4 text-xs text-neutral-600 dark:text-neutral-300">
                    <span>20, he/him </span>
                    <span className="hidden sm:inline">{"|"}</span>
                    <span className="max-w-[38ch]">
                      <Typewriter
                        text={[
                          "Full Stack Developer",
                          "Designer",
                          "Freelancer",  
                        ]}
                        speed={90}
                        waitTime={2000}
                        deleteSpeed={80}
                        className="text-neutral-600 dark:text-neutral-300"
                        cursorChar="|"
                        showCursor={true}
                      />
                      {" from India."}
                    </span>
                    
                  </div>
                  
                </FadeInText>
                <SlideInRight delay={0.4}>
                  <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-4">
                    <Button
                      size="sm"
                      asChild
                      className="h-6 w-20 rounded-sm bg-neutral-900 px-4 text-white shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                      <a
                        href="https://drive.google.com/file/d/1TbuyE28E3soWfBA8Npe9wdcEag5B9_E_/view?usp=drivesdk "
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Resume"
                      >
                        Resume
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="mailto:iiprathamayadav@gmail.com"
                        aria-label="Send email"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="https://twitter.com/insanekrishnaa"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open Twitter"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="https://github.com/insanekrishnna"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      <a
                        href="https://www.linkedin.com/in/prathamyadavv/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </SlideInRight>
              </header>
              

              
            </SlideUp>

            {/* Bio */}
            <FadeInText delay={0.7}>
              <section className="mt-4 m-2 justify-center items-center text-[13px] leading-6 text-neutral-600 dark:text-neutral-300">
                <p>
                  TL;DR: i break things, learn fast, and make shit happen. limits exist to be tested; polymath thinking and psychology books shaped me. <br />Mastery is non-negotiable.{" "}
                  
                </p>
              </section>
            </FadeInText>

            {/* Work Experience */}
            <SlideUp delay={0.1}>
              <section id="experience" className="mt-4 p-4 section-divider pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-[0.9rem] sm:text-[0.95rem] font-semibold  tracking-[0.05em] text-neutral-900 dark:text-neutral-50 ml-0.4">
                    Experience
                  </h3>
                </FadeInText>
                <div className="mt-3 space-y-3">
                  <SlideInLeft delay={0.1}>
                    <WorkItem
                      icon="shield"
                      company="Largence"
                      role="SWE Intern ( ~6mos )" 
                      period="August 2025 – Present"
                      bullets={[
                        "Designed an in-depth GPT-4 vs Grok-4 benchmark for across 10+ criteria  RAG effectiveness, multimodality, and legal reasoning.",
                        "Built a scalable QA and testing framework covering 20+ legal task types.",
                        "Presented 30+ improved approaches for reliable, production-grade AI workflows."
                      ]}
                      logoUrl="/stealth.jpeg"
                      companyUrl="https://largence.com"
                    />
                  </SlideInLeft>
                  <SlideInLeft delay={0.1}>
                    <WorkItem
                      icon="building"
                      company="Genius HRTech LTD."
                      role="Operation Fellow ( 1yr 5mos )"
                      period="January 2024 – June 2025"
                      bullets={[
                        "Led 12-member team, increasing productivity by 30–40% through execution discipline.",
                        "Reduced negative client feedback by ~30% via process improvements and quality controls.",
                        "Streamlined operations, saving 20+ hours per week through workflow optimization."
                      ]}
                      logoUrl="/GHRTT.jpeg"
                      companyUrl="https://www.geniushrtech.com/"
                    />
                  </SlideInLeft>
                </div>
              </section>
            </SlideUp>

            {/* Projects */}
            <SlideUp delay={0.2}>
              <section id="projects" className="mt-3 p-4 section-divider pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-[0.9rem] sm:text-[0.95rem] font-semibold   tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-3 ml-0.4">
                    Proof of Work
                  </h3>
                </FadeInText>
                <div className="space-y-2">
                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="Kovaa - Zillow for India"
                      image="kova.jpg" 
                      links={[
                        {
                          label: "live preview ↗",
                          href: "https://kova-7ijn.onrender.com/",
                        },
                        {
                          label: "github ↗",
                          href: "https://github.com/insanekrishnna/kova",
                        },
                      ]}
                      bullets={[
                        "India’s fragmented rental market lacks trust and transparency; Kovaa centralizes verified listings and streamlines discovery, powered by a production-ready backend focused on security, scalability, correctness, strong validation, and predictable failure handling.",
                       
                      ]}
                      tags={[ "TypeScript", "TailwindCSS", "mongoDB", "ExpressJS", "NodeJS"]}
                    />
                  </SlideInLeft>
                  
                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="Finveda"
                      video="finveda.mp4"
                      
                      links={[
                        {
                          label: "live preview ↗",
                          href: "https://finveda-delta.vercel.app/",
                          
                        },
                        {
                          label: "github ↗",
                          href: "https://github.com/insanekrishnna/finwise-conversation",
                        },
                      ]}
                      bullets={[
                        "Finveda helps users track income and spending through visual breakdowns, period comparisons, and insights, with goal-based planning, built as an accessible React application with strict TypeScript patterns and scalable UI architecture using Zod and React Query.",
                      
                      ]}
                      tags={["TypeScript",
                              "React",
                              "Vite",
                              "TailwindCSS",
                              "shadcn-ui",
                              "Radix UI",
                              "React Hook Form",
                              ]}
                    />
                  </SlideInLeft>
                  
                </div>
                <FadeInText delay={0.2}>
                  <div className="mt-3 flex justify-center">
                    <a
                      href="https://github.com/insanekrishnna?tab=repositories" target="_blank"
                      className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      View all projects →
                    </a>
                  </div>
                </FadeInText>
              </section>
            </SlideUp>

               {/* Skills */}
            <SlideUp delay={0.3}>
              <section className="mt-3 p-4 section-divider pt-5">
                <SkillsDraggable />
              </section>
            </SlideUp>

            <SlideUp delay={0.3}>
              <section id="achievements" className="mt-3 p-3 section-divider pt-4">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage mb-4 text-[0.9rem] sm:text-[0.95rem] font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-100 ml-1">
                    Achievements
                  </h3>
                </FadeInText>

                <div className="grid gap-3">
                  <SlideInLeft delay={0.1}>
                    <AchievementCard
                      title="Winner — Ideathon 2025 ( CDGI )"
                      date="November 2025"
                      description="Conceived, built, and pitched a problem-driven solution, NextUp -  onestop solution for students and recruiters, judged best among competing teams."
                    />
                  </SlideInLeft>

                  <SlideInRight delay={0.15}>
                    <AchievementCard
                      title="Finalist — Mindcoders Hackathon 2025"
                      date="March 2025"
                      description="Built a production-ready solution under strict 24-hour constraints; ranked among top-performing teams."
                    />
                  </SlideInRight>
                  <SlideInRight delay={0.15}>
                    <AchievementCard
                      title="Finalist — Mind The Product (IIT Roorkee) E-summit'25"
                      date="March 2025"
                      description="Top finalist at IIT Roorkee Mind the Product, recognized for strong product thinking and execution."
                    />
                  </SlideInRight>
                </div>
              </section>
            </SlideUp>

         

            {/* GitHub Contributions
            <SlideUp delay={0.3}>
              <section className="mt-8 section-lines p-4">
                <GitHubContributions />
              </section>
            </SlideUp> */}
            <SlideUp delay={0.2}>
              <section id="projects" className="mt-4 p-3 section-divider pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-[0.9rem] sm:text-[0.95rem] font-semibold   tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-3 ml-1">
                    Blogs
                  </h3>
                </FadeInText>
                <div className="space-y-2">
                <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="The mahabharata isnt about war, it's about mentorship"
                    image="Mahabharat.jpg"
                      links={[
                        {
                          label: "December 19",
                          href: "https://medium.com/@iiprathamyadav/the-mahabharata-isnt-about-war-it-s-about-mentorship-82dcbf23e018",
                        },
                        {
                          label: "Read ↗",
                          href: "https://medium.com/@iiprathamyadav/the-mahabharata-isnt-about-war-it-s-about-mentorship-82dcbf23e018",
                        },
                        {
                          label: "Medium ↗",
                          href: "https://medium.com/@iiprathamyadav",
                        },
                      ]}
                      bullets={[
                        
                      ]}
                      tags={[
                              ]}
                    />
                  </SlideInLeft>
                  
                </div>
                <FadeInText delay={0.2}>
                  <div className="mt-3 flex justify-center">
                    <a
                      href="https://medium.com/@iiprathamyadav"
                      target="_blank"
                      className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      View all Blogs →
                    </a>
                  </div>
                </FadeInText>
              </section>
            </SlideUp>

            {/* Education */}
            <SlideUp delay={0.3}>
              <section className="mt-3 p-3 section-divider pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-[0.9rem] sm:text-[0.95rem] font-semibold   tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-3">
                    Education
                  </h3>
                </FadeInText>
                <ul className="space-y-2">
                  <SlideInLeft delay={0.1}>
                    <li>
                      <AchievementItem
                        title="Chameli Devi Group of Institutions"
                        date="2023 – 2027"
                        description="B.Tech ( IT ) - 8.1 CGPA"
                      />
                    </li>
                  </SlideInLeft>
                 
                    
                </ul>
              </section>
            </SlideUp>

                        {/* Book a Meet */}
            <SlideUp delay={0.3}>
              <section id="book-a-meet" className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50/70 p-5 dark:border-neutral-800 dark:bg-neutral-900/30">
                <FadeInText delay={0.1}>
                  <h2 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Still reading? That means something clicked <br />
Let’s talk.
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                    A focused 30-minute call to align on scope, fit, and next steps.
                  </p>
                </FadeInText>

                <div className="mt-4">
                  <a
                    href="https://calendly.com/iiprathamyadav/30min"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 sm:w-auto"
                    aria-label="Book a 30-minute meeting on Calendly"
                  >
                    <Calendar className="h-4 w-4" />
                    Book a  Meet
                  </a>
                 
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                    Scheduled via email on{" "}
                    <span className="font-medium">iiprathamyadav@gmail.com</span>.
                  </p>
                  <a
                    href="mailto:iiprathamyadav@gmail.com"
                    className="mt-2 inline-flex text-xs text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                  >
                    or email -&gt; iiprathamyadav@gmail.com
                  </a>
                </div>
              </section>
            </SlideUp>
          </div>
        </article>
        <div className="mt-8 flex justify-center rounded-xl py-2  border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 text-xs text-neutral-500 dark:text-neutral-400 p-2 ">
          
            <span className="italic ">The people who are crazy enough to think they can change the world are <br /> the ones who do</span> <span aria-hidden> </span>
          
        </div>{" "}
        <div className="mt-4 flex justify-center text-xs text-neutral-500 dark:text-neutral-400">
           
      designed and developed by&nbsp;<a href="https://x.com/insanekrishnaa" className="text-blue-400 hover:text-blue-500"> ~Pratham Yadav</a>
      </div>
        
      </div>

      {/* Floating Dock */}

      <Dock />
    </main>
  );
}

