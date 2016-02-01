(function(){
    'use strict';

    angular.module('chatMessages', [])
        .factory('chatMessages', ["$resource",
            function($resource) {
                // create a reference to the database location where we will store our data
                var randomRoomId = Math.round(Math.random() * 100000000);
                var ref = new Firebase("https://blinding-fire-7673.firebaseio.com/chatroom");


                // this uses AngularFire to create the synchronized array
                return $firebaseArray(ref);
            }
        ]);

}());
