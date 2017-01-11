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




    });
