// Type definitions for AngularCryptography (mdo-angular-cryptography module)
// Project: https://github.com/middleout/angular-cryptography
// Definitions by: Andrei Gabreanu <andrei.gabreanu@middleout.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module mdo.angular-cryptography {
    interface ICriptService {
        encrypt(message: string);
        encrypt(message: string, key: string);
        decrypt(message: string);
        decrypt(message: string, key: string);
    }
}
