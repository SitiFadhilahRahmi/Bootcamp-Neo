import image from '../image/image.png';
import image2 from '../image/image2.png';
import image3 from '../image/image3.png';



const artikel = [
  { id: 1, judul: 'Apa itu React?', image: image},
  { id: 2, judul: 'Belajar Routing dengan React Router',image: image2 },
  { id: 3, judul: 'Cara Menggunakan useState dan useEffect', image: image3},
];

function Beranda() {
  return (
    <div className="container">
    <div className="artikel">
      <h1 className="beranda-title">Daftar Artikel</h1>
      <ul className="artikel-list">
        {artikel.map(({ id, judul, image }) => (
          <li key={id} className="artikel-card">
            <a href={`/artikel/${id}`} className="artikel-link" aria-label={`Baca artikel: ${judul}`}>
              <img src={image} alt={judul} className="artikel-image" loading="lazy" />
              <h2 className="artikel-judul">{judul}</h2>
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>

  );
}

export default Beranda;
