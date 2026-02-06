"use client"

import type { FormEvent } from "react"
import { useState } from "react"

type FormState = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle")
  const [message, setMessage] = useState<string | null>(null)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (state === "loading") return

    setState("loading")
    setMessage(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get("email") || "").trim()
    const body = String(formData.get("message") || "").trim()

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: body }),
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
      setMessage("Message sent. I’ll get back to you soon.")
      form.reset()
    } catch {
      setState("error")
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <form className="mt-3 grid gap-3" onSubmit={onSubmit}>
      <label className="grid gap-2 text-xs text-neutral-600 dark:text-neutral-400">
        Your Email
        <input
          type="email"
          name="email"
          required
          placeholder="johndoe69@xyz.com"
          className="h-10 rounded-md border border-neutral-200 bg-transparent px-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-400 dark:border-neutral-800 dark:text-neutral-100"
        />
      </label>
      <label className="grid gap-2 text-xs text-neutral-600 dark:text-neutral-400">
        Your message
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Type your message here."
          className="min-h-[120px] rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-neutral-400 dark:border-neutral-800 dark:text-neutral-100"
        />
      </label>
      <button
        type="submit"
        disabled={state === "loading"}
        className="h-11 w-full rounded-md border border-neutral-200 bg-white text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-70 dark:border-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        {state === "loading" ? "Sending..." : "Send message"}
      </button>
      {message ? (
        <p
          className={`text-xs ${
            state === "success"
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  )
}

export default ContactForm
