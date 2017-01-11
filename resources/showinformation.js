angular.module('ohapp').factory('Showinformation', function ($config, $http) {

	var Showinformation = function () {
		this.items = [];
		this.busy = false;
		this.after = '';
		this.page = 1;
		this.end = false;
	};

	Showinformation.prototype.nextPage = function () {
		if (this.busy) return;
		if (this.end) return;
		this.busy = true;

		$http({
			method: 'POST',
			url: $config.api_uri + '/Apiftontend/show_information',
			data: {page:this.page},
		}).success(function (data) {
			if (data.success) {
				if(!data.my_income_list.length){
					this.end = true;
					return
				}
				var items = data.my_income_list;
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

	return Showinformation;

});