angular.module('app')
.controller('HomeCtrl', function ($scope, $location, $window, UserSvc) {

  if(UserSvc.isLoggedIn()){
	  	var user = UserSvc.getUser().then(function(response){
		    $scope.currentUser = response;
	  	})
 	}

})
