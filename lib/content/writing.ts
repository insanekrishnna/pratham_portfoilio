export type Post = {
  slug: string
  title: string
  /** Optional — the card collapses the description row when absent. */
  description?: string
  image: string
  href: string
  date: string
  tags: string[]
}

export const posts: Post[] = [
  {
    slug: "mahabharata-mentorship",
    title: "The Mahabharata isn't about war, it's about mentorship",
    image: "/Mahabharat.jpg",
    href: "https://medium.com/@iiprathamyadav/the-mahabharata-isnt-about-war-it-s-about-mentorship-82dcbf23e018",
    date: "2024-12-19",
    tags: ["Essay", "Medium"],
  },
]

export const mediumProfileUrl = "https://medium.com/@iiprathamyadav"
