export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.hire": "Contact me",
    "nav.cv": "Download CV",

    // Hero
    "hero.badge": "Available for freelance & full-time",
    "hero.greeting": "Hi, I'm",
    "hero.cta.primary": "View my work",
    "hero.cta.secondary": "Let's talk",

    // About
    "about.label": "// about me",
    "about.title": "Developer. Problem solver.\nAlways learning.",
    "about.p1": "I'm a Systems Engineering graduate with over a year of hands-on experience in web development. My focus is on backend architecture, but I'm equally comfortable working on the frontend.",
    "about.p2": "Driven by a deep curiosity for how systems work — from web apps to ethical hacking. I love finding elegant, efficient solutions to complex problems.",
    "about.p3": "Currently freelancing and open to exciting opportunities where I can grow and contribute meaningfully.",
    "about.stat.exp": "Year of exp.",
    "about.stat.tech": "Technologies",
    "about.stat.open": "Open to work",
    "about.stat.passion": "Passion",

    // Tech
    "tech.label": "// technologies",
    "tech.title": "My stack",
    "tech.sub": "Tools and technologies I work with daily.",

    // Projects
    "projects.label": "// projects",
    "projects.title": "Things I've built",
    "projects.sub": "A selection of projects that showcase my skills.",
    "projects.github": "GitHub",
    "projects.live": "Live",

    // Contact
    "contact.label": "// contact",
    "contact.title": "Let's work together",
    "contact.heading": "Got a project in mind?",
    "contact.sub": "Whether you need a freelancer or want to hire full-time, I'd love to hear from you.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.name.placeholder": "Your name",
    "contact.email.placeholder": "your@email.com",
    "contact.message.placeholder": "Tell me about your project...",
    "contact.send": "Send message →",

    // Footer
    "footer.crafted": "Crafted with ♥ using Astro",
  },
  es: {
    "nav.about": "Sobre mí",
    "nav.skills": "Skills",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.hire": "Contactame",
    "nav.cv": "Descargar CV",

    "hero.badge": "Disponible para freelance y tiempo completo",
    "hero.greeting": "Hola, soy",
    "hero.cta.primary": "Ver mis proyectos",
    "hero.cta.secondary": "Hablemos",

    "about.label": "// sobre mí",
    "about.title": "Desarrollador. Solucionador.\nSiempre aprendiendo.",
    "about.p1": "Graduado en Ingeniería en Sistemas con más de un año de experiencia en desarrollo web. Me enfoco en backend pero me adapto al frontend sin problemas.",
    "about.p2": "Me mueve la curiosidad por entender cómo funcionan los sistemas — desde apps web hasta hacking ético. Me encanta encontrar soluciones elegantes y eficientes.",
    "about.p3": "Actualmente trabajo como freelancer y estoy abierto a oportunidades donde pueda crecer y aportar valor.",
    "about.stat.exp": "Año de exp.",
    "about.stat.tech": "Tecnologías",
    "about.stat.open": "Disponible",
    "about.stat.passion": "Pasión",

    "tech.label": "// tecnologías",
    "tech.title": "Mi stack",
    "tech.sub": "Herramientas y tecnologías que uso a diario.",

    "projects.label": "// proyectos",
    "projects.title": "Lo que he construido",
    "projects.sub": "Una selección de proyectos que muestran mis habilidades.",
    "projects.github": "GitHub",
    "projects.live": "Ver live",

    "contact.label": "// contacto",
    "contact.title": "Trabajemos juntos",
    "contact.heading": "¿Tienes un proyecto en mente?",
    "contact.sub": "Ya sea que necesites un freelancer o contratar tiempo completo, me encantaría escucharte.",
    "contact.name": "Nombre",
    "contact.email": "Correo",
    "contact.message": "Mensaje",
    "contact.name.placeholder": "Tu nombre",
    "contact.email.placeholder": "tu@correo.com",
    "contact.message.placeholder": "Cuéntame sobre tu proyecto...",
    "contact.send": "Enviar mensaje →",

    "footer.crafted": "Hecho con ♥ usando Astro",
  },
} as const;

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}