function listConnection( $scope) {	  	
	oConnections = JSON.parse(localStorage['connectionHistory']);
  
  	$scope.connections = [];
  	var oTempData = [];
  	
	oConnections.forEach( function( oData) {
		if( oData.type == "login") {
			oTempData = oData;
		} else {
		
			oTempData['current_session'] = ( oData.type == "current");
			
			oTempData['date_logout'] = oData.date;
			
			oDateLogin = new Date( oTempData['date']);
			oDateLogout = new Date( oTempData['date_logout']);
			
			diff = dateDiff( oDateLogin.getTime(), oDateLogout.getTime());
			
			oTempData['diff'] = diff;
			
			$scope.connections.push( oTempData);
		}
	});
	
	//$scope.connections = JSON.parse(localStorage['connectionHistory']);


}

function dateDiff(date1, date2){
    var diff = {}                           // Initialisation du retour
    var tmp = date2 - date1;
 
    tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60;                    // Extraction du nombre de secondes
 
    tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
    diff.min = tmp % 60;                    // Extraction du nombre de minutes
 
    tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
    diff.hour = tmp % 24;                   // Extraction du nombre d'heures
     
    tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
    diff.day = tmp;
     
    return diff;
}

