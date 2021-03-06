angular
    .module( 'ohapp' )
    .controller( 'WithdrawCtrl', function WithdrawCtrl( $scope, $injector) {
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

            $http({
                    method: 'POST',
                    url: $config.api_uri + '/Apiuser/withdraw',
                    data: {}
            }).success(function (data) {
                    if(data.success){
                            $scope.user_info = data.user_info
                            $scope.withdraw_info = data.withdraw_info
                    }else{
                            $mdToast.show(
                                $mdToast.simple()
                                    .content(data.error_msg)
                                    .hideDelay(2000)
                            );
                    }

            })

    });
