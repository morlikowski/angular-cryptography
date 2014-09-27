angular.module('mdo-angular-cryptography')
    .factory('$crypto', [ function ($rootScope, httpBuffer) {
            return {
                encrypt: function(message, key = null) {
                    return CryptoJS.AES.encrypt(message, key ).toString();
                },

                decrypt: function(message, key = null) {
                    return CryptoJS.AES.decrypt(message, key).toString(CryptoJS.enc.Utf8)
                }
            };
        }
    ])
    .config([
        '$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push([
                '$rootScope', '$q', 'httpBuffer', function ($rootScope, $q, httpBuffer) {
                    return {
                        responseError: function (rejection) {
                            if (rejection.status === 401 && !rejection.config.ignoreAuthModule) {
                                var deferred = $q.defer();
                                httpBuffer.append(rejection.config, deferred);
                                $rootScope.$broadcast('event:auth-loginRequired', rejection);
                                return deferred.promise;
                            }

                            if ( rejection.status === 410 && !rejection.config.ignoreAuthModule) {
                                var deferred = $q.defer();
                                httpBuffer.append(rejection.config, deferred);
                                $rootScope.$broadcast('event:auth-expired', rejection);
                                return deferred.promise;
                            }

                            if (rejection.status === 403 && !rejection.config.ignoreAuthModule) {
                                var deferred = $q.defer();
                                httpBuffer.append(rejection.config, deferred);
                                $rootScope.$broadcast('event:auth-notAuthorized', rejection);
                                return deferred.promise;
                            }

                            // otherwise, default behaviour
                            return $q.reject(rejection);
                        }
                    };
                }
            ]);
        }
    ]);

