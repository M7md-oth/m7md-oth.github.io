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
    title: 'School Management System',
    number: '02',
    description:
      'An Android application connecting registrars, teachers, and students through role-specific academic workflows.',
    technologies: ['Java', 'Android', 'REST API'],
    repository: 'https://github.com/M7md-oth/Mobile-school-management-system',
    detail: 'Schedules · Assignments · Marks',
  },
  {
    title: 'News Headline Classification',
    number: '03',
    description:
      'A machine-learning study of text classification, from headline preprocessing through model training and evaluation.',
    technologies: ['Python', 'Jupyter', 'Machine Learning'],
    repository:
      'https://github.com/M7md-oth/Ai-02-news-headline-classification',
    detail: 'NLP · Classification · Evaluation',
  },
  {
    title: 'Socket Programming',
    number: '04',
    description:
      'Two Java networking exercises: a bilingual HTTP server and a TCP client-server application built on raw sockets.',
    technologies: ['Java', 'TCP/IP', 'HTTP'],
    repository:
      'https://github.com/M7md-oth/Computer-networks-socket-programming',
    detail: 'Sockets · Protocols · Client/server',
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['Java', 'Python', 'PHP', 'SQL', 'C', 'Assembly'],
  },
  {
    label: 'Application',
    skills: ['Android', 'HTML & CSS', 'REST APIs', 'Responsive UI'],
  },
  {
    label: 'Data',
    skills: ['MySQL', 'Data analysis', 'Machine learning', 'Jupyter'],
  },
  {
    label: 'Engineering',
    skills: ['Git', 'Algorithms', 'Data structures', 'Software testing'],
  },
]

export const journey = [
  {
    year: 'Now',
    title: 'Building complete product workflows',
    text: 'Developing web and mobile applications with a stronger focus on architecture, usability, and maintainable delivery.',
  },
  {
    year: '2025',
    title: 'Applied software engineering',
    text: 'Built role-based Android systems, a PHP marketplace, and client-server networking projects.',
  },
  {
    year: 'Foundation',
    title: 'Computer science fundamentals',
    text: 'Practiced algorithms, data structures, low-level programming, data analysis, and software quality assurance.',
  },
]
