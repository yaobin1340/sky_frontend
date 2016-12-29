/**
 * Created by zhouxiaoting on 2016/12/22.
 */
angular
	.module('ohapp')
	.controller('InformationReviseCtrl', function InformationReviseCtrl($scope, $injector, $stateParams) {
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
		$scope.img_input = ''
		$http({
			method: 'POST',
			url: $config.api_uri + '/Apiuser/information_revise',
			data: {},
		}).success(function (data) {
			if (data.success) {
				$scope.area_list = data.area_list;
				$scope.city_list = data.city_list;
				$scope.provinces_list = data.provinces_list;
				$scope.user_info = data.user_info;

				data.provinces_list.forEach(function(v,k){
					if(v.code == data.user_info.province_code){
						$scope.province_code = data.provinces_list[k];
						return;
					}
				})
				data.city_list.forEach(function(v,k){
					if(v.code == data.user_info.city_code){
						$scope.city_code = data.city_list[k];
						return;
					}
				})
				data.area_list.forEach(function(v,k){
					if(v.code == data.user_info.area_code){
						$scope.area_code = data.area_list[k];
						return;
					}
				})
			} else {
				$mdToast.show(
					$mdToast.simple()
						.content(data.error_msg)
						.hideDelay(2000)
				);
			}

		})

		$scope.change_provinces = function(){
			// console.log($scope.province_code.code)

			$http({
				method: 'POST',
				url: $config.api_uri + '/Apiftontend/get_city',
				data: {province_code:$scope.province_code.code},
			}).success(function (data) {
				if (data.success) {
					$scope.area_list = {};
					$scope.city_list = data.city_list;
					$scope.city_code = data.city_list[0];
				} else {
					$mdToast.show(
						$mdToast.simple()
							.content(data.error_msg)
							.hideDelay(2000)
					);
				}
			})
		}

		$scope.$watch('city_code.code',function(newValue,oldValue){
			$http({
				method: 'POST',
				url: $config.api_uri + '/Apiftontend/get_area',
				data: {city_code:newValue},
			}).success(function (data) {
				if (data.success) {
					$scope.area_list = data.area_list;
					$scope.area_code = data.area_list[0];
				} else {
					$mdToast.show(
						$mdToast.simple()
							.content(data.error_msg)
							.hideDelay(2000)
					);
				}
			})

		});

		$scope.save_information_revise = function(){
			post_data = {
				province_code:$scope.province_code.code,
				city_code:$scope.city_code.code,
				area_code:$scope.area_code.code,
			}

			if($("#img_input").val()){
				post_data.img_input = $("#img_input").val()
			}

			$http({
				method: 'POST',
				url: $config.api_uri + '/Apiuser/save_information_revise',
				data: post_data,
			}).success(function (data) {
				if (data.success) {
					$mdToast.show(
						$mdToast.simple()
							.content('修改成功')
							.hideDelay(2000)
					);
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
