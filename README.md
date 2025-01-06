

Change logs
# Astro Portfolio\

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
│  └─ github.svg
├─ README.md
├─ src
│  ├─ assets
│  │  ├─ js
│  │  │  ├─ data.js
│  │  │  ├─ index.js
│  │  │  └─ typewritter.js
│  │  └─ style.css
│  ├─ components
│  │  ├─ About.astro
│  │  ├─ Card.astro
│  │  ├─ Footer.astro
│  │  ├─ Interesting.astro
│  │  ├─ Navbar.astro
│  │  ├─ ProfilePicture.astro
│  │  ├─ Separator.astro
│  │  ├─ Technologies.astro
│  │  └─ TechnologyCards.astro
│  ├─ content
│  │  ├─ config.ts
│  │  └─ projects
│  │     ├─ Nica Places copy.md
│  │     ├─ Nica Places.md
│  │     ├─ SIME copy.md
│  │     └─ SIME.md
│  ├─ img
│  │  ├─ Jeandevletras.svg
│  │  ├─ Jean_dev_logo.svg
│  │  ├─ profileimg.avif
│  │  ├─ retrato-3d-personas.png
│  │  └─ Technologies
│  │     ├─ Data Base
│  │     │  ├─ mysql.svg
│  │     │  ├─ postgresql.svg
│  │     │  └─ sql-server.svg
│  │     ├─ Frameworks
│  │     │  ├─ Astro_dark.svg
│  │     │  ├─ boostrap.svg
│  │     │  ├─ laravel.svg
│  │     │  ├─ spring.svg
│  │     │  ├─ svelte.svg
│  │     │  └─ tailwindcss.svg
│  │     └─ LanguagesP
│  │        ├─ csharp.svg
│  │        ├─ css.svg
│  │        ├─ dart.svg
│  │        ├─ flutter.svg
│  │        ├─ html5.svg
│  │        ├─ java.svg
│  │        ├─ Php_dark.svg
│  │        └─ typescript.svg
│  ├─ layouts
│  │  ├─ Layout.astro
│  │  └─ ProjectsMarkdown.astro
│  └─ pages
│     ├─ index.astro
│     ├─ projects
│     │  └─ [...slug].astro
│     └─ Projects.astro

```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `git clone`               | Clone the project from the git hub repository    |
| `npm install`             | Install the dependencies                         |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
