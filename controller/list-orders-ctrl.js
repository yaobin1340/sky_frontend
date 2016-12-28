angular
	.module('ohapp')
	.controller('ListOrdersCtrl', function ListOrdersCtrl($scope, $injector, $stateParams,Orders) {
		var $http = $injector.get('$http');
		var $location = $injector.get('$location');
		var $state = $injector.get('$state');
		var $timeout = $injector.get('$timeout');
		var $config = $injector.get('$config');
		var $session = $injector.get('$session');
		var $mdDialog = $injector.get('$mdDialog');
		var $mdMedia = $injector.get('$mdMedia');
		var $mdToast = $injector.get('$mdToast');

		$scope.currentPage = 0;
		$scope.scroll_switch = 1;
		$scope.orders = new Orders();

		$http({
			method: 'POST',
			url: $config.api_uri + '/Apiuser/list_orders',
			data: {},
		}).success(function (data) {
			if (data.success) {
				$scope.total = data.all_total
			} else {
				$mdToast.show(
					$mdToast.simple()
						.content(data.error_msg)
						.hideDelay(2000)
				);
			}

		})

		$scope.loadMore = function () {
			$scope.currentPage += 1
			$http({
				method: 'POST',
				url: $config.api_uri + '/Apiuser/list_orders_loaddata',
				data: {page:$scope.currentPage},
			}).success(function (data) {
				if (data.success) {
					$scope.order_list = data.order_list
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
