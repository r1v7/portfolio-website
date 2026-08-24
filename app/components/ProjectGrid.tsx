"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";

const filters = ["All", "Design", "AI & Data"] as const;

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              filter === f
                ? "border-accent bg-accent text-bg"
                : "border-border text-text-muted hover:border-accent hover:text-text"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-text-muted">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-bg-elevated px-3 py-1 text-xs text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
