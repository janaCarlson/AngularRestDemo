(function() {
    var WeatherCtrl = function($scope, WeatherService) {
        $scope.message = "You have reached the weather page!";
        $scope.weather = WeatherService.getWeather();
    };

    WeatherCtrl.$inject = ['$scope', 'WeatherService'];
    angular.module("myApp.controllers").controller("WeatherCtrl", WeatherCtrl);
}());
