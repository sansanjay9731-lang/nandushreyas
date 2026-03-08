import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NandushreyasPage from './pages/nandushreyas/Index';
import SamavayaPage from './pages/samavaya/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/nandushreyas" replace />} />
        <Route path="/nandushreyas" element={<NandushreyasPage />} />
        <Route path="/samavaya" element={<SamavayaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
