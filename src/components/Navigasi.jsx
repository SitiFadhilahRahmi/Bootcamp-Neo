import './Navigasi.css';
import { Link } from 'react-router-dom'

export default function Navigasi() {
  return (
    <header className='header'>
      <nav className="nav">
        <Link to="/" className='NavLink'>Beranda</Link>
        <Link to="/tentangsaya" className='NavLink'>Tentang Saya</Link>
        <Link to="/kontak" className='NavLink'>Kontak</Link>
      </nav>
    </header>
  )
}
