angular.module('listControllerModule', [])

.controller("ListController", ["$scope", "GroceryService", function($scope, GroceryService){
    $scope.groceryList = {};
    $scope.groceryList.title = "For dinner";
    $scope.groceryList.items = GroceryService.groceryItems;

    $scope.editItem = function(id) {
        $scope.itemToEdit = GroceryService.findById(id);
    /* for(var i = 0; i<$scope.groceryList.items.length; i++) {
        if ($scope.groceryList.items[i].id == id){
            $scope.groceryList.items[i].itemName
        }
    } */
    return $scope.itemToEdit;
    } 


    $scope.saveItem = function(newItem) {
        var newItem = newItem;
        GroceryService.saveItem(newItem);
   }
}])