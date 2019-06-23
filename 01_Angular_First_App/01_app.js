// Create a Module
let app = angular.module('FirstApp',[]);

// Create a Controller
app.controller('FirstAppCtrl',function($scope) {
    // Logic
    $scope.username = null;
});

// Create a Controller
app.controller('WishMessageCtrl',function($scope) {
    $scope.number = null;
    $scope.message = null;
    $scope.displayWishMessage = function() {
        console.log($scope.number);
        if($scope.number !== null){
            if($scope.number >= 0 && $scope.number <= 12){
                $scope.message = 'Good Morning';
            }
            else if($scope.number >12 && $scope.number <= 17){
                $scope.message = 'Good Afternoon';
            }
            else if($scope.number >17 && $scope.number <= 23){
                $scope.message = 'Good Evening';
            }
            else{
                $scope.message = 'Enter Proper Time';
            }
        }
        else{
            $scope.message = '';
        }
    };
});