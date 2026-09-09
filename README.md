# Jajan Yuks 🍪

Landing page + keranjang belanja untuk UMKM jajanan rumahan. Customer pilih produk, isi nama & alamat di website, lalu otomatis dikirim ke WhatsApp tinggal klik **Kirim**.

Dibangun dengan **Next.js 16** + **Tailwind v4** + **Framer Motion**.

---

## ✨ Fitur

- 🛒 **Keranjang belanja** dengan `localStorage` (tetap tersimpan walau di-refresh)
- 📱 **Form alamat** di drawer — customer tinggal isi nama + alamat, format orderan kebuka di WA otomatis
- ⚡ **Animasi halus** pakai `framer-motion`, *reduced-motion aware*
- 🎨 **Desain editorial warm** — palet kertas, tipografi serif, grain texture
- 📲 **Mobile-friendly** — touch target 44px, safe-area iOS, input 16px (anti-zoom iOS)
- 💬 **Floating cart button** dengan badge jumlah item

---

## 🚀 Cara Jalankan

```bash
# Install dependency
npm install

# Mode development
npm run dev

# Buka di browser
http://localhost:3000

# Production
npm run build
npm run start
```

---

## 🗂️ Struktur Project

```
src/
├── app/
│   ├── globals.css     # palet warna, font, scroll, animasi global
│   ├── layout.tsx      # root layout, font loader, viewport
│   └── page.tsx        # halaman utama, bungkus semua section
├── components/
│   ├── Hero.tsx        # headline + CTA
│   ├── Features.tsx    # 4 keunggulan
│   ├── Products.tsx    # etalase produk, tombol +Keranjang
│   ├── CartDrawer.tsx  # drawer keranjang + form alamat
│   ├── CartButton.tsx  # floating button ke keranjang
│   ├── Navbar.tsx      # sticky navbar
│   ├── Testimonials.tsx# testimoni pelanggan
│   ├── About.tsx       # cerita dapur
│   ├── FAQ.tsx         # pertanyaan sering ditanya
│   ├── Contact.tsx     # kontak & maps
│   └── Footer.tsx
└── lib/
    ├── cart.tsx        # CartContext + hook useCart (localStorage)
    └── utils.ts        # waLink, formatRupiah, buildCartWaMessage
config/
└── site.ts             # nomor WA, Instagram, alamat
```

---

## ⚙️ Konfigurasi

Edit `config/site.ts` untuk ganti nomor WhatsApp, Instagram, alamat:

```ts
export const site = {
  name: "Jajan Yuks",
  waNumber: "62895604867299", // nomor tujuan WA
  instagram: "@jajanyuks",
  address: "Jl. Dummy No.123, Jakarta",
};
```

---

## 📸 Menambah Foto Produk

Letakkan foto asli di:

```
public/products/keripik-kentang-balado.jpg
public/products/basreng-pedas-daun-jeruk.jpg
public/products/makaroni-keju-lumer.jpg
# dst, sesuai id produk di Products.tsx
```

Ukuran disarankan: **400×300 px**, format `.webp` atau `.jpg`, < 80 KB.

---

## 🧰 Stack

| Library | Versi | Fungsi |
|---|---|---|
| Next.js | 16.3.4 | framework |
| React | 19.2.8 | UI |
| Tailwind CSS | 4 | styling |
| Framer Motion | 12 | animasi |
| Lucide React | 1.41 | ikon |
| React Spring | 10 | animasi drawer |

---

## 📜 Lisensi

MIT — bebas dipakai untuk project pribadi atau komersial.

---

<p align="center">
  Developed with ❤️ by <a href="https://github.com/Yantokumar"><b>Bahrudin Yusup Caruban</b></a>
</p>
