import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type ContactPayload = {
  email?: string
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let data: ContactPayload
  try {
    data = await request.json()
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    )
  }

  const email = String(data.email || "").trim()
  const message = String(data.message || "").trim()

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 })
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: "Message is too short." },
      { status: 400 }
    )
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 0)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const rawFrom = process.env.SMTP_FROM || user
  const to = process.env.CONTACT_TO || "iiprathamyadav@gmail.com"
  const isDev = process.env.NODE_ENV !== "production"

  if (!host || !port || !user || !pass || !rawFrom) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  try {
    if (isDev) {
      await transporter.verify()
    }
    const from = rawFrom && /@/.test(rawFrom) ? rawFrom : user
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: "New portfolio message",
      text: `From: ${email}\n\n${message}`,
      html: `<p><strong>From:</strong> ${email}</p><p>${message.replace(
        /\n/g,
        "<br />"
      )}</p>`,
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact email failed:", error)
    const detail =
      isDev && error instanceof Error ? ` ${error.message}` : ""
    return NextResponse.json(
      { error: `Failed to send message.${detail}` },
      { status: 500 }
    )
  }
}
