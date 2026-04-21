# AGENTS.md

## Commands
- `pnpm dev` - Dev server at localhost:5173
- `pnpm build` - Production build to `/build` folder
- `pnpm preview` - Preview production build

## Architecture
- React 18 SPA with Vite, TypeScript, React Router
- Pages live in `src/components/` (Home, About, Projects, Resume, Footer)
- Entry point: `src/App.tsx`
- Custom type definitions in `src/types/declarations.d.ts`

## Stack
- React-Bootstrap for UI components
- React particles, parallax-tilt, react-pdf for interactive elements
- @react-pdf/renderer for PDF generation

## Deployment
- Build outputs to `/build` (not `/dist`)
- Deploy `build/` folder to Vercel or static host

## Do NOT run
- `npm run eject` - Irreversible, loses CRA abstraction

## Dependency resolution policy

When build or lint errors are caused by dependency/version incompatibility:

1. Do not simplify or weaken ESLint/TypeScript/Build configuration first.
2. First inspect package manager state and version compatibility:
   - package.json
   - lockfile
   - installed versions
   - framework-required peer/dependency ranges
3. Prefer fixing the root cause by aligning package versions.
4. Do not remove lint rules, parser settings, or TypeScript-specific checks unless explicitly requested.
5. Before changing configuration files such as `.eslintrc*`, `tsconfig.json`, or bundler config, explain:
   - root cause
   - why version alignment is insufficient
   - exact tradeoff of the config change
6. For package upgrades/downgrades, propose the minimal compatible change first.
7. Never change both dependency versions and lint/build config in one step without approval.