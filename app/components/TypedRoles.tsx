"use client";

import { useEffect, useState } from "react";

const roles = [
  "AI Enthusiast",
  "UI/UX Designer",
  "Data Analyst",
  "Problem Solver",
  "Creative Thinker",
];

export default function TypedRoles() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="text-gradient font-medium">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-middle" style={{ height: "1em" }} />
    </span>
  );
}
