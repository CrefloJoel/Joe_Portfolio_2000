// ============================================================================
// Portfolio React 18 Application (Zero-Build ES Modules + htm)
// Content lives in ./data.js; styling lives in ./style.css.
// ============================================================================

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import htm from "htm";
import { portfolioData } from "./data.js";

// Bind htm to React.createElement so we get JSX-like templates with no build step
const html = htm.bind(React.createElement);

// ============================================================================
// Inline SVG Icons (crisp at every DPI, zero icon-font dependency)
// ============================================================================
const Icons = {
  BlossomMark: () => html`
    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <g transform="translate(16 16)" fill="#f9a8d4">
        <ellipse rx="3.1" ry="6.2" transform="rotate(0) translate(0 -6.2)" />
        <ellipse rx="3.1" ry="6.2" transform="rotate(72) translate(0 -6.2)" />
        <ellipse rx="3.1" ry="6.2" transform="rotate(144) translate(0 -6.2)" />
        <ellipse rx="3.1" ry="6.2" transform="rotate(216) translate(0 -6.2)" />
        <ellipse rx="3.1" ry="6.2" transform="rotate(288) translate(0 -6.2)" />
        <circle r="2.4" fill="#fde68a" />
      </g>
    </svg>
  `,
  Sun: () => html`
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  `,
  Moon: () => html`
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  `,
  GitHub: () => html`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.6-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  `,
  LinkedIn: () => html`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  `,
  Mail: () => html`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  `,
  Check: () => html`
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  `,
  Download: () => html`
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  `,
  Printer: () => html`
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect width="12" height="8" x="6" y="14" />
    </svg>
  `,
  Close: () => html`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  `
};

// Top navigation links (add { id: "projects", label: "Projects" } back later when ready)
const NAV_ITEMS = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "background", label: "Education" }
];

// Deterministic petal configs for the full-page falling sakura background.
// Negative delays start petals mid-flight immediately on page load.
const BACKGROUND_PETALS = [
  { x: "4%",  size: 11, duration: 15, delay: -2,  sway: 46,  drift: 22,  color: "#f472b6" },
  { x: "11%", size: 9,  duration: 18, delay: -11, sway: -38, drift: -18, color: "#fbcfe8" },
  { x: "18%", size: 13, duration: 13, delay: -6,  sway: 54,  drift: 32,  color: "#f9a8d4" },
  { x: "26%", size: 10, duration: 17, delay: -14, sway: -44, drift: -20, color: "#e879f9" },
  { x: "34%", size: 12, duration: 14, delay: -4,  sway: 42,  drift: 24,  color: "#f472b6" },
  { x: "43%", size: 9,  duration: 19, delay: -9,  sway: -36, drift: -16, color: "#fbcfe8" },
  { x: "51%", size: 13, duration: 15, delay: -1,  sway: 52,  drift: 28,  color: "#f9a8d4" },
  { x: "59%", size: 10, duration: 16, delay: -12, sway: -48, drift: -26, color: "#f472b6" },
  { x: "67%", size: 12, duration: 13, delay: -7,  sway: 44,  drift: 20,  color: "#fbcfe8" },
  { x: "75%", size: 9,  duration: 18, delay: -3,  sway: -40, drift: -22, color: "#c084fc" },
  { x: "83%", size: 13, duration: 14, delay: -10, sway: 48,  drift: 26,  color: "#f9a8d4" },
  { x: "90%", size: 10, duration: 17, delay: -5,  sway: -42, drift: -18, color: "#f472b6" },
  { x: "96%", size: 11, duration: 15, delay: -13, sway: -32, drift: -24, color: "#fbcfe8" }
];

// ============================================================================
// SakuraPetalRain: Ambient full-page drifting petals behind all content
// ============================================================================
function SakuraPetalRain() {
  return html`
    <div className="petal-layer no-print" aria-hidden="true">
      ${BACKGROUND_PETALS.map(
        (petal, idx) => html`
          <span
            key=${idx}
            className="falling-petal"
            style=${{
              "--petal-x": petal.x,
              "--petal-size": `${petal.size}px`,
              "--petal-duration": `${petal.duration}s`,
              "--petal-delay": `${petal.delay}s`,
              "--petal-sway": `${petal.sway}px`,
              "--petal-drift": `${petal.drift}px`,
              "--petal-color": petal.color
            }}
          />
        `
      )}
    </div>
  `;
}

// ============================================================================
// LofiSakuraScene: Pure inline SVG twilight cherry blossom & coding vignette
// ============================================================================
function LofiSakuraScene() {
  return html`
    <div className="lofi-scene" aria-hidden="true">
      <svg className="lofi-scene__svg" viewBox="0 0 420 336" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lofiSky" x1="0" y1="0" x2="420" y2="336" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e1338" />
            <stop offset="48%" stopColor="#4c1d6e" />
            <stop offset="82%" stopColor="#b83280" />
            <stop offset="100%" stopColor="#f6ad55" />
          </linearGradient>
          <radialGradient id="moonGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fde68a" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#f9a8d4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="glassCard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#17112a" stopOpacity="0.86" />
            <stop offset="100%" stopColor="#261942" stopOpacity="0.82" />
          </linearGradient>
        </defs>

        <!-- Twilight gradient sky -->
        <rect width="420" height="336" fill="url(#lofiSky)" />

        <!-- Subtle stars -->
        <circle cx="56" cy="48" r="1.4" fill="#fef3c7" opacity="0.85" />
        <circle cx="118" cy="34" r="1" fill="#fbcfe8" opacity="0.7" />
        <circle cx="176" cy="64" r="1.3" fill="#e9d5ff" opacity="0.75" />
        <circle cx="242" cy="36" r="1.1" fill="#fef3c7" opacity="0.8" />
        <circle cx="94" cy="96" r="1" fill="#f9a8d4" opacity="0.6" />
        <circle cx="384" cy="112" r="1.2" fill="#fef3c7" opacity="0.7" />

        <!-- Glowing sunset/moon orb -->
        <circle cx="312" cy="98" r="68" fill="url(#moonGlow)" />
        <circle cx="312" cy="98" r="28" fill="#fef08a" opacity="0.92" />

        <!-- Soft pastel clouds -->
        <ellipse cx="105" cy="148" rx="74" ry="16" fill="#f9a8d4" opacity="0.16" />
        <ellipse cx="330" cy="164" rx="82" ry="18" fill="#fdba74" opacity="0.2" />

        <!-- Minimalist city skyline with warm glowing windows -->
        <path
          d="M0 336 V246 H26 V220 H58 V250 H78 V204 H114 V244 H140 V226 H178 V254 H212 V196 H246 V236 H276 V218 H312 V246 H344 V208 H382 V238 H420 V336 Z"
          fill="#160f29"
          opacity="0.78"
        />
        <g fill="#fde68a" opacity="0.72">
          <rect x="34" y="232" width="5" height="6" rx="1" />
          <rect x="44" y="232" width="5" height="6" rx="1" />
          <rect x="88" y="216" width="5" height="6" rx="1" />
          <rect x="98" y="228" width="5" height="6" rx="1" />
          <rect x="222" y="208" width="5" height="6" rx="1" />
          <rect x="232" y="220" width="5" height="6" rx="1" />
          <rect x="354" y="220" width="5" height="6" rx="1" />
          <rect x="366" y="230" width="5" height="6" rx="1" />
        </g>

        <!-- Cherry blossom branch curving in from top-right -->
        <path
          d="M424 14 C376 34, 336 52, 286 64 C256 71, 232 70, 206 82"
          stroke="#2d1638"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M352 43 C340 62, 326 78, 306 90"
          stroke="#2d1638"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M286 64 C274 52, 264 42, 250 36"
          stroke="#2d1638"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <!-- Sakura blossom clusters -->
        <g>
          <g transform="translate(384 26)">
            <circle r="11" fill="#f472b6" opacity="0.92" />
            <circle cx="-7" cy="5" r="8" fill="#fbcfe8" />
            <circle cx="8" cy="7" r="7" fill="#f9a8d4" />
            <circle r="2.6" fill="#fef08a" />
          </g>
          <g transform="translate(342 46)">
            <circle r="12" fill="#f9a8d4" />
            <circle cx="9" cy="-5" r="8" fill="#f472b6" />
            <circle cx="-8" cy="6" r="7" fill="#fbcfe8" />
            <circle r="2.8" fill="#fde68a" />
          </g>
          <g transform="translate(292 64)">
            <circle r="10" fill="#fbcfe8" />
            <circle cx="7" cy="6" r="8" fill="#f472b6" />
            <circle cx="-7" cy="-4" r="6" fill="#f9a8d4" />
            <circle r="2.4" fill="#fde68a" />
          </g>
          <g transform="translate(248 36)">
            <circle r="8" fill="#f9a8d4" />
            <circle cx="-5" cy="4" r="6" fill="#fbcfe8" />
            <circle r="2" fill="#fde68a" />
          </g>
          <g transform="translate(212 80)">
            <circle r="9" fill="#f472b6" />
            <circle cx="-6" cy="-3" r="6" fill="#fbcfe8" />
            <circle r="2.2" fill="#fde68a" />
          </g>
          <g transform="translate(308 90)">
            <circle r="8.5" fill="#fbcfe8" />
            <circle cx="6" cy="4" r="6.5" fill="#f9a8d4" />
            <circle r="2" fill="#fde68a" />
          </g>
        </g>

        <!-- Gently drifting petals inside the scene -->
        <ellipse className="lofi-petal" cx="326" cy="116" rx="5.5" ry="3" transform="rotate(-24 326 116)" fill="#fbcfe8" />
        <ellipse className="lofi-petal lofi-petal--2" cx="258" cy="104" rx="4.8" ry="2.6" transform="rotate(18 258 104)" fill="#f9a8d4" />
        <ellipse className="lofi-petal lofi-petal--3" cx="192" cy="126" rx="5" ry="2.8" transform="rotate(-12 192 126)" fill="#f472b6" />
        <ellipse className="lofi-petal lofi-petal--4" cx="366" cy="144" rx="4.5" ry="2.4" transform="rotate(32 366 144)" fill="#fbcfe8" />

        <!-- Floating lo-fi code studio card -->
        <g transform="translate(26 168)">
          <rect width="268" height="136" rx="14" fill="url(#glassCard)" stroke="#f9a8d4" strokeOpacity="0.34" />
          <circle cx="18" cy="18" r="4" fill="#f472b6" />
          <circle cx="32" cy="18" r="4" fill="#fbbf24" />
          <circle cx="46" cy="18" r="4" fill="#2dd4bf" />
          <text x="64" y="22" fill="#c4b5fd" fontSize="10" fontFamily="JetBrains Mono, monospace">creflo@blr ~ /studio</text>
          <line x1="12" y1="32" x2="256" y2="32" stroke="#f9a8d4" strokeOpacity="0.16" />

          <text x="16" y="54" fill="#f9a8d4" fontSize="11" fontFamily="JetBrains Mono, monospace">stack</text>
          <text x="56" y="54" fill="#e9d5ff" fontSize="11" fontFamily="JetBrains Mono, monospace">= ["Python", "GenAI", "React"]</text>

          <text x="16" y="76" fill="#2dd4bf" fontSize="11" fontFamily="JetBrains Mono, monospace">focus</text>
          <text x="56" y="76" fill="#fde68a" fontSize="11" fontFamily="JetBrains Mono, monospace">= "clean APIs & agents"</text>

          <text x="16" y="98" fill="#c084fc" fontSize="11" fontFamily="JetBrains Mono, monospace">${"> status:"}</text>
          <text x="82" y="98" fill="#f3effa" fontSize="11" fontFamily="JetBrains Mono, monospace">shipping quietly</text>
          <rect className="lofi-cursor" x="195" y="88" width="7" height="12" rx="1.5" fill="#f472b6" />

          <!-- Subtle animated equalizer bars -->
          <g transform="translate(220 110)" fill="#f9a8d4" opacity="0.85">
            <rect className="lofi-bar" x="0" y="0" width="4" height="14" rx="2" />
            <rect className="lofi-bar lofi-bar--2" x="7" y="0" width="4" height="14" rx="2" fill="#c084fc" />
            <rect className="lofi-bar lofi-bar--3" x="14" y="0" width="4" height="14" rx="2" fill="#fdba74" />
            <rect className="lofi-bar lofi-bar--4" x="21" y="0" width="4" height="14" rx="2" fill="#2dd4bf" />
          </g>
          <text x="16" y="121" fill="#a78bfa" fontSize="9.5" fontFamily="JetBrains Mono, monospace">lo-fi · bengaluru twilight</text>
        </g>
      </svg>
    </div>
  `;
}

// ============================================================================
// ResumeModal: Printable / Save-as-PDF resume view when no static PDF exists
// ============================================================================
function ResumeModal({ data, onClose }) {
  // Close on Escape key and lock background scrolling while open
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const { profile, experience, skillGroups, education, certifications } = data;

  return html`
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick=${(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal resume-modal">
        <div className="resume-modal__bar no-print">
          <div>
            <strong id="resume-modal-title">Resume Preview</strong>
            <span className="resume-modal__hint">Save directly as PDF via your browser print dialog</span>
          </div>
          <div className="resume-modal__actions">
            <button
              type="button"
              className="btn btn--primary btn--sm"
              onClick=${() => window.print()}
            >
              <${Icons.Printer} />
              <span>Save / Print PDF</span>
            </button>
            <button
              type="button"
              className="icon-btn"
              onClick=${onClose}
              aria-label="Close resume preview"
            >
              <${Icons.Close} />
            </button>
          </div>
        </div>

        <div className="resume-sheet">
          <div className="resume-sheet__header">
            <h2>${profile.name}</h2>
            <p className="resume-sheet__role">Senior Software Engineer / Full Stack & AI Developer</p>
            <p className="resume-sheet__contact">
              ${profile.location} · ${profile.email} · github.com/${profile.githubUsername} · LinkedIn
            </p>
          </div>

          <div className="resume-sheet__block">
            <h3>Summary</h3>
            <p>${profile.bio}</p>
          </div>

          <div className="resume-sheet__block">
            <h3>Experience</h3>
            ${experience.map(
              (exp) => html`
                <div key=${exp.role} className="resume-sheet__role-block">
                  <div className="resume-sheet__row">
                    <strong>${exp.role} — ${exp.company}</strong>
                    <span>${exp.period}</span>
                  </div>
                  <ul>
                    ${exp.highlights.map((item) => html`<li key=${item}>${item}</li>`)}
                  </ul>
                </div>
              `
            )}
          </div>

          <div className="resume-sheet__block">
            <h3>Skills</h3>
            ${skillGroups.map(
              (group) => html`
                <p key=${group.group}>
                  <strong>${group.group}:</strong> ${group.skills.join(", ")}
                </p>
              `
            )}
          </div>

          <div className="resume-sheet__two-col">
            <div className="resume-sheet__block">
              <h3>Education</h3>
              ${education.map(
                (edu) => html`
                  <p key=${edu.degree}>
                    <strong>${edu.degree}</strong><br />
                    ${edu.institution} (${edu.period})
                  </p>
                `
              )}
            </div>

            <div className="resume-sheet__block">
              <h3>Certifications</h3>
              <ul>
                ${certifications.map(
                  (cert) => html`<li key=${cert.name}>${cert.name} — ${cert.issuer}</li>`
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// ExperienceCard: Expandable role summary + impact pills + bullet highlights
// ============================================================================
function ExperienceCard({ exp, defaultOpen }) {
  const [expanded, setExpanded] = useState(defaultOpen);

  return html`
    <article className="exp-card">
      <div className="exp-card__head">
        <div>
          <h3 className="exp-card__role">${exp.role}</h3>
          <div className="exp-card__company">${exp.company}</div>
        </div>
        <span className="exp-card__period">${exp.period}</span>
      </div>

      <p className="exp-card__summary">${exp.summary}</p>

      <div className="impact-row">
        ${exp.impacts.map((metric) => html`<span key=${metric} className="impact-pill">${metric}</span>`)}
      </div>

      <button
        type="button"
        className="exp-toggle"
        onClick=${() => setExpanded((prev) => !prev)}
        aria-expanded=${expanded}
      >
        <span>${expanded ? "Hide role details ▲" : "Read what I worked on ▼"}</span>
      </button>

      ${expanded && html`
        <ul className="bullet-list">
          ${exp.highlights.map((item) => html`<li key=${item}>${item}</li>`)}
        </ul>
      `}

      <div className="tag-list">
        ${exp.tags.map((tag) => html`<span key=${tag} className="tag">${tag}</span>`)}
      </div>
    </article>
  `;
}

// ============================================================================
// App: Root component managing theme state, scroll-spy nav, and resume modal
// ============================================================================
function App() {
  const {
    profile,
    companyProgression,
    experience,
    skillGroups,
    education,
    certifications
  } = portfolioData;

  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "light"
  );
  const [activeSection, setActiveSection] = useState("experience");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Toggle light/dark theme and save preference to localStorage
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch (_) {}
  };

  // Highlight the currently visible section in the top navigation bar
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.35] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Copy email address to clipboard with temporary visual confirmation
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (_) {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  // Download the real PDF if present in the repo root; otherwise open printable preview modal
  const handleResumeClick = async () => {
    if (profile.resumeUrl) {
      try {
        const res = await fetch(profile.resumeUrl, { method: "HEAD" });
        const contentType = res.headers.get("content-type") || "";
        if (res.ok && contentType.includes("pdf")) {
          const link = document.createElement("a");
          link.href = profile.resumeUrl;
          link.download = profile.resumeUrl.split("/").pop() || "Resume.pdf";
          document.body.appendChild(link);
          link.click();
          link.remove();
          return;
        }
      } catch (_) {}
    }
    setShowResumeModal(true);
  };

  return html`
    <${React.Fragment}>
      <!-- Ambient falling cherry blossom petals behind the entire page -->
      <${SakuraPetalRain} />

      <div className="app">
        <!-- Sticky Glass Navigation Header -->
        <header className="header no-print">
          <nav className="nav container" aria-label="Primary navigation">
            <a href="#top" className="brand">
              <span className="brand__blossom" aria-hidden="true">
                <${Icons.BlossomMark} />
              </span>
              <span>${profile.shortName}</span>
            </a>

            <ul className="nav__links">
              ${NAV_ITEMS.map(
                (item) => html`
                  <li key=${item.id}>
                    <a
                      href=${`#${item.id}`}
                      className=${`nav__link ${activeSection === item.id ? "active" : ""}`}
                    >
                      ${item.label}
                    </a>
                  </li>
                `
              )}
            </ul>

            <div className="nav__actions">
              <button
                type="button"
                onClick=${handleResumeClick}
                className="btn btn--sm"
                title="Download or view resume"
              >
                <${Icons.Download} />
                <span>Resume</span>
              </button>
              <button
                type="button"
                className="icon-btn"
                onClick=${toggleTheme}
                aria-label=${`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                title=${`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                ${theme === "dark" ? html`<${Icons.Sun} />` : html`<${Icons.Moon} />`}
              </button>
            </div>
          </nav>
        </header>

        <main id="top" className="no-print">
          <!-- Hero Intro + Lo-Fi Cherry Blossom Tech Window -->
          <section className="hero">
            <div className="container hero__grid">
              <div>
                <div className="status-pill">
                  <span className="status-dot" aria-hidden="true"></span>
                  <span>${profile.badge}</span>
                </div>

                <h1 className="hero__title">
                  Hey, I'm <span className="hero__name-accent">${profile.firstName}</span>.
                </h1>
                <p className="hero__headline">${profile.headline}</p>
                <p className="hero__bio">${profile.bio}</p>

                <div className="hero__actions">
                  <a href="#experience" className="btn btn--primary">Explore Experience</a>
                  <button type="button" onClick=${handleResumeClick} className="btn">
                    <${Icons.Download} />
                    <span>Resume PDF</span>
                  </button>

                  <span className="hero__divider" aria-hidden="true"></span>

                  <a
                    href=${profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-pill"
                  >
                    <${Icons.GitHub} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href=${profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-pill"
                  >
                    <${Icons.LinkedIn} />
                    <span>LinkedIn</span>
                  </a>
                  <button
                    type="button"
                    onClick=${handleCopyEmail}
                    className=${`contact-pill ${copiedEmail ? "contact-pill--copied" : ""}`}
                    title="Copy email address"
                  >
                    ${copiedEmail ? html`<${Icons.Check} />` : html`<${Icons.Mail} />`}
                    <span>${copiedEmail ? "Copied!" : profile.email}</span>
                  </button>
                </div>
              </div>

              <${LofiSakuraScene} />
            </div>
          </section>

          <!-- Note: Projects section intentionally omitted for now; add curated projects later. -->

          <!-- Enterprise Experience Timeline -->
          <section id="experience" className="section">
            <div className="container">
              <div className="section__head">
                <div>
                  <div className="section__kicker">Work History</div>
                  <h2 className="section__title">Enterprise Experience</h2>
                  <p className="section__subtitle">
                    Systems, pipelines, and automation frameworks built across my roles at Mindtree, LTIMindtree, and LTM.
                  </p>
                </div>
              </div>

              <div className="progression-bar" aria-label="Organization timeline">
                ${companyProgression.map(
                  (item) => html`
                    <span key=${item.company} className="progression-chip">
                      <strong>${item.company}</strong> · ${item.period}
                    </span>
                  `
                )}
              </div>

              <div className="timeline">
                ${experience.map(
                  (exp, idx) => html`
                    <${ExperienceCard}
                      key=${exp.role}
                      exp=${exp}
                      defaultOpen=${idx === 0}
                    />
                  `
                )}
              </div>
            </div>
          </section>

          <!-- Technical Skills Grouped by Domain -->
          <section id="skills" className="section">
            <div className="container">
              <div className="section__head">
                <div>
                  <div className="section__kicker">Toolbox</div>
                  <h2 className="section__title">Skills & Technologies</h2>
                </div>
              </div>

              <div className="skills-grid">
                ${skillGroups.map(
                  (group) => html`
                    <div key=${group.group} className=${`skill-card skill-card--${group.accent}`}>
                      <div className="skill-card__head">
                        <span className="skill-card__dot" aria-hidden="true"></span>
                        <h3 className="skill-card__title">${group.group}</h3>
                      </div>
                      <div className="tag-list">
                        ${group.skills.map(
                          (skill) => html`<span key=${skill} className="skill-pill">${skill}</span>`
                        )}
                      </div>
                    </div>
                  `
                )}
              </div>
            </div>
          </section>

          <!-- Education & Certifications -->
          <section id="background" className="section">
            <div className="container">
              <div className="section__head">
                <div>
                  <div className="section__kicker">Credentials</div>
                  <h2 className="section__title">Education & Certifications</h2>
                </div>
              </div>

              <div className="background-grid">
                <div className="info-panel">
                  <h3 className="info-panel__title">Education</h3>
                  ${education.map(
                    (edu) => html`
                      <div key=${edu.degree} className="edu-item">
                        <div className="edu-item__degree">${edu.degree}</div>
                        <div className="edu-item__meta">${edu.institution} · ${edu.period}</div>
                      </div>
                    `
                  )}
                </div>

                <div className="info-panel">
                  <h3 className="info-panel__title">Certifications</h3>
                  <ul className="cert-list">
                    ${certifications.map(
                      (cert) => html`
                        <li key=${cert.name} className="cert-item">
                          <span>${cert.name}</span>
                          <span className="cert-item__issuer">${cert.issuer}</span>
                        </li>
                      `
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <!-- Minimal Footer -->
        <footer className="footer no-print">
          <div className="container footer__inner">
            <span>© 2026 ${profile.name} · ${profile.location}</span>
            <div className="footer__links">
              <a href=${`mailto:${profile.email}`}>${profile.email}</a>
              <a href=${profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href=${profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </footer>

        ${showResumeModal && html`
          <${ResumeModal}
            data=${portfolioData}
            onClose=${() => setShowResumeModal(false)}
          />
        `}
      </div>
    <//>
  `;
}

// Mount the React application into #root
createRoot(document.getElementById("root")).render(html`<${App} />`);
