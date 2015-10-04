(function(){
    var WeatherService = function($http) {
        return {
            getWeather: function() {
                var weather = { temp: {}, clouds: null };
                $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=Oahu,at&units=metric&callback=JSON_CALLBACK').success(function(data) {
                    if (data) {
                        if (data.main) {
                            weather.temp.current = (data.main.temp) * 9 / 5 + 32;
                            weather.temp.min = (data.main.temp_min) * 9 / 5 + 32;
                            weather.temp.max = (data.main.temp_max) * 9 / 5 + 32;
                        }
                        weather.clouds = data.clouds ? data.clouds.all : undefined;
                    }
                });

                return weather;
            }
        };
    };

    WeatherService.$inject = ['$http'];
    angular.module("myApp.services").factory("WeatherService", WeatherService);
}());
