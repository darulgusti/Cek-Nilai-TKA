// ============================================================
//  DATA SISWA — Data TKA Resmi (58 Siswa)
//  Untuk produksi, ganti fungsi getSiswaByNISN() di bawah
//  agar mengambil data dari API atau database.
// ============================================================

const DATA_SISWA = [
  { no: 1,  nomor_peserta: "T1-26-05-29-0287-0001-8", nisn: "0132599554", nama: "YUVI ZHIDQIA QOTRUNNADA",        ttl: "PROBOLINGGO, 23 November 2013",  matematika: 70.00, bahasa_indonesia: 80.00 },
  { no: 2,  nomor_peserta: "T1-26-05-29-0287-0002-7", nisn: "0133708325", nama: "ALBY LUTHFI RAHMANI",            ttl: "PROBOLINGGO, 28 September 2013", matematika: 40.00, bahasa_indonesia: 50.00 },
  { no: 3,  nomor_peserta: "T1-26-05-29-0287-0003-6", nisn: "0135941525", nama: "TAJ IZZI AL FADLI",              ttl: "PROBOLINGGO, 13 September 2013", matematika: 66.67, bahasa_indonesia: 66.67 },
  { no: 4,  nomor_peserta: "T1-26-05-29-0287-0004-5", nisn: "0147380912", nama: "ZUKHRUFA MYSHA KHAIREEN",        ttl: "PROBOLINGGO, 11 November 2014",  matematika: 60.00, bahasa_indonesia: 83.33 },
  { no: 5,  nomor_peserta: "T1-26-05-29-0287-0005-4", nisn: "0139895654", nama: "AQILA MAYLITA",                  ttl: "JAKARTA, 24 Mei 2013",           matematika: 56.67, bahasa_indonesia: 80.00 },
  { no: 6,  nomor_peserta: "T1-26-05-29-0287-0006-3", nisn: "0148079110", nama: "BINTANG FEBRIAN AZKA ALVARO",   ttl: "PROBOLINGGO, 30 Januari 2014",   matematika: 83.33, bahasa_indonesia: 90.00 },
  { no: 7,  nomor_peserta: "T1-26-05-29-0287-0007-2", nisn: "0138348541", nama: "RAISAH SYAKIRA BILBANIA",        ttl: "Pasuruan, 28 Maret 2013",        matematika: 33.33, bahasa_indonesia: 46.67 },
  { no: 8,  nomor_peserta: "T1-26-05-29-0287-0008-9", nisn: "0138090787", nama: "AVIQAH FEBY FAIZIA",             ttl: "PROBOLINGGO, 7 Februari 2013",   matematika: 36.67, bahasa_indonesia: 70.00 },
  { no: 9,  nomor_peserta: "T1-26-05-29-0287-0009-8", nisn: "0132238921", nama: "SYIFA KIRANA KHANZA AZZAHRA",   ttl: "PROBOLINGGO, 2 Agustus 2013",    matematika: 60.00, bahasa_indonesia: 83.33 },
  { no: 10, nomor_peserta: "T1-26-05-29-0287-0010-7", nisn: "0144804422", nama: "GALANG NURDAFFA PRATAMA",        ttl: "PROBOLINGGO, 22 April 2014",     matematika: 56.67, bahasa_indonesia: 56.67 },
  { no: 11, nomor_peserta: "T1-26-05-29-0287-0011-6", nisn: "3135761880", nama: "MOH. ALDIANSYAH PUTRA",          ttl: "PROBOLINGGO, 17 Desember 2012",  matematika: 43.33, bahasa_indonesia: 76.67 },
  { no: 12, nomor_peserta: "T1-26-05-29-0287-0012-5", nisn: "0143143327", nama: "HIFDINIA ARLITHA RAMADHANI",     ttl: "PROBOLINGGO, 16 Juli 2014",      matematika: 26.67, bahasa_indonesia: 70.00 },
  { no: 13, nomor_peserta: "T1-26-05-29-0287-0013-4", nisn: "3131787601", nama: "MUADATUL MUFIDAH",               ttl: "PROBOLINGGO, 12 Juni 2013",      matematika: 33.33, bahasa_indonesia: 76.67 },
  { no: 14, nomor_peserta: "T1-26-05-29-0287-0014-3", nisn: "0141456813", nama: "ZAHRA RATIFA",                   ttl: "PROBOLINGGO, 14 Oktober 2014",   matematika: 36.67, bahasa_indonesia: 53.33 },
  { no: 15, nomor_peserta: "T1-26-05-29-0287-0015-2", nisn: "0137031360", nama: "KINANA JIAN SHAFIRA",            ttl: "PROBOLINGGO, 26 Mei 2013",       matematika: 43.33, bahasa_indonesia: 90.00 },
  { no: 16, nomor_peserta: "T1-26-05-29-0287-0016-9", nisn: "0133890309", nama: "AYUNNARA LENTERA AIKO AL MUHYI", ttl: "PROBOLINGGO, 24 Agustus 2013",   matematika: 50.00, bahasa_indonesia: 83.33 },
  { no: 17, nomor_peserta: "T1-26-05-29-0287-0017-8", nisn: "0141328940", nama: "JENY RIZKIA ANGGRAENI",          ttl: "PROBOLINGGO, 8 Januari 2014",    matematika: 40.00, bahasa_indonesia: 76.67 },
  { no: 18, nomor_peserta: "T1-26-05-29-0287-0018-7", nisn: "0143313933", nama: "REGINA DWI PUTRI AFISKA",        ttl: "PROBOLINGGO, 16 Juli 2014",      matematika: 40.00, bahasa_indonesia: 73.33 },
  { no: 19, nomor_peserta: "T1-26-05-29-0287-0019-6", nisn: "0135371370", nama: "IQBAL ILHAM ADIB MUHAMMAD",      ttl: "PROBOLINGGO, 19 Mei 2013",       matematika: 43.33, bahasa_indonesia: 50.00 },
  { no: 20, nomor_peserta: "T1-26-05-29-0287-0020-5", nisn: "0147023406", nama: "DEWI KUSUMA WARDANI",            ttl: "PROBOLINGGO, 4 April 2014",      matematika: 53.33, bahasa_indonesia: 70.00 },
  { no: 21, nomor_peserta: "T1-26-05-29-0287-0021-4", nisn: "0133278222", nama: "AZKA FAHMI",                     ttl: "PROBOLINGGO, 19 Desember 2013",  matematika: 46.67, bahasa_indonesia: 66.67 },
  { no: 22, nomor_peserta: "T1-26-05-29-0287-0022-3", nisn: "0141161228", nama: "AYRA ARRETA AZZAHRA",            ttl: "PROBOLINGGO, 2 Mei 2014",        matematika: 53.33, bahasa_indonesia: 80.00 },
  { no: 23, nomor_peserta: "T1-26-05-29-0287-0023-2", nisn: "0139602353", nama: "ALAN MUHAMMAD GANY",             ttl: "PROBOLINGGO, 13 Agustus 2013",   matematika: 43.33, bahasa_indonesia: 66.67 },
  { no: 24, nomor_peserta: "T1-26-05-29-0287-0024-9", nisn: "0135762855", nama: "AZKA AZH ZHOHIR",                ttl: "PROBOLINGGO, 26 September 2013", matematika: 30.00, bahasa_indonesia: 46.67 },
  { no: 25, nomor_peserta: "T1-26-05-29-0287-0025-8", nisn: "0137139181", nama: "MAULANA MALIK IBRAHIM",          ttl: "PROBOLINGGO, 6 Desember 2013",   matematika: 73.33, bahasa_indonesia: 70.00 },
  { no: 26, nomor_peserta: "T1-26-05-29-0287-0026-7", nisn: "0149842193", nama: "ABD. MAJID RAFAILLAH",           ttl: "PROBOLINGGO, 25 April 2014",     matematika: 70.00, bahasa_indonesia: 66.67 },
  { no: 27, nomor_peserta: "T1-26-05-29-0287-0027-6", nisn: "0145385936", nama: "PUTRI LUTFIYATUL KAROMAH",       ttl: "PROBOLINGGO, 28 April 2014",     matematika: 56.67, bahasa_indonesia: 70.00 },
  { no: 28, nomor_peserta: "T1-26-05-29-0287-0028-5", nisn: "3131184091", nama: "FAHRI KHOIRUL ADZAM",            ttl: "PROBOLINGGO, 29 Oktober 2013",   matematika: 50.00, bahasa_indonesia: 53.33 },
  { no: 29, nomor_peserta: "T1-26-05-29-0287-0029-4", nisn: "0147258662", nama: "JAMALIA PUTRI SUYITNO",          ttl: "PROBOLINGGO, 20 Januari 2014",   matematika: 56.67, bahasa_indonesia: 63.33 },
  { no: 30, nomor_peserta: "T1-26-05-29-0287-0030-3", nisn: "0145230676", nama: "ANDRA HANAN BAGAS DITYA",        ttl: "PROBOLINGGO, 19 Maret 2014",     matematika: 36.67, bahasa_indonesia: 60.00 },
  { no: 31, nomor_peserta: "T1-26-05-29-0287-0031-2", nisn: "0134842404", nama: "INES DEWI PUTRI BAHARI",         ttl: "PROBOLINGGO, 21 Maret 2013",     matematika: 46.67, bahasa_indonesia: 50.00 },
  { no: 32, nomor_peserta: "T1-26-05-29-0287-0032-9", nisn: "0138142818", nama: "FREYA ANINDITA PUTRI",           ttl: "BONDOWOSO, 10 Desember 2013",    matematika: 60.00, bahasa_indonesia: 63.33 },
  { no: 33, nomor_peserta: "T1-26-05-29-0287-0033-8", nisn: "0134460640", nama: "YAHYA",                          ttl: "MALANG, 29 November 2013",       matematika: 70.00, bahasa_indonesia: 90.00 },
  { no: 34, nomor_peserta: "T1-26-05-29-0287-0034-7", nisn: "0133331556", nama: "GIAN RADHITYA RIDWAN",           ttl: "Probolinggo, 17 Oktober 2013",   matematika: 40.00, bahasa_indonesia: 60.00 },
  { no: 35, nomor_peserta: "T1-26-05-29-0287-0035-6", nisn: "0134320006", nama: "AFIQAH SHIDQIA PUTRI",           ttl: "PROBOLINGGO, 22 Juni 2013",      matematika: 43.33, bahasa_indonesia: 80.00 },
  { no: 36, nomor_peserta: "T1-26-05-29-0287-0036-5", nisn: "0132457019", nama: "MUHAMMAD IBNU RAFI",             ttl: "PROBOLINGGO, 2 September 2013",  matematika: 46.67, bahasa_indonesia: 46.67 },
  { no: 37, nomor_peserta: "T1-26-05-29-0287-0037-4", nisn: "3130295814", nama: "ABIDZAR NAUFAL ALGIFARI",        ttl: "PROBOLINGGO, 6 Mei 2013",        matematika: 80.00, bahasa_indonesia: 76.67 },
  { no: 38, nomor_peserta: "T1-26-05-29-0287-0038-3", nisn: "0142610983", nama: "MIKHAILA KHANZA AZZAHRA",        ttl: "PROBOLINGGO, 7 Agustus 2014",    matematika: 53.33, bahasa_indonesia: 80.00 },
  { no: 39, nomor_peserta: "T1-26-05-29-0287-0039-2", nisn: "0137872571", nama: "ALYA ZAHIRAH",                   ttl: "PASURUAN, 23 September 2013",    matematika: 63.33, bahasa_indonesia: 80.00 },
  { no: 40, nomor_peserta: "T1-26-05-29-0287-0040-9", nisn: "0147212833", nama: "M. ALFIANSYAH PUTRA",            ttl: "PROBOLINGGO, 2 Maret 2014",      matematika: 56.67, bahasa_indonesia: 66.67 },
  { no: 41, nomor_peserta: "T1-26-05-29-0287-0041-8", nisn: "0132062857", nama: "RIZKA UMMI CAHYATI",             ttl: "PROBOLINGGO, 29 Maret 2013",     matematika: 40.00, bahasa_indonesia: 63.33 },
  { no: 42, nomor_peserta: "T1-26-05-29-0287-0042-7", nisn: "0138246665", nama: "MUTYARA SASI KIRANA",            ttl: "PROBOLINGGO, 31 Mei 2013",       matematika: 50.00, bahasa_indonesia: 66.67 },
  { no: 43, nomor_peserta: "T1-26-05-29-0287-0043-6", nisn: "0137407737", nama: "NATA NIRWASITA ALTHAF",          ttl: "SURABAYA, 17 Agustus 2013",      matematika: 53.33, bahasa_indonesia: 76.67 },
  { no: 44, nomor_peserta: "T1-26-05-29-0287-0044-5", nisn: "0137796384", nama: "NAUMY OCTAVIA PUTRI",            ttl: "PROBOLINGGO, 9 Oktober 2013",    matematika: 63.33, bahasa_indonesia: 76.67 },
  { no: 45, nomor_peserta: "T1-26-05-29-0287-0045-4", nisn: "0137289400", nama: "LUTHFIYAH NUR SHIDQIYAH",        ttl: "PROBOLINGGO, 20 Mei 2013",       matematika: 70.00, bahasa_indonesia: 90.00 },
  { no: 46, nomor_peserta: "T1-26-05-29-0287-0046-3", nisn: "0139070410", nama: "FIBA RAMADHANI WIJAYA",          ttl: "PROBOLINGGO, 26 Juli 2013",      matematika: 33.33, bahasa_indonesia: 80.00 },
  { no: 47, nomor_peserta: "T1-26-05-29-0287-0047-2", nisn: "0134621814", nama: "NAJWA KALILLAH KHUMAIRAH PUTRI", ttl: "PROBOLINGGO, 13 Juli 2013",      matematika: 66.67, bahasa_indonesia: 70.00 },
  { no: 48, nomor_peserta: "T1-26-05-29-0287-0048-9", nisn: "3146570525", nama: "ZAHROTUN NAYZILLAH",             ttl: "BANYUWANGI, 16 Februari 2014",   matematika: 56.67, bahasa_indonesia: 76.67 },
  { no: 49, nomor_peserta: "T1-26-05-29-0287-0049-8", nisn: "0131677261", nama: "DHIMAS HAKIIM PRAYOGO",          ttl: "PROBOLINGGO, 19 September 2013", matematika: 43.33, bahasa_indonesia: 60.00 },
  { no: 50, nomor_peserta: "T1-26-05-29-0287-0050-7", nisn: "0136450367", nama: "ALI AKBAR SHODIQI",              ttl: "BONDOWOSO, 5 Agustus 2013",      matematika: 40.00, bahasa_indonesia: 43.33 },
  { no: 51, nomor_peserta: "T1-26-05-29-0287-0051-6", nisn: "0149723227", nama: "ALBY PUTRA WALDAN SAFARAS",      ttl: "PROBOLINGGO, 1 Maret 2014",      matematika: 56.67, bahasa_indonesia: 63.33 },
  { no: 52, nomor_peserta: "T1-26-05-29-0287-0052-5", nisn: "0137559544", nama: "LAURA ADENIA DEWI RAJO",         ttl: "PROBOLINGGO, 6 Agustus 2013",    matematika: 60.00, bahasa_indonesia: 86.67 },
  { no: 53, nomor_peserta: "T1-26-05-29-0287-0053-4", nisn: "0138414499", nama: "LUIZA ANASTASYA ARABELA",        ttl: "PROBOLINGGO, 14 Maret 2013",     matematika: 46.67, bahasa_indonesia: 40.00 },
  { no: 54, nomor_peserta: "T1-26-05-29-0287-0054-3", nisn: "0136632357", nama: "BILLY RIZQILLAH PRATAMA",        ttl: "PROBOLINGGO, 4 Juni 2013",       matematika: 50.00, bahasa_indonesia: 63.33 },
  { no: 55, nomor_peserta: "T1-26-05-29-0287-0055-2", nisn: "3133864383", nama: "M. FAHMI RAMADHANI",             ttl: "BATANG HARI, 25 Juli 2013",      matematika: 40.00, bahasa_indonesia: 36.67 },
  { no: 56, nomor_peserta: "T1-26-05-29-0287-0056-9", nisn: "0148244991", nama: "ARDAN ZAIDI AUFA AZROMI",        ttl: "PROBOLINGGO, 18 Juli 2014",      matematika: 46.67, bahasa_indonesia: 36.67 },
  { no: 57, nomor_peserta: "T1-26-05-29-0287-0057-8", nisn: "3146454628", nama: "ZAHRA MELODY PUTRI",             ttl: "PROBOLINGGO, 19 April 2014",     matematika: 33.33, bahasa_indonesia: 23.33 },
  { no: 58, nomor_peserta: "T1-26-05-29-0287-0058-7", nisn: "0148499747", nama: "MOHAMMAD FAHMI FATIHUR ROBBANI", ttl: "PROBOLINGGO, 6 Januari 2014",    matematika: 40.00, bahasa_indonesia: 53.33 },
];

/**
 * Cari siswa berdasarkan NISN.
 * Kembalikan null jika tidak ditemukan.
 *
 * Untuk integrasi API, ganti isi fungsi ini dengan:
 *   const res = await fetch(`/api/siswa?nisn=${nisn}`);
 *   return res.ok ? res.json() : null;
 */
async function getSiswaByNISN(nisn) {
  // Simulasi network delay agar loading state terasa nyata
  await new Promise((resolve) => setTimeout(resolve, 600));

  const trimmed = nisn.trim();
  const found = DATA_SISWA.find((s) => s.nisn === trimmed);
  return found ?? null;
}
