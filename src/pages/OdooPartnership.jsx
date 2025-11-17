import React, { useEffect, useRef, useState } from "react";
import { motion, MotionConfig, useScroll, useTransform, useSpring, animate } from "framer-motion";
import { CheckCircle2, Sparkles, Rocket, ShieldCheck, Layers3, Cable, BadgeCheck, ArrowRight, CircleCheck, Stars } from "lucide-react";

/**
 * PRISH × Odoo — Partnership Page
 * Animations added: parallax banner, staged hero reveal, marquee chips, count‑up stat,
 * hover micro‑interactions, staggered sections, glass cards.
 */

// Chip list used in the Marquee below
const appChips = [
  "Accounting", "Invoicing", "Expenses", "Documents", "Sign", "CRM", "Sales",
  "POS (Shop)", "POS (Restaurant)", "Subscriptions", "Rental", "Website",
  "eCommerce", "Blog", "Forum", "Live Chat", "eLearning", "Inventory",
  "Manufacturing", "PLM", "Purchase", "Maintenance", "Quality", "Employees",
  "Recruitment", "Time Off", "Appraisals", "Referrals", "Fleet",
  "Social Marketing", "Email Marketing", "SMS Marketing", "Events",
  "Marketing Automation", "Surveys", "Project", "Timesheets",
  "Field Service", "Helpdesk", "Planning", "Appointments", "Discuss",
  "Approvals", "IoT", "VoIP", "Knowledge", "WhatsApp", "Studio"
];

const ease = [0.16, 1, 0.3, 1];

// Shared variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const pop = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};
const containerStagger = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

// CountUp component for numbers (e.g., 15M+ users)
function CountUp({ from = 0, to = 0, duration = 1.6, className = "" }) {
  const [value, setValue] = useState(from);
  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.floor(v)),
    });
    return () => controls.stop();
  }, [from, to, duration]);
  return <span className={className}>{value.toLocaleString()}</span>;
}

// Continuous marquee for app chips
function Marquee({ items = [] }) {
  const content = [...items, ...items]; // duplicate for seamless loop
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white/70">
      <motion.div
        className="flex min-w-[200%] gap-2 p-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {content.map((chip, i) => (
          <span
            key={`${chip}-${i}`}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 shadow-sm"
          >
            <CircleCheck className="h-3.5 w-3.5 text-purple-600" /> {chip}
          </span>
        ))}
      </motion.div>
      {/* subtle gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white/80 to-transparent" />
    </div>
  );
}

export default function OdooPartnershipPage() {
  // Parallax + Ken Burns on banner
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const scale = useSpring(scaleRaw, { stiffness: 100, damping: 30 });

  return (
    <MotionConfig transition={{ ease }}>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-rose-50 text-gray-900">
        {/* Decorative floating blobs (soft, looping) */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute top-1/2 -right-24 h-80 w-80 rounded-full bg-rose-200/60 blur-3xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 9, repeat: Infinity, repeatType: "mirror" }}
          />
        </div>

        {/* HERO */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-16 pb-10 sm:pt-20">
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-10 lg:grid-cols-12 items-center"
            >
              <motion.div variants={fadeUp} className="lg:col-span-7 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-3 py-1 text-sm text-purple-700 shadow-sm ring-1 ring-purple-200/60">
                  <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" /> Channel Partner Announcement
                </div>
                <motion.h1
                  variants={fadeUp}
                  className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight"
                >
                  PRISH <span className="text-purple-600">×</span> Odoo
                </motion.h1>
                <motion.p variants={fadeUp} className="mt-4 text-lg text-gray-700 leading-relaxed">
                  We’re thrilled to announce our channel partnership with Odoo — the all‑in‑one
                  business suite that unifies ERP, CRM, Finance, Supply Chain, HR, and more into a
                  single, beautifully integrated platform. Together, we’ll deliver faster, smarter,
                  and more affordable digital transformation.
                </motion.p>
                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-white text-sm font-medium shadow hover:bg-purple-700"
                  >
                    <Rocket className="h-4 w-4" /> Book a discovery call
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-purple-300 bg-white px-5 py-3 text-sm font-medium text-purple-700 hover:border-purple-400 hover:bg-purple-50"
                  >
                    Explore Odoo <ArrowRight className="h-4 w-4" />
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div variants={pop} className="lg:col-span-5">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="relative rounded-3xl border border-purple-100 bg-white/70 p-6 shadow-xl backdrop-blur"
                >
                  <p className="text-base leading-relaxed text-gray-800 whitespace-pre-line">
{`🚀 Exciting News!

At PRISH, we’re elevating our technology consulting with a new milestone — we’ve partnered with Odoo as a Channel Partner!

This collaboration helps us deliver modern, seamless ERP outcomes across finance, operations, and customer experience.

Huge thanks to the Odoo team for a smooth onboarding — your support sets us up for a powerful journey ahead.

We look forward to building integrated solutions that drive growth and efficiency.

Connect with our expert team to tailor Odoo to your business at the best value — from discovery to go‑live and beyond. 🤝🏻`}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* BIG BANNER (FULL‑WIDTH IMAGE) with parallax & Ken Burns */}
        <section className="relative" ref={bannerRef}>
          <div className="mx-auto max-w-[100rem] px-0">
            <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] lg:aspect-[21/8] overflow-hidden">
              <picture>
                <source srcSet="/oddo-partnership.jpeg" type="image/webp" />
                <motion.img
                  style={{ y, scale }}
                  src="/oddo-partnership.jpeg"
                  alt="PRISH × Odoo — partnership banner"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
              {/* Overlay & caption */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent"
              />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease }}
                  className="text-white text-2xl sm:text-4xl font-semibold drop-shadow"
                >
                  Transform your ERP with PRISH × Odoo
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: 0.1 }}
                  className="mt-2 max-w-2xl text-white/90 text-sm sm:text-base drop-shadow"
                >
                  Modern, modular, integrated. From finance to operations — everything connected on one platform.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: 0.15 }}
                  className="mt-4 flex flex-wrap gap-3"
                >
                  <motion.a
                    whileTap={{ scale: 0.98 }}
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/95 px-5 py-3 text-sm font-semibold text-purple-700 hover:bg-white"
                  >
                    Get a tailored demo
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-transparent px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                  >
                    Learn about Odoo →
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF / QUICK STATS with animated counter */}
        <section className="pb-6 sm:pb-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4 sm:grid-cols-3"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-white/80 px-4 py-3 shadow-sm">
                <div className="rounded-lg bg-purple-600/10 p-2 text-purple-700"><BadgeCheck className="h-5 w-5" /></div>
                <span className="text-sm font-medium text-gray-800"><CountUp to={15} duration={1.8} />M+ users trust Odoo</span>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-white/80 px-4 py-3 shadow-sm">
                <div className="rounded-lg bg-purple-600/10 p-2 text-purple-700"><Layers3 className="h-5 w-5" /></div>
                <span className="text-sm font-medium text-gray-800">All your business on one platform</span>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-center gap-3 rounded-2xl border border-purple-100 bg-white/80 px-4 py-3 shadow-sm">
                <div className="rounded-lg bg-purple-600/10 p-2 text-purple-700"><ShieldCheck className="h-5 w-5" /></div>
                <span className="text-sm font-medium text-gray-800">Open‑source core + Enterprise options</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* APP CHIPS with marquee + on‑scroll reveal grid */}
        <section className="py-4 sm:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Integrated Apps We Implement</h2>
              <p className="mt-2 text-gray-600">Start with one app or roll out a full suite—everything connects out of the box.</p>
              {/* Marquee */}
              <div className="mt-4">
                <Marquee items={appChips} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHY ODOO + PRISH */}
        <section className="py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-6 md:grid-cols-2"
            >
              <motion.div variants={fadeUp} whileHover={{ y: -3 }} className="rounded-3xl border border-purple-100 bg-white/80 p-6 shadow">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-purple-700" />
                  <h3 className="text-lg font-semibold">Unified by design</h3>
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  Odoo’s apps are built to work together—sales, finance, inventory, projects, HR, and more—so your data flows end‑to‑end without messy integrations.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> Less manual entry and faster decisions with one source of truth.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> Modular rollout: start small, expand as you grow.</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} whileHover={{ y: -3 }} className="rounded-3xl border border-purple-100 bg-white/80 p-6 shadow">
                <div className="flex items-center gap-3">
                  <Cable className="h-5 w-5 text-purple-700" />
                  <h3 className="text-lg font-semibold">Open, flexible, future‑ready</h3>
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  Open‑source core with optional Enterprise features. No vendor lock‑in—own your data and choose cloud or on‑premise hosting.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> Visual customization with Odoo Studio, automation and reports without heavy code.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" /> Transparent, single price per user covering all apps.*</li>
                </ul>
              </motion.div>
            </motion.div>

            
          </div>
        </section>

        {/* IMPLEMENTATION TIMELINE */}
        <section className="py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight">Our Implementation Playbook</h2>
            <p className="mt-2 text-gray-600">From discovery to hypercare—designed for BFSI, Healthcare, Real Estate and beyond.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Discover", desc: "Process mapping, KPIs, data audit, quick wins." },
                { title: "Design", desc: "Solution blueprint, module scope, integrations." },
                { title: "Configure", desc: "App setup, fields, workflows, Studio tweaks." },
                { title: "Migrate", desc: "Cleansing, templates, test runs, cutover plan." },
                { title: "Train", desc: "Role-based enablement, playbooks, UAT support." },
                { title: "Go‑Live & Support", desc: "Hypercare, SLAs, enhancements, roadmap." },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-purple-100 bg-white/80 p-5 shadow"
                >
                  <div className="flex items-center gap-2 text-purple-700"><Stars className="h-4 w-4" /><h3 className="font-medium">{s.title}</h3></div>
                  <p className="mt-1 text-sm text-gray-700">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="relative overflow-hidden rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-600 to-rose-500 p-8 text-white shadow-xl"
            >
              <motion.div
                aria-hidden
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl"
              />
              <motion.div
                aria-hidden
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-white/10 blur-2xl"
              />
              <div className="relative">
                <h3 className="text-2xl font-semibold">Ready to build your next‑gen ERP on Odoo?</h3>
                <p className="mt-2 text-white/90 max-w-3xl">Talk to PRISH’s certified team about quick pilots, fixed‑fee implementations, and ongoing optimization. We’ll help you unlock value in weeks—not months.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white/95 px-5 py-3 text-sm font-semibold text-purple-700 hover:bg-white">
                    <Rocket className="h-4 w-4" /> Get a tailored demo
                  </motion.a>
                  <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-transparent px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
                    Learn about Odoo <ArrowRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[ 
                {
                  q: "What makes Odoo different?",
                  a: "It’s a unified platform of integrated apps across departments, with an open‑source foundation. You can start with one app and expand as you grow—no brittle patchwork."
                },
                {
                  q: "Cloud or on‑premise?",
                  a: "Choose what suits you: Odoo cloud (including Odoo.sh) for speed and simplicity, or self‑host for full control."
                },
                {
                  q: "How does pricing work?",
                  a: "Simple per‑user pricing covers all apps, with no hidden usage limits. Final pricing varies by region and hosting."
                },
                {
                  q: "Do you provide training & support?",
                  a: "Yes—role‑based training, UAT assistance, go‑live hypercare, SLAs, and continuous optimization are included in our services."
                },
              ].map(({ q, a }, i) => (
                <motion.div
                  key={q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-purple-100 bg-white/80 p-5 shadow"
                >
                  <h3 className="font-medium">{q}</h3>
                  <p className="mt-2 text-sm text-gray-700">{a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER MINI */}
        <footer className="pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="rounded-2xl border border-purple-100 bg-white/60 p-6 text-center shadow"
            >
              <p className="text-sm text-gray-700">PRISH is an Odoo Channel Partner. Logos are property of their respective owners and used for identification only.</p>
            </motion.div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
