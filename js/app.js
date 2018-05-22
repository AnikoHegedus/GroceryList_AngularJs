var app = angular.module('grocery_list', ['listControllerModule']);

app.service('GroceryService', function(){
    var groceryService = {};

    groceryService.groceryItems = [
        {'id': 1, 'completed': true, itemName: 'Milk', date: 2018-05-21},
        {'id': 2, 'completed': true, itemName: 'Bread', date: 2018-05-21},
        {'id': 3, 'completed': true, itemName: 'Coffee', date: 2018-05-21},
    ];

    groceryService.findById = function(id) {
        for (item in groceryService.groceryItems) {
            if (groceryService.groceryItems[item].id == id) {
                return groceryService.groceryItems[item]
            }
        }
    }

    groceryService.getNewId = function() {
        if (groceryService.newId) {
            groceryService.newId++;
            return groceryService.newId;
        } else {
            var maxId = _.max(groceryService.groceryItems, function(newId){
                return newId.id;
            });
            groceryService.newId = maxId.id + 1;
            return groceryService.newId;
        }
    }

    groceryService.saveItem = function(newItem) {
         var itemToEdit = groceryService.findById(newItem.id);
        /* alert(itemToEdit);
        if(!itemToEdit){
            alert(newItem.itemName); */ 
            newItem.id = groceryService.getNewId();
            newItem.completed = 'completed';
            newItem.date = new Date();
            if (itemToEdit && itemToEdit.itemName == itemToAdd.itemName){
                alert('itemToEdit if ' + itemToEdit);
                //groceryService.groceryItems.push(itemToAdd);
            } else {
                alert('itemToEdit else ' + itemToEdit);
                var itemToAdd = _.clone(newItem);
                groceryService.groceryItems.push(itemToAdd);
            }
        //}
    }
    return groceryService;
});