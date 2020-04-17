const { Sequelize, Model, DataTypes } = require('sequelize');
const express = require('express');
const path = require('path');
//const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.resolve(__dirname,'agenda.db',
  
)})
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
 
 module.exports = sequelize;
 global.sequelize = sequelize;
 
 
 /* class Contatos extends Model {}
Contatos.init({
  nome: DataTypes.STRING,
  fone: DataTypes.STRING
}, { sequelize, modelName: 'contatos' });

sequelize.sync()
  .then(() => Contatos.create({
    nome: 'janedoe',
    fone: '6294939493'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });
  
  



var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('abcd');

db.serialize(function() {
  db.run("CREATE TABLE user (id INT, dt TEXT)");

  var stmt = db.prepare("INSERT INTO user VALUES (?,?)");
  for (var i = 0; i < 10; i++) {
  
  var d = new Date();
  var n = d.toLocaleTimeString();
  stmt.run(i, n);
  }
  stmt.finalize();

  db.each("SELECT id, dt FROM user", function(err, row) {
      console.log("User id : "+row.id, row.dt);
  });
});

db.close();
*/