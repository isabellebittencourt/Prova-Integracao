const express = require("express");
const routes = require("./config/routes");

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3334, () => {
  console.log("Servidor rodando na porta 3334...");
});