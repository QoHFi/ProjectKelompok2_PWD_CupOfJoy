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
<<<<<<< HEAD
```
  // ===== Bagian Katalog =====
  ```javascript
=======

// ===== Bagian Katalog =====

>>>>>>> 0afde605f68bc69e0980f617c3cd1f7b3c7870f9
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
const detailWadah = document.getElementById("detail-produk");

if (detailWadah) {
  const detailData = {
    "Americano": {
      nama: "Americano", kategori: "Coffee", harga: 18000,
      gambar: "images/Americano.jpg",
      deskripsi: "Espresso yang dipadukan dengan air, rasanya bold dan segar. Cocok untuk penyuka kopi hitam."
    },
    "Coffee Latte": {
      nama: "Coffee Latte", kategori: "Coffee", harga: 22000,
      gambar: "images/Coffe_latte.jpg",
      deskripsi: "Perpaduan espresso dan susu yang lembut dengan rasa kopi yang seimbang."
    },
    "Brown Sugar Coffee": {
      nama: "Brown Sugar Coffee", kategori: "Coffee", harga: 23000,
      gambar: "images/BrownSugar_Coffe.jpg",
      deskripsi: "Kopi susu dengan sirup gula aren yang manis legit dan aromanya harum."
    },
    "Brown Sugar Boba Milk Tea": {
      nama: "Brown Sugar Boba Milk Tea", kategori: "Milk Series", harga: 25000,
      gambar: "images/BrownSugarBoba_MilkTea.jpeg",
      deskripsi: "Milk tea creamy dengan boba kenyal dan sirup brown sugar yang manis."
    },
    "Chocolate Drink": {
      nama: "Chocolate Drink", kategori: "Milk Series", harga: 22000,
      gambar: "images/Chocolate_Drink.jpeg",
      deskripsi: "Minuman cokelat pekat dan lembut, favorit semua usia."
    },
    "Matcha Latte": {
      nama: "Matcha Latte", kategori: "Milk Series", harga: 24000,
      gambar: "images/Matcha_Latte.jpeg",
      deskripsi: "Matcha pilihan dengan susu segar, rasa teh hijau yang khas dan creamy."
    },
    "Red Velvet Milk": {
      nama: "Red Velvet Milk", kategori: "Milk Series", harga: 23000,
      gambar: "images/RedVelvet_Milk.jpeg",
      deskripsi: "Susu dengan rasa red velvet yang manis dan lembut, tampilannya cantik."
    },
    "Milk Tea": {
      nama: "Milk Tea", kategori: "Tea Series", harga: 20000,
      gambar: "images/Milk_Tea.jpeg",
      deskripsi: "Teh pilihan dipadukan dengan susu, rasanya klasik dan menenangkan."
    },
    "Blueberry Iced Tea": {
      nama: "Blueberry Iced Tea", kategori: "Tea Series", harga: 20000,
      gambar: "images/Blueberry-Iced-Tea.jpg",
      deskripsi: "Teh dingin dengan rasa blueberry yang segar, manis, dan sedikit asam."
    },
    "Lemon Tea": {
      nama: "Lemon Tea", kategori: "Tea Series", harga: 17000,
      gambar: "images/Lemon_Tea.jpeg",
      deskripsi: "Teh dengan perasan lemon yang menyegarkan, pas diminum saat cuaca panas."
    }
  };

  const detailParams = new URLSearchParams(window.location.search);
  const detailId = detailParams.get("produk");
  const detailProduk = detailData[detailId];

  if (detailProduk) {
    document.title = detailProduk.nama + " | Cup of Joy";

    const detailFoto = document.getElementById("detail-foto");
    detailFoto.src = detailProduk.gambar;
    detailFoto.alt = detailProduk.nama;

    document.getElementById("detail-kategori").textContent = detailProduk.kategori;
    document.getElementById("detail-nama").textContent = detailProduk.nama;
    document.getElementById("detail-harga").textContent =
      "Rp" + detailProduk.harga.toLocaleString("id-ID");
    document.getElementById("detail-deskripsi").textContent = detailProduk.deskripsi;

    const detailPesan = "Halo Kak, saya mau pesan " + detailProduk.nama;
    document.getElementById("tombol-pesan").href =
      "https://wa.me/6285643631110?text=" + encodeURIComponent(detailPesan);
  } else {
    detailWadah.hidden = true;
    document.getElementById("detail-kosong").hidden = false;
  }
}
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