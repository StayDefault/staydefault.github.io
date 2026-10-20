/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://staydefault.github.io',
  meta: {
    title: 'Jingkun Qian | AI and Computer Science',
    description:
      'Projects by Jingkun Qian, an Artificial Intelligence and Computer Science student at the University of Edinburgh.',
  },
  hero: {
    name: 'Jingkun Qian',
    role: 'AI and Computer Science student',
    tagline: 'Building projects in AI, robotics, automated planning, and data science.',
    contact: 'BSc at the University of Edinburgh.',
    avatarSrc: '/favicon.svg',
    avatarAlt: 'Portfolio icon',
  },
  about: {
    paragraphs: [
      'I study Artificial Intelligence and Computer Science at the University of Edinburgh. My projects span neuro-symbolic reasoning, logistics planning, and large-scale data analysis.',
      'I have also worked on robotic manipulation research using Isaac Sim and ROS 2 at Westlake University.',
    ],
  },
  experiences: [
    {
      period: '2025',
      title: 'Lead Product Designer',
      company: 'Lumen Studio',
      summary:
        'Built a polished portfolio experience with accessible UI, motion-led interactions, and reusable components.',
      highlights: [
        'Designed and shipped the complete website using Astro, Tailwind CSS, and content-driven components',
        'Crafted consistent responsive layouts and accessible typography across desktop and mobile',
        'Optimized asset delivery and performance for sub-1s page load metrics',
      ],
      tech: ['TypeScript', 'Astro', 'Tailwind CSS', 'Node', 'Vite'],
    },
    {
      period: '2024',
      title: 'Frontend Architect',
      company: 'Nova Launch',
      summary:
        'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
      highlights: [
        'Implemented a component-based design system with reusable cards, buttons, and hero sections',
        'Built content-driven project pages, archive views, and client-side navigation enhancements',
        'Added cross-browser polish and performance tuning with image optimization and lazy loading',
      ],
      tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Node', 'Vite'],
    },
    {
      period: '2023',
      title: 'UI Engineer',
      company: 'Orbital Creative',
      summary:
        'Created an interactive product showcase with a clean visual system and accessible component library.',
      highlights: [
        'Built a flexible project card system for content updates without code changes',
        'Improved brand consistency with typography, color, and motion guidelines',
        'Added testing and quality checks for cross-device UI fidelity',
      ],
      tech: ['Astro', 'Tailwind CSS', 'JavaScript', 'Node', 'Vitest'],
    },
  ],
  featuredProjects: [
    {
      title: 'Lumen Studio Website',
      period: '2025',
      summary: 'Built a polished portfolio experience with accessible UI, motion-led interactions, and reusable components.',
      solution: 'Designed a modular component system with Astro and Tailwind CSS, ensuring consistent brand experience across all breakpoints.',
      impact: 'Achieved sub-1s page load metrics and 95+ Lighthouse scores through optimized asset delivery and lazy loading strategies.',
      image: 'astro-01.webp',
      imageAlt: 'Lumen Studio website showcase',
      techCategories: [
        {
          category: 'Frontend',
          items: ['TypeScript', 'Astro', 'Tailwind CSS', 'Responsive Design'],
        },
        {
          category: 'Performance',
          items: ['Asset Optimization', 'Lazy Loading', 'Image CDN'],
        },
      ],
    },
    {
      title: 'Nova Launch Marketing Platform',
      period: '2024',
      summary: 'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
      solution: 'Implemented a content-driven architecture with reusable card components and dynamic project pages, enabling non-technical content updates.',
      impact: 'Reduced content update time by 80% through intuitive component-based structure; enabled marketing team independence.',
      image: 'astro-02.jpeg',
      imageAlt: 'Nova Launch platform interface',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Astro', 'TypeScript', 'Tailwind CSS'],
        },
        {
          category: 'Developer Experience',
          items: ['Vite', 'ESLint', 'Automated Testing'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2025', project: 'Design system rollout', role: 'Frontend', techStack: 'Astro, CSS, Storybook' },
    { date: '2024', project: 'Checkout reliability', role: 'Full-stack', techStack: 'TypeScript, Postgres, Redis' },
    { date: '2024', project: 'Auth hardening', role: 'Backend', techStack: 'OAuth2, JWT, rate limits' },
    { date: '2023', project: 'Analytics pipeline', role: 'Data', techStack: 'SQL, dbt, warehouse' },
    { date: '2023', project: 'Mobile web refresh', role: 'Frontend', techStack: 'HTML, CSS, a11y audits' },
  ],
  contact: {
    email: 'qjkblizzard@163.com',
    github: 'https://github.com/StayDefault',
    linkedin: 'https://www.linkedin.com/in/jingkun-qian',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
