import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import iedcLogo from "./logo/iedc.jpg";
import mulearnLogo from "./logo/mulearn.png";
import isteLogo from "./logo/iste.jpg";
import sylloutLogo from "./logo/syllout.jpg";
import resumeFile from "./assets/Ashish Simon MAthew.pdf";

const styles = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  @keyframes pulseGold {
    0%, 100% { box-shadow: 0 0 0 0 rgba(200,166,88,0.3); }
    50% { box-shadow: 0 0 0 12px rgba(200,166,88,0); }
  }
  @keyframes lineGrow {
    from { width: 0; }
    to { width: 100%; }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes currentFlow {
    to { transform: rotate(360deg); }
  }

  .fade-up-1 { animation: fadeUp 0.8s ease 0.1s both; }
  .fade-up-2 { animation: fadeUp 0.8s ease 0.3s both; }
  .fade-up-3 { animation: fadeUp 0.8s ease 0.5s both; }
  .fade-up-4 { animation: fadeUp 0.8s ease 0.7s both; }
  .fade-up-5 { animation: fadeUp 0.8s ease 0.9s both; }
  .fade-up-6 { animation: fadeUp 0.8s ease 1.1s both; }

  .shimmer-text {
    background: linear-gradient(90deg, #C8A658 0%, #F0D98A 30%, #C8A658 60%, #F0D98A 80%, #C8A658 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }

  .float-card { animation: float 5s ease-in-out infinite; }

  .role-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border: 1px solid rgba(200,166,88,0.3);
    background: rgba(200,166,88,0.06);
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #C8A658;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  .role-chip:hover {
    border-color: rgba(200,166,88,0.6);
    background: rgba(200,166,88,0.12);
  }

  .leadership-card {
    padding: 2rem;
    border: 1px solid rgba(200,166,88,0.12);
    background: rgba(255,255,255,0.02);
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    cursor: default;
  }
  .leadership-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #C8A658, transparent);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  .leadership-card:hover::before { transform: scaleX(1); }
  .leadership-card:hover {
    background: rgba(200,166,88,0.04);
    border-color: rgba(200,166,88,0.28);
    transform: translateY(-4px);
  }

  .internship-block {
    padding: 1.5rem 2rem;
    border-left: 2px solid rgba(200,166,88,0.3);
    background: rgba(255,255,255,0.015);
    transition: all 0.3s ease;
    position: relative;
  }
  .internship-block::before {
    content: '';
    position: absolute;
    left: -5px; top: 50%;
    transform: translateY(-50%);
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #C8A658;
    animation: pulseGold 2s infinite;
  }
  .internship-block:hover {
    border-left-color: #C8A658;
    background: rgba(200,166,88,0.04);
  }

  .stat-box {
    padding: 1.5rem;
    border: 1px solid rgba(200,166,88,0.1);
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .stat-box:hover {
    border-color: rgba(200,166,88,0.35);
    background: rgba(200,166,88,0.03);
  }

  .section-label {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #C8A658;
    margin-bottom: 1rem;
  }

  .section-divider {
    width: 48px;
    height: 2px;
    background: #C8A658;
    margin: 1rem 0 2rem;
  }

  .cta-primary {
    display: inline-block;
    padding: 14px 32px;
    background: #C8A658;
    color: #0A0A0A;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .cta-primary::after {
    content: '';
    position: absolute;
    top: 0; left: -100%; width: 100%; height: 100%;
    background: rgba(255,255,255,0.2);
    transition: left 0.4s ease;
  }
  .cta-primary:hover::after { left: 100%; }
  .cta-primary:hover { background: #E0BC72; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(200,166,88,0.3); }

  .cta-secondary {
    display: inline-block;
    padding: 13px 32px;
    border: 1px solid rgba(200,166,88,0.5);
    color: #C8A658;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .cta-secondary:hover {
    background: rgba(200,166,88,0.08);
    border-color: #C8A658;
    transform: translateY(-2px);
  }

  .cta-subtle {
    display: inline-block;
    padding: 10px 24px;
    border: 1px solid rgba(200,166,88,0.22);
    color: #8A8580;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    background: rgba(255,255,255,0.01);
    transition: all 0.3s ease;
  }
  .cta-subtle:hover {
    color: #C8A658;
    border-color: rgba(200,166,88,0.4);
    background: rgba(200,166,88,0.05);
  }

  .skill-tag {
    padding: 5px 12px;
    border: 1px solid rgba(200,166,88,0.2);
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 1px;
    color: #8A8580;
    background: rgba(255,255,255,0.02);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .skill-tag::before {
    content: '';
    position: absolute;
    inset: -1px;
    padding: 1px;
    opacity: 0;
    pointer-events: none;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      transparent 300deg,
      rgba(240,217,138,0.95) 332deg,
      rgba(200,166,88,0.95) 346deg,
      transparent 360deg
    );
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: currentFlow 1.25s linear infinite;
    filter: drop-shadow(0 0 7px rgba(200,166,88,0.4));
    transition: opacity 0.2s ease;
  }
  .skill-tag:hover {
    color: #C8A658;
    border-color: rgba(200,166,88,0.5);
    background: rgba(200,166,88,0.05);
  }
  .skill-tag:hover::before { opacity: 1; }

  .typed-hero-text {
    font-family: 'DM Mono', monospace;
    color: #B3ADA5;
    letter-spacing: 0.1px;
  }
  .typed-cursor {
    color: #C8A658;
    font-weight: 700;
  }

  .achievement-card {
    padding: 2rem;
    background: linear-gradient(135deg, rgba(200,166,88,0.08) 0%, rgba(200,166,88,0.02) 100%);
    border: 1px solid rgba(200,166,88,0.2);
    position: relative;
    overflow: hidden;
  }
  .achievement-card::after {
    content: '"';
    position: absolute;
    right: 1rem; top: -1rem;
    font-size: 8rem;
    font-family: 'Playfair Display', serif;
    color: rgba(200,166,88,0.08);
    line-height: 1;
  }

  .spotlight-wireframe {
    width: 150px;
    height: 150px;
    border: 1px solid rgba(200,166,88,0.32);
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.25s ease;
    animation: spin 14s linear infinite;
    background:
      radial-gradient(circle at 30% 30%, rgba(200,166,88,0.14), transparent 58%),
      linear-gradient(135deg, rgba(200,166,88,0.06), rgba(255,255,255,0.01));
  }
  .spotlight-wireframe::before,
  .spotlight-wireframe::after {
    content: '';
    position: absolute;
    inset: 14px;
    border: 1px solid rgba(200,166,88,0.22);
  }
  .spotlight-wireframe::after {
    inset: 32px;
    border-style: dashed;
    border-color: rgba(200,166,88,0.18);
  }
  .wire-node {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #C8A658;
    box-shadow: 0 0 14px rgba(200,166,88,0.45);
  }

  @media (max-width: 768px) {
    .hero-headline { font-size: 3rem !important; }
    .hero-grid { grid-template-columns: 1fr !important; }
    .stats-grid { grid-template-columns: 1fr 1fr !important; }
    .leadership-grid { grid-template-columns: 1fr !important; }
    .internship-grid { grid-template-columns: 1fr !important; }
    .content-section { padding: 7rem 1.25rem !important; }
    .section-divider { margin: 1.2rem 0 2.8rem !important; }
    .role-chip-group, .cta-row, .subtle-cta-row, .tag-cluster { gap: 0.75rem !important; }
    .role-chip {
      padding: 8px 16px;
      font-size: 10px;
      letter-spacing: 1.2px;
    }
    .skill-tag {
      padding: 7px 13px;
      font-size: 10px;
      letter-spacing: 1.1px;
    }
    .internship-block {
      padding: 1.75rem 1.25rem;
      margin-bottom: 2rem !important;
    }
    .achievement-card { padding: 2.25rem 1.25rem !important; }
  }
  @media (max-width: 480px) {
    .hero-headline { font-size: 2.4rem !important; }
    .stats-grid { grid-template-columns: 1fr !important; }
    .content-section { padding: 6.25rem 1rem !important; }
  }
`;

const categorizedSkills = {
  Software: ["React.js", "Node.js", "Python", "Django", "C++", "HTML5", "CSS", "MongoDB", "Express", "Three.js", "Tailwind CSS", "PostgreSQL"],
  Hardware: ["IoT", "Circuit Design"],
  Tools: ["UX Design", "Git"],
};

const leadershipRoles = [
  {
    logo: iedcLogo,
    title: "Campus CEO",
    org: "IEDC Kerala",
    impact: "500+ students impacted",
    description: "Led innovation and entrepreneurship initiatives across campus, building a thriving startup culture and mentoring student ventures.",
    badge: "Entrepreneurship",
  },
  {
    logo: mulearnLogo,
    title: "Campus Lead",
    org: "MuLearn",
    impact: "IoT & Web Dev Mentor",
    description: "Guided students through hands-on learning in IoT systems and modern web development, fostering a peer-learning community.",
    badge: "Education",
  },
  {
    logo: isteLogo,
    title: "Operations Lead",
    org: "ISTE",
    impact: "Cross-functional coordination",
    description: "Orchestrated technical events, workshops, and industry collaborations, ensuring seamless execution of large-scale programs.",
    badge: "Operations",
  },
];

const internships = [
  {
    role: "Full-Stack Developer Intern",
    company: "Cognifyz Technologies",
    type: "Remote · Current",
    description: "Building scalable, production-ready features using modern full-stack architecture. Focused on clean code, performance optimization, and delivering real-world impact.",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    highlight: true,
  },
  {
    role: "Web Development Intern",
    company: "Cognifyz Technologies",
    type: "Remote · Previous",
    description: "Developed responsive web interfaces and contributed to frontend architecture decisions. Sharpened skills in component-driven development.",
    tags: ["HTML/CSS", "JavaScript", "UI Design"],
    highlight: false,
  },
  {
    role: "Electronics Intern",
    company: "Jayabharatham Ayurveda",
    type: "On-site · Previous",
    description: "Hands-on circuit debugging and testing of embedded electronic systems in a real-world industrial environment, bridging hardware and software thinking.",
    tags: ["Circuit Debugging", "Electronics", "Testing"],
    highlight: false,
  },
];

export default function Home() {
  const wireframeRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const typedPhrase = "production-grade web experiences and hardware-aware software - where circuit logic meets clean code.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      index += 1;
      setTypedText(typedPhrase.slice(0, index));
      if (index >= typedPhrase.length) {
        clearInterval(typingInterval);
      }
    }, 28);

    return () => clearInterval(typingInterval);
  }, [typedPhrase]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 520);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleSpotlightMove = (event) => {
    if (!wireframeRef.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * 18;
    const rotateX = -y * 14;

    wireframeRef.current.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleSpotlightLeave = () => {
    if (!wireframeRef.current) return;
    wireframeRef.current.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{styles}</style>

      {/* ─── HERO ─── */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 2rem",
      }}>
        {/* Background grid */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(200,166,88,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,166,88,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }} />

        {/* Radial glow */}
        <div style={{
          position: "absolute",
          top: "30%", left: "55%",
          width: "600px", height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,166,88,0.08) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }} />

        {/* Decorative corner lines */}
        <div style={{
          position: "absolute", top: "20%", right: "5%",
          width: "200px", height: "200px",
          border: "1px solid rgba(200,166,88,0.12)",
          borderRadius: "0",
          animation: "spin 30s linear infinite",
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute", top: "22%", right: "6%",
          width: "160px", height: "160px",
          border: "1px solid rgba(200,166,88,0.07)",
          animation: "spin 20s linear infinite reverse",
          zIndex: 0,
        }} />

        <div style={{
          maxWidth: "1200px", margin: "0 auto", width: "100%",
          position: "relative", zIndex: 1,
          paddingTop: "120px", paddingBottom: "80px",
        }}>
          <div className="fade-up-1">
            <span className="section-label">Portfolio · ECE Engineer & Developer</span>
          </div>

          <h1
            className="hero-headline fade-up-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              fontWeight: "900",
              lineHeight: "1.05",
              color: "#F0EDE8",
              marginBottom: "1.5rem",
              maxWidth: "850px",
            }}
          >
            Full-Stack<br />
            Developer &amp;<br />
            <em className="shimmer-text">ECE Engineer.</em>
          </h1>

          <p className="fade-up-3" style={{
            fontSize: "1.15rem",
            color: "#8A8580",
            maxWidth: "520px",
            lineHeight: "1.75",
            marginBottom: "2rem",
            fontWeight: "300",
          }}>
            Building <span className="typed-hero-text">{typedText}<span className="typed-cursor">{cursorVisible ? "_" : " "}</span></span>
          </p>

          {/* Role chips */}
          <div className="fade-up-4 role-chip-group" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
            <span className="role-chip">
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
              Full-Stack Intern @ Cognifyz
            </span>
            <span className="role-chip">🎓 ECE · B.Tech</span>
            <span className="role-chip">📍 Kerala, India</span>
          </div>

          {/* CTAs */}
          <div className="fade-up-5" style={{ marginBottom: "4rem" }}>
            <div className="cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link to="/showcase" className="cta-primary">View Projects</Link>
              <a href="https://wa.me/+917907164697" target="_blank" rel="noreferrer" className="cta-secondary">Start a Conversation</a>
            </div>
            <div className="subtle-cta-row" style={{ marginTop: "0.9rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <a
                href="https://www.linkedin.com/in/ashish-simon-mathew-83a335282"
                target="_blank"
                rel="noreferrer"
                className="cta-subtle"
              >
                LinkedIn
              </a>
              <a href={resumeFile} target="_blank" rel="noreferrer" className="cta-subtle">Resume</a>
            </div>
          </div>

          {/* Stats */}
          <div className="fade-up-6 stats-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(200,166,88,0.1)",
            maxWidth: "640px",
          }}>
            {[
              { num: "500+", label: "Students Mentored" },
              { num: "10+", label: "Projects Built" },
              { num: "3", label: "Leadership Roles" },
              { num: "98%", label: "MS Cert Score" },
            ].map(({ num, label }) => (
              <div key={label} className="stat-box" style={{ background: "#0A0A0A" }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#C8A658",
                }}>
                  {num}
                </div>
                <div style={{ fontSize: "10px", color: "#5A5650", letterSpacing: "1px", textTransform: "uppercase", marginTop: "4px" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE / INTERNSHIPS ─── */}
      <section className="content-section" style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label">Professional Experience</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: "700",
          color: "#F0EDE8",
          marginBottom: "0.5rem",
        }}>
          Internship <em style={{ color: "#C8A658" }}>Timeline</em>
        </h2>
        <div className="section-divider" />

        <div className="internship-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1px",
        }}>
          {internships.map((item, i) => (
            <div key={i} className="internship-block" style={{
              marginBottom: "1.5rem",
              borderLeftColor: item.highlight ? "#C8A658" : "rgba(200,166,88,0.3)",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.25rem",
                    color: "#F0EDE8",
                    fontWeight: "600",
                  }}>
                    {item.role}
                  </h3>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    color: "#C8A658",
                    letterSpacing: "1px",
                    marginTop: "4px",
                  }}>
                    {item.company}
                  </div>
                </div>
                <span style={{
                  padding: "4px 10px",
                  border: "1px solid rgba(200,166,88,0.2)",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "10px",
                  color: "#8A8580",
                  letterSpacing: "1px",
                  whiteSpace: "nowrap",
                }}>
                  {item.type}
                </span>
              </div>
              <p style={{ color: "#6A6860", fontSize: "0.9rem", lineHeight: "1.7", marginBottom: "1rem" }}>
                {item.description}
              </p>
              <div className="tag-cluster" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {item.tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── LEADERSHIP ─── */}
      <section className="content-section" style={{
        padding: "6rem 2rem",
        background: "rgba(255,255,255,0.012)",
        borderTop: "1px solid rgba(200,166,88,0.08)",
        borderBottom: "1px solid rgba(200,166,88,0.08)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label">Impact & Leadership</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "700",
            color: "#F0EDE8",
            marginBottom: "0.5rem",
          }}>
            Roles that <em style={{ color: "#C8A658" }}>Define Me</em>
          </h2>
          <div className="section-divider" />

          <div className="leadership-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}>
            {leadershipRoles.map((role, i) => (
              <div key={i} className="leadership-card">
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    marginBottom: "1rem",
                    border: "1px solid rgba(200,166,88,0.2)",
                    background: "rgba(255,255,255,0.02)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "6px",
                  }}
                >
                  <img
                    src={role.logo}
                    alt={`${role.org} logo`}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: "#C8A658",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}>
                  {role.badge}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem",
                  color: "#F0EDE8",
                  fontWeight: "600",
                  marginBottom: "0.25rem",
                }}>
                  {role.title}
                </h3>
                <div style={{
                  fontSize: "0.85rem",
                  color: "#C8A658",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                }}>
                  {role.org}
                </div>
                <div style={{
                  display: "inline-block",
                  padding: "3px 8px",
                  background: "rgba(200,166,88,0.1)",
                  border: "1px solid rgba(200,166,88,0.2)",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  color: "#C8A658",
                  letterSpacing: "1px",
                  marginBottom: "1rem",
                }}>
                  {role.impact}
                </div>
                <p style={{ color: "#6A6860", fontSize: "0.875rem", lineHeight: "1.7" }}>
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACHIEVEMENT SPOTLIGHT ─── */}
      <section className="content-section" style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label">Key Achievement</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: "700",
          color: "#F0EDE8",
          marginBottom: "0.5rem",
        }}>
          Innovation <em style={{ color: "#C8A658" }}>Spotlight</em>
        </h2>
        <div className="section-divider" />

        <div className="achievement-card" onMouseMove={handleSpotlightMove} onMouseLeave={handleSpotlightLeave}>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "2rem",
            flexWrap: "wrap",
          }}>
            <div style={{
              width: "64px", height: "64px", flexShrink: 0,
              border: "2px solid #C8A658",
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "#0A0A0A",
              overflow: "hidden",
            }}>
              <img
                src={sylloutLogo}
                alt="Syllout Education logo"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                color: "#C8A658",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}>
                KTU Innovation Showcase · Featured Prototype
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.75rem",
                color: "#F0EDE8",
                fontWeight: "700",
                marginBottom: "1rem",
              }}>
                Syllout Education
              </h3>
              <p style={{ color: "#8A8580", lineHeight: "1.75", fontSize: "0.95rem", maxWidth: "600px" }}>
                Designed and presented <strong style={{ color: "#F0EDE8" }}>Syllout</strong> — an education technology prototype — at the KTU Innovation Showcase. The platform reimagines how students interact with curriculum content, blending modern UX principles with structured learning pathways. Selected among top projects for its practical impact and innovative approach.
              </p>
            </div>
            <div style={{ marginLeft: "auto", minWidth: "150px", display: "flex", justifyContent: "center" }}>
              <div ref={wireframeRef} className="spotlight-wireframe" data-wireframe aria-hidden="true">
                <span className="wire-node" style={{ top: "-3px", left: "-3px" }} />
                <span className="wire-node" style={{ top: "-3px", right: "-3px" }} />
                <span className="wire-node" style={{ bottom: "-3px", left: "-3px" }} />
                <span className="wire-node" style={{ bottom: "-3px", right: "-3px" }} />
                <span className="wire-node" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ─── */}
      <section className="content-section" style={{
        padding: "6rem 2rem",
        background: "rgba(255,255,255,0.012)",
        borderTop: "1px solid rgba(200,166,88,0.08)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-label">Skills & Stack</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "700",
            color: "#F0EDE8",
            marginBottom: "0.5rem",
          }}>
            Technologies I <em style={{ color: "#C8A658" }}>Master</em>
          </h2>
          <div className="section-divider" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {Object.entries(categorizedSkills).map(([category, skills]) => (
              <div key={category}>
                <h3 style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: "#C8A658",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "0.8rem",
                }}>
                  {category}
                </h3>
                <div className="tag-cluster" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {skills.map(skill => (
                    <span key={skill} className="skill-tag" style={{ cursor: "help" }} title={skill} aria-label={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FOOTER SECTION ─── */}
      <section className="content-section" style={{
        padding: "6rem 2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `radial-gradient(circle at center, rgba(200,166,88,0.06) 0%, transparent 60%)`,
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-label" style={{ textAlign: "center", display: "block", marginBottom: "1.5rem" }}>
            Ready to collaborate?
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: "900",
            color: "#F0EDE8",
            marginBottom: "1.5rem",
          }}>
            Let's build something<br />
            <em className="shimmer-text">extraordinary.</em>
          </h2>
          <p style={{ color: "#6A6860", fontSize: "1rem", marginBottom: "2.5rem" }}>
            Open to internships, freelance projects, and full-time roles.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a href="https://wa.me/+917907164697" target="_blank" rel="noreferrer" className="cta-primary">Send a Message</a>
            <Link to="/showcase" className="cta-secondary">Explore Work</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
