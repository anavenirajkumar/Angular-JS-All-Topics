// Create a Module
let app = angular.module('LoginApp',[]);

// Create Controller
app.controller('LoginAppCtrl',function($scope) {
    $scope.username = null;
    $scope.email = null;
    $scope.password = null;
    $scope.check = null;
});