/* Konfigurasi toko. Isi URL produk Lynk setelah produk dibuat di akunmu. */
window.STORE_CONFIG = {
  // PDF besar disimpan di Google Drive (bukan di Netlify). Isi dengan FILE ID atau link unduhan penuh.
  // Contoh: dari link https://drive.google.com/file/d/1AbCdEfG/view  ->  isi "1AbCdEfG"
  externalFiles: {
    "assets/worksheet-campuran.pdf": "",
    "assets/aktivitas-menggunting-menempel.pdf": "",
    "assets/worksheet-mewarnai-benda.pdf": ""
  },
  brand: "RuangDigital",
  supportWhatsApp: "", // format internasional tanpa +, contoh 62812xxxxxxx
  supportEmail: "",
  memberPriceLabel: "Lihat harga di Lynk.id",
  memberCheckoutUrl: "",
  checkoutUrls: {
    "Waktu Sholat": "", "Amalan Rezeki": "", "Doa Harian": "",
    "Worksheet": "", "Worksheet Mewarnai Benda": "", "Flash Card": "",
    "Game Edukasi": ""
  }
};
