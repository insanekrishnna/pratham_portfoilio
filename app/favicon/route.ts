import { readFile } from "fs/promises"
import { join } from "path"
import sharp from "sharp"

/** Rendered once at this size and scaled down by the browser. 180 also
 *  covers the apple-touch-icon, which points at this same route. */
const SIZE = 180
/** 50% of the box, so the corners meet and the icon reads as a circle. */
const RADIUS = Math.round(SIZE * 0.5)

/**
 * The source is a JPEG, which has no alpha, so the corners cannot simply
 * be rounded off - they have to be masked out and the result written as
 * PNG. Built once per server process and reused; the icon never changes
 * between requests.
 */
let cached: Buffer | null = null

async function render() {
  if (cached) return cached

  const source = await readFile(join(process.cwd(), "public", "facedemo.jpeg"))
  const mask = Buffer.from(
    `<svg width="${SIZE}" height="${SIZE}"><rect width="${SIZE}" height="${SIZE}" rx="${RADIUS}" ry="${RADIUS}" fill="#fff"/></svg>`
  )

  cached = await sharp(source)
    .resize(SIZE, SIZE, { fit: "cover" })
    // dest-in keeps the photo only where the mask is opaque, so the
    // corners come out transparent rather than white.
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer()

  return cached
}

export async function GET() {
  try {
    const png = await render()
    return new Response(new Uint8Array(png), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=86400, immutable",
      },
    })
  } catch {
    return new Response(null, { status: 404 })
  }
}
