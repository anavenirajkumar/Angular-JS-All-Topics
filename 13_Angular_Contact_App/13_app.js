// Create a Module
let app = angular.module('ContactApp',[]);

// Create a Controller
app.controller('ContactAppCtrl',function($scope,$http) {
    $scope.persons = null;
    $scope.selectedPerson = null;
    $http.get('https://api.myjson.com/bins/codsl').then(function(response) {
        $scope.persons = response.data.contacts;
    });
    $scope.selectPerson = function(index) {
        $scope.selectedPerson = $scope.persons[index];
    };
});