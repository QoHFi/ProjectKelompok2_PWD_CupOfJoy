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

// ===== Bagian Katalog =====

// ===== Bagian Detail =====
const detailWadah = document.getElementById("detail-produk");

if (detailWadah) {
  const detailData = {
    "americano": {
      nama: "Americano", kategori: "Coffee", harga: 18000,
      gambar: "images/Americano.jpg",
      deskripsi: "Espresso yang dipadukan dengan air, rasanya bold dan segar. Cocok untuk penyuka kopi hitam."
    },
    "coffee-latte": {
      nama: "Coffee Latte", kategori: "Coffee", harga: 22000,
      gambar: "images/Coffe_latte.jpg",
      deskripsi: "Perpaduan espresso dan susu yang lembut dengan rasa kopi yang seimbang."
    },
    "brown-sugar-coffee": {
      nama: "Brown Sugar Coffee", kategori: "Coffee", harga: 24000,
      gambar: "images/BrownSugar_Coffe.jpg",
      deskripsi: "Kopi susu dengan sirup gula aren yang manis legit dan aromanya harum."
    },
    "brown-sugar-boba-milk-tea": {
      nama: "Brown Sugar Boba Milk Tea", kategori: "Milk Series", harga: 25000,
      gambar: "images/BrownSugarBoba_MilkTea.jpeg",
      deskripsi: "Milk tea creamy dengan boba kenyal dan sirup brown sugar yang manis."
    },
    "chocolate-drink": {
      nama: "Chocolate Drink", kategori: "Milk Series", harga: 22000,
      gambar: "images/Chocolate_Drink.jpeg",
      deskripsi: "Minuman cokelat pekat dan lembut, favorit semua usia."
    },
    "matcha-latte": {
      nama: "Matcha Latte", kategori: "Milk Series", harga: 25000,
      gambar: "images/Matcha_Latte.jpeg",
      deskripsi: "Matcha pilihan dengan susu segar, rasa teh hijau yang khas dan creamy."
    },
    "red-velvet-milk": {
      nama: "Red Velvet Milk", kategori: "Milk Series", harga: 24000,
      gambar: "images/RedVelvet_Milk.jpeg",
      deskripsi: "Susu dengan rasa red velvet yang manis dan lembut, tampilannya cantik."
    },
    "milk-tea": {
      nama: "Milk Tea", kategori: "Tea Series", harga: 18000,
      gambar: "images/Milk_Tea.jpeg",
      deskripsi: "Teh pilihan dipadukan dengan susu, rasanya klasik dan menenangkan."
    },
    "blueberry-iced-tea": {
      nama: "Blueberry Iced Tea", kategori: "Tea Series", harga: 20000,
      gambar: "images/Blueberry-Iced-Tea.jpg",
      deskripsi: "Teh dingin dengan rasa blueberry yang segar, manis, dan sedikit asam."
    },
    "lemon-tea": {
      nama: "Lemon Tea", kategori: "Tea Series", harga: 16000,
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
