const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function (req, res) {
  res.sendFile(__dirname + "/html/blog.html");
});

// parametros no endpoint
app.get("/ola/:cargo/:nome/:cor", function (req, res) {
  const params = req.params;
  res.send(`
    <h1>Bem-vindo ${params.nome}</h1>
    <h2>Seu cargo é ${params.cargo}</h2>
    <h3>Sua cor favorita é ${params.cor}</h3>
    `);
});

// Última linha do código
app.listen(3000, function () {
  console.log("Servidor rodando na url http://localhost:3000");
});
