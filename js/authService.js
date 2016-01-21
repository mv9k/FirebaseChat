(function(){
    'use strict';

    angular.module('authService', [])
        .service('authService', authService);

    authService.$inject = ['$firebaseAuth'];


    function authService($firebaseAuth) {
        var ref = new Firebase("https://blinding-fire-7673.firebasio.com");
        var auth = $firebaseAuth(ref);

        return auth;
    }


    //as.authUser = function() {
    //    return $firebaseAuth(ref);
    //};


}());

