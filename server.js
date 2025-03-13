const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Stelle den Ordner 'public' für statische Dateien bereit
app.use(express.static(path.join(__dirname, 'public')));

// Route für die Startseite
app.get('/', (req, res) => {

    // Dynamischen Inhalt erstellen
    const hour = new Date().getHours();
    let greetingMessage = '';

    if (hour < 12) {
        greetingMessage = 'Guten Morgen!';
    } else {
        greetingMessage = 'Guten Abend!';
    }

    const content = `
    <div class="d-flex flex-column justify-content-center align-items-center">
        <p>${greetingMessage}</p>
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    `;

    // Template lesen
    fs.readFile(path.join(__dirname, 'template.html'), 'utf8', (err, html) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Fehler beim Laden des Templates.");
        }

        // Ersetze den Platzhalter {{content}} mit dem dynamischen Inhalt
        html = html.replace('{{content}}', content);

        // Sende das gerenderte HTML zurück an den Client
        res.send(html);
    });
});

// Route für den clientseitigen JavaScript-Code (client.js)
app.get('/client.js', (req, res) => {
    const jsFilePath = path.join(__dirname, 'public', 'client.js');
    fs.readFile(jsFilePath, 'utf8', (err, js) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Fehler beim Laden der client.js.");
        }

        // Sende das JavaScript zurück an den Client
        res.setHeader('Content-Type', 'application/javascript');
        res.send(js);
    });
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
