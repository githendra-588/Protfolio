# Githendra Nath Reddy Mule — Personal Portfolio Website

A modern, high-performance, dual-audience personal portfolio website built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Designed specifically to address two audiences simultaneously:
1. **Recruiters & Hiring Managers** evaluating Githendra for Full-Stack Java (Spring Boot, Hibernate, MySQL, REST APIs) and React developer roles.
2. **Freelance Clients & Institutions** seeking custom web development, frontend engineering, or university-grade technical training workshops.

---

## ⚡ Tech Stack

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS (v3 with PostCSS & Autoprefixer)
- **Animations:** Framer Motion (subtle scroll-triggered entrance animations)
- **Icons:** Lucide React
- **Theme:** In-memory Dark / Light mode toggle (defaults to developer dark mode)
- **Deployment:** Zero-config deployable to Vercel, Netlify, or GitHub Pages

---

## 📁 Project Architecture

```text
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── public/
│   └── resume.pdf                 <-- Drop your official resume PDF here
└── src/
    ├── main.jsx                   <-- Application entrypoint
    ├── App.jsx                    <-- Assembled sections & modal management
    ├── index.css                  <-- Tailwind directives & custom utilities
    ├── assets/
    │   ├── README.md              <-- Asset replacement instructions
    │   └── images/                <-- Headshot & project screenshots
    ├── context/
    │   └── ThemeContext.jsx       <-- In-memory Dark/Light theme state
    ├── data/
    │   └── portfolioData.js       <-- Centralized real content (skills, experience, projects, etc.)
    └── components/
        ├── common/
        │   ├── Button.jsx         <-- Reusable animated button
        │   ├── SectionHeading.jsx <-- Reusable section title with gradient badges
        │   └── Modal.jsx          <-- Accessible modal dialog with backdrop blur
        ├── Navbar.jsx             <-- Sticky header, theme toggle, resume CTA, mobile menu
        ├── Hero.jsx               <-- Dual-audience value proposition, CTAs & headshot frame
        ├── About.jsx              <-- Story, dual career focus, education & certifications
        ├── Skills.jsx             <-- Filterable categorized skills with proficiency badges
        ├── Experience.jsx         <-- Vertical timeline distinguishing Freelance Trainer from corporate roles
        ├── Projects.jsx           <-- 16:9 screenshot placeholders, problem-solution statements, code & demo links
        ├── Services.jsx           <-- Freelance service cards & institutional trust strip (LPU, MITS, RIT, Saveetha)
        ├── Testimonials.jsx       <-- Client & student feedback with star ratings
        ├── Contact.jsx            <-- Form validation, auto-generated mailto, and direct links
        ├── ResumeModal.jsx        <-- Full curriculum vitae viewer with print & PDF download
        └── Footer.jsx             <-- Navigation anchors, copyright & social links
```

---

## 🚀 Getting Started

### 1. Installation
Run npm install in your terminal:
```bash
npm install
```

### 2. Run Local Development Server
Start Vite's fast HMR dev server:
```bash
npm run dev
```
Open your browser at [http://localhost:3000](http://localhost:3000).

### 3. Build for Production
Generate an optimized production build in `/dist`:
```bash
npm run build
```

You can preview the built production bundle locally using:
```bash
npm run preview
```

---

## 🖼️ How to Add Your Real Images & Resume

### 1. Professional Headshot
Place your headshot photo in `src/assets/images/headshot.jpg`. The Hero section avatar is styled with a gradient border and will display your image.

### 2. Project Screenshots
Replace or add your 16:9 or 4:3 screenshots into `src/assets/images/`:
- `candeur-crescent.png` (Real Estate Website showcase)
- `banking-system.png` (Full-Stack Java Banking platform)
- `hostel-hub.png` (Hostel Management System)
- `bibliostack.png` (Bibliostack React Book Manager)

### 3. Resume PDF
Place your real resume file at:
```text
public/resume.pdf
```
When clicked in the Navbar or Hero, the "Download PDF" button will directly download this file.

---

## ✏️ Updating Profile Data

All content (bio, stats, experiences, project details, skills, contact links) is stored in one clean file:
`src/data/portfolioData.js`

To add a new project, skill, or certification, simply edit that object.

---

## 🌐 Deploying to Vercel or Netlify

### Vercel:
1. Push this project to your GitHub account (`github.com/githendra-588/portfolio`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect **Vite** and configure:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

### Netlify:
1. Go to [netlify.com](https://netlify.com) and click **"Add new site" -> "Import an existing project"**.
2. Select your repository.
3. Set build command to `npm run build` and publish directory to `dist`.
4. Click **Deploy**.

