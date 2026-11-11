# STYLE A: gaya animasi vektor sinematik MASA SIH

Disetujui user pada 9 Nov 2026, dari video "Gimana Kalau Kamu Minum Air Dingin Tiap Hari? (gaya baru)".
**Sejak 9 Nov 2026 Style A adalah gaya DEFAULT untuk semua video MASA SIH.**

Catatan nama: "Style A" di sini artinya **gaya video**. Ini berbeda dengan "YUMA Style A" di skill yuma-mascot, yang artinya paket gambar resmi YUMA. Kalau paket PNG YUMA Style A tersedia, pakai paket itu untuk karakter YUMA di dalam video Style A.

Gaya ini terinspirasi teknik video edukasi animasi seperti Kok Bisa? (lihat `referensi_gaya_video_kekayaan.md`). Yang diambil hanya tekniknya. Karakter, artwork, logo, dan kalimat mereka tidak dipakai.

---

## 1. Prinsip
- **Semua gambar dibuat sendiri** sebagai vektor (SVG) lewat kode. Tidak memakai gambar AI atau gambar orang lain.
- **Suara dan naskah dari user dipakai apa adanya.** Naskah tidak diganti dan audio tidak di-generate ulang.
- Satu kalimat atau gagasan = satu visual. Angka atau klaim penting selalu punya visual sendiri.
- Kamera tidak pernah diam. Hampir tidak ada frame yang statis.

## 2. Output
- Short 9:16 = 1080x1920, 30 fps (default kalau user bilang "shortnya aja").
- YouTube 16:9 = 1920x1080, 30 fps, memakai gambar yang sama dengan kamera berbeda.
- H.264 CRF 18, yuv420p, faststart. Audio AAC 192k dari `narasi.mp3`. Durasi = durasi narasi.
- Nama file: `short - <Judul>.mp4` / `video - <Judul>.mp4`. Kalau judul yang sama sudah ada, tambahkan ` (gaya baru)` supaya file lama tidak tertimpa.

## 3. Struktur cerita (diterapkan ke naskah yang sudah ada, tanpa mengubah kata-katanya)
1. **Hook (0–3 detik):** teks besar berisi pertanyaan atau seruan, objek utama berukuran raksasa, partikel bergerak (es jatuh, koin, dan sebagainya), sinar cahaya dari atas.
2. **Konflik atau mitos:** karakter (ibu, teman) dengan balon ucapan yang pop-in tepat saat kata disebut.
3. **Kartu bab:** scene digelapkan (overlay #06121C 55%), letterbox hitam masuk, teks **emas gradien** kapital Baloo 2 ExtraBold, 2–3 baris. Dipakai untuk pertanyaan utama ("MASA SIH …?") dan "PLOT TWIST!".
4. **Fakta:** infografik dengan angka besar putih di atas objek, teks satuan kecil berwarna, dan **sumber kecil di kiri bawah** (Inter 24 px, opacity 0,85).
5. **Mitos dipatahkan:** objek mitos diberi stempel ✕ merah yang pop-in, lalu label kebenaran berwarna hijau.
6. **Pengecualian atau peringatan:** latar gelap kemerahan berdenyut, segitiga peringatan kuning, lalu label merah.
7. **Diagram tubuh:** latar ungu-navy dengan grid tipis, siluet sederhana, organ berwarna pink, objek bergerak di dalamnya, dan catatan "Ilustrasi disederhanakan".
8. **Plot twist + perbandingan skala:** benda pelaku berjajar, **tumpukan kubus isometrik** tumbuh satu per satu di atasnya (ala balok uang di video referensi), label nama di bawahnya.
9. **Kesimpulan:** kartu checklist putih dengan ✓ hijau yang muncul tepat saat kata disebut.
10. **CTA:** split screen diagonal dua warna (TIM A vs TIM B), lingkaran "VS" kuning, YUMA melambai masuk dari bawah, balon "Tulis di komentar!".

11. **Thumbnail di awal (wajib):** 0,1 detik pertama (3 frame) berisi kartu cover: visual hook + judul besar putih (Baloo 2 ExtraBold, outline gelap) 2–3 baris kapital + garis kuning di bawah baris terakhir, tanpa subtitle. Supaya cover IG Reels/TikTok langsung menampilkan judul. Atur di `scenes_<id>.js`: `const THUMB={t:<detik visual hook>, lines:['BARIS 1','BARIS 2','BARIS 3']};`. Mesin (`scene.html`) otomatis menggambarnya di t < 0,1.

## 4. Visual
- **Karakter chibi:** kepala bulat besar, mata titik dengan kilau, mulut garis kecil, outline navy `#22335A` 4 px, drop shadow lembut (dx 6, dy 11, blur 7, opacity 0,28). YUMA mengikuti spesifikasi skill yuma-mascot (topi navy, kaos biru muda `#8ED1F3`, celana `#2F62AE`, sneakers `#2B2F45`).
- **Ekspresi yang tersedia:** smile, happy (^), surprised, worried (alis + keringat), think (mata ke atas), sad, sip. Kedip setiap 3,1–4,0 detik selama 0,16 detik.
- **Palet:** latar kusam atau gelap dengan **satu aksen terang per scene**, mengikuti emosinya.
  - Hook: navy-teal `#0F2A3A` + glow biru
  - Ruangan: abu-hijau `#C9CFC4` + lantai kayu
  - Virus: hijau gelap `#1F2E25`
  - Peringatan: plum `#2A1F2B` + merah berdenyut
  - Diagram: indigo `#3B3A7A`
  - Hangat atau pilek: oranye `#E9C9A3`
  - Plot twist: cokelat `#2B1B14`
  - Kesimpulan: biru muda `#CDEBF5`
- **Pencahayaan:** sinar cahaya (gradien putih transparan), glow radial di belakang objek utama, vignette di seluruh layar, grain halus (feTurbulence, alpha 0,07).
- **Kedalaman:** objek latar depan diblur (gaussian 9) dan partikel kecil diblur tipis (4).
- **Label (badge):** kotak membulat dengan outline navy 5 px, teks Baloo 2 ExtraBold putih, miring −3° sampai 3°. Merah `#E8505B`/`#E5383B` untuk masalah, hijau `#3BB273` untuk benar, kuning `#F4C542` untuk istilah, navy `#5B6C8F` untuk pertanyaan.
- **Teks besar:** Baloo 2 ExtraBold dengan outline navy (stroke 10–14, paint-order stroke). Angka besar memakai Inter ExtraBold.

## 5. Animasi
- **Kamera:** setiap scene punya push-in/zoom-out dan pan (smoothstep in-out), zoom 1,00–1,25. Scene panjang boleh dibagi 2 gerakan.
- **Crossfade** 0,25 detik antar scene, termasuk HUD (teks layar).
- **Pop elastis** (easeOutElastic, 0,45 detik) untuk label, balon, ikon, ✕, ✓. Semua muncul tepat di detik kata diucapkan (dari `timing.json`).
- **Gerak hidup:** es batu bergoyang di gelas, uap naik, virus berputar mengorbit, lengan YUMA melambai (sinus), cairan di siluet naik dengan permukaan bergelombang.
- YUMA masuk dari bawah layar dengan easeOutCubic.

## 6. Komposisi untuk dua ukuran
- Dunia gambar = kanvas persegi 1920x1920. Konten penting ditaruh di area tengah 1080x1080 (x 420–1500, y 420–1330).
- Kamera 9:16 melihat 1080x1920 dan kamera 16:9 melihat 1920x1080 dari dunia yang sama. Posisi bisa dibedakan per ukuran dengan `ASP==='v'`.
- Teks layar (HUD) diatur per ukuran. 9:16: judul di y ≈ 400–600. 16:9: judul di atas atau di sisi kosong supaya tidak menabrak watermark.
- Subtitle: putih dengan outline `#161828`, Baloo 2 ExtraBold, maksimal 4 kata dan 2 baris yang seimbang. 9:16: 98 px di y=1490. 16:9: 76 px di y=968. Ada efek pop kecil 0,12 detik di awal tiap potongan.
- Watermark `wm.png`: 9:16 lebar 760 px di (36,165); 16:9 lebar 600 px di (28,24).

## 7. Cara pakai kit (`masasih_style_A_kit/`)
Struktur: `scene.html` (mesin umum: helper, YUMA, objek, subtitle, kamera) + `scenes_<id>.js` (daftar scene per video) + `subs_<id>.json` + `narasi_<id>.mp3`.
Contoh yang sudah jadi: `scenes_airdingin.js`, `scenes_lampu.js`, `scenes_jerawat.js`, `scenes_earphone.js`.
1. Taruh narasi sebagai `narasi_<id>.mp3`. Timing kata dari faster-whisper (`{"words":[{w,s,e}]}`); betulkan ejaan yang salah dengar.
2. `python3 mksubs.py timing.json subs_<id>.json` (potong di tanda baca / maks 4 kata). Baris subtitle panjang otomatis dikecilkan agar tidak terpotong.
3. Tulis `scenes_<id>.js`: `S.push({t0,t1,world(t),cam(t),hud(t)})` per kalimat. Pakai helper: `yuma()`, `mom()`, `glass()`, `mug()`, `iceCube()`, `virus()`, `sugarCube()`, `check()`, `xmark()`, `bubble()`, `label()`, `rays()`, `room()`, `bigText()`, `popS()`, `camV()`. Pakai `isV` untuk posisi khusus 9:16.
4. Server lokal: `python3 -m http.server 8765 --bind 127.0.0.1` di folder kit.
5. Uji: `SC=<id> node render.js v st 0 0 "1.8,5.8,9.9"` lalu `python3 sheet.py v st/sheet.jpg`. Cek tiap scene: tidak ada yang terpotong, label tidak menutup wajah, label tidak di belakang subtitle (9:16: konten penting di dunia y < ~1350).
6. Render Short: `./runone.sh <id>` -> `out_<id>.mp4` (4 proses paralel + ffmpeg).
7. Cek lembar frame per 4 detik sebelum dikirim / dijadwalkan.
