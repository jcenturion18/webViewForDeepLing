var express = require('express');
var router = express.Router();
var open = require('open');

router.get('/', function(req, res){
    res.send('meli://search/input');
    // res.redirect('https://articulo.mercadolibre.com.ar');
});

router.get('/deeplink', function(req, res){
    res.redirect('meli://search/input');
});

router.get('/weblink', function(req, res){
    res.redirect('https://celulares.mercadolibre.com.ar');
});

module.exports = router;