# Bio Page React

Personal portfolio site migrated from static HTML into a React + Vite single-page app.

The design direction is industrial minimalism with a dark visual system, subtle grid texture, and lightweight motion.

## Stack

- React
- Vite
- React Router DOM
- CSS (single global stylesheet)

## Features

- Route-based navigation:
	- Bio
	- Projects
	- Certificates
- Shared layout with persistent header and footer
- Scroll reveal animation for sections
- Pointer-reactive background orbs
- Responsive behavior for desktop and mobile
- Dynamic footer year

## Project Structure

```text
bio-page-react/
	public/
		favicon.svg
	src/
		components/
			Layout.jsx
		pages/
			BioPage.jsx
			ProjectsPage.jsx
			CertificatesPage.jsx
		App.jsx
		main.jsx
		index.css
	index.html
	package.json
```

## Local Development

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev -- --host 127.0.0.1 --port 4173
```

Open:

```text
http://127.0.0.1:4173
```

## Production Build

Build:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview -- --host 127.0.0.1 --port 4173
```

## Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` creates a production build in `dist`
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint

## Notes

- The legacy static root files were removed after migration.
- Styling and interactions are now owned by React app files under `bio-page-react/src`.
