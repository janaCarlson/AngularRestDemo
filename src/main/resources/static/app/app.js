(function(){
    angular.module("myApp.controllers", []);
    angular.module("myApp.services", []);
    angular.module("myApp", ["ngResource", "ngRoute", "myApp.controllers", "myApp.services"])
    .config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '../partials/paradise.html'
            })

            // route for the about page
            .when('/supplies', {
                templateUrl : '../partials/item.html',
                controller  : 'ItemCtrl'
            })

            // route for the contact page
            .when('/passengers', {
                templateUrl : '../partials/user.html',
                controller  : 'UserCtrl'
            })
            .when('/weather', {
                templateUrl: '../partials/weather.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
}());
