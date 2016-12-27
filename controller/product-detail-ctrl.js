/**
 * Created by zhouxiaoting on 2016/12/27.
 */
angular
    .module( 'ohapp' )
    .controller( 'ProductDetailCtrl', function ProductDetailCtrl( $scope, $injector ) {
        var $http = $injector.get( '$http' );
        var $location = $injector.get('$location');
        var $state = $injector.get( '$state' );
        var $timeout = $injector.get( '$timeout' );
        var $config = $injector.get( '$config' );
        var $session = $injector.get('$session');

        // var userId = $session.get('auth')._id
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
