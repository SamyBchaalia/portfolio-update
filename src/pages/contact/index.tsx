import { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Calendar,
  MessageCircle,
  Send,
  ArrowRight,
} from 'lucide-react';

import { SEO } from '@/components';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sami.benchaalia.karriery@gmail.com',
    link: 'mailto:sami.benchaalia.karriery@gmail.com',
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-500/[0.08]',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+216 96 886 947',
    link: 'https://wa.me/21696886947',
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-500/[0.08]',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tunis, Tunisia · Remote worldwide',
    link: undefined,
    color: 'text-violet-500 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-500/[0.08]',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    sub: 'Connect with me',
    link: 'https://www.linkedin.com/in/sami-ben-chaalia-recruitement',
  },
  {
    icon: Github,
    label: 'GitHub',
    sub: 'See my code',
    link: 'https://github.com/SamyBchaalia',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    sub: 'Message directly',
    link: 'https://wa.me/21696886947',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show');
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Contact — Book a Free Discovery Call"
        description="Book a free 30-minute call with Sami Ben Chaalia, Senior Full-Stack Engineer. Discuss your project, get a fixed price, and start shipping in days."
        url="https://sami.benchaalia.com/contact"
      />

      <section
        id="contact"
        className="bg-slate-50 py-28 dark:bg-[#0A0A14] dark:text-white"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
              Let&apos;s Work Together
            </span>
            <h2 className="mb-4 text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Start Your Project{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Today
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-gray-500 dark:text-white/40">
              The fastest way to get started is a free 30-minute discovery call.
              No commitment, no pitch — just a conversation about your project.
            </p>
          </motion.div>

          {/* Quick CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-14 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <motion.a
              href="https://calendly.com/sami-benchaalia/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-glow inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-bold text-white shadow-glow-blue transition-all hover:bg-blue-500 hover:shadow-glow-blue-lg"
            >
              <Calendar className="size-5" />
              Book a Free 30-Min Call
            </motion.a>
            <motion.a
              href="https://wa.me/21696886947"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-base font-bold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 dark:border-white/[0.1] dark:bg-white/[0.04] dark:text-white/70 dark:hover:bg-white/[0.08]"
            >
              <MessageCircle className="size-5" />
              WhatsApp Me
            </motion.a>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* ── Contact Form ──────────────────────────────── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-card dark:border-white/[0.07] dark:bg-[#0E0E1C]">
                <div className="border-b border-gray-100 px-7 py-5 dark:border-white/[0.06]">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="mt-0.5 text-sm text-gray-400 dark:text-white/30">
                    I&apos;ll reply within 24 hours
                  </p>
                </div>

                <form className="space-y-5 px-7 py-6">
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-white/60"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/20 dark:focus:border-blue-400 dark:focus:bg-white/[0.06]"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-white/60"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/20 dark:focus:border-blue-400 dark:focus:bg-white/[0.06]"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="budget"
                      className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-white/60"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/[0.08] dark:bg-[#0E0E1C] dark:text-white dark:focus:border-blue-400"
                    >
                      <option value="">Select a range...</option>
                      <option>€1,500 – €2,500 (AI Automation / MVP)</option>
                      <option>€2,500 – €5,000 (Full MVP / Rescue)</option>
                      <option>€3,500+/week (Dedicated Engineering)</option>
                      <option>Let&apos;s discuss</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-gray-700 dark:text-white/60"
                    >
                      Tell Me About Your Project
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-900 transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/20 dark:focus:border-blue-400 dark:focus:bg-white/[0.06]"
                      placeholder="What are you building? What's the timeline? Any specific requirements?"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-500"
                    >
                      <Send className="size-4" />
                      Send Message
                    </button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* ── Right: Contact info + social ──────────────── */}
            <div className="space-y-5">
              {/* Contact info cards */}
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-white p-5 shadow-card dark:border-white/[0.07] dark:bg-[#0E0E1C]"
                  >
                    <div className={`rounded-xl p-3 ${info.bg}`}>
                      <Icon className={`size-5 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-white/30">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={
                            info.link.startsWith('http') ? '_blank' : undefined
                          }
                          rel={
                            info.link.startsWith('http')
                              ? 'noreferrer'
                              : undefined
                          }
                          className="mt-0.5 text-sm font-semibold text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-white">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-card dark:border-white/[0.07] dark:bg-[#0E0E1C]"
              >
                <p className="mb-4 text-sm font-bold text-gray-900 dark:text-white">
                  Connect on Social
                </p>
                <div className="space-y-3">
                  {socialLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 rounded-xl border border-transparent p-3 text-gray-600 transition-all hover:border-gray-100 hover:bg-gray-50 hover:text-gray-900 dark:text-white/40 dark:hover:border-white/[0.06] dark:hover:bg-white/[0.03] dark:hover:text-white"
                      >
                        <Icon className="size-4.5" />
                        <div>
                          <p className="text-sm font-semibold">{s.label}</p>
                          <p className="text-xs text-gray-400 dark:text-white/25">
                            {s.sub}
                          </p>
                        </div>
                        <ArrowRight className="ml-auto size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Calendly reminder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-2xl border border-blue-100 bg-blue-50 p-5 dark:border-blue-500/20 dark:bg-blue-500/[0.06]"
              >
                <p className="mb-1 text-sm font-bold text-blue-800 dark:text-blue-300">
                  Prefer a quick call?
                </p>
                <p className="mb-3 text-xs text-blue-600 dark:text-blue-400/70">
                  Book a 30-minute slot directly in my calendar — no
                  back-and-forth needed.
                </p>
                <a
                  href="https://calendly.com/sami-benchaalia/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  <Calendar className="size-3.5" />
                  Open Calendly →
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
