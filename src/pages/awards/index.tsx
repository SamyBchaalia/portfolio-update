import { useEffect, useRef } from 'react';

import { Trophy, ExternalLink } from 'lucide-react';

import { SEO } from '@/components';

export default function AwardsPage() {
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

  const awards = [
    {
      title: '1st Place – Challenge Entreprendre',
      organization: 'Sesame University',
      year: 'Dec 2021',
      description:
        'Secured first place in the Challenge Entreprendre competition, demonstrating innovative problem-solving and entrepreneurship skills.',
      image: '/assets/imgs/awards/prixchallenge.jpeg',
      articleLink:
        'https://universitesesame.com/retour-sur-le-challenge-projets-dentreprendre/',
    },
    {
      title: '1st Place – STB Hackathon',
      organization: 'Junior Entreprise ENSI',
      year: 'Jun 2021',
      description:
        'Won first place at the STB Hackathon, showcasing expertise in software development and fintech innovation.',
      image: '/assets/imgs/awards/hackathon-stb.jpg',
      articleLink:
        'https://www.facebook.com/ENSI.Junior.Entreprise/posts/hackathon-stb-bank-%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D8%AA%D9%88%D9%86%D8%B3%D9%8A%D8%A9-%D9%84%D9%84%D8%A8%D9%86%D9%83parce-que-les-surprises-ne-sarr%C3%AAtent-jam/4278007355589870/',
    },
    {
      title: '1st Place – JET Hackathon',
      organization: 'JET',
      year: 'Mar 2021 – Apr 2021',
      description:
        'Achieved first place in the JET Hackathon, competing against top developers to create cutting-edge tech solutions.',
      image: '/assets/imgs/awards/jet-hackathon.jpg',
      articleLink: 'https://example.com/jet-hackathon',
    },
    {
      title: '1st Place – Hack’ART',
      organization: 'Tunis International Center of Cultural & Digital Economy',
      year: 'May 2019',
      description:
        'Won first place in Hack’ART, developing innovative digital solutions for the cultural and creative industries.',
      image: '/assets/imgs/awards/hackart.jpeg',
      articleLink:
        'https://www.facebook.com/TICDCE2018/posts/bravo-%C3%A0-tous-les-hackers-du-hackart-2019vous-%C3%AAtes-exceptionnels-a-tr%C3%A9s-bient%C3%B4tmi/446814099388255/?locale=fr_FR',
    },
    {
      title: '1st Place – SoYouThinkYouCanCode',
      organization: 'Youth Can',
      year: 'Apr 2018',
      description:
        'Secured first place in SoYouThinkYouCanCode, proving strong coding skills and problem-solving abilities.',
      image: '/assets/imgs/awards/soyouthinkyoucancode.jpg',
      articleLink: 'https://www.facebook.com/YouthCanTun/',
    },
    {
      title: '3rd Place – Africup',
      organization: 'Youth Can',
      year: 'Apr 2019',
      description:
        'Secured third place in africup, among 1400 participating african startup proving strong coding skills and problem-solving abilities.',
      image: '/assets/imgs/awards/africup.jpg',
      articleLink:
        'https://www.wamda.com/2019/09/africup-african-startups-summit-2019-event',
    },
  ];

  return (
    <>
      <SEO
        title="Awards & Achievements - Professional Recognition"
        description="View Sami Ben Chaalia's professional awards and achievements in software development, TypeScript expertise, and project excellence. Recognized for outstanding technical contributions."
        url="https://samibenchaalia.com/awards"
      />
      <section
        id="awards"
        className="bg-gradient-to-b from-white to-gray-50 py-20 dark:from-gray-900 dark:to-gray-800 dark:text-white"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex items-center justify-center gap-4">
            <Trophy className="size-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-center text-4xl font-bold">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <div
                key={award.title}
                className="animate-on-scroll group translate-y-8 opacity-0 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4">
                      <p className="text-sm font-medium text-white">
                        {award.organization}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-white">
                        {award.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {award.year}
                      </span>
                      <a
                        href={award.articleLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <span className="text-sm">Read Article</span>
                        <ExternalLink className="size-4" />
                      </a>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
