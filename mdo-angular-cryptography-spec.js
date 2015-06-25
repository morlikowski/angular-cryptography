
describe('crypto', function(){

    beforeEach(module('mdo-angular-cryptography', function($cryptoProvider){
        $cryptoProvider.setCryptographyKey('TESTKEY');
    }));

    it('should exist',inject(function($crypto){
        expect($crypto).toBeDefined();
    }));

    it('should encrypt a string and decrypt it to the original value', inject(function($crypto){
        var string = 'Hello World!';
        var encrypted = $crypto.encrypt(string);

        expect(encrypted).not.toEqual(string);

        var decrypted = $crypto.decrypt(encrypted);

        expect(decrypted).toEqual(string);

    }));

});