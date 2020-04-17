const Contato = require('../models/contatos');
require('dotenv').config();

var AWS = require('aws-sdk');

module.exports = {
	// Posts Index

	// Posts New
	postIndex(req, res, next) {
		Contato.findAll().then(contatos => {
		  res.render('index', {contatos :contatos});
		});
	},
	postHome(req, res, next) {
		res.render('home');
	},
	
	postContatos(req, res, next){
	    Contato.findAll().then(contatos => {
		  res.render('contatos', {contatos :contatos});
		});
	},
	 async deletaContato(req, res, next){
		var msgexclusao = '<div class="alert alert-info" role="alert"> Registro Excluido!</div>';
		var msgerro = "Erro ao Deletar!";
		Contato.destroy({where: {'id': req.params.id}}).then(function(Contato){
			res.render('contatos' , {msgexclusao});}	
		).catch(function(erro){
			res.render('contatos' , {msgerro, erro});	
			})
		
	},
	
	postSendSms(req, res, next){
	
		 var params = {
        Message: req.body.mensagem,
        PhoneNumber: '+' + req.body.numero,
        /*MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': req.body.assunto
            }
        }*/
    };
    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();


    publishTextPromise.then(
        function (data) {
        	//res.render('index', {MessageID: data.MessageId});contatos :contatos,
        	Contato.findAll().then(contatos => {
		  res.render('index', {contatos :contatos, MessageID: data.MessageId});
        	});
           
        }).catch(
            function (err) {
                res.render('index', { Error: err });
            });
    
	},
	async postContato(req, res, next){
	    var nome, fone;
	    var numeros, numero, regex, reg;
	   
	    nome = req.body.nome;
	    fone = req.body.fone;
	    numeros = req.body.lista ;
	    regex = /^[1-9]\d{12}/; 
	    reg =  /^\s*|\s*$/g;
	    numero = numeros.substr(0,13);
	    if(numero.search(regex) > -1) {
		    	numeros = numeros.replace(regex, "");
	    		numeros = numeros.replace(reg,"");
	    		fone = numero;
	    		 while (numero.value != ''){ 
	    			Contato.create({nome, fone}).then(contato => {
					console.log("Contato's auto-generated ID:", contato.id);
	    			});
	    		
	    	}
	    
	   
	    }Contato.findAll().then(contatos => {
		  res.render('contatos', {contatos :contatos});
		});
       
	},
	
	/*then(function( Contato){
		    	var msg = '<div class="alert alert-info" role="alert">  Registro salvo!</div>'
					if (Contato) {
					res.render('contatos' , {msg});}
				}).catch(function(erro){
					res.send("Houve um erro "+erro)
				}) ;
			}*/
	
	
	consultaContatos(req, res, next){
		Contato.findAll().then(contatos => {
		  res.render('contatos', {contatos :contatos});
		});
	},
	/*	postContatos(req, res, next){
	    var nome, fone;
	    var numeros, numero, regex, reg ;
	   
	    nome = req.body.nome;
	    fone = req.body.fone;
	    numeros = req.body.lista;
	    regex = /^[1-9]\d{12}/; 
	    reg =  /^\s*|\s*$/g ;
	    numero = numeros.substr(0,13);
	     if(numero.search(regex) > -1) {
	    	numeros = numeros.replace(regex, "");
    		numeros = numeros.replace(reg,"");
    		 Contato.create({ nome: nome, fone: numero }).then(nome => {
			console.log("Jane's auto-generated ID:", nome.id);
		});
	     }
		}*/
}
	
	


