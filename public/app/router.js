angular.module('MainApp', ['ngRoute'])

	.config(function ($routeProvider, $locationProvider) {


		$routeProvider
			.when('/customerInformation', {
				templateUrl: 'app/views/customerInformation.html',

			})
			.when('/shippingMethod', {
				templateUrl: 'app/views/shipping.html',
				


			})
			.when('/paymentMethod', {
				templateUrl:'app/views/payment.html'

			})


	})