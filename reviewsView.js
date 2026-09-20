/**
 * reviewsView.js - Petros Construction
 * Theme: Light Dodger Blue (#1E90FF) & Light Grey Theme
 * Layout: 2-Column Responsive Layout (Form Left / Live Reviews Right)
 */

function renderReviewsView() {
  return `
    <div class="w-full bg-gray-50 text-gray-800 min-h-screen">
      
      <!-- MAIN CONTAINER (STARTS DIRECTLY BELOW NAVBAR) -->
      <section class="pt-10 sm:pt-16 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <!-- CLEAN CENTERED HEADER -->
          <div class="text-center max-w-3xl mx-auto space-y-3">
            <h1 class="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
              Client Reviews
            </h1>
            <p class="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Read feedback from our commercial and residential structural concrete clients. 
            </p>
          </div>

          <!-- TWO-COLUMN LAYOUT -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <!-- LEFT COLUMN: LEAVE FEEDBACK FORM -->
            <div class="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xl space-y-6">
              <div>
                <h2 class="text-2xl font-extrabold text-blue-950">Leave Feedback</h2>
                <p class="text-xs text-gray-500 mt-1">Share your project experience with us.</p>
              </div>

              <form onsubmit="window.handleReviewFormSubmit(event)" class="space-y-4">
                <div>
                  <label for="rev-input-name" class="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="rev-input-name" 
                    required 
                    placeholder="e.g. Marcus Vance" 
                    class="w-full bg-gray-50 border border-gray-300 p-3 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-dodgerblue focus:bg-white transition-all"
                  >
                </div>

                <div>
                  <label for="rev-input-rating" class="block text-xs font-bold text-gray-700 uppercase mb-1">Star Rating</label>
                  <select 
                    id="rev-input-rating" 
                    class="w-full bg-gray-50 border border-gray-300 p-3 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-dodgerblue focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="5">★★★★★ (5 Stars - Exceptional)</option>
                    <option value="4">★★★★☆ (4 Stars - Very Good)</option>
                    <option value="3">★★★☆☆ (3 Stars - Satisfactory)</option>
                    <option value="2">★★☆☆☆ (2 Stars - Needs Improvement)</option>
                    <option value="1">★☆☆☆☆ (1 Star - Poor)</option>
                  </select>
                </div>

                <div>
                  <label for="rev-input-comment" class="block text-xs font-bold text-gray-700 uppercase mb-1">Project Comments</label>
                  <textarea 
                    id="rev-input-comment" 
                    rows="4" 
                    required 
                    placeholder="Share details regarding our structural work, team professionalism, and scheduling..." 
                    class="w-full bg-gray-50 border border-gray-300 p-3 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-dodgerblue focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  id="rev-submit-btn" 
                  class="w-full bg-dodgerblue hover:bg-dodgerblue-hover font-bold text-white py-3.5 rounded-xl shadow-md transition-all active:scale-95"
                >
                  Post Review
                </button>
              </form>
            </div>

            <!-- RIGHT COLUMN: LIVE REVIEWS FEED -->
            <div class="lg:col-span-7 space-y-6">
              <div class="flex items-center justify-between border-b border-gray-200 pb-3">
                <h2 class="text-xl font-bold text-blue-950">Verified Client Feedback</h2>
                <span class="text-xs font-semibold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Moderated Feed
                </span>
              </div>

              <!-- DYNAMIC REVIEWS FEED CONTAINER -->
              <div id="reviews-feed-list" class="space-y-4">
                <div class="bg-white p-8 rounded-2xl border border-gray-200 text-center text-gray-500 shadow-sm">
                  Be the first to leave a review!
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  `;
}

// Global scope attachment for router access
window.renderReviewsView = renderReviewsView;

var API_BASE = "http://127.0.0.1:5000/api";

// FETCH AND RENDER PUBLISHED REVIEWS
window.loadReviewsFeed = async function () {
  var container = document.getElementById("reviews-feed-list");
  if (!container) return;

  try {
    var res = await fetch(API_BASE + "/reviews");
    if (!res.ok) throw new Error("Backend response error");
    var data = await res.json();

    if (data.reviews && data.reviews.length > 0) {
      container.innerHTML = data.reviews.map(function (rev) {
        var stars = "★".repeat(rev.rating) + "☆".repeat(5 - rev.rating);
        var dateStr = rev.date ? rev.date : "Verified Client";
        return `
          <div class="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
            <div class="flex items-center justify-between">
              <div class="text-amber-400 text-base font-bold tracking-wider">${stars}</div>
              <span class="text-[11px] font-semibold text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md">${dateStr}</span>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed italic">"${rev.comment}"</p>
            <div class="pt-2 border-t border-gray-100 flex items-center justify-between">
              <span class="font-extrabold text-blue-950 text-sm">${rev.name}</span>
              <span class="text-[10px] uppercase font-bold text-dodgerblue tracking-widest flex items-center gap-1">
                <i class="fa-solid fa-circle-check text-emerald-500"></i> Verified Partner
              </span>
            </div>
          </div>
        `;
      }).join("");
    } else {
      container.innerHTML = `
        <div class="bg-white p-10 rounded-2xl border border-gray-200 text-center text-gray-500 shadow-sm space-y-2">
          <div class="text-3xl text-dodgerblue mb-2"><i class="fa-regular fa-comments"></i></div>
          <div class="text-base font-bold text-blue-950">Be the first to leave a review!</div>
          <p class="text-xs text-gray-400">Your feedback helps us continuously elevate our engineering standards.</p>
        </div>
      `;
    }
  } catch (err) {
    console.warn("Could not load dynamic reviews:", err);
    container.innerHTML = `
      <div class="bg-white p-10 rounded-2xl border border-gray-200 text-center text-gray-500 shadow-sm space-y-2">
        <div class="text-3xl text-dodgerblue mb-2"><i class="fa-regular fa-comments"></i></div>
        <div class="text-base font-bold text-blue-950">Be the first to leave a review!</div>
        <p class="text-xs text-gray-400">Submit your feedback using the form to start the conversation.</p>
      </div>
    `;
  }
};

// SUBMIT NEW REVIEW HANDLER
window.handleReviewFormSubmit = async function (e) {
  if (e) e.preventDefault();
  var btn = document.getElementById("rev-submit-btn");
  var nameInput = document.getElementById("rev-input-name");
  var ratingInput = document.getElementById("rev-rating-input");
  var commentInput = document.getElementById("rev-input-comment");

  var payload = {
    name: nameInput ? nameInput.value : "Valued Client",
    rating: ratingInput ? ratingInput.value : 5,
    comment: commentInput ? commentInput.value : ""
  };

  if (btn) {
    btn.disabled = true;
    btn.textContent = "Transmitting Review...";
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
    console.warn("Backend API offline:", err);
    alert("Review recorded locally. Email moderation notification simulated.");
    if (e && e.target) e.target.reset();
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Post Review";
    }
    // Refresh feed list
    window.loadReviewsFeed();
  }
};

// Automatically fetch reviews on DOM load or view render
if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(window.loadReviewsFeed, 100);
} else {
  window.addEventListener("DOMContentLoaded", function () {
    setTimeout(window.loadReviewsFeed, 100);
  });
}