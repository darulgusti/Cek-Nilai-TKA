// ============================================================
//  APP.JS — Logic utama aplikasi Cek Nilai TKA
// ============================================================

// ---- Import data layer (fungsi getSiswaByNISN)
// Sudah di-inject via <script src="data/siswa.js"> di HTML

// ---- DOM References ----
const nisnInput     = document.getElementById('nisn-input');
const nisnError     = document.getElementById('nisn-error');
const searchBtn     = document.getElementById('search-btn');
const btnLabel      = document.getElementById('btn-label');
const btnSpinner    = document.getElementById('btn-spinner');
const resultSection = document.getElementById('result-section');
const resultCard    = document.getElementById('result-card');
const errorCard     = document.getElementById('error-card');

// ---- Helper: Hitung grade berdasarkan nilai ----
function getGrade(nilai) {
  if (nilai >= 90) return { grade: 'A', label: 'Sangat Baik', cls: 'grade-A' };
  if (nilai >= 80) return { grade: 'B', label: 'Baik',        cls: 'grade-B' };
  if (nilai >= 70) return { grade: 'C', label: 'Cukup',       cls: 'grade-C' };
  return               { grade: 'D', label: 'Perlu Perbaikan', cls: 'grade-D' };
}

// ---- Helper: Bersihkan tampilan hasil ----
function clearResult() {
  resultSection.classList.add('hidden');
  resultCard.classList.add('hidden');
  errorCard.classList.add('hidden');
}

// ---- Validasi input NISN ----
function validateNISN(value) {
  if (!value.trim()) {
    return 'NISN wajib diisi.';
  }
  if (!/^\d+$/.test(value.trim())) {
    return 'NISN hanya boleh berisi angka.';
  }
  if (value.trim().length < 8 || value.trim().length > 10) {
    return 'NISN harus terdiri dari 8–10 digit angka.';
  }
  // Validasi: jika diawali 0, pastikan panjangnya 10
  if (value.trim().startsWith('0') && value.trim().length !== 10) {
    return 'NISN yang diawali angka 0 harus 10 digit.';
  }
  return null; // valid
}

// ---- Set loading state pada tombol ----
function setLoading(isLoading) {
  searchBtn.disabled = isLoading;
  if (isLoading) {
    btnLabel.textContent = 'Mencari…';
    btnSpinner.classList.remove('hidden');
  } else {
    btnLabel.textContent = 'Cek Nilai';
    btnSpinner.classList.add('hidden');
  }
}

// ---- Render hasil data siswa ----
function renderResult(siswa, nisn) {
  const gradeBI   = getGrade(siswa.bahasa_indonesia);
  const gradeMath = getGrade(siswa.matematika);
  const biFormatted   = Number(siswa.bahasa_indonesia).toFixed(2);
  const mathFormatted = Number(siswa.matematika).toFixed(2);

  resultCard.innerHTML = `
    <div class="result-header">
      <div class="result-avatar">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
        </svg>
      </div>
      <div class="result-header-text">
        <div class="result-name">${escapeHTML(siswa.nama)}</div>
        <div class="result-nisn">NISN: ${escapeHTML(nisn)}</div>
      </div>
    </div>

    <!-- Info detail siswa -->
    <div class="info-row">
      <div class="info-item">
        <span class="info-label">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"/>
          </svg>
          No. Peserta
        </span>
        <span class="info-value">${escapeHTML(siswa.nomor_peserta)}</span>
      </div>
      <div class="info-item">
        <span class="info-label">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
          </svg>
          Tanggal Lahir
        </span>
        <span class="info-value">${escapeHTML(siswa.ttl)}</span>
      </div>
    </div>

    <div class="nilai-grid">
      <!-- Bahasa Indonesia -->
      <div class="nilai-item bahasa">
        <div class="mata-pelajaran">Bhs. Indonesia</div>
        <div class="nilai-angka">${biFormatted}</div>
        <div class="nilai-label">Nilai TKA</div>
        <span class="grade-badge ${gradeBI.cls}">${gradeBI.grade} — ${gradeBI.label}</span>
      </div>

      <!-- Matematika -->
      <div class="nilai-item matematika">
        <div class="mata-pelajaran">Matematika</div>
        <div class="nilai-angka">${mathFormatted}</div>
        <div class="nilai-label">Nilai TKA</div>
        <span class="grade-badge ${gradeMath.cls}">${gradeMath.grade} — ${gradeMath.label}</span>
      </div>
    </div>

  `;

  resultCard.classList.remove('hidden');
  errorCard.classList.add('hidden');
  resultSection.classList.remove('hidden');

  // Scroll agar result terlihat di HP
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ---- Render error (NISN tidak ditemukan) ----
function renderError(nisn) {
  errorCard.innerHTML = `
    <div class="error-icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
      </svg>
    </div>
    <h3>Data Tidak Ditemukan</h3>
    <p>Tidak ada data siswa dengan NISN <strong>${escapeHTML(nisn)}</strong>.<br>
    Pastikan NISN yang kamu masukkan sudah benar.</p>
    <button class="btn-reset" onclick="resetForm()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:14px;height:14px">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
      </svg>
      Coba Lagi
    </button>
  `;

  errorCard.classList.remove('hidden');
  resultCard.classList.add('hidden');
  resultSection.classList.remove('hidden');
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ---- Reset form ----
function resetForm() {
  nisnInput.value = '';
  nisnInput.classList.remove('input-error');
  nisnError.innerHTML = '';
  clearResult();
  nisnInput.focus();
}

// ---- XSS protection ----
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ---- Main handler: submit form ----
async function handleSearch(e) {
  e.preventDefault();

  const rawValue = nisnInput.value;

  // Validasi
  const validationError = validateNISN(rawValue);
  if (validationError) {
    nisnInput.classList.add('input-error');
    nisnError.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"/>
      </svg>
      ${validationError}
    `;
    nisnInput.focus();
    clearResult();
    return;
  }

  // Bersihkan error & hasil lama
  nisnInput.classList.remove('input-error');
  nisnError.innerHTML = '';
  clearResult();

  // Loading
  setLoading(true);

  try {
    const siswa = await getSiswaByNISN(rawValue.trim());

    if (siswa) {
      renderResult(siswa, rawValue.trim());
    } else {
      renderError(rawValue.trim());
    }
  } catch (err) {
    renderError(rawValue.trim());
    console.error('Error saat pencarian:', err);
  } finally {
    setLoading(false);
  }
}

// ---- Real-time: bersihkan error saat user mengetik ----
nisnInput.addEventListener('input', () => {
  if (nisnInput.classList.contains('input-error')) {
    nisnInput.classList.remove('input-error');
    nisnError.innerHTML = '';
  }
  // Hanya izinkan angka
  nisnInput.value = nisnInput.value.replace(/\D/g, '');
});

// ---- Event listeners ----
document.getElementById('search-form').addEventListener('submit', handleSearch);
