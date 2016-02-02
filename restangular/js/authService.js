(function(){
    'use strict';

    angular.module('authService', [])
        .service('authService', authService);

    authService.$inject = ['$firebaseAuth'];


    function authService($firebaseAuth) {
        var ref2 = new Firebase("https://blinding-fire-7673.firebasio.com/UserAuth");
        var auth = $firebaseAuth(ref2);

        return auth;
    }


    //as.authUser = function() {
    //    return $firebaseAuth(ref);
    //};


}());

