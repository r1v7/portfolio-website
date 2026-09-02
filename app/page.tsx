import Image from "next/image";
import { asset } from "./lib/asset";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import TypedRoles from "./components/TypedRoles";
import ProjectGrid from "./components/ProjectGrid";
import ContactForm from "./components/ContactForm";
import { projects } from "./data/projects";

const aboutCards = [
  {
    title: "Who I Am",
    body: "I'm a passionate and driven computer science graduate with a strong focus on artificial intelligence, UI/UX design, and data analysis. I thrive on combining creativity with technical skill to build meaningful, user-centric technology.",
  },
  {
    title: "My Background",
    body: "Bachelor's in Computer Science at King Faisal University (2020–2025), with hands-on experience in Python, TensorFlow, PyTorch, and Power BI — applied in real projects like GymTech, an AI-powered fitness and nutrition app.",
  },
  {
    title: "My Approach",
    body: "I pair technical expertise with human-centered design. Whether building AI-driven features or intuitive interfaces, I focus on problem-solving, collaboration, and continuous learning — building systems that are efficient and aligned with real user needs.",
  },
];

const technicalSkills = [
  { name: "Programming & Web", detail: "Python, C++, Java, JavaScript, HTML, CSS, FastAPI" },
  { name: "AI & Machine Learning", detail: "NumPy, Pandas, Scikit-Learn, TensorFlow, PyTorch, OpenCV" },
  { name: "Databases", detail: "SQL, MySQL, PostgreSQL, MongoDB" },
  { name: "Data Visualization", detail: "Power BI, Matplotlib, Seaborn" },
  { name: "Version Control", detail: "Git, GitHub" },
  { name: "UI/UX Design", detail: "Figma, Canva" },
];

const softSkills = [
  { name: "Problem Solving", detail: "Identifying challenges and developing practical, data-driven solutions." },
  { name: "Team Collaboration", detail: "Working with cross-functional teams using Agile methodologies." },
  { name: "Critical Thinking", detail: "Analyzing complex systems and proposing innovative improvements." },
  { name: "Technical Writing", detail: "Documenting processes, models, and user flows clearly." },
  { name: "Adaptability", detail: "Quick to learn new tools and thrive in dynamic environments." },
  { name: "Communication", detail: "Bilingual in Arabic and English, presenting to technical and non-technical audiences." },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main className="relative z-10">
        {/* Hero */}
        <section id="hero" className="relative flex min-h-screen items-center pt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-text-muted">
                Portfolio / 2026
              </p>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Abdullah
                <br />
                Alhodar
              </h1>
              <p className="mt-6 text-xl text-text-muted sm:text-2xl">
                I&apos;m a <TypedRoles />
              </p>
              <p className="mt-6 max-w-xl text-text-muted">
                Building intelligent, human-centered products at the intersection of
                artificial intelligence, data, and design.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-border px-7 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="relative mx-auto animate-float-slow">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent to-accent-2 opacity-20 blur-2xl" />
              <div className="relative aspect-square w-64 overflow-hidden rounded-[2rem] border border-border sm:w-80">
                <Image
                  src={asset("/img/profile.jpg")}
                  alt="Abdullah Alhodar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-28">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading eyebrow="About" title="Combining technical depth with design sense" />

            <div className="grid gap-6 md:grid-cols-3">
              {aboutCards.map((card, i) => (
                <Reveal key={card.title} delay={i * 100}>
                  <div className="h-full rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/50">
                    <h3 className="font-display text-lg font-semibold text-accent">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-text-muted">
                      {card.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-28">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading eyebrow="Work" title="Selected projects" />
            <Reveal>
              <ProjectGrid projects={projects} />
            </Reveal>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-28">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading eyebrow="Skills" title="Toolbox & strengths" />

            <div className="mb-16">
              <h3 className="mb-6 font-display text-xl font-semibold">Technical Skills</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {technicalSkills.map((skill, i) => (
                  <Reveal key={skill.name} delay={i * 60}>
                    <div className="h-full rounded-xl border border-border bg-surface p-6">
                      <h4 className="font-medium">{skill.name}</h4>
                      <p className="mt-2 text-sm text-text-muted">{skill.detail}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 font-display text-xl font-semibold">Soft Skills</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {softSkills.map((skill, i) => (
                  <Reveal key={skill.name} delay={i * 60}>
                    <div className="h-full rounded-xl border border-border bg-surface p-6">
                      <h4 className="font-medium">{skill.name}</h4>
                      <p className="mt-2 text-sm text-text-muted">{skill.detail}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-28">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading eyebrow="Contact" title="Let's build something together" />

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div className="h-full rounded-2xl border border-border bg-surface p-8">
                  <h3 className="font-display text-xl font-semibold">Get in touch</h3>
                  <div className="mt-8 space-y-6">
                    <ContactItem
                      label="Email"
                      value="alhodarabdullah@gmail.com"
                      href="mailto:alhodarabdullah@gmail.com"
                    />
                    <ContactItem
                      label="LinkedIn"
                      value="linkedin.com/in/Abdullah-Alhodar"
                      href="https://www.linkedin.com/in/abdullah-alhodar-0394892a3"
                    />
                    <ContactItem
                      label="GitHub"
                      value="github.com/r1v7"
                      href="https://github.com/r1v7"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="h-full rounded-2xl border border-border bg-surface p-8">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border py-8 text-center text-sm text-text-muted">
        &copy; {new Date().getFullYear()} Abdullah Alhodar. All rights reserved.
      </footer>
    </>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-14">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}

function ContactItem({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group block"
    >
      <p className="text-xs uppercase tracking-wider text-text-muted">{label}</p>
      <p className="mt-1 font-medium transition-colors group-hover:text-accent">
        {value}
      </p>
    </a>
  );
}
