/**
 * Created by zhouxiaoting on 2016/12/26.
 */
angular
    .module( 'ohapp' )
    .controller( 'UserHeartCtrl', function UserHeartCtrl( $scope, $injector,Shopheart,Shopheartone,Shophearttwo) {
        var $http = $injector.get( '$http' );
        var $location = $injector.get('$location');
        var $state = $injector.get( '$state' );
        var $timeout = $injector.get( '$timeout' );
        var $config = $injector.get( '$config' );
        var $session = $injector.get('$session');

            $scope.currentPage = 0;
            $scope.scroll_switch = 1;
            $scope.shopheart = new Shopheart();
            $scope.shopheartone = new Shopheartone();
            $scope.shophearttwo = new Shophearttwo();

    });



