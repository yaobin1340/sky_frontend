/**
 * Created by zhouxiaoting on 2016/12/26.
 */
angular
    .module( 'ohapp' )
    .controller( 'MyShopOrderCtrl', function MyShopOrderCtrl( $scope, $injector ) {
        var $http = $injector.get( '$http' );
        var $location = $injector.get('$location');
        var $state = $injector.get( '$state' );
        var $timeout = $injector.get( '$timeout' );
        var $config = $injector.get( '$config' );
        var $session = $injector.get('$session');

        // var userId = $session.get('auth')._id




    });
