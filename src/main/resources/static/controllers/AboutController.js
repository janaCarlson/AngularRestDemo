(function() {
    var AboutController = function($scope) {
            $scope.message = "You have reached the about page!"
        };

    //AboutController.$inject = ['$scope'];
    angular.module("myApp.controllers").controller("AboutController", AboutController);
}());
