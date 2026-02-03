import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const location = useLocation();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="main-nav">
            <Link to="/" className="nav-brand">AI Tools Suite</Link>
            <div className="nav-links">
                <Link
                    to="/"
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                    Humanizer
                </Link>
                <Link
                    to="/content-detector"
                    className={`nav-link ${location.pathname === '/content-detector' ? 'active' : ''}`}
                >
                    Detector
                </Link>
                <Link
                    to="/docs"
                    className={`nav-link ${location.pathname === '/docs' ? 'active' : ''}`}
                >
                    Documentation
                </Link>
            </div>
            <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode"
            >
                {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <style>{`
        .main-nav {
          background: var(--card-bg);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--card-border);
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .nav-brand {
          font-weight: 700;
          font-size: 1.25rem;
          background: linear-gradient(to right, var(--primary), #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .nav-link:hover,
        .nav-link.active {
          background-color: rgba(99, 102, 241, 0.1);
          color: var(--primary);
        }

        .theme-toggle {
          background: transparent;
          border: 1px solid var(--input-border);
          color: var(--text-main);
          padding: 0.5rem;
          border-radius: 50%;
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .theme-toggle:hover {
          background-color: var(--input-border);
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
