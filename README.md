# Portfolio

Personal portfolio of Rafał Ciesielski, live at [rciesielski.dev](https://rciesielski.dev).

**Stack:** React 18 (Vite, Vitest), Tailwind CSS, Firebase, EmailJS. Hosted on GitHub Pages behind Cloudflare.

**Quality:** Prettier and ESLint with a pre-commit hook; CI runs tests, a production build, secret scanning (gitleaks) and checks PR titles against Conventional Commits.

## Development

Requires Node 22 (see `.nvmrc`).

```bash
cp .env.example .env   # fill in the VITE_* values (EmailJS, Firebase)
npm ci
npm start              # or `npm run dev`; Vite dev server on http://localhost:3000
npm test               # Vitest (single run); `npm run test:watch` for watch mode
npm run verify         # prettier check + eslint + tests (what CI runs)
npm run build          # production build into ./build
npm run preview        # serve ./build locally on http://localhost:3000
npm run deploy         # build + publish ./build to the gh-pages branch (manual)
```

Environment variables are read at build time and must be prefixed with `VITE_` (formerly `REACT_APP_`):
`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`, `VITE_API_NINJAS_KEY`
and `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`,
`VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID`, `VITE_FIREBASE_MEASUREMENT_ID`.

The `@grpc/grpc-js` override in `package.json` is still required (firebase pins a vulnerable 1.9.x).
