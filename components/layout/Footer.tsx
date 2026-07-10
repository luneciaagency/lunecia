"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Lunecia
            </h2>

            <p className="mt-4 leading-7">
              Helping businesses grow through AI automation,
              modern web development, and SEO solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI Automation
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Website Development
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  SEO
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>

              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 font-semibold text-white">
              Connect
            </h3>

            <div className="flex gap-5">

              <Link
                href="https://github.com/yukihirai15"
                target="_blank"
                aria-label="GitHub"
                className="hover:text-white transition-colors"
              >
                <FaGithub size={22} />
              </Link>

              <Link
                href="https://www.linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <FaLinkedin size={22} />
              </Link>

              <a
                href="mailto:hello@yukihirai.in"
                aria-label="Email"
                className="hover:text-white transition-colors"
              >
                <Mail size={22} />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-14 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Lunecia. All rights reserved.
        </div>

      </div>
    </footer>
  );
}