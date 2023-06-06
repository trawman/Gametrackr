const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    if (req.headers.cookie) {
      const darkModeCookie = req.headers.cookie
        .split(';')
        .map(cookie => cookie.trim())
        .find(cookie => cookie.startsWith('darkMode='));

      if (darkModeCookie) {
        const isDarkMode = darkModeCookie.split('=')[1] === 'true';
        res.setHeader('Content-Type', 'text/html');
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="keywords" content="game,play,web">
        
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
            <link rel="shortcut icon" href="imagens/favicon.ico" type="image/x-icon">
            <link rel="stylesheet" href="MediaQuery.css">
            <title>GameTrackr</title>
        
        </head>
        
        <body${isDarkMode ? ' class="dark-mode"' : ''}>
          <div id="top">
            <ul>
              <li><a href="index.html">Home</a></li>
            </ul>
            <img src="imagens/home.svg">
            <button id="dark-mode">
              <img src="imagens/dark.svg">
            </button>
          </div>
          <div class="container">
            <div id="mid">
              <div class="picture">
                <img src="imagens/lol.jpg">
              </div>
              <div class="picture">
                <img src="imagens/fortnite.jpg">
              </div>
              <div class="picture">
                <img src="imagens/eurot.jpg">
              </div>
              <div class="picture">
                <img src="imagens/gta.jpg">
              </div>
              <div class="picture">
                <img src="imagens/Fall-Guys.jpg">
              </div>
              <div class="picture">
                <img src="imagens/among.jpg">
              </div>
              <div class="picture">
                <img src="imagens/cod.jpg">
              </div>
              <div class="picture">
                <img src="imagens/genshin.jpg">
              </div>
              <div class="picture">
                <img src="imagens/valorant.jpg">
              </div>
            </div>
            <div id="bottom">
              <ul>
                <li><a href="sobre.html">Sobre</a></li>
                <li><a href="contato.html">Contato</a></li>
              </ul>
            </div>
          </div>
          
          <script>
          const button = document.getElementById('dark-mode');
          const body = document.body;
        
          button.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            // Salva o estado do tema escuro no cookie
            const isDarkMode = body.classList.contains('dark-mode');
            document.cookie = `darkMode=${isDarkMode}`;
          });
        
          // Verifica se existe um cookie para o tema escuro
          const darkModeCookie = document.cookie
            .split(';')
            .map(cookie => cookie.trim())
            .find(cookie => cookie.startsWith('darkMode='));
        
          if (darkModeCookie) {
            const isDarkMode = darkModeCookie.split('=')[1] === 'true';
            // Aplica o tema escuro se o cookie estiver definido como true
            if (isDarkMode) {
              body.classList.add('dark-mode');
            }
          }
          </script>
        </body>
        
        </html>`);
        res.end();
        return;
      }
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="game,play,web">
    
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet">
        <link rel="shortcut icon" href="imagens/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="MediaQuery.css">
        <title>GameTrackr</title>
    
    </head>
    
    <body>
      <div id="top">
        <ul>
          <li><a href="index.html">Home</a></li>
        </ul>
        <img src="imagens/home.svg">
        <button id="dark-mode">
          <img src="imagens/dark.svg">
        </button>
      </div>
      <div class="container">
        <div id="mid">
          <div class="picture">
            <img src="imagens/lol.jpg">
          </div>
          <div class="picture">
            <img src="imagens/fortnite.jpg">
          </div>
          <div class="picture">
            <img src="imagens/eurot.jpg">
          </div>
          <div class="picture">
            <img src="imagens/gta.jpg">
          </div>
          <div class="picture">
            <img src="imagens/Fall-Guys.jpg">
          </div>
          <div class="picture">
            <img src="imagens/among.jpg">
          </div>
          <div class="picture">
            <img src="imagens/cod.jpg">
          </div>
          <div class="picture">
            <img src="imagens/genshin.jpg">
          </div>
          <div class="picture">
            <img src="imagens/valorant.jpg">
          </div>
        </div>
        <div id="bottom">
          <ul>
            <li><a href="sobre.html">Sobre</a></li>
            <li><a href="contato.html">Contato</a></li>
          </ul>
        </div>
      </div>
      
      <script>
      const button = document.getElementById('dark-mode');
      const body = document.body;
    
      button.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        // Salva o estado do tema escuro no cookie
        const isDarkMode = body.classList.contains('dark-mode');
        document.cookie = `darkMode=${isDarkMode}`;
      });
    
      // Verifica se existe um cookie para o tema escuro
      const darkModeCookie = document.cookie
        .split(';')
        .map(cookie => cookie.trim())
        .find(cookie => cookie.startsWith('darkMode='));
    
      if (darkModeCookie) {
        const isDarkMode = darkModeCookie.split('=')[1] === 'true';
        // Aplica o tema escuro se o cookie estiver definido como true
        if (isDarkMode) {
          body.classList.add('dark-mode');
        }
      }
      </script>
    </body>
    
    </html>`);
    res.end();
  });
  
  server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });