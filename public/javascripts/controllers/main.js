angular.module('myApp')
	.controller('indexCtrl', function($scope, Auth, House){
		$scope.isLoggedIn = Auth.isLoggedIn();
		$scope.username = Auth.isLoggedIn().name;
		$scope.logOut = function() {
			Auth.logOut();
		};

		$scope.isShow = false;
		$scope.showHowToUse = function() {
			$scope.isShow = !$scope.isShow;
		};
		$scope.closeHowToUse = function() {
			$scope.isShow = false;
		};

		//search
		$scope.searchWhereNumber = function() {
			// console.log($scope.where + $scope.peopleNumber);
			House.search($scope.where,$scope.peopleNumber);
		};
	});
