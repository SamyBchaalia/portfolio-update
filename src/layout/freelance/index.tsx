import { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import {
  Star,
  Briefcase,
  PhoneCall,
  TrendingUp,
  CheckCircle,
  Calendar,
} from 'lucide-react';

export function Freelance() {
  const controls = useAnimation();

  useEffect(() => {
    void controls.start({ opacity: 1, y: 0 });
  }, [controls]);
  const freelanceProfiles = [
    {
      platform: 'Upwork',
      logo: 'https://www.upwork.com/favicon.ico',
      profileUrl: 'https://www.upwork.com/freelancers/samibenchaalia',
      stats: {
        rating: 5.0,
        reviews: '3',
        successRate: '100%',
      },
      color: 'green',
    },
    {
      platform: 'Freelancer',
      logo: 'https://www.freelancer.com/favicon.ico',
      profileUrl: 'https://www.freelancer.com/u/samibenchaalia',
      stats: {
        rating: 5.0,
        reviews: '1',
        completionRate: '100%',
      },
      color: 'blue',
    },
  ];

  const whatsappNumber = '+21696886947';
  const whatsappMessage = encodeURIComponent(
    'Hi Sami! I found your profile and would like to discuss a project.',
  );

  return (
    <section
      id="freelance"
      className="bg-gradient-to-b from-white to-gray-50 py-20 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">Freelance Profiles</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Connect with me on top freelance platforms for your next project
          </p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
          />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {freelanceProfiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all 
                duration-300 hover:shadow-2xl dark:bg-gray-800"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br 
                ${profile.color === 'green' ? 'from-green-400/10 to-green-600/10' : 'from-blue-400/10 to-blue-600/10'}
                opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.img
                      src={profile.logo}
                      alt={`${profile.platform} logo`}
                      className="animate-float size-12 rounded-lg"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                    <h3 className="text-2xl font-bold">{profile.platform}</h3>
                  </div>
                  <motion.a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-full px-6 py-2 font-semibold text-white transition-colors
                      ${profile.color === 'green' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                  >
                    View Profile
                  </motion.a>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-4">
                  {Object.entries(profile.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                    >
                      {key === 'rating' && (
                        <Star className="size-5 fill-yellow-500 text-yellow-500" />
                      )}
                      {(key === 'jobs' || key === 'reviews') && (
                        <Briefcase className="size-5 text-blue-500" />
                      )}
                      {(key === 'successRate' || key === 'completionRate') && (
                        <CheckCircle className="size-5 text-green-500" />
                      )}
                      {(key === 'hourlyRate' || key === 'earnings') && (
                        <TrendingUp className="size-5 text-green-600" />
                      )}
                      <span className="text-sm">
                        <span className="font-semibold">{value}</span>{' '}
                        <span className="text-gray-500 dark:text-gray-400">
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 space-y-6"
        >
          <div className="text-center">
            <h3 className="mb-8 text-2xl font-bold">
              Ready to start your project?
            </h3>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="https://calendly.com/sami-benchaalia/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 rounded-full bg-blue-600 px-8 py-4 
                  font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                <Calendar className="size-5" />
                <span>Schedule a Call (30 min)</span>
              </motion.a>
              <motion.a
                href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="animate-pulse-glow inline-flex items-center space-x-3 rounded-full bg-green-600 px-8 py-4 
                  font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
              >
                <PhoneCall className="size-5" />
                <span>WhatsApp: {whatsappNumber}</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
