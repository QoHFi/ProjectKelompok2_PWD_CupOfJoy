// ===== BAGIAN UMUM: mode gelap (dipakai semua halaman) =====
const tombolTema = document.getElementById("tombol-tema");

if (tombolTema) {
  tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("gelap");

    if (document.body.classList.contains("gelap")) {
      tombolTema.textContent = "Mode Terang";
    } else {
      tombolTema.textContent = "Mode Gelap";
    }
  });
}

// ===== Bagian Beranda =====
```javascript
// JavaScript khusus halaman Beranda Cup of Joy

document.addEventListener("DOMContentLoaded", function () {

  // Efek pada kartu promo saat diarahkan kursor
  const kartuPromo = document.querySelectorAll(".promo-card");

  kartuPromo.forEach(function (kartu) {
    kartu.addEventListener("mouseenter", function () {
      kartu.style.transform = "translateY(-6px)";
    });

    kartu.addEventListener("mouseleave", function () {
      kartu.style.transform = "translateY(0)";
    });
  });

  // Pesan saat pengunjung membuka halaman beranda
  console.log("Selamat datang di Cup of Joy!");

});
```
// ===== Bagian Katalog =====
.promo-text {
  flex: 1;
}

.label-promo {
  display: inline-block;
  padding: 7px 14px;
  margin-bottom: 12px;
  background: #70452D;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 2px;
}

.promo-katalog h2 {
  font-size: 34px;
  margin: 10px 0;
  color: #4B2E20;
}

.promo-katalog img {
  width: 35%;
  max-width: 300px;
  height: 230px;
  object-fit: cover;
  border-radius: 15px;
}

.btn-promo {
  display: inline-block;
  margin-top: 12px;
  padding: 12px 22px;
  background: #70452D;
  color: white;
  text-decoration: none;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .promo-katalog {
    flex-direction: column;
    align-items: stretch;
  }

  .promo-katalog img {
    width: 100%;
    max-width: none;
    height: 200px;
  }
}
// ===== Bagian Detail =====

// ===== Bagian Profil =====
