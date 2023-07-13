const express = require('express');
const app = express();


const cookieParser = require('cookie-parser');
app.use(cookieParser());


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
