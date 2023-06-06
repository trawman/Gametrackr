const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname)));


const server = http.createServer((req, res) => {
  if (req.url === '/index.html') {
    if (req.headers.cookie) {
      const darkModeCookie = req.headers.cookie
        .split(';')
        .map(cookie => cookie.trim())
        .find(cookie => cookie.startsWith('darkMode='));

      if (darkModeCookie) {
        const isDarkMode = darkModeCookie.split('=')[1] === 'true';
        if (isDarkMode) {
          res.setHeader('Set-Cookie', 'darkMode=true; Path=/');
        } else {
          res.setHeader('Set-Cookie', 'darkMode=false');
        }
      }
    }

    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
