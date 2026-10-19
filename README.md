# ☕ Cafe Undiknas - Web Application

Aplikasi katalog menu berbasis web untuk **Cafe Undiknas** yang dibangun menggunakan **Node.js**, **Express.js**, dan template engine **EJS** dengan penerapan arsitektur **MVC (Model-View-Controller)**.

---

## 👤 Identitas Mahasiswa
* **Nama:** I komang Dika Gus Septa
* **NIM:** 42530015
* **Mata Kuliah:** Pemrograman Web
* **Kelas:** Kelas Pagi

---

## 🚀 Fitur Utama
* **Katalog Menu Dinamis:** Menampilkan daftar menu makanan dan minuman secara interaktif.
* **Pencarian & Filter (`req.query`):** Fitur penyaringan daftar menu berdasarkan kata kunci pencarian dari query string URL.
* **Halaman Detail Menu (`req.params`):** Fitur penanganan parameter dinamis ID menu pada URL untuk menampilkan rincian informasi menu tertentu.
* **Aksesibilitas & Performa:**
  * Penggunaan atribut `aria-label` pada elemen pencarian dan tombol interaktif untuk mendukung pemindai layar (*screen reader*).
  * Pengoptimalan pemuatan gambar menggunakan atribut `loading="lazy"`, `width`, dan `height` untuk performa *loading* yang lebih cepat dan mencegah pergeseran tata letak (CLS).

---

## 🛠️ Teknologi & Library
* **Backend:** Node.js, Express.js
* **Template Engine:** EJS (Embedded JavaScript)
* **Arsitektur:** Model-View-Controller (MVC)
* **Styling/UI:** CSS
* **Version Control:** Git & GitHub

---

## 📁 Struktur Folder (MVC)
```text
.
├── controllers/       # Logika bisnis dan pemrosesan data (e.g., menu.controller.js)
├── Routes/            # Manajemen rute aplikasi (e.g., page.routes.js)
├── views/             # Tampilan antarmuka EJS (Pages & Partials)
├── public/            # Berkas statis (CSS, Gambar, JavaScript client)
├── app.js             # Entry point / Berkas utama server Express
├── package.json       # Manajer dependensi dan manifes proyek
└── .gitignore         # Berkas konfigurasi pengabaian Git (node_modules, .env)

---

## 🎬 Video Presentasi Tugas
Sebagai pemenuhan kriteria rubrik penilaian, video presentasi yang mencakup demonstrasi antarmuka, penjelasan baris kode pada VS Code, dan pengujian performa dapat diakses di bawah ini:

* **Link Video YouTube:** [Presentasi Proyek Cafe Undiknas - YouTube](https://youtu.be/tsbASxaBltA?si=fopYbzGWuqeFit2C)

---