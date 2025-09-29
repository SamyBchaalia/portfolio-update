export function About() {
  return (
    <section
      id="about"
      className="bg-white py-2 dark:bg-gray-800 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold ">About Me</h2>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-white">
              I&apos;m a passionate Full Stack Developer with expertise in
              building modern web applications. I specialize in building
              cutting-edge software solutions with TypeScript and JavaScript.
              With expertise in React, Angular, Next.js, NestJS, and Express, I
              design and implement versatile RESTful APIs and microservices,
              leveraging CQRS and DDD principles for scalable and maintainable
              applications. Node.js has been a cornerstone of my development
              stack, enabling me to craft enterprise-grade web applications
              tailored to diverse client needs worldwide. For
              performance-critical projects, I optimize solutions to deliver
              speed, reliability, and seamless user experiences. 🚀 I excel in
              working with SQL, NoSQL, and Elasticsearch databases, ensuring
              efficient large-scale data processing and search capabilities.
              Whether tackling straightforward tasks or solving complex
              technical challenges, I strive for elegant solutions that balance
              innovation and practicality. Driven by curiosity and a passion for
              ambitious projects.
            </p>
            <p className="text-lg text-gray-600 dark:text-white">
              I&apos;m always eager to embrace new opportunities and grow
              alongside them. Let&apos;s connect and build something exceptional
              together!
            </p>
          </div>
          <div className="relative">
            <img
              src="/assets/imgs/sami_profile_image.jpg"
              alt="Workspace"
              width={600}
              height={800}
              loading="lazy"
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
