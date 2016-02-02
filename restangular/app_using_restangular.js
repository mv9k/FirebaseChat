
var app = angular.module("FirebaseChatApp", ["restangular"]);

// this factory returns a synchronized array of chat messages
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


app.controller("ChatCtrl", ["$scope", "chatMessages", "Restangular",

    function($scope, chatMessages) {
        $scope.user = "user";
        $scope.username = '';
        $scope.colorSelect = 0;


        chatMessages.one().get().then(function(response) {
            $scope.messages = response.data.plain();
        });


        $scope.addMessage = function() {


            //chatMessages.save({
            //    from: $scope.username,
            //    content: $scope.message
            //}, function() {
            //    $scope.messages = chatMessages.get();
            //});
            //
            //
            //
            //$scope.message = "";

        };

        $scope.deleteMessage = function(key) {
            //console.log('deleting key=' + key);
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
