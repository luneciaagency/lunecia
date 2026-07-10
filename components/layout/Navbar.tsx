"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl shadow-xl px-6 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo/lunecia-logo.svg"
              alt="Lunecia"
              width={190}
              height={50}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              href="#services"
              className="transition-colors hover:text-blue-600"
            >
              Services
            </Link>

            <Link
              href="#portfolio"
              className="transition-colors hover:text-blue-600"
            >
              Portfolio
            </Link>

            <Link
              href="#about"
              className="transition-colors hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="#contact"
              className="transition-colors hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>

        <div className="flex items-center gap-4">

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button>Book a Call</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-1 max-w-7xl mx-auto px-6"
          >
            <div className="rounded-2xl border border-white/20 bg-white/90 backdrop-blur-xl shadow-xl p-6 flex flex-col gap-5">

              <Link href="#services"
                onClick={() => setMenuOpen(false)}
                className="py-2 text-lg font-medium hover:text-blue-600 transition-colors"
              >
                Services
              </Link>

              <Link href="#portfolio"
                onClick={() => setMenuOpen(false)}
                className="py-2 text-lg font-medium hover:text-blue-600 transition-colors"
              >
                Portfolio
              </Link>

              <Link href="#about"
                onClick={() => setMenuOpen(false)}
                className="py-2 text-lg font-medium hover:text-blue-600 transition-colors"
              >
                About
              </Link>

              <Link href="#contact"
                onClick={() => setMenuOpen(false)}
                className="py-2 text-lg font-medium hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>

              <div onClick={() => setMenuOpen(false)}>
                <Button>Book a Call</Button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}