import http.server
import socketserver
import os

PORT = 3000
DIRECTORY = r"C:\Users\chevy\petros\frontend"

class SPARequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path):
            self.path = '/index.html'
        return super().do_GET()

# Ensure .mov and .mp4 MIME types are explicitly declared
SPARequestHandler.extensions_map.update({
    '.mov': 'video/quicktime',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm'
})

if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), SPARequestHandler) as httpd:
        print(f"🌐 Server running at http://localhost:{PORT}")
        httpd.serve_forever()