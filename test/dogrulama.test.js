var chai = require('chai'),
    expect = chai.expect,
    Dogrulama = require('../src/dogrulama');


describe('Dogrulama sınıfı testleri', function () {

    it('Dogrulama fonksiyon olmalı', function () {
        expect(Dogrulama).to.be.instanceof(Function);
    });

});
