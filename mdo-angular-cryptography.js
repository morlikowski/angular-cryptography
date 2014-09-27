angular.module('mdo-angular-cryptography', [])
    .factory('$crypto', [ function () {
            return {
                encrypt: function(message, key) {
                    return CryptoJS.AES.encrypt(message, key ).toString();
                },

                decrypt: function(message, key) {
                    return CryptoJS.AES.decrypt(message, key).toString(CryptoJS.enc.Utf8)
                }
            };
        }
    ]);

