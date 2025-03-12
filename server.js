const http = require('http'); // Erstellt einen HTTP-Server
const fs = require('fs'); // Ermöglicht das Lesen von Dateien
const path = require('path'); // Erleichtert den Umgang mit Dateipfaden

// Funktion zum Servieren von statischen Dateien
function serveStaticFile(filePath, res, contentType) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end(`File not found: ${err}`);
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', contentType);
            res.end(data);
        }
    });
}

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            const filePath = path.join(__dirname, 'index.html');
            fs.readFile(filePath, 'utf8', (err, html) => {
                if (err) {
                    res.statusCode = 500;
                    res.end(`Error getting the file: ${err}.`);
                } else {
                    const content = `
                    <div class="card server">
                    <h1>Hello, World!</h1>
                    <h2>The whole page was rendered on server side!</h2>
                    </div>`;
                    const renderedHtml = html.replace('<!-- This is where the server will render the content -->', content);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(renderedHtml);
                }
            });
            break;

        case '/client.js':
            const jsFilePath = path.join(__dirname, 'client.js');
            fs.readFile(jsFilePath, 'utf8', (err, js) => {
                if (err) {
                    res.statusCode = 500;
                    res.end(`Error getting the file: ${err}.`);
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/javascript');
                    res.end(js);
                }
            });
            break;

// Bereitstellung von Dateien aus dem images-Ordner (einschließlich Unterordner)
        case /^\/images\//.test(req.url) ? req.url : undefined:
            const imgFilePath = path.join(__dirname, req.url); // Dynamischer Pfad
            fs.readFile(imgFilePath, (err, file) => {
                if (err) {
                    res.statusCode = 404;
                    res.end(`File not found: ${err}`);
                } else {
                    const ext = path.extname(req.url).toLowerCase();
                    let contentType = 'application/octet-stream';

                    // Bestimme den Content-Type je nach Dateityp
                    if (ext === '.jpg' || ext === '.jpeg') {
                        contentType = 'image/jpeg';
                    } else if (ext === '.png') {
                        contentType = 'image/png';
                    } else if (ext === '.gif') {
                        contentType = 'image/gif';
                    } else if (ext === '.webp') {
                        contentType = 'image/webp';
                    }

                    res.statusCode = 200;
                    res.setHeader('Content-Type', contentType);
                    res.end(file);
                }
            });
            break;


        // Anfrage für alle Dateien im components-Ordner (einschließlich elements)
        case /^\/components\//.test(req.url) ? req.url : undefined:
            const filePathComponents = path.join(__dirname, req.url); // Dynamischer Pfad basierend auf der URL
            fs.readFile(filePathComponents, 'utf8', (err, file) => {
                if (err) {
                    res.statusCode = 404;
                    res.end(`File not found: ${err}`);
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/javascript');
                    res.end(file);
                }
            });
            break;

        // Bereitstellung von CSS-Dateien, einschließlich app.css und Dateien im /css-Verzeichnis
        case /^\/(app\.css|css\/.*)$/.test(req.url) ? req.url : undefined:
            const cssFilePath = path.join(__dirname, req.url);
            fs.readFile(cssFilePath, (err, file) => {
                if (err) {
                    res.statusCode = 404;
                    res.end(`File not found: ${err}`);
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/css');
                    res.end(file);
                }
            });
            break;

        // Anfrage für Dateien im core-Ordner
        case /^\/core\//.test(req.url) ? req.url : undefined:
            const filePathElems = path.join(__dirname, req.url); // Dynamischer Pfad basierend auf der URL
            fs.readFile(filePathElems, 'utf8', (err, file) => {
                if (err) {
                    res.statusCode = 404;
                    res.end(`File not found: ${err}`);
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/javascript');
                    res.end(file);
                }
            });
            break;


        default:
            res.statusCode = 404;
            res.end('Not found');
            break;
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`[Server log] Server running at http://localhost:${port}`);
});
