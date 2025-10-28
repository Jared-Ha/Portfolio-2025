"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="bg-black text-white p-6">
      <div className="relative max-w-7xl mx-auto">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">
            <Link href="/">Jared Harrison</Link>
          </h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-3xl transition-transform duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-10 text-md">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition ${
                    pathname === href
                      ? "font-bold text-white border-b-2 border-white pb-1"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu (always mounted) */}
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
        </ul>
      </div>
    </header>
  );
}
