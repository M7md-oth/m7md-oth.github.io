export type Project = {
  title: string
  number: string
  description: string
  technologies: string[]
  repository: string
  detail: string
}

export const projects: Project[] = [
  {
    title: 'Freelance Services Marketplace',
    number: '01',
    description:
      'A full-stack marketplace where clients discover services and freelancers manage listings, orders, and delivery workflows.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    repository:
      'https://github.com/M7md-oth/WEB-Freelancer-client-marketplace',
    detail: 'Authentication · Role-based flows · Checkout',
  },
  {
    title: 'Developer Portfolio',
    number: '02',
    description:
      'A responsive React portfolio engineered as a fast, accessible product surface with automated production builds.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repository: 'https://github.com/M7md-oth/m7md-oth.github.io',
    detail: 'Responsive UI · Accessibility · Deployment',
  },
  {
    title: 'Gym Equipment Rental',
    number: '03',
    description:
      'A native commerce flow covering product discovery, availability filters, cart quantities, checkout, and local order history.',
    technologies: ['Java', 'Android', 'Gson', 'Local Storage'],
    repository: 'https://github.com/M7md-oth/Mobile-gym-rental-app',
    detail: 'Catalog · Cart · Checkout · Orders',
  },
  {
    title: 'School Management System',
    number: '04',
    description:
      'A role-based Android client connecting registrars, teachers, and students through academic service workflows.',
    technologies: ['Java', 'Android', 'REST API'],
    repository: 'https://github.com/M7md-oth/Mobile-school-management-system',
    detail: 'Role-based UI · REST · Data workflows',
  },
]

export const skillGroups = [
  {
    label: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    label: 'Backend',
    skills: ['PHP', 'Java', 'REST APIs', 'Authentication & sessions'],
  },
  {
    label: 'Commerce',
    skills: ['Product catalogs', 'Cart & checkout', 'Order workflows', 'Role-based access'],
  },
  {
    label: 'Data & delivery',
    skills: ['MySQL', 'SQL', 'Git', 'Vite', 'GitHub Pages', 'Testing'],
  },
]

export const journey = [
  {
    year: 'Now',
    title: 'React and digital commerce',
    text: 'Focusing on responsive React interfaces and the catalog, cart, checkout, authentication, and order flows behind commerce products.',
  },
  {
    year: '2025',
    title: 'End-to-end product workflows',
    text: 'Built a PHP marketplace, an Android rental journey, and role-based service applications backed by structured data.',
  },
  {
    year: 'Foundation',
    title: 'Computer science fundamentals',
    text: 'Practiced algorithms, data structures, low-level programming, data analysis, and software quality assurance.',
  },
]
