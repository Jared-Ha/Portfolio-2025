"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Facebook } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // useEffect to close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/Jared-Ha", Icon: Github },
    { href: "https://www.linkedin.com/in/jaredharrison7/", Icon: Linkedin },
    { href: "https://www.facebook.com/", Icon: Facebook },
  ];

  return (
    <header className="bg-black text-white p-6">
      <div className="relative max-w-7xl mx-auto">
        <nav className="flex justify-between items-center">
          {/* Left: Name */}
          <h1
            className="
      transition-all
      duration-200
      text-white
      hover:text-gray-300
      inline-block
      text-xl font-semibold 
    "
          >
            <Link href="/">Jared Harrison</Link>
          </h1>

          {/* Center: Desktop Nav Links */}
          <ul className="hidden md:flex gap-10 text-md">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition ${
                    pathname === href
                      ? "text-white border-b-2 border-white pb-1"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
        text-gray-300 hover:text-white
        p-2 rounded-md
        transition-all
        hover:bg-white/10
        hover:scale-110
      "
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-3xl transition-transform duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile dropdown menu (always mounted) */}
        <ul
          className={`fixed top-20 right-0 h-full w-full bg-black px-6 py-10 space-y-6 text-md shadow-lg z-50 transition-transform duration-300 transform ${
            mobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full pointer-events-none"
          }`}
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block transition ${
                  pathname === href ? "font-bold text-white" : "text-gray-300"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Mobile social icons */}
          <div className="flex gap-6 pt-6">
            {socialLinks.map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-transform transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </ul>
      </div>
    </header>
  );
}
