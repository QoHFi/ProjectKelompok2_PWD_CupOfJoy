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
```javascript
// JavaScript khusus halaman Katalog Cup of Joy

document.addEventListener("DOMContentLoaded", function () {

  // Mengambil semua kartu produk
  const kartuProduk = document.querySelectorAll(".produk-card");

  // Efek saat kursor diarahkan ke kartu produk
  kartuProduk.forEach(function (kartu) {
    kartu.addEventListener("mouseenter", function () {
      kartu.style.transform = "translateY(-6px)";
    });

    kartu.addEventListener("mouseleave", function () {
      kartu.style.transform = "translateY(0)";
    });
  });

  // Tombol untuk menuju daftar produk
  const tombolMenu = document.querySelector(".btn-promo");

  if (tombolMenu) {
    tombolMenu.addEventListener("click", function () {
      console.log("Pengunjung melihat katalog minuman.");
    });
  }

  console.log("Katalog Cup of Joy berhasil dimuat.");

});
```
// ===== Bagian Detail =====

// ===== Bagian Profil =====
// ===== BAGIAN MAHASISWA 3 (Profil dan Kegiatan) =====
// 1. Aksi Tombol Sapa
const tombolSapa = document.getElementById("tombol-sapa");
const statusProfil = document.getElementById("status-profil");

if (tombolSapa) {
  tombolSapa.addEventListener("click", function () {
    statusProfil.textContent = "Halo! Selamat datang di Cup of Joy (Since 2026). Nikmati kopi terbaik kami!";
  });
}

// 2. Aksi Tombol Cek Status Cafe (Di samping tombol sapa)
const tombolStatus = document.getElementById("tombol-status");

if (tombolStatus) {
  tombolStatus.addEventListener("click", function () {
    const jamSekarang = new Date().getHours();

    if (jamSekarang >= 8 && jamSekarang < 22) {
      statusProfil.innerHTML = "<span style='color: #2e7d32; font-weight: bold;'>● Status: Kedai Sedang Buka (Silakan Mampir!)</span>";
    } else {
      statusProfil.innerHTML = "<span style='color: #c62828; font-weight: bold;'>● Status: Kedai Sedang Tutup (Buka Besok Jam 08.00)</span>";
    }
  });
}