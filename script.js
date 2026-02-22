
// Taglines for randomization
const taglines = {
  'en': [
    "Bringing Rome's best comedians to perform for America's worst tourists.",
    "Bringing Rome's worst comedians to perform for America's worst tourists.",
    "Bringing America's worst comedians to perform for Rome's worst tourists.",
    "Bringing America's worst comedians to perform for Rome's best tourists."
  ],
  'it': [
    "Portiamo i migliori comici di Roma ad esibirsi per i peggiori turisti d'America.",
    "Portiamo i peggiori comici di Roma ad esibirsi per i peggiori turisti d'America.",
    "Portiamo i peggiori comici d'America ad esibirsi per i peggiori turisti di Roma.",
    "Portiamo i peggiori comici d'America ad esibirsi per i migliori turisti di Roma."
  ]
};

function randomizeTagline() {
  const taglineEl = document.getElementById('tagline');
  if (!taglineEl) return;

  const lang = document.documentElement.lang || 'en';
  const versions = taglines[lang] || taglines['en'];
  const randomIndex = Math.floor(Math.random() * versions.length);
  taglineEl.innerText = versions[randomIndex];
}

// Cookie Consent logic
document.addEventListener('DOMContentLoaded', () => {
  // 1. Randomize Tagline
  randomizeTagline();

  // 2. Cookie Consent
  const consent = localStorage.getItem('cookieConsent');
  const banner = document.getElementById('cookie-consent');
  if (!consent && banner) {
    banner.classList.add('visible');
  }
});

function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  const banner = document.getElementById('cookie-consent');
  if (banner) banner.classList.remove('visible');
}

function declineCookies() {
  localStorage.setItem('cookieConsent', 'declined');
  const banner = document.getElementById('cookie-consent');
  if (banner) banner.classList.remove('visible');
}
