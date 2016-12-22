angular
	.module('ohapp')
	.controller('SigninSignupCtrl', function SigninSignupCtrl($scope, $injector, $rootScope) {
		var $http = $injector.get('$http');
		var $config = $injector.get('$config');
		var $timeout = $injector.get('$timeout');
		var $session = $injector.get('$session');
		var $window = $injector.get('$window')
		var $location = $injector.get('$location');
		var $mdDialog = $injector.get('$mdDialog');
		var $mdMedia = $injector.get('$mdMedia');
		var $mdToast = $injector.get('$mdToast');

		$scope.page = $rootScope.$page

		$scope.signin = function () {
			$http({
				method: 'POST',
				url: $config.api_uri + '/Apiftontend/check_login',
				data: $scope.user,
			}).success(function (data) {
				if(data.success){
					$session.set('auth', data)
					$session.save()
					$location.path('/user_center')
				}else{
					$mdToast.show(
						$mdToast.simple()
							.content(data.error_msg)
							.hideDelay(2000)
					);
				}

			})
		}

		$scope.get_yzm = function(){
			$http({
				method: 'POST',
				url: $config.api_uri + '/Apiftontend/get_yzm_forget',
				data: {mobile:$scope.mobile},
			}).success(function (data) {
				if(data.success){
					$session.set('yzm', data.yzm)
					$session.save()
					$mdToast.show(
						$mdToast.simple()
							.content('短信发送成功')
							.hideDelay(2000)
					);
				}else{
					$mdToast.show(
						$mdToast.simple()
							.content(data.error_msg)
							.hideDelay(2000)
					);
				}

			})
		}

		$scope.signup = function () {
			if (!$scope.signupForm['firstName'].$valid) {
				$scope.signupForm.firstName.$touched = true
				return;
			}
			if (!$scope.signupForm['lastName'].$valid) {
				$scope.signupForm.lastName.$touched = true
				return;
			}
			if (!$scope.signupForm['emailAddress'].$valid) {
				$scope.signupForm.emailAddress.$touched = true
				return;
			}
			if (!$scope.signupForm['password'].$valid) {
				$scope.signupForm.password.$touched = true
				return;
			}

			$http
				.post($config.api_uri + '/signup', $scope.user)
				.success(function (data) {
					$rootScope.$isLogin = true;
					$session.set('auth', data)
					$session.save()
					$rootScope.firstName = data.firstName
					$rootScope.lastName = data.lastName
					$mdDialog.hide();
				})
				.error(function (data) {
					$scope.apiError = data.error
				})
		}

		$scope.showSignin = function (ev) {
			var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
			$mdDialog.show({
				controller: 'SigninSignupCtrl',
				templateUrl: 'views/modals/signin-signup.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: useFullScreen
			});
			$rootScope.$page = 'signIn'
		}

		$scope.showSignup = function (ev) {
			var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
			$mdDialog.show({
				controller: 'SigninSignupCtrl',
				templateUrl: 'views/modals/signin-signup.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: useFullScreen
			});
			$rootScope.$page = 'signUp'
		}

		$scope.forgotPassword = function (ev) {
			var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
			$mdDialog.show({
				controller: 'SigninSignupCtrl',
				templateUrl: 'views/modals/signin-signup.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: useFullScreen
			});
			$rootScope.$page = 'forgotPassword'
		}

		$scope.submitForm = function () {
			console.log('表单提交');
		}

		window.wait = 90
		$scope.get_yzm = function(obj){
			if(!$("#doc-vld-phone-2").val()){
				alert('请输入手机号5码');
				return false;
			}
//        {{literal}}
			if(!(/^1[34578]\d{9}$/.test($("#doc-vld-phone-2").val()))){
				alert("手机号码有误，请重填");
				return false;
			}
//        {{/literal}}
			$.getJSON("{{site_url url='/frontend/get_yzm'}}/"+$("[name='mobile']").val(),function(data){
				if(data.error != 0){
					alert(data.msg);
					return false;
				}
				time($("#get_yzm").find('input'))
			});
		}
		$scope.time = function(o) {
			if (window.wait == 0) {
				o.attr('disabled',false);
				o.val('获取验证码');
				window.wait = 90;
			} else {
				o.attr('disabled',true);
				o.val("重新发送"+(window.wait))
				window.wait--;
				setTimeout(function() {
						time(o)
					},
					1000)
			}
		}

	});