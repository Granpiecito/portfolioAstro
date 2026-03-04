export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    es: string;
  };
  tags: string[];
  techIcons: string[];
  icon: string; 
  github?: string;
  live?: string;
  preview: "ecommerce" | "mobile" | "api" | "map" | "web" | "dashboard";
  color: "cyan" | "purple" | "blue" | "orange";
}

export const projects: Project[] = [
    {
    id: "portfolio",
    title: "Portfolio",
    icon: "💼",
    description: {
      en: "This very portfolio — built with Astro and Tailwind CSS. Multilingual support, glassmorphism design, and optimized performance.",
      es: "Este mismo portafolio — construido con Astro y Tailwind CSS. Soporte multilenguaje, diseño glassmorphism y rendimiento optimizado.",
    },
    tags: ["Astro", "Tailwind", "TypeScript"],
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    ],
    github: "https://github.com/Granpiecito/portfolioAstro",
    live: "https://ljean.is-a.dev",
    preview: "web",
    color: "purple",
  }, 

  {
    id: "internify",
    title: "Internify",
    icon: "🎓",
    description: {
      en: "Internship management and tracking system for university students, including student authentication for the National University of Engineering, internship offer management, and control of application processes and internship tracking.",
      es: "Sistema de gestión y control de practicas profesionales para estudiantes universitarios, incluye autenticación de estudiantes para la Universidad Nacional de Ingeniería, gestión de ofertas de prácticas profesionales y control de procesos de aplicación y seguimiento de prácticas profesionales.",
    },
    tags: [
      "Laravel",
      "MySQL",
      "PHP",
      "Tailwind",
      "Filament",
      "Firebase",
      "ReactNative",
    ],
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg",
    ],
    github: "https://github.com/Granpiecito",
    live: "https://internify.institute",
    preview: "web",
    color: "cyan",
  },

    {
    id: "ecotec-system",
    title: "Ecotec Nicaragua Inventory System",
    icon: "🌐",
    description: {
      en: "Inventory management and control system for Ecotec Nicaragua branches. Includes automated ETL processes from their base system Microsoft Great Plains to the management system, allowing inventory control, available spaces per branch, usage analytics, and product sales reports.",
      es: "Sistema de gestión y control de inventarios para las sucursales de Ecotec Nicaragua, el sistema incluye procesos automatizados ETL desde sus sistema base Microsoft Great plans al sistema de gestión, permitiendo llevar un control de inventarios, espacios disponibles por sucursal y analiticas de uso y reportes de producto vendidos.",
    },
    tags: ["Laravel", "Filament", "MySQL", "Python", "SQL", "ETL", "Php", "Tailwind"],
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/filamentphp/filamentphp-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
    ],
    github: "",
    live: "",
    preview: "dashboard",
    color: "purple",
  },

  {
    id: "whatsapp-ai-bot",
    title: "WhatsApp AI Assistant",
    icon: "🤖",
    description: {
      en: "Production-ready WhatsApp automation system built with n8n, Redis, and PostgreSQL. Includes session buffering, Unpaid Bill Checker Tool , customer validation, coverage API checks via coordinates, AI agent with vector database (RAG), dynamic PDF report generation, and human escalation flow.",
      es: "Sistema de automatización para WhatsApp en producción construido con n8n, Redis y PostgreSQL. Incluye buffer por sesión, validación de clientes, revisión de mora, verificación de cobertura mediante coordenadas, agente IA con base vectorial (RAG), generación dinámica de reportes PDFy escalamiento a agente humano.",
    },
    tags: [
      "n8n",
      "Redis",
      "PostgreSQL",
      "QdrantDB",
      "Evolution API",
      "OpenAI Api",
      "LLMs",
      "Automation",
    ],
    techIcons: [
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/n8n.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/redis.svg",
    ],
    github: "",
    live: "https://libertycr.com",
    preview: "mobile",
    color: "blue",
  },

    {
    id: "sime",
    title: "SIME",
    icon: "🏢",
    description: {
      en: "Monitoring system for entrepreneurs in the MEFCCA program. Role-based access control and full CRUD with reporting.",
      es: "Sistema de Monitoreo para emprendedores del programa MEFCCA. Control de acceso basado en roles y CRUD completo con reportes.",
    },
    tags: [
      "Laravel",
      "MySQL",
      "PHP",
      "Vue.js",
      "Tailwind",
      "Jetstream",
      "Livewire",
      "Git"
    ],
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laraveljetstream/laraveljetstream-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
    ],
    github: "",
    live: "https://web.archive.org/web/20241003021116/https://www.economiafamiliar.gob.ni/websitemefcca-mvc/",
    preview: "dashboard",
    color: "cyan",
  },

  {
    id: "mapa-apicultura",
    title: "Mapa Apicultura",
    icon: "🐝",
    description: {
      en: "Interactive map for beekeeping zones in Nicaragua. Allows locating and managing apiary points across the country.",
      es: "Mapa interactivo de zonas apícolas en Nicaragua. Permite localizar y gestionar puntos de apiarios en todo el país.",
    },
    tags: [
      "Json",
      "Html",
      "Css",
      "JavaScript",
      "Bootstrap",
      "Maps API",
      "Figma",
    ],
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    ],
    github: "",
    live: "https://web.archive.org/web/20240810175114/http://mapaapicultura.economiafamiliar.gob.ni/",
    preview: "map",
    color: "purple",
  },
  {
    id: "mapa-vivero",
    title: "Nicaragua Exótica",
    icon: "🌿",
    description: {
      en: "Interactive map for nurseries, zoos, and botanical gardens in Nicaragua. Allows locating and managing points of interest across the country.",
      es: "Mapa Iteractivo de viveros, Zoologicos y Jardines Botánicos en Nicaragua. Permite localizar y gestionar puntos de interés en todo el país.",
    },
    tags: [
      "Json",
      "Html",
      "Css",
      "JavaScript",
      "Bootstrap",
      "Maps API",
      "Figma",
    ],
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    ],
    github: "",
    live: "https://web.archive.org/web/20240809213426/https://mapanicaraguaexotica.economiafamiliar.gob.ni/",
    preview: "map",
    color: "blue",
  },

  {
    id: "nica-places",
    title: "Nica Places",
    icon: "📍",
    description: {
      en: "Discovery app for tourist spots and hidden gems across Nicaragua. Built with a clean, mobile-friendly interface, created for the Hackathon Nicaragua 2023.",
      es: "App de descubrimiento de lugares turísticos y joyas escondidas de Nicaragua. Interfaz limpia y adaptada para móviles, creada para el Hackathon Nicaragua 2023.",
    },
    tags: ["Flutter", "Dart", "Google Maps API"],
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original-wordmark.svg",
    ],
    github: "https://github.com/Granpiecito/Aspire-Code",
    live: "",
    preview: "mobile",
    color: "orange",
  }
];

export const techs = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    name: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original-wordmark.svg",
  },
  {
    name: "Astro",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original-wordmark.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "Filament",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/filamentphp/filamentphp-original.svg",
  },
  {
    name: "Livewire",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original-wordmark.svg",
  },
  {
    name: "Jetstream",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laraveljetstream/laraveljetstream-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "SQL Server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
  {
    name: "Vue.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg",
  },
  {
    name: "Vite.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
  },
  {
    name: "Git Actions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original-wordmark.svg",
  },
  {
    name: "Composer",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/composer/composer-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg",
  },
  {
    name: "Bun",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg",
  },
  {
    name: "Yarn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original-wordmark.svg",
  },
  {
    name: "PNPM",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original-wordmark.svg",
  },
  {
    name: "N8N",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/n8n.svg",
  },
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/redis.svg",
  },
];

export const personal = {
  name: "Leroy Perryman",
  alias: "JeanDev",
  role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
  bio: {
    en: "Systems Engineering graduate focused on backend development and automation-driven systems. Experienced in building full-stack applications, API integrations, ETL workflows, and scalable architectures using Laravel, PostgreSQL, Redis, and modern web technologies. Passionate about problem-solving, system design, and building reliable solutions that deliver real-world impact.",
    es: "Graduado de Ingeniería en Sistemas enfocado en desarrollo backend y sistemas orientados a la automatización. Experiencia construyendo aplicaciones full-stack, integraciones con APIs, procesos ETL y arquitecturas escalables utilizando Laravel, PostgreSQL, Redis y tecnologías web modernas. Apasionado por la resolución de problemas, el diseño de sistemas y la creación de soluciones confiables con impacto real.",
  },
  email: "jeanpierresperrymanaleman@gmail.com",
  github: "https://github.com/Granpiecito",
  linkedin: "https://www.linkedin.com/in/leroy-perryman-aleman/",
};
