
var app = angular.module("FirebaseChatApp", ["ngResource"]);

// this factory returns a synchronized array of chat messages
app.factory("chatMessages", ["$resource",
    function($resource) {
        // create a reference to the database location where we will store our data
        //var randomRoomId = Math.round(Math.random() * 100000000);
        //var ref = new Firebase("https://blinding-fire-7673.firebaseio.com/chatroom");

        var resource = $resource("https://blinding-fire-7673.firebaseio.com/chatroom/:id.json");

        // this uses AngularFire to create the synchronized array
        //return $firebaseArray(ref);

        return resource;
    }
]);

//app.service("authService", [
//
//    function authUser() {
//
//        var ref = new Firebase("https://blinding-fire-7673.firebasio.com/chatroom");
//
//
//    }
//
//]);

//app.controller("userCtrl", []);

app.controller("ChatCtrl", ["$scope", "chatMessages",
    // we pass our new chatMessages factory into the controller
    function($scope, chatMessages) {
        $scope.user = "user";
        $scope.username = '';
        $scope.colorSelect = 0;

        // we add chatMessages array to the scope to be used in our ng-repeat
        $scope.messages = chatMessages.get();

        // a method to create new messages; called by ng-submit
        $scope.addMessage = function() {
            // calling $add on a synchronized array is like Array.push(),
            // except that it saves the changes to our database!
            //$scope.messages.$add({
            //    from: $scope.username,
            //    content: $scope.message
            //});

            chatMessages.save({
                from: $scope.username,
                content: $scope.message
            }, function() {
                $scope.messages = chatMessages.get();
            });


            // reset the message input
            $scope.message = "";

        };

        //// if the messages are empty, add something for fun!
        //$scope.messages.$loaded(function() {
        //    if ($scope.messages.length === 0) {
        //        $scope.messages.$add({
        //            from: "Firebase Docs",
        //            content: "Hello world!"
        //        });
        //    }
        //});
    }
]);
