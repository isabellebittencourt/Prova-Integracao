const express = require("express");
const folhaModel = require("../models/folhaModel");
const FolhaRepository = require("../repository/folhaRepository");
const axios = require("axios");

const folhaRepository = new FolhaRepository();

class ProdutoController {

  listarUnico(req, res) {
      const folha = req.body;
      const folhas = folhaRepository.create(req.body);
      res.status(200).json(folhas);

    }

    listAll(req, res){
      const dados = folhaRepository.list();
      res.status(200).json(dados);
    }
    create(req, res) {
      const folhas = folhaRepository.create(req.body);
      res.status(200).json(folhas);
    }
}

module.exports = ProdutoController;