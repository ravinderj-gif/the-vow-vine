import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Home from './pages/Home';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function AppContent() {
  useSmoothScroll();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          {loading && <Loader onComplete={() => setLoading(false)} />}
        </AnimatePresence>
        {!loading && <AppContent />}
      </BrowserRouter>
    </HelmetProvider>
  );
}
