export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    es: string;
  };
  tags: string[];
  github?: string;
  live?: string;
  preview: "ecommerce" | "mobile" | "api" | "map" | "web" | "dashboard";
  color: "cyan" | "purple" | "blue" | "orange";
}

export const projects: Project[] = [
  {
    id: "internifyu",
    title: "InternifyU",
    description: {
      en: "Platform connecting university students with internship opportunities. Full-stack web application with authentication and listings.",
      es: "Plataforma que conecta estudiantes universitarios con oportunidades de pasantías. Aplicación web full-stack con autenticación y listados.",
    },
    tags: ["Laravel", "MySQL", "PHP", "Tailwind"],
    github: "https://github.com/Granpiecito",
    live: "",
    preview: "web",
    color: "cyan",
  },
  {
    id: "mapa-apicultura",
    title: "Mapa Apicultura",
    description: {
      en: "Interactive map for beekeeping zones in Nicaragua. Allows locating and managing apiary points across the country.",
      es: "Mapa interactivo de zonas apícolas en Nicaragua. Permite localizar y gestionar puntos de apiarios en todo el país.",
    },
    tags: ["Spring Boot", "Java", "SQL Server", "Maps API"],
    github: "https://github.com/Granpiecito",
    live: "",
    preview: "map",
    color: "purple",
  },
  {
    id: "mapa-vivero",
    title: "Exotic Nic Map",
    description: {
      en: "Geolocation app for exotic plant nurseries in Nicaragua. Visual map with filtering by plant type and location.",
      es: "App de geolocalización para viveros de plantas exóticas en Nicaragua. Mapa visual con filtrado por tipo de planta y ubicación.",
    },
    tags: ["Spring Boot", "Java", "MySQL", "Maps API"],
    github: "https://github.com/Granpiecito",
    live: "",
    preview: "map",
    color: "blue",
  },
  {
    id: "nica-places",
    title: "Nica Places",
    description: {
      en: "Discovery app for tourist spots and hidden gems across Nicaragua. Built with a clean, mobile-friendly interface.",
      es: "App de descubrimiento de lugares turísticos y joyas escondidas de Nicaragua. Interfaz limpia y adaptada para móviles.",
    },
    tags: ["Flutter", "Dart", "REST API"],
    github: "https://github.com/Granpiecito",
    live: "",
    preview: "mobile",
    color: "orange",
  },
  {
    id: "sime",
    title: "SIME",
    description: {
      en: "Enterprise management system for inventory and operations. Role-based access control and full CRUD with reporting.",
      es: "Sistema de gestión empresarial para inventario y operaciones. Control de acceso por roles y CRUD completo con reportes.",
    },
    tags: ["Spring Boot", "SQL Server", "Java", "Thymeleaf"],
    github: "https://github.com/Granpiecito",
    live: "",
    preview: "dashboard",
    color: "cyan",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: {
      en: "This very portfolio — built with Astro and Tailwind CSS. Multilingual support, glassmorphism design, and optimized performance.",
      es: "Este mismo portafolio — construido con Astro y Tailwind CSS. Soporte multilenguaje, diseño glassmorphism y rendimiento optimizado.",
    },
    tags: ["Astro", "Tailwind", "TypeScript"],
    github: "https://github.com/Granpiecito/portfolioAstro",
    live: "https://ljean.is-a.dev",
    preview: "web",
    color: "purple",
  },
];

export const techs = [
  { name: "HTML5",       icon: "/Technologies/LanguagesP/html5.png" },
  { name: "PHP",         icon: "/Technologies/LanguagesP/Php_dark.png" },
  { name: "Java",        icon: "/Technologies/LanguagesP/java.png" },
  { name: "TypeScript",  icon: "/Technologies/LanguagesP/typescript.png" },
  { name: "Flutter",     icon: "/Technologies/LanguagesP/flutter.png" },
  { name: "Dart",        icon: "/Technologies/LanguagesP/dart.png" },
  { name: "Astro",       icon: "/Technologies/Frameworks/Astro_dark.png" },
  { name: "Laravel",     icon: "/Technologies/Frameworks/laravel.png" },
  { name: "Spring Boot", icon: "/Technologies/Frameworks/spring.png" },
  { name: "Tailwind",    icon: "/Technologies/Frameworks/tailwindcss.png" },
  { name: "MySQL",       icon: "/Technologies/Data Base/mysql.png" },
  { name: "SQL Server",  icon: "/Technologies/Data Base/sql-server.png" },
];

export const personal = {
  name: "Leroy Perryman",
  alias: "JeanDev",
  role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
  bio: {
    en: "Systems Engineering graduate with 1+ year of experience in web development. Strong backend focus, always open to frontend challenges. Passionate about technology, ethical hacking, and building things that work.",
    es: "Graduado de Ingeniería en Sistemas con más de 1 año de experiencia en desarrollo web. Enfocado en backend, siempre abierto a retos frontend. Apasionado por la tecnología, el hacking ético y construir cosas que funcionen.",
  },
  email: "jeanpierresperrymanaleman@gmail.com",
  github: "https://github.com/Granpiecito",
  linkedin: "https://www.linkedin.com/in/leroy-perryman-aleman/",
};