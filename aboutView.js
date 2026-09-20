/**
 * aboutView.js - Petros Construction
 * Refined Two-Column Personal Profile Layout (Light Dodger Blue & Light Grey Theme)
 */

function renderAboutView() {
  return `
    <div class="w-full bg-white text-gray-800">
      
      <!-- MAIN TWO-COLUMN PERSONAL & COMPANY STORY SECTION -->
      <section class="py-12 sm:py-20 bg-gray-50 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <!-- LEFT COLUMN: PERSONAL PORTRAIT & FRAMING -->
            <div class="lg:col-span-6 relative">
              <div class="relative mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-200 ring-1 ring-gray-200 group">
                <img
                  src="assets/images/IMG_6318.jpg"
                  alt="Petros Construction Executive Leadership"
                  class="w-full h-[420px] sm:h-[520px] object-cover object-[center_38%] group-hover:scale-105 transition-transform duration-500"
                >
                <!-- Subtle Gradient Accent at Base -->
                <div class="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              <!-- Floating Experience Badge -->
              <div class="absolute -bottom-6 -right-2 sm:bottom-6 sm:right-6 bg-white p-4 sm:p-5 rounded-xl shadow-xl border border-gray-200 flex items-center gap-4">
                <div class="w-12 h-12 rounded-lg bg-blue-100 text-dodgerblue flex items-center justify-center text-2xl font-black">
                  <i class="fa-solid fa-award"></i>
                </div>
                <div>
                  <div class="text-2xl font-extrabold text-blue-950 leading-none">20+ Years</div>
                  <div class="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">Quality Workmanship</div>
                </div>
              </div>
            </div>

            <!-- RIGHT COLUMN: COMPANY STORY & NARRATIVE -->
            <div class="lg:col-span-6 space-y-6">
              
              <div class="space-y-2">
                <span class="text-dodgerblue text-xs sm:text-sm font-extrabold uppercase tracking-widest block">
                  WHO WE ARE
                </span>
                <h1 class="text-3xl sm:text-4xl font-extrabold text-blue-950 leading-tight">
                  Building with Precision, Integrity, and Excellence
                </h1>
              </div>

              <div class="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                 Built on structural precision and dependable delivery, Petros Construction handles everything from large-scale commercial framing to high-density residential projects. We provide full-service management to deliver your project seamlessly from ground up.
                </p>
                <p>
                  Our dedicated team oversees every build with a focus on durability, safety, and clear communication. Whether we are framing a new commercial complex, installing a luxury driveway, or handling a custom home renovation, we prioritize structural integrity, financial transparency, and staying on schedule.
                </p>
              </div>

              <!-- INTEGRATED CORE VALUES LIST -->
              <div class="pt-4 border-t border-gray-200/80 space-y-3">
                <h2 class="text-sm font-bold text-blue-950 uppercase tracking-wider mb-2">Our Operating Pillars</h2>
                
                <div class="grid sm:grid-cols-1 gap-3 text-xs sm:text-sm text-gray-700">
                  <div class="flex items-start gap-3">
                    <div class="mt-0.5 text-dodgerblue text-base">
                      <i class="fa-solid fa-bullseye"></i>
                    </div>
                    <div>
                      <strong class="text-blue-950 font-bold">Our Mission:</strong> Deliver exceptional commercial and structural projects on time with zero compromises on safety.
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <div class="mt-0.5 text-dodgerblue text-base">
                      <i class="fa-solid fa-eye"></i>
                    </div>
                    <div>
                      <strong class="text-blue-950 font-bold">Our Vision:</strong> Lead the local construction sector through dependable engineering, quality craftsmanship, and client trust.
                    </div>
                  </div>

                  <div class="flex items-start gap-3">
                    <div class="mt-0.5 text-emerald-500 text-base">
                      <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <div>
                      <strong class="text-blue-950 font-bold">Safety Compliance:</strong> Maintaining zero-incident record across active jobsites.
                    </div>
                  </div>
                </div>
              </div>

              <!-- CALL-TO-ACTION BUTTON -->
              <div class="pt-6">
                <a 
                  href="#services" 
                  class="inline-flex items-center justify-center gap-2.5 bg-dodgerblue hover:bg-dodgerblue-hover text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
                >
                  <span>Explore Services</span>
                  <i class="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- METRICS & CAPABILITIES RIBBON -->
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div class="p-6 rounded-xl bg-gray-50 border border-gray-200/80">
              <div class="text-3xl sm:text-4xl font-extrabold text-dodgerblue">250+</div>
              <div class="text-xs font-bold text-blue-950 mt-1 uppercase tracking-wider">Projects Completed</div>
            </div>

            <div class="p-6 rounded-xl bg-gray-50 border border-gray-200/80">
              <div class="text-3xl sm:text-4xl font-extrabold text-dodgerblue">100%</div>
              <div class="text-xs font-bold text-blue-950 mt-1 uppercase tracking-wider">Safety Record</div>
            </div>

            <div class="p-6 rounded-xl bg-gray-50 border border-gray-200/80">
              <div class="text-3xl sm:text-4xl font-extrabold text-dodgerblue">98.6%</div>
              <div class="text-xs font-bold text-blue-950 mt-1 uppercase tracking-wider">On-Time Projects</div>
            </div>

            <div class="p-6 rounded-xl bg-gray-50 border border-gray-200/80">
              <div class="text-3xl sm:text-4xl font-extrabold text-dodgerblue">Free</div>
              <div class="text-xs font-bold text-blue-950 mt-1 uppercase tracking-wider">Project Estimates</div>
            </div>

          </div>
        </div>
      </section>

    </div>
  `;
}

// Attach function to global window scope for SPA router access
window.renderAboutView = renderAboutView;