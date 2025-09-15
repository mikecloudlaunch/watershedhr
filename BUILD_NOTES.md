# Build Configuration Notes

## Essential Settings for Clean Netlify Builds

### Next.js Configuration (`next.config.js`)

**✅ KEEP THESE SETTINGS:**
```javascript
const nextConfig = {
  output: 'export',           // Required for static export
  trailingSlash: true,        // Better compatibility
  images: {
    unoptimized: true,        // Required for static export
    remotePatterns: [...]     // Configure allowed image domains
  },
  compress: true,             // Performance optimization
  eslint: {
    dirs: ['src'],            // Limit ESLint scope
    ignoreDuringBuilds: false // Catch errors early
  }
}
```

**❌ AVOID THESE SETTINGS:**
```javascript
// These cause build failures with static export:
experimental: {
  optimizeCss: true          // Requires 'critters' package
},
async headers() {            // Conflicts with static export
  // Custom headers don't work with output: 'export'
}
```

### Netlify Configuration (`netlify.toml`)

**✅ RECOMMENDED CONFIGURATION:**
```toml
[build]
  command = "npm run build"
  publish = "out"            # Next.js static export directory

[build.environment]
  NODE_VERSION = "18"        # Stable Node version

# 404 handling for static site
[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404

# Security headers (handled by Netlify, not Next.js)
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Static asset caching
[[headers]]
  for = "/_next/static/*"
  [headers.values]
    cache-control = "public, max-age=31536000, immutable"
```

## Common ESLint Issues to Watch

### Quick Fixes for Clean Builds:

1. **Unescaped Apostrophes in JSX:**
   ```jsx
   // ❌ Bad
   <p>We're here to help</p>
   
   // ✅ Good
   <p>We&apos;re here to help</p>
   ```

2. **Unused Imports:**
   ```javascript
   // ❌ Remove unused imports
   import { UnusedComponent } from 'somewhere';
   
   // ✅ Only import what you use
   import { UsedComponent } from 'somewhere';
   ```

3. **TypeScript 'any' Types:**
   ```typescript
   // ❌ Avoid any types
   const handleChange = (value: any) => {}
   
   // ✅ Use specific types
   const handleChange = (value: string | boolean) => {}
   ```

4. **React Hook Dependencies:**
   ```javascript
   // ❌ Missing dependencies
   useCallback(() => {
     doSomething(dependency);
   }, []);
   
   // ✅ Include all dependencies
   useCallback(() => {
     doSomething(dependency);
   }, [dependency]);
   ```

## Pre-Commit Checklist

Before pushing to main:

- [ ] Run `npm run build` locally to catch issues early
- [ ] Check for ESLint warnings: `npm run lint`
- [ ] Verify no unused imports or variables
- [ ] Ensure all apostrophes in JSX are properly escaped
- [ ] Test static export: check `/out` directory is generated
- [ ] Confirm no experimental Next.js features that require additional packages

## Build Performance Tips

1. **Image Optimization:**
   - Use Next.js `Image` component when possible
   - Set `unoptimized: true` for static export
   - Configure `remotePatterns` for external images

2. **Bundle Size:**
   - Remove unused dependencies
   - Use dynamic imports for large components
   - Avoid importing entire icon libraries

3. **Static Generation:**
   - Ensure all pages can be statically generated
   - Avoid server-side only features
   - Use static data where possible

## Troubleshooting Common Build Errors

### "Cannot find module 'critters'"
- **Cause:** `experimental.optimizeCss: true` in Next.js config
- **Fix:** Remove the experimental CSS optimization

### "headers will not work with output: export"
- **Cause:** Custom headers in `next.config.js`
- **Fix:** Move headers to `netlify.toml` or remove them

### "Event handlers cannot be passed to Client Component props"
- **Cause:** Server component trying to pass functions to client component
- **Fix:** Add `"use client"` directive to parent component

### ESLint blocking build
- **Cause:** ESLint errors treated as build failures
- **Fix:** Resolve errors or set `eslint.ignoreDuringBuilds: true` temporarily

Remember: Netlify automatically rebuilds when you push to main, so these settings ensure consistent, successful deployments! 🚀