export const projects = [
  {
    id: 'nexus-dashboard',
    title: 'Nexus Dashboard',
    tagline: 'Real-time analytics for distributed systems',
    description: 'A high-performance dashboard for monitoring microservices, APIs, and infrastructure. Built for low latency and high clarity under load.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    tech: ['React', 'WebSocket', 'D3.js', 'Node'],
    link: '#',
    year: '2024',
  },
  {
    id: 'prism-design-tokens',
    title: 'Prism Design Tokens',
    tagline: 'Design system foundation',
    description: 'A minimal, versioned token system for colors, typography, and spacing. Integrates with Figma and multiple front-end frameworks.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    tech: ['Figma', 'JSON', 'CLI'],
    link: '#',
    year: '2024',
  },
  {
    id: 'flow-docs',
    title: 'Flow Documentation',
    tagline: 'Documentation that scales',
    description: 'Component-based docs site with search, versioning, and dark mode. Optimized for technical teams and open-source projects.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    tech: ['MDX', 'Next.js', 'Algolia'],
    link: '#',
    year: '2023',
  },
  {
    id: 'pulse-api-monitor',
    title: 'Pulse API Monitor',
    tagline: 'Uptime and latency at a glance',
    description: 'Lightweight API monitoring with status pages, Slack alerts, and historical latency charts. Built for small teams who need visibility without enterprise tooling.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    tech: ['Go', 'PostgreSQL', 'React'],
    link: '#',
    year: '2024',
  },
  {
    id: 'notion-style-editor',
    title: 'Block Editor',
    tagline: 'Rich text, your way',
    description: 'A minimal block-based editor (headings, lists, code) with markdown shortcuts and clean output. No dependencies on heavy WYSIWYG libraries.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    tech: ['TypeScript', 'ProseMirror', 'React'],
    link: '#',
    year: '2023',
  },
  {
    id: 'cli-toolkit',
    title: 'CLI Toolkit',
    tagline: 'Shared utilities for terminal apps',
    description: 'Reusable Node modules for prompts, spinners, and config loading. Used across four internal tools to keep UX consistent and code DRY.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    tech: ['Node.js', 'Inquirer', 'Chalk'],
    link: '#',
    year: '2023',
  },
  {
    id: 'design-system-audit',
    title: 'Design System Audit',
    tagline: 'From chaos to a single source of truth',
    description: 'Led audit of legacy components and tokens across three products. Produced migration plan, token map, and component inventory that reduced duplication by 40%.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    tech: ['Figma', 'Audit', 'Documentation'],
    link: '#',
    year: '2023',
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === id)
}

export function getFeaturedProjects(limit = 2) {
  return [...projects].slice(0, limit)
}
