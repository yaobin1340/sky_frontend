/**
 * Created by zhouxiaoting on 2016/12/25.
 */
angular
    .module( 'ohapp' )
    .controller( 'MoneyLogListCtrl', function MoneyLogListCtrl( $scope, $injector,Moneyloglist) {
        var $http = $injector.get( '$http' );
        var $location = $injector.get('$location');
        var $state = $injector.get( '$state' );
        var $timeout = $injector.get( '$timeout' );
        var $config = $injector.get( '$config' );
        var $session = $injector.get('$session');
        var $mdDialog = $injector.get('$mdDialog');
        var $mdMedia = $injector.get('$mdMedia');
        var $mdToast = $injector.get('$mdToast')

        // var userId = $session.get('auth')._id
            $scope.testModals = function(ev,remark){
                $scope.remark = remark;
                    $mdDialog.show({
                            scope: $scope,
                            preserveScope: true,
                            templateUrl: 'views/modals/see_details.html',
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose: true,
                            fullscreen: true

                    });
            }
            $scope.currentPage = 0;
            $scope.scroll_switch = 1;
            $scope.moneyloglist = new Moneyloglist();


    });

