const FolhaModel = require("../models/folhaModel.js");

const folhas = [];

class folhaRepository {
  create(folha) {
    folhas.push(folha);
    return folhas;
  }
  
  list() {
    return folhas;
  }
  
}

module.exports = folhaRepository;