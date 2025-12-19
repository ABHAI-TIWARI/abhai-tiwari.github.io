# GitHub Pages Deployment Guide

## Fix for Build Error

If you're seeing the error:
```
Dependencies lock file is not found in /home/runner/work/abhai-tiwari.github.io/abhai-tiwari.github.io
```

This means GitHub is trying to build your site with Node.js, but your site is static HTML and doesn't need building.

## Solution: Deploy as Static Site

### Option 1: Simple Static Deployment (Recommended)

1. **Add `.nojekyll` file** (already included)
   - This tells GitHub Pages not to use Jekyll or any build process
   - Just upload the empty `.nojekyll` file to your repository root

2. **Repository Settings**:
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Build and deployment":
     - Source: Select "Deploy from a branch"
     - Branch: Select "main" (or "master") and "/ (root)"
   - Click Save

3. **File Structure** (upload these to your repo):
   ```
   your-repo/
   ├── .nojekyll          ← Important! This disables build process
   ├── .gitignore
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── README.md
   └── blog/
       ├── introduction-to-autosar.html
       └── introduction-to-zephyr-rtos.html
   ```

### Option 2: Using GitHub Actions (If you want more control)

If the above doesn't work or you need more control, create this file:

**`.github/workflows/static.yml`**

```yaml
name: Deploy static content to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then in repository Settings → Pages:
- Source: Select "GitHub Actions"

## Quick Deployment Steps

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Add GitHub remote**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   ```

3. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

4. **Wait 1-2 minutes** for GitHub Pages to deploy

5. **Visit**: `https://YOUR-USERNAME.github.io`

## Troubleshooting

### Issue: Still getting build errors
**Solution**: Make sure `.nojekyll` file exists in the root of your repository

### Issue: 404 Page Not Found
**Solution**: 
- Check that `index.html` is in the root directory
- Wait a few minutes for deployment to complete
- Check GitHub Actions tab for deployment status

### Issue: CSS/JS not loading
**Solution**: 
- Make sure file paths are correct (no leading slashes for same-directory files)
- Check browser console for errors
- Verify all files are committed and pushed

### Issue: Blog pages not working
**Solution**:
- Ensure the `blog/` folder and HTML files are in your repository
- Blog links use relative paths: `blog/introduction-to-autosar.html`
- All paths should work without modification

## File Checklist

Before deploying, ensure you have:
- [ ] `.nojekyll` file (empty file, very important!)
- [ ] `.gitignore` file
- [ ] `index.html`
- [ ] `styles.css`
- [ ] `script.js`
- [ ] `blog/` folder with blog HTML files
- [ ] `README.md` (optional but recommended)

## Alternative: Using GitHub Desktop

If you prefer a GUI:

1. Download GitHub Desktop
2. Create new repository or clone existing
3. Copy all website files to the repository folder
4. Commit changes in GitHub Desktop
5. Push to GitHub
6. Configure GitHub Pages in repository settings

## Need Help?

If you continue to have issues:
1. Check the GitHub Actions tab in your repository
2. Look for error messages in the workflow runs
3. Ensure repository settings → Pages is configured correctly
4. Verify the `.nojekyll` file exists

Your site is just static HTML/CSS/JS - it should work immediately once properly configured!
