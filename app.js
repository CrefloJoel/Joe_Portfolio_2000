// Personal website JavaScript - SPA functionality and data management

// Application data
const appData = {
  "personalInfo": {
    "name": "Creflo Joel",
    "title": "Full Stack Developer",
    "bio": "Passionate full-stack developer with 3+ years of experience building applications. I love creating efficient, scalable solutions and learning new technologies.",
    "email": "crefloasirjoel@gmail.com",
    "location": "Bengaluru, Karnataka,INDIA",
    "social": {
      "github": "https://github.com/CrefloJoel",
      // "linkedin": "https://linkedin.com/in/alexjohnson",
      // "twitter": "https://twitter.com/alexjohnson"
    }
  },
  "skills": [
    "Python", "JavaScript", "React", "Flask", "Django", "Node.js", 
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "HTML/CSS"
  ],
  "experience": [
    {
      "title": "Software Engineer",
      "company": "LTIMindtree",
      "period": "2022 - Present",
      "description": ["I am a dedicated Python Developer focused on creating, optimizing, and deploying essential tools and applications.", 
                     "Leveraging extensive experience in CI/CD pipelines (e.g., Jenkins, GitLab CI, GitHub Actions), I ensure seamless integration, testing, and continuous delivery of software. My work is underpinned by a solid domain expertise in High-Performance Computing (HPC), which allows me to design and implement solutions that efficiently handle large-scale computations and system management challenges."
  ]},
  ],
  "projects": [
    {
      "id": 1,
      "title": "E-commerce Platform",
      "description": "Full-stack e-commerce platform with user authentication, payment integration, and admin dashboard",
      "technologies": ["React", "Node.js", "MongoDB", "Stripe API"],
      "category": "Full Stack",
      // "github": "https://github.com/alexjohnson/ecommerce-platform",
      // "demo": "https://ecommerce-demo.com"
    },
    {
      "id": 2,
      "title": "Weather Dashboard",
      "description": "Real-time weather dashboard with location-based forecasts and interactive maps",
      "technologies": ["Python", "Flask", "JavaScript", "Weather API"],
      "category": "Web App",
      // "github": "https://github.com/alexjohnson/weather-dashboard",
      // "demo": "https://weather-demo.com"
    },
    {
      "id": 3,
      "title": "Task Management API",
      "description": "RESTful API for task management with user authentication and team collaboration features",
      "technologies": ["Python", "Django", "PostgreSQL", "JWT"],
      "category": "Backend",
      // "github": "https://github.com/alexjohnson/task-api",
      // "demo": null
    },
    // {
    //   "id": 4,
    //   "title": "Portfolio Website",
    //   "description": "Responsive personal portfolio website built with modern web technologies",
    //   "technologies": ["React", "CSS3", "JavaScript", "Netlify"],
    //   "category": "Frontend",
    //   "github": "https://github.com/alexjohnson/portfolio",
    //   "demo": "https://alexjohnson-portfolio.com"
    // },
    {
      "id": 5,
      "title": "Chat Application",
      "description": "Real-time chat application with rooms, private messaging, and file sharing",
      "technologies": ["Socket.io", "Node.js", "React", "MongoDB"],
      "category": "Full Stack",
      // "github": "https://github.com/alexjohnson/chat-app",
      // "demo": "https://chat-demo.com"
    },
    {
      "id": 6,
      "title": "Data Visualization Tool",
      "description": "Interactive dashboard for data visualization with multiple chart types and filtering options",
      "technologies": ["Python", "Flask", "D3.js", "Pandas"],
      "category": "Data Science",
      // "github": "https://github.com/alexjohnson/data-viz",
      // "demo": "https://dataviz-demo.com"
    }
  ],
  "categories": ["All", "Full Stack", "Frontend", "Backend", "Web App", "Data Science"]
};

// Application state
let currentPage = 'about';
let currentFilter = 'All';
let currentTheme = 'light';

// Theme management
function initializeTheme() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (prefersDark) {
    currentTheme = 'dark';
  } else {
    currentTheme = 'light';
  }
  
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  updateThemeIcon(currentTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  updateThemeIcon(currentTheme);
}

function updateThemeIcon(theme) {
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  
  if (sunIcon && moonIcon) {
    if (theme === 'dark') {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    } else {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }
  }
}

// Navigation
function navigateToPage(pageName) {
  console.log('Navigating to:', pageName);
  
  // Hide all pages
  const allPages = document.querySelectorAll('.page');
  allPages.forEach(page => {
    page.classList.remove('active');
  });
  
  // Show target page
  const targetPage = document.getElementById(`${pageName}-page`);
  if (targetPage) {
    targetPage.classList.add('active');
    console.log('Activated page:', targetPage.id);
  } else {
    console.error('Target page not found:', `${pageName}-page`);
  }
  
  // Update navigation links
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === pageName) {
      link.classList.add('active');
    }
  });
  
  // Update URL hash
  window.location.hash = pageName;
  currentPage = pageName;
}

// Populate skills
function populateSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  if (!skillsGrid) return;
  
  skillsGrid.innerHTML = ''; // Clear existing content
  
  appData.skills.forEach(skill => {
    const skillBadge = document.createElement('div');
    skillBadge.className = 'skill-badge';
    skillBadge.textContent = skill;
    skillsGrid.appendChild(skillBadge);
  });
}

// Populate experience
function populateExperience() {
  const experienceTimeline = document.getElementById('experienceTimeline');
  if (!experienceTimeline) return;
  
  experienceTimeline.innerHTML = ''; // Clear existing content
  
  appData.experience.forEach(exp => {
    const expItem = document.createElement('div');
    expItem.className = 'experience__item';
    
    expItem.innerHTML = `
      <div class="experience__header">
        <div>
          <h3 class="experience__title">${exp.title}</h3>
          <div class="experience__company">${exp.company}</div>
        </div>
        <span class="experience__period">${exp.period}</span>
      </div>
      <p class="experience__description">${exp.description}</p>
    `;
    
    experienceTimeline.appendChild(expItem);
  });
}

// Populate projects
function populateProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;
  
  projectsGrid.innerHTML = ''; // Clear existing content
  
  appData.projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.dataset.category = project.category;
    
    const techBadges = project.technologies.map(tech => 
      `<span class="tech-badge">${tech}</span>`
    ).join('');
    
    const projectLinks = [];
    if (project.github) {
      projectLinks.push(`
        <a href="${project.github}" class="project-link" target="_blank">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      `);
    }
    
    if (project.demo) {
      projectLinks.push(`
        <a href="${project.demo}" class="project-link primary" target="_blank">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15,3 21,3 21,9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          Live Demo
        </a>
      `);
    }
    
    projectCard.innerHTML = `
      <div class="project-image">📁</div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">${techBadges}</div>
      <div class="project-links">${projectLinks.join('')}</div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });
}

// Project filtering
function filterProjects(category) {
  const projectCards = document.querySelectorAll('.project-card');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // Update filter buttons
  filterButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    }
  });
  
  // Filter project cards with animation
  projectCards.forEach(card => {
    const cardCategory = card.dataset.category;
    
    if (category === 'All' || cardCategory === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
  
  currentFilter = category;
}

// Event listeners setup
function setupEventListeners() {
  // Navigation links
  document.addEventListener('click', function(e) {
    if (e.target.matches('.nav__link')) {
      e.preventDefault();
      const pageName = e.target.dataset.page;
      if (pageName) {
        navigateToPage(pageName);
      }
    }
  });
  
  // Theme toggle
  document.addEventListener('click', function(e) {
    if (e.target.matches('.theme-toggle') || e.target.closest('.theme-toggle')) {
      e.preventDefault();
      toggleTheme();
    }
  });
  
  // Project filter buttons
  document.addEventListener('click', function(e) {
    if (e.target.matches('.filter-btn')) {
      const category = e.target.dataset.category;
      if (category) {
        filterProjects(category);
      }
    }
  });
  
  // Handle browser back/forward buttons
  window.addEventListener('popstate', function() {
    const hash = window.location.hash.slice(1);
    if (hash && (hash === 'about' || hash === 'projects')) {
      navigateToPage(hash);
    } else {
      navigateToPage('about');
    }
  });
  
  // Handle system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      currentTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-color-scheme', currentTheme);
      updateThemeIcon(currentTheme);
    });
  }
}

// Initialize application
function initializeApp() {
  console.log('Initializing app...');
  
  // Initialize theme
  initializeTheme();
  
  // Populate content
  populateSkills();
  populateExperience();
  populateProjects();
  
  // Set up event listeners
  setupEventListeners();
  
  // Set initial page
  const hash = window.location.hash.slice(1);
  if (hash === 'projects') {
    navigateToPage('projects');
  } else {
    navigateToPage('about');
  }
  
  console.log('App initialized');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// Export functions for testing (if needed)
if (typeof window !== 'undefined') {
  window.navigateToPage = navigateToPage;
  window.toggleTheme = toggleTheme;
  window.filterProjects = filterProjects;
}