const router = require("express").Router();
const Pagamento = require("../models/model")
const PagamentoController = require("../controllers/pagamentoController");

const pagamentoController = new PagamentoController();


router.get("/folha/calcular",(req,res)=>{
    console.log("RES:", res)
    pagamentoController.calcular(res)
});

router.post("/folha/cadastrar", (req, res) =>{
    pagamentoController.create(req, res);
});


module.exports = router