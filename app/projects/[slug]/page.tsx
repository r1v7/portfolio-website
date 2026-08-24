import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "../../data/projects";
import Nav from "../../components/Nav";
import Reveal from "../../components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Abdullah Alhodar`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="relative z-10 pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
          >
            ← Back to projects
          </Link>

          <Reveal>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {project.category} · {project.year}
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-text-muted">{project.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface px-3 py-1 text-xs text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {project.gallery.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface"
                >
                  <Image src={src} alt={project.title} fill className="object-cover" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-16 space-y-10">
              <div>
                <h2 className="font-display text-2xl font-semibold">Overview</h2>
                <div className="mt-4 space-y-4 text-text-muted">
                  {project.overview.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {project.process && (
                <div>
                  <h2 className="font-display text-2xl font-semibold">Process</h2>
                  <div className="mt-4 space-y-4 text-text-muted">
                    {project.process.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h2 className="font-display text-2xl font-semibold">Stack</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-4 py-1.5 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <footer className="relative z-10 border-t border-border py-8 text-center text-sm text-text-muted">
        &copy; {new Date().getFullYear()} Abdullah Alhodar. All rights reserved.
      </footer>
    </>
  );
}
