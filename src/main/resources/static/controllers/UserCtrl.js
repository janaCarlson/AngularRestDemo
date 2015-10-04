(function() {
    var UserCtrl = function($scope, UserFactory) {
        $scope.message = "Add your passengers here";
        $scope.header = "Passengers";
        $scope.users = [];
        //UserFactory.query(function(response) {
        //    $scope.users = response ? response : [];
        //});

        $scope.addUser = function(newUser) {
            new UserFactory({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                checked: false
            }).$save(function(user) {
                    $scope.users.push(user);
                });
            $scope.newUser = "";
        };

        $scope.updateUser = function(user) {
            user.$update();
        };

        $scope.deleteUser = function(user) {
            user.$remove(function() {
                $scope.users.splice($scope.users.indexOf(user), 1);
            });
        };
    };

    UserCtrl.$inject = ['$scope', 'UserFactory'];
    angular.module("myApp.controllers").controller("UserCtrl", UserCtrl);

}());