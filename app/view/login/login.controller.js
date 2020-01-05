﻿(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];

    function LoginController($location, AuthenticationService, FlashService) {
			var vm = this;
			vm.login = login;
			vm.departments = [
				{text:'영아부', value:'1'},
				{text:'유아부', value:'2'},
				{text:'유치부', value:'3'},
				{text:'유년부', value:'4'},
				{text:'초등부', value:'5'},
				{text:'중등부', value:'6'},
				{text:'고등부', value:'7'},
				{text:'영어예배', value:'8'}
			];

			vm.authtypes = [
				{text:'관리자', value:'admin'},
				{text:'선생님', value:'teacher'}
			];

		  console.log("LOGIN");
			(function initController() {
					// reset login status
					AuthenticationService.ClearCredentials();
			})();

			function login() {
					vm.dataLoading = true;
					AuthenticationService.Login(vm.department, vm.password, vm.authtype, function (response) {

						console.log(response);
							if (response.success) {
									AuthenticationService.SetCredentials(vm.department, vm.password, vm.authtype);
									$location.path('/main');
							} else {
									$.notify(response.message);
									vm.dataLoading = false;
							}
					});
			};
    }

})();
