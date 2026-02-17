export const projects = [
  {
    id: 'first-product-launch',
    title: 'Product Hunt Launch',
    tagline: 'Pending now, launching soon',
    description: 'This is my upcoming Product Hunt launch. The product is real, the build is in motion, and launch assets are being finalized right now. Soon this page will document the full journey: prep, positioning, launch day, and post-launch lessons in public.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80',
    tech: ['Product Strategy', 'Launch', 'Marketing'],
    link: '#',
    year: '2026',
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}

export function getFeaturedProjects(limit = 2) {
  return [...projects].slice(0, limit)
}
