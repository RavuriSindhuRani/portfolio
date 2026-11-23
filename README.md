# Ravuri Sindhurani — Portfolio

A modern, dark, component-based React portfolio built with Vite and Framer Motion.

## Stack

- React 19 + Vite
- Framer Motion (animations)
- react-icons (technology & UI icons)
- Plain CSS with a centralized design-token system (`src/theme.css`)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/       # Navbar, Hero, About, Education, Skills, Projects,
                     # ProjectCard, ProjectModal, Achievements, Contact, Footer
  data/              # projects.js, skills.js, education.js, achievements.js
  assets/            # portfolio images
  theme.css          # design tokens (colors, spacing, radii, shadows, motion)
  index.css          # global base styles
  App.jsx
  main.jsx
public/
  SAMS.html          # standalone demo for the Student Attendance project
```

## Editing content

All portfolio content lives in `src/data/*.js` — update project details, skills,
education entries, or achievements there without touching component code.

## Design system

Colors, spacing, radii, and motion timing are defined once as CSS custom
properties in `src/theme.css` and consumed everywhere else, so the whole
palette can be restyled from a single file.
