const Pagamento = require("../models/model.js");

const pagamentos = [];
const listaPagamentos = []
class PagamentoRepository {
  
  create(pagamento) {
    pagamentos.push(pagamento);
    return pagamentos;
  }

  calcular() {
    let conta = 0;

    pagamentos.forEach(element => {
       
        conta = element.horas * element.valor 
        //Imposto de Renda
        console.log("valor Bruto" + conta);
        
        let IR = 0;
        if(conta <= "1.903,98"){

        }else if(conta > "1.903,99" && conta <= "2.826,65"){
            IR = 142,80;
        }else if(conta > "2.826,66"  && conta <= "3.751,05"){
            IR = 354,80;
        }else if(conta > "3.751,06" && conta <= "4.664,68"){
            IR = 636,13;
        }else{
            IR = 869,36;
        }
        console.log("imposto de renda" + conta);

        //INSS
        let INSS = 0
        if(conta <= "1.693,72"){
            INSS = element.valor * 0.08;
        }else if(conta > "1.693,73"  && conta <= "2.822,90"){
            INSS = element.valor * 0.09;
        }else if(conta > "2.822,91"  && conta <= "5.645,80"){
            INSS = element.valor * 0.11
        }else {
            INSS = 621.03;
        }

        console.log("INSS" + conta);

        //FGTS
        let FGTS = 0;
        FGTS = element.valor * 0.08;

        let SalaroLiquido = 0;
        SalaroLiquido = conta - IR - INSS

        const json = {
            "Colaborador: " : element.funcionarios[0].nome,
            "Salário Bruno: " : conta,
            "Salário líquido: " :SalaroLiquido
        }

        listaPagamentos.push(json);
    });
    return listaPagamentos;
  }
}
module.exports = PagamentoRepository