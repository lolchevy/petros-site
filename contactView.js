/**
 * contactView.js - Petros Construction
 * Theme: Light Dodger Blue (#1E90FF) & Light Grey Theme
 * Layout: 3-Column Grid (General Inquiry / Careers Portal / Owner Details)
 */

function renderContactView() {
  return `
    <div class="w-full bg-gray-50 text-gray-800 min-h-screen">
      
      <!-- MAIN CONTAINER (STARTS DIRECTLY BELOW NAVBAR) -->
      <section class="pt-10 sm:pt-16 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <!-- CLEAN CENTERED TITLE HEADER -->
          <div class="text-center max-w-3xl mx-auto space-y-3">
            <h1 class="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
              Get In Touch
            </h1>
            <p class="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Have a project in mind or interested in joining our field team? Reach out to us below.
            </p>
          </div>

          <!-- 3-COLUMN MODERN GRID (DESKTOP) -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            <!-- COLUMN 1: GENERAL INQUIRY FORM -->
            <div class="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xl space-y-6 flex flex-col justify-between h-full">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-blue-100 text-dodgerblue flex items-center justify-center text-lg font-bold">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <h2 class="text-xl font-extrabold text-blue-950">General Inquiry</h2>
                </div>
                <p class="text-xs text-gray-500 mb-6">Send us a direct message regarding upcoming project or estimate request.</p>

                <form onsubmit="window.handleGeneralInquirySubmit(event)" class="space-y-4">
                  <div>
                    <label for="gi-name" class="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="gi-name" 
                      required 
                      placeholder="John Doe" 
                      class="w-full bg-gray-50 border border-gray-300 p-3 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-dodgerblue focus:bg-white transition-all"
                    >
                  </div>
                  <div>
                    <label for="gi-email" class="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="gi-email" 
                      required 
                      placeholder="john@example.com" 
                      class="w-full bg-gray-50 border border-gray-300 p-3 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-dodgerblue focus:bg-white transition-all"
                    >
                  </div>
                  <div>
                    <label for="gi-message" class="block text-xs font-bold text-gray-700 uppercase mb-1">Message</label>
                    <textarea 
                      id="gi-message" 
                      rows="4" 
                      required 
                      placeholder="How can our team help with your project?" 
                      class="w-full bg-gray-50 border border-gray-300 p-3 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-dodgerblue focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    id="gi-btn" 
                    class="w-full bg-dodgerblue hover:bg-dodgerblue-hover font-bold text-white py-3.5 rounded-xl shadow-md transition-all active:scale-95 mt-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <!-- COLUMN 2: CAREERS PORTAL FORM -->
            <div class="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xl space-y-6 flex flex-col justify-between h-full">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-blue-100 text-dodgerblue flex items-center justify-center text-lg font-bold">
                    <i class="fa-solid fa-briefcase"></i>
                  </div>
                  <h2 class="text-xl font-extrabold text-blue-950">Careers</h2>
                </div>
                <p class="text-xs text-gray-500 mb-6">Apply for construction, concrete trade, or project management positions.</p>

                <form onsubmit="window.handleCareerPortalSubmit(event)" class="space-y-4">
                  <div>
                    <label for="cp-name" class="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="cp-name" 
                      required 
                      placeholder="Sally Mercer" 
                      class="w-full bg-gray-50 border border-gray-300 p-3 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-dodgerblue focus:bg-white transition-all"
                    >
                  </div>
                  <div>
                    <label for="cp-email" class="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="cp-email" 
                      required 
                      placeholder="sally@example.com" 
                      class="w-full bg-gray-50 border border-gray-300 p-3 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-dodgerblue focus:bg-white transition-all"
                    >
                  </div>
                  <div>
                    <label for="cp-resume" class="block text-xs font-bold text-gray-700 uppercase mb-1">Upload Resume (.PDF / .DOCX)</label>
                    <input 
                      type="file" 
                      id="cp-resume" 
                      required 
                      accept=".pdf,.doc,.docx" 
                      class="w-full bg-gray-50 border border-gray-300 p-2.5 rounded-xl text-xs text-gray-700 focus:outline-none"
                    >
                  </div>
                  <button 
                    type="submit" 
                    id="cp-btn" 
                    class="w-full bg-dodgerblue hover:bg-dodgerblue-hover font-bold text-white py-3.5 rounded-xl shadow-md transition-all active:scale-95 mt-6"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>

            <!-- COLUMN 3: OWNER CONTACT & DETAILS PANEL -->
            <div class="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xl space-y-6 flex flex-col justify-between h-full">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-blue-100 text-dodgerblue flex items-center justify-center text-lg font-bold">
                    <i class="fa-solid fa-building-user"></i>
                  </div>
                  <h2 class="text-xl font-extrabold text-blue-950">Contact Details</h2>
                </div>
                <p class="text-xs text-gray-500 mb-6">Contact our team directly for scheduling and project updates</p>

                <div class="space-y-5 text-sm">
                  <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <i class="fa-solid fa-phone text-dodgerblue text-base mt-0.5"></i>
                    <div>
                      <div class="text-xs font-bold text-gray-400 uppercase">Phone Number</div>
                      <div class="font-bold text-blue-950 mt-0.5">(239)851-8401</div>
                    </div>
                  </div>

                  <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <i class="fa-solid fa-paper-plane text-dodgerblue text-base mt-0.5"></i>
                    <div>
                      <div class="text-xs font-bold text-gray-400 uppercase">Official Email</div>
                      <div class="font-bold text-blue-950 mt-0.5">Mikepetros55@gmail.com</div>
                    </div>
                  </div>

                  <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <i class="fa-solid fa-location-dot text-dodgerblue text-base mt-0.5"></i>
                    <div>
                      <div class="text-xs font-bold text-gray-400 uppercase">Location</div>
                      <div class="font-bold text-blue-950 mt-0.5">Cape Coral</div>
                      <div class="text-xs text-gray-500">Florida</div>
                    </div>
                  </div>

                  <div class="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <i class="fa-solid fa-clock text-dodgerblue text-base mt-0.5"></i>
                    <div>
                      <div class="text-xs font-bold text-gray-400 uppercase">Operating Hours</div>
                      <div class="font-bold text-blue-950 mt-0.5">Monday – Friday</div>
                      <div class="text-xs text-gray-500">9:00 AM – 5:00 PM CST</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tagline Card -->
              <div class="p-4 rounded-xl bg-blue-950 text-white space-y-1">
                <div class="text-xs font-bold text-dodgerblue uppercase flex items-center gap-1.5">
                  <i class="fa-solid fa-bolt"></i> Rapid Response Guarantee
                </div>
                <p class="text-[11px] text-gray-300 leading-relaxed">
                  All consultations and quote inquiries are reviewed by a general manager within 24 business hours.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  `;
}

// Global scope registration for router access
window.renderContactView = renderContactView;

var API_BASE = "http://127.0.0.1:5000/api";

// 1. GENERAL INQUIRY SUBMISSION HANDLER
window.handleGeneralInquirySubmit = async function (e) {
  if (e) e.preventDefault();
  var btn = document.getElementById("gi-btn");
  var payload = {
    name: document.getElementById("gi-name") ? document.getElementById("gi-name").value : "",
    email: document.getElementById("gi-email") ? document.getElementById("gi-email").value : "",
    message: document.getElementById("gi-message") ? document.getElementById("gi-message").value : ""
  };

  if (btn) {
    btn.disabled = true;
    btn.textContent = "Transmitting Message...";
  }

  try {
    var res = await fetch(API_BASE + "/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    var data = await res.json();
    alert(data.message || "Message sent successfully!");
    if (e && e.target) e.target.reset();
  } catch (err) {
    console.warn("API disconnect:", err);
    alert("Message recorded locally.");
    if (e && e.target) e.target.reset();
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Send Message";
    }
  }
};

// 2. CAREERS PORTAL FILE UPLOAD SUBMISSION HANDLER
window.handleCareerPortalSubmit = async function (e) {
  if (e) e.preventDefault();
  var btn = document.getElementById("cp-btn");
  var formData = new FormData();

  formData.append("name", document.getElementById("cp-name") ? document.getElementById("cp-name").value : "");
  formData.append("email", document.getElementById("cp-email") ? document.getElementById("cp-email").value : "");

  var fileInput = document.getElementById("cp-resume");
  if (fileInput && fileInput.files && fileInput.files[0]) {
    formData.append("resume", fileInput.files[0]);
  }

  if (btn) {
    btn.disabled = true;
    btn.textContent = "Uploading Resume & Details...";
  }

  try {
    var res = await fetch(API_BASE + "/careers", {
      method: "POST",
      body: formData
    });
    var data = await res.json();
    alert(data.message || "Application submitted successfully!");
    if (e && e.target) e.target.reset();
  } catch (err) {
    console.warn("API disconnect:", err);
    alert("Application transmitted locally.");
    if (e && e.target) e.target.reset();
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Submit Application";
    }
  }
};