import { motion } from 'framer-motion';
import {
  Star,
  ExternalLink,
  CheckCircle,
  MessageSquare,
  Calendar,
  PhoneCall,
} from 'lucide-react';

export function Freelance() {
  const freelanceProfiles = [
    {
      platform: 'Upwork',
      logo: 'https://www.upwork.com/favicon.ico',
      profileUrl: 'https://www.upwork.com/freelancers/samibenchaalia',
      rating: 5,
      reviews: 3,
      successRate: 100,
      color: 'green',
      description: 'Top Rated freelancer with expertise in TypeScript & React',
    },
    {
      platform: 'Freelancer',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKL9X9GXvaXXSnUmZTncE3hUokvNkmFwPiKw&s',
      profileUrl: 'https://www.freelancer.com/u/samibchaalia',
      rating: 5,
      reviews: 1,
      completionRate: 100,
      color: 'blue',
      description: 'Certified professional with proven track record',
    },
  ];

  const whatsappNumber = '+21696886947';
  const whatsappMessage = encodeURIComponent(
    'Hi Sami! I found your profile and would like to discuss a project.',
  );

  return (
    <section id="freelance" className="px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-balance text-4xl font-bold md:text-5xl">
            Freelance Profiles
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-xl text-gray-600 dark:text-gray-400">
            Connect with me on top freelance platforms for your next project
          </p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
          />
        </motion.div>

        {/* Platform Cards */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {freelanceProfiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border-0 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
            >
              {/* Platform Header */}
              <div className="mb-6 flex items-center gap-4">
                <div
                  className={`rounded-2xl p-3 ${
                    profile.color === 'green'
                      ? 'bg-green-50 dark:bg-green-950'
                      : 'bg-blue-50 dark:bg-blue-950'
                  }`}
                >
                  <img
                    src={profile.logo}
                    alt={`${profile.platform} logo`}
                    className="size-8"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">
                    {profile.platform}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {profile.description}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mb-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {['star1', 'star2', 'star3', 'star4', 'star5'].map(
                      (el, i) => (
                        <Star
                          key={el}
                          className={`size-4 ${
                            i < profile.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ),
                    )}
                  </div>
                  <span className="font-medium dark:text-white">
                    {profile.rating}
                  </span>
                  <div className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs dark:bg-gray-700">
                    <MessageSquare className="mr-1 size-3" />
                    {profile.reviews} review{profile.reviews !== 1 ? 's' : ''}
                  </div>
                </div>

                {/* Success Rate */}
                <div className="flex items-center gap-2">
                  <CheckCircle
                    className={`size-4 ${
                      profile.color === 'green'
                        ? 'text-green-600'
                        : 'text-blue-600'
                    }`}
                  />
                  <span className="text-sm font-medium dark:text-gray-300">
                    {profile.successRate || profile.completionRate}% completion
                    rate
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold text-white transition-transform duration-200 ${
                  profile.color === 'green'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                <span>View Profile</span>
                <ExternalLink className="size-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="rounded-3xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-12 dark:from-green-500/5 dark:to-blue-500/5">
            <h3 className="mb-4 text-3xl font-bold dark:text-white">
              Ready to start your project?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Let&apos;s discuss your requirements and bring your vision to life
              with professional web development services.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <motion.a
                href="https://calendly.com/sami-benchaalia/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 font-semibold text-white transition-all hover:from-green-600 hover:to-blue-600"
              >
                <Calendar className="size-5" />
                Schedule a Call (30 min)
              </motion.a>
              <motion.a
                href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <PhoneCall className="size-5" />
                WhatsApp: {whatsappNumber}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
