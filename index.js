function listConnection( $scope) {
	$scope.connections = JSON.parse(localStorage['connectionHistory']);
	//console.log( 'ok');

//	$scope.connections = [
//	                'learn angular',
//	                'build an angular app'];
	
}