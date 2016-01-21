(function(){
    'use strict';

    angular.module('userController', [])
        .controller('userController', userController);

    userController.$inject = ['authService'];

    function userController(authService) {
        var uc = this;

        uc.authUser = authUser;

        function authUser() {
            authService.$authWithPassword({
                email: "mv9kjw@gmail.com",
                password: "password"
            }).then(function() {
                console.log('success');
            });
        }
    }
}());
