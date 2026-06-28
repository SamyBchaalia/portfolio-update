import { motion } from 'framer-motion';
import { Zap, Globe2, Trophy, BrainCircuit, ArrowRight } from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    title: 'AI-Accelerated',
    body: 'Deliver in days what traditional teams take weeks to build — AI workflows built into every sprint.',
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-500/[0.08]',
  },
  {
    icon: Globe2,
    title: 'International',
    body: 'Clients in Belgium, Spain, France, Greece & the USA — I understand global delivery expectations.',
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-500/[0.08]',
  },
  {
    icon: Trophy,
    title: '5× Hackathon Winner',
    body: 'First-place finishes under extreme time constraints — proven ability to ship under pressure.',
    color: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-500/[0.08]',
  },
  {
    icon: BrainCircuit,
    title: 'Full-Stack + AI',
    body: 'React frontends, NestJS APIs, cloud infra, and AI integrations — I own the entire product.',
    color: 'text-violet-500 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-500/[0.08]',
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

export function About() {
  return (
    <section id="about" className="bg-white py-28 dark:bg-[#07070E]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ── Left: Text content ─────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span
              variants={itemVariants}
              className="mb-4 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400"
            >
              About Me
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="mb-6 text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
            >
              A Senior Engineer Who Thinks{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Like a Founder
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-5 text-base leading-relaxed text-gray-500 dark:text-white/45 sm:text-lg"
            >
              I&apos;ve spent 6+ years building SaaS products, internal tools,
              AI integrations, and complex web applications for startups and
              agencies across Europe and the USA. I&apos;m not just a developer
              who writes code — I understand product strategy, user experience,
              and what makes software create real business value.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-base leading-relaxed text-gray-500 dark:text-white/45 sm:text-lg"
            >
              By combining deep technical expertise with AI-assisted development
              workflows, I ship production-ready software at a speed that gives
              my clients a competitive advantage. I communicate clearly, deliver
              on time, and take full ownership of the outcome.
            </motion.p>

            <motion.a
              variants={itemVariants}
              href="https://calendly.com/sami-benchaalia/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              Book a Discovery Call
              <ArrowRight className="size-4" />
            </motion.a>
          </motion.div>

          {/* ── Right: Image + highlight cards ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Image with glow frame */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-gray-200/60 shadow-[0_8px_60px_rgba(0,0,0,0.1)] dark:border-white/[0.06] dark:shadow-[0_8px_60px_rgba(0,0,0,0.5)]">
                <img
                  src="/assets/imgs/sami_profile_image.jpg"
                  alt="Sami Ben Chaalia — Senior Full-Stack Engineer"
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
                {/* Image overlay badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3.5 py-2 backdrop-blur-md">
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-white">
                      Available for projects
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight chips grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="rounded-xl border border-gray-100 bg-gray-50/80 p-4 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <div className={`mb-2 w-fit rounded-lg p-1.5 ${item.bg}`}>
                      <Icon className={`size-3.5 ${item.color}`} />
                    </div>
                    <p className="mb-1 text-xs font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-[0.7rem] leading-relaxed text-gray-500 dark:text-white/35">
                      {item.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
