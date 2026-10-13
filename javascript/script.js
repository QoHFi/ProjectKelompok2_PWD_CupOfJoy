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

// ===== Bagian Katalog =====

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

// ===== Bagian Detail =====

// ===== Bagian Profil =====
