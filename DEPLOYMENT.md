# Deployment Guide

This guide covers multiple deployment options for the Threaded Dreams website.

## 📦 Building for Production

Before deploying, create an optimized production build:

```bash
npm run build
```

This creates a `dist/` directory with optimized, minified assets ready for deployment.

### Build Output

- HTML, CSS, and JavaScript files
- Optimized and compressed images
- Source maps (optional)
- Chunked JavaScript for better caching

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)

#### Automatic Deployment via Git

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Netlify**

   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Configure build settings:
     ```
     Build command: npm run build
     Publish directory: dist
     ```

3. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy
   - Get your custom URL (e.g., `threaded-dreams.netlify.app`)

#### Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

#### Custom Domain on Netlify

1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed
4. Enable HTTPS (automatic with Let's Encrypt)

---

### Option 2: Vercel

#### Automatic Deployment

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Deploy**

   ```bash
   vercel --prod
   ```

3. **Follow prompts**
   - Link to your account
   - Configure project settings
   - Deploy

#### Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel auto-detects Vite configuration
4. Click "Deploy"

---

### Option 3: GitHub Pages

1. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**

   ```json
   {
     "homepage": "https://yourusername.github.io/website_threaded_dreams",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**

   ```typescript
   export default defineConfig({
     base: "/website_threaded_dreams/",
     // ... rest of config
   });
   ```

4. **Deploy**

   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository settings
   - Pages → Source → gh-pages branch
   - Save

---

### Option 4: Traditional Web Hosting

For shared hosting or VPS:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Upload files**

   - Upload entire `dist/` directory contents
   - Use FTP, SFTP, or hosting control panel
   - Set document root to uploaded directory

3. **Configure server**
   - Ensure server can handle client-side routing
   - Add `.htaccess` for Apache:
     ```apache
     <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteRule . /index.html [L]
     </IfModule>
     ```

---

### Option 5: Docker Deployment

1. **Create Dockerfile**

   ```dockerfile
   # Build stage
   FROM node:18-alpine AS build
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   # Production stage
   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   COPY nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Create nginx.conf**

   ```nginx
   server {
     listen 80;
     server_name localhost;
     root /usr/share/nginx/html;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

3. **Build and run**
   ```bash
   docker build -t threaded-dreams .
   docker run -p 80:80 threaded-dreams
   ```

---

## 🌐 Environment Configuration

### Custom Port Development

```bash
# .env.local
VITE_PORT=3000
```

Update `vite.config.ts`:

```typescript
export default defineConfig({
  server: {
    port: process.env.VITE_PORT || 8080,
  },
});
```

### Production Environment Variables

No environment variables needed for current setup. If adding API integrations:

```bash
# .env.production
VITE_API_URL=https://api.yoursite.com
```

---

## ✅ Pre-Deployment Checklist

- [ ] All product images optimized (WebP, compressed)
- [ ] No console errors in production build
- [ ] Tested on major browsers (Chrome, Firefox, Safari)
- [ ] Mobile responsive design verified
- [ ] WhatsApp contact link working
- [ ] All internal links functional
- [ ] 404 handling configured
- [ ] SEO meta tags added
- [ ] Favicon set correctly
- [ ] Analytics integrated (optional)
- [ ] Performance tested (Lighthouse score)

---

## 🔍 Post-Deployment Verification

1. **Test all pages**

   - Homepage
   - Bangles
   - Clips & Accessories
   - All Accessories
   - Contact
   - Legal

2. **Verify functionality**

   - Navigation menu
   - New Arrival modal
   - Contact form WhatsApp integration
   - Footer links
   - Social media links

3. **Performance check**

   ```bash
   # Run Lighthouse audit
   npm install -g lighthouse
   lighthouse https://yoursite.com --view
   ```

4. **SEO verification**
   - Check meta tags
   - Verify robots.txt
   - Submit sitemap to Google Search Console

---

## 🐛 Troubleshooting

### Routes return 404

- Ensure `_redirects` file is in `public/` directory
- Content: `/*  /index.html  200`
- Verify deployment platform supports SPA routing

### Images not loading

- Check image paths (should be relative to `public/`)
- Verify images exist in correct directories
- Check browser console for 404 errors

### Build fails

- Clear node_modules: `rm -rf node_modules`
- Reinstall: `npm install`
- Clear cache: `npm cache clean --force`

### Slow load times

- Optimize images (use WebP format)
- Enable CDN if available
- Check bundle size: `npm run build -- --mode production`

---

## 📊 Monitoring & Analytics

### Google Analytics (Optional)

Add to `index.html`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

### Performance Monitoring

- Use Netlify Analytics
- Monitor Core Web Vitals
- Set up error tracking (Sentry, LogRocket)

---

## 🔄 Continuous Deployment

### Automatic deployment on push

**Netlify/Vercel**: Automatically deploys on push to main branch

**GitHub Actions** (alternative):

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod --dir=dist
```

---

## 📝 Rollback Strategy

### Netlify/Vercel

- Use platform's rollback feature in dashboard
- Instantly revert to previous deployment

### Manual Deployment

```bash
# Revert Git commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force origin main
```

---

## 🎯 Next Steps After Deployment

1. **Custom Domain**: Point your domain to deployment
2. **SSL Certificate**: Enable HTTPS (automatic on Netlify/Vercel)
3. **SEO**: Submit sitemap to search engines
4. **Social Media**: Update links to live site
5. **Monitoring**: Set up uptime monitoring
6. **Backup**: Regular backups of product images

---

Made with ❤️ at Techwithloki Hub by Logesh Kanagaraj
