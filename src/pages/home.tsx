import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Github,
  Linkedin,
  Mail,
  FileText,
  Sparkles,
} from 'lucide-react';

import ContactPage from './contact';
import { SEO } from '@/components';
import { About } from '@/layout/about';
import { Experience } from '@/layout/experience';
import { Freelance } from '@/layout/freelance';
import { Services } from '@/layout/services';

const stats = [
  { value: '6+', label: 'Years Experience', sub: 'Senior-level expertise' },
  { value: '20+', label: 'Projects Shipped', sub: 'Startups to enterprises' },
  { value: '5★', label: 'Upwork Rating', sub: '100% success rate' },
  { value: '5', label: 'Countries Served', sub: 'EU, USA & beyond' },
];

const techPills = [
  'React',
  'TypeScript',
  'NestJS',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Next.js',
  'Angular',
  'Docker',
  'AWS',
  'OpenAI',
  'Stripe',
  'React',
  'TypeScript',
  'NestJS',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Next.js',
  'Angular',
  'Docker',
  'AWS',
  'OpenAI',
  'Stripe',
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Home() {
  return (
    <>
      <SEO
        title="Senior Full-Stack Engineer & AI Developer | MVPs in Days"
        description="Sami Ben Chaalia — Senior Full-Stack Engineer with 6+ years building MVPs, AI products, and business software for startups and agencies. Fixed-price packages from €1,500. Book a free call today."
        url="https://sami.benchaalia.com/"
      />

      {/* ─── Hero ──────────────────────────────────────────── */}
      <section
        id="hero"
        className="noise relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#07070E]"
      >
        {/* Dot grid */}
        <div className="dot-grid absolute inset-0 opacity-50" />

        {/* Radial glow from top */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />

        {/* Bottom fade to next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07070E] to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Available for new projects
                <Sparkles className="size-3.5 text-blue-400" />
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="mb-7 text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white"
            >
              Building MVPs &amp; AI
              <br className="hidden sm:block" /> Products in{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
                Days,
              </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white/90 to-white/50 bg-clip-text text-transparent">
                Not Months
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl"
            >
              I&apos;m{' '}
              <span className="font-semibold text-white/80">
                Sami Ben Chaalia
              </span>
              , a Senior Full-Stack Engineer with{' '}
              <span className="text-white/80">6+ years</span> delivering
              production software for startups and agencies across{' '}
              <span className="text-white/80">5 countries</span>. I combine deep
              engineering expertise with AI-assisted workflows to ship faster
              than any traditional team — without cutting corners.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mb-12 flex flex-wrap gap-3"
            >
              <motion.a
                href="https://calendly.com/sami-benchaalia/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-glow relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-glow-blue transition-all duration-300 hover:bg-blue-500 hover:shadow-glow-blue-lg"
              >
                <Calendar className="size-5" />
                Book a Free Call
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.1] bg-white/[0.05] px-7 py-3.5 text-base font-bold text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1] hover:text-white"
              >
                View Packages
                <ArrowRight className="size-5" />
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              {[
                {
                  href: 'https://github.com/SamyBchaalia',
                  icon: Github,
                  label: 'GitHub',
                },
                {
                  href: 'https://linkedin.com/in/sami-ben-chaalia-recruitement',
                  icon: Linkedin,
                  label: 'LinkedIn',
                },
                {
                  href: 'mailto:sami.benchaalia.karriery@gmail.com',
                  icon: Mail,
                  label: 'Email',
                },
                {
                  href: '/assets/samiresume25.pdf',
                  icon: FileText,
                  label: 'Resume',
                },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    href.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                  whileHover={{ scale: 1.15, color: '#ffffff' }}
                  className="flex size-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-white/40 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white/90"
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </motion.a>
              ))}

              <span className="ml-2 text-xs text-white/25">
                sami.benchaalia@sesame.com.tn
              </span>
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + i * 0.08 }}
                className="glass rounded-2xl p-5"
              >
                <p className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-white/70">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-white/30">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech marquee strip */}
        <div className="relative overflow-hidden border-t border-white/[0.05] bg-white/[0.02] py-4">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#07070E] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#07070E] to-transparent" />
          <div className="marquee-track">
            {techPills.map((tech, i) => (
              <span
                // eslint-disable-next-line react/no-array-index-key
                key={`${tech}-${i}`}
                className="mx-3 whitespace-nowrap rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-white/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <About />
      <Experience />
      <Freelance />
      <ContactPage />
    </>
  );
}
