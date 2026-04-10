import { useState } from "react";
import rubiksThumb from "./Projectthumb/rcube.png";
import game2048Thumb from "./Projectthumb/2048.png";
import bookstoreThumb from "./Projectthumb/book store.png";
import triviaThumb from "./Projectthumb/trivia.png";
import libraryThumb from "./Projectthumb/college library.png";
import portfolioThumb from "./Projectthumb/modern portfolio.png";
import tharavaduThumb from "./Projectthumb/tharavadu.png";
import thakkaramThumb from "./Projectthumb/thakkaram.png";
import arslanThumb from "./Projectthumb/arsalan.png";
import yukthiThumb from "./Projectthumb/yasyayukthi.png";
import microsoftLogo from "./logo/microsoft.png";
import ibmLogo from "./logo/ibm.png";
import googleLogo from "./logo/google.png";

const styles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .fade-up-1 { animation: fadeUp 0.7s ease 0.1s both; }
  .fade-up-2 { animation: fadeUp 0.7s ease 0.25s both; }
  .fade-up-3 { animation: fadeUp 0.7s ease 0.4s both; }

  .shimmer-text {
    background: linear-gradient(90deg, #C8A658 0%, #F0D98A 35%, #C8A658 60%, #F0D98A 85%, #C8A658 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }

  .section-label {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #C8A658;
    margin-bottom: 1rem;
    display: block;
  }

  .section-divider {
    width: 48px;
    height: 2px;
    background: #C8A658;
    margin: 1rem 0 2.5rem;
  }

  .filter-btn {
    padding: 8px 20px;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: 1px solid rgba(200,166,88,0.2);
    background: transparent;
    color: #8A8580;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .filter-btn:hover {
    border-color: rgba(200,166,88,0.5);
    color: #C8A658;
  }
  .filter-btn.active {
    background: #C8A658;
    color: #0A0A0A;
    border-color: #C8A658;
    font-weight: 700;
  }

  .project-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(200,166,88,0.1);
    overflow: hidden;
    transition: all 0.4s ease;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .project-card:hover {
    border-color: rgba(200,166,88,0.3);
    background: rgba(200,166,88,0.025);
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(200,166,88,0.1);
  }
  .project-card.featured {
    border-color: rgba(200,166,88,0.25);
    background: rgba(200,166,88,0.03);
    grid-column: span 2;
  }
  .project-card.featured:hover {
    border-color: rgba(200,166,88,0.5);
  }

  .project-image {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .project-card.featured .project-image {
    aspect-ratio: 21/9;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border: 1px solid rgba(200,166,88,0.25);
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #C8A658;
    text-decoration: none;
    background: transparent;
    transition: all 0.3s ease;
  }
  .project-link:hover {
    background: rgba(200,166,88,0.1);
    border-color: rgba(200,166,88,0.5);
  }
  .project-link.solid {
    background: #C8A658;
    color: #0A0A0A;
    font-weight: 700;
  }
  .project-link.solid:hover { background: #E0BC72; }

  .cert-card {
    padding: 2rem;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(200,166,88,0.12);
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
  }
  .cert-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #C8A658, transparent);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  .cert-card:hover::before { transform: scaleX(1); }
  .cert-card:hover {
    background: rgba(200,166,88,0.03);
    border-color: rgba(200,166,88,0.28);
    transform: translateY(-4px);
  }

  .freelance-card {
    padding: 0;
    background: rgba(255,255,255,0.018);
    border: 1px solid rgba(200,166,88,0.1);
    overflow: hidden;
    transition: all 0.35s ease;
  }
  .freelance-card:hover {
    border-color: rgba(200,166,88,0.35);
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.35);
  }

  .image-placeholder {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .image-placeholder::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      45deg,
      rgba(200,166,88,0.03) 0px,
      rgba(200,166,88,0.03) 1px,
      transparent 1px,
      transparent 16px
    );
  }

  .tech-chip {
    padding: 3px 8px;
    border: 1px solid rgba(200,166,88,0.15);
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: #6A6860;
    letter-spacing: 0.5px;
  }

  .score-badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    background: linear-gradient(135deg, rgba(200,166,88,0.15), rgba(200,166,88,0.05));
    border: 1px solid rgba(200,166,88,0.3);
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: #C8A658;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  .freelance-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 1024px) {
    .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .project-card.featured { grid-column: span 2 !important; }
  }
  @media (max-width: 768px) {
    .projects-grid { grid-template-columns: 1fr !important; }
    .project-card.featured { grid-column: span 1 !important; }
    .project-card.featured .project-image { aspect-ratio: 16/9 !important; }
    .freelance-grid { grid-template-columns: 1fr !important; }
    .cert-card { flex-direction: column !important; }
  }
`;

// ─── DATA ───────────────────────────────────────────────────────────

const technicalProjects = [
  {
    id: "rubiks",
    title: "3D Interactive Rubik's Cube",
    description: "A performance-optimized 3D simulation of a Rubik's Cube built with Three.js. Supports all standard rotations with smooth animations and touch controls.",
    tags: ["Three.js", "JavaScript", "3D Graphics", "WebGL"],
    category: "Creative Dev",
    icon: "🎲",
    color: "#E74C3C",
    featured: false,
    thumbnail: rubiksThumb,
    github: "https://github.com/ftashish/Rubixcube",
    demo: "https://ftashish.github.io/Rubixcube/",
    placeholder: "3D Rubik's Cube simulation — interactive rotations & animations",
  },
  {
    id: "2048",
    title: "2048 Strategy Game",
    description: "Full-featured 2048 implementation with tile merging logic, real-time score tracking, undo history, and a polished responsive UI with smooth transitions.",
    tags: ["JavaScript", "CSS Grid", "Game Logic"],
    category: "Game Dev",
    icon: "🎯",
    color: "#F39C12",
    featured: false,
    thumbnail: game2048Thumb,
    github: "https://github.com/ftashish/2048",
    demo: "https://ftashish.github.io/2048/",
    placeholder: "2048 game board — tile merging and score tracking",
  },
  {
    id: "bookstore",
    title: "Online Bookstore Platform",
    description: "A responsive e-commerce platform for browsing, searching, and purchasing books. Features a clean product grid, cart system, and smooth checkout flow.",
    tags: ["React.js", "CSS", "E-Commerce", "UX"],
    category: "Web App",
    icon: "📚",
    color: "#27AE60",
    featured: false,
    thumbnail: bookstoreThumb,
    github: "https://github.com/ftashish/Book-Store",
    demo: "https://ftashish.github.io/Book-Store/",
    placeholder: "Bookstore product grid — responsive e-commerce UI",
  },
  {
    id: "trivia",
    title: "Interactive Rom-Com Trivia App",
    description: "A quiz application with a curated database of romantic comedy trivia. Features real-time scoring, animated feedback, and themed UI with category filtering.",
    tags: ["React.js", "JavaScript", "Quiz Engine"],
    category: "Interactive",
    icon: "🎬",
    color: "#8E44AD",
    featured: false,
    thumbnail: triviaThumb,
    github: "https://github.com/ftashish/Quiz-App",
    demo: "https://ftashish.github.io/Quiz-App/",
    placeholder: "Rom-com trivia quiz — real-time scoring interface",
  },
  {
    id: "library",
    title: "College Library Website",
    description: "An accessible and navigable digital library system for a college campus. Focused on WCAG accessibility standards, semantic HTML, and intuitive catalog browsing.",
    tags: ["HTML", "CSS", "Accessibility", "WCAG"],
    category: "Web Design",
    icon: "🏛️",
    color: "#2980B9",
    featured: false,
    thumbnail: libraryThumb,
    github: "https://github.com/ashishsimonmathew",
    demo: "https://ftashish.github.io/College-Library/",
    placeholder: "College library website — catalog and navigation UI",
  },
  {
    id: "hydrosweep",
    title: "HydroSweep — Amphibious Robot",
    featured: false,
    description: "A remote-controlled amphibious robot engineered for waterway waste management. Integrates embedded systems, motor control, and real-time remote operation for environmental cleanup in lakes and rivers.",
    tags: ["Embedded Systems", "IoT", "Motor Control", "Hardware", "Arduino"],
    category: "Hardware · Robotics",
    icon: "🤖",
    color: "#00B4D8",
    github: "https://github.com/ashishsimonmathew",
    demo: null,
    placeholder: "HydroSweep amphibious robot — waterway waste management system",
  },
  {
    id: "portfolio",
    title: "Modern Developer Portfolio",
    description: "A modern portfolio website showcasing projects, certifications, and leadership with a clean, responsive visual system.",
    tags: ["React.js", "Portfolio", "UI Design"],
    category: "Web App",
    icon: "💼",
    color: "#7D7CFF",
    featured: false,
    thumbnail: portfolioThumb,
    github: "https://github.com/ftashish/Portfolio",
    demo: "https://ftashish.github.io/Portfolio/",
    placeholder: "Modern developer portfolio website",
  },
  {
    id: "yukthi",
    title: "Yukthi Yasya Fest Website",
    description: "An event management interface for a college technical festival. Handles event listings, team registrations, schedule display, and real-time updates.",
    tags: ["HTML", "CSS", "JavaScript", "Event Management"],
    category: "Web Design",
    icon: "🎉",
    color: "#E91E63",
    featured: false,
    thumbnail: yukthiThumb,
    github: "https://github.com/ashishsimonmathew",
    demo: "https://yukthi.org/",
    placeholder: "Yukthi Yasya fest website — event management interface",
  },
];

const freelanceProjects = [
  {
    id: "tharavadu",
    title: "Tharavadu",
    description: "A digital showcase of Kerala's cultural heritage. Immersive storytelling through traditional architecture, customs, and art forms.",
    tags: ["Cultural", "HTML/CSS", "Design"],
    icon: "🏯",
    color: "#8B5E3C",
    thumbnail: tharavaduThumb,
    site: "https://tharavadu.org/",
    placeholder: "Tharavadu — Kerala cultural heritage website",
  },
  {
    id: "thakkaram",
    title: "Thakkaram",
    description: "A rich culinary and restaurant interface blending traditional recipes with modern digital design for an authentic dining experience.",
    tags: ["Restaurant", "UI Design", "Food"],
    icon: "🍛",
    color: "#E8734A",
    thumbnail: thakkaramThumb,
    site: "https://thakkaram.com/",
    placeholder: "Thakkaram — culinary restaurant website interface",
  },
  {
    id: "arslan",
    title: "Arslan Plumbing",
    description: "A clean, professional service platform for a plumbing business. Features service listings, booking inquiry forms, and trust-building elements.",
    tags: ["Service Platform", "Landing Page", "Local Business"],
    icon: "🔧",
    color: "#4A90D9",
    thumbnail: arslanThumb,
    site: "https://arslanplumbing.com/",
    placeholder: "Arslan Plumbing — professional services website",
  },
];

const certifications = [
  {
    id: "microsoft",
    title: "Full-Stack Software Engineering Foundations",
    issuer: "Microsoft Certified",
    score: "98.40%",
    icon: "🪟",
    logo: microsoftLogo,
    certificateFile: "/certification/microsoft.pdf",
    color: "#00A4EF",
    description: "Comprehensive certification covering full-stack architecture, software engineering fundamentals, algorithms, and production-grade development practices.",
    skills: ["Full-Stack Dev", "Algorithms", "Software Architecture", "APIs"],
    placeholder: "Microsoft Full-Stack Software Engineering Certificate (98.40%)",
  },
  {
    id: "ibm",
    title: "Front-End Developer Professional Certificate",
    issuer: "IBM",
    score: null,
    icon: "💙",
    logo: ibmLogo,
    certificateFile: "/certification/ibm.pdf",
    color: "#1F70C1",
    description: "Professional-level certification in front-end development covering React, HTML/CSS, JavaScript, and modern web development workflows.",
    skills: ["React", "JavaScript", "HTML/CSS", "Web Accessibility"],
    placeholder: "IBM Front-End Developer Professional Certificate",
  },
  {
    id: "google",
    title: "UX Design Professional Certificate",
    issuer: "Google",
    score: null,
    icon: "🎨",
    logo: googleLogo,
    certificateFile: "/certification/google-coursera.pdf",
    color: "#4285F4",
    description: "Seven-course program covering the end-to-end UX design process: user research, wireframing, prototyping, and usability testing.",
    skills: ["UX Research", "Figma", "Prototyping", "Usability Testing"],
    placeholder: "Google UX Design Professional Certificate",
  },
];

// ─── IMAGE PLACEHOLDER COMPONENT ───────────────────────────────────

function ImagePlaceholder({ alt, icon, color, aspectRatio = "16/9", height }) {
  return (
    <div
      className="image-placeholder"
      style={{
        aspectRatio: height ? undefined : aspectRatio,
        height: height || undefined,
        background: `linear-gradient(135deg, #111 0%, #141414 50%, #111 100%)`,
        borderBottom: `1px solid rgba(200,166,88,0.1)`,
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
        zIndex: 1,
        padding: "1rem",
        textAlign: "center",
      }}>
        <div style={{
          width: "56px", height: "56px",
          borderRadius: "50%",
          background: `${color}18`,
          border: `2px solid ${color}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
        }}>
          {icon}
        </div>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "9px",
          color: "#4A4840",
          letterSpacing: "1px",
          textTransform: "uppercase",
          maxWidth: "200px",
          lineHeight: "1.5",
        }}>
          {alt}
        </span>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "8px",
          color: "#3A3830",
          letterSpacing: "1px",
        }}>
          [ swap with screenshot ]
        </span>
      </div>
    </div>
  );
}

// ─── PROJECT CARD ───────────────────────────────────────────────────

function ProjectCard({ project }) {
  return (
    <div className={`project-card ${project.featured ? "featured" : ""}`}>
      {project.featured && (
        <div style={{
          position: "absolute",
          top: "1rem", left: "1rem",
          zIndex: 2,
          padding: "4px 10px",
          background: "#C8A658",
          fontFamily: "'DM Mono', monospace",
          fontSize: "9px",
          color: "#0A0A0A",
          fontWeight: "700",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}>
          ★ Featured
        </div>
      )}

      <div className="project-image">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <ImagePlaceholder
            alt={project.placeholder}
            icon={project.icon}
            color={project.color}
            aspectRatio={project.featured ? "21/9" : "16/9"}
          />
        )}
      </div>

      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "9px",
          color: "#C8A658",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}>
          {project.category}
        </div>

        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: project.featured ? "1.5rem" : "1.1rem",
          color: "#F0EDE8",
          fontWeight: "600",
          marginBottom: "0.75rem",
          lineHeight: "1.3",
        }}>
          {project.title}
        </h3>

        <p style={{
          color: "#6A6860",
          fontSize: "0.85rem",
          lineHeight: "1.7",
          marginBottom: "1rem",
          flex: 1,
        }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
          {project.tags.map(tag => (
            <span key={tag} className="tech-chip">{tag}</span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
              ⌥ GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="project-link solid">
              ↗ Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── SHOWCASE PAGE ─────────────────────────────────────────────────

export default function Showcase() {
  const [filter, setFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Work" },
    { id: "technical", label: "Technical Projects" },
    { id: "freelance", label: "Client Work" },
    { id: "certs", label: "Certifications" },
  ];

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{styles}</style>

      {/* ─── PAGE HEADER ─── */}
      <section style={{
        paddingTop: "140px",
        paddingBottom: "60px",
        padding: "140px 2rem 60px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(200,166,88,0.08)",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            linear-gradient(rgba(200,166,88,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,166,88,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="fade-up-1">
            <span className="section-label">The Deep Gallery · Projects & Certifications</span>
          </div>

          <h1 className="fade-up-2" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: "900",
            color: "#F0EDE8",
            lineHeight: "1.05",
            marginBottom: "1.5rem",
          }}>
            Work that <em className="shimmer-text">speaks.</em>
          </h1>

          <p className="fade-up-3" style={{
            color: "#6A6860",
            fontSize: "1rem",
            maxWidth: "500px",
            lineHeight: "1.75",
            marginBottom: "2.5rem",
          }}>
            A curated collection of personal builds, client projects, and professional credentials — spanning web, hardware, and UX.
          </p>

          {/* Filter Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {filters.map(f => (
              <button
                key={f.id}
                className={`filter-btn ${filter === f.id ? "active" : ""}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>

        {/* ─── CATEGORY A: TECHNICAL PROJECTS ─── */}
        {(filter === "all" || filter === "technical") && (
          <section style={{ padding: "5rem 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "0.5rem" }}>
              <span className="section-label" style={{ margin: 0 }}>Category A</span>
              <div style={{ flex: 1, height: "1px", background: "rgba(200,166,88,0.12)" }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "#F0EDE8",
              fontWeight: "700",
              marginBottom: "0.5rem",
            }}>
              Technical & <em style={{ color: "#C8A658" }}>Personal Projects</em>
            </h2>
            <div className="section-divider" />

            <div className="projects-grid">
              {technicalProjects
                .slice()
                .sort((a, b) => Number(a.id === "hydrosweep") - Number(b.id === "hydrosweep"))
                .map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </section>
        )}

        {/* ─── DIVIDER ─── */}
        {filter === "all" && (
          <div style={{ height: "1px", background: "rgba(200,166,88,0.08)", margin: "0 0 0.5rem" }} />
        )}

        {/* ─── CATEGORY B: FREELANCE ─── */}
        {(filter === "all" || filter === "freelance") && (
          <section style={{ padding: "5rem 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "0.5rem" }}>
              <span className="section-label" style={{ margin: 0 }}>Category B</span>
              <div style={{ flex: 1, height: "1px", background: "rgba(200,166,88,0.12)" }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "#F0EDE8",
              fontWeight: "700",
              marginBottom: "0.5rem",
            }}>
              Freelance & <em style={{ color: "#C8A658" }}>Client Work</em>
            </h2>
            <div className="section-divider" />

            <div className="freelance-grid">
              {freelanceProjects.map(project => (
                <div key={project.id} className="freelance-card">
                  {project.thumbnail ? (
                    <div className="project-image" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      alt={project.placeholder}
                      icon={project.icon}
                      color={project.color}
                      aspectRatio="4/3"
                    />
                  )}
                  <div style={{ padding: "1.5rem" }}>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.2rem",
                      color: "#F0EDE8",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      color: "#6A6860",
                      fontSize: "0.85rem",
                      lineHeight: "1.65",
                      marginBottom: "1rem",
                    }}>
                      {project.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                      {project.tags.map(tag => (
                        <span key={tag} className="tech-chip">{tag}</span>
                      ))}
                    </div>
                    <a href={project.site} target="_blank" rel="noreferrer" className="project-link solid">
                      ↗ View Live Site
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ─── DIVIDER ─── */}
        {filter === "all" && (
          <div style={{ height: "1px", background: "rgba(200,166,88,0.08)", margin: "0 0 0.5rem" }} />
        )}

        {/* ─── CATEGORY C: CERTIFICATIONS ─── */}
        {(filter === "all" || filter === "certs") && (
          <section style={{ padding: "5rem 0" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "0.5rem" }}>
              <span className="section-label" style={{ margin: 0 }}>Category C</span>
              <div style={{ flex: 1, height: "1px", background: "rgba(200,166,88,0.12)" }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "#F0EDE8",
              fontWeight: "700",
              marginBottom: "0.5rem",
            }}>
              The Certification <em style={{ color: "#C8A658" }}>Vault</em>
            </h2>
            <p style={{ color: "#6A6860", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
              Industry-recognized credentials from world-leading technology organizations.
            </p>
            <div className="section-divider" />

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {certifications.map(cert => (
                <div key={cert.id} className="cert-card">
                  {/* Logo / Icon area */}
                  <div style={{
                    width: "72px", height: "72px",
                    flexShrink: 0,
                    border: `2px solid ${cert.color}40`,
                    background: `${cert.color}10`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.75rem",
                    overflow: "hidden",
                    padding: cert.logo ? "8px" : 0,
                    alignSelf: "flex-start",
                  }}>
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={`${cert.issuer} logo`}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    ) : cert.icon}
                  </div>

                  {/* Cert details */}
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <div style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                    }}>
                      <div>
                        <div style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "10px",
                          color: cert.color,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          marginBottom: "0.25rem",
                        }}>
                          {cert.issuer}
                        </div>
                        <h3 style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.2rem",
                          color: "#F0EDE8",
                          fontWeight: "600",
                          lineHeight: "1.3",
                        }}>
                          {cert.title}
                        </h3>
                      </div>
                      {cert.score && (
                        <span className="score-badge">
                          🏆 {cert.score}
                        </span>
                      )}
                    </div>

                    <p style={{
                      color: "#6A6860",
                      fontSize: "0.85rem",
                      lineHeight: "1.65",
                      marginBottom: "1rem",
                    }}>
                      {cert.description}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                      {cert.skills.map(s => (
                        <span key={s} className="tech-chip">{s}</span>
                      ))}
                    </div>

                    {/* Placeholder for certificate image */}
                    <div style={{
                      padding: "0.75rem 1rem",
                      border: "1px dashed rgba(200,166,88,0.2)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      background: "rgba(200,166,88,0.02)",
                      justifyContent: "space-between",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <span style={{ fontSize: "1.25rem" }}>📄</span>
                        <div>
                          <div style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "9px",
                            color: "#4A4840",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                          }}>
                            Certificate File
                          </div>
                          <div style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "8px",
                            color: "#3A3830",
                            marginTop: "2px",
                          }}>
                            {cert.placeholder}
                          </div>
                        </div>
                      </div>
                      {cert.certificateFile && (
                        <a href={cert.certificateFile} target="_blank" rel="noreferrer" className="project-link">
                          View PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* ─── BOTTOM CTA ─── */}
      <section style={{
        padding: "5rem 2rem",
        borderTop: "1px solid rgba(200,166,88,0.08)",
        textAlign: "center",
        background: "rgba(255,255,255,0.01)",
      }}>
        <span className="section-label" style={{ display: "block", textAlign: "center", marginBottom: "1rem" }}>
          Interested in working together?
        </span>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.75rem, 4vw, 3rem)",
          color: "#F0EDE8",
          fontWeight: "700",
          marginBottom: "1.5rem",
        }}>
          Every great project starts<br />
          with a <em style={{ color: "#C8A658" }}>conversation.</em>
        </h2>
        <a
          href="mailto:ashishsimonmathew@gmail.com"
          style={{
            display: "inline-block",
            padding: "14px 36px",
            background: "#C8A658",
            color: "#0A0A0A",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={e => { e.target.style.background = "#E0BC72"; e.target.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.target.style.background = "#C8A658"; e.target.style.transform = "translateY(0)"; }}
        >
          Start a Conversation →
        </a>
      </section>
    </div>
  );
}
