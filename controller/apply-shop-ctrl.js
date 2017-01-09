angular
	.module('ohapp')
	.controller('ApplyShopCtrl', function ApplyShopCtrl($scope, $injector, $window, Shops) {
		var $http = $injector.get('$http');
		var $location = $injector.get('$location');
		var $state = $injector.get('$state');
		var $timeout = $injector.get('$timeout');
		var $config = $injector.get('$config');
		var $session = $injector.get('$session');
		var $mdDialog = $injector.get('$mdDialog');
        var $mdMedia = $injector.get('$mdMedia');
        var $mdToast = $injector.get('$mdToast');

		$scope.reader = new FileReader();

		$scope.form = {     //用于绑定提交内容，图片或其他数据
			image:{},
		};
		$scope.thumb = {};      //用于存放图片的base64
		$scope.thumb_default = {    //用于循环默认的‘加号’添加图片的框
			1111:{}
		};

		$scope.img_upload = function(files) {       //单次提交图片的函数
			$scope.guid = (new Date()).valueOf();   //通过时间戳创建一个随机数，作为键名使用
			$scope.reader.readAsDataURL(files[0]);  //FileReader的方法，把图片转成base64

			$scope.reader.onload = function(ev) {
				var prev_img = document.getElementById("imgCompress");
				prev_img.src = ev.target.result;
				imgResult = reduceImage.compress(prev_img,100).src;
				$scope.$apply(function(){
					$scope.thumb[$scope.guid] = {
						imgSrc : imgResult,  //接收base64
						name : files[0]['name'],
						// size : Math.ceil(files[0]['size']/1024)
					}
				});
			};

			var data = new FormData();      //以下为像后台提交图片数据
			data.append('image', imgResult);
			// data.append('guid',$scope.guid);
			$http({
				method: 'post',
				url: '/comm/test-upload.php?action=success',
				data:data,
				headers: {'Content-Type': undefined},
				transformRequest: angular.identity
			}).success(function(data) {
				if (data.result_code == 'SUCCESS') {
					$scope.form.image[data.guid] = data.result_value;
					$scope.thumb[data.guid].status = 'SUCCESS';
					console.log($scope.form)
				}
				if(data.result_code == 'FAIL'){
					console.log(data)
				}
			})
		};

		$scope.img_del = function(key) {    //删除，删除的时候thumb和form里面的图片数据都要删除，避免提交不必要的
			var guidArr = [];
			for(var p in $scope.thumb){
				guidArr.push(p);
			}
			delete $scope.thumb[guidArr[key]];
			delete $scope.form.image[guidArr[key]];
		};
		$scope.submit_form = function(){    //图片选择完毕后的提交，这个提交并没有提交前面的图片数据，只是提交用户操作完毕后，
			//到底要上传哪些，通过提交键名或者链接，后台来判断最终用户的选择,整个思路也是如此
			$http({
				method: 'post',
				url: '/comm/test.php',
				data:$scope.form,
			}).success(function(data) {
				console.log(data);
			})
		};


		var reduceImage = {
			/**
			 * Receives an Image Object (can be JPG OR PNG) and returns a new Image Object compressed
			 * @param {Image} source_img_obj The source Image Object
			 * @param {Integer} quality The output quality of Image Object
			 * @return {Image} result_image_obj The compressed Image Object
			 */
			compress: function(source_img_obj, quality, output_format){
				var mime_type = "image/jpeg";
				if(output_format!=undefined && output_format=="png"){
					mime_type = "image/png";
				}
				var cvs = document.createElement('canvas');
				//naturalWidth真实图片的宽度
				// cvs.width = source_img_obj.naturalWidth + 100;
				// cvs.height = source_img_obj.naturalHeight + 100;
				// var xRate = 100 / source_img_obj.naturalWidth;
				// var yRate = 100 / source_img_obj.naturalHeight;
				cvs.width = 500;
				cvs.height = 270;
				var cvsContext = cvs.getContext('2d');
				// cvsContext.scale(xRate, yRate);
				var ctx = cvsContext.drawImage(source_img_obj, 0, 0,500,270);
				var newImageData = cvs.toDataURL(mime_type, quality/100);
				var result_image_obj = new Image();
				result_image_obj.src = newImageData;
				return result_image_obj;
			}
		};






		$scope.openMap = function(){
			$mdDialog.show({
				scope: $scope,
				preserveScope: true,
				templateUrl: 'views/modals/map.html',
				parent: angular.element(document.body),
				// targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: true

			});
		}

		$scope.closeDialog = function(){
			$mdDialog.hide();
		}










	});