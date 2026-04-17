import Image from "next/image";

const experiences = [
  {
    role: "Member of Technical Staff",
    company: "Wafer",
    url: "https://wafer.ai",
    description:
      "Building AI agents that optimize GPU kernels for inference. Shipped Kernel Arena, Trace Compare, and a cloud CUDA compiler.",
  },
  {
    role: "Co-Founder (prev)",
    company: "Willow",
    url: "https://www.ycombinator.com/companies/willow",
    description:
      "YC S24. Built AI to automate healthcare revenue cycle management, helping long-term care clinics maximize reimbursement.",
  },
];

const music = [
  "Co-concertmaster, National Youth Orchestra of Canada",
  "TSYO Concerto Competition Winner — Prokofiev Violin Concerto No. 1",
  "NYCO Concerto Competition Winner — Sarasate Carmen Fantasy",
  "Koerner Hall debut at 14",
  "Full scholarship, Phil & Eli Taylor Performance Academy",
];

const links = [
  {
    label: "Twitter",
    url: "https://x.com/IanYe0212",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ianye/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* Nav */}
      <nav className="w-full max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight text-neutral-900">
          hungbeast
        </span>
        <div className="flex items-center gap-6 text-sm text-neutral-500">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 pb-20">
        {/* Hero */}
        <section className="py-20 flex flex-col sm:flex-row items-center sm:items-start gap-10">
          <div className="animate-fade-in shrink-0">
            <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
              <Image
                src="/headshot.png"
                alt="Ian Ye"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="animate-fade-in-delay text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
              Ian Ye
            </h1>
            <p className="mt-4 text-lg text-neutral-500 max-w-lg leading-relaxed">
              Building tools that make GPUs go fast at{" "}
              <a
                href="https://wafer.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-500 transition-colors"
              >
                Wafer
              </a>
              . Stanford CS. YC founder. Violinist.
            </p>
            <div className="mt-6 flex items-center gap-3 justify-center sm:justify-start">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600 hover:border-neutral-300 hover:text-neutral-900 transition-colors"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="animate-fade-in-delay py-12 border-t border-neutral-200">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {exp.role}
                  </h3>
                  <span className="text-neutral-400">at</span>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-neutral-700 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-500 transition-colors"
                  >
                    {exp.company}
                  </a>
                </div>
                <p className="mt-2 text-neutral-500 leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Music */}
        <section className="animate-fade-in-delay-2 py-12 border-t border-neutral-200">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-8">
            Music
          </h2>
          <ul className="space-y-3">
            {music.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-neutral-600"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="py-12 border-t border-neutral-200">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-8">
            Education
          </h2>
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">
              Stanford University
            </h3>
            <p className="text-neutral-500">B.S. Computer Science</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl mx-auto px-6 py-8 border-t border-neutral-200">
        <p className="text-sm text-neutral-400 text-center">
          &copy; {new Date().getFullYear()} hungbeast
        </p>
      </footer>
    </div>
  );
}
