# Security Policy

## 🔒 Security Overview

This portfolio website follows security best practices to protect your data and privacy.

## Security Measures

### 1. **No Sensitive Data Exposure**

✅ **What's Protected:**

- No API keys or tokens in source code
- No database credentials
- No private authentication tokens
- No payment information
- No personal identifiable information (PII) beyond intentional contact info

✅ **Environment Variables:**

- All sensitive configuration uses environment variables
- `.env.local` and `.env.*` files are in `.gitignore`
- Only necessary variables are exposed via `VITE_*` prefix

### 2. **Frontend Security**

✅ **Content Security Policy (CSP)**

- Configured in `vercel.json`
- Prevents inline script execution
- Blocks unauthorized resource loading

✅ **HTTP Security Headers**

```
X-Content-Type-Options: nosniff      # Prevents MIME sniffing
X-Frame-Options: DENY                 # Prevents clickjacking
X-XSS-Protection: 1; mode=block      # Blocks XSS attacks
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

✅ **Third-Party Libraries**

- All dependencies are from official npm registry
- Regular `npm audit` checks performed
- Minimal dependencies to reduce attack surface

### 3. **Data Privacy**

✅ **User Information**

- No cookies or local storage for tracking
- No analytics tracking (Google Analytics can be added with proper consent)
- Contact information is publicly available (intentionally)
- No user data collection

✅ **Email Handling**

- Email links are standard `mailto:` links
- No data sent to backend
- Email is managed by user's email client

### 4. **Deployment Security**

✅ **Vercel Deployment**

- Uses Vercel's secure infrastructure
- HTTPS enforced
- DDoS protection
- Regular security patches applied

✅ **Git Security**

- `.gitignore` prevents secret leakage
- No credentials in commit history
- Consider making repository private if needed

### 5. **Build Process Security**

✅ **Build Time**

- No sensitive data embedded during build
- Environment variables properly isolated
- Only `VITE_*` variables available in browser

✅ **Dependencies**

```bash
# Check for vulnerabilities
npm audit

# Update to latest secure versions
npm update
```

## 🚨 Incident Response

### If a Secret is Accidentally Committed:

1. **Immediately Revoke** the compromised secret
2. **Rotate Keys** if any credentials were exposed
3. **Force Push** to remove from history:

```bash
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch <file>' \
  --prune-empty --tag-name-filter cat -- --all
git push --force --all
git push --force --tags
```

4. **Notify** relevant service providers

## ✅ Security Checklist

Before deploying, ensure:

- [ ] `.env.local` is in `.gitignore`
- [ ] No API keys in source code
- [ ] No hardcoded secrets
- [ ] `npm audit` shows no critical vulnerabilities
- [ ] All environment variables are named with `VITE_` prefix (if frontend)
- [ ] No sensitive data in comments
- [ ] Git history is clean
- [ ] `vercel.json` is configured with security headers
- [ ] HTTPS is enabled on deployed site
- [ ] Vercel environment variables are set

## 📋 Environment Variables Guide

### Frontend Safe (VITE\_ prefix):

```
VITE_APP_NAME
VITE_API_URL (public endpoint only)
VITE_GA_MEASUREMENT_ID (analytics)
```

### Backend/Sensitive (NO VITE\_ prefix):

```
DATABASE_URL
API_KEY
SECRET_TOKEN
```

**These should NEVER be exposed to frontend!**

## 🔍 Regular Security Audits

### Weekly:

```bash
npm audit
```

### Monthly:

- Review dependencies for updates
- Check GitHub security alerts
- Review Vercel dashboard for security notices

### Before Major Deployments:

- Full `npm audit`
- Test HTTPS certificate
- Verify CSP headers
- Check for console errors/warnings

## 🛡️ Additional Recommendations

1. **Enable Two-Factor Authentication (2FA)**
   - GitHub account
   - Vercel account
   - Email account

2. **Use SSH Keys**
   - Generate SSH key: `ssh-keygen -t ed25519`
   - Add to GitHub/Vercel

3. **Branch Protection**
   - Require pull requests
   - Require approvals before merge
   - Run security checks in CI/CD

4. **Monitor Dependencies**
   - Enable Dependabot on GitHub
   - Review and merge security updates promptly

## 🔐 Secret Rotation Schedule

- API Keys: Every 90 days
- Passwords: Every 180 days
- Deploy Tokens: Every 365 days
- SSL Certificates: Automatically handled by Vercel

## Contact Security Issues

If you discover a security vulnerability, **do not** open a public issue.

Instead:

1. Report privately via email
2. Include detailed description
3. Provide proof of concept if possible
4. Allow time for patching before disclosure

## Compliance

This portfolio follows:

- OWASP Top 10 security guidelines
- Industry best practices for frontend security
- Vercel security recommendations

---

**Last Updated**: January 2026
**Version**: 1.0
