const express = require("express");
const Pagamento = require("../models/model");
const PagamentoRepository = require("../repository/PagamentoRepository");
const axios = require("axios");

const pagamentoRepository = new PagamentoRepository();

class PagamentoController {
    create(req, res) {
      const pagamento = req.body;
      const pagamentos = pagamentoRepository.create(req.body);
      res.status(200).json(pagamentos);
    }

    calcular(req,res){

      const pagamento = req.body;
      console.log(req.body)
      const pagamentos = pagamentoRepository.calcular();
      
      //fetch ou axios
      axios.get("http://localhost:3334/folha/calcular", pagamento)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      
        res.status(200).json(pagamentos);
      
    }
}

module.exports = PagamentoController;