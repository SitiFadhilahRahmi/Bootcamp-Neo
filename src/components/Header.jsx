import './Header.css';

function Header() {

  return (
    <header className="header">
      <nav className="nav">
        <a href="#home" className="navLink">Home</a>
        <a href="#profile" className="navLink">Profile</a>
        <a href="#services" className="navLink">Blog</a>
        <a href="#contact" className="navLink">Contact</a>
      </nav>
    </header>
  );
}

export default Header;

