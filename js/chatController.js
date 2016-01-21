(function(){
    'use strict';

    angular.module('chatController', [])
        .controller('chatController', chatController);

    chatController.$inject = ["$scope", "chatMessages", chatController];

    function chatController($scope, chatMessages) {
        $scope.user = "user";
        $scope.username = '';
        $scope.colorSelect = 0;

        // we add chatMessages array to the scope to be used in our ng-repeat
        $scope.messages = chatMessages;

        // a method to create new messages; called by ng-submit
        $scope.addMessage = function () {
            // calling $add on a synchronized array is like Array.push(),
            // except that it saves the changes to our database!
            $scope.messages.$add({
                from: $scope.username,
                content: $scope.message
            });

            // reset the message input
            $scope.message = "";


        };

        $scope.messages.$loaded(function() {
            if ($scope.messages.length === 0) {
                $scope.messages.$add({
                    from: "Firebase Docs",
                    content: "Hello world!"
                });
            }
        });

    }

}());
