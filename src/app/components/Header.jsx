"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // useEffect to close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-black text-white p-6">
      <div className="relative max-w-7xl mx-auto">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">
            <a href="/">Jared Harrison</a>
          </h1>

          <button
            className="md:hidden text-3xl transition-transform duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>

          <ul className="hidden md:flex gap-10 text-md">
            <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/projects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
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
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
