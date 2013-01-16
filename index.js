function listConnection( $scope) {	  	
  $scope.connections = JSON.parse(localStorage['connectionHistory']);
}
