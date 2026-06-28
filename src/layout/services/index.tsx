import { motion } from 'framer-motion';
import {
  Zap,
  Bot,
  CalendarDays,
  Rocket,
  ArrowRight,
  Check,
} from 'lucide-react';

const packages = [
  {
    icon: Rocket,
    title: 'Fast MVP Sprint',
    tagline: 'Launch your startup MVP in 72 hours',
    price: '€2,500',
    period: 'fixed price',
    badge: 'Most Popular',
    accentFrom: 'from-blue-500',
    accentTo: 'to-indigo-500',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
    includes: [
      'Auth & user management',
      'Stripe payments',
      'Admin dashboard',
      'AI integrations',
      'Production deployment',
      'Clean source code',
    ],
    cta: 'Start Your MVP',
  },
  {
    icon: Bot,
    title: 'AI Automation Sprint',
    tagline: 'Automate business processes in 3 days',
    price: '€1,500',
    period: 'fixed price',
    badge: 'Quick Win',
    accentFrom: 'from-emerald-500',
    accentTo: 'to-teal-500',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    includes: [
      'AI customer support bot',
      'Internal knowledge base',
      'CRM automation',
      'Quote generation',
      'WhatsApp / Slack integrations',
      'Custom workflow logic',
    ],
    cta: 'Automate Now',
  },
  {
    icon: CalendarDays,
    title: 'Engineering Week',
    tagline: 'One week of full-time senior execution',
    price: '€3,500',
    period: 'per week',
    badge: 'Best Value',
    accentFrom: 'from-violet-500',
    accentTo: 'to-purple-500',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    includes: [
      'Full-time focus on your project',
      'New features & functionality',
      'Technical debt reduction',
      'Performance optimizations',
      'Architecture consulting',
      'Daily video updates',
    ],
    cta: 'Book a Week',
  },
  {
    icon: Zap,
    title: 'Emergency Rescue',
    tagline: 'Urgent deadline? I jump in immediately.',
    price: '€2k–5k',
    period: 'depending on scope',
    badge: 'Urgent',
    accentFrom: 'from-rose-500',
    accentTo: 'to-pink-500',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-400',
    includes: [
      'Investor demo prep',
      'Agency overflow work',
      'Last-minute MVP launch',
      'Production bug fixes',
      'Client deadline rescue',
      'Same-day availability',
    ],
    cta: 'Get Help Now',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Services() {
  const calendlyUrl = 'https://calendly.com/sami-benchaalia/30min';

  return (
    <section id="services" className="bg-slate-50 py-28 dark:bg-[#0A0A14]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="mb-5 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            Fixed-Price Packages
          </span>
          <h2 className="mb-5 text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Ship Faster.{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              Pay a Fixed Price.
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-gray-500 dark:text-white/40">
            No hourly billing surprises. No scope creep. You know the cost and
            timeline before we write a single line of code.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover dark:border-white/[0.07] dark:bg-[#0E0E1C] dark:shadow-card-dark dark:hover:border-white/[0.12]"
              >
                {/* Gradient top accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${pkg.accentFrom} ${pkg.accentTo}`}
                />

                <div className="flex flex-1 flex-col p-6">
                  {/* Badge */}
                  <span
                    className={`mb-5 self-start rounded-full bg-gradient-to-r ${pkg.accentFrom} ${pkg.accentTo} px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white`}
                  >
                    {pkg.badge}
                  </span>

                  {/* Icon */}
                  <div className={`mb-4 w-fit rounded-xl p-2.5 ${pkg.iconBg}`}>
                    <Icon className={`size-5 ${pkg.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                    {pkg.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-gray-500 dark:text-white/40">
                    {pkg.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-5 border-b border-gray-100 pb-5 dark:border-white/[0.06]">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400 dark:text-white/30">
                      {pkg.period}
                    </p>
                    <p className="text-[1.9rem] font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                      {pkg.price}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="mb-7 flex-1 space-y-2">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-white/50"
                      >
                        <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${pkg.accentFrom} ${pkg.accentTo} px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:opacity-90`}
                  >
                    {pkg.cta}
                    <ArrowRight className="size-3.5" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 text-center text-sm text-gray-400 dark:text-white/25"
        >
          Not sure which package fits your project?{' '}
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
          >
            Book a free 30-min discovery call →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
