import { motion } from 'framer-motion';
import {
  Star,
  ExternalLink,
  CheckCircle,
  MessageSquare,
  Calendar,
  MessageCircle,
  ShieldCheck,
  Timer,
  Award,
} from 'lucide-react';

const trustSignals = [
  {
    icon: ShieldCheck,
    label: '100% Completion',
    sub: 'Every project delivered',
  },
  { icon: Timer, label: '< 24h Response', sub: 'Fast, clear communication' },
  { icon: Award, label: 'Top Rated', sub: '5★ on all platforms' },
];

const freelanceProfiles = [
  {
    platform: 'Upwork',
    logo: 'https://www.upwork.com/favicon.ico',
    profileUrl: 'https://www.upwork.com/freelancers/samibenchaalia',
    rating: 5,
    reviews: 6,
    metric: '100% Job Success',
    color: 'emerald' as const,
    badge: 'Top Rated',
  },
  {
    platform: 'Freelancer',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKL9X9GXvaXXSnUmZTncE3hUokvNkmFwPiKw&s',
    profileUrl: 'https://www.freelancer.com/u/samibchaalia',
    rating: 5,
    reviews: 1,
    metric: '100% Completion Rate',
    color: 'blue' as const,
    badge: 'Certified',
  },
];

const colorMap = {
  emerald: {
    badge:
      'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
    icon: 'bg-emerald-50 dark:bg-emerald-900/30',
    check: 'text-emerald-500',
    btn: 'bg-emerald-600 hover:bg-emerald-500',
    border: 'hover:border-emerald-500/30',
  },
  blue: {
    badge: 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
    icon: 'bg-blue-50 dark:bg-blue-900/30',
    check: 'text-blue-500',
    btn: 'bg-blue-600 hover:bg-blue-500',
    border: 'hover:border-blue-500/30',
  },
};

export function Freelance() {
  const whatsappNumber = '21696886947';
  const whatsappMessage = encodeURIComponent(
    'Hi Sami! I found your website and would like to discuss a project.',
  );

  return (
    <section id="freelance" className="bg-white py-28 dark:bg-[#07070E]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
            Verified Profiles
          </span>
          <h2 className="mb-4 text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Trusted on Global{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Platforms
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-gray-500 dark:text-white/40">
            100% success rate, 5-star reviews, and a track record of delivering
            on time and on budget.
          </p>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {trustSignals.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5 dark:border-white/[0.06] dark:bg-white/[0.03]"
              >
                <div className="rounded-xl bg-white p-2.5 shadow-sm dark:bg-white/[0.06]">
                  <Icon className="size-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {s.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-white/35">
                    {s.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Platform cards */}
        <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {freelanceProfiles.map((profile, index) => {
            const colors = colorMap[profile.color];
            return (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={`group overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:shadow-card-hover dark:border-white/[0.07] dark:bg-[#0E0E1C] dark:shadow-card-dark ${colors.border}`}
              >
                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-xl p-2.5 ${colors.icon}`}>
                      <img
                        src={profile.logo}
                        alt={profile.platform}
                        width={28}
                        height={28}
                        loading="lazy"
                        className="size-7"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {profile.platform}
                      </h3>
                      <p className="text-xs text-gray-400 dark:text-white/30">
                        Freelance Platform
                      </p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider ${colors.badge}`}
                  >
                    {profile.badge}
                  </span>
                </div>

                {/* Rating */}
                <div className="mb-5 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          className={`size-4 ${n <= profile.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200 dark:text-white/10'}`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {profile.rating}.0
                    </span>
                    <span className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-white/[0.05] dark:text-white/30">
                      <MessageSquare className="size-3" />
                      {profile.reviews} review{profile.reviews > 1 ? 's' : ''}
                    </span>
                  </div>

                  <div
                    className={`flex items-center gap-2 text-sm font-medium ${colors.check} dark:opacity-80`}
                  >
                    <CheckCircle className="size-4" />
                    {profile.metric}
                  </div>
                </div>

                {/* CTA */}
                <motion.a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-colors ${colors.btn}`}
                >
                  View Full Profile
                  <ExternalLink className="size-3.5" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* Final CTA — always dark */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="noise relative overflow-hidden rounded-3xl bg-[#07070E] p-1"
        >
          {/* Gradient border */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/10" />
          <div className="relative rounded-[1.4rem] bg-[#07070E] px-8 py-14 text-center sm:px-12">
            {/* Radial glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />

            <div className="relative">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-4 py-1.5 text-sm font-medium text-white/60">
                <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
                Available now — limited spots this month
              </span>

              <h3 className="mb-4 text-[clamp(1.6rem,4vw,2.5rem)] font-extrabold leading-tight tracking-tight text-white">
                Ready to Ship Something
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Exceptional?
                </span>
              </h3>

              <p className="mx-auto mb-9 max-w-xl text-base text-white/40 sm:text-lg">
                Book a free 30-minute call. I&apos;ll scope your project,
                recommend the right package, and give you a clear fixed price —
                no surprises, no hourly billing.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
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
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.1] bg-white/[0.05] px-8 py-3.5 text-base font-bold text-white/80 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.1] hover:text-white"
                >
                  <MessageCircle className="size-5" />
                  WhatsApp Me
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
