export type Project = {
  title: string
  tag: string
  description: string
  technologies: string[]
  repository: string
  detail: string[]
}

export const projects: Project[] = [
  {
    title: 'Freelance Services Marketplace',
    tag: 'E-Commerce',
    description:
      'A full-stack marketplace with role-based user flows for service discovery, purchasing, and seller-side management.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'Session auth'],
    repository:
      'https://github.com/M7md-oth/WEB-Freelancer-client-marketplace',
    detail: [
      'Role-based authentication and sessions',
      'Cart, checkout, and order lifecycle',
      'Freelancer service creation and edits',
    ],
  },
  {
    title: 'UniConnect Platform',
    tag: 'Full Stack',
    description:
      'Graduation platform connecting students, companies, and universities to organize internships in one workflow.',
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'API integration'],
    repository: 'https://github.com/M7md-oth',
    detail: [
      'Internship workflow between three user groups',
      'OpenAI-powered assistant features',
      'OTP verification flow using Resend API',
    ],
  },
  {
    title: 'Gym Rental App',
    tag: 'Commerce App',
    description:
      'A mobile commerce journey with product catalog browsing, filtering, cart management, and checkout flow.',
    technologies: ['Java', 'Android', 'Gson', 'Local persistence'],
    repository: 'https://github.com/M7md-oth/Mobile-gym-rental-app',
    detail: [
      'Product listing, search, and availability filters',
      'Cart quantities and total calculations',
      'Checkout validation and local order history',
    ],
  },
  {
    title: 'Portfolio Site',
    tag: 'React',
    description:
      'Developer portfolio built with React and TypeScript, designed and shipped with a clean, accessible, production-first setup.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repository: 'https://github.com/M7md-oth/m7md-oth.github.io',
    detail: [
      'Responsive behavior across breakpoints',
      'Semantic structure and keyboard accessibility',
      'Static production deployment on GitHub Pages',
    ],
  },
]

export const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Vite',
      'HTML',
      'CSS',
    ],
  },
  {
    label: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'REST APIs',
      'Authentication and sessions',
      'PHP',
    ],
  },
  {
    label: 'Databases',
    skills: ['MySQL', 'SQL', 'Pagination', 'Data modeling'],
  },
  {
    label: 'E-Commerce Workflows',
    skills: [
      'Product catalogs',
      'Cart and checkout logic',
      'Order workflows',
      'Role-based access',
      'Customer-facing UX',
    ],
  },
]

export const journey = [
  {
    period: 'Jul 2026 - Present',
    role: 'Network Intern',
    organization: 'Al-Zaytouna Company',
    summary:
      'Supporting network troubleshooting, day-to-day infrastructure tasks, and practical IT operations.',
  },
  {
    period: 'Jul 2025 - Sep 2025',
    role: 'Frontend and Node.js Intern',
    organization: 'Spinal Tech',
    summary:
      'Built full-stack web features with React and Node.js, and integrated APIs across frontend and backend layers.',
  },
  {
    period: 'Projects',
    role: 'Hult Prize and Product Development',
    organization: 'NAMAA, Drift Guard, UniConnect',
    summary:
      'Contributed to product leadership, management, and software delivery in startup and academic project settings.',
  },
]
