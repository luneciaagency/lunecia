"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Contact() {
    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

const [formData, setFormData] = useState({
  name: "",
  email: "",
  company: "",
  service: "AI Automation",
  message: "",
});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "AI Automation",
        message: "",
      });
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }

  setLoading(false);
};
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >

          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-blue-600">
            Contact
          </span>

          <h2 className="mt-4 text-5xl font-black tracking-tight">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-lg">
            Tell us about your project and we'll get back to you within
            24 hours.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity:0,x:-40 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.6 }}
            className="rounded-3xl bg-[#0F172A] text-white p-10 shadow-2xl"
          >

            <h3 className="text-3xl font-bold">
              Contact Information
            </h3>

            <p className="mt-4 text-slate-300 leading-8">
              Whether you need AI automation, a premium website or SEO,
              we'd love to hear from you.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-5">
                <Mail className="text-blue-400" />
                <span>hello@lunecia.yukihirai.in</span>
              </div>

              <div className="flex items-center gap-5">
                <Phone className="text-blue-400" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-5">
                <MapPin className="text-blue-400" />
                <span>India</span>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity:0,x:40 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.6 }}
            className="rounded-3xl border border-slate-200 bg-white shadow-xl p-10 space-y-6"
          >

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                required
                autoComplete="name"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                required
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Company
              </label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                required
                autoComplete="organizatin"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Service
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>AI Automation</option>
                <option>Website Development</option>
                <option>SEO</option>
                <option>AI Chatbot</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {status === "success" && (
             <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700">
                ✅ Message sent successfully! We'll contact you within 24 hours.
             </div>
            )}

            {status === "error" && (
             <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">
                ❌ Something went wrong. Please try again.
             </div>
            )}

            <Button type="submit" disabled={loading} showArrow={false}>
                {loading ? "Sending..." : "Send Message"}
            </Button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}