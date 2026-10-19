export const profile = {
  name: 'Swarna Kumar Koppala',
  role: 'Frontend Engineer',
  phone: '+91 7995347442',
  email: 'swarnakumark48@gmail.com',
  linkedin: 'https://www.linkedin.com/in/koppala-swarna-kumar-131919195',
  github: 'https://github.com/swarna1822',
  location: 'Bengaluru, India',
  summary:
    'Frontend Engineer with nearly 4 years of experience building scalable web apps with React.js, Angular, TypeScript, and JavaScript (ES6+). I design reusable UI systems, integrate REST APIs, and ship maintainable, accessible interfaces — translating business requirements into fast, reliable product experiences.',
}

export const navKeys = [
  { id: 'home', legend: 'Esc', sub: 'Home' },
  { id: 'about', legend: 'F1', sub: 'About' },
  { id: 'experience', legend: 'F2', sub: 'Work' },
  { id: 'products', legend: 'F3', sub: 'Apps' },
  { id: 'projects', legend: 'F4', sub: 'projects' },
  { id: 'skills', legend: 'F5', sub: 'Keys' },
  { id: 'contact', legend: 'F6', sub: 'Hire' },
]

export const experience = [
  {
    company: 'WizCommerce',
    role: 'Software Development Engineer I',
    location: 'Bengaluru',
    dates: 'Oct 2025 — 2026',
    accent: 'amber',
    points: [
      'Built reusable React component libraries with built-in validation, improving UI consistency across apps.',
      'Shipped large-scale React + TypeScript + Vite applications with better maintainability and developer velocity.',
      'Improved Review Order page performance by 40% after tracing API sequencing and blocking work in Sentry.',
      'Cut initial page load time by 20% with code splitting, lazy loading, and bundle tuning.',
      'Sped up large-dataset rendering with virtualization and fewer unnecessary re-renders.',
      'Configured Sentry and OpenReplay, cutting time-to-reproduce production bugs by 30%.',
      'Rolled out Pendo in-app coach marks to guide users through product workflows.',
      'Wrote Jest and React Testing Library coverage, and paired with backend/QA on production issues.',
    ],
  },
  {
    company: 'Agama IT Biz Solutions Pvt. Ltd.',
    role: 'Frontend Developer',
    location: 'Hyderabad',
    dates: 'Jan 2023 — Sep 2025',
    accent: 'mint',
    points: [
      'Migrated legacy Indian Railways FOIS systems to Angular 15 with REST APIs across Terminal, Rake, and Operations Control modules.',
      'Built a React Land Management System with role-based dashboards, geofencing, and a Node.js / Express / MySQL backend.',
    ],
  },
]

export const products = [
  {
    name: 'Ella',
    tag: 'AI order entry',
    stack: 'React · TypeScript · Redux · Material UI · AG Grid',
    points: [
      'Order review and submission for AI-extracted POs: buyers, products, pricing, and quantities.',
      'User management with role-based access and permissions.',
      'Prefill, autosave, business validations, eligibility checks, and error-handling flows.',
      'Real-time updates, notifications, and embedded iframe workflows.',
    ],
  },
  {
    name: 'WizOrder',
    tag: 'B2B orders',
    stack: 'React · TypeScript · Redux · Material UI · AG Grid',
    points: [
      'Tenant-specific configuration and feature-based customizations.',
      'Hierarchical sorting for Collection, Category, and Product via AG Grid Tree Data.',
      'Complex order cases: multiple POs, pricing, discounts, line-item changes, and validation.',
    ],
  },
]

export const projects = [
  {
    name: 'FlowBoard',
    tag: 'Move work forward',
    stack: 'React · TypeScript · Redux · Material UI',
    live_demo: 'flow-board-tau-snowy.vercel.app',
    points: [
      "Built a multi-project work-status tracker using React 19, TypeScript, Redux, Material UI, and React Router, deployed on Vercel",
      "Developed drag-and-drop Kanban boards with search, assignee, epic, and due-date filters, a backlog view, issue detail modal with comments and status updates, and issue creation",
      "Implemented per-project role-based access (Admin, Manager, Developer, Viewer) using Redux selectors, with project settings for columns, members, and roles",
      "Built login, signup with a password-strength meter, and forgot-password flows using React Hook Form validation, protected routes, and lazy-loaded pages",
      "Added daily team check-ins, notifications, and a reports page with a weekly completion chart and overdue issues"
    ]
  },
  {
    name: 'Pebble',
    tag: 'AI chat app',
    stack: 'React · TypeScript · Redux · Material UI',
    live_demo: 'https://pebble-ai-chat-app.vercel.app',
    points: [
      "Built a browser-based AI chat app using React 18, TypeScript, and Material UI, supporting streamed responses from Google Gemini, Groq, and OpenRouter through OpenAI-compatible APIs",
      "Implemented response streaming using the Fetch API and ReadableStream, with Stop (AbortController), Regenerate, and error handling for invalid API keys, rate limits, and outdated model names",
      "Rendered Markdown content with tables, links, and syntax-highlighted code blocks with a copy button using react-markdown, remark-gfm, and highlight.js",
      "Added chat history persistence using localStorage, demo mode with simulated replies, light/dark/auto themes, keyboard shortcuts, and a responsive layout with a mobile drawer"
    ],
  },
]

export const skillRows = [
  [
    { label: 'JS', name: 'JavaScript (ES6+)' },
    { label: 'TS', name: 'TypeScript' },
    { label: 'HTML', name: 'HTML5' },
    { label: 'CSS', name: 'CSS3' },
    { label: 'PY', name: 'Python' },
  ],
  [
    { label: 'React', name: 'React.js & Hooks' },
    { label: 'Redux', name: 'Redux' },
    { label: 'NG', name: 'Angular' },
    { label: 'MUI', name: 'Material UI' },
    { label: 'RHF', name: 'React Hook Form' },
  ],
  [
    { label: 'REST', name: 'REST APIs' },
    { label: 'Axios', name: 'Axios' },
    { label: 'Grid', name: 'AG Grid' },
    { label: 'Jest', name: 'Jest' },
    { label: 'RTL', name: 'React Testing Library' },
  ],
  [
    { label: 'Git', name: 'Git & GitHub' },
    { label: 'Sentry', name: 'Sentry' },
    { label: 'OR', name: 'OpenReplay' },
    { label: 'Pendo', name: 'Pendo' },
    { label: 'WS', name: 'WebSockets' },
  ],
]

export const education = [
  {
    title: 'MBA (Finance)',
    school: 'Surana College, Bengaluru',
    year: '2022',
  },
  {
    title: 'B.Com (Computer Applications)',
    school: 'Sri Venkateshwara University, Tirupati',
    year: '2019',
  },
]
