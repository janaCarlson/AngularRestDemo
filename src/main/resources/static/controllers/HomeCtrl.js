(function() {
    var HomeCtrl = function($scope) {
            $scope.message = "You have reached the about page!";
        $scope.location = 'About Page';
        };

    HomeCtrl.$inject = ['$scope'];
    angular.module("myApp.controllers").controller("HomeCtrl", HomeCtrl);
}());
