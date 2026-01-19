# GitHub Setup Guide

## ✅ Security Checklist Before Pushing

Before uploading to GitHub, verify:

- [x] `.env.local` is in `.gitignore` (protects your EmailJS credentials)
- [x] No hardcoded secrets in code
- [x] EmailJS credentials moved to environment variables
- [x] `.env.example` contains only templates (no actual credentials)
- [x] README.md updated with GitHub instructions
- [x] SECURITY.md created with security guidelines
- [x] No `vercel.json` (removed)

## 🚀 Upload to GitHub

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Repository name: `portfolio`
3. Description: `Full Stack Developer Portfolio | React • TypeScript • Tailwind CSS`
4. Choose **Public** (make it visible to potential employers)
5. Do NOT initialize with README (we already have one)
6. Click **Create Repository**

### Step 2: Push Code to GitHub

```bash
# Navigate to your project directory
cd "a:\Projects\Portfolio\project-bolt-sb1-qblb3l4n\project"

# Initialize git (if not already done)
git init

# Add all files to git (automatically excludes .gitignore entries)
git add .

# Verify what will be committed (check it doesn't include .env.local)
git status

# Commit with a meaningful message
git commit -m "Initial portfolio commit - Full Stack Developer portfolio with React, TypeScript, and Tailwind CSS"

# Rename branch to main
git branch -M main

# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Verify Upload

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/portfolio`
2. Verify files are uploaded correctly:
   - ✅ `src/` folder present
   - ✅ `.gitignore` present
   - ✅ `README.md` visible
   - ✅ `SECURITY.md` visible
   - ✅ `.env.local` NOT present (should be ignored)
   - ✅ `node_modules/` NOT present (should be ignored)
   - ✅ `dist/` NOT present (should be ignored)

3. Check GitHub shows the README and repository description

## 📝 Setup Environment Variables Locally

When running locally, create a `.env.local` file:

```bash
# Create .env.local file (already done)
# It contains your actual EmailJS credentials
# This file is NOT committed to git (protected by .gitignore)
```

The file is already set up at: `.env.local`

## 🔐 Security Notes

✅ **What's Protected:**

- `.env.local` is NOT committed (in `.gitignore`)
- EmailJS credentials are in environment variables, not hardcoded
- No sensitive data exposed in source code

✅ **What's Public (Intentional):**

- Your email address (for contact)
- GitHub profile link
- LinkedIn profile link
- Portfolio information

## 🔄 Future Updates

To update your portfolio after pushing to GitHub:

```bash
# Make changes locally
nano src/components/About.tsx  # or use your editor

# Test changes
npm run dev

# When satisfied, commit and push
git add .
git commit -m "Update: [describe your change]"
git push origin main
```

## ⚠️ Important: If You Accidentally Expose a Secret

1. **Immediately revoke** the exposed credential (regenerate EmailJS key)
2. Remove from history:

```bash
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch .env.local' \
  --prune-empty --tag-name-filter cat -- --all

git push --force origin main
```

3. Update `.env.local` with new credentials
4. Verify with: `git log --all -p | grep "EMAILJS"`

## 📊 After GitHub Upload

1. **Update your profiles:**
   - LinkedIn: Add repository link
   - Resume/CV: Include portfolio website
   - Portfolio cover letter: Link to GitHub repo

2. **Monitor repository:**
   - GitHub will show traffic/visitors (optional Analytics)
   - Star count shows interest
   - Forks indicate others find it useful

3. **Keep updated:**
   - Periodically `npm update` to fix security issues
   - Run `npm audit` monthly to check for vulnerabilities

## 🎯 Next Steps

1. ✅ Create GitHub repository
2. ✅ Push code to GitHub
3. ✅ Share portfolio link with potential employers
4. 🔄 Optionally: Deploy to hosting service (Netlify, GitHub Pages, etc.)
5. 🔄 Optionally: Setup custom domain

---

**Your portfolio is secure and ready for GitHub! 🚀**

For security details, see [SECURITY.md](./SECURITY.md)
