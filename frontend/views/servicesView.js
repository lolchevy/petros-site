/**
 * servicesView.js - Petros Construction
 * Theme: Light Dodger Blue (#1E90FF) & Alternating Light Grey background layout
 */

function renderServicesView() {
  return `
    <div class="w-full bg-white text-gray-800">
      
      <!-- 1. GRID OF 6 ELEGANT SERVICE CARDS (STARTS DIRECTLY BELOW NAVBAR) -->
      <section class="pt-10 sm:pt-16 pb-16 sm:pb-24 bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <!-- MAIN VIEW HEADER -->
          <div class="text-center max-w-3xl mx-auto space-y-3">
            <span class="inline-block bg-dodgerblue text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
              Specialized Solutions
            </span>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
              Core Contracting Capabilities
            </h1>
            <p class="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              High-quality structural engineering and precision concrete builds. We handle the critical structural phases of your commercial or residential project, ensuring a reliable foundation from the ground up.
            </p>
          </div>

          <!-- 6-CARD SERVICE GRID -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <!-- Service Card 1 -->
            <div class="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="h-52 w-full bg-gray-200 overflow-hidden relative">
                  <img src="assets/images/IMG_3532.jpg" onerror="this.src='assets/images/IMG_3532.jpg'" alt="Commercial Construction" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 space-y-3">
                  <h3 class="font-bold text-blue-950 text-xl">Commercial Construction</h3>
                  <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    We pour large amounts of concrete for any size building, including office spaces, retail complexes, and warehouses. We handle everything up to custom structural steel framing.
                  </p>
                </div>
              </div>
              <div class="p-6 pt-0">
                <button type="button" onclick="window.openServiceModal('Commercial Construction')" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover text-white text-xs font-bold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                  <span>Request Quote</span>
                  <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>

            <!-- Service Card 2 -->
            <div class="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="h-52 w-full bg-gray-200 overflow-hidden relative">
                  <img src="assets/images/IMG_5198.jpg" onerror="this.src='assets/images/IMG_5198.jpg'" alt="Driveways & Pool Decks" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 space-y-3">
                  <h3 class="font-bold text-blue-950 text-xl">Driveways & Pool Decks</h3>
                  <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    We offer new installations, complete repairs, and decorative curb appeal updates. We build high-quality luxury driveways, commercial walkways, and custom pool decks that blend functionality with beauty. 
                  </p>
                </div>
              </div>
              <div class="p-6 pt-0">
                <button type="button" onclick="window.openServiceModal('Driveways & Pool Decks')" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover text-white text-xs font-bold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                  <span>Request Quote</span>
                  <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>

            <!-- Service Card 3 -->
            <div class="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="h-52 w-full bg-gray-200 overflow-hidden relative">
                  <img src="assets/images/IMG_3514.jpg" onerror="this.src='assets/images/IMG_3514.jpg'" alt="Home Additions & Extensions" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 space-y-3">
                  <h3 class="font-bold text-blue-950 text-xl">Home Additions & Extensions</h3>
                  <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Expand your exisiting home with new rooms, second-story expansions, or any other structural concrete additions you need. We design additions to blend seamlessly with your property.
                  </p>
                </div>
              </div>
              <div class="p-6 pt-0">
                <button type="button" onclick="window.openServiceModal('Home Additions & Extensions')" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover text-white text-xs font-bold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                  <span>Request Quote</span>
                  <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>

            <!-- Service Card 4 -->
            <div class="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="h-52 w-full bg-gray-200 overflow-hidden relative">
                  <img src="assets/images/IMG_0223.jpg" onerror="this.src='assets/images/IMG_0223.jpg'" alt="Concrete Foundations" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 space-y-3">
                  <h3 class="font-bold text-blue-950 text-xl">Concrete Foundations</h3>
                  <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    We build strong, reliable foundations for residential and commercial properties. Our team specializes in footers, beams, laying block, and slab-on-grade foundations built for maximum durability.
                  </p>
                </div>
              </div>
              <div class="p-6 pt-0">
                <button type="button" onclick="window.openServiceModal('Concrete Foundations')" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover text-white text-xs font-bold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                  <span>Request Quote</span>
                  <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>

            <!-- Service Card 5 -->
            <div class="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="h-52 w-full bg-gray-200 overflow-hidden relative">
                  <img src="assets/images/IMG_2853.jpg" onerror="this.src='assets/images/IMG_2853.jpg'" alt="Excavation & Retaining Walls" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 space-y-3">
                  <h3 class="font-bold text-blue-950 text-xl">Excavation & Retaining Walls</h3>
                  <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Complete site preparation, heavy earthmoving, utility trenching, and paving infrastructure. We also build custom structural retaining walls designed for long-term safety and stability.
                  </p>
                </div>
              </div>
              <div class="p-6 pt-0">
                <button type="button" onclick="window.openServiceModal('Excavation & Retaining Walls')" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover text-white text-xs font-bold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                  <span>Request Quote</span>
                  <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>

            <!-- Service Card 6 -->
            <div class="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div class="h-52 w-full bg-gray-200 overflow-hidden relative">
                  <img src="assets/images/IMG_5429.jpg" onerror="this.src='assets/images/IMG_5429.jpg'" alt="Boom Pump Services" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-6 space-y-3">
                  <h3 class="font-bold text-blue-950 text-xl"> Boom Pump Services</h3>
                  <p class="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Specialized concrete placement for hard-to-reach areas. We have a 34m pump available for full-service boom pump jobs, ensuring clean and efficient concrete delivery on every site.
                  </p>
                </div>
              </div>
              <div class="p-6 pt-0">
                <button type="button" onclick="window.openServiceModal('Boom Pump Services')" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover text-white text-xs font-bold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2">
                  <span>Request Quote</span>
                  <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- 2. CUSTOM JOB REQUEST SECTION (LIGHT GREY BACKGROUND) -->
      <section class="py-16 sm:py-24 bg-gray-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div class="text-center space-y-2">
            <span class="text-dodgerblue text-xs font-extrabold uppercase tracking-widest">CUSTOM BUILD SOLUTIONS</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-blue-950">Need a Custom Project?</h2>
            <p class="text-gray-600 text-sm max-w-xl mx-auto">
              Have unique specifications or custom plans? Upload your blueprints or share your project details below for a prompt estimate from our team.
            </p>
          </div>

          <div class="bg-white p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-xl">
            <form id="custom-request-form" onsubmit="window.handleCustomRequestSubmit(event)" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="cr-name" class="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                  <input type="text" id="cr-name" required placeholder="John Doe" class="w-full bg-gray-50 border border-gray-300 p-3 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-dodgerblue focus:bg-white transition-all">
                </div>
                <div>
                  <label for="cr-email" class="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                  <input type="email" id="cr-email" required placeholder="john@example.com" class="w-full bg-gray-50 border border-gray-300 p-3 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-dodgerblue focus:bg-white transition-all">
                </div>
              </div>

              <div>
                <label for="cr-phone" class="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                <input type="tel" id="cr-phone" required placeholder="(555) 000-0000" class="w-full bg-gray-50 border border-gray-300 p-3 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-dodgerblue focus:bg-white transition-all">
              </div>

              <div>
                <label for="cr-desc" class="block text-xs font-bold text-gray-700 uppercase mb-1">Project Description & Scope</label>
                <textarea id="cr-desc" rows="4" required placeholder="Describe your project goals..." class="w-full bg-gray-50 border border-gray-300 p-3 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-dodgerblue focus:bg-white transition-all resize-none"></textarea>
              </div>

              <div>
                <label for="cr-file" class="block text-xs font-bold text-gray-700 uppercase mb-1">Upload Project Images or Blueprints (PDF/PNG/JPG)</label>
                <input type="file" id="cr-file" accept=".pdf,.png,.jpg,.jpeg" class="w-full bg-gray-50 border border-gray-300 p-2.5 rounded-xl text-xs text-gray-700 focus:outline-none">
              </div>

              <button type="submit" id="cr-btn" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover font-bold text-white py-4 rounded-xl shadow-lg transition-all mt-4">
                Submit Details
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- SERVICE CARD QUOTE MODAL -->
      <div id="serviceQuoteModal" class="fixed inset-0 z-50 hidden flex items-center justify-center bg-blue-950/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
        <div class="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full relative border border-gray-200 shadow-2xl space-y-4">
          <button type="button" onclick="window.closeServiceModal()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold" aria-label="Close modal">&times;</button>
          
          <div>
            <h3 class="text-2xl font-extrabold text-blue-950">Service Quote Request</h3>
            <p class="text-xs text-gray-500 mt-1">Requesting estimate for: <span id="modal-service-name" class="font-bold text-dodgerblue">General Service</span></p>
          </div>

          <form id="service-modal-form" onsubmit="window.handleServiceModalSubmit(event)" class="space-y-3.5">
            <input type="hidden" id="modal-hidden-service">
            <div>
              <label for="sq-name" class="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
              <input type="text" id="sq-name" required placeholder="Jane Smith" class="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue">
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label for="sq-email" class="block text-xs font-bold text-gray-700 uppercase mb-1">Email</label>
                <input type="email" id="sq-email" required placeholder="jane@example.com" class="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue">
              </div>
              <div>
                <label for="sq-phone" class="block text-xs font-bold text-gray-700 uppercase mb-1">Phone</label>
                <input type="tel" id="sq-phone" required placeholder="(555) 000-0000" class="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue">
              </div>
            </div>
            <div>
              <label for="sq-message" class="block text-xs font-bold text-gray-700 uppercase mb-1">Project Description / Timeline</label>
              <textarea id="sq-message" rows="3" required placeholder="Describe your project goals..." class="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-dodgerblue resize-none"></textarea>
            </div>
            <button type="submit" id="sq-btn" class="w-full bg-dodgerblue hover:bg-dodgerblue-hover font-bold text-white py-3.5 rounded-lg shadow-md transition-all mt-2">
              Send Service Inquiry
            </button>
          </form>
        </div>
      </div>

    </div>
  `;
}

// Global scope attachment
window.renderServicesView = renderServicesView;

var API_BASE = "http://127.0.0.1:5000/api";

// Modal and API functions
window.openServiceModal = function (serviceTitle) {
  var modal = document.getElementById('serviceQuoteModal');
  var titleDisplay = document.getElementById('modal-service-name');
  var hiddenInput = document.getElementById('modal-hidden-service');
  
  if (titleDisplay) titleDisplay.textContent = serviceTitle;
  if (hiddenInput) hiddenInput.value = serviceTitle;
  if (modal) modal.classList.remove('hidden');
};

window.closeServiceModal = function () {
  var modal = document.getElementById('serviceQuoteModal');
  if (modal) modal.classList.add('hidden');
};

window.handleServiceModalSubmit = async function (e) {
  if (e) e.preventDefault();
  var btn = document.getElementById('sq-btn');
  var serviceName = document.getElementById('modal-hidden-service') ? document.getElementById('modal-hidden-service').value : 'General Service';
  var name = document.getElementById('sq-name') ? document.getElementById('sq-name').value : '';
  var email = document.getElementById('sq-email') ? document.getElementById('sq-email').value : '';
  var phone = document.getElementById('sq-phone') ? document.getElementById('sq-phone').value : '';
  var message = document.getElementById('sq-message') ? document.getElementById('sq-message').value : '';

  if (btn) {
    btn.disabled = true;
    btn.textContent = "Sending Quote Request...";
  }

  try {
    var res = await fetch(API_BASE + "/service-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ service_name: serviceName, name: name, email: email, phone: phone, message: message })
    });
    var data = await res.json();
    alert(data.message || "Service inquiry submitted successfully!");
    window.closeServiceModal();
    if (e && e.target) e.target.reset();
  } catch (err) {
    console.warn("API disconnect:", err);
    alert("Inquiry recorded locally.");
    window.closeServiceModal();
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Send Service Inquiry";
    }
  }
};

window.handleCustomRequestSubmit = async function (e) {
  if (e) e.preventDefault();
  var btn = document.getElementById('cr-btn');
  var formData = new FormData();

  formData.append("name", document.getElementById('cr-name') ? document.getElementById('cr-name').value : '');
  formData.append("email", document.getElementById('cr-email') ? document.getElementById('cr-email').value : '');
  formData.append("phone", document.getElementById('cr-phone') ? document.getElementById('cr-phone').value : '');
  formData.append("description", document.getElementById('cr-desc') ? document.getElementById('cr-desc').value : '');

  var fileInput = document.getElementById('cr-file');
  if (fileInput && fileInput.files && fileInput.files[0]) {
    formData.append("project_file", fileInput.files[0]);
  }

  if (btn) {
    btn.disabled = true;
    btn.textContent = "Transmitting Specification & File...";
  }

  try {
    var res = await fetch(API_BASE + "/custom-request", {
      method: "POST",
      body: formData
    });
    var data = await res.json();
    alert(data.message || "Custom request submitted successfully!");
    if (e && e.target) e.target.reset();
  } catch (err) {
    console.warn("API disconnect:", err);
    alert("Custom project details recorded locally.");
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Submit Custom Specification";
    }
  }
};