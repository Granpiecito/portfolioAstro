import { locales, defaultLocale } from './i18n';

export function generateLinks(currentLang: string) {
    return Object.entries(locales)
      .filter(([key]) => key !== currentLang) // Excluir el idioma actual
      .map(([key, name]) => ({
        href: `/${key}`, // Ruta al idioma
        label: name, // Nombre del idioma ( "English" o "Español")
      }));
  }