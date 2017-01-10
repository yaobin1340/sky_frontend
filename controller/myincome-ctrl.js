/**
 * Created by zhouxiaoting on 2016/12/25.
 */
angular
    .module( 'ohapp' )
    .controller( 'MyIncomeCtrl', function MyIncomeCtrl( $scope, $injector ,Myincome) {
        var $http = $injector.get( '$http' );
        var $location = $injector.get('$location');
        var $state = $injector.get( '$state' );
        var $timeout = $injector.get( '$timeout' );
        var $config = $injector.get( '$config' );
        var $session = $injector.get('$session');

	    $scope.currentPage = 0;
	    $scope.scroll_switch = 1;
	    $scope.myincome = new Myincome();



    });
