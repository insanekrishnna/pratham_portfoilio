"use client"

import { useMemo, useState } from "react"

type FormState = "idle" | "loading" | "success" | "error"
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle")
  const [message, setMessage] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [body, setBody] = useState("")

  const canSubmit = useMemo(
    () => EMAIL_RE.test(email.trim()) && body.trim().length >= 10,
    [email, body]
  )

  const onSubmit = async () => {
    if (state === "loading") return

    setState("loading")
    setMessage(null)

    const safeEmail = email.trim()
    const safeBody = body.trim()

    if (!EMAIL_RE.test(safeEmail)) {
      setState("error")
      setMessage("Enter a valid email.")
      return
    }

    if (safeBody.length < 10) {
      setState("error")
      setMessage("Message is too short.")
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: safeEmail, message: safeBody }),
      })

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}))
        setState("error")
        setMessage(
          errorData?.error || "Something went wrong. Please try again."
        )
        return
      }

      setState("success")
      setMessage("Message sent. I'll get back to you soon.")
      setEmail("")
      setBody("")
    } catch {
      setState("error")
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <div className="mt-3 grid gap-3" role="form" aria-label="Contact form">
      <label className="grid gap-2 text-xs text-neutral-600 dark:text-neutral-400">
        Your Email
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="johndoe69@xyz.com"
          value={email}
          onChange={event => setEmail(event.target.value)}
          className="h-10 rounded-md border border-neutral-200 bg-transparent px-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-400 dark:border-neutral-800 dark:text-neutral-100"
        />
      </label>
      <label className="grid gap-2 text-xs text-neutral-600 dark:text-neutral-400">
        Your message
        <textarea
          name="message"
          rows={4}
          placeholder="Type your message here."
          value={body}
          onChange={event => setBody(event.target.value)}
          className="min-h-[120px] rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-neutral-400 dark:border-neutral-800 dark:text-neutral-100"
        />
      </label>
      <button
        type="button"
        onClick={onSubmit}
        disabled={state === "loading" || !canSubmit}
        className="h-11 w-full rounded-md border border-neutral-200 bg-white text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-70 dark:border-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        {state === "loading" ? "Sending..." : "Send message"}
      </button>
      {message ? (
        <p
          aria-live="polite"
          className={`text-xs ${
            state === "success"
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  )
}

export default ContactForm
