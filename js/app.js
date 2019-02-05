var app = angular.module("cvapp", []); 
app.controller("genericController", function($scope,$http) {
    $scope.products = [];
    $http.get('https://yedvaruos.github.io/model/details.json').then(function(response) {
        $scope.products = response.data;
     });
    
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    }    
});