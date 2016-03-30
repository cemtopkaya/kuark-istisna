'use strict';

var Istisna = require('./istisna');

function YetkisizErisim(_baslik, _icerik, _detay, _data) {
    Istisna.call(this, _baslik, _icerik, _detay, _data);
}

YetkisizErisim.prototype = new Istisna();

module.exports = YetkisizErisim;
