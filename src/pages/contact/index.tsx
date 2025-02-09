import { useEffect, useRef } from 'react';

import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from 'lucide-react';

export default function ContactPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="size-6" />,
      label: 'Email',
      value: 'sami.benchaalia.karriery@gmail.com',
      link: 'mailto:sami.benchaalia.karriery@gmail.com',
    },
    {
      icon: <Phone className="size-6" />,
      label: 'Phone',
      value: '+216 96 886 947',
      link: 'tel:+21696886947',
    },
    {
      icon: <MapPin className="size-6" />,
      label: 'Location',
      value: 'Tunis, Tunisia',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="size-6" />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/sami-ben-chaalia-recruitement',
    },
    {
      icon: <Github className="size-6" />,
      label: 'GitHub',
      link: 'https://github.com/SamyBchaalia',
    },
    {
      icon: <Facebook className="size-6" />,
      label: 'Facebook',
      link: 'https://www.facebook.com/samibchaalia',
    },
  ];

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-50 to-white py-20 dark:from-gray-800 dark:to-gray-900 dark:text-white sm:py-2"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-2 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold">Get in Touch</h2>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div
            className="animate-on-scroll translate-y-8 opacity-0 transition-all duration-700 ease-out"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-6 text-2xl font-semibold">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-blue-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-blue-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-blue-400"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div
              className="animate-on-scroll translate-y-8 opacity-0 transition-all duration-700 ease-out"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-6 text-2xl font-semibold">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div
                      key={info.label}
                      className="flex items-center space-x-4"
                    >
                      <div className="text-blue-600 dark:text-blue-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div
              className="animate-on-scroll translate-y-8 opacity-0 transition-all duration-700 ease-out"
              style={{ transitionDelay: '300ms' }}
            >
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-6 text-2xl font-semibold">Connect With Me</h3>
                <div className="flex justify-around">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center space-y-2 text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      {social.icon}
                      <span className="text-sm">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
