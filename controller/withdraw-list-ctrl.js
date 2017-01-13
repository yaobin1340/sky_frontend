/**
 * Created by zhouxiaoting on 2016/12/25.
 */
angular
    .module( 'ohapp' )
    .controller( 'WithdrawListCtrl', function WithdrawListCtrl( $scope, $injector,Withdrawlist  ) {
        var $http = $injector.get( '$http' );
        var $location = $injector.get('$location');
        var $state = $injector.get( '$state' );
        var $timeout = $injector.get( '$timeout' );
        var $config = $injector.get( '$config' );
        var $session = $injector.get('$session');

        // var userId = $session.get('auth')._id
            $scope.currentPage = 0;
            $scope.scroll_switch = 1;
            $scope.withdrawlist = new Withdrawlist();

    });
