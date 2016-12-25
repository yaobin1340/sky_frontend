angular
.module( 'ohRoutes', [] )
.provider( '$routes', function $routesProvider()
{
    this.routes = {};

    this.routes['main'] = {
        url: '/',
        abstract: true,
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    };

    this.routes[ 'main.home' ] =
    {
        url: '^/home',
        title: 'Home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    };

    this.routes[ 'main.user_center' ] =
    {
        url: '^/user_center',
        title: 'user_center',
        templateUrl: 'views/user_center.html',
        controller: 'UserCenterCtrl'
    };

    this.routes[ 'main.shop_detail' ] =
    {
        url: '^/shop_detail?shop_id',
        title: 'shop_detail',
        templateUrl: 'views/shop_detail.html',
        controller: 'ShopDetailCtrl'
    };
    this.routes[ 'main.list_orders' ] =
    {
        url: '^/list_orders',
        title: 'list_orders',
        templateUrl: 'views/list_orders.html',
        controller: 'ListOrdersCtrl'
    };
    this.routes[ 'main.mall_index' ] =
    {
        url: '^/mall_index',
        title: 'mall_index',
        templateUrl: 'views/mall_index.html',
        controller: 'MallIndexCtrl'
    };
    this.routes[ 'main.show_information' ] =
    {
        url: '^/show_information',
        title: 'show_information',
        templateUrl: 'views/show_information.html',
        controller: 'ShowInformationCtrl'
    };
    this.routes[ 'main.withdraw' ] =
    {
        url: '^/withdraw',
        title: 'withdraw',
        templateUrl: 'views/withdraw.html',
        controller: 'WithdrawCtrl'
    };
    this.routes[ 'main.withdraw_list' ] =
    {
        url: '^/withdraw_list',
        title: 'withdraw_list',
        templateUrl: 'views/withdraw_list.html',
        controller: 'WithdrawListCtrl'
    };
    this.routes[ 'main.money_log_list' ] =
    {
        url: '^/money_log_list',
        title: 'money_log_list',
        templateUrl: 'views/money_log_list.html',
        controller: 'MoneyLogListCtrl'
    };

    this.routes['signin'] = {
        url : '/signin',
        templateUrl : 'views/signin.html',
        controller : 'SigninSignupCtrl'
    };

    this.routes['signup'] = {
        url : '/signup',
        templateUrl : 'views/signup.html',
        controller : 'SigninSignupCtrl'
    };

    this.routes['forgot_pwd'] = {
        url : '/forgot_pwd',
        templateUrl : 'views/forgot_pwd.html',
        controller : 'SigninSignupCtrl'
    };
    this.routes['information_revise'] = {
        url : '/information_revise',
        templateUrl : 'views/information_revise.html',
        controller : 'InformationReviseCtrl'
    };

    this.$get = function()
    {
        return( this.routes );
    };
}
);
