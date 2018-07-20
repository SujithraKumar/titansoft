	angular
		.module('MainApp')
		.directive('rightPanel', function () {
		return {
			restrict: "E",
			scope: false,
			templateUrl: 'app/views/rightPanel.html',
			link: function ($scope, element, attrs, toaster) {
			}
		};
	})
	.directive('titanFooter', function () {
		return {
			restrict: "E",
			scope: false,
			template: '<footer class="ftr-mgn">'+
					    '<hr/>'+
					    '<div class="row add-color footer-styl pt-2">'+
					        '<div class="col-sm-2 ">'+
					            '<span>Refund policy</span>'+
					        '</div>'+
					        '<div class="col-sm-2">'+
					            '<span>Privacy policy</span>'+
					        '</div>'+
					        '<div  class="col-sm-2">'+
					            '<span>Terms of service</span>'+
					        '</div>'+  
					    '</div>'+
					'</footer>',
			link: function ($scope, element, attrs, toaster) {
			}
		};
	});