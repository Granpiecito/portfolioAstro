

Change logs
# Astro Portfolio

Change logs
```
- [Version 0.0.0] - Initial release
- [Version 0.0.1] - Added new features
- [Version 0.0.2] - Bug fixes and performance improvements
- [Version 0.0.3] - Changed font Player Start 2 to Signika Negative
- [Version 0.0.4] - Added new things in about section, botton home linked to index.astro
- [Version 0.0.5] - Added Carousel for the technologies, and a animation, end of carousel bug
- [Version 0.0.6] - Technologies Finish, fixed carousel bug
- [Version 0.0.7] - Added footer section
- [Version 0.0.8] - Fixed footer section in mobile view
- [Version 0.0.9] - Fixed footer view in mobile and desktop 
- [Version 0.1.0] - Changes in footer and layout
- [Version 0.1.1] - Modify about content, added badged in the profile text
- [Version 0.1.2] - Added interesting section in the index page, need to fix the text in interesting
- [Version 0.1.3] - Remove underline in the text feedback from Luis Matus
- [Version 0.1.4] - Changes in About and Interesting sections.
- [Version 0.1.5] - Added new files, ProjctsMarkdown, slug.astro and Projects.astro, need to fix routing.
- [Version 0.1.6] - Routing to projects page fixed, home button fixed in project page.
- [Version 0.1.7] - config.ts data restructure, need to fix the project collection call in projects.astro
- [Version 0.1.8] - Fixed project collection call
- [Version 0.1.9] - Modify projects.md content and card astro 
- [Version 0.2.0] - Modify cards view in project section, need to fix the grid columns.
- [Version 0.2.1] - Delete description in card view, fixed grid columns in project page
- [Version 0.2.2] - Fixed footer section, modify mt value in projects.astro
- [Version 0.2.3] - Modify navbar gridcolumns style, added project view responsive, need to fix markdownlayout 
- [Version 0.2.4] - Fixed MarkdownLayout view
- [Version 0.2.5] - Fixed footer social icons flex, added 2 more markdowns 
- [Version 0.2.6] - Changes in navbar, style css, main layout
- [Version 0.2.7] - Changes in Style css for the hover in backdrop, added sticky rule in footer, deleted name in profile picture, deleted usless code from typewritter.js
- [Version 0.2.8] - Added text colors in css, fixed navbar bug, change logo, new color for the template, changes composition in projects grid
- [Version 0.2.9]- Feature Re-desing Home view, added support for multilangue, restructure componets
- [Version 0.3.0] Feature Add multilingual support with English and Spanish localization, need to fix toggle button from navbar mobile view
- [Version 0.3.1] Fixed Multilingual rendering error in projects view
- [Version 0.3.2] Fixed movile footer not center, change the margin top for the projects view, translate about to spanish
- [Version 0.3.3] Feature added resposive nav menu
- [Version 0.3.4] Fixed Navbar toggle problem
```

# Introduction

I create this project for the purpose to learn more about Astro and Tailwind CSS.


## 🏗️ How to get started?

```
First clone the project from GitHub:

git clone https://github.com/Granpiecito/portfolioAstro.git

cd astro-portfolio

You need install Node Js to run the project, read the documentation for know how install Node Js

https://nodejs.org/en/learn/getting-started/how-to-install-nodejs

After install Node Js, you can run the project

npm install

npm astro add tailwind 

npm run dev

```

## 📂 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```
portfolioAstro
├─ astro.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.svg
│  ├─ github.png
│  └─ github.svg
├─ README.md
├─ src
│  ├─ assets
│  │  ├─ js
│  │  │  ├─ data.js
│  │  │  ├─ navbar-toggle.js
│  │  │  ├─ scroll-effect.js
│  │  │  └─ typewritter.js
│  │  └─ style.css
│  ├─ components
│  │  ├─ About
│  │  │  ├─ About.astro
│  │  │  └─ es
│  │  │     └─ About.astro
│  │  ├─ Card.astro
│  │  ├─ Cards
│  │  │  ├─ Container
│  │  │  │  ├─ Cardscontainer.astro
│  │  │  │  └─ es
│  │  │  │     └─ Cardscontainer.astro
│  │  │  ├─ Info
│  │  │  │  ├─ es
│  │  │  │  │  └─ Info.astro
│  │  │  │  └─ Info.astro
│  │  │  ├─ Interesting
│  │  │  │  ├─ es
│  │  │  │  │  └─ Interesting.astro
│  │  │  │  └─ Interesting.astro
│  │  │  ├─ Projects
│  │  │  │  ├─ Card.astro
│  │  │  │  └─ es
│  │  │  │     └─ Card.astro
│  │  │  └─ Technologies
│  │  │     ├─ es
│  │  │     │  └─ Technolgies.astro
│  │  │     └─ Technolgies.astro
│  │  ├─ Footer.astro
│  │  ├─ Navbar
│  │  │  ├─ es
│  │  │  │  └─ Navbar.astro
│  │  │  └─ Navbar.astro
│  │  ├─ ProfilePicture.astro
│  │  └─ Separator.astro
│  ├─ config
│  │  ├─ Generatelinks.ts
│  │  └─ i18n.ts
│  ├─ content
│  │  ├─ config.ts
│  │  ├─ projects
│  │  │  ├─ Clima Sync.md
│  │  │  ├─ Nica Places.md
│  │  │  ├─ Portfolio.md
│  │  │  ├─ SIME.md
│  │  │  └─ Weather App.md
│  │  └─ proyectos
│  │     ├─ Clima Sync.md
│  │     ├─ Nica Places.md
│  │     ├─ Portfolio.md
│  │     ├─ SIME.md
│  │     └─ Weather App.md
│  ├─ env.d.ts
│  ├─ img
│  │  ├─ Jean-dev-logo1.png
│  │  ├─ Jeandevletras.svg
│  │  ├─ Jean_dev_logo.svg
│  │  ├─ profileimg.avif
│  │  ├─ Projects
│  │  │  └─ Portfolio
│  │  │     ├─ portfolio1.png
│  │  │     └─ portfolio2.png
│  │  ├─ retrato-3d-personas.png
│  │  └─ Technologies
│  │     ├─ Data Base
│  │     │  ├─ mysql.png
│  │     │  ├─ postgresql.png
│  │     │  └─ sql-server.png
│  │     ├─ Frameworks
│  │     │  ├─ Astro_dark.png
│  │     │  ├─ boostrap.png
│  │     │  ├─ laravel.png
│  │     │  ├─ spring.png
│  │     │  ├─ svelte.png
│  │     │  └─ tailwindcss.png
│  │     └─ LanguagesP
│  │        ├─ csharp.jpg
│  │        ├─ css.png
│  │        ├─ dart.png
│  │        ├─ flutter.png
│  │        ├─ html5.png
│  │        ├─ java.png
│  │        ├─ Php_dark.png
│  │        └─ typescript.png
│  ├─ layouts
│  │  ├─ es
│  │  │  ├─ Layout.astro
│  │  │  └─ ProjectsMarkdown.astro
│  │  ├─ Layout.astro
│  │  └─ ProjectsMarkdown.astro
│  └─ pages
│     ├─ es
│     │  ├─ index.astro
│     │  ├─ proyectos
│     │  │  └─ [...slug].astro
│     │  └─ Proyectos.astro
│     ├─ index.astro
│     ├─ projects
│     │  └─ [...slug].astro
│     └─ Projects.astro
├─ tailwind.config.mjs
└─ tsconfig.json


```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `git clone`               | Clone the project from the git hub repository    |
| `npm install`             | Install the dependencies                         |
| `npm astro add tailwind`  | Install Tailwind css dependencies                |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |

