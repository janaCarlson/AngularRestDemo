(function() {
    var ItemController = function($scope, ItemFactory) {
        $scope.items = [];
        //ItemFactory.query(function(response) {
        //    $scope.items = response ? response : [];
        //});

        $scope.message = "A checklist";

        $scope.addItem = function(description) {
            new ItemFactory({
                description: description,
                checked: false
            }).$save(function(item) {
                    $scope.items.push(item);
                });
            $scope.newItem = "";
        };

        $scope.updateItem = function(item) {
            item.$update();
        };

        $scope.deleteItem = function(item) {
            item.$remove(function() {
                $scope.items.splice($scope.items.indexOf(item), 1);
            });
        };
    };

    ItemController.$inject = ['$scope', 'ItemFactory'];
    angular.module("myApp.controllers").controller("ItemController", ItemController);

}());
