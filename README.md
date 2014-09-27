[Middleout Angular Cryptography](http://ngmodules.org/modules/angular-cryptography)
==================

AngularJS Module that integrate cryptography functionality offers from the [crypto-js](https://code.google.com/p/crypto-js/) project. Provides a simple service to encrypt and decrypt using AES.

Dependencies
------------
- [AngularJS 1.1.4 + ](http://angularjs.org/) (tested with 1.1.4 and 1.2.16)
- [Crypto-js 3.1.2 AES modul](https://github.com/sytelus/CryptoJS/rollups/aes.js)

##Install (bower)

* bower install angular-cryptography
* bower install cryptojslib
```html
<script type='text/javascript' src="[bower_components/]cryptojslib/rollups/aes.js"></script>
<script type='text/javascript' src="[bower_components/]angular-cryptography/mdo-angular-cryptography.js"></script>
```

##Install (manual)

* download [js file](https://github.com/sytelus/CryptoJS/tree/master/rollups/aes.js)
* download [js file](https://github.com/middleout/angular-cryptography/mdo-angular-cryptography.js)
* added javascript file to your app html file
```html
<script type='text/javascript' src="js/aes.js"></script>
<script type='text/javascript' src="js/mdo-angular-cryptography.js"></script>
```

##Usage

* add modul dependency ('mdo-angular-cryptography') to angular
```js
var demoApp = angular.module('demoApp', ['services', 'angularjs-crypto']);
```

Example Service Usage

```js
'use strict';

angular.module('app').controller('ExampleController', ['$scope', '$crypto', function($scope, $crypto) {

	var encrypted = $crypto.encrypt('some plain text data', 'SOME_PRIVATE_KEY');
	var decrypted = $crypto.decrypt(encrypted, 'SOME_PRIVATE_KEY');
});
```

That's all !

Issues
-------------
- Report at the github [issue tracker](https://github.com/middleout/angular-cryptography/issues)

License
--------------

angularjs-crypto is released under the [MIT License](http://opensource.org/licenses/MIT).
