import http.server
import socketserver

directory = '.build'

port = 3000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", port), Handler) as httpd:
    print("Serving at port", port)
    httpd.serve_forever()