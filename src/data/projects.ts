export interface ProjectLink {
  label: string
  href: string
  external?: boolean
}

export interface Project {
  id: string
  index: number
  variant: string
  category: string
  status: string
  title: string
  slug: string
  description: string
  tags: string[]
  links: ProjectLink[]
  visual:
    | { type: 'app'; screen: string; icon: string }
    | { type: 'pairo' }
    | { type: 'cvflow' }
    | { type: 'chess' }
}

export const projects: Project[] = [
  {
    id: 'pairo',
    index: 1,
    variant: 'pairo',
    category: 'Developer Tools',
    status: 'Live',
    title: 'Pairo',
    slug: 'pairo',
    description:
      'Un SaaS de revue de code propulsé par l\'IA, qui analyse automatiquement les pull requests pour détecter bugs, failles de sécurité, problèmes de performance et défauts de qualité avant la mise en production.',
    tags: ['AI', 'SaaS', 'Code Review'],
    links: [
      // { label: 'Site web', href: '/projets/pairo/' },
      { label: 'Site web', href: 'https://pairo-eta.vercel.app/', external:true },
      // { label: 'Application', href: 'https://pairo-eta.vercel.app/', external: true },
    ],
    visual: { type: 'pairo' },
  },
  {
    id: 'cvflow',
    index: 2,
    variant: 'cvflow',
    category: 'Career Tools',
    status: 'MVP',
    title: 'CVFlow',
    slug: 'cvflow',
    description:
      'Une plateforme d\'optimisation de CV propulsée par l\'IA, qui analyse la compatibilité ATS, identifie les mots-clés manquants et adapte votre CV à chaque offre d\'emploi.',
    tags: ['AI', 'SaaS', 'Career'],
    links: [
      // { label: 'Site web', href: '/projets/cvflow/' },
      { label: 'Site web', href: 'https://cv-flow-seven.vercel.app/', external:true },
      // { label: 'Application', href: 'https://cv-flow-seven.vercel.app/', external: true },
    ],
    visual: { type: 'cvflow' },
  },
  {
    id: 'kaochess',
    index: 3,
    variant: 'kaochess',
    category: 'Jeu de stratégie',
    status: 'Disponible gratuitement',
    title: 'KaoChess',
    slug: 'kaochess',
    description:
      'Les échecs, bousculés par un jeu de cartes. Une expérience stratégique où chaque partie peut changer de direction.',
    tags: ['React', 'TypeScript', 'Jeu web'],
    links: [
      { label: 'Site web', href: 'https://www.kaochess.com', external: true },
    ],
    visual: { type: 'chess' },
  },
]
