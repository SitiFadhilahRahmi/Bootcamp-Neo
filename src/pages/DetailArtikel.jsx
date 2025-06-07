import { useParams } from 'react-router-dom'

const dataArtikel = {
  '1': {
    judul: 'Apa itu React?',
    isi: 'React adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna (user interfaces). Dikembangkan oleh Facebook, React dirancang untuk membuat proses pembuatan UI menjadi lebih efisien dan terstruktur melalui penggunaan komponen-komponen yang dapat digunakan kembali. Salah satu fitur utama React adalah Virtual DOM, yang memungkinkan pembaruan UI dilakukan secara efisien tanpa harus me-render ulang seluruh halaman. Hal ini membuat aplikasi menjadi lebih cepat dan responsif. React juga menggunakan sintaks JSX, yaitu kombinasi antara JavaScript dan HTML, yang membuat pengembangan UI menjadi lebih intuitif. Selain itu, React mendukung pengelolaan state dan props untuk memfasilitasi komunikasi antar komponen. React sangat populer dalam pengembangan aplikasi single-page application (SPA) dan telah menjadi bagian penting dalam ekosistem pengembangan front-end modern.',
  },
  '2': {
    judul: 'Belajar Routing dengan React Router',
    isi: 'React Router adalah pustaka resmi untuk menangani routing dalam aplikasi React. Routing memungkinkan pengguna untuk berpindah antar halaman tanpa me-refresh seluruh halaman, sehingga menciptakan pengalaman pengguna yang lebih mulus. Dengan React Router, kita bisa menentukan berbagai jalur (route) dalam aplikasi, misalnya untuk halaman beranda, detail artikel, atau kontak. Komponen utama dalam React Router antara lain <Routes>, <Route>, <Link>, dan hook seperti useNavigate serta useParams. React Router juga mendukung routing dinamis, nested routes, protected routes, dan banyak fitur lainnya yang memudahkan pengelolaan navigasi dalam aplikasi berskala kecil hingga besar.',
  },
  '3': {
    judul: 'Cara Menggunakan useState dan useEffect',
    isi: 'useState dan useEffect adalah dua hook paling dasar dan penting dalam React. useState digunakan untuk mendeklarasikan state dalam komponen fungsional. Dengan useState, kita bisa menyimpan nilai seperti angka, string, objek, atau array, lalu memperbaruinya seiring interaksi pengguna. useEffect digunakan untuk menangani efek samping (side effects), seperti pengambilan data dari API, manipulasi DOM, atau pengaturan timer. useEffect dijalankan setelah komponen dirender, dan dapat disesuaikan agar hanya berjalan pada kondisi tertentu, misalnya saat komponen pertama kali muncul atau ketika suatu nilai berubah. Kombinasi kedua hook ini memungkinkan kita membuat komponen React yang dinamis, responsif, dan fungsional tanpa menggunakan class component.',
  },
}

function DetailArtikel() {
  const { id } = useParams()
  const artikel = dataArtikel[id]

  if (!artikel) {
    return <h2>Artikel tidak ditemukan</h2>
  }

  return (
    <div className="container">
      <div className='artikel'>
      <h2 className='artikel-judul'>{artikel.judul}</h2>
      <p className='artikel-isi'>{artikel.isi}</p>
    </div>
    </div>
  )
}
export default DetailArtikel