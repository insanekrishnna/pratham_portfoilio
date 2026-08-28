"use client"

import { useMemo, useState } from "react"
import { Loader2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useUiFeedback } from "@/hooks/use-ui-feedback"
import { profile } from "@/lib/content/profile"

type FormState = "idle" | "loading" | "success" | "error"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_MESSAGE = 10

/** Posts to /api/contact, which relays over SMTP. */
export function ContactForm() {
  const [state, setState] = useState<FormState>("idle")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [body, setBody] = useState("")
  const { tap } = useUiFeedback()

  const canSubmit = useMemo(
    () => EMAIL_RE.test(email.trim()) && body.trim().length >= MIN_MESSAGE,
    [email, body]
  )

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (state === "loading" || !canSubmit) return

    setState("loading")
    setFeedback(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), message: body.trim() }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        setState("error")
        setFeedback(data?.error || "That didn't send. Try again in a moment.")
        return
      }

      setState("success")
      setFeedback("Message sent. I'll get back to you soon.")
      setEmail("")
      setBody("")
    } catch {
      setState("error")
      setFeedback("No connection. Check your network and try again.")
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="contact-email">Your email</Label>
        <Input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Your message</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="What are you building, and where do you want help?"
          className="min-h-32 resize-none"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        />
        <p className="text-muted-foreground text-xs">
          At least {MIN_MESSAGE} characters so I know what you need.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={state === "loading" || !canSubmit}>
          {state === "loading" ? (
            <>
              <Loader2 className="animate-spin" aria-hidden />
              Sending
            </>
          ) : (
            <>
              <Send aria-hidden />
              Send message
            </>
          )}
        </Button>
        <p className="text-muted-foreground text-xs">
          Goes straight to{" "}
          <span className="text-foreground font-medium">{profile.email}</span>.
        </p>
      </div>

      {feedback ? (
        <p
          role="status"
          aria-live="polite"
          className={
            state === "success"
              ? "text-sm text-emerald-600 dark:text-emerald-400"
              : "text-destructive text-sm"
          }
        >
          {feedback}
        </p>
      ) : null}
    </form>
  )
}

export default ContactForm
