angular
	.module('ohapp')
	.controller('HomeCtrl', function HomeCtrl($scope, $injector, $window, Shops) {
		var $http = $injector.get('$http');
		var $location = $injector.get('$location');
		var $state = $injector.get('$state');
		var $timeout = $injector.get('$timeout');
		var $config = $injector.get('$config');
		var $session = $injector.get('$session');

		// var userId = $session.get('auth')._id

		$scope.api_uri = $config.api_uri;
		$scope.currentPage = 0;
		$scope.scroll_switch = 1;
		$scope.shops = new Shops();


		$http({
			method: 'POST',
			url: $config.api_uri + '/Apiftontend/index',
			data: {},
		}).success(function (data) {
			if (data.success) {
				//.....
			} else {
				$mdToast.show(
					$mdToast.simple()
						.content(data.error_msg)
						.hideDelay(2000)
				);
			}

		})


		$scope.loadMore = function () {
			// $scope.scroll_switch = -1;
			$scope.currentPage += 1
			$http({
				method: 'POST',
				url: $config.api_uri + '/Apiftontend/index_loaddata',
				data: {page:$scope.currentPage},
			}).success(function (data) {
				if (data.success) {
					$scope.shop_list = data.shop_list
				} else {
					$mdToast.show(
						$mdToast.simple()
							.content(data.error_msg)
							.hideDelay(2000)
					);
				}

			})
		}


	});