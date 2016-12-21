angular
	.module('ohapp')
	.controller('ShopDetailCtrl', function ShopDetailCtrl($scope, $injector,$stateParams) {
		var $http = $injector.get('$http');
		var $location = $injector.get('$location');
		var $state = $injector.get('$state');
		var $timeout = $injector.get('$timeout');
		var $config = $injector.get('$config');
		var $session = $injector.get('$session');
		var $mdDialog = $injector.get('$mdDialog');
		var $mdMedia = $injector.get('$mdMedia');
		var $mdToast = $injector.get('$mdToast');

		$scope.api_uri = $config.api_uri;
		var currIndex = 0;

		$http({
			method: 'POST',
			url: $config.api_uri + '/Apiftontend/shop_detail',
			data: {shop_id:$stateParams.shop_id},
		}).success(function (data) {
			if (data.success) {
				$scope.shop_detail = data.shop_detail
			} else {
				$mdToast.show(
					$mdToast.simple()
						.content(data.error_msg)
						.hideDelay(2000)
				);
			}

		})

		$scope.myInterval = 5000;
		var slides = $scope.slides = [];

		slides.push({
			image: '/assets/images/shop.jpg',
			id: currIndex++
		});
		slides.push({
			image: '/assets/images/shop.jpg',
			id: currIndex++
		});

	});