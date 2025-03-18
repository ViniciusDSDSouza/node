import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/index.html"));
});

app.get("/sobre", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/sobre.html"));
});

app.get("/blog", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/blog.html"));
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
app.listen(3001, function () {
  console.log("Servidor rodando na url http://localhost:3001");
});
