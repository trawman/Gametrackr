const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
  const darkModeCookie = req.cookies.darkMode;
  res.sendFile(__dirname + 'C:/Users/ferna/OneDrive/projeto/index.html');

  if (darkModeCookie) {
    const isDarkMode = darkModeCookie === 'true';
    res.send(`Dark Mode: ${isDarkMode}`);
  } else {
    res.send('Deu B.O nessa porra');
  }
});

app.get('/toggle-dark-mode', (req, res) => {
  const darkModeCookie = req.cookies.darkMode;
  const isDarkMode = !darkModeCookie || darkModeCookie !== 'true';

  res.cookie('darkMode', isDarkMode.toString(), {
    maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expira em 30 dias
    httpOnly: true, // Cookie acessível apenas via HTTP
  });

  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Servidor rodando no link http://localhost:3000');
});
