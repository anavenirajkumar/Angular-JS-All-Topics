// Create a Module
let app = angular.module('CalculatorApp',[]);


// Create a Controller
app.controller('CalculatorAppCtrl',function($scope) {
    $scope.operator = '+';
    $scope.firstNumber = null;
    $scope.secondNumber = null;
    $scope.result = 'RESULT';
    $scope.changeOperator = function(symbol) {
        $scope.operator = symbol;
    };

    $scope.calculate = function() {
        switch($scope.operator){
            case '+':
                $scope.result =  $scope.firstNumber + $scope.secondNumber;
                break;
            case '-':
                $scope.result =  $scope.firstNumber - $scope.secondNumber;
                break;
            case '/':
                $scope.result =  $scope.firstNumber / $scope.secondNumber;
                break;
            case '*':
                $scope.result =  $scope.firstNumber * $scope.secondNumber;
                break;
        }
    };
    $scope.clearData = function() {
        $scope.operator = '+';
        $scope.firstNumber = null;
        $scope.secondNumber = null;
        $scope.result = 'RESULT';
    };
});