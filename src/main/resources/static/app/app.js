(function () {
    angular.module("myApp.controllers", []);
    angular.module("myApp.services", []);
    angular.module("myApp.filters", []);
    angular.module("myApp.directives", []);
    angular.module("myApp", ["ngResource", "ngRoute", "myApp.controllers", "myApp.services", "myApp.directives"])
        .config(function ($routeProvider) {
            $routeProvider

                // route for the home page
                .when('/', {
                    templateUrl: '../partials/paradise.html'
                })

                // route for the about page
                .when('/supplies', {
                    templateUrl: '../partials/item.html',
                    controller: 'ItemCtrl'
                })

                // route for the contact page
                .when('/passengers', {
                    templateUrl: '../partials/user.html',
                    controller: 'UserCtrl'
                })
                .when('/weather', {
                    templateUrl: '../partials/weather.html',
                    controller: 'WeatherCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        })
        .directive('weatherIcon', function() {
            return {
                restrict: 'E', replace: true,
                scope: {
                    cloudiness: '@'
                },
                controller: function($scope) {
                    $scope.imgurl = function() {
                        var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
                        if ($scope.cloudiness < 20) {
                            return baseUrl + 'sunny.png';
                        } else if ($scope.cloudiness < 90) {
                            return baseUrl + 'partly_cloudy.png';
                        } else {
                            return baseUrl + 'cloudy.png';
                        }
                    };
                },
                template: '<div style="float:left"><img ng-src="{{ imgurl() }}"></div>'
            };
        })
        .filter('temp', function($filter) {
            return function(input, precision) {
                if (!precision) {
                    precision = 1;
                }
                var numberFilter = $filter('number');
                return numberFilter(input, precision) + '\u2109';
            };
        });
}());
