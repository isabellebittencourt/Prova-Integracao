const router = require("express").Router();
const folhaModel = require("../models/Folhamodel")
const FolhaController = require("../controllers/folhaController");

const folhaPagamento = new FolhaController();


router.post("/folha/cadastrar", (req, res) =>{
    folhaPagamento.create(req, res);
});

router.get("/folha/consultar/:cpf/:mes/:ano",(req,res)=>{
    folhaPagamento.listarUnico(res)
});


router.get("/folha/calcular",(req,res)=>{
    folhaPagamento.listAll(res)
});


module.exports = router