import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import SongsSection from './components/SongsSection';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      {/* Dynamic Route */}
      <Route path="/album/:albumId" element={<SongsSection />} />
    </Routes>
  );
}

export default App;
