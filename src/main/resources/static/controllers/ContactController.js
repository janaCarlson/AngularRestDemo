(function() {
    var ContactController = function($scope) {
        $scope.message = "Contact Us! Jk, this is a fake page"
    };

    ContactController.$inject = ['$scope'];
    angular.module("myApp.controllers").controller("ContactController", ContactController);

}());
