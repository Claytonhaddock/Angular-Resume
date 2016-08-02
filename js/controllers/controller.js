var angularResume = angular.module('angularResume', []);

angularResume.controller('JobListCtrl',["$scope", "$http", function($scope, $http) {
	
	$http.get('myInfo.json').success(function(data){
		$scope.jobs = data.jobs;
		$scope.schools = data.schools;
		$scope.skills = data.skills;
	}).error(function(data){
		alert('Error: server host required for AJAX to load content');
	})
	
}]);