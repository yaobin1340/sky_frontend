angular.module('ohapp').factory('Myshopone', function ($config, $http) {

	var Myshopone = function () {
		this.items = [];
		this.busy = false;
		this.after = '';
		this.page = 1;
		this.end = false;
	};

	Myshopone.prototype.nextPage = function () {
		if (this.busy) return;
		if (this.end) return;
		this.busy = true;

		$http({
			method: 'POST',
			url: $config.api_uri + '/Apiuser/my_team_shop',
			data: {page:this.page},
		}).success(function (data) {
			if (data.success) {
				if(!data.my_team_list.length){
					this.end = true;
					return
				}
				var items = data.my_team_list;
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

	return Myshopone;

});