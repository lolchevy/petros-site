import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.encoders import encode_base64
from werkzeug.utils import secure_filename
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder='frontend', template_folder='frontend', static_url_path='')
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Handle the double 'views/views' path requested by your Javascript code
@app.route('/views/views/<path:filename>')
@app.route('/views/<path:filename>')
def serve_views(filename):
    return app.send_static_file(f'views/{filename}')

# Handle the double 'assets/images' path requested by your Javascript code
@app.route('/assets/images/<path:filename>')
@app.route('/assets/<path:filename>')
def serve_assets(filename):
    return app.send_static_file(f'assets/{filename}')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file('index.html')
# ------------------------------------------------------------------
# CONFIGURATION
# ------------------------------------------------------------------
SMTP_SERVER = os.environ.get("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", 587))
SMTP_USER = os.environ.get("SMTP_USER", "kelseamoore74@gmail.com")
SMTP_PASS = os.environ.get("SMTP_PASS", "ovoarsmegruriavw")
OWNER_EMAIL = os.environ.get("OWNER_EMAIL", "mikepetros55@gmail.com")

# Global in-memory storage for reviews
if 'reviews_database' not in globals():
    reviews_database = [
        {"id": 1, "name": "John Doe", "rating": 5, "comment": "Excellent structural work!", "status": "approved", "likes": 3, "dislikes": 0},
        {"id": 2, "name": "Sarah M.", "rating": 5, "comment": "Highly professional team.", "status": "approved", "likes": 5, "dislikes": 0}
    ]

# ------------------------------------------------------------------
# 1. CORE EMAIL UTILITY UPGRADE
# ------------------------------------------------------------------
def send_email_notification(to_email, subject, body_html, attachment=None, filename=None):
    try:
        msg = MIMEMultipart()
        msg['Subject'] = subject
        msg['From'] = SMTP_USER
        msg['To'] = to_email

        msg.attach(MIMEText(body_html, 'html'))

        if attachment and filename:
            part = MIMEBase('application', 'octet-stream')
            part.set_payload(attachment)
            encode_base64(part)
            part.add_header('Content-Disposition', f'attachment; filename="{filename}"')
            msg.attach(part)

        print(f"Connecting to SMTP server {SMTP_SERVER}:{SMTP_PORT}...")
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=10) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)
            print(">>> EMAIL DELIVERED SUCCESSFULLY TO:", to_email)

    except Exception as err:
        print(f"!!! SMTP EMAIL ERROR: {err}")
        # Allows local dev to continue even if outbound mail is offline


# ------------------------------------------------------------------
# 2. UNIFIED ENDPOINTS INTEGRATION
# ------------------------------------------------------------------

@app.route('/api/custom-project', methods=['POST'])
@app.route('/api/custom-request', methods=['POST'])
def handle_custom_project():
    try:
        # Read form fields cleanly out of the multi-part payload
        name = request.form.get("name", "N/A")
        email = request.form.get("email", "N/A")
        phone = request.form.get("phone", "N/A")
        description = request.form.get("description") or request.form.get("details") or "No project description provided."

        # Capture the uploaded blueprint drawing file stream securely
        file_obj = request.files.get("project_file") or request.files.get("file")
        file_data = None
        filename = None
        if file_obj:
            filename = file_obj.filename
            file_data = file_obj.read()

        subject = f"📐 New Custom Project & Blueprint from {name}"

        body_html = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #0284c7; border-radius: 8px;">
            <h2 style="color: #0284c7; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Custom Project Specification Received</h2>
            <p><strong>Client Name:</strong> {name}</p>
            <p><strong>Email Address:</strong> {email}</p>
            <p><strong>Phone Number:</strong> {phone}</p>
            <p><strong>Project Description & Scope:</strong></p>
            <blockquote style="background: #f8fafc; padding: 15px; border-left: 4px solid #cbd5e1; margin: 10px 0; color: #334155;">
                {description}
            </blockquote>
        </div>
        """

     # 1. This closes out the custom project function cleanly
        send_email_notification(OWNER_EMAIL, subject, body_html, attachment=file_data, filename=filename)
        return jsonify({"status": "success", "message": "Custom project details recorded locally."}), 200
    except Exception as e:
        app.logger.error(f"Error handling custom project: {e}")
        return jsonify({"status": "error", "message": "Failed to transmit custom project."}), 500


# 2. This starts the service quote function as its own independent block all the way to the left wall
@app.route('/api/service-quote', methods=['POST', 'OPTIONS'])
def handle_service_quote():
    if request.method == 'OPTIONS':
        return '', 200

    try:
        # Extract data whether sent as JSON or Form Data
        data = request.get_json(silent=True) or request.form or {}

        name = data.get("name") or data.get("applicant_name") or "Valued Client"
        email = data.get("email") or data.get("applicant_email") or "N/A"
        phone = data.get("phone") or data.get("applicant_phone") or "N/A"
        service_type = data.get("service_type") or data.get("service") or data.get("title") or "General Service Inquiry"
        notes = data.get("notes") or data.get("message") or data.get("details") or data.get("comments") or "No additional notes provided."

        subject = f"Service Quote Request: {service_type} from {name}"

        body_html = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #0284c7; border-radius: 8px; background-color: #ffffff;">
            <h2 style="color: #0284c7; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px; margin-top: 0;">New Service Quote Request</h2>
            <p><strong>Requested Service:</strong> <span style="color: #0284c7; font-weight: bold;">{service_type}</span></p>
            <p><strong>Full Name:</strong> {name}</p>
            <p><strong>Email Address:</strong> {email}</p>
            <p><strong>Phone Number:</strong> {phone}</p>
            <p><strong>Project Notes / Details:</strong></p>
            <blockquote style="background: #f8fafc; padding: 15px; border-left: 4px solid #0284c7; margin: 10px 0; color: #334155;">
                {notes}
            </blockquote>
        </div>
        """

        # Transmit email to your inbox
        send_email_notification(OWNER_EMAIL, subject, body_html)

        print(f">>> SERVICE QUOTE EMAIL SENT FOR: {name} ({service_type})")
        return jsonify({"status": "success", "message": "Service quote request transmitted successfully!"}), 200

    except Exception as e:
        app.logger.error(f"Error handling service quote: {e}")
        print(f"!!! ERROR IN SERVICE QUOTE ROUTE: {e}")
        return jsonify({"status": "error", "message": "Failed to transmit service quote request."}), 500



# CAREERS / RESUME UPLOAD ROUTE
@app.route('/api/careers', methods=['POST'])
@app.route('/api/apply', methods=['POST'])
def handle_careers():
    try:
        name = request.form.get('applicant_name') or request.form.get('name', 'N/A')
        email = request.form.get('applicant_email') or request.form.get('email', 'N/A')
        phone = request.form.get('applicant_phone') or request.form.get('phone', 'N/A')
        role = request.form.get('role', 'General Application')

        file = request.files.get('resume')
        file_data = None
        safe_filename = None

        if file and file.filename:
            safe_filename = secure_filename(file.filename)
            file_data = file.read()

        subject = f"Career Application: {name} - {role}"
        body_html = f"""
        <html>
        <body style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0;">
                <h2 style="color: #0f172a; margin-top: 0;">New Job Application</h2>
                <p><strong>Applicant Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Target Position:</strong> {role}</p>
                <p><strong>Resume Attachment:</strong> {safe_filename if safe_filename else 'No file attached'}</p>
            </div>
        </body>
        </html>
        """

        send_email_notification(OWNER_EMAIL, subject, body_html, attachment=file_data, filename=safe_filename)
        return jsonify({"message": "Application and resume submitted successfully!"}), 200

    except Exception as e:
        app.logger.error(f"Error handling career submission: {e}")
        return jsonify({"error": "Failed to submit application."}), 500


# ------------------------------------------------------------------
# REVIEWS & MODERATION ROUTES
# ------------------------------------------------------------------
@app.route('/api/reviews', methods=['GET', 'POST'])
def handle_reviews():
    global reviews_database

    if request.method == 'GET':
        public_reviews = [r for r in reviews_database if r.get("status") == "approved"]
        return jsonify({"reviews": public_reviews}), 200

    if request.method == 'POST':
        try:
            data = request.get_json() or {}
            review_id = len(reviews_database) + 1

            new_review = {
                "id": review_id,
                "name": data.get("name", "Valued Client"),
                "rating": int(data.get("rating", 5)),
                "comment": data.get("comment", ""),
                "status": "pending",
                "likes": 0,
                "dislikes": 0
            }
            reviews_database.append(new_review)

            approve_link = f"http://127.0.0.1:5000/api/reviews/{review_id}/approve"
            delete_link  = f"http://127.0.0.1:5000/api/reviews/{review_id}/delete"
            reply_link   = f"http://127.0.0.1:5000/api/reviews/{review_id}/reply"

            subject = f"New Review from {new_review['name']} Pending Moderation"
            body_html = f"""
            <html>
            <body style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px;">
                <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0;">
                    <h2 style="color: #0f172a; margin-top: 0;">New Review Submitted</h2>
                    <p><strong>Name:</strong> {new_review['name']}</p>
                    <p><strong>Rating:</strong> {'★' * new_review['rating']}{'☆' * (5 - new_review['rating'])} ({new_review['rating']}/5)</p>
                    <p><strong>Comment:</strong> {new_review['comment']}</p>
                    
                    <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
                        <p style="font-weight: bold; color: #334155;">Moderation Actions:</p>
                        <div style="display: flex; gap: 10px;">
                            <a href="{approve_link}" style="background-color: #10B981; color: white; padding: 10px 18px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">Approve</a>
                            <a href="{delete_link}" style="background-color: #EF4444; color: white; padding: 10px 18px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">Delete</a>
                            <a href="{reply_link}" style="background-color: #1E90FF; color: white; padding: 10px 18px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">Reply</a>
                        </div>
                    </div>
                </div>
            </body>
            </html>
            """

            send_email_notification(OWNER_EMAIL, subject, body_html)

            return jsonify({
                "message": "Review submitted successfully! It is pending moderation.",
                "review_id": review_id
            }), 201

        except Exception as e:
            app.logger.error(f"Error submitting review: {e}")
            return jsonify({"error": "Failed to submit review."}), 500


@app.route('/api/reviews/<int:review_id>/approve', methods=['GET', 'POST'])
def approve_review(review_id):
    global reviews_database
    for r in reviews_database:
        if r.get('id') == review_id:
            r['status'] = 'approved'
            return f"""
            <script>
                alert("Review #{review_id} approved successfully!");
                window.location.href = "http://127.0.0.1:5500/frontend/#reviews";
            </script>
            """, 200
    return "Review not found.", 404


@app.route('/api/reviews/<int:review_id>/delete', methods=['GET', 'POST'])
def delete_review(review_id):
    global reviews_database
    reviews_database = [r for r in reviews_database if r.get('id') != review_id]
    return f"""
    <script>
        alert("Review #{review_id} deleted successfully.");
        window.location.href = "http://127.0.0.1:5500/frontend/#reviews";
    </script>
    """, 200


@app.route('/api/reviews/<int:review_id>/reply', methods=['GET', 'POST'])
def reply_review(review_id):
    global reviews_database
    review = next((r for r in reviews_database if r.get('id') == review_id), None)
    if not review:
        return "Review not found.", 404

    if request.method == 'POST':
        reply_text = request.form.get('reply_message') or (request.json or {}).get('reply_message')
        if reply_text:
            review['owner_reply'] = reply_text.strip()
            return f"""
            <script>
                alert("Reply published successfully!");
                window.location.href = "http://127.0.0.1:5500/frontend/#reviews";
            </script>
            """, 200
        return "Reply message cannot be empty.", 400

    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Reply to Review #{review_id}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-slate-50 font-sans p-6 min-h-screen flex items-center justify-center">
        <div class="max-w-lg w-full bg-white p-8 rounded-2xl border border-gray-200 shadow-xl space-y-6">
            <div>
                <h2 class="text-2xl font-extrabold text-slate-900">Reply to Review #{review_id}</h2>
                <p class="text-xs text-gray-500 mt-1">Your response will appear publicly beneath this review.</p>
            </div>
            <div class="bg-slate-100 p-4 rounded-xl border border-slate-200 space-y-1">
                <div class="font-bold text-slate-800 text-sm">{review.get('name', 'Valued Client')}</div>
                <p class="text-xs text-slate-600 italic">"{review.get('comment', '')}"</p>
            </div>
            <form method="POST" action="http://127.0.0.1:5000/api/reviews/{review_id}/reply" class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Company Response</label>
                    <textarea name="reply_message" rows="4" required placeholder="Write your official response..." class="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-blue-500">{review.get('owner_reply', '')}</textarea>
                </div>
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-sm">
                    Publish Response
                </button>
            </form>
            <div class="text-center pt-2">
                <a href="http://127.0.0.1:5500/frontend/#reviews" class="text-xs font-semibold text-gray-500 hover:text-slate-800">
                    ← Cancel and Return to Website
                </a>
            </div>
        </div>
    </body>
    </html>
    """, 200


@app.route('/api/reviews/<int:review_id>/react', methods=['POST'])
def react_review(review_id):
    global reviews_database
    data = request.get_json() or {}
    action = data.get('action')

    for r in reviews_database:
        if r.get('id') == review_id:
            if action == 'like':
                r['likes'] = r.get('likes', 0) + 1
            elif action == 'dislike':
                r['dislikes'] = r.get('dislikes', 0) + 1
            return jsonify({'likes': r.get('likes', 0), 'dislikes': r.get('dislikes', 0)}), 200

    return jsonify({'error': 'Review not found'}), 404


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
