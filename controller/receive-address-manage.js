/**
 * Created by zhouxiaoting on 2017/1/3.
 */
angular
    .module( 'ohapp' )
    .controller( 'ReceiveAddressManageCtrl', function ReceiveAddressManageCtrl( $scope, $injector ) {
        var $http = $injector.get( '$http' );
        var $location = $injector.get('$location');
        var $state = $injector.get( '$state' );
        var $timeout = $injector.get( '$timeout' );
        var $config = $injector.get( '$config' );
        var $session = $injector.get('$session');


    });
