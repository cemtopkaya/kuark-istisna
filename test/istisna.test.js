var chai = require('chai'),
    expect = chai.expect,
    Istisna = require('../src/istisna');


describe('İstisna sınıfı testleri', function () {

    it('Istisna fonksiyon olmalı', function () {
        console.log("yaz ekrana yazmak");
        expect(Istisna).to.be.instanceof(Function);
    });

    it('Istisna başlık içerik detay ve data alanlarına sahip olmalı', function () {

        var baslik = 'İstisna başlığı',
            icerik = 'İstisna içeriği',
            detay = 'İstisna detayı',
            data = {bir: 1};

        var istisna = new Istisna(baslik, icerik, detay, data);

        expect(istisna.Baslik).to.equal(baslik);
        expect(istisna.Icerik).to.equal(icerik);
        expect(istisna.Detay).to.equal(detay);
        expect(istisna.Data).to.have.property('bir');
        expect(istisna.Data).to.eql(data);
    });
});
