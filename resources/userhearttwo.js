angular.module('ohapp').factory('Userhearttwo', function ($config, $http) {

	var Userhearttwo = function () {
		this.items = [];
		this.busy = false;
		this.after = '';
		this.page = 1;
		this.end = false;
	};

	Userhearttwo.prototype.nextPage = function (tab_type) {
		if (this.busy) return;
		if (this.end) return;
		this.busy = true;

		$http({
			method: 'POST',
			url: $config.api_uri + '/Apiuser/user_heart_loaddata',
			data: {page:this.page,tab_type:tab_type},
		}).success(function (data) {
			if (data.success) {
				if(!data.user_heart_list.length){
					this.end = true;
					return
				}
				var items = data.user_heart_list;
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

	return Userhearttwo;

});