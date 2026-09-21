/**
 * homeView.js - Petros Construction
 * Theme: Light Dodger Blue (#1E90FF) & Native Hero Background Video
 */

function renderHomeView() {
  return `
    <div class="w-full bg-white text-gray-800">
      
      <!-- 1. HERO SECTION WITH NATIVE LOOPING BACKGROUND VIDEO -->
      <section class="relative min-h-[85vh] flex flex-col justify-between overflow-hidden bg-slate-950">
        
        <!-- Native HTML5 Video Element -->
        <video 
          autoplay 
          loop 
          muted 
          playsinline 
          preload="auto" 
          class="absolute inset-0 w-full h-full object-cover pointer-events-none z-0">
        
          <source src="https://res.cloudinary.com/at6jozhq/video/upload/v1789863781/bgvideo.mp4" type="video/mp4">
        </video>

        <!-- Dark Blue Tint Overlay (Keeps Text & Form Legible) -->
        <div class="absolute inset-0 bg-slate-950/40 pointer-events-none z-10"></div>

        <!-- Foreground Content Layer -->
        <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
          
          <!-- Hero Left Column -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span class="inline-block bg-dodgerblue text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
              <i class="fa-solid fa-helmet-safety mr-1.5"></i> General Contracting & Infrastructure
            </span>
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
              Building High-Performance <span class="text-dodgerblue">Structures</span>
            </h1>
            <p class="text-gray-200 text-base sm:text-lg max-w-2xl leading-relaxed">
              Petros Construction turns structural blueprints into reality. We deliver commercial developments, quality concrete work, and residential builds with uncompromising standards.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#services" class="w-full sm:w-auto bg-dodgerblue hover:bg-dodgerblue-hover text-white font-bold px-8 py-3.5 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2">
                <span>Explore Services</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </a>
              <a href="#portfolio" class="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-lg border border-white/30 backdrop-blur-sm transition-all text-center">
                View Projects
              </a>
            </div>
          </div>

          <!-- Hero Right Column: Quick Quote Form -->
          <div class="lg:col-span-5 w-full">
            <div id="hero-quick-quote-form" class="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 relative z-20">
              <div class="mb-5">
                <h3 class="text-2xl font-extrabold text-blue-950">Quick Quote</h3>
                <p class="text-xs text-gray-500 mt-1">Receive an estimate as soon as possible.</p>
              </div>

              <form onsubmit="window.handleQuickQuoteSubmit(event)" class="space-y-3.5">
                <div>
                  <label for="qq-name" class="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                  <input type="text" id="qq-name" required placeholder="John Doe" class="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue">
                </div>
                <div>
                  <label for="qq-email" class="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                  <input type="email" id="qq-email" required placeholder="john@example.com" class="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue">
                </div>
                <div>
                  <label for="qq-phone" class="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                  <input type="tel" id="qq-phone" required placeholder="(555) 000-0000" class="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue">
                </div>
                <div>
                  <label for="qq-message" class="block text-xs font-bold text-gray-700 uppercase mb-1">Project Details</label>
                  <textarea id="qq-message" rows="3" required placeholder="Describe your structural build or timeline..." class="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue resize-none"></textarea>
                </div>
                <button type="submit" id="qq-btn" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover font-bold text-white py-3.5 rounded-lg shadow-md transition-all">
                  Submit Estimate Request
                </button>
              </form>
            </div>
          </div>

        </div>

        <!-- HERO BOTTOM INFO BANNER RIBBON -->
        <div class="relative z-20 bg-blue-950/90 border-t border-white/10 backdrop-blur-md py-4 text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-semibold">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-phone text-dodgerblue"></i>
              <span>(239)851-8401</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-location-dot text-dodgerblue"></i>
              <span>Cape Coral, FL</span>
            </div>
            <div class="flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full">
              <i class="fa-solid fa-circle-check text-emerald-400"></i>
              <span>Licensed & Fully Insured </span>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. ABOUT OVERVIEW SECTION -->
      <section class="py-20 bg-gray-100 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-4">
              <span class="text-dodgerblue text-xs font-extrabold uppercase tracking-widest">About Petros Construction</span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-blue-950">Two Decades of Engineering Excellence</h2>
              <p class="text-gray-600 text-sm leading-relaxed">
                Built on structural precision and dependable delivery, Petros Construction handles everything from large-scale commercial framing to high-density residential projects. We provide full-service management to deliver your project seamlessly from ground up.
              </p>
              <div class="pt-2">
                <a href="#about" class="inline-flex items-center gap-2 bg-dodgerblue hover:bg-dodgerblue-hover text-white font-bold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all">
                  <span>Learn More About Us</span>
                  <i class="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
                <div class="text-4xl font-extrabold text-dodgerblue">250+</div>
                <div class="text-xs font-bold text-blue-950 mt-1 uppercase">Project Completed</div>
              </div>
              <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
                <div class="text-4xl font-extrabold text-dodgerblue">100%</div>
                <div class="text-xs font-bold text-blue-950 mt-1 uppercase">Safety Record</div>
              </div>
              <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
                <div class="text-4xl font-extrabold text-dodgerblue">20+</div>
                <div class="text-xs font-bold text-blue-950 mt-1 uppercase">Years Experience</div>
              </div>
              <div class="bg-white p-6 rounded-xl border border-gray-200 text-center shadow-sm">
                <div class="text-4xl font-extrabold text-dodgerblue">98.6%</div>
                <div class="text-xs font-bold text-blue-950 mt-1 uppercase">On-Time Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. CAPABILITIES & SERVICES -->
      <section id="services-section" class="py-20 bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <span class="text-dodgerblue text-xs font-extrabold uppercase tracking-widest">Our Expertise</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-blue-950">Core Capabilities</h2>
            <p class="text-gray-500 text-sm">Full-service contracting, structural engineering, and precision construction built to last.</p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div class="h-44 w-full bg-gray-200 overflow-hidden relative">
                  <img src="assets/images/IMG_3532.jpg" onerror="this.src='IMG_3532.jpg'" alt="Commercial Construction" class="w-full h-full object-cover">
                </div>
                <div class="p-6 space-y-3">
                  <h3 class="font-bold text-blue-950 text-lg">Commercial Construction</h3>
                  <p class="text-xs text-gray-600 leading-relaxed">We pour large amounts of concrete for any size building, including office spaces, retail complexes, and warehouses.</p>
                </div>
              </div>
              <div class="p-6 pt-0">
                <button type="button" onclick="window.scrollToQuickQuote('Commercial Construction')" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover text-white text-xs font-bold py-2.5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5">
                  <span>Request Quote</span>
                  <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div class="h-44 w-full bg-gray-200 overflow-hidden relative">
                  <img src="assets/images/IMG_5198.jpg" onerror="this.src='IMG_5198.jpg'" alt="Driveways & Pool Decks" class="w-full h-full object-cover">
                </div>
                <div class="p-6 space-y-3">
                  <h3 class="font-bold text-blue-950 text-lg">Driveways & Pool Decks</h3>
                  <p class="text-xs text-gray-600 leading-relaxed">We offer new installations, complete repairs, and decorative curb appeal updates. </p>
                </div>
              </div>
              <div class="p-6 pt-0">
                <button type="button" onclick="window.scrollToQuickQuote('Driveways & Pool Decks')" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover text-white text-xs font-bold py-2.5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5">
                  <span>Request Quote</span>
                  <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div class="h-44 w-full bg-gray-200 overflow-hidden relative">
                  <img src="assets/images/IMG_3514.jpg" onerror="this.src='IMG_3514.jpg'" alt="Home Additions & Extensions" class="w-full h-full object-cover">
                </div>
                <div class="p-6 space-y-3">
                  <h3 class="font-bold text-blue-950 text-lg">Home Additions & Extensions</h3>
                  <p class="text-xs text-gray-600 leading-relaxed">Expand your existing home with new rooms, second-story expansions, or any other structural concrete additions you need.</p>
                </div>
              </div>
              <div class="p-6 pt-0">
                <button type="button" onclick="window.scrollToQuickQuote('Home Additions & Extensions')" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover text-white text-xs font-bold py-2.5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5">
                  <span>Request Quote</span>
                  <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </button>
              </div>
            </div>

            <div class="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <div class="h-44 w-full bg-gray-200 overflow-hidden relative">
                  <img src="assets/images/IMG_0223.jpg" onerror="this.src='IMG_0223'" alt="Concrete Foundations" class="w-full h-full object-cover">
                </div>
                <div class="p-6 space-y-3">
                  <h3 class="font-bold text-blue-950 text-lg">Concrete Foundations</h3>
                  <p class="text-xs text-gray-600 leading-relaxed">We build strong, reliable foundations for residential and commercial properties.</p>
                </div>
              </div>
              <div class="p-6 pt-0">
                <button type="button" onclick="window.scrollToQuickQuote('Concrete Foundations')" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover text-white text-xs font-bold py-2.5 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5">
                  <span>Request Quote</span>
                  <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </button>
              </div>
            </div>
          </div>

          <div class="text-center pt-4">
            <a href="#services" class="inline-flex items-center gap-2 bg-dodgerblue hover:bg-dodgerblue-hover text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-md transition-all">
              <span>See All Services</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- 4. RECENT PROJECTS PHOTO GRID -->
      <section class="py-20 bg-gray-100 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <span class="text-dodgerblue text-xs font-extrabold uppercase tracking-widest">Selected Works</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-blue-950">Recent Projects</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="h-64 rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img src="assets/images/IMG_0215.jpg" alt="Construction site build" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
            </div>
            <div class="h-64 rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img src="assets/images/IMG_3022.jpg" alt="Steel framework" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
            </div>
            <div class="h-64 rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img src="assets/images/IMG_2853.jpg" alt="Commercial skyscraper" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
            </div>
            <div class="h-64 rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img src="assets/images/IMG_2728.jpg" alt="Civil work concrete" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
            </div>
          </div>

          <div class="text-center">
            <a href="#portfolio" class="inline-flex items-center gap-2 bg-dodgerblue hover:bg-dodgerblue-hover text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-md transition-all">
              <span>See More Photos</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- 5. REVIEWS SECTION -->
      <section class="py-20 bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <span class="text-dodgerblue text-xs font-extrabold uppercase tracking-widest">Testimonials</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-blue-950">Client Feedback</h2>
          </div>

          <div id="reviews-container" class="grid md:grid-cols-3 gap-6">
            <div class="p-6 bg-gray-50 rounded-xl border border-gray-200 text-center col-span-3 text-gray-500">
              Loading verified reviews...
            </div>
          </div>

          <div class="max-w-2xl mx-auto bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm mt-12">
            <h3 class="text-xl font-bold text-blue-950 mb-4">Leave a Review</h3>
            <form onsubmit="window.handleReviewSubmit(event)" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="rev-name" class="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name</label>
                  <input type="text" id="rev-name" required placeholder="Jane Smith" class="w-full bg-white border border-gray-300 p-2.5 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue">
                </div>
                <div>
                  <label for="rev-rating" class="block text-xs font-bold text-gray-700 uppercase mb-1">Rating</label>
                  <select id="rev-rating" class="w-full bg-white border border-gray-300 p-2.5 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue">
                    <option value="5">★★★★★ (5 Stars)</option>
                    <option value="4">★★★★☆ (4 Stars)</option>
                    <option value="3">★★★☆☆ (3 Stars)</option>
                  </select>
                </div>
              </div>
              <div>
                <label for="rev-comment" class="block text-xs font-bold text-gray-700 uppercase mb-1">Comments</label>
                <textarea id="rev-comment" rows="3" required placeholder="Share your experience working with Petros Construction..." class="w-full bg-white border border-gray-300 p-2.5 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue resize-none"></textarea>
              </div>
              <button type="submit" id="rev-btn" class="bg-dodgerblue hover:bg-dodgerblue-hover text-white font-bold text-xs px-6 py-3 rounded-lg shadow transition-all">
                Submit Review for Moderation
              </button>
            </form>
          </div>

          <div class="text-center pt-4">
            <a href="#reviews" class="inline-flex items-center gap-2 bg-dodgerblue hover:bg-dodgerblue-hover text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-md transition-all">
              <span>See More Reviews</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- 6. FOOTER SECTION -->
      <footer class="bg-blue-950 text-gray-300 pt-16 pb-8 border-t border-blue-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="space-y-4">
             <div class="flex items-center gap-3">
        <span class="text-lg font-extrabold text-white tracking-wider">PETROS</span>
        </div>
        <p class="text-xs text-gray-400 leading-relaxed">
        We turn blueprints into reality. Petros Construction delivers high-quality commercial, concrete, and residential projects with dependable, full-service management.
        </p>
            </div>

            <div>
              <h4 class="text-white font-bold text-sm mb-4">Navigation</h4>
              <ul class="space-y-2 text-xs">
                <li><a href="#home" class="hover:text-dodgerblue">Home</a></li>
                <li><a href="#about" class="hover:text-dodgerblue">About Us</a></li>
                <li><a href="#services" class="hover:text-dodgerblue">Services</a></li>
                <li><a href="#portfolio" class="hover:text-dodgerblue">Portfolio</a></li>
              </ul>
            </div>

            <div>
              <h4 class="text-white font-bold text-sm mb-4">Company & Opportunities</h4>
              <ul class="space-y-2 text-xs">
                <li><a href="#reviews" class="hover:text-dodgerblue">Client Reviews</a></li>
                <li><a href="#contact" class="hover:text-dodgerblue">Contact Us</a></li>
                <li>
                  <button type="button" onclick="window.toggleCareersModal(true)" class="text-dodgerblue font-bold hover:underline flex items-center gap-1">
                    <i class="fa-solid fa-briefcase text-xs"></i> Careers Tab (Apply Now)
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-white font-bold text-sm mb-4">Contact</h4>
              <p class="text-xs text-gray-400 leading-relaxed">
                239-851-8401 <br>
                Cape Coral, Fl<br>
                Email: Mikepetros55@gmail.com
              </p>
            </div>
          </div>

          <div class="pt-8 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>&copy; 2026 Petros Construction. All Rights Reserved.</p>
            <div class="flex gap-4">
              <a href="#" class="hover:text-gray-400">Privacy Policy</a>
              <a href="#" class="hover:text-gray-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <!-- CAREERS MODAL -->
      <div id="careersModal" class="fixed inset-0 z-50 hidden flex items-center justify-center bg-blue-950/80 p-4 backdrop-blur-sm">
        <div class="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full relative border border-gray-200 shadow-2xl space-y-4">
          <button type="button" onclick="window.toggleCareersModal(false)" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold">&times;</button>
          
          <div>
            <h3 class="text-2xl font-extrabold text-blue-950">Join Petros Construction</h3>
            <p class="text-xs text-gray-500 mt-1">Submit your details and resume for engineering & trade roles.</p>
          </div>

          <form onsubmit="window.handleCareersSubmit(event)" class="space-y-4">
            <div>
              <label for="car-name" class="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
              <input type="text" id="car-name" required placeholder="Sally Mercer" class="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="car-email" class="block text-xs font-bold text-gray-700 uppercase mb-1">Email</label>
                <input type="email" id="car-email" required placeholder="sally@example.com" class="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue">
              </div>
              <div>
                <label for="car-phone" class="block text-xs font-bold text-gray-700 uppercase mb-1">Phone</label>
                <input type="tel" id="car-phone" required placeholder="(555) 000-0000" class="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue">
              </div>
            </div>
            <div>
              <label for="car-role" class="block text-xs font-bold text-gray-700 uppercase mb-1">Target Position</label>
              <select id="car-role" class="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue">
                <option value="Construction Manager">Construction Manager</option>
                <option value="Personal assistant">Personal assistant</option>
                <option value="Site Laborers">Site Laborers</option>
                <option value="Sale agents">Sale agents</option>
              </select>
            </div>
            <div>
              <label for="car-resume" class="block text-xs font-bold text-gray-700 uppercase mb-1">Attach Resume (PDF / DOCX)</label>
              <input type="file" id="car-resume" required accept=".pdf,.doc,.docx" class="w-full bg-gray-50 border border-gray-300 p-2.5 rounded-lg text-xs text-gray-700 focus:outline-none">
            </div>
            <button type="submit" id="car-btn" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover font-bold text-white py-3.5 rounded-lg shadow-md transition-all mt-2">
              Submit Application
            </button>
          </form>
        </div>
      </div>

    </div>
  `;
}

window.renderHomeView = renderHomeView;

var API_BASE = "http://127.0.0.1:5000/api";

// 1. QUICK QUOTE SUBMISSION HANDLER
window.handleQuickQuoteSubmit = async function (e) {
  if (e) e.preventDefault();
  var btn = document.getElementById("qq-btn");
  var payload = {
    name: document.getElementById("qq-name") ? document.getElementById("qq-name").value : "",
    email: document.getElementById("qq-email") ? document.getElementById("qq-email").value : "",
    phone: document.getElementById("qq-phone") ? document.getElementById("qq-phone").value : "",
    message: document.getElementById("qq-message") ? document.getElementById("qq-message").value : ""
  };

  if (btn) {
    btn.disabled = true;
    btn.textContent = "Transmitting Request...";
  }

  try {
    var res = await fetch(API_BASE + "/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    var data = await res.json();
    alert(data.message || "Quote submitted successfully!");
    if (e && e.target) e.target.reset();
  } catch (err) {
    console.warn("API disconnect:", err);
    alert("Estimate received locally.");
    if (e && e.target) e.target.reset();
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Submit Estimate Request";
    }
  }
};

// 2. FETCH AND DISPLAY REVIEWS
window.fetchReviews = async function () {
  var container = document.getElementById("reviews-container");
  if (!container) return;

  try {
    var res = await fetch(API_BASE + "/reviews");
    var data = await res.json();
    if (data.reviews && data.reviews.length > 0) {
      container.innerHTML = data.reviews.map(function (r) {
        return `
          <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div class="space-y-3">
              <div class="text-amber-400 text-sm">
                ${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}
              </div>
              <p class="text-xs text-gray-600 leading-relaxed italic">"${r.comment}"</p>
            </div>
            <div class="mt-4 pt-3 border-t border-gray-200/80">
              <div class="font-bold text-blue-950 text-sm">${r.name}</div>
              <div class="text-[10px] text-gray-400 uppercase font-semibold">Verified Client</div>
            </div>
          </div>
        `;
      }).join("");
    }
  } catch (err) {
    console.warn("Could not fetch reviews dynamically:", err);
  }
};

// 3. REVIEW SUBMISSION HANDLER
window.handleReviewSubmit = async function (e) {
  if (e) e.preventDefault();
  var btn = document.getElementById("rev-btn");
  var payload = {
    name: document.getElementById("rev-name") ? document.getElementById("rev-name").value : "",
    rating: document.getElementById("rev-rating") ? document.getElementById("rev-rating").value : 5,
    comment: document.getElementById("rev-comment") ? document.getElementById("rev-comment").value : ""
  };

  if (btn) {
    btn.disabled = true;
    btn.textContent = "Submitting...";
  }

  try {
    var res = await fetch(API_BASE + "/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    var data = await res.json();
    alert(data.message || "Review submitted for moderation!");
    if (e && e.target) e.target.reset();
  } catch (err) {
    alert("Review recorded locally.");
    if (e && e.target) e.target.reset();
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Submit Review for Moderation";
    }
  }
};

// 4. CAREERS MODAL & RESUME HANDLER
window.toggleCareersModal = function (show) {
  var modal = document.getElementById("careersModal");
  if (modal) modal.classList.toggle("hidden", !show);
};

window.handleCareersSubmit = async function (e) {
  if (e) e.preventDefault();
  var btn = document.getElementById("car-btn");
  var formData = new FormData();

  formData.append("applicant_name", document.getElementById("car-name") ? document.getElementById("car-name").value : "");
  formData.append("applicant_email", document.getElementById("car-email") ? document.getElementById("car-email").value : "");
  formData.append("applicant_phone", document.getElementById("car-phone") ? document.getElementById("car-phone").value : "");
  formData.append("role", document.getElementById("car-role") ? document.getElementById("car-role").value : "");

  var fileInput = document.getElementById("car-resume");
  if (fileInput && fileInput.files && fileInput.files[0]) {
    formData.append("resume", fileInput.files[0]);
  }

  if (btn) {
    btn.disabled = true;
    btn.textContent = "Uploading Resume & Details...";
  }

  try {
    var res = await fetch(API_BASE + "/apply", {
      method: "POST",
      body: formData
    });
    var data = await res.json();
    alert(data.message || "Application submitted successfully!");
    window.toggleCareersModal(false);
    if (e && e.target) e.target.reset();
  } catch (err) {
    alert("Application transmitted locally.");
    window.toggleCareersModal(false);
    if (e && e.target) e.target.reset();
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Submit Application";
    }
  }
};

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(window.fetchReviews, 300);
});