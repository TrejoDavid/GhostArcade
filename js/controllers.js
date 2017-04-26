(function(){
	'use strict'
var app = angular.module('ForecastApp',['application'])
app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) {
    $scope.fiveDay = data;
  });
}]);

})();



