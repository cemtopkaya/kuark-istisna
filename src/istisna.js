'use strict';

/**
 * İstisna dönmek istediğimiz obje
 * @param {string} _baslik
 * @param {string} _icerik
 * @param {string} _detay
 * @param {object} _data
 * @returns {{Baslik: *, Icerik: *, Detay: *, Data: *}}
 */
function Istisna(_baslik, _icerik, _detay, _data) {
    this.Baslik = _baslik;
    this.Icerik = _icerik;
    this.Detay = _detay;
    this.Data = _data;
}

module.exports = Istisna;
