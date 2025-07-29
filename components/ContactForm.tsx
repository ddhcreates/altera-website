'use client';

import { useState } from "react";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const response = await fetch("https://formspree.io/f/xyzpepjj", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (response.ok) {
      setStatus("submitted");
      e.currentTarget.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-slate-50 to-emerald-50 p-8 rounded-2xl shadow-lg space-y-6 w-full max-w-xl mx-auto"
    >
      <h3 className="text-2xl font-medium text-slate-800 text-center">Send a Message</h3>
      <p className="text-center text-slate-600 text-sm">
        Reach out with questions, collaborations, or specific requests. We’ll respond within 1–2 working days.
      </p>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
        />
        <textarea
          name="message"
          placeholder="Tell us what you'd like to explore…"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 bg-white"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-emerald-700 text-white py-3 rounded-full text-lg font-medium hover:bg-emerald-800 transition-colors flex items-center justify-center space-x-2"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin h-5 w-5" />
            <span>Sending…</span>
          </>
        ) : (
          <span>Send Message</span>
        )}
      </button>

      {status === "submitted" && (
        <div className="flex items-center space-x-2 text-emerald-700 text-sm font-medium mt-4 justify-center">
          <CheckCircle className="w-5 h-5" />
          <span>Thank you. We’ll be in touch soon.</span>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center space-x-2 text-red-600 text-sm font-medium mt-4 justify-center">
          <XCircle className="w-5 h-5" />
          <span>Something went wrong. Please try again later.</span>
        </div>
      )}
    </form>
  );
}