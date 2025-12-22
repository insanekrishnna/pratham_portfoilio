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
        className="flex items-center gap-3 rounded-full border border-neutral-300/20 bg-white/10 dark:bg-neutral-900/20 px-4 py-2.5 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow"
      >
        {items.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group relative inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 dark:text-neutral-400 transition-all duration-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50"
            style={{
              animation: `slideIn 0.4s ease-out ${index * 0.05}s both`
            }}
          >
            <item.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
            <span className="sr-only">{item.label}</span>
            
            {/* Tooltip */}
            <span className="absolute bottom-full mb-2 px-2 py-1 text-xs font-medium text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </a>
        ))}
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
