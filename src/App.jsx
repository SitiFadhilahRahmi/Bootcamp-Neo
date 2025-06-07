import { Routes, Route, Link } from 'react-router-dom'
import Beranda from './pages/Beranda'
import TentangSaya from './pages/TentangSaya'
import DetailArtikel from './pages/DetailArtikel'
import Kontak from './pages/Kontak'
import NotFound from './pages/NotFound'
import Navigasi from './components/Navigasi'

function App() {
  return (
    <div>
      <Navigasi />

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/artikel/:id" element={<DetailArtikel />} />
        <Route path="/tentangsaya" element={<TentangSaya />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
