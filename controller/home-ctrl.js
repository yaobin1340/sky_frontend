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
		$scope.shops.busy = true;
		$scope.shops.lat = '';
		$scope.shops.lng = '';
		$scope.isReady = false;

		$scope.getIndex = function(){
		    $http({
                method: 'POST',
                url: $config.api_uri + '/Apiftontend/index',
                data: {},
            }).success(function (data) {
                if (data.success) {
                    $http({
                        method: 'GET',
                        url:$config.api_uri + '/Apiftontend/use_QQmap',
                        data:{lat:$scope.shops.lat,lng:$scope.shops.lng}
                    }).success(function (data) {
                        console.log(data)
                    })
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