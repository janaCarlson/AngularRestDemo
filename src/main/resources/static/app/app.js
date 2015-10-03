(function(){
    angular.module("myApp.controllers", []);
    angular.module("myApp.services", []);
    angular.module("myApp", ["ngResource", "ngRoute", "myApp.controllers", "myApp.services"])
    .config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '../partials/home.html',
                controller  : 'ItemController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : '../partials/about.html',
                controller  : 'AboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : '../partials/contact.html',
                controller  : 'ContactController'
            });
    });
}());
