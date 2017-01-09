angular
	.module('ohapp')
	.controller('HomeCtrl', function HomeCtrl($scope, $injector, $window, Shops) {
		var $http = $injector.get('$http');
		var $location = $injector.get('$location');
		var $state = $injector.get('$state');
		var $timeout = $injector.get('$timeout');
		var $config = $injector.get('$config');
		var $session = $injector.get('$session');
		var $mdDialog = $injector.get('$mdDialog');
        var $mdMedia = $injector.get('$mdMedia');
        var $mdToast = $injector.get('$mdToast');

		// var userId = $session.get('auth')._id

		$scope.api_uri = $config.api_uri;
		$scope.currentPage = 0;
		$scope.scroll_switch = 1;
		$scope.shops = new Shops();
		$scope.shops.busy = true;
		$scope.shops.lat = '';
		$scope.shops.lng = '';
		$scope.isReady = false;
		$scope.showProvince = false;
		$scope.getFlag = 1;

		$scope.$on('$viewContentLoaded', function() {
			window.wxConfig();
		});

		$scope.getIndex = function(){
		    $http({
                method: 'POST',
                url: $config.api_uri + '/Apiftontend/index',
                data: {lat:$scope.shops.lat,lng:$scope.shops.lng}
            }).success(function (data) {
                if (data.success) {
                    $scope.area_name = data.area_name;
                    $scope.shops.area_code = data.area_code;
                    $scope.shops.busy = false;
                    $scope.shops.nextPage()
                } else {
                    $mdToast.show(
                        $mdToast.simple()
                            .content(data.error_msg)
                            .hideDelay(2000)
                    );
                }

            })
		}

        $scope.get_province = function(){
            $scope.showProvince = !$scope.showProvince;
            $scope.getFlag = 1;
            if($scope.showProvince == true){
                $http({
                    method: 'POST',
                    url: $config.api_uri + '/Apiftontend/get_province',
                }).success(function (data) {
                    if (data.success) {
                        $scope.province_city_area = data.province_list;
                    } else {
                        $mdToast.show(
                            $mdToast.simple()
                                .content(data.error_msg)
                                .hideDelay(2000)
                        );
                    }
                })
            }

        }

        $scope.getCityArea = function(code,getFlag,name){
            if(getFlag == 1){
                $http({
                    method: 'POST',
                    url: $config.api_uri + '/Apiftontend/get_city',
                    data:{province_code:code}
                }).success(function (data) {
                    if (data.success) {
                        $scope.province_city_area = data.city_list;
                    } else {
                        $mdToast.show(
                            $mdToast.simple()
                                .content(data.error_msg)
                                .hideDelay(2000)
                        );
                    }
                })
                $scope.getFlag = 2;
            }else if(getFlag == 2){
                $http({
                    method: 'POST',
                    url: $config.api_uri + '/Apiftontend/get_area',
                    data:{city_code:code}
                }).success(function (data) {
                    if (data.success) {
                        $scope.province_city_area = data.area_list;
                    } else {
                        $mdToast.show(
                            $mdToast.simple()
                                .content(data.error_msg)
                                .hideDelay(2000)
                        );
                    }

                })
                $scope.getFlag = 3;
            }else{
                $scope.showProvince = !$scope.showProvince;
                $scope.getFlag = 1;
                $scope.shops.area_code = code;
                $scope.area_name = name;
                $scope.shops.items = [];
                $scope.shops.end = false;
                $scope.shops.busy = false;
                $scope.shops.page = 1;
                $scope.shops.nextPage();

            }
        }

		window.filterByEnter = function(e){
			if(e.keyCode==13){
				$scope.$apply(function(){
					$scope.shops.shop_name = document.getElementById('filter').value;
					$scope.shops.items = [];
					$scope.shops.end = false;
					$scope.shops.busy = false;
					$scope.shops.page = 1;
					$scope.shops.nextPage();
				})
			}
		};










	});