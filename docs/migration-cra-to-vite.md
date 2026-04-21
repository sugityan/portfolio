# Migration Plan: CRA to Vite

## 1. Goal

Migrate the project from Create React App (react-scripts 5.0.1) to Vite to resolve dependency version incompatibility issues and modernize the build system.

## 2. Current Situation

### Dependencies
- **react-scripts**: 5.0.1 (deprecated, no longer maintained)
- **TypeScript**: 6.0.3 (incompatible with react-scripts which expects 3.2.x - 4.x)
- **ESLint**: 8.57.0 (installed after earlier fix)
- Project already migrated to TypeScript (22 files converted)

### Build Status
- Build passes but has eslint warnings
- react-scripts 5.0.1 has known peer dependency issues with modern TypeScript versions

### Package Issues
```
react-scripts@5.0.1 peerDependencies:
  - typescript: ^3.2.1 || ^4 (but project has 6.x)
```

## 3. Likely Root Cause

**Create React App is dead/deprecated.** The React team officially deprecated CRA in early 2023. This means:
- No more updates or security patches
- Incompatible with modern TypeScript (5.x, 6.x)
- Modern ESLint versions don't work with CRA's webpack config

## 4. Files to Inspect

- `package.json` - Current dependencies and scripts
- `vite.config.ts` - Need to create
- `index.html` - Need to create (Vite requires entry HTML)
- `src/index.tsx` - Entry point
- `public/` folder - Static assets
- `tsconfig.json` - May need Vite-specific adjustments

## 5. Proposed Steps

### Phase 1: Install Vite
1. Remove `react-scripts` from dependencies
2. Add dev dependencies:
   ```json
   {
     "vite": "^5.x",
     "@vitejs/plugin-react": "^4.x"
   }
   ```

### Phase 2: Create Vite Config
Create `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  }
})
```

### Phase 3: Update Package.json Scripts
- `"start": "react-scripts start"` → `"dev": "vite"`
- `"build": "react-scripts build"` → `"build": "vite build"`
- Add `"preview": "vite preview"`

### Phase 4: Create index.html
Create `index.html` in project root:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.tsx"></script>
  </body>
</html>
```

### Phase 5: Update Entry Point
Update `src/index.tsx`:
- Vite automatically injects root element
- Keep CSS imports as-is (Vite handles them)
- Optional: Keep or remove reportWebVitals

### Phase 6: Update tsconfig.json
Add Vite types:
```json
{
  "compilerOptions": {
    "types": ["vite/client"]
  }
}
```

### Phase 7: Test
1. Run `pnpm dev` to verify dev server works
2. Run `pnpm build` to verify production build
3. Fix any import/path issues

## 6. Risks / Tradeoffs

### Risks
- Path resolution differences between webpack and Vite
- Some CRA-specific plugins may not work
- Environment variables syntax differs (`process.env` → `import.meta.env`)

### Tradeoffs
- **Pro**: Modern, actively maintained build tool
- **Pro**: Faster dev server and HMR
- **Pro**: Native TypeScript support (no Babel needed)
- **Pro**: Better ESM handling
- **Con**: Requires migration effort
- **Con**: Must rename output folder or configure Vite to use `build/`

## 7. Approval Checkpoint

Before implementing, confirm:
1. Should I keep output folder as `build` or switch to Vite's default `dist`?
2. Is the current simplified `.eslintrc.json` acceptable, or restore TypeScript-aware config after Vite migration?
3. Proceed with migration plan?
