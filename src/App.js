import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import Showcase from "./Showcase";
import meImage from "./assets/me.jpeg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(10, 10, 10, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200,166,88,0.15)" : "none",
        padding: "0 2rem",
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "72px",
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "36px", height: "36px",
              border: "2px solid #C8A658",
              overflow: "hidden",
            }}>
              <img
                src={meImage}
                alt="Ashish Simon Mathew"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#F0EDE8",
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}>
              Ashish Simon Mathew
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}
          className="desktop-nav">
          {[
            { label: "Home", path: "/" },
            { label: "Projects & Certs", path: "/showcase" },
          ].map(({ label, path }) => (
            <Link key={path} to={path} style={{ textDecoration: "none" }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: "500",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: isActive(path) ? "#C8A658" : "#A8A49E",
                transition: "color 0.3s ease",
                paddingBottom: "4px",
                borderBottom: isActive(path) ? "1px solid #C8A658" : "1px solid transparent",
              }}>
                {label}
              </span>
            </Link>
          ))}
          <a
            href="mailto:ashishsimonmathew@gmail.com"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: "600",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#0A0A0A",
              background: "#C8A658",
              padding: "10px 20px",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => e.target.style.background = "#E0BC72"}
            onMouseLeave={e => e.target.style.background = "#C8A658"}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: "24px", height: "2px",
              background: "#C8A658",
              transition: "all 0.3s ease",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                : i === 1 ? "opacity(0)" : "rotate(-45deg) translate(5px, -5px)"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(10,10,10,0.97)",
          borderTop: "1px solid rgba(200,166,88,0.2)",
          padding: "1.5rem 2rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}>
          {[
            { label: "Home", path: "/" },
            { label: "Projects & Certs", path: "/showcase" },
          ].map(({ label, path }) => (
            <Link key={path} to={path} style={{ textDecoration: "none" }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: isActive(path) ? "#C8A658" : "#F0EDE8",
              }}>
                {label}
              </span>
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap');

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #0A0A0A;
          color: #F0EDE8;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0A0A0A; }
        ::-webkit-scrollbar-thumb { background: #C8A658; }
      `}</style>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </Router>
  );
}
