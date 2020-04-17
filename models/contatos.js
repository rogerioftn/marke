var Sequelize = require('sequelize');
const Model = Sequelize.Model;

var sequelize = require("./db.js");

class Contatos extends Model {}
Contatos.init({
  nome: {
    type: Sequelize.STRING,
    allowNull: true
  },
  fone: {
    type: Sequelize.STRING,
    allowNull: true
    // allowNull defaults to true
  },
  createdAt: {
    type: Sequelize.DATE,
    //allowNull: true
    // allowNull defaults to true
  },
  updatedAt: {
    type: Sequelize.DATE,
    //allowNull: true
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'contatos'
  // options
});
module.exports = Contatos;

  
  
  
  