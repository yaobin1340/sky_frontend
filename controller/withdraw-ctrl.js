angular
    .module( 'ohapp' )
    .controller( 'WithdrawCtrl', function WithdrawCtrl( $scope, $injector,Withdrawlist ) {
        var $http = $injector.get( '$http' );
        var $location = $injector.get('$location');
        var $state = $injector.get( '$state' );
        var $timeout = $injector.get( '$timeout' );
        var $config = $injector.get( '$config' );
        var $session = $injector.get('$session');
        var $mdDialog = $injector.get('$mdDialog');
        var $mdMedia = $injector.get('$mdMedia');
        var $mdToast = $injector.get('$mdToast');
        // var userId = $session.get('auth')._id
         $scope.currentPage = 0;
         $scope.scroll_switch = 1;
         $scope.withdrawlist = new Withdrawlist();
        // console.log($scope.withdrawlist)

    });
