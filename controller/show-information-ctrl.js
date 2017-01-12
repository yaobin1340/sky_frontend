
angular
    .module('ohapp')
    .controller('ShowInformationCtrl', function ShowInformationCtrl($scope, $injector,$stateParams) {
        var $http = $injector.get('$http');
        var $location = $injector.get('$location');
        var $state = $injector.get('$state');
        var $timeout = $injector.get('$timeout');
        var $config = $injector.get('$config');
        var $session = $injector.get('$session');
        var $mdDialog = $injector.get('$mdDialog');
        var $mdMedia = $injector.get('$mdMedia');
        var $mdToast = $injector.get('$mdToast');

        var currIndex = 0;
            $scope.myInterval = 5000;
            var slides = $scope.slides = [];

            slides.push({
                    image: '/assets/images/banner.jpg',
                    id: currIndex++
            });
            slides.push({
                    image: '/assets/images/banner1.jpg',
                    id: currIndex++
            });
            slides.push({
                    image: '/assets/images/banner1.jpg',
                    id: currIndex++
            });

        $http({
            method: 'POST',
            url: $config.api_uri + '/Apiftontend/show_information',
            data: {},
        }).success(function (data) {
            if (data.success) {
                $scope.jukuan = data.jukuan.djk.total;
                $scope.jukuaned =data.jukuan.zjjk.date;
                $scope.jukuanes = data.jukuan.zjk.total;
                $scope.data = data.data;
                $scope.ysday = data.ysday.per6.total;
                console.log($scope.ysday)
                // $scope.date = data.data.date;
                // $scope.price6 = data.data.ax6_price;
                // $scope.price12 = data.data.ax12_price;
                // $scope.price24 = data.data.ax24_price;
                // console.log($scope.price6)
                // console.log($scope.date)
                // $scope.ysday = data.ysday;
                // $scope.phangcity = data.phangcity;
                // $scope.lminfo = data.lminfo;

            } else {
                $mdToast.show(
                    $mdToast.simple()
                        .content(data.error_msg)
                        .hideDelay(2000)
                );
            }

        })

    });
