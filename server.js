import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";

const app = express();

app.use(express.json());
app.use(routes);

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));

app.use(function(req, res, next) {
    res.status(404).send("Desculpe!! Me perdi e não consegui encontrar o caminho :( ");
  });


app.use(function (err, req, res, next) {
    if (err.status === 400) {
      res.status(400).send("Desculpe!! Requisição com parâmetros inválidos :( ");
    } else {
      next(err);
    }
  });

  app.use(function (err, req, res, next) {
    if (err.status === 403) {
      res.status(403).send("Desculpe!! Você não tem permissão para acessar aqui :( ");
    } else {
      next(err);
    }
  });

  app.use(function (err, req, res, next) {
    if (err.status === 500) {
      res.status(500).send("Desculpe!! Estamos com problemas no servidor :( ");
    } else {
      next(err);
    }
  });
