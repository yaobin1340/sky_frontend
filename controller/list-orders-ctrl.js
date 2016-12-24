angular
    .module('ohapp')
    .controller('ListOrdersCtrl', function ListOrdersCtrl($scope, $injector,$stateParams) {
        var $http = $injector.get('$http');
        var $location = $injector.get('$location');
        var $state = $injector.get('$state');
        var $timeout = $injector.get('$timeout');
        var $config = $injector.get('$config');
        var $session = $injector.get('$session');
        var $mdDialog = $injector.get('$mdDialog');
        var $mdMedia = $injector.get('$mdMedia');
        var $mdToast = $injector.get('$mdToast');
            $scope.oneAtATime = true;

            $scope.groups = [
                    {
                            title: 'Dynamic Group Header - 1',
                            content: 'Dynamic Group Body - 1'
                    },
                    {
                            title: 'Dynamic Group Header - 2',
                            content: 'Dynamic Group Body - 2'
                    }
            ];

            $scope.items = ['Item 1', 'Item 2', 'Item 3'];

            $scope.addItem = function() {
                    var newItemNo = $scope.items.length + 1;
                    $scope.items.push('Item ' + newItemNo);
            };

            $scope.status = {
                    isCustomHeaderOpen: false,
                    isFirstOpen: true,
                    isFirstDisabled: false
            };

    });
