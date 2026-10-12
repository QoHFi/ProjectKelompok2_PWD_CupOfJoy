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