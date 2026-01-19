# Parth Azad - Portfolio

A modern, responsive portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. Features a sleek dark theme with green accents, smooth animations, and full-stack developer showcasing.

## 🎨 Features

- **Modern Design**: Dark theme with green accents and coder aesthetic
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Scroll-triggered animations and transition effects
- **Component-Based**: Modular, reusable React components with TypeScript
- **Performance Optimized**: Fast load times with CSS containment and GPU acceleration
- **SEO Friendly**: Semantic HTML structure and proper meta tags
- **Fully Type-Safe**: Complete TypeScript implementation

## 📋 Sections

- **Hero**: Eye-catching introduction with typing animation
- **About**: Professional overview and highlights
- **Skills**: Technical skills with animated progress bars
- **Projects**: Featured projects with horizontal scroll
- **Experience**: Timeline view of professional experience
- **Certifications**: Professional credentials showcase
- **Contact**: Multiple contact methods (Email, LinkedIn, GitHub, etc.)
- **Footer**: Quick links and social connections

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/parthazad0812/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file (copy from `.env.example`):

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🔨 Build & Deploy

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Push to GitHub

```bash
# Initialize git and push your code to GitHub
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

## 🔒 Security & Privacy

### Best Practices Implemented

✅ **No Sensitive Data**

- No API keys or secrets in code
- Environment variables for EmailJS credentials (not exposed)
- Email is intentionally public for contact purposes

✅ **Environment Variables**

- Sensitive data goes in `.env.local`
- Only `VITE_*` prefixed variables exposed to frontend
- `.env*` files excluded from Git

✅ **Security Headers**

- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection enabled
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions Policy: Camera, Microphone, Geolocation disabled

✅ **CSP & Headers**

- Frame busting protection
- XSS protection enabled
- Content-Type sniffing prevention

✅ **Dependencies**

- Regular npm audit checks
- Minimal dependencies to reduce attack surface
- All major packages kept up-to-date

### Before Deploying

**Do NOT commit:**

- `.env.local` or any `.env.*` files
- API keys or credentials
- Private information
- Secrets or tokens

**Check:**

- Run `npm audit` to check for vulnerabilities
- Review `.gitignore` is properly configured
- Verify no sensitive data in code comments

## 📦 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── TechnicalSkills/ # Skills section
│   ├── Projects.tsx     # Projects showcase
│   ├── Experience.tsx   # Work experience
│   ├── Certifications.  # Certifications
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer
├── hooks/               # Custom React hooks
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles

public/                 # Static assets
tailwind.config.js      # Tailwind setup
vite.config.ts          # Vite configuration
```

## 🎯 Performance Metrics

- **Optimized Animations**: 200ms transitions for smooth UX
- **GPU Acceleration**: Hardware-accelerated transforms
- **CSS Containment**: Improved rendering performance
- **Responsive Images**: Optimized for all screen sizes
- **Code Splitting**: Automatic with Vite

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v3
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Version Control**: Git

## 📝 License

This portfolio is open source and available for personal use.

## 👤 Contact

- **Email**: parthazad08@gmail.com
- **GitHub**: [@parthazad0812](https://github.com/parthazad0812)
- **LinkedIn**: [Parth Azad](https://www.linkedin.com/in/parth-azad-7b749a281/)

## 🎓 Credits

Built with attention to:

- Performance optimization
- Modern web standards
- Accessibility best practices
- Security-first approach

---

**Happy coding! 🚀**
