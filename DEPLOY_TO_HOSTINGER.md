# Deploying TypoGrammar to Hostinger

This document shows how to prepare and upload your static site build (Vite) to Hostinger (Apache). It assumes your project root contains a `dist/` folder produced by `npm run build`.

## What we've prepared for you
- `scripts/zip-dist.ps1`: PowerShell helper to create `dist-deploy.zip` (Windows)
- `scripts/zip-dist.sh`: Bash helper to create `dist-deploy.zip` (macOS / WSL / Linux)
- `public/.htaccess` is already present and will be copied to `dist/` by the build; the `dist/` folder includes `.htaccess`.

## Step 1 — Build (if not already built)
Run from project root:

```powershell
npm install
npm run build
```

## Step 2 — Create the deployment zip
Choose one of the scripts below depending on your environment.

Windows PowerShell (run in project root):

```powershell
.\scripts\zip-dist.ps1
```

Bash / WSL / macOS:

```bash
bash scripts/zip-dist.sh
```

After running the script you should have `dist-deploy.zip` in the project root. This zip contains the *contents* of `dist/` (not a parent `dist` folder).

## Step 3 — Upload to Hostinger (File Manager recommended)
1. Log into Hostinger hPanel.
2. Go to Files → File Manager.
3. Open `public_html`.
4. If you have old site files you want to replace, back them up then delete them from `public_html`.
5. Upload `dist-deploy.zip` (drag & drop or Upload button).
6. Select the uploaded `dist-deploy.zip` and use the `Extract` action so files are extracted into `public_html`.
7. Confirm that `index.html`, `assets/`, `.htaccess`, and other files are directly inside `public_html`.

> Important: Do NOT upload the `dist/` folder itself—upload its contents (the zip we created does this).

## Step 4 — Verify
- Visit your domain (e.g., https://yourdomain.com). The site should load.
- Test internal routes (e.g., `/topics/present-simple`) and refresh to confirm SPA routing. If you get 404s on refresh, ensure `.htaccess` exists in `public_html` and contains the rewrite rules.
- Open Developer Tools (F12) → Console to check for JavaScript errors and Network tab to see any missing files.

## Troubleshooting
- If the site is blank (dark screen):
  - Check browser Console for JS errors.
  - Check Network tab for failed requests (404/403). Missing `assets/*.js` indicates files are not in `public_html`.
- If you have 404s on page refresh: verify `.htaccess` is present and Apache `mod_rewrite` is enabled on the server (Hostinger supports it by default).

## Quick checklist before uploading
- [ ] `index.html` exists in `dist/`
- [ ] `assets/` folder exists in `dist/`
- [ ] `.htaccess` exists in `dist/`
- [ ] `public/images/blog/ielts-writing-guide-2026.jpg` exists (we confirmed it is in `public/images/blog`)
- [ ] `dist-deploy.zip` created from dist contents

## Optional: FTP (FileZilla) steps
1. Connect to Hostinger with FTP credentials.
2. Navigate to `public_html`.
3. Upload files from local `dist/` (or upload `dist-deploy.zip` and extract via File Manager).

---
If you want, I can now:
- Mark the task as complete in the todo list.
- Provide a short upload checklist you can open on your phone while uploading.
- Walk you through Hostinger File Manager steps while you do the upload.

Tell me which of these you'd like next.