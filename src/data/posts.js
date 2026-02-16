export const posts = [
  {
    id: "building-in-public",
    title: "Building in Public",
    date: "2025-02-10",
    excerpt: "Why sharing the journey matters more than the destination. Lessons from shipping products and writing in the open.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    body: "<p>Building in public is not just a trend — it is a mindset that changes how you work, think, and connect.</p><h2>Why it works</h2><p>When you share your process, you create accountability. You also attract people who care about the same problems. That feedback loop accelerates learning and keeps you honest.</p><h2>What to share</h2><p>Not everything needs to be a polished post. Progress updates, dead ends, and small wins all count. The goal is consistency and authenticity, not perfection.</p><p>If you are curious, <a href='/contact'>reach out</a>. I am always happy to talk about building, writing, or both.</p>",
  },
  {
    id: "minimal-design-systems",
    title: "Minimal Design Systems",
    date: "2025-02-05",
    excerpt: "How to keep design systems small, intentional, and maintainable without losing flexibility.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    body: "<p>A good design system should reduce decisions, not add them. Here is how I approach minimal systems.</p><h2>Start with constraints</h2><p>Limit colors, type scales, and spacing from day one. Constraints force clarity and make the system easier to document and use.</p><h2>Document the why</h2><p>Every token and component should have a reason. When the team understands the rationale, they are less likely to work around the system.</p><p>For more on design and systems thinking, see my <a href='/projects'>projects</a>.</p>",
  },
  {
    id: "performance-first",
    title: "Performance First",
    date: "2025-01-28",
    excerpt: "Making speed a design constraint from the start, not an afterthought.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    body: "<p>Performance is not something you bolt on at the end. It is a design constraint that shapes architecture, tooling, and content.</p><h2>Measure early</h2><p>Set Core Web Vitals (or similar) as part of your definition of done. Track them in CI and in staging so regressions get caught before production.</p><h2>Simplify by default</h2><p>Every dependency and feature has a cost. Default to less — fewer scripts, fewer fonts, fewer layout shifts. Add only when the value is clear.</p><p>This site is built with that in mind. <a href='/about'>More about my approach</a>.</p>",
  },
  {
    id: "writing-for-clarity",
    title: "Writing for Clarity",
    date: "2025-01-15",
    excerpt: "Technical writing that respects the reader and their time.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    body: "<p>Clear writing is a skill you can practice. Here are principles I follow for docs, posts, and product copy.</p><h2>One idea per paragraph</h2><p>Short paragraphs are easier to scan and remember. If a paragraph does two things, split it.</p><h2>Active voice and concrete words</h2><p>The system processes the request beats The request is processed by the system. Be specific: in 50ms instead of quickly.</p><p>Want to talk writing or docs? <a href='/contact'>Get in touch</a>.</p>",
  },
  {
    id: "side-projects-that-ship",
    title: "Side Projects That Actually Ship",
    date: "2025-01-08",
    excerpt: "Tactics for finishing what you start when time and motivation are limited.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    body: "<p>Most side projects die in the almost done phase. Here is how I have learned to push them over the line.</p><h2>Define shipped up front</h2><p>Pick the smallest version that still feels real. One feature, one page, one week. Ship that, then iterate.</p><h2>Time-box ruthlessly</h2><p>Give yourself 2 to 4 hours per session and a hard deadline. Scope creeps when there is no limit.</p><p>Check out my <a href='/projects'>projects</a> for things that made it across the finish line.</p>",
  },
  {
    id: "dark-mode-done-right",
    title: "Dark Mode Done Right",
    date: "2024-12-20",
    excerpt: "Why dark UIs need more than a color flip — contrast, hierarchy, and comfort.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    body: "<p>Dark mode is not just inverting colors. It requires its own contrast scale and attention to eye comfort.</p><h2>Avoid pure black</h2><p>Deep grays (e.g. #0d0d0f) reduce harsh contrast and feel easier on the eyes in low light.</p><h2>Soften borders and dividers</h2><p>Use muted borders so the layout breathes. Too many bright lines feel noisy.</p><p>This site follows these principles. <a href='/about'>More on my design approach</a>.</p>",
  },
  {
    id: "docs-as-product",
    title: "Docs as Product",
    date: "2024-12-05",
    excerpt: "Treating documentation like a product — discovery, structure, and iteration.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    body: "<p>Great docs do not happen by accident. They need the same care as the product they describe.</p><h2>Start from user questions</h2><p>Map common questions to pages. If someone cannot find an answer in three clicks, the structure is wrong.</p><h2>Version with the product</h2><p>Docs should ship with releases. Stale docs are worse than no docs.</p><p>I have built doc systems for several teams. <a href='/projects'>See the Flow Documentation project</a>.</p>",
  },
  {
    id: "year-in-review-2024",
    title: "Year in Review: 2024",
    date: "2024-11-28",
    excerpt: "Reflections on shipping, learning, and what to take into the new year.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    body: "<p>2024 was a year of focus. Fewer projects, more finish. Here is what stuck.</p><h2>What shipped</h2><p>Nexus Dashboard went live. Prism tokens are in use across three products. This blog finally got a refresh.</p><h2>What I learned</h2><p>Constraints breed creativity. Saying no to scope creep is a skill. And writing in public keeps me honest.</p><p>Thanks for reading this year. <a href='/contact'>Say hi</a> anytime.</p>",
  },
]

export function getPostById(id) {
  return posts.find((p) => p.slug === id || p.id === id)
}

export function getFeaturedPosts(limit = 2) {
  return [...posts].slice(0, limit)
}
