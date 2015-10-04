(function() {
    var NavbarCtrl = function($scope) {
        $scope.error = false;
        $scope.onLogin = function() {
            if ($scope.user.email === 'a@a.com') {
                $scope.user.name = 'Jana';
                $scope.error = false;
                $('#loginModal').modal('hide');
            } else {
                $scope.error = true;
            }
        }
    };

    NavbarCtrl.$inject = ['$scope'];
    angular.module("myApp.controllers").controller("NavbarCtrl", NavbarCtrl);
}());
