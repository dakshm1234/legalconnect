import http.server
import socketserver

PORT = 8000  # You can change the port if needed

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = 'main.html'  # Your HTML file here
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

handler_object = MyHttpRequestHandler

with socketserver.TCPServer(("", PORT), handler_object) as httpd:
    print(f"Serving on port {PORT}")
    httpd.serve_forever()
