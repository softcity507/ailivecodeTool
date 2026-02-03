import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContentDetector from './pages/ContentDetector';
import Documentation from './pages/Documentation';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 160px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content-detector" element={<ContentDetector />} />
          <Route path="/docs" element={<Documentation />} />
        </Routes>
      </main>
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--card-border)',
        color: 'var(--text-muted)',
        background: 'var(--card-bg)',
        backdropFilter: 'blur(12px)'
      }}>
        <p>&copy; 2026 AI Tools Suite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
