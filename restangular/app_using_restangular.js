
var app = angular.module("FirebaseChatApp", ["restangular"]);

app.factory("chatMessages", ["Restangular",
    function(Restangular) {

        var restangular = Restangular
            .setBaseUrl("https://blinding-fire-7673.firebaseio.com/")
            .setRequestSuffix(".json")
            .setFullResponse(true)
            .service("chatroom");


        return restangular;

    }
]);


app.controller("ChatCtrl", ["$scope", "chatMessages",

    function($scope, chatMessages) {
        $scope.user = "user";
        $scope.username = '';
        $scope.colorSelect = 0;
        var getMessage = function() {
            chatMessages.one().get().then(function(response) {
                $scope.messages = response.data.plain();
                $scope.data = response.data;
            });
        };


        getMessage();





        $scope.addMessage = function() {

            chatMessages.post({
                from: $scope.username,
                content: $scope.message
            }).then(function() {
                console.log('add successful!');
                getMessage();
            });

        };

        $scope.deleteMessage = function(key) {

            console.log('deleting key=' + key);

            $scope.data.customDELETE(key).then(function() {
                getMessage();
            });
            //
            //$scope.entry = chatMessages.get({id: key}, function() {
            //    $scope.entry.$delete({id: key}, function() {
            //        console.log('delete successful!');
            //        $scope.messages = chatMessages.get();
            //    });
            //});
            //
            //

        };

        $scope.updateMessage = function(key) {

            //var newVal = window.prompt("New value:");
            //console.log("new value for key = " + key + ': ' + newVal);
            //
            //$scope.entry = chatMessages.get({id: key}, function() {
            //    $scope.entry.content = newVal;
            //    $scope.entry.$update({id: key}, function() {
            //        console.log('update successful!');
            //        $scope.messages = chatMessages.get();
            //    });
            //});

        };

    }
]);
