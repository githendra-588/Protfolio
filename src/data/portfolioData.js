export const portfolioData = {
  personal: {
    name: "Githendra Nath Reddy Mule",
    role: "Full-Stack Java Developer & Technical Trainer",
    location: "Bengaluru, Karnataka, India",
    email: "githendranathreddy410@gmail.com",
    phone: "+91 6304094617",
    phoneFormatted: "+91 63040 94617",
    tagline: "Building scalable full-stack applications & training the next generation of engineers.",
    shortBio: "Full-Stack Java Developer with production experience across Spring Boot, Hibernate, React.js, and MySQL. Passionate about architecting robust REST APIs, crafting intuitive user interfaces, and conducting hands-on engineering training.",
    fullBio: "Full-Stack Java Developer with hands-on experience in Java, Spring Boot, Hibernate, React.js, MySQL, and RESTful APIs. Experienced in building full-stack applications using MVC architecture — CRUD operations, authentication, database integration, and responsive modern UIs. Additionally worked as a Software Technical Trainer, delivering industry-oriented Full Stack Java training, conducting 150+ technical mock interviews, and mentoring 500+ students across 6+ premier universities in application development, debugging, and software engineering.",
    lookingFor: "Open to full-time Software Engineer / Full-Stack Java Developer roles and freelance/contract web development & technical training projects.",
    stats: [
      { label: "Students Mentored", value: "500+" },
      { label: "Colleges & Universities", value: "6+" },
      { label: "Mock Interviews Conducted", value: "150+" },
      { label: "Full-Stack Projects", value: "10+" }
    ],
    socialLinks: {
      github: "https://github.com/githendra-588",
      linkedin: "https://linkedin.com/in/githendra-nath-reddy-mule",
      email: "mailto:githendranathreddy410@gmail.com",
      phone: "tel:+916304094617"
    }
  },

  skills: [
    {
      category: "Frontend",
      description: "Modern, responsive, and accessible user interfaces",
      items: [
        { name: "React.js", hot: true },
        { name: "JavaScript (ES6+)", hot: true },
        { name: "TypeScript" },
        { name: "Tailwind CSS", hot: true },
        { name: "HTML5" },
        { name: "CSS3" }
      ]
    },
    {
      category: "Backend",
      description: "Robust enterprise architecture, APIs & microservices",
      items: [
        { name: "Core Java (OOPs, Collections, Concurrency)", hot: true },
        { name: "Spring Boot", hot: true },
        { name: "Hibernate / JPA", hot: true },
        { name: "RESTful APIs", hot: true },
        { name: "Microservices" },
        { name: "MVC Architecture" }
      ]
    },
    {
      category: "Databases",
      description: "Relational modeling, indexing & persistence",
      items: [
        { name: "MySQL", hot: true },
        { name: "MongoDB" },
        { name: "Database Design & Normalization" }
      ]
    },
    {
      category: "Tools & DevOps",
      description: "Version control, API testing & dev workflows",
      items: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Postman" },
        { name: "VS Code" },
        { name: "IntelliJ IDEA" },
        { name: "Vite" }
      ]
    },
    {
      category: "Core Computer Science",
      description: "Algorithmic thinking, clean engineering & debugging",
      items: [
        { name: "Data Structures" },
        { name: "Algorithms" },
        { name: "DBMS Concepts" },
        { name: "Software Engineering & SDLC" },
        { name: "Live Debugging & Code Reviews", hot: true }
      ]
    }
  ],

  experiences: [
    {
      id: 1,
      role: "Independent Full Stack Java Trainer",
      organization: "Freelance / Self-Initiated",
      period: "Mar 2026 – Present",
      isCurrent: true,
      isFreelance: true,
      location: "Pan-India / Remote & On-Campus",
      badge: "Independent Contractor",
      summary: "Delivering high-impact Full Stack Java masterclasses, hands-on coding bootcamps, and mock interview drives independently across premier universities.",
      highlights: [
        "Delivered independent Full Stack Java training (unaffiliated with corporate training agencies) across 4 major institutions: Mohan Babu University (MBU), Sri Venkateswara College of Engineering (SVCE), Madanapalle Institute of Technology & Science (MITS), and MS Ramaiah (MSR / MSRUAS).",
        "Trained 340+ engineering students in Core Java, Spring Boot, Hibernate, REST API design, React.js, and MySQL database integration.",
        "Conducted 100+ one-on-one technical mock interviews, behavioral coaching, and resume audits to prepare students for top tier software engineering placements.",
        "Mentored student teams through enterprise-level capstone projects with real-time code reviews, Git collaboration, and live debugging sessions."
      ],
      institutionsCovered: "MBU • SVCE • MITS • MS Ramaiah (MSR)"
    },
    {
      id: 2,
      role: "Software Technical Trainer",
      organization: "Test Yantra Software Solutions",
      period: "Dec 2025 – Mar 2026",
      isCurrent: false,
      isFreelance: false,
      location: "Bengaluru, India",
      badge: "Full-Time Corporate Role",
      summary: "Spearheaded industry-oriented Full Stack Java training programs for large university student cohorts.",
      highlights: [
        "Conducted comprehensive Full Stack Java programs at Lovely Professional University (LPU) for 130+ students across 2 intensive batches and Saveetha University for 90+ students.",
        "Trained students in Core Java, Spring Boot, Hibernate, SQL, React.js, JavaScript, and HTML/CSS via hands-on live coding.",
        "Organized 50+ rigorous technical mock interviews, debugging challenges, and interview preparation workshops.",
        "Mentored students from initial design through REST API development, database modeling, and final capstone presentations."
      ],
      institutionsCovered: "LPU • Saveetha University"
    },
    {
      id: 3,
      role: "Full Stack Development Intern",
      organization: "Skill Dzire",
      period: "Dec 2024 – Apr 2025",
      isCurrent: false,
      isFreelance: false,
      location: "Remote / Hybrid",
      badge: "Internship",
      summary: "Contributed to front-end and back-end web development workflows.",
      highlights: [
        "Developed responsive web interfaces utilizing HTML5, CSS3, and modern JavaScript.",
        "Assisted in Java backend tasks, REST API development, and hands-on integration with Spring Boot and React.js components."
      ]
    },
    {
      id: 4,
      role: "Web Development Intern",
      organization: "Technohacks Edutech",
      period: "Jan 2024 – Mar 2024",
      isCurrent: false,
      isFreelance: false,
      location: "Remote",
      badge: "Internship",
      summary: "Built responsive client web pages and cross-browser interface components.",
      highlights: [
        "Created mobile-friendly web pages with clean semantic markup and modern CSS styling.",
        "Ensured responsive cross-device consistency and optimized frontend rendering performance."
      ]
    }
  ],

  projects: [
    {
      id: "candeur-crescent",
      title: "Real Estate Showcase (Candeur Crescent)",
      subtitle: "Commercial Showcase & Lead Generation Platform",
      category: "Freelance Deliverable",
      featured: true,
      badge: "Client Deliverable",
      tech: ["React.js", "Tailwind CSS", "Lucide Icons", "Responsive UI", "Lead Capture"],
      description: "A complete real estate showcase website for Candeur Crescent, Hyderabad. Features immersive property highlights, unit layouts, amenities walkthrough, and high-conversion inquiry capture.",
      problemSolved: "Replaced static PDF marketing brochures with an interactive, mobile-optimized digital experience that maximizes buyer engagement and facilitates instant inquiries.",
      imagePlaceholder: "Candeur Crescent Hyderabad — Luxury Living Experience"
    },
    {
      id: "banking-system",
      title: "Banking System (Full-Stack Java)",
      subtitle: "Enterprise MVC Banking Platform",
      category: "Full-Stack Java",
      featured: true,
      badge: "Enterprise Java",
      tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "React.js", "REST APIs", "Spring Data JPA"],
      description: "Robust enterprise banking solution featuring complete MVC architecture, secure user authentication, account management, deposit/withdrawal transactions, and fund transfers.",
      problemSolved: "Implemented transactional integrity and database-level validation to prevent race conditions during simultaneous fund transfers, paired with automated audit logs.",
      imagePlaceholder: "Core Banking Dashboard — Transactions & Ledger"
    },
    {
      id: "hostel-hub",
      title: "Hostel Management System (Hostel Hub)",
      subtitle: "MERN-Style Accommodation Portal",
      category: "React / Full-Stack",
      featured: false,
      badge: "Web Application",
      tech: ["React.js", "React Router", "Tailwind CSS", "State Management", "Form Validation"],
      description: "Interactive hostel accommodation platform with dynamic hostel search, room specification views, rental cost breakdowns, and mobile-first validation forms.",
      problemSolved: "Eliminated manual room allotment bottlenecks and spreadsheet errors by providing students and wardens a transparent real-time booking interface.",
      imagePlaceholder: "Hostel Hub — Room Discovery & Booking"
    },
    {
      id: "bibliostack",
      title: "Bibliostack Book Management",
      subtitle: "React CRUD Catalog with MockAPI",
      category: "Frontend & API",
      featured: false,
      badge: "CRUD Application",
      tech: ["React.js", "MockAPI.io", "LocalStorage Fallback", "Tailwind CSS", "Vercel"],
      description: "Feature-packed book management portal with instant search, multi-field filtering, full CRUD capabilities, and seamless offline fallback via LocalStorage.",
      problemSolved: "Ensured zero data loss for library catalogers during flaky network connections by engineering automatic synchronization between remote MockAPI and client storage.",
      imagePlaceholder: "Bibliostack — Library Catalog & Filtering"
    }
  ],

  services: [
    {
      id: 1,
      title: "Full-Stack Web App Development",
      icon: "Layers",
      description: "End-to-end custom web applications built from scratch with Java/Spring Boot or Node backend and high-performance React frontends.",
      deliverables: ["Custom MVC Architecture", "RESTful API Integration", "Secure Database Schema", "Production Deployment"]
    },
    {
      id: 2,
      title: "React Frontend Development",
      icon: "Code2",
      description: "Modern, blazing-fast single page applications (SPAs) crafted with React, Tailwind CSS, Framer Motion, and mobile-first responsiveness.",
      deliverables: ["Component-Driven UI", "Pixel-Perfect Layouts", "State Management", "Lighthouse 90+ Optimization"]
    },
    {
      id: 3,
      title: "REST API & Database Integration",
      icon: "Database",
      description: "Scalable backend REST services, database modeling with MySQL / Hibernate, and third-party API integrations designed for speed and reliability.",
      deliverables: ["CRUD Operations", "Data Serialization & Security", "Relational Modeling", "Postman Documentation"]
    },
    {
      id: 4,
      title: "Bug Fixes & Feature Enhancements",
      icon: "Wrench",
      description: "Rapid debugging, code refactoring, performance optimization, and seamless addition of new features into existing Java or React codebases.",
      deliverables: ["Deep Root-Cause Analysis", "Legacy Code Refactoring", "Performance Profiling", "Zero-Regression Testing"]
    },
    {
      id: 5,
      title: "University & Corporate Tech Training",
      icon: "GraduationCap",
      description: "Industry-grade Full-Stack Java workshops, coding bootcamps, and technical interview preparation with 150+ mock interviews conducted across 6+ universities.",
      deliverables: ["Core Java & Spring Boot Workshops", "React.js Hands-on Masterclasses", "1-on-1 Mock Technical Interviews", "Capstone Project Mentorship"]
    }
  ],

  institutions: [
    { name: "Lovely Professional University", short: "LPU", students: "130+ Students", trainedVia: "Test Yantra", location: "Punjab" },
    { name: "Saveetha University", short: "Saveetha", students: "90+ Students", trainedVia: "Test Yantra", location: "Chennai" },
    { name: "Mohan Babu University", short: "MBU", students: "85+ Students", trainedVia: "Independent Trainer", location: "Tirupati" },
    { name: "Sri Venkateswara College of Eng.", short: "SVCE", students: "80+ Students", trainedVia: "Independent Trainer", location: "Tirupati / Bengaluru" },
    { name: "Madanapalle Inst. of Tech. & Sci.", short: "MITS", students: "84+ Students", trainedVia: "Independent Trainer", location: "Andhra Pradesh" },
    { name: "MS Ramaiah (MSR / MSRUAS / RIT)", short: "MS Ramaiah", students: "100+ Students", trainedVia: "Independent Trainer", location: "Bengaluru" }
  ],

  certifications: [
    {
      title: "Java Programming Fundamentals",
      issuer: "Infosys Springboard",
      icon: "Award",
      details: "Comprehensive certification covering OOPs concepts, Java Collections framework, Exception Handling, and multithreaded programming."
    },
    {
      title: "Web Development",
      issuer: "Skill Chase",
      icon: "Globe",
      details: "Hands-on certification in frontend web technologies, responsive layouts, JavaScript DOM manipulation, and modern web standards."
    }
  ],

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Chaitanya Bharathi Institute of Technology (CBIT)",
    location: "Proddatur, Andhra Pradesh",
    period: "2021 – 2025",
    highlights: ["Strong foundation in Data Structures & Algorithms", "Database Management Systems", "Object-Oriented Software Design"]
  },

  testimonials: [
    {
      id: 1,
      name: "Engineering Student",
      role: "Full-Stack Java Cohort Graduate",
      company: "Lovely Professional University (LPU)",
      content: "Githendra's training on Spring Boot, React, and MySQL bridged the gap between academic theory and real-world development. His mock interview sessions and hands-on debugging gave our batch the technical confidence to clear placement interviews.",
      rating: 5
    },
    {
      id: 2,
      name: "Client Representative",
      role: "Project Stakeholder",
      company: "Real Estate Deliverable",
      content: "Delivered a clean, responsive property showcase on schedule with crisp UI and high attention to detail. Excellent communication and fast turnarounds on revisions.",
      rating: 5
    },
    {
      id: 3,
      name: "Computer Science Faculty",
      role: "Department Coordinator",
      company: "University Partner",
      content: "An exceptionally dedicated technical trainer who keeps students engaged through live coding examples, mock interviews, and real-time problem solving. Outstanding student feedback across all batches.",
      rating: 5
    }
  ]
};
