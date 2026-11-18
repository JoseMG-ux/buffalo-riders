export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Next.js + HeroUI',
  description: 'Make beautiful websites regardless of your design experience.',
  navItems: [
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Tabla',
      href: '/tabla-participantes',
    },
    {
      label: 'Registro',
      href: '/registro-participantes',
    },
  ],
  navMenuItems: [
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Tabla',
      href: '/tabla',
    },
    {
      label: 'Registro',
      href: '/registro',
    },
  ],
  links: {
    instagram: 'https://twitter.com/hero_ui',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
