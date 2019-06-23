// Create a  Module
let app = angular.module('GoodMorningApp',[]);

// Create a Controller
app.controller('GoodMorningAppCtrl',function($scope) {
   $scope.username = null;
   $scope.number = null;
   $scope.numberArray = [];
   $scope.time = null;
   $scope.wishMessage = null;
   $scope.createArray = function() {
        if($scope.number !== null){
            $scope.numberArray = [];
            for(let i=0; i<$scope.number; i++){
                $scope.numberArray[i] = i+1;
            }
        }
        else{
            $scope.numberArray = [];
        }
   };
   $scope.wishMsg = function() {
        if($scope.time !== null){
            if($scope.time >=0 && $scope.time <= 12){
                $scope.wishMessage = 'Good Morning';
            }
            else if($scope.time >12 && $scope.time <= 17){
                $scope.wishMessage = 'Good Afternoon';
            }
            else if($scope.time >17 && $scope.time <= 23){
                $scope.wishMessage = 'Good Evening';
            }
            else{
                $scope.wishMessage = 'Enter Proper Time';
            }
        }
        else{
            $scope.wishMessage = '';
        }
   };
});