var express = require('express');
var router = express.Router();
var open = require('open');
//

var html = '<!DOCTYPE HTML>' +
    '<html lang="en-US">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta http-equiv="refresh" content="1; url=http://example.com">' +
    '<script type="text/javascript">' +
    'window.location.href = "meli://search/input"' +
    '</script>' +
    '<title>Page Redirection</title>' +
    '</head>' +
    '<body>' +
    '<!-- Note: don\'t tell people to `click` the link, just tell them that it is a link. -->' +
    'If you are not redirected automatically, follow this <a href=\'meli://search/input\'>link to example</a>.' +
    '</body>' +
    '</html>';

router.get('/', function(req, res){
    res.send(html);
    // res.redirect('https://articulo.mercadolibre.com.ar');
});

router.get('/deeplink', function(req, res){
    res.redirect('meli://search/input');
});

router.get('/weblink', function(req, res){
    res.redirect('https://celulares.mercadolibre.com.ar');
});

module.exports = router;