angular.module('ohapp').factory('Withdrawlist', function ($config, $http) {

    var Withdrawlist = function () {
        this.items = [];
        this.busy = false;
        this.after = '';
        this.page = 1;
        this.end = false;
    };

    Withdrawlist.prototype.nextPage = function () {
        if (this.busy) return;
        if (this.end) return;
        this.busy = true;

        $http({
            method: 'POST',
            url: $config.api_uri + '/Apiuser/list_withdraw_loaddata',
            data: {page:this.page},
        }).success(function (data) {
            if (data.success) {
                if(!data.withdraw_list.length){
                    this.end = true;
                    return
                }
                var items = data.withdraw_list;
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

    return Withdrawlist;

});
