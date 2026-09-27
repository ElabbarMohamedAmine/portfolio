# Mohamed Amine El Abbar — Portfolio

React + TypeScript + Vite + Tailwind CSS.

## Editing the content

All editable content lives in one file: `src/data/profile.ts` — identity, about
copy, education, experience, projects, stack and certifications.

Keep it factual. If you add a project, pull the details from that project's own
repository rather than guessing, and mark anything still in progress as such.

## Commands

Install dependencies:

```bash
npm install
```

Run locally (http://localhost:5173):

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploying to GitHub Pages

1. Push this project to a GitHub repository.
2. Deploy:

```bash
npm run deploy
```

This builds the site and pushes the `dist/` folder to a `gh-pages` branch
using the `gh-pages` package (already in `devDependencies`). In your repo's
Settings → Pages, set the source to the `gh-pages` branch.

`base` in `vite.config.ts` is `./`, so the same build works on a project site
(`username.github.io/repo`) and on a user site (`username.github.io`) with no
configuration.

## Project structure

```
src/
  components/   Nav, Footer — shared across the page
  sections/     Hero, About, Work, Experience, Stack, Certifications, Contact
  data/         profile.ts — all editable content lives here
  styles/       Tailwind entry point
```
