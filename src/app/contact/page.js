"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function Contact() {
  const socialLinks = [
    { href: "https://github.com/Jared-Ha", label: "GitHub", icon: Github },
    {
      href: "https://www.linkedin.com/in/jaredharrison7/",
      label: "LinkedIn",
      icon: Linkedin,
    },
    { href: "https://www.facebook.com/", label: "Facebook", icon: Facebook },
    { href: "mailto:jared.harrison7@gmail.com", label: "Email", icon: Mail },
  ];

  const searchParams = useSearchParams();
  const success = searchParams.get("success") === "true";

  return (
    <section className="max-w-6xl mx-auto px-0 sm:px-4 md:px-6 py-16 space-y-14">
      {/* Top hero: text + socials left, photo right */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight mb-3">
            Contact
          </h1>
          <p className="text-gray-600 mb-8">
            Get in touch via social media or send me an email. I’m always happy
            to talk about projects, collaboration, or anything dev-related.
          </p>

          <ul
            className="
  grid 
  grid-cols-2 
  gap-x-10 gap-y-6 
  sm:grid-cols-2 
  md:grid-cols-2 
  lg:grid-cols-2
"
          >
            {" "}
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="group inline-flex items-center gap-3"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 group-hover:bg-gray-200 transition">
                    <Icon size={18} />
                  </span>
                  <span className="text-gray-700 group-hover:underline">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Photo: use any landscape or portrait image you like */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
          {/* Replace with your preferred image path */}
          <Image
            src="/images/jared.webp"
            alt="Jared Harrison"
            width={1200}
            height={900}
            className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] object-cover"
            priority
          />
        </div>
      </div>

      {/* Form card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">
        <h2 className="text-3xl font-semibold mb-6">Send me an email</h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/contact?success=true"
          className="grid gap-6"
        >
          {/* Required hidden fields for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don&apos;t fill this out if you&apos;re human:{" "}
              <input name="bot-field" />
            </label>
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell me a little about your project…"
            />
          </div>
          {success && (
            <p className="text-green-600 text-sm mt-2">
              Thanks! Your message has been sent. I&apos;ll reply within 24h.
            </p>
          )}

          <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
            <p className="text-sm text-gray-500">
              Or email me directly at{" "}
              <a
                className="text-blue-600 underline"
                href="mailto:jared.harrison7@gmail.com"
              >
                jared.harrison7@gmail.com
              </a>
              .
            </p>
            <button
              type="submit"
              className="ml-auto inline-flex items-center justify-center rounded-lg bg-black text-white px-6 py-3 font-medium
             hover:bg-gray-800 active:bg-gray-900 transition cursor-pointer"
            >
              Send email
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
