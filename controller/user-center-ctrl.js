angular
	.module('ohapp')
	.controller('UserCenterCtrl', function UserCenterCtrl($scope, $injector) {
		var $http = $injector.get('$http');
		var $location = $injector.get('$location');
		var $state = $injector.get('$state');
		var $timeout = $injector.get('$timeout');
		var $config = $injector.get('$config');
		var $session = $injector.get('$session');
		var $mdDialog = $injector.get('$mdDialog');
		var $mdMedia = $injector.get('$mdMedia');
		var $mdToast = $injector.get('$mdToast');

		// var userId = $session.get('auth')._id;
		// console.log(userId)
		$scope.parseInt = parseInt;
		$scope.api_uri = $config.api_uri;
		$http({
			method: 'POST',
			url: $config.api_uri + '/Apiuser/index',
			data: {}
		}).success(function (data) {
			if(data.success){
				$scope.user_info = data.user_info
			}else{
				$mdToast.show(
					$mdToast.simple()
						.content(data.error_msg)
						.hideDelay(2000)
				);
			}

		})

		$scope.logout = function(){
			$session.purge('auth');
			$state.go('signin')
		}

	});