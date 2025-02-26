import { motion } from 'framer-motion';
import { File, Github, Linkedin, Mail } from 'lucide-react';

import ContactPage from './contact';
import { About } from '@/layout/about';
import { Experience } from '@/layout/experience';

export default function Home() {
  return (
    <>
      <section id="hero" className=" relative flex items-center justify-center">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-2"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-semibold text-blue-600"
            >
              Hi, I&apos;m
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl font-bold sm:text-7xl"
            >
              Sami Ben Chaalia
              <span className="block text-gray-600">Full Stack Developer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-2xl text-xl text-gray-600 dark:text-white"
            >
              TypeScript Senior Developer
              <ul>
                <li>NodeJS Express/NestJS</li>
                <li>React/Angular</li>
                <li>
                  Powerful & resilient apps made with a clean architecture.
                </li>
              </ul>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex space-x-6"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/SamyBchaalia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com/in/sami-ben-chaalia-recruitement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:sami.benchaalia.karriery@gmail.com"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="/assets/Samy Ben Chaalia English Resume 25.pdf"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <File size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <About />
      <Experience />
      <ContactPage />
    </>
  );
}
