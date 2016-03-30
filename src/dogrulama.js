'use strict';

var Istisna = require('./istisna');

function Dogrulama(_baslik, _icerik, _detay, _data) {
    Istisna.call(this, _baslik, _icerik, _detay, _data);
}

Dogrulama.prototype = new Istisna();

module.exports = Dogrulama;
