"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
        <div className="text-4xl">✓</div>
        <h3 className="font-display text-xl font-semibold">Message sent</h3>
        <p className="text-text-muted">Thanks for reaching out — I&apos;ll reply soon.</p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" type="text" />
        <Field label="Email" id="email" type="email" />
      </div>
      <Field label="Subject" id="subject" type="text" />
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.02]"
      >
        Send Message
      </button>
    </form>
  );
}

function Field({ label, id, type }: { label: string; id: string; type: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-text-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
