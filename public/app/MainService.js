'use strict';
/* Services */
angular
	.module('MainApp')
	.factory('MainService', ['$http', '$q', MainService]);

function MainService($http, $q) {

	var path = "";
	var factory = {};
	var deferred = $q.defer();

	factory.getOrders = function () {
		path = "orders";
		var deferred = $q.defer();
		return $http.get(path).then(function (response) {
			deferred.resolve(response);
			return deferred.promise;
		}, function (response) {
			deferred.reject(response);
			return deferred.promise;
		});
	};

	

	return factory;

};