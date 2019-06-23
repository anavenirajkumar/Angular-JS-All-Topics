// Create a Module
let app = angular.module('GroceryApp',[]);

// Create a Controller
app.controller('GroceryAppCtrl',function($scope) {
    $scope.item = null;
    $scope.itemsArray = [];
    $scope.editMode = false;
    $scope.addItem = function() {
        if($scope.item !== null){
            // if Item Not Exists
            if($scope.itemsArray.indexOf($scope.item.toUpperCase()) === -1){
                $scope.itemsArray.push($scope.item.toUpperCase());
                $scope.item = null;
            }
            else {
                alert(`Dude! ${$scope.item.toUpperCase()} is Already Exists`);
                $scope.item = null;
            }
        }
        else{
            alert('Enter At least one item Dude');
        }
    };
    $scope.ONEditMode = function() {
      $scope.editMode = true;
    };
    $scope.OFFEditMode = function() {
        $scope.editMode = false;
    };
    $scope.deleteItem = function(index) {
      $scope.itemsArray.splice(index,1);
    };
    $scope.replaceItem = function(index,item) {
        $scope.itemsArray.splice(index,1,item);
    };
});