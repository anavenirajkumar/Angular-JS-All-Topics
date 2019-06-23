// Create a Module
let app = angular.module('HBSApp',[]);

// Create a Controller
app.controller('HBSAppCtrl',function($scope) {
    $scope.eating = false;
    $scope.coding = false;
    $scope.sleeping = false;
});