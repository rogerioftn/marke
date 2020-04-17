const express = require('express');
const router = express.Router();
//const multer = require('multer');
//const upload = multer({'dest': 'uploads/'});
const { asyncErrorHandler } = require('../middleware');
const { 
	postIndex,
	postSendSms,
	postContatos,
	postContato,
	postHome,

	deletaContato

} = require('../controllers/indexc');

/* GET posts index /posts */
router.get('/', asyncErrorHandler(postIndex));
router.get('/home', asyncErrorHandler(postHome));
router.post('/sendsms', asyncErrorHandler(postSendSms));

router.get('/contatos', asyncErrorHandler(postContatos));
router.post('/salvacontato', asyncErrorHandler(postContato));

router.get('/deletar/:id', asyncErrorHandler(deletaContato));


module.exports = router;
