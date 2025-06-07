import './TentangSaya.css';

function TentangSaya() {
  return (
  <div className="tentangsaya">
    <div className="profile-card">
      <img
        src="src\image\i am.jpg"
        alt="Profile"
        className="profile-image"
      />
      <h2 className="profile-name">Siti Fadhilah Rahmi</h2>
      <p className="profile-bio">
        Mahasiswi Informatika yang aktif dan suka belajar teknologi baru. Aktif di kegiatan kampus dan punya minat di bidang web development & Data Science.
      </p>
      <div className="profile-socials">
        <a href="https://instagram.com/sfadh_r" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/siti-fadhilah-rahmi-071353287" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
    </div>

  );
}

export default TentangSaya;