(function() {
    var ContactCtrl = function($scope) {
        $scope.message = "Contact Us! Jk, this is a fake page";
        $scope.location = "Contact Page";
    };

    ContactCtrl.$inject = ['$scope'];
    angular.module("myApp.controllers").controller("ContactCtrl", ContactCtrl);

}());
