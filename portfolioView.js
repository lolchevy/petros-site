/**
 * portfolioView.js - Petros Construction
 * Theme: Light Dodger Blue (#1E90FF) & Light Grey Gallery Layout
 * Features: Simple Image List + Pure Visual Grid + Interactive Lightbox Slider
 */

// TYPE OR PASTE YOUR EXACT PHOTO FILE PATHS HERE
const portfolioImages = [
  "assets/images/IMG_0215.jpg",
  "assets/images/IMG_0223.jpg",
  "assets/images/IMG_3103.jpg",
  "assets/images/IMG_3532.jpg",
  "assets/images/IMG_7505.jpg",
  "assets/images/IMG_5192.jpg",
  "assets/images/IMG_5191.jpg",
  "assets/images/IMG_5319.jpg",
  "assets/images/IMG_3126.jpg",
  "assets/images/IMG_3514.jpg",
  "assets/images/IMG_5197.jpg",
  "assets/images/IMG_5195.jpg",
  "assets/images/IMG_5461.jpg",
  "assets/images/IMG_5196.jpg",
  "assets/images/IMG_3080.jpg",
  "assets/images/IMG_2893.jpg",
  "assets/images/IMG_5319.jpg",
  "assets/images/IMG_5201.jpg",
  "assets/images/IMG_5200.jpg",
  "assets/images/IMG_5429.jpg",
  "assets/images/IMG_2728.jpg",
  "assets/images/project1.jpg",
  "assets/images/IMG_5460.jpg",
  "assets/images/IMG_5318.jpg",
  "assets/images/IMG_4032.jpg",
  "assets/images/IMG_3022.jpg",
  "assets/images/IMG_2882.jpg",
  "assets/images/IMG_2853.jpg",
  "assets/images/IMG_5316.jpg",
  "assets/images/IMG_5198.jpg",
  "assets/images/IMG_5176.jpg",
  "assets/images/IMG_5462.jpg",
  "assets/images/IMG_5189.jpg"
  // Add as many file paths as you want here!
];

// Active Lightbox Index Tracking
let currentLightboxIndex = 0;

function renderPortfolioView() {
  const imageCardsHtml = portfolioImages.map((imgPath, index) => `
    <div 
      onclick="window.openLightbox(${index})"
      class="group relative h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden bg-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200/80"
    >
      <img 
        src="${imgPath}" 
        onerror="this.onerror=null; this.src='https://picsum.photos/seed/construction${index + 1}/1200/800';"
        alt="Petros Construction Project ${index + 1}" 
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />
    </div>
  `).join('');

  return `
    <div class="w-full bg-gray-50 text-gray-800 min-h-screen">
      
      <!-- MAIN PAGE CONTENT (CLEAN HEADER WITHOUT BLUE BANNER) -->
      <section class="pt-10 sm:pt-16 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <!-- CLEAN CENTERED TITLE HEADER -->
          <div class="text-center max-w-3xl mx-auto space-y-3">
            <h1 class="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
              Project Gallery
            </h1>
            <p class="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Explore our portfolio of commercial builds, concrete foundations, structural concrete additions, and precision masonry projects.
            </p>
          </div>

          <!-- PURE VISUAL GRID -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            ${imageCardsHtml}
          </div>

        </div>
      </section>

      <!-- LIGHTBOX FULL-SCREEN INTERACTIVE MODAL OVERLAY -->
      <div 
        id="portfolioLightbox" 
        onclick="window.handleLightboxBackgroundClick(event)"
        class="fixed inset-0 z-50 hidden flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md transition-opacity duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox"
      >
        <!-- Close Button (X) -->
        <button 
          type="button" 
          onclick="window.closeLightbox()" 
          class="absolute top-5 right-5 text-white/80 hover:text-dodgerblue text-3xl font-bold transition-colors z-50 p-2"
          aria-label="Close Lightbox"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>

        <!-- Previous Photo Button (Left) -->
        <button 
          type="button" 
          onclick="window.navigateLightbox(-1, event)" 
          class="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-blue-950/70 hover:bg-dodgerblue text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-50 border border-white/20"
          aria-label="Previous Image"
        >
          <i class="fa-solid fa-chevron-left text-lg"></i>
        </button>

        <!-- Next Photo Button (Right) -->
        <button 
          type="button" 
          onclick="window.navigateLightbox(1, event)" 
          class="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-blue-950/70 hover:bg-dodgerblue text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all z-50 border border-white/20"
          aria-label="Next Image"
        >
          <i class="fa-solid fa-chevron-right text-lg"></i>
        </button>

        <!-- Active Large Image Display Frame -->
        <div class="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center">
          <img 
            id="lightboxImage" 
            src="" 
            alt="Expanded Construction Project" 
            class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
          />
          <div id="lightboxCounter" class="mt-4 text-white/80 text-xs font-semibold uppercase tracking-widest bg-blue-950/80 px-4 py-1.5 rounded-full border border-white/10">
            Image 1 of ${portfolioImages.length}
          </div>
        </div>
      </div>

    </div>
  `;
}

// Global window registration for SPA router access
window.renderPortfolioView = renderPortfolioView;

// LIGHTBOX LOGIC & CONTROLLERS
window.openLightbox = function (index) {
  if (portfolioImages.length === 0) return;

  currentLightboxIndex = index;
  const modal = document.getElementById('portfolioLightbox');
  const imgElem = document.getElementById('lightboxImage');
  const counterElem = document.getElementById('lightboxCounter');

  if (modal && imgElem) {
    const targetSrc = portfolioImages[currentLightboxIndex];
    
    imgElem.src = targetSrc;
    imgElem.onerror = function() {
      this.onerror = null;
      this.src = `https://picsum.photos/seed/construction${currentLightboxIndex + 1}/1200/800`;
    };

    if (counterElem) {
      counterElem.textContent = `Image ${currentLightboxIndex + 1} of ${portfolioImages.length}`;
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }
};

window.closeLightbox = function () {
  const modal = document.getElementById('portfolioLightbox');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore background scroll
  }
};

window.navigateLightbox = function (direction, event) {
  if (event) event.stopPropagation();
  if (portfolioImages.length === 0) return;

  currentLightboxIndex = (currentLightboxIndex + direction + portfolioImages.length) % portfolioImages.length;
  window.openLightbox(currentLightboxIndex);
};

window.handleLightboxBackgroundClick = function (event) {
  if (event.target.id === 'portfolioLightbox') {
    window.closeLightbox();
  }
};

// Keyboard Arrow & Escape Key Controls
window.addEventListener('keydown', (e) => {
  const modal = document.getElementById('portfolioLightbox');
  if (modal && !modal.classList.contains('hidden')) {
    if (e.key === 'Escape') {
      window.closeLightbox();
    } else if (e.key === 'ArrowRight') {
      window.navigateLightbox(1);
    } else if (e.key === 'ArrowLeft') {
      window.navigateLightbox(-1);
    }
  }
});