	angular
		.module('MainApp')
		.controller('MainController', ['$scope', '$rootScope','$location','$window', 'MainService', MainController]);

function MainController($scope, $rootScope, $location,$window, MainService) {

	// ****variable declaration*****

	$scope.submitted= false;



	var userDetails= $window.localStorage.getItem("userDetails");
	userDetails = JSON.parse(userDetails);
	if(userDetails){
		$rootScope.userDetails = userDetails;
	}else{
		$rootScope.userDetails={};
		$rootScope.userDetails.state="";
		$rootScope.userDetails.country="";
	}
	
	var orders= $window.localStorage.getItem("orders");
	orders = JSON.parse(orders);
	if(orders){
		$scope.orders = orders;
	}else{
		$scope.orders={};

	}

	var state=$window.localStorage.getItem("state"); 
	if(state){
	$scope.state = state;	
	}
	else{
	$scope.state="/customerInformation";
	$window.localStorage.setItem("state",$scope.state);
	}

	$location.path($scope.state);

	//DummyObjects

	$scope.countries=["Canada", "United States"];
	$scope.UnitedStates=["Alamba","california","Delaware","Florida","Georgia"];
	$scope.Canada=["Alberta","Manitoba","Ontario","Quebec","yukon"];
	$scope.states=[];

	// Function Declaration
	$scope.subtotal=0;
	$scope.total=0;
	$scope.shipping=10;

	$scope.getOrders = function () {

		MainService.getOrders().then(function (result) {
			if (result.data) {
				MainService.getOrders().then(function (result) {
					if (result.data) {
						$scope.orders = result.data;
						$window.localStorage.setItem("orders",JSON.stringify($scope.orders));
						for(let i=0;i< $scope.orders.length ;i++){
							$scope.subtotal+=$scope.orders[i].originalAmount*$scope.orders[i].quantity;
						}
						$scope.total=$scope.subtotal+$scope.shipping;
					}

				}, function (error) {

				});

			}

		}, function (error) {
		
		});

	}

	$scope.MoveToShipping=function(){

		//formValidation Check
		$scope.submitted= true;
		var validate = $scope.formValidate();

		if(!validate){
			return;
		}

		
		$window.localStorage.setItem("userDetails",JSON.stringify($rootScope.userDetails));
		$scope.state="/shippingMethod";
		$window.localStorage.setItem("state",$scope.state);
		$location.path($scope.state);


	}

	$scope.formValidate = function(){

		if($rootScope.userDetails){
			if(!$rootScope.userDetails.email){
				return false;
			}
			if(!$rootScope.userDetails.firstName){
				return false;
			}
			if(!$rootScope.userDetails.lastName){
				return false;
			}
			if(!$rootScope.userDetails.address){
				return false;
			}
			if(!$rootScope.userDetails.email){
				return false;
			}
			if(!$rootScope.userDetails.country){
				return false;
			}
			if(!$rootScope.userDetails.state){
				return false;
			}
			if(!$rootScope.userDetails.zipcode){
				return false;
			}
			if(!$rootScope.userDetails.phone){
				return false;
			}

		}
		else{
			return false;
		}

		return true;

	}

	$scope.setCountry = function(country){
		$rootScope.userDetails.country = country;
		if(country == 'Canada'){
			$scope.states =$scope.Canada;
		}
		else if(country == 'United States'){
			$scope.states =$scope.UnitedStates;
		}
	}

	$scope.setState = function(state){
		$rootScope.userDetails.state = state;
	}

	$scope.returnToCI= function(){

		$scope.state="/customerInformation";
		$window.localStorage.setItem("state",$scope.state);
		$location.path($scope.state);
		
	}


	$scope.MoveToPayment = function(){

		$scope.state="/paymentMethod";
		$window.localStorage.setItem("state",$scope.state);
		$location.path($scope.state);

	}

	$scope.checkoutOrder= false;
	$scope.Checkout = function(){
			$scope.checkoutOrder= true;
			$window.localStorage.removeItem("state");
			$window.localStorage.removeItem("userDetails");

	}


	$scope.getOrders();

};