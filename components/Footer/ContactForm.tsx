"use client";
import { FC, FormEvent, useMemo, useState } from "react";
import DropText from "../DropText/DropText";

const ContactForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // Controlled input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isButtonDisabled = useMemo(
    () => name === "" || email === "" || message === "" || loading,
    [email, loading, message, name]
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const payload = { name, email, message };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        // Clear the controlled inputs
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("❌ Failed to send message. Please try again.");
        console.error("Email send failed:", data.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-8 w-full items-center justify-center">
      <div className="text-left">
        <DropText
          text1="REACH OUT"
          text2="NOW"
          textClassname="text-white/30 dark:text-black/40"
          duration={0.5}
          delay={0.3}
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full max-w-3xl"
        aria-labelledby="contact-form-title"
      >
        <h2 id="contact-form-title" className="sr-only">
          Contact Form
        </h2>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          aria-label="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 min-w-[200px] w-full rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl px-6 py-3 text-white dark:text-black placeholder-white/60 dark:placeholder-black/60 border border-white/20 dark:border-black/20 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-black transition"
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          aria-label="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 min-w-[200px] rounded-full w-full bg-white/10 dark:bg-black/10 backdrop-blur-xl px-6 py-3 text-white dark:text-black placeholder-white/60 dark:placeholder-black/60 border border-white/20 dark:border-black/20 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-black  transition"
        />

        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          aria-label="Your Message"
          required
          rows={2}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-3xl bg-white/10 dark:bg-black/10 backdrop-blur-xl px-6 py-3 text-white dark:text-black placeholder-white/60 dark:placeholder-black/60 border border-white/20 dark:border-black/20 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-black  transition resize-none"
        />

        <button
          type="submit"
          disabled={isButtonDisabled}
          className="w-full rounded-full bg-white text-black dark:bg-black dark:text-white py-3 font-semibold transition-all hover:opacity-80 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center text-sm mt-2 transition-all">{status}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
