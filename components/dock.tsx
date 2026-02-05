"use client"

import {
  Github,
  Home,
  Mail,
  Linkedin,
  Twitter,
  ExternalLink,
  Code2,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Dock() {
  const items = [
    { icon: Home, label: "Home", href: "#" },
    { icon: Code2, label: "Projects", href: "#projects" },
    { icon: Github, label: "GitHub", href: "https://github.com/insanekrishnna" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/prathamyadav" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/insanekrishnaa" },
    { icon: Mail, label: "Email", href: "mailto:iiprathamayadav@gmail.com" },
  ];
  
  return (
    <div className="pointer-events-auto fixed inset-x-0 bottom-8 z-50 flex justify-center px-4">
      <nav
        aria-label="Quick actions"
        className="flex items-center rounded-full border border-neutral-200/80 bg-white/90 px-3 py-2 backdrop-blur-md shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] dark:border-neutral-800/80 dark:bg-neutral-950/90 dark:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]"
      >
        {items.map((item, index) => (
          <div key={item.label} className="flex items-center">
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative inline-flex items-center justify-center rounded-full p-2 text-neutral-700 transition-colors duration-200 hover:text-neutral-900 transition-transform active:scale-90 dark:text-neutral-200 dark:hover:text-white"
              style={{
                animation: `slideIn 0.4s ease-out ${index * 0.05}s both`
              }}
            >
              <item.icon className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">{item.label}</span>
            </a>
            {index < items.length - 1 ? (
              <span className="mx-2 h-5 w-px bg-neutral-200/80 dark:bg-neutral-800/80" aria-hidden />
            ) : null}
          </div>
        ))}
        <span className="mx-2 h-5 w-px bg-neutral-200/80 dark:bg-neutral-800/80" aria-hidden />
        <ThemeToggle className="h-8 w-8 rounded-full border border-neutral-200/80 bg-white text-neutral-700 shadow-none hover:bg-neutral-100 hover:text-neutral-900 transition-transform active:scale-90 focus-visible:ring-neutral-300 dark:border-neutral-800/80 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:bg-neutral-900 dark:hover:text-white dark:focus-visible:ring-neutral-700" />
      </nav>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
