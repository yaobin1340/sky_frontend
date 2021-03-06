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
    this.routes[ 'main.myincome' ] =
    {
        url: '^/myincome',
        title: 'myincome',
        templateUrl: 'views/myincome.html',
        controller: 'MyIncomeCtrl'
    };
    this.routes[ 'main.user_heart' ] =
    {
        url: '^/user_heart',
        title: 'user_heart',
        templateUrl: 'views/user_heart.html',
        controller: 'UserHeartCtrl'
    };
    this.routes[ 'main.user_heart_1' ] =
    {
        url: '^/user_heart_1',
        title: 'user_heart_1',
        templateUrl: 'views/user_heart_1.html',
        controller: 'UserHeartCtrl'
    };
    this.routes[ 'main.user_heart_2' ] =
    {
        url: '^/user_heart_2',
        title: 'user_heart_2',
        templateUrl: 'views/user_heart_2.html',
        controller: 'UserHeartCtrl'
    };
    this.routes[ 'main.shop_heart' ] =
    {
        url: '^/shop_heart',
        title: 'shop_heart',
        templateUrl: 'views/shop_heart.html',
        controller: 'UserHeartCtrl'
    };
    this.routes[ 'main.shop_heart_1' ] =
    {
        url: '^/shop_heart_1',
        title: 'shop_heart_1',
        templateUrl: 'views/shop_heart_1.html',
        controller: 'UserHeartCtrl'
    };
    this.routes[ 'main.shop_heart_2' ] =
    {
        url: '^/shop_heart_2',
        title: 'shop_heart_2',
        templateUrl: 'views/shop_heart_2.html',
        controller: 'UserHeartCtrl'
    };

    this.routes[ 'main.my_team' ] =
    {
        url: '^/my_team',
        title: 'my_team',
        templateUrl: 'views/my_team.html',
        controller: 'MyTeamCtrl'
    };
    this.routes[ 'main.my_team_1' ] =
    {
        url: '^/my_team_1',
        title: 'my_team_1',
        templateUrl: 'views/my_team_1.html',
        controller: 'MyTeamCtrl'
    };
    this.routes[ 'main.my_team_2' ] =
    {
        url: '^/my_team_2',
        title: 'my_team_2',
        templateUrl: 'views/my_team_2.html',
        controller: 'MyTeamCtrl'
    };
    this.routes[ 'main.my_shop_order' ] =
    {
        url: '^/my_shop_order',
        title: 'my_shop_order',
        templateUrl: 'views/my_shop_order.html',
        controller: 'MyShopOrderCtrl'
    };
    this.routes[ 'main.my_shop_center' ] =
    {
        url: '^/my_shop_center',
        title: 'my_shop_center',
        templateUrl: 'views/my_shop_center.html',
        controller: 'MyShopCenterCtrl'
    };
    this.routes[ 'main.shop_order_manage' ] =
    {
        url: '^/shop_order_manage',
        title: 'shop_order_manage',
        templateUrl: 'views/shop_order_manage.html',
        controller: 'ShopOrderManageCtrl'
    };
    this.routes[ 'main.shop_order_submit' ] =
    {
        url: '^/shop_order_submit',
        title: 'shop_order_submit',
        templateUrl: 'views/shop_order_submit.html',
        controller: 'ShopOrderSubmitCtrl'
    };
    this.routes[ 'main.cashier_desk' ] =
    {
        url: '^/cashier_desk',
        title: 'cashier_desk',
        templateUrl: 'views/cashier_desk.html',
        controller: 'CashierDeskCtrl'
    };
    this.routes[ 'main.product_reviews' ] =
    {
        url: '^/product_reviews',
        title: 'product_reviews',
        templateUrl: 'views/product_reviews.html',
        controller: 'ProductReviewsCtrl'
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
    this.routes['signup1'] = {
        url : '/signup1',
        templateUrl : 'views/signup1.html',
        controller : 'SigninSignupCtrl'
    };
    this.routes['forgot_pwd'] = {
        url : '/forgot_pwd',
        templateUrl : 'views/forgot_pwd.html',
        controller : 'SigninSignupCtrl'
    };
    this.routes['forgot_pwd1'] = {
        url : '/forgot_pwd1',
        templateUrl : 'views/forgot_pwd1.html',
        controller : 'SigninSignupCtrl'
    };
    this.routes['information_revise'] = {
        url : '/information_revise',
        templateUrl : 'views/information_revise.html',
        controller : 'InformationReviseCtrl'
    };
    this.routes['modify_password'] = {
        url : '/modify_password',
        templateUrl : 'views/modify_password.html',
        controller : 'InformationReviseCtrl'
    };
    this.routes['product_detail'] = {
        url : '/product_detail',
        templateUrl : 'views/product_detail.html',
        controller : 'ProductDetailCtrl'
    };
    this.routes['order_cart'] = {
        url : '/order_cart',
        templateUrl : 'views/order_cart.html',
        controller : 'OrderCartCtrl'
    };
    this.routes['manage_shop_info'] = {
        url : '/manage_shop_info',
        templateUrl : 'views/manage_shop_info.html',
        controller : 'ManageShopInfoCtrl'
    };
    this.routes['my_add_orders'] = {
        url : '/my_add_orders',
        templateUrl : 'views/my_add_orders.html',
        controller : 'MyAddOrdersCtrl'
    };
    this.routes['confirmation_order'] = {
        url : '/confirmation_order',
        templateUrl : 'views/confirmation_order.html',
        controller : 'ConfirmationOrderCtrl'
    };
    this.routes['receive_address_manage'] = {
        url : '/receive_address_manage',
        templateUrl : 'views/receive_address_manage.html',
        controller : 'ReceiveAddressManageCtrl'
    };
    this.routes['user_registration_protocol'] = {
        url : '/user_registration_protocol',
        templateUrl : 'views/user_registration_protocol.html',
        controller : 'SigninSignupCtrl'
    };

	this.routes['apply_shop'] = {
		url: '/apply_shop',
		title: 'apply_shop',
		templateUrl: 'views/apply_shop.html',
		controller: 'ApplyShopCtrl'
	};

    this.$get = function()
    {
        return( this.routes );
    };
}
);
