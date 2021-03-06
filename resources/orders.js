angular.module('ohapp').factory('Orders', function ($config, $http) {

	var Orders = function () {
		this.items = [];
		this.busy = false;
		this.after = '';
		this.page = 1;
		this.end = false;
	};

	Orders.prototype.nextPage = function () {
		if (this.busy) return;
		if (this.end) return;
		this.busy = true;

		$http({
			method: 'POST',
			url: $config.api_uri + '/Apiuser/list_orders_loaddata',
			data: {page:this.page},
		}).success(function (data) {
			if (data.success) {
				if(!data.order_list.length){
					this.end = true;
					return
				}
				var items = data.order_list;
				for (var i = 0; i < items.length; i++) {
					this.items.push(items[i]);
				}
				this.after = "t3_" + this.items[this.items.length - 1].id;
				this.busy = false;
				this.page += 1;
			} else {

			}

		}.bind(this))
	};

	return Orders;

});